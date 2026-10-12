import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import CareersHero from "../../components/careers/CareersHero";

import WhyJoinSection from "../../components/careers/WhyJoinSection";
import JobOpeningsSection from "../../components/careers/JobOpeningsSection";
import LifeAtScaalable from "../../components/careers/LifeAtScaalable";
import CareersClosingCta from "../../components/careers/CareersClosingCta";
import { careersSeo } from "../../data/jobs";
import { applyPageSeo } from "../../lib/pageMeta";
import "./CareersPage.css";

const CareersPage = () => {
  const location = useLocation();

  useEffect(() => {
    applyPageSeo(careersSeo());
  }, []);

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="careers-page">
      {/* 1. Hero Section */}
      <CareersHero />

     


      {/* 3. Why Join Scaalable Feature Cards */}
      <WhyJoinSection />

      {/* 4. Central Openings Section with Category Filters */}
      <JobOpeningsSection />

      {/* 5. Life at Scaalable Collaboration Section */}
      <LifeAtScaalable />

      {/* 6. Closing Call to Action */}
      <CareersClosingCta />

    </div>
  );
};

export default CareersPage;
