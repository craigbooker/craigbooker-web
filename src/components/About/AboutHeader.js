import React from 'react'
import Title from '../Title'
import {
  about,
  aboutCenter,
  aboutImg,
  imgContainer,
  aboutInfo,
} from '../../assets/css/about.module.css'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const getAboutImage = graphql`
  query aboutHeaderImage {
    aboutImage: file(relativePath: { eq: "images/craigbookerSquare.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const AboutHeader = () => {
  const { aboutImage } = useStaticQuery(getAboutImage)
  return (
    <section className={about}>
      <Title title="about" subtitle="craig" />
      <div className={aboutCenter}>
        <article className={aboutImg}>
          <div className={imgContainer}>
            {/* <img src={img} alt="about company" /> */}
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="awesome landscape"
            />
          </div>
        </article>
        <article className={aboutInfo}>
          <h4></h4>
          <p>
            I'm a Writer and Software Developer from Oklahoma City, Oklahoma. My
            love for electronics started while tinkering with electronics when I
            was young. This love for electronic turned into a love for computers
            which in turn lead me to software. My earliest memeories of writing
            was between 2000 and 2001. I wrote off and on for fifteen years
            before I would discover it was a gift. It was always just something
            I did in my spare time to express myself. I never considered it as
            my passion or as a potential career.
          </p>
          <p>
            It was while working at Apple where I would learn about Apple’s
            methods in training individuals to get the most out of their
            technology. I also learned about their people-first culture and a
            true appreciation of people of all types. It was while working at
            Apple that I affirmed some of my ideas on customer service. I aim to
            take what I learned at Apple, combining the best customer service, a
            love for great apps and dedication to customers to provide the best
            products and services.
          </p>
        </article>
      </div>
    </section>
  )
}

export default AboutHeader
