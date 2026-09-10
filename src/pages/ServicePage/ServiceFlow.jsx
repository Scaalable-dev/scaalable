import { useCallback, useEffect, useRef, useState } from "react";

import "./ServiceFlow.css";

import logoIcon from "../../assets/images/logo-icon.webp";
import { flowServices } from "./servicesData";

/* ==========================================================================
   LIQUID DATA SERVICE ENGINE

   DOM owns the core and the seven cards (real buttons, so they stay keyboard
   and screen-reader accessible). Canvas 2D owns everything fluid: the seven
   streams, their droplets, orbiting particles, ripples and the cursor field.

   Geometry is always measured from real DOM rects via ResizeObserver, so the
   streams stay welded to the cards at any size.

   State that the animation loop needs lives in refs, never React state — the
   loop must not re-subscribe on every hover.
   ========================================================================== */

/* Budget notes: cost is dominated by stroked path area, so the wide glow is
   drawn only for the highlighted stream and the spine is sampled just densely
   enough to stay smooth. Measured 16fps → 55fps in software rendering. */
const SAMPLES = 22; // points sampled along each stream per frame
const BASE_STRANDS = 7;
const ACTIVE_STRANDS = 11;
const TAIL = 4; // trailing segments drawn behind each droplet
const MAX_RIPPLES = 12;
const CURSOR_RADIUS = 115;

const lerp = (a, b, t) => a + (b - a) * t;

/* Cubic Bézier evaluation. */
const bezier = (p0, p1, p2, p3, t) => {
  const u = 1 - t;
  return (
    u * u * u * p0 + 3 * u * u * t * p1 + 3 * u * t * t * p2 + t * t * t * p3
  );
};

const hexToRgb = (hex) => {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};

const ServiceFlow = () => {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const coreRef = useRef(null);
  const cardRefs = useRef([]);

  const [active, setActive] = useState("web");
  const [hovered, setHovered] = useState(null);
  const [status, setStatus] = useState("WEB CHANNEL AMPLIFIED");

  /* --- refs mirrored from state for the animation loop --- */
  const activeRef = useRef(active);
  const hoveredRef = useRef(hovered);
  const surgeRef = useRef(0);
  const surgeTimerRef = useRef(0);
  const pulsesRef = useRef([]);
  const ripplesRef = useRef([]);
  const pointerRef = useRef({
    x: -999,
    y: -999,
    tx: -999,
    ty: -999,
    speed: 0,
    inside: false,
  });

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    hoveredRef.current = hovered;
  }, [hovered]);

  useEffect(() => () => clearTimeout(surgeTimerRef.current), []);

  /* ------------------------------------------------------------------ */
  /* Interaction handlers                                                */
  /* ------------------------------------------------------------------ */

  const spawnRipple = useCallback((x, y, accent, strength = 1) => {
    const pool = ripplesRef.current;
    if (pool.length >= MAX_RIPPLES) pool.shift();
    pool.push({ x, y, r: 6, life: 1, accent, strength });
  }, []);

  const handleCardEnter = (service) => () => {
    setHovered(service.id);
    setStatus(`${service.name.toUpperCase()} FLOW PREVIEW`);
  };

  const handleCardLeave = () => {
    setHovered(null);
    const current = flowServices.find((s) => s.id === activeRef.current);
    setStatus(`${current.name.toUpperCase()} CHANNEL AMPLIFIED`);
  };

  const handleCardClick = (service, index) => () => {
    setActive(service.id);
    setStatus(`${service.name.toUpperCase()} CHANNEL AMPLIFIED`);
    pulsesRef.current.push({ stream: index, t: 0, accent: service.accent });
  };

  /* Surge is a countdown in seconds, decremented by the loop — an absolute
     timestamp would mean calling performance.now() outside the loop. */
  const handleCoreClick = () => {
    surgeRef.current = 1.6;
    setStatus("ALL CHANNELS SURGING");

    flowServices.forEach((service, i) => {
      pulsesRef.current.push({ stream: i, t: 0, accent: service.accent });
    });

    clearTimeout(surgeTimerRef.current);
    surgeTimerRef.current = setTimeout(() => {
      const current = flowServices.find((s) => s.id === activeRef.current);
      setStatus(`${current.name.toUpperCase()} CHANNEL AMPLIFIED`);
    }, 1700);
  };

  const handleSurfaceClick = (event) => {
    /* Only empty space — cards and the core handle their own clicks. */
    if (event.target.closest("button")) return;

    const rect = wrapRef.current.getBoundingClientRect();
    spawnRipple(
      event.clientX - rect.left,
      event.clientY - rect.top,
      "#6366f1",
      0.8,
    );
  };

  /* ------------------------------------------------------------------ */
  /* Engine                                                              */
  /* ------------------------------------------------------------------ */

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: true });

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const geom = { core: null, nodes: [] };
    const colors = flowServices.map((s) => hexToRgb(s.accent));

    /* Droplet properties are precomputed once and reused every frame. */
    const droplets = flowServices.map((_, i) =>
      Array.from({ length: 20 }, (_, d) => ({
        t: (d / 20 + i * 0.13) % 1,
        speed: 0.16 + ((d * 37) % 11) / 100,
        size: 1.5 + ((d * 17) % 9) / 7,
      })),
    );

    /* Orbiting core particles. */
    const orbiters = Array.from({ length: 16 }, (_, i) => ({
      a: (i / 16) * Math.PI * 2,
      rad: 0.62 + ((i * 13) % 7) / 22,
      speed: 0.12 + ((i * 7) % 5) / 60,
      size: 1 + ((i * 5) % 4) / 3,
    }));

    let W = 0;
    let H = 0;
    let raf = 0;
    let running = true;
    let last = 0; /* set on the first frame, so no clock read during setup */
    let time = 0;

    const measure = () => {
      const rect = wrap.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      if (!W || !H) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const coreEl = coreRef.current;
      if (coreEl) {
        const c = coreEl.getBoundingClientRect();
        geom.core = {
          x: c.left - rect.left + c.width / 2,
          y: c.top - rect.top + c.height / 2,
          r: Math.max(c.width, c.height) / 2,
        };
      }

      geom.nodes = cardRefs.current.map((el) => {
        if (!el) return null;
        const n = el.getBoundingClientRect();
        return {
          x: n.left - rect.left + n.width / 2,
          y: n.top - rect.top + n.height / 2,
          r: Math.max(n.width, n.height) / 2,
        };
      });
    };

    /* Control points for one stream, cached per frame. */
    const pathOf = (i) => {
      const c = geom.core;
      const n = geom.nodes[i];
      if (!c || !n) return null;

      const dx = n.x - c.x;
      const dy = n.y - c.y;
      const len = Math.hypot(dx, dy) || 1;
      const ux = dx / len;
      const uy = dy / len;
      const px = -uy;
      const py = ux;

      const sx = c.x + ux * c.r * 0.88;
      const sy = c.y + uy * c.r * 0.88;
      const ex = n.x - ux * n.r * 0.92;
      const ey = n.y - uy * n.r * 0.92;

      const bow = len * 0.16 * (i % 2 === 0 ? 1 : -1);

      return {
        sx,
        sy,
        ex,
        ey,
        c1x: sx + ux * len * 0.34 + px * bow,
        c1y: sy + uy * len * 0.34 + py * bow,
        c2x: ex - ux * len * 0.34 + px * bow * 0.55,
        c2y: ey - uy * len * 0.34 + py * bow * 0.55,
        px,
        py,
        len,
      };
    };

    /* Cursor acts as a magnetic vortex: swirl plus outward push. */
    const distort = (x, y, out) => {
      const p = pointerRef.current;
      if (!p.inside) {
        out[0] = x;
        out[1] = y;
        return;
      }

      const dx = x - p.x;
      const dy = y - p.y;
      const d2 = dx * dx + dy * dy;

      if (d2 > CURSOR_RADIUS * CURSOR_RADIUS) {
        out[0] = x;
        out[1] = y;
        return;
      }

      const d = Math.sqrt(d2) || 1;
      const f = 1 - d / CURSOR_RADIUS;
      const strength = 0.55 + Math.min(p.speed / 22, 1) * 0.9;
      const ang = f * f * 1.15 * strength;
      const push = f * f * 24 * strength;
      const cos = Math.cos(ang);
      const sin = Math.sin(ang);

      out[0] = p.x + (dx * cos - dy * sin) + (dx / d) * push;
      out[1] = p.y + (dx * sin + dy * cos) + (dy / d) * push;
    };

    const pt = [0, 0];
    const baseX = new Float32Array(SAMPLES);
    const baseY = new Float32Array(SAMPLES);

    const drawStream = (i, dt) => {
      const path = pathOf(i);
      if (!path) return;

      const isActive = activeRef.current === flowServices[i].id;
      const isHover = hoveredRef.current === flowServices[i].id;
      const surging = surgeRef.current > 0;
      const hot = isActive || isHover || surging;

      const [r, g, b] = colors[i];

      /* Narrow screens get fewer strands — the streams are shorter there, so
         density still reads while the per-frame path count drops ~35%. */
      const dense = W > 420;
      const strandCount = hot
        ? dense
          ? ACTIVE_STRANDS
          : 8
        : dense
          ? BASE_STRANDS
          : 5;
      const amp = (hot ? 13 : 8) * (path.len / 240);
      const speed = hot ? 2.4 : 1.5;
      const alphaBoost = hot ? 1 : 0.62;

      /* Sample the spine once, with wave + cursor distortion applied. */
      for (let s = 0; s < SAMPLES; s++) {
        const t = s / (SAMPLES - 1);
        const x = bezier(path.sx, path.c1x, path.c2x, path.ex, t);
        const y = bezier(path.sy, path.c1y, path.c2y, path.ey, t);
        distort(x, y, pt);
        baseX[s] = pt[0];
        baseY[s] = pt[1];
      }

      /* Wide soft glow, highlighted stream only. A 20px+ stroke covers a lot of
         pixels; drawing it for all seven was the single biggest frame cost. */
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      if (hot) {
        ctx.strokeStyle = `rgba(${r},${g},${b},0.08)`;
        ctx.lineWidth = 20;
        ctx.beginPath();
        ctx.moveTo(baseX[0], baseY[0]);
        for (let s = 1; s < SAMPLES; s++) ctx.lineTo(baseX[s], baseY[s]);
        ctx.stroke();
      }

      /* Fluid strands. */
      for (let k = 0; k < strandCount; k++) {
        const phase = (k / strandCount) * Math.PI * 2;
        const spread = (k - (strandCount - 1) / 2) / strandCount;

        ctx.beginPath();
        for (let s = 0; s < SAMPLES; s++) {
          const t = s / (SAMPLES - 1);
          /* Taper toward both ends so strands converge at core and card. */
          const taper = Math.sin(t * Math.PI);
          const wave =
            Math.sin(t * 7 - time * speed + phase + i) * amp * taper +
            spread * 9 * taper;

          const x = baseX[s] + path.px * wave;
          const y = baseY[s] + path.py * wave;
          if (s === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(${r},${g},${b},${(0.1 + 0.16 * (1 - Math.abs(spread) * 2)) * alphaBoost})`;
        ctx.lineWidth = hot ? 1.7 : 1.25;
        ctx.stroke();
      }

      /* Droplets travelling core → card, with tails.
         Positions are interpolated between samples rather than snapped to the
         nearest one — flooring the index quantised motion into visible steps,
         which is what made the flow look stuttery. */
      const pool = droplets[i];
      const visible = hot ? 15 : 9;

      for (let d = 0; d < visible; d++) {
        const drop = pool[d];
        drop.t += drop.speed * dt * (hot ? 0.5 : 0.3);
        if (drop.t > 1) drop.t -= 1;
      }

      /* One fill per tail segment instead of one per droplet: ~5 draw calls
         per stream rather than ~60. */
      for (let tail = 0; tail < TAIL; tail++) {
        ctx.fillStyle = `rgba(${r},${g},${b},${(1 - tail / TAIL) * (hot ? 0.9 : 0.5)})`;
        ctx.beginPath();

        for (let d = 0; d < visible; d++) {
          const drop = pool[d];
          const tt = drop.t - tail * 0.02;
          if (tt < 0) continue;

          const f = tt * (SAMPLES - 1);
          const i0 = Math.floor(f);
          const i1 = Math.min(SAMPLES - 1, i0 + 1);
          const k = f - i0;

          const taper = Math.sin(tt * Math.PI);
          const wave = Math.sin(tt * 7 - time * speed + i) * amp * taper;

          const x = baseX[i0] + (baseX[i1] - baseX[i0]) * k + path.px * wave;
          const y = baseY[i0] + (baseY[i1] - baseY[i0]) * k + path.py * wave;
          const rad = drop.size * (1 - tail / 9);

          ctx.moveTo(x + rad, y);
          ctx.arc(x, y, rad, 0, Math.PI * 2);
        }

        ctx.fill();
      }
    };

    const drawPulses = (dt) => {
      const list = pulsesRef.current;

      for (let i = list.length - 1; i >= 0; i--) {
        const pulse = list[i];
        pulse.t += dt * 0.9;

        const path = pathOf(pulse.stream);
        if (!path || pulse.t >= 1) {
          if (path) {
            const node = geom.nodes[pulse.stream];
            if (node) spawnRipple(node.x, node.y, pulse.accent, 1.1);
          }
          list.splice(i, 1);
          continue;
        }

        const x = bezier(path.sx, path.c1x, path.c2x, path.ex, pulse.t);
        const y = bezier(path.sy, path.c1y, path.c2y, path.ey, pulse.t);
        const [r, g, b] = hexToRgb(pulse.accent);

        const grad = ctx.createRadialGradient(x, y, 0, x, y, 26);
        grad.addColorStop(0, `rgba(${r},${g},${b},0.85)`);
        grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, 26, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawRipples = (dt) => {
      const list = ripplesRef.current;

      for (let i = list.length - 1; i >= 0; i--) {
        const rip = list[i];
        rip.r += dt * 90 * rip.strength;
        rip.life -= dt * 1.15;

        if (rip.life <= 0) {
          list.splice(i, 1);
          continue;
        }

        const [r, g, b] = hexToRgb(rip.accent);
        ctx.strokeStyle = `rgba(${r},${g},${b},${rip.life * 0.4})`;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.r, 0, Math.PI * 2);
        ctx.stroke();
      }
    };

    const drawOrbiters = (dt) => {
      const c = geom.core;
      if (!c) return;

      /* Match the core's tint: hovered card first, else the locked one. */
      const tintId = hoveredRef.current ?? activeRef.current;
      const tint = flowServices.find((s) => s.id === tintId);
      const [r, g, b] = hexToRgb(tint ? tint.accent : "#4f6ef7");

      for (const o of orbiters) {
        o.a += o.speed * dt;
        const rad = c.r * (1.05 + o.rad * 0.35);
        const x = c.x + Math.cos(o.a) * rad;
        const y = c.y + Math.sin(o.a) * rad * 0.42;

        ctx.fillStyle = `rgba(${r},${g},${b},0.5)`;
        ctx.beginPath();
        ctx.arc(x, y, o.size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    /* Deliberately small: a large halo dominated the composition. The liquid
       still bends around the cursor — this is only a faint locator ring. */
    const drawCursorField = () => {
      const p = pointerRef.current;
      if (!p.inside) return;

      const energy = Math.min(p.speed / 26, 1);

      ctx.strokeStyle = `rgba(124,58,237,${0.1 + energy * 0.15})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 6 + energy * 4, 0, Math.PI * 2);
      ctx.stroke();
    };

    const frame = (now) => {
      if (!last) last = now;
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      time += dt;

      if (surgeRef.current > 0) {
        surgeRef.current = Math.max(0, surgeRef.current - dt);
      }

      /* Pointer inertia — position eases toward the raw target. */
      const p = pointerRef.current;
      const nx = lerp(p.x, p.tx, 0.16);
      const ny = lerp(p.y, p.ty, 0.16);
      p.speed = lerp(p.speed, Math.hypot(nx - p.x, ny - p.y) * 60, 0.2);
      p.x = nx;
      p.y = ny;

      ctx.clearRect(0, 0, W, H);

      drawCursorField();
      for (let i = 0; i < flowServices.length; i++) drawStream(i, dt);
      drawPulses(dt);
      drawOrbiters(dt);
      drawRipples(dt);

      /* Core tilt follows the cursor with easing. */
      const coreEl = coreRef.current;
      if (coreEl && geom.core) {
        const tx = p.inside ? ((p.y - geom.core.y) / H) * -13 : 0;
        const ty = p.inside ? ((p.x - geom.core.x) / W) * 13 : 0;
        coreEl.style.setProperty("--tilt-x", `${tx.toFixed(2)}deg`);
        coreEl.style.setProperty("--tilt-y", `${ty.toFixed(2)}deg`);
        coreEl.style.setProperty("--surge", surgeRef.current > 0 ? "1" : "0");
      }

      if (running) raf = requestAnimationFrame(frame);
    };

    /* --- static frame for reduced motion --- */
    const drawStatic = () => {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < flowServices.length; i++) drawStream(i, 0);
      drawOrbiters(0);
    };

    measure();

    if (reduceMotion) {
      drawStatic();
    } else {
      raf = requestAnimationFrame(frame);
    }

    /* --- observers --- */
    const ro = new ResizeObserver(() => {
      measure();
      if (reduceMotion) drawStatic();
    });
    ro.observe(wrap);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (reduceMotion) return;

        if (entry.isIntersecting && !running) {
          running = true;
          last = 0; /* re-sync the clock after being paused */
          raf = requestAnimationFrame(frame);
        } else if (!entry.isIntersecting && running) {
          running = false;
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0.05 },
    );
    io.observe(wrap);

    /* --- pointer --- */
    const onMove = (event) => {
      const rect = wrap.getBoundingClientRect();
      const p = pointerRef.current;
      p.tx = event.clientX - rect.left;
      p.ty = event.clientY - rect.top;

      if (!p.inside) {
        p.inside = true;
        p.x = p.tx;
        p.y = p.ty;
      }
    };

    const onLeave = () => {
      pointerRef.current.inside = false;
      pointerRef.current.speed = 0;
      const coreEl = coreRef.current;
      if (coreEl) {
        coreEl.style.setProperty("--tilt-x", "0deg");
        coreEl.style.setProperty("--tilt-y", "0deg");
      }
    };

    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerleave", onLeave);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
    };
  }, [spawnRipple]);

  /* ------------------------------------------------------------------ */

  /* Core tint follows the hovered card, falling back to the locked one. */
  const tintService =
    flowServices.find((s) => s.id === hovered) ??
    flowServices.find((s) => s.id === active);

  return (
    <div
      className="flow"
      ref={wrapRef}
      onClick={handleSurfaceClick}
      style={{ "--core-accent": tintService.accent }}
    >
      <canvas
        className="flow__canvas"
        ref={canvasRef}
        role="img"
        aria-label="Animated diagram: liquid data streams flowing from the Scaalable core out to seven service channels — Web, UX/UI, SEO, AI, Software, Growth and IT Support."
      />

      {/* ------------------------ Core ------------------------ */}
      <button
        type="button"
        className="flow__core"
        ref={coreRef}
        onClick={handleCoreClick}
        aria-label="Surge all seven service channels"
      >
        <span className="flow__core-liquid" aria-hidden="true" />
        <span className="flow__core-gloss" aria-hidden="true" />
        <span
          className="flow__core-ring flow__core-ring--a"
          aria-hidden="true"
        />
        <span
          className="flow__core-ring flow__core-ring--b"
          aria-hidden="true"
        />

        <span className="flow__core-body">
          <img className="flow__core-logo" src={logoIcon} alt="Scaalable" />

          <span className="flow__core-brand">SCAALABLE</span>
          <span className="flow__core-label">DIGITAL FLOW CORE</span>
          <span className="flow__core-status">{status}</span>

          <span className="flow__core-lights" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </span>
      </button>

      {/* ------------------------ Cards ------------------------ */}
      {flowServices.map((service, index) => {
        const Icon = service.icon;
        const rad = (service.angle * Math.PI) / 180;

        return (
          <button
            type="button"
            key={service.id}
            ref={(el) => (cardRefs.current[index] = el)}
            className="flow__card"
            aria-pressed={active === service.id}
            onMouseEnter={handleCardEnter(service)}
            onMouseLeave={handleCardLeave}
            onFocus={handleCardEnter(service)}
            onBlur={handleCardLeave}
            onClick={handleCardClick(service, index)}
            style={{
              "--accent": service.accent,
              "--float-delay": `${index * -1.4}s`,
              /* Orbit radius is a CSS variable so it can shrink per breakpoint
                 without the cards clipping the container edge. */
              "--cos": Math.cos(rad).toFixed(4),
              "--sin": Math.sin(rad).toFixed(4),
              left: "calc(50% + var(--cos) * var(--orbit))",
              top: "calc(50% + var(--sin) * var(--orbit))",
            }}
          >
            <span className="flow__card-index">{service.index}</span>

            <span className="flow__card-icon">
              <Icon size={17} strokeWidth={1.9} aria-hidden="true" />
            </span>

            <span className="flow__card-name">{service.name}</span>

            <span className="flow__card-state">
              {active === service.id ? "LIVE" : "FLOW"}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default ServiceFlow;
