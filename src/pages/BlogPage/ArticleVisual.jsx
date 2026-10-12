/**
 * Visual topic artwork for blog articles, matching the domain-specific themes
 * developed for Scaalable's design system.
 */
export const ArticleVisual = ({ categorySlug, className = "" }) => {
  switch (categorySlug) {
    case "ai-automation":
      return (
        <div className={`blog-card__visual blog-card__visual--ai ${className}`}>
          <svg
            viewBox="0 0 400 225"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="blog-card__svg"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="ai-brain-bg" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stopColor="#0d2149" />
                <stop offset="60%" stopColor="#081026" />
                <stop offset="100%" stopColor="#040714" />
              </radialGradient>
              <radialGradient id="ai-glow-blue" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#00d2ff" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#00d2ff" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="ai-badge-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00c6ff" />
                <stop offset="100%" stopColor="#0072ff" />
              </linearGradient>
            </defs>
            <rect width="400" height="225" fill="url(#ai-brain-bg)" />

            {/* Circuit traces in background */}
            <path d="M40 50 H90 V90 H140" stroke="#00d2ff" strokeWidth="1" strokeOpacity="0.25" fill="none" />
            <path d="M360 50 H310 V90 H260" stroke="#00d2ff" strokeWidth="1" strokeOpacity="0.25" fill="none" />
            <path d="M40 180 H100 V140 H150" stroke="#00d2ff" strokeWidth="1" strokeOpacity="0.25" fill="none" />
            <path d="M360 180 H300 V140 H250" stroke="#00d2ff" strokeWidth="1" strokeOpacity="0.25" fill="none" />

            {/* Glowing ambient center */}
            <circle cx="200" cy="112" r="75" fill="url(#ai-glow-blue)" />

            {/* Brain lobes & neural circuits */}
            <g transform="translate(200, 112)" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.8" fill="none">
              <path d="M-15 -48 C -35 -48, -55 -35, -55 -15 C -55 -2, -65 10, -60 25 C -55 40, -35 50, -15 50" />
              <path d="M-15 -35 C -30 -35, -42 -22, -42 -8 C -42 5, -50 18, -45 30 C -40 40, -25 42, -15 42" strokeOpacity="0.5" />
              <path d="M-15 -18 C -24 -18, -30 -8, -30 2 C -30 12, -24 22, -15 22" strokeOpacity="0.4" />

              <path d="M15 -48 C 35 -48, 55 -35, 55 -15 C 55 -2, 65 10, 60 25 C 55 40, 35 50, 15 50" />
              <path d="M15 -35 C 30 -35, 42 -22, 42 -8 C 42 5, 50 18, 45 30 C 40 40, 25 42, 15 42" strokeOpacity="0.5" />
              <path d="M15 -18 C 24 -18, 30 -8, 30 2 C 30 12, 24 22, 15 22" strokeOpacity="0.4" />

              <circle cx="-50" cy="-20" r="3" fill="#00e5ff" />
              <circle cx="-58" cy="18" r="2.5" fill="#00e5ff" />
              <circle cx="-38" cy="38" r="2.5" fill="#00e5ff" />
              <circle cx="-32" cy="-36" r="2.5" fill="#00e5ff" />
              <circle cx="50" cy="-20" r="3" fill="#00e5ff" />
              <circle cx="58" cy="18" r="2.5" fill="#00e5ff" />
              <circle cx="38" cy="38" r="2.5" fill="#00e5ff" />
              <circle cx="32" cy="-36" r="2.5" fill="#00e5ff" />
            </g>

            {/* Center AI Badge */}
            <circle cx="200" cy="112" r="30" fill="url(#ai-badge-grad)" />
            <circle cx="200" cy="112" r="34" stroke="#00e5ff" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.85" />
            <text x="200" y="118" fill="#ffffff" fontSize="17" fontWeight="800" textAnchor="middle" fontFamily="Poppins, sans-serif" letterSpacing="0.05em">AI</text>

            {/* Floating tech micro-chips */}
            <g transform="translate(68, 65)">
              <rect width="28" height="28" rx="6" fill="#0d2149" stroke="#00d2ff" strokeWidth="1" strokeOpacity="0.6" />
              <circle cx="14" cy="14" r="5" stroke="#00e5ff" strokeWidth="1.2" fill="none" />
            </g>
            <g transform="translate(305, 65)">
              <rect width="28" height="28" rx="6" fill="#0d2149" stroke="#00d2ff" strokeWidth="1" strokeOpacity="0.6" />
              <line x1="8" y1="10" x2="20" y2="10" stroke="#00e5ff" strokeWidth="1.5" />
              <line x1="8" y1="14" x2="16" y2="14" stroke="#00e5ff" strokeWidth="1.5" />
              <line x1="8" y1="18" x2="18" y2="18" stroke="#00e5ff" strokeWidth="1.5" />
            </g>
            <g transform="translate(85, 145)">
              <rect width="28" height="28" rx="6" fill="#0d2149" stroke="#00d2ff" strokeWidth="1" strokeOpacity="0.6" />
              <circle cx="12" cy="12" r="4" stroke="#00e5ff" strokeWidth="1.2" fill="none" />
              <line x1="15" y1="15" x2="19" y2="19" stroke="#00e5ff" strokeWidth="1.5" />
            </g>
            <g transform="translate(290, 145)">
              <rect width="28" height="28" rx="6" fill="#0d2149" stroke="#00d2ff" strokeWidth="1" strokeOpacity="0.6" />
              <polyline points="7,19 12,13 16,16 21,9" stroke="#00e5ff" strokeWidth="1.5" fill="none" />
            </g>
          </svg>
        </div>
      );

    case "software-development":
      return (
        <div className={`blog-card__visual blog-card__visual--dev ${className}`}>
          <svg
            viewBox="0 0 400 225"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="blog-card__svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="dev-room-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <linearGradient id="desk-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>
            </defs>
            <rect width="400" height="225" fill="url(#dev-room-bg)" />
            <rect y="170" width="400" height="55" fill="url(#desk-grad)" />
            <line x1="0" y1="170" x2="400" y2="170" stroke="#475569" strokeWidth="1" />

            {/* Plant on right */}
            <g transform="translate(325, 125)">
              <polygon points="12,45 28,45 25,25 15,25" fill="#e2e8f0" />
              <path d="M20 25 Q 12 10, 8 16 Q 16 23, 20 25" fill="#22c55e" />
              <path d="M20 25 Q 26 8, 30 15 Q 24 22, 20 25" fill="#16a34a" />
              <path d="M20 25 Q 20 5, 22 10 Q 21 20, 20 25" fill="#4ade80" />
            </g>

            {/* Laptop Shadow */}
            <ellipse cx="195" cy="178" rx="120" ry="10" fill="#000000" fillOpacity="0.4" />

            {/* Laptop Base */}
            <g transform="translate(85, 172)">
              <path d="M0 0 L220 0 L210 8 L10 8 Z" fill="#94a3b8" />
              <rect x="90" y="2" width="40" height="3" rx="1.5" fill="#64748b" />
            </g>

            {/* Laptop Screen Body */}
            <g transform="translate(95, 30)">
              <rect width="200" height="142" rx="6" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
              <rect x="7" y="7" width="186" height="128" rx="3" fill="#111827" />

              {/* Top tab bar */}
              <rect x="7" y="7" width="186" height="12" fill="#1f2937" />
              <circle cx="14" cy="13" r="2" fill="#ef4444" />
              <circle cx="21" cy="13" r="2" fill="#f59e0b" />
              <circle cx="28" cy="13" r="2" fill="#10b981" />
              <text x="36" y="16" fill="#9ca3af" fontSize="6" fontFamily="monospace">App.tsx — architecture</text>

              {/* Syntax highlighted lines */}
              <g transform="translate(14, 26)">
                <text x="0" y="8" fill="#4b5563" fontSize="6" fontFamily="monospace">1</text>
                <text x="0" y="18" fill="#4b5563" fontSize="6" fontFamily="monospace">2</text>
                <text x="0" y="28" fill="#4b5563" fontSize="6" fontFamily="monospace">3</text>
                <text x="0" y="38" fill="#4b5563" fontSize="6" fontFamily="monospace">4</text>
                <text x="0" y="48" fill="#4b5563" fontSize="6" fontFamily="monospace">5</text>
                <text x="0" y="58" fill="#4b5563" fontSize="6" fontFamily="monospace">6</text>
                <text x="0" y="68" fill="#4b5563" fontSize="6" fontFamily="monospace">7</text>
                <text x="0" y="78" fill="#4b5563" fontSize="6" fontFamily="monospace">8</text>
                <text x="0" y="88" fill="#4b5563" fontSize="6" fontFamily="monospace">9</text>
                <text x="0" y="98" fill="#4b5563" fontSize="6" fontFamily="monospace">10</text>

                <rect x="12" y="3" width="28" height="5" rx="1.5" fill="#f43f5e" />
                <rect x="44" y="3" width="36" height="5" rx="1.5" fill="#38bdf8" />
                <rect x="84" y="3" width="24" height="5" rx="1.5" fill="#f43f5e" />

                <rect x="12" y="13" width="48" height="5" rx="1.5" fill="#818cf8" />
                <rect x="64" y="13" width="32" height="5" rx="1.5" fill="#a78bfa" />

                <rect x="12" y="23" width="18" height="5" rx="1.5" fill="#38bdf8" />
                <rect x="34" y="23" width="42" height="5" rx="1.5" fill="#34d399" />
                <rect x="80" y="23" width="20" height="5" rx="1.5" fill="#fbbf24" />

                <rect x="22" y="33" width="32" height="5" rx="1.5" fill="#f43f5e" />
                <rect x="58" y="33" width="55" height="5" rx="1.5" fill="#38bdf8" />

                <rect x="22" y="43" width="44" height="5" rx="1.5" fill="#34d399" />
                <rect x="70" y="43" width="36" height="5" rx="1.5" fill="#f59e0b" />

                <rect x="22" y="53" width="26" height="5" rx="1.5" fill="#c084fc" />
                <rect x="52" y="53" width="42" height="5" rx="1.5" fill="#38bdf8" />

                <rect x="12" y="63" width="14" height="5" rx="1.5" fill="#f43f5e" />

                <rect x="12" y="73" width="36" height="5" rx="1.5" fill="#38bdf8" />
                <rect x="52" y="73" width="60" height="5" rx="1.5" fill="#4ade80" />

                <rect x="22" y="83" width="50" height="5" rx="1.5" fill="#a78bfa" />
                <rect x="76" y="83" width="24" height="5" rx="1.5" fill="#f43f5e" />

                <rect x="12" y="93" width="16" height="5" rx="1.5" fill="#f43f5e" />
              </g>
            </g>
          </svg>
        </div>
      );

    case "ui-ux":
      return (
        <div className={`blog-card__visual blog-card__visual--ui ${className}`}>
          <svg
            viewBox="0 0 400 225"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="blog-card__svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="ui-desk-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#eef2ff" />
                <stop offset="100%" stopColor="#e0e7ff" />
              </linearGradient>
            </defs>
            <rect width="400" height="225" fill="url(#ui-desk-bg)" />
            <circle cx="200" cy="110" r="90" fill="#c7d2fe" fillOpacity="0.4" />

            {/* Mobile Phone Mockup */}
            <g transform="translate(85, 50)">
              <rect width="50" height="100" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
              <rect x="18" y="4" width="14" height="3" rx="1.5" fill="#cbd5e1" />
              <rect x="6" y="14" width="38" height="22" rx="4" fill="#eff6ff" />
              <rect x="10" y="20" width="20" height="4" rx="2" fill="#3b82f6" />
              <rect x="6" y="42" width="38" height="12" rx="3" fill="#f8fafc" />
              <rect x="6" y="58" width="38" height="12" rx="3" fill="#f8fafc" />
              <rect x="6" y="74" width="38" height="18" rx="4" fill="#8b5cf6" />
            </g>

            {/* Desktop Dashboard Screen */}
            <g transform="translate(145, 30)">
              <rect width="170" height="125" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
              <rect width="170" height="16" rx="8" fill="#f8fafc" />
              <circle cx="10" cy="8" r="2.5" fill="#f87171" />
              <circle cx="17" cy="8" r="2.5" fill="#fbbf24" />
              <circle cx="24" cy="8" r="2.5" fill="#34d399" />
              <rect x="40" y="5" width="70" height="6" rx="3" fill="#e2e8f0" />

              {/* Sidebar */}
              <rect x="0" y="16" width="35" height="109" fill="#f1f5f9" />
              <rect x="6" y="24" width="23" height="4" rx="2" fill="#94a3b8" />
              <rect x="6" y="34" width="23" height="4" rx="2" fill="#cbd5e1" />
              <rect x="6" y="44" width="23" height="4" rx="2" fill="#cbd5e1" />
              <rect x="6" y="54" width="23" height="4" rx="2" fill="#cbd5e1" />

              {/* Cards & Graph */}
              <g transform="translate(42, 22)">
                <rect x="0" y="0" width="56" height="32" rx="4" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="0.8" />
                <rect x="6" y="6" width="24" height="4" rx="2" fill="#3b82f6" />
                <rect x="6" y="14" width="34" height="8" rx="2" fill="#1e293b" />

                <rect x="62" y="0" width="56" height="32" rx="4" fill="#f5f3ff" stroke="#ddd6fe" strokeWidth="0.8" />
                <rect x="68" y="6" width="24" height="4" rx="2" fill="#8b5cf6" />
                <rect x="68" y="14" width="34" height="8" rx="2" fill="#1e293b" />

                <rect x="0" y="38" width="118" height="58" rx="4" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="0.8" />
                <rect x="6" y="44" width="40" height="4" rx="2" fill="#64748b" />

                <rect x="12" y="66" width="8" height="22" rx="2" fill="#3b82f6" />
                <rect x="26" y="56" width="8" height="32" rx="2" fill="#8b5cf6" />
                <rect x="40" y="62" width="8" height="26" rx="2" fill="#3b82f6" />
                <rect x="54" y="50" width="8" height="38" rx="2" fill="#8b5cf6" />
                <rect x="68" y="58" width="8" height="30" rx="2" fill="#3b82f6" />
                <rect x="82" y="46" width="8" height="42" rx="2" fill="#8b5cf6" />
                <rect x="96" y="52" width="8" height="36" rx="2" fill="#3b82f6" />
              </g>
            </g>
          </svg>
        </div>
      );

    case "seo-aeo-geo":
      return (
        <div className={`blog-card__visual blog-card__visual--seo ${className}`}>
          <svg
            viewBox="0 0 400 225"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="blog-card__svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="seo-bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f0f9ff" />
                <stop offset="100%" stopColor="#e0f2fe" />
              </linearGradient>
            </defs>
            <rect width="400" height="225" fill="url(#seo-bg-grad)" />

            <g transform="translate(65, 25)">
              <rect width="270" height="175" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />

              {/* Google colorful logo */}
              <g transform="translate(24, 22)">
                <text x="0" y="16" fill="#4285F4" fontSize="16" fontWeight="800" fontFamily="Poppins, sans-serif">G</text>
                <text x="13" y="16" fill="#EA4335" fontSize="16" fontWeight="800" fontFamily="Poppins, sans-serif">o</text>
                <text x="24" y="16" fill="#FBBC05" fontSize="16" fontWeight="800" fontFamily="Poppins, sans-serif">o</text>
                <text x="35" y="16" fill="#4285F4" fontSize="16" fontWeight="800" fontFamily="Poppins, sans-serif">g</text>
                <text x="47" y="16" fill="#34A853" fontSize="16" fontWeight="800" fontFamily="Poppins, sans-serif">l</text>
                <text x="53" y="16" fill="#EA4335" fontSize="16" fontWeight="800" fontFamily="Poppins, sans-serif">e</text>
              </g>

              {/* Search input pill */}
              <g transform="translate(24, 48)">
                <rect width="222" height="34" rx="17" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
                <circle cx="16" cy="17" r="4.5" stroke="#94a3b8" strokeWidth="1.2" fill="none" />
                <line x1="19.5" y1="20.5" x2="23" y2="24" stroke="#94a3b8" strokeWidth="1.2" />
                <text x="32" y="21" fill="#1e293b" fontSize="9" fontWeight="500" fontFamily="Inter, sans-serif">AI search: SEO vs AEO vs GEO</text>
                <rect x="198" y="11" width="5" height="9" rx="2.5" fill="#4285F4" />
                <path d="M196 16 C 196 20, 205 20, 205 16" stroke="#EA4335" strokeWidth="1" fill="none" />
              </g>

              {/* AI Overview Box */}
              <g transform="translate(24, 94)">
                <rect width="222" height="66" rx="8" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1" />
                <g transform="translate(10, 10)">
                  <rect width="70" height="14" rx="7" fill="#22c55e" fillOpacity="0.15" />
                  <circle cx="8" cy="7" r="3" fill="#16a34a" />
                  <text x="16" y="10" fill="#15803d" fontSize="7" fontWeight="700" fontFamily="Inter, sans-serif">AI OVERVIEW</text>

                  <rect x="0" y="20" width="180" height="6" rx="3" fill="#1e293b" fillOpacity="0.7" />
                  <rect x="0" y="30" width="150" height="5" rx="2.5" fill="#64748b" fillOpacity="0.5" />
                  <rect x="0" y="39" width="120" height="5" rx="2.5" fill="#64748b" fillOpacity="0.5" />
                </g>
              </g>
            </g>
          </svg>
        </div>
      );

    case "business-growth":
      return (
        <div className={`blog-card__visual blog-card__visual--growth ${className}`}>
          <svg
            viewBox="0 0 400 225"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="blog-card__svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="growth-mesh" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#064e3b" />
                <stop offset="60%" stopColor="#047857" />
                <stop offset="100%" stopColor="#0f766e" />
              </linearGradient>
              <linearGradient id="arrow-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#f0fdf4" />
              </linearGradient>
            </defs>
            <rect width="400" height="225" fill="url(#growth-mesh)" />

            <line x1="50" y1="180" x2="350" y2="180" stroke="#10b981" strokeOpacity="0.2" strokeWidth="1" />
            <line x1="50" y1="140" x2="350" y2="140" stroke="#10b981" strokeOpacity="0.2" strokeWidth="1" />
            <line x1="50" y1="100" x2="350" y2="100" stroke="#10b981" strokeOpacity="0.2" strokeWidth="1" />
            <line x1="50" y1="60" x2="350" y2="60" stroke="#10b981" strokeOpacity="0.2" strokeWidth="1" />

            {/* White ascending growth arrow */}
            <g filter="drop-shadow(0 6px 12px rgba(0,0,0,0.3))">
              <polyline
                points="70,165 140,140 195,160 270,80 320,55"
                stroke="url(#arrow-grad)"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <polygon points="320,40 338,58 312,70" fill="#ffffff" />
            </g>

            {/* Plant on stacked coins */}
            <g transform="translate(235, 140)">
              <ellipse cx="25" cy="45" rx="20" ry="6" fill="#14532d" />
              <rect x="5" y="38" width="40" height="7" fill="#047857" />
              <ellipse cx="25" cy="38" rx="20" ry="6" fill="#10b981" />

              <rect x="5" y="30" width="40" height="7" fill="#047857" />
              <ellipse cx="25" cy="30" rx="20" ry="6" fill="#34d399" />

              <path d="M25 30 Q 24 10, 26 2 Q 28 10, 25 30" fill="#a7f3d0" />
              <path d="M25 14 Q 10 8, 8 18 Q 18 20, 25 16" fill="#6ee7b7" />
              <path d="M25 8 Q 40 2, 42 12 Q 32 16, 25 10" fill="#6ee7b7" />
            </g>
          </svg>
        </div>
      );

    case "case-studies":
      return (
        <div className={`blog-card__visual blog-card__visual--case ${className}`}>
          <svg
            viewBox="0 0 400 225"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="blog-card__svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="case-room-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f8fafc" />
                <stop offset="100%" stopColor="#e2e8f0" />
              </linearGradient>
              <linearGradient id="case-screen-glow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#eff6ff" />
                <stop offset="100%" stopColor="#f5f3ff" />
              </linearGradient>
            </defs>
            <rect width="400" height="225" fill="url(#case-room-bg)" />
            <rect y="170" width="400" height="55" fill="#cbd5e1" fillOpacity="0.4" />

            {/* Shadow */}
            <ellipse cx="200" cy="178" rx="120" ry="9" fill="#0f172a" fillOpacity="0.15" />

            {/* Laptop Base */}
            <g transform="translate(90, 172)">
              <path d="M0 0 L220 0 L210 8 L10 8 Z" fill="#94a3b8" />
              <rect x="95" y="2" width="30" height="3" rx="1.5" fill="#64748b" />
            </g>

            {/* Laptop Screen Body */}
            <g transform="translate(100, 32)">
              <rect width="200" height="140" rx="6" fill="#0f172a" stroke="#334155" strokeWidth="1" />
              <rect x="7" y="7" width="186" height="126" rx="3" fill="url(#case-screen-glow)" />

              {/* Header bar */}
              <rect x="7" y="7" width="186" height="14" fill="#ffffff" />
              <circle cx="16" cy="14" r="2.5" fill="#f87171" />
              <circle cx="23" cy="14" r="2.5" fill="#fbbf24" />
              <circle cx="30" cy="14" r="2.5" fill="#34d399" />
              <rect x="42" y="11" width="50" height="6" rx="3" fill="#e2e8f0" />

              {/* Metrics & Wave */}
              <g transform="translate(14, 28)">
                <rect x="0" y="0" width="52" height="24" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="0.8" />
                <rect x="5" y="5" width="22" height="3" rx="1.5" fill="#3b82f6" />
                <rect x="5" y="11" width="32" height="7" rx="2" fill="#0f172a" />

                <rect x="58" y="0" width="52" height="24" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="0.8" />
                <rect x="63" y="5" width="22" height="3" rx="1.5" fill="#10b981" />
                <rect x="63" y="11" width="32" height="7" rx="2" fill="#0f172a" />

                <rect x="116" y="0" width="54" height="24" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="0.8" />
                <rect x="121" y="5" width="22" height="3" rx="1.5" fill="#8b5cf6" />
                <rect x="121" y="11" width="32" height="7" rx="2" fill="#0f172a" />

                <rect x="0" y="30" width="170" height="66" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="0.8" />
                <rect x="8" y="36" width="50" height="4" rx="2" fill="#64748b" />

                <path
                  d="M8 82 Q 35 55, 60 72 T 115 50 T 162 62"
                  stroke="#3b82f6"
                  strokeWidth="2.5"
                  fill="none"
                />
                <path
                  d="M8 82 Q 35 55, 60 72 T 115 50 T 162 62 L 162 90 L 8 90 Z"
                  fill="#3b82f6"
                  fillOpacity="0.08"
                />
              </g>
            </g>
          </svg>
        </div>
      );

    default:
      return (
        <div className={`blog-card__visual blog-card__visual--default ${className}`}>
          <svg
            viewBox="0 0 400 225"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="blog-card__svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="default-bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="50%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#020617" />
              </linearGradient>
              <radialGradient id="default-center-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#0082f9" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#0082f9" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="400" height="225" fill="url(#default-bg-grad)" />
            <circle cx="200" cy="112" r="80" fill="url(#default-center-glow)" />
            <circle cx="200" cy="112" r="50" stroke="#0082f9" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
            <text x="200" y="118" fill="#ffffff" fontSize="18" fontWeight="800" textAnchor="middle" fontFamily="Poppins, sans-serif">
              SCAALABLE
            </text>
          </svg>
        </div>
      );
  }
};

export default ArticleVisual;
