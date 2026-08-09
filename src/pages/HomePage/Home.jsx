import { useEffect } from "react";

import HomeCTA from "../../components/sections/CTA";
import DeliveryPromise from "../../components/sections/DeliveryPromise";
import FAQ from "../../components/sections/FAQ";
import Hero from "../../components/sections/Hero";
import ProcessSection from "../../components/sections/Process";
import Services from "../../components/sections/Services";
import TechMarquee from "../../components/sections/TechMarquee";
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
      <TechMarquee />
      <WhoWeHelp />
      <DeliveryPromise />
      <Services />
      <ProcessSection />
      <FAQ />
      <HomeCTA />
    </div>
  );
};

export default Home;
