import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { hero, heroPerson } from '../../assets/css/hero.module.css'

const Hero = ({ showPerson }) => {
  return (
    <header className={hero}>
      {showPerson && (
        <StaticImage
          src="../../assets/images/person.png"
          placeholder="blurred"
          className={heroPerson}
          alt="Craig Booker photo"
        />
      )}
    </header>
  )
}

export default Hero
