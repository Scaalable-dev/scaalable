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
        <a href={heroData.primaryButton.href}>
          <Button>{heroData.primaryButton.text}</Button>
        </a>
      </div>
    </div>
  );
};

export default HeroContent;
