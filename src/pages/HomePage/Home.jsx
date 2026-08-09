import { useEffect } from "react";

import Contact from "../../components/sections/Contact";
import FAQ from "../../components/sections/FAQ";
import Hero from "../../components/sections/Hero";
import Services from "../../components/sections/Services";
import WhoWeHelp from "../../components/sections/WhoWeHelp";

import homeData from "./homeData";

import "./Home.css";

const Home = () => {
  /* No Helmet provider is mounted in main.jsx, so the title and description are
     set directly. Without this every route inherits whatever index.html says. */
  useEffect(() => {
    document.title = homeData.meta.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", homeData.meta.description);
  }, []);

  return (
    <div className="home">
      <Hero />
      <WhoWeHelp />
      <Services />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;
