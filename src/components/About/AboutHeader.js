import React from 'react'
import Title from '../Title'
import { StaticImage } from 'gatsby-plugin-image'

import {
  about,
  aboutCenter,
  aboutImg,
  aboutInfo,
} from '../../assets/css/about.module.css'

const AboutHeader = () => {
  // const { aboutImage } = useStaticQuery(getAboutImage)
  return (
    <section className={about}>
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
            My name is Craig Booker. I'm a Writer and Software Developer from
            Oklahoma City, Oklahoma.
          </p>
        </article>
      </div>
    </section>
  )
}

export default AboutHeader
