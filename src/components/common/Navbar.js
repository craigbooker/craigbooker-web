import React from 'react'
import { Link } from 'gatsby'
import { FaBars } from 'react-icons/fa'
import logo from '../../assets/images/logo.svg'
import Links from '../../constants/links'

const Navbar = ({ toggle }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link key="home" to="/">
            {/* <span>Craig Booker</span> */}
            <img src={logo} alt="Craig Booker logo" />
          </Link>
          <button className="toggle-btn" onClick={toggle}>
            <FaBars />
          </button>
        </div>
        <Links styleClass="nav-links" />
      </div>
    </nav>
  )
}

export default Navbar
