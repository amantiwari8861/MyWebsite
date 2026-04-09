import React from 'react'
import EarlyCareersHero from './EarlyCareersHero'
import ProgramsSection from './ProgramsSection'
import HiringProcess from './HiringProcess'
import JobListings from './JobListings'
import FAQSection from './FAQSection'
import CallToAction from './CallToAction'
import CareersHero from '../pages/careers/CareersHero'
import LifeAtSiteforce from '../pages/careers/LifeAtSiteforce'
import JobOpenings from '../pages/careers/JobOpenings'
import EmployeeBenefits from '../pages/careers/EmployeeBenefits'
import InternshipProgram from '../pages/careers/InternshipProgram'

const Early_Careers = () => {
  return (
    <>
    <EarlyCareersHero/>
    <CareersHero/>
    <LifeAtSiteforce/>
    <JobOpenings />
    <HiringProcess/>
    <EmployeeBenefits/>
    <InternshipProgram/>
    <ProgramsSection/>
    <JobListings/>
    <FAQSection/>
    <CallToAction/>
    </>
  )
}

export default Early_Careers
