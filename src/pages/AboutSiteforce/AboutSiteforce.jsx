import React, { useEffect } from 'react'
import AboutHero from './AboutHero'
import MissionVision from './MissionVision'
import LeadershipTeam from './LeadershipTeam'
import WhyChooseUs from './WhyChooseUs'
import CallToAction from './CallToAction'
import CompanyOverview from './CompanyOverview'
import OurServices from './OurServices'
import CompanyStats from './CompanyStats'
import { motion, useScroll, useSpring } from 'framer-motion'

const AboutSiteforce = () => {
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
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[100]"
        style={{ scaleX }}
      />
      <AboutHero/>
      <CompanyOverview/>
      <OurServices/>
      <MissionVision/>
      <CompanyStats/>
      <LeadershipTeam/>
      <WhyChooseUs/>
      <CallToAction/>
    </div>
  )
}

export default AboutSiteforce
