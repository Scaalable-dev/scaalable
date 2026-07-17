import Container from "../../ui/Container";
import HeroContent from "./HeroContent";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <Container>
        <div className="hero__wrapper">
          <HeroContent />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
