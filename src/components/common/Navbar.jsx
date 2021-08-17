import React from 'react'
import { Link } from 'gatsby'
import {
  navbar,
  navCenter,
  navHeader,
  logoBtn,
  logoIcon,
  navLinks,
} from '../../assets/css/navbar.module.css'
import { FaAlignRight } from 'react-icons/fa'
import Links from '../../constants/links'
import logo from '../../assets/logo.svg'

const Navbar = ({ toggle }) => {
  return (
    <nav className={navbar}>
      <div className={navCenter}>
        <div className={navHeader}>
          <Link to={`/`}>
            <img src={logo} alt="Craig Booker logo" />
          </Link>
          <button type="button" className={logoBtn} onClick={toggle}>
            <FaAlignRight className={logoIcon} />
          </button>
        </div>
        <Links styleClass={navLinks} />
      </div>
    </nav>
  )
}

export default Navbar
