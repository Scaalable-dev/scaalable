import About from "../components/sections/About";
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
    </main>
  );
};

export default Home;
