import React from 'react'
import { Link } from 'gatsby'
const MobileLinks = ({ styleClass, children }) => {
  return (
    <ul className={styleClass}>
      <li>
        <Link key="home" to="/" className="page-link">
          Start Here
        </Link>
      </li>

      <li>
        <Link to="/blog" className="page-link">
          Blog
        </Link>
        {children}
      </li>
      <li>
        <Link to="/about" className="page-link">
          About
        </Link>
      </li>
    </ul>
  )
}

export default MobileLinks
