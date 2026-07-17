import Badge from "../../ui/Badge";
import Button from "../../ui/Button";
import heroData from "./heroData";

const HeroContent = () => {
  return (
    <div className="hero__content">
      <Badge>{heroData.badge}</Badge>

      <h1 className="hero__title">{heroData.title}</h1>

      <p className="hero__description">{heroData.description}</p>

      <div className="hero__actions">
        <Button>{heroData.primaryButton.text}</Button>

        <Button variant="outline">{heroData.secondaryButton.text}</Button>
      </div>

      <div className="hero__stats">
        {heroData.stats.map((item) => (
          <div className="hero__stat" key={item.label}>
            <h3>{item.value}</h3>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroContent;
