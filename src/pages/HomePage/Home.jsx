import { useEffect } from "react";

import HomeCTA from "../../components/sections/CTA";
import DeliveryPromise from "../../components/sections/DeliveryPromise";
import FAQ from "../../components/sections/FAQ";
import Hero from "../../components/sections/Hero";
import ProcessSection from "../../components/sections/Process";
import Services from "../../components/sections/Services";
import TechMarquee from "../../components/sections/TechMarquee";
import WhoWeHelp from "../../components/sections/WhoWeHelp";

import { homeSeo } from "./homeData";
import { applyPageSeo } from "../../lib/pageMeta";

import "./Home.css";

const Home = () => {
  /* No Helmet provider is mounted in main.jsx, so the metadata is applied
     directly. Without this every route inherits whatever index.html says.

     Prerendered HTML already carries these tags, so on a first load this
     rewrites them with identical values; it earns its keep on client-side
     navigations, which produce no new document at all. */
  useEffect(() => {
    applyPageSeo(homeSeo());
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
