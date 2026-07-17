import Button from "../../ui/Button";
import Badge from "../../ui/Badge";

import heroData from "./heroData";

const HeroContent = () => {
  return (
    <div className="hero__content">
      <Badge>{heroData.badge}</Badge>

      <h1 className="hero__title">{heroData.title}</h1>

      <p className="hero__description">{heroData.description}</p>

      <div className="hero__buttons">
        <Button>Get Started</Button>

        <Button variant="outline">View Portfolio</Button>
      </div>

      <ul className="hero__features">
        {heroData.features.map((feature) => (
          <li key={feature}>✓ {feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default HeroContent;
