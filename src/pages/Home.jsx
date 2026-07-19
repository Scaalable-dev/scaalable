import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import FAQ from "../components/sections/FAQ";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import WhoWeHelp from "../components/sections/WhoWeHelp/WhoWeHelp";

const Home = () => {
  return (
    <main>
      <Hero />
      <WhoWeHelp />
      <Services />
      <About />
      {/* <Testimonials /> */}
      <FAQ />
      <Contact />
    </main>
  );
};

export default Home;
