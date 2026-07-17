import "./Hero.css";

import Container from "../../ui/Container";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section className="hero">
      <Container>
        <div className="hero__wrapper">
          <HeroContent />
          <HeroImage />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
