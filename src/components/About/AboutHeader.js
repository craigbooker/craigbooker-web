import React from 'react'
import Title from '../Title'
import { StaticImage } from 'gatsby-plugin-image'

import {
  about,
  aboutCenter,
  aboutImg,
  imgContainer,
  aboutInfo,
} from '../../assets/css/about.module.css'
// import { useStaticQuery, graphql } from 'gatsby'
// import Img from 'gatsby-image'

// const getAboutImage = graphql`
//   query aboutHeaderImage {
//     aboutImage: file(relativePath: { eq: "images/craigbookerSquare.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 600) {
//           ...GatsbyImageSharpFluid_tracedSVG
//         }
//       }
//     }
//   }
// `

const AboutHeader = () => {
  // const { aboutImage } = useStaticQuery(getAboutImage)
  return (
    <section className={about}>
      <Title title="about" subtitle="craig" />
      <div className={aboutCenter}>
        <article className={aboutImg}>
          <StaticImage
            src="../../assets/images/craigbookerOval.jpg"
            alt="Craig Booker photo"
          />
        </article>
        <article className={aboutInfo}>
          <h4></h4>
          <p>
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
      </div>
    </section>
  )
}

export default AboutHeader
