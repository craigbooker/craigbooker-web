import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const HeroSpacer = ({ showPerson }) => {
  return (
    <header className="hero-spacer">
      {showPerson && (
        <StaticImage
          src="../../assets/images/person.png"
          placeholder="blurred"
          className="hero-spacer-person"
          alt="person typing"
        />
      )}
    </header>
  )
}

export default HeroSpacer
