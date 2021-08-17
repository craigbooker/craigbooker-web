import React from 'react'
// import Hero from '../components/Hero'
import StyledHero from '../components/StyledHero'
import HeroBanner from '../components/HeroBanner'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import AboutHeader from '../components/About/AboutHeader'

const About = ({ data }) => {
  return (
    <Layout>
      <SEO title="About " />
      <StyledHero>
        <HeroBanner title="about" info="" />
      </StyledHero>
      <AboutHeader />
    </Layout>
  )
}

export default About
