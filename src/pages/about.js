import React from 'react'
import HeroSpacer from '../components/common/HeroSpacer'
import Hero from '../components/common/Hero'
import StyledHero from '../components/StyledHero'
import HeroBanner from '../components/HeroBanner'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import AboutHeader from '../components/About/AboutHeader'
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
      {/* <div className={aboutCenter}>
        <article className={aboutInfo}>
          <Title title="about" subtitle="craig" />
          <p>
            {' '}
            I'm a Writer and Software Developer from Oklahoma City, Oklahoma. My
            childhood love for electronics lead me to software. I began writing
            in 2000 and I wrote off and on for fifteen years before I would
            discover it was a gift. It was always just something I did in my
            spare time to express myself. I never considered it as my passion or
            as a potential career. While working at Apple I learned a great deal
            about problem solving and customer service. I aim to take what I
            learned at Apple, combining the best customer service, a love for
            great apps and dedication to customers to provide the best products
            and services.
          </p>
        </article>
      </div> */}
    </Layout>
  )
}

export default About
