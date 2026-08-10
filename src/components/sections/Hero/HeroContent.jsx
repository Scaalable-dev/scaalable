import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

import Badge from "../../ui/Badge";
import Button from "../../ui/Button";
import heroData from "./heroData";

/* The entrance here is the CSS `animate-fade-up` utility — the same one the
   About, Services and Contact heroes use — rather than the framer Reveal the
   rest of the page keeps. Deliberate: this copy is the page's LCP, and Reveal
   holds it at opacity 0 until the lazy motion-features chunk has loaded and
   run, which on a throttled phone pushed LCP two seconds past first paint.
   The CSS animation starts the moment the element exists and looks the same. */
const HeroContent = () => {
  return (
    <div className="hero__content">
      <div className="animate-fade-up" style={{ "--delay": "50ms" }}>
        <Badge>{heroData.badge}</Badge>
      </div>

      <h1
        className="hero__title animate-fade-up"
        style={{ "--delay": "140ms" }}
      >
        {heroData.title.lead}{" "}
        <span className="hero__title-accent">{heroData.title.highlight}</span>
      </h1>

      <p
        className="hero__description animate-fade-up"
        style={{ "--delay": "220ms" }}
      >
        {heroData.description}
      </p>

      <div className="hero__actions animate-fade-up" style={{ "--delay": "300ms" }}>
        {/* Link, not a bare href — these cross routes now, and a plain anchor
            would reload the app instead of navigating client-side. */}
        <Button
          as={Link}
          to={heroData.primaryButton.to}
          size="lg"
          endIcon={<ArrowRight size={18} />}
        >
          {heroData.primaryButton.text}
        </Button>

        <Button
          as={Link}
          to={heroData.secondaryButton.to}
          variant="outline"
          size="lg"
        >
          {heroData.secondaryButton.text}
        </Button>
      </div>

      <ul className="hero__trust animate-fade-up" style={{ "--delay": "380ms" }}>
        {heroData.trust.map((item) => (
          <li key={item} className="hero__trust-item">
            <Check size={15} strokeWidth={3} />

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeroContent;
