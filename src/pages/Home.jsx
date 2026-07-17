import About from "../components/sections/About/About";
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
    </main>
  );
};

export default Home;
