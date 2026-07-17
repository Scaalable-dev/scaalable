import Container from "../../ui/Container";
import SectionHeading from "../../ui/SectionHeading";
import trustData from "./trustData";
import "./Trust.css";

const Trust = () => {
  return (
    <section className="trust">
      <Container>
        <SectionHeading title={trustData.title} align="center" />

        <div className="trust__logos">
          {trustData.logos.map((logo) => (
            <div key={logo.id} className="trust__logo">
              {logo.name}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Trust;
