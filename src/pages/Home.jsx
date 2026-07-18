import About from "../components/sections/About";
import FAQ from "../components/sections/FAQ";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Testimonials from "../components/sections/Testimonials";
import WhoWeHelp from "../components/sections/WhoWeHelp/WhoWeHelp";

const Home = () => {
  return (
    <main>
      <Hero />
      <WhoWeHelp />
      <Services />
      <About />
      <Testimonials />
      <FAQ />
    </main>
  );
};

export default Home;
