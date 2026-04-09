import React from 'react'
import Banner from '../pages/Home/Banner'
import Industries from '../pages/Home/Industries'
import Clients from '../pages/Home/Clients'
import WhyChooseUs from '../pages/AboutSiteforce/WhyChooseUs'
import Blog from '../pages/whatWeThink/Blog'
import CaseStudies from '../pages/whatWeThink/CaseStudies'
import CallToAction from '../pages/AboutSiteforce/CallToAction'
import ContactUs from '../pages/ContactUs/ContactUs'

const Landing = () => {
  return (
    <>
    <Banner/>
    <Clients/>
    <Industries/>
    <WhyChooseUs/>
    <CaseStudies/>
    <Blog/>
    <CallToAction/>
    <ContactUs/>
    </>
  )
}

export default Landing
