import React from 'react'
import SocialLinks from '../../constants/socialLinks'
import SiteConfig from '../../../data/SiteConfig'

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-icons" />
        <p>
          &copy;{new Date().getFullYear()} {SiteConfig.copyright}. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
