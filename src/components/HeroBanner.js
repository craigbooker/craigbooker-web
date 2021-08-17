import React from 'react'
import { heroBanner } from '../assets/css/herobanner.module.css'

const HeroBanner = ({ title, info, children }) => {
  return (
    <div className={heroBanner}>
      <h1>{title}</h1>
      <p>{info}</p>
      {children}
    </div>
  )
}

export default HeroBanner
