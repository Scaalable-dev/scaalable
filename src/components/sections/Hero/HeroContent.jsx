import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

import Badge from "../../ui/Badge";
import Button from "../../ui/Button";
import Reveal from "../../ui/Reveal";
import heroData from "./heroData";

const HeroContent = () => {
  return (
    <div className="hero__content">
      <Reveal delay={0.05} amount={0}>
        <Badge>{heroData.badge}</Badge>
      </Reveal>

      <Reveal delay={0.14} amount={0}>
        <h1 className="hero__title">
          {heroData.title.lead}{" "}
          <span className="hero__title-accent">{heroData.title.highlight}</span>
        </h1>
      </Reveal>

      <Reveal delay={0.22} amount={0}>
        <p className="hero__description">{heroData.description}</p>
      </Reveal>

      <Reveal className="hero__actions" delay={0.3} amount={0}>
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
      </Reveal>

      <Reveal delay={0.38} amount={0}>
        <ul className="hero__trust">
          {heroData.trust.map((item) => (
            <li key={item} className="hero__trust-item">
              <Check size={15} strokeWidth={3} />

              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
};

export default HeroContent;
