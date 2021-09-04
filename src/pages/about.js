import React from 'react'
import HeroSpacer from '../components/common/HeroSpacer'
import Hero from '../components/common/Hero'
import StyledHero from '../components/StyledHero'
import HeroBanner from '../components/HeroBanner'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import AboutHeader from '../components/About/AboutHeader'
import AboutSection from '../components/common/AboutSection'

import Title from '../components/Title'

import {
  about,
  aboutCenter,
  aboutImg,
  aboutInfo,
} from '../assets/css/about.module.css'

const About = ({ data }) => {
  return (
    <Layout>
      <SEO title="About " />
      {/* <HeroSpacer /> */}
      <StyledHero>
        <HeroBanner title="about" info="" />
      </StyledHero>
      {/* <Hero /> */}
      <AboutHeader />
      <br />
    </Layout>
  )
}

export default About
