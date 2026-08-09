/* ==========================================================================
   RADIATION ENGINE
   Canvas 2D particle system driving the hero visual. Framework-free on purpose:
   React owns the layout, this owns every pixel inside the <canvas> and never
   touches component state, so no frame ever triggers a render.

   Notes on drawing for a WHITE page:
   additive ("lighter") compositing is the usual way to fake glow, but on white
   it only pushes pixels further toward white and the stream disappears. Every
   layer here is plain source-over with saturated brand colour — the glow is
   built by stacking a wide, very low alpha bloom under a crisp core.
   ========================================================================== */

import { buildColorTable, readPalette } from "./palette";
import {
  clamp,
  smoothstep,
  topHalfWidthFor,
  topYFor,
  TOP_HALF_WIDTH_RATIO,
} from "./streamGeometry";

/* Retina is worth it, beyond 2x is spend with no visible return. */
const MAX_DPR = 2;

const SURGE_SECONDS = 1;
const MAGNET_RADIUS = 250;
const SPRITE_SIZE = 64;

const GLYPHS = ["01", "</>", "{}", "API", "UI", "AI", "10", "[]", "::"];

/* Fraction of the symbol layer drawn as small geometric squares rather than text. */
const SQUARE_RATIO = 0.32;

const PRISM_BEAMS = [
  ["magenta", -1, 0.055],
  ["blue", 0.15, 0.065],
  ["cyan", 1.05, 0.05],
];

/* How far the field is allowed to shift toward an engaged card's colour. Short
   of 1 so the stream keeps some of its own variety while tinted. */
const ACCENT_STRENGTH = 0.8;

const rand = (min, max) => min + Math.random() * (max - min);
const pick = (list) => list[(Math.random() * list.length) | 0];

/* Frame-rate independent easing: `tau` is the time constant in seconds, so the
   result is identical at 60Hz and 144Hz. */
const approach = (current, target, tau, dt) =>
  current + (target - current) * (1 - Math.exp(-dt / tau));

export default class RadiationEngine {
  constructor(canvas, { density = 1, onSurge } = {}) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d", { alpha: true });
    this.onSurge = onSurge;

    this.palette = readPalette(canvas);
    this.colorTable = buildColorTable();
    this.sprites = this.buildSprites();

    this.width = 0;
    this.height = 0;
    this.dpr = 1;
    this.density = density;

    this.time = 0;
    this.last = 0;
    this.raf = 0;
    this.running = false;
    this.visible = true;
    this.reduced = false;

    /* Stream spawns above the canvas so nothing pops into existence on screen. */
    this.topY = -120;
    this.topHalfWidth = 160;
    this.topRatio = TOP_HALF_WIDTH_RATIO;
    this.opening = { x: 0, y: 0, halfWidth: 40 };

    this.pointer = { x: 0, y: 0, sx: 0, sy: 0, inside: false };
    this.pointerMix = 0;

    this.surgeValue = 0;
    this.surgeEase = 0;
    this.intensity = 0;
    this.intensityTarget = 0;

    /* Colour the field leans toward while a workflow card is engaged. The key
       is cleared on release but the RGB is kept, so the tint fades out instead
       of snapping back. */
    this.accentKey = null;
    this.accentRgb = null;
    this.accentMix = 0;
    this.frameColors = this.palette;

    this.layers = { streaks: [], filaments: [], ribbons: [], bokeh: [], glyphs: [] };
    this.pulses = [];
    this.buckets = new Map();

    this.frame = this.frame.bind(this);
  }

  /* ------------------------------------------------------------------ setup */

  buildSprites() {
    const sprites = {};

    for (const [key, rgb] of Object.entries(this.palette)) {
      const sprite = document.createElement("canvas");
      sprite.width = SPRITE_SIZE;
      sprite.height = SPRITE_SIZE;

      const ctx = sprite.getContext("2d");
      const half = SPRITE_SIZE / 2;
      const gradient = ctx.createRadialGradient(half, half, 0, half, half, half);

      gradient.addColorStop(0, `rgba(${rgb}, 0.95)`);
      gradient.addColorStop(0.32, `rgba(${rgb}, 0.34)`);
      gradient.addColorStop(1, `rgba(${rgb}, 0)`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, SPRITE_SIZE, SPRITE_SIZE);

      sprites[key] = sprite;
    }

    return sprites;
  }

  /** Density is resolved from the drawing area, not just the breakpoint. */
  resolveCounts() {
    const area = this.width * this.height;
    const factor = clamp(area / (560 * 620), 0.3, 1.25) * this.density;

    return {
      streaks: Math.round(300 * factor),
      filaments: Math.round(90 * factor),
      ribbons: Math.round(16 * factor),
      bokeh: Math.round(110 * factor),
      glyphs: Math.round(22 * factor),
    };
  }

  makeParticle(kind) {
    const depth = Math.random();

    const particle = {
      kind,
      /* Lateral seat in the funnel, -1..1. Held roughly constant so a particle
         tracks the funnel inward as it descends rather than drifting across it. */
      u: rand(-1, 1) * (0.35 + 0.65 * Math.random()),
      y: 0,
      x: 0,
      depth,
      speed: 0,
      len: 0,
      width: 0,
      alpha: 0,
      phase: rand(0, Math.PI * 2),
      waveAmp: rand(4, 26) * (0.4 + depth),
      waveFreq: rand(0.004, 0.012),
      waveSpeed: rand(0.25, 0.8),
      color: pick(this.colorTable),
      glyph: "",
      isSquare: false,
      size: 0,
    };

    if (kind === "streak") {
      particle.speed = rand(150, 340) * (0.55 + depth * 0.8);
      particle.len = rand(16, 74) * (0.5 + depth);
      particle.width = rand(0.6, 1.9) * (0.6 + depth * 0.7);
      particle.alpha = rand(0.16, 0.52) * (0.45 + depth * 0.75);
    } else if (kind === "filament") {
      particle.speed = rand(60, 150);
      particle.len = rand(90, 260);
      particle.width = rand(0.4, 0.85);
      particle.alpha = rand(0.05, 0.13);
      particle.waveAmp *= 1.5;
    } else if (kind === "ribbon") {
      particle.speed = rand(70, 160);
      particle.len = rand(150, 380);
      particle.width = rand(9, 26);
      particle.alpha = rand(0.03, 0.075);
    } else if (kind === "bokeh") {
      particle.speed = rand(90, 260) * (0.5 + depth);
      particle.size = rand(3, 16) * (0.45 + depth);
      particle.alpha = rand(0.1, 0.42) * (0.4 + depth);
    } else if (kind === "glyph") {
      particle.speed = rand(70, 165);
      particle.size = Math.round(rand(9, 15));
      particle.alpha = rand(0.16, 0.4);
      particle.isSquare = Math.random() < SQUARE_RATIO;
      particle.glyph = pick(GLYPHS);
    }

    return particle;
  }

  build() {
    const counts = this.resolveCounts();

    /* Desktop keeps a reserve that only fades in during a click surge, so the
       burst costs nothing at rest and never pops. */
    const reserve = this.density >= 0.6 ? 1.35 : 1;

    const spec = [
      ["streaks", "streak", counts.streaks, reserve],
      ["filaments", "filament", counts.filaments, 1],
      ["ribbons", "ribbon", counts.ribbons, 1],
      ["bokeh", "bokeh", counts.bokeh, reserve],
      ["glyphs", "glyph", counts.glyphs, 1],
    ];

    for (const [layer, kind, count, factor] of spec) {
      const total = Math.max(1, Math.round(count * factor));
      const list = [];

      /* setOpening() may not have landed yet on the very first build, and the
         default opening.y of 0 would seed the entire field above the canvas
         where it stays invisible until every particle has fallen through. */
      const bottom = this.opening.y > 0 ? this.opening.y : this.height;

      for (let i = 0; i < total; i += 1) {
        const particle = this.makeParticle(kind);
        /* `base` marks the always-on population; the rest ride the surge. */
        particle.base = i < count;
        particle.y = rand(this.topY, bottom);
        list.push(particle);
      }

      this.layers[layer] = list;
    }

    this.pulses = Array.from({ length: 90 }, () => ({
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      life: 0,
      size: 0,
      color: "blue",
    }));

    this.groupBuckets();
  }

  /**
   * Pre-groups every particle by colour.
   *
   * Setting `strokeStyle`/`fillStyle` forces the browser to parse a CSS colour;
   * doing that per particle per frame is the single most expensive thing a
   * naive 2D particle loop does. Grouping lets us set the colour once per
   * bucket and vary only `globalAlpha`, which is a cheap numeric assignment.
   */
  groupBuckets() {
    this.buckets = new Map();

    for (const [layerName, list] of Object.entries(this.layers)) {
      const byColor = new Map();

      for (const particle of list) {
        if (!byColor.has(particle.color)) byColor.set(particle.color, []);
        byColor.get(particle.color).push(particle);
      }

      this.buckets.set(layerName, byColor);
    }
  }

  /* ------------------------------------------------------------- geometry */

  resize(width, height, dpr = window.devicePixelRatio || 1) {
    const nextWidth = Math.max(1, Math.round(width));
    const nextHeight = Math.max(1, Math.round(height));
    const nextDpr = Math.min(dpr, MAX_DPR);

    const sizeChanged =
      nextWidth !== this.width ||
      nextHeight !== this.height ||
      nextDpr !== this.dpr;

    this.width = nextWidth;
    this.height = nextHeight;
    this.dpr = nextDpr;

    this.canvas.width = Math.round(nextWidth * nextDpr);
    this.canvas.height = Math.round(nextHeight * nextDpr);
    this.canvas.style.width = `${nextWidth}px`;
    this.canvas.style.height = `${nextHeight}px`;

    this.ctx.setTransform(nextDpr, 0, 0, nextDpr, 0, 0);

    this.topHalfWidth = topHalfWidthFor(nextWidth, this.topRatio);
    this.topY = topYFor(nextHeight);

    if (sizeChanged) {
      if (!this.layers.streaks.length) this.build();
      else this.reflow();
    }

    if (this.reduced) this.renderStatic();
  }

  /** Keeps existing particles but re-seats them in the new bounds. */
  reflow() {
    const counts = this.resolveCounts();
    const wanted = counts.streaks;
    const have = this.layers.streaks.filter((p) => p.base).length;

    /* Rebuild only when the target population moved meaningfully — a few pixels
       of resize should not throw away the whole stream. */
    if (Math.abs(wanted - have) / Math.max(1, have) > 0.25) {
      this.build();
      return;
    }

    for (const list of Object.values(this.layers)) {
      for (const particle of list) {
        if (particle.y > this.opening.y || particle.y < this.topY) {
          particle.y = rand(this.topY, this.opening.y);
        }
      }
    }
  }

  setOpening({ x, y, halfWidth }) {
    const previous = this.opening.y;

    this.opening.x = x;
    this.opening.y = y;
    this.opening.halfWidth = halfWidth;

    /* Anything seeded against the old bottom may now sit past the throat and
       would be swallowed on the first frame, leaving a visible gap in the
       stream. Re-seat those over the new span. */
    if (Math.abs(y - previous) > 1) {
      for (const list of Object.values(this.layers)) {
        for (const particle of list) {
          if (particle.y > y || particle.y < this.topY) {
            particle.y = rand(this.topY, y);
          }
        }
      }
    }

    if (this.reduced) this.renderStatic();
  }

  /** Funnel half-width at normalised depth `t`: wide at top, pinched at the box. */
  halfWidthAt(t) {
    return (
      this.topHalfWidth +
      (this.opening.halfWidth - this.topHalfWidth) * smoothstep(t)
    );
  }

  progressAt(y) {
    const span = this.opening.y - this.topY;
    return span > 0 ? clamp((y - this.topY) / span, 0, 1) : 0;
  }

  /**
   * Horizontal position for a particle at height `y`.
   *
   * Every lateral influence is scaled by `damp`, which falls to zero at the
   * opening — that is what keeps the base of the stream locked to the box no
   * matter where the cursor goes.
   */
  xAt(particle, y) {
    const t = this.progressAt(y);
    const damp = 1 - smoothstep(t);

    let x = this.opening.x + particle.u * this.halfWidthAt(t);

    x +=
      Math.sin(y * particle.waveFreq + particle.phase + this.time * particle.waveSpeed) *
      particle.waveAmp *
      damp;

    if (this.pointerMix > 0.002) {
      const lean = (this.pointer.sx - this.opening.x) * 0.05 * damp * this.pointerMix;
      x += lean;

      const dx = this.pointer.sx - x;
      const dy = this.pointer.sy - y;
      const distSq = dx * dx + dy * dy;

      if (distSq < MAGNET_RADIUS * MAGNET_RADIUS) {
        const falloff = 1 - Math.sqrt(distSq) / MAGNET_RADIUS;
        x += dx * falloff * falloff * damp * 0.45 * this.pointerMix;
      }
    }

    return x;
  }

  /* ------------------------------------------------------------- controls */

  setPointer(x, y) {
    this.pointer.x = x;
    this.pointer.y = y;

    if (!this.pointer.inside) {
      this.pointer.sx = x;
      this.pointer.sy = y;
    }

    this.pointer.inside = true;
  }

  clearPointer() {
    this.pointer.inside = false;
  }

  setIntensity(value) {
    this.intensityTarget = clamp(value, 0, 1);
  }

  /** `key` is a palette name, or null to fade back to the default mix. */
  setAccent(key) {
    if (key && this.palette[key]) {
      this.accentKey = key;
      this.accentRgb = this.palette[key];
      return;
    }

    this.accentKey = null;
  }

  /**
   * One blended colour per palette entry per frame, reused by every layer.
   *
   * Blending per particle would mean hundreds of string builds and colour
   * parses each frame; the tint is uniform across the field, so six is enough.
   */
  computeFrameColors() {
    if (!this.accentRgb || this.accentMix < 0.01) {
      this.frameColors = this.palette;
      return;
    }

    const [ar, ag, ab] = this.accentRgb.split(",").map(Number);
    const mix = this.accentMix * ACCENT_STRENGTH;
    const blended = {};

    for (const key in this.palette) {
      const [r, g, b] = this.palette[key].split(",").map(Number);

      blended[key] =
        `${Math.round(r + (ar - r) * mix)}, ` +
        `${Math.round(g + (ag - g) * mix)}, ` +
        `${Math.round(b + (ab - b) * mix)}`;
    }

    this.frameColors = blended;
  }

  setDensity(value) {
    if (value === this.density) return;
    this.density = value;
    this.build();
  }

  /** Widest half-width of the funnel, as a fraction of the stage width. */
  setTopWidthRatio(ratio) {
    if (ratio === this.topRatio) return;

    this.topRatio = ratio;
    this.topHalfWidth = topHalfWidthFor(this.width, ratio);

    if (this.reduced) this.renderStatic();
  }

  surge(strength = 1) {
    this.surgeValue = Math.min(1, this.surgeValue + strength);
    this.onSurge?.();
  }

  /** Emits a short burst from a card connector into the stream. */
  pulse(x, y) {
    /* With the loop stopped, update() never runs to decay `life`, so a spark
       emitted here would sit at full brightness forever. */
    if (this.reduced || !this.running) return;

    let emitted = 0;

    for (const spark of this.pulses) {
      if (emitted >= 14) break;
      if (spark.life > 0) continue;

      const toCenter = this.opening.x - x;
      const dir = Math.sign(toCenter) || 1;

      spark.x = x;
      spark.y = y;
      spark.vx = dir * rand(60, 190);
      spark.vy = rand(30, 130);
      spark.life = 1;
      spark.size = rand(3, 9);
      spark.color = pick(this.colorTable);

      emitted += 1;
    }
  }

  setReducedMotion(reduced) {
    this.reduced = reduced;

    if (reduced) {
      this.stop();
      this.renderStatic();
    } else if (this.visible) {
      this.start();
    }
  }

  setVisible(visible) {
    this.visible = visible;

    if (this.reduced) return;
    if (visible) this.start();
    else this.stop();
  }

  start() {
    if (this.running || this.reduced || !this.visible) return;
    this.running = true;
    this.last = performance.now();
    this.raf = requestAnimationFrame(this.frame);
  }

  stop() {
    this.running = false;
    if (this.raf) cancelAnimationFrame(this.raf);
    this.raf = 0;
  }

  destroy() {
    this.stop();
    this.layers = { streaks: [], filaments: [], ribbons: [], bokeh: [], glyphs: [] };
    this.buckets.clear();
    this.pulses = [];
  }

  /* ---------------------------------------------------------------- loop */

  frame(now) {
    if (!this.running) return;

    /* Clamped so returning to a backgrounded tab does not teleport the stream. */
    const dt = Math.min((now - this.last) / 1000, 0.05);
    this.last = now;

    this.update(dt);
    this.draw();

    this.raf = requestAnimationFrame(this.frame);
  }

  update(dt) {
    this.time += dt;

    const restX = this.opening.x;
    const restY = this.height * 0.4;

    this.pointer.sx = approach(
      this.pointer.sx,
      this.pointer.inside ? this.pointer.x : restX,
      0.14,
      dt,
    );
    this.pointer.sy = approach(
      this.pointer.sy,
      this.pointer.inside ? this.pointer.y : restY,
      0.14,
      dt,
    );
    this.pointerMix = approach(this.pointerMix, this.pointer.inside ? 1 : 0, 0.18, dt);

    this.surgeValue = Math.max(0, this.surgeValue - dt / SURGE_SECONDS);
    this.surgeEase = smoothstep(this.surgeValue);

    this.intensity = approach(this.intensity, this.intensityTarget, 0.16, dt);
    this.accentMix = approach(this.accentMix, this.accentKey ? 1 : 0, 0.2, dt);

    const boost = 1 + this.surgeEase * 1.7 + this.intensity * 0.28;

    for (const list of Object.values(this.layers)) {
      for (const particle of list) {
        const t = this.progressAt(particle.y);

        /* Accelerates into the funnel throat — the stream should look like it is
           being pulled in, not merely falling. */
        particle.y += particle.speed * (1 + 2 * t * t) * boost * dt;

        if (particle.y - particle.len > this.opening.y) {
          particle.y = this.topY - rand(0, 140);
          particle.u = rand(-1, 1) * (0.35 + 0.65 * Math.random());
          particle.phase = rand(0, Math.PI * 2);

          if (particle.kind === "glyph") {
            particle.glyph = pick(GLYPHS);
            particle.isSquare = Math.random() < SQUARE_RATIO;
          }
        }
      }
    }

    for (const spark of this.pulses) {
      if (spark.life <= 0) continue;

      spark.life -= dt * 1.6;
      spark.x += spark.vx * dt;
      spark.y += spark.vy * dt;
      spark.vy += 180 * dt;
    }
  }

  /* ---------------------------------------------------------------- draw */

  draw() {
    const { ctx } = this;

    ctx.clearRect(0, 0, this.width, this.height);

    this.computeFrameColors();
    this.drawPrism(ctx);

    /* Clipped at the opening so the stream is visibly consumed by the box and
       never bleeds over its lid. */
    ctx.save();
    ctx.beginPath();
    ctx.rect(0, 0, this.width, this.opening.y);
    ctx.clip();

    this.drawStrokeLayer(ctx, "ribbons", 1);
    this.drawStrokeLayer(ctx, "filaments", 1);
    this.drawBokeh(ctx);
    this.drawStrokeLayer(ctx, "streaks", 1);
    this.drawGlyphs(ctx);
    this.drawPulses(ctx);

    ctx.restore();

    this.drawImpact(ctx);
  }

  drawStrokeLayer(ctx, layer, alphaScale) {
    const byColor = this.buckets.get(layer);
    if (!byColor) return;

    const boost = 1 + this.surgeEase * 0.9 + this.intensity * 0.3;
    const lengthBoost = 1 + this.surgeEase * 1.5;

    ctx.lineCap = "round";

    for (const [colorKey, list] of byColor) {
      ctx.strokeStyle = `rgb(${this.frameColors[colorKey]})`;

      for (const particle of list) {
        const reserveAlpha = particle.base ? 1 : this.surgeEase;
        if (reserveAlpha <= 0.01) continue;

        const t = this.progressAt(particle.y);
        const head = particle.y;
        const tail = particle.y - particle.len * lengthBoost;

        /* Brightens on approach: the funnel throat is the focal point. */
        const alpha =
          particle.alpha * (0.4 + 0.75 * t) * boost * alphaScale * reserveAlpha;

        if (alpha <= 0.004) continue;

        ctx.globalAlpha = Math.min(alpha, 0.85);
        ctx.lineWidth = particle.width;

        ctx.beginPath();
        ctx.moveTo(this.xAt(particle, tail), tail);
        ctx.lineTo(this.xAt(particle, head), head);
        ctx.stroke();
      }
    }

    ctx.globalAlpha = 1;
  }

  drawBokeh(ctx) {
    const byColor = this.buckets.get("bokeh");
    if (!byColor) return;

    const boost = 1 + this.surgeEase * 0.8 + this.intensity * 0.25;

    for (const [colorKey, list] of byColor) {
      const sprite = this.sprites[colorKey];

      for (const particle of list) {
        const reserveAlpha = particle.base ? 1 : this.surgeEase;
        if (reserveAlpha <= 0.01) continue;

        const t = this.progressAt(particle.y);
        const alpha = particle.alpha * (0.35 + 0.8 * t) * boost * reserveAlpha;

        if (alpha <= 0.004) continue;

        const size = particle.size * (1 + t * 0.5);
        const x = this.xAt(particle, particle.y);

        ctx.globalAlpha = Math.min(alpha, 0.8);
        ctx.drawImage(sprite, x - size, particle.y - size, size * 2, size * 2);
      }
    }

    ctx.globalAlpha = 1;
  }

  drawGlyphs(ctx) {
    const byColor = this.buckets.get("glyphs");
    if (!byColor) return;

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    for (const [colorKey, list] of byColor) {
      const color = `rgb(${this.frameColors[colorKey]})`;
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;

      for (const particle of list) {
        const t = this.progressAt(particle.y);
        /* Symbols dissolve before the throat so the convergence stays clean. */
        const alpha = particle.alpha * (1 - smoothstep(clamp(t * 1.25, 0, 1))) * 1.4;

        if (alpha <= 0.01) continue;

        ctx.globalAlpha = Math.min(alpha, 0.6);

        const x = this.xAt(particle, particle.y);

        if (particle.isSquare) {
          const half = particle.size * 0.42;
          ctx.strokeRect(x - half, particle.y - half, half * 2, half * 2);
          continue;
        }

        /* Literal stack, not a token: canvas `font` is parsed by the 2D context
           and never resolves CSS custom properties. */
        ctx.font = `600 ${particle.size}px Inter, system-ui, sans-serif`;
        ctx.fillText(particle.glyph, x, particle.y);
      }
    }

    ctx.globalAlpha = 1;
  }

  drawPulses(ctx) {
    for (const spark of this.pulses) {
      if (spark.life <= 0) continue;

      const sprite = this.sprites[spark.color];
      const size = spark.size * (0.5 + spark.life);

      ctx.globalAlpha = Math.min(spark.life * 0.7, 0.7);
      ctx.drawImage(sprite, spark.x - size, spark.y - size, size * 2, size * 2);
    }

    ctx.globalAlpha = 1;
  }

  /**
   * Wide, barely-there colour beams that shift with the cursor.
   *
   * Drawn from the radial sprites rather than a linear gradient in a fillRect:
   * a fillRect fades only along the gradient's axis and leaves the two side
   * edges hard, which painted a visible rectangle over the hero background. The
   * sprite falls off on every edge, so the beams dissolve into the page.
   */
  drawPrism(ctx) {
    const shift = (this.pointer.sx - this.opening.x) * 0.06 * this.pointerMix;
    const bleed = this.height * 0.12;

    for (const [colorKey, offset, alpha] of PRISM_BEAMS) {
      const width = this.opening.halfWidth * 4.2;
      const x = this.opening.x + offset * width * 0.5 + shift;

      /* Each beam keeps its own hue. Swapping all three to the engaged card's
         colour stacked them into a single flat wash that read as a background
         panel appearing behind the whole right column on click. The accent
         still carries through the particles and the impact. */
      ctx.globalAlpha =
        alpha * (1 + this.intensity * 0.22 + this.surgeEase * 0.3);

      ctx.drawImage(
        this.sprites[colorKey],
        x - width / 2,
        -bleed,
        width,
        this.opening.y + bleed * 2,
      );
    }

    ctx.globalAlpha = 1;
  }

  /** Impact bloom plus the elliptical rings riding out of the throat. */
  drawImpact(ctx) {
    const { x, y, halfWidth } = this.opening;
    const pulse = 0.5 + 0.5 * Math.sin(this.time * 2.1);

    /* Surge drives brightness, not size. Scaling the bloom's RADIUS by the old
       `1 + surge * 1.6` factor blew it up to several hundred pixels on every
       click — a coloured disc large enough to read as a background panel
       appearing behind the right column. */
    const grow = 1 + this.surgeEase * 0.38 + this.intensity * 0.14;

    /* The impact takes the engaged card's colour too, so the box reads as
       processing whatever stage the visitor is pointing at. */
    const bloomKey = this.accentKey ?? "blue";
    const coreKey = this.accentKey ?? "cyan";

    const bloom = halfWidth * (2.1 + pulse * 0.25) * grow;
    ctx.globalAlpha = Math.min(0.28 + this.surgeEase * 0.28, 0.58);
    ctx.drawImage(
      this.sprites[bloomKey],
      x - bloom,
      y - bloom * 0.7,
      bloom * 2,
      bloom * 1.4,
    );

    const core = halfWidth * (0.8 + pulse * 0.1) * grow;
    ctx.globalAlpha = Math.min(0.45 + this.surgeEase * 0.35, 0.85);
    ctx.drawImage(
      this.sprites[coreKey],
      x - core,
      y - core * 0.55,
      core * 2,
      core * 1.1,
    );

    ctx.globalAlpha = 1;

    const ringKeys = ["blue", "cyan", "magenta"];

    for (let i = 0; i < 3; i += 1) {
      const phase = (this.time * 0.55 + i / 3) % 1;
      const radius = halfWidth * (0.9 + phase * 2.5) * (1 + this.surgeEase * 0.3);
      const alpha = (1 - phase) * 0.3 * (0.65 + this.surgeEase * 0.5);

      if (alpha <= 0.01) continue;

      ctx.globalAlpha = alpha;
      ctx.strokeStyle = `rgb(${this.frameColors[ringKeys[i]]})`;
      ctx.lineWidth = 1.4;

      ctx.beginPath();
      ctx.ellipse(x, y, radius, radius * 0.34, 0, 0, Math.PI * 2);
      ctx.stroke();
    }

    ctx.globalAlpha = 1;
  }

  /**
   * Single composed frame for prefers-reduced-motion: the full visual, held
   * still. The stream still reads as a funnel converging on the box.
   */
  renderStatic() {
    if (!this.layers.streaks.length) this.build();

    this.time = 0;
    this.pointerMix = 0;
    this.surgeEase = 0;
    this.intensity = 0;

    const span = this.opening.y - this.topY;

    for (const list of Object.values(this.layers)) {
      list.forEach((particle, index) => {
        particle.y = this.topY + ((index * 0.6180339887) % 1) * span;
      });
    }

    this.draw();
  }
}
