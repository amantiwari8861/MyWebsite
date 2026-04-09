import React, { useEffect } from "react";
import CareersHero from "./CareersHero";
import EmployeeBenefits from "./EmployeeBenefits";
import HiringProcess from "./HiringProcess";
import InternshipProgram from "./InternshipProgram";
import JobOpenings from "./JobOpenings";
import LifeAtSiteforce from "./LifeAtSiteforce";
import { motion, useScroll, useSpring } from "framer-motion";

function Careers() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 origin-left z-[100]"
        style={{ scaleX }}
      />

      <CareersHero />
      <div className="bg-white">
        <LifeAtSiteforce />
        <JobOpenings />
        <EmployeeBenefits />
        <HiringProcess />
        <InternshipProgram />
      </div>
    </div>
  );
}

export default Careers;