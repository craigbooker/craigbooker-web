import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { IoMdArrowRoundForward } from 'react-icons/io'
import Title from '../Title'
import {
  aboutSection,
  aboutCenter,
  aboutImg,
  staticImg,
  aboutInfo,
} from '../../assets/css/about-section.module.css'

const AboutSection = () => {
  // const { aboutImage } = useStaticQuery(getAboutImage)
  return (
    <section className={aboutSection}>
      <Title title="about" subtitle="craig" />
      <div className={aboutCenter}>
        <article className={aboutImg}>
          <StaticImage
            src="../../assets/images/craigbookerOval.jpg"
            alt="Craig Booker photo"
            className={staticImg}
          />

          {/* </div> */}
        </article>
        <article className={aboutInfo}>
          <h4></h4>
          <p>
            My name is Craig Booker. I'm a Writer and Software Developer from
            Oklahoma City, Oklahoma.
          </p>
          <Link to={`/about`} className="btn">
            Learn More <IoMdArrowRoundForward />
          </Link>
        </article>
      </div>
    </section>
  )
}

export default AboutSection
