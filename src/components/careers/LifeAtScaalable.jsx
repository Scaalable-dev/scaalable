import { ArrowDown, Sparkles } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { lifeAtScaalable } from "../../data/jobs";
import "./LifeAtScaalable.css";

const LifeAtScaalable = () => {
  const handleScrollToOpenings = () => {
    const el = document.getElementById("openings");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="life-at-scaalable section-wash" id="life-at-scaalable" aria-labelledby="life-title">
      <Container>
        <div className="life-at-scaalable__wrapper">
          <div className="life-at-scaalable__header">
            <SectionHeading
              badge="Collaboration & Mindset"
              title={lifeAtScaalable.title}
              description={lifeAtScaalable.subtitle}
              maxWidth="820px"
            />
          </div>

          <div className="life-at-scaalable__grid">
            {/* Visual Column: Original SVG Workflow Graphic */}
            <div className="life-at-scaalable__visual-col">
              <Reveal direction="left" amount={0.2}>
                <div className="life-at-scaalable__art-card">
                  <div className="life-at-scaalable__art-glow" aria-hidden="true" />
                  
                  <svg
                    className="life-at-scaalable__art-svg"
                    viewBox="0 0 460 380"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id="artGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0082f9" />
                        <stop offset="100%" stopColor="#8939fa" />
                      </linearGradient>
                      <linearGradient id="artGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#b93ffb" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>

                    {/* Background geometric accents */}
                    <rect x="20" y="20" width="420" height="340" rx="20" fill="white" stroke="rgba(0,130,249,0.12)" strokeWidth="1.5" />
                    <line x1="20" y1="70" x2="440" y2="70" stroke="rgba(229,231,235,0.7)" />
                    
                    {/* Window dots */}
                    <circle cx="50" cy="45" r="5" fill="#ef4444" />
                    <circle cx="68" cy="45" r="5" fill="#f59e0b" />
                    <circle cx="86" cy="45" r="5" fill="#22c55e" />

                    {/* Central Flow Nodes */}
                    {/* Node 1: Ideate */}
                    <rect x="50" y="110" width="105" height="75" rx="12" fill="#eff4fc" stroke="rgba(0,130,249,0.3)" />
                    <circle cx="75" cy="135" r="12" fill="#0082f9" />
                    <rect x="95" y="130" width="45" height="6" rx="3" fill="#64748b" />
                    <rect x="65" y="160" width="75" height="5" rx="2.5" fill="#cbd5e1" />

                    {/* Connecting arrow 1 */}
                    <path d="M165 147 H205" stroke="url(#artGrad1)" strokeWidth="2.5" strokeDasharray="3 3" />

                    {/* Node 2: Prototype */}
                    <rect x="215" y="110" width="105" height="75" rx="12" fill="#faf5ff" stroke="rgba(137,57,250,0.3)" />
                    <circle cx="240" cy="135" r="12" fill="#8939fa" />
                    <rect x="260" y="130" width="45" height="6" rx="3" fill="#64748b" />
                    <rect x="230" y="160" width="75" height="5" rx="2.5" fill="#cbd5e1" />

                    {/* Connecting arrow 2 */}
                    <path d="M330 147 H365" stroke="url(#artGrad2)" strokeWidth="2.5" strokeDasharray="3 3" />

                    {/* Node 3: Scale */}
                    <rect x="370" y="110" width="70" height="75" rx="12" fill="#ecfeff" stroke="rgba(6,182,212,0.3)" />
                    <circle cx="405" cy="135" r="12" fill="#06b6d4" />
                    <rect x="385" y="160" width="40" height="5" rx="2.5" fill="#cbd5e1" />

                    {/* Bottom Collaborative Panel */}
                    <rect x="50" y="215" width="360" height="115" rx="14" fill="#f8f9fb" stroke="rgba(229,231,235,0.9)" />
                    
                    {/* Mini activity cards */}
                    <rect x="70" y="235" width="150" height="75" rx="8" fill="white" stroke="rgba(0,130,249,0.15)" />
                    <circle cx="90" cy="255" r="8" fill="url(#artGrad1)" />
                    <rect x="106" y="252" width="90" height="6" rx="3" fill="#475569" />
                    <rect x="80" y="275" width="120" height="4" rx="2" fill="#cbd5e1" />
                    <rect x="80" y="287" width="90" height="4" rx="2" fill="#e2e8f0" />

                    <rect x="240" y="235" width="150" height="75" rx="8" fill="white" stroke="rgba(137,57,250,0.15)" />
                    <circle cx="260" cy="255" r="8" fill="url(#artGrad2)" />
                    <rect x="276" y="252" width="90" height="6" rx="3" fill="#475569" />
                    <rect x="250" y="275" width="120" height="4" rx="2" fill="#cbd5e1" />
                    <rect x="250" y="287" width="80" height="4" rx="2" fill="#e2e8f0" />
                  </svg>

                  <div className="life-at-scaalable__art-tag">
                    <Sparkles size={14} className="life-at-scaalable__art-tag-icon" />
                    <span>Creative &amp; Technical Sandbox</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Pillars Column */}
            <div className="life-at-scaalable__pillars-col">
              <div className="life-at-scaalable__pillars">
                {lifeAtScaalable.pillars.map((pillar, i) => (
                  <Reveal key={pillar.title} delay={i * 0.1} amount={0.2}>
                    <div className="life-at-scaalable__pillar-card">
                      <div className="life-at-scaalable__pillar-num">
                        0{i + 1}
                      </div>
                      <div className="life-at-scaalable__pillar-content">
                        <h3 className="life-at-scaalable__pillar-title">
                          {pillar.title}
                        </h3>
                        <p className="life-at-scaalable__pillar-desc">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="life-at-scaalable__action">
                <Button
                  variant="primary"
                  size="md"
                  onClick={handleScrollToOpenings}
                  endIcon={<ArrowDown size={16} strokeWidth={2.2} />}
                >
                  Explore Current Openings
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LifeAtScaalable;
