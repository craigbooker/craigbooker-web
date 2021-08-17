import React from 'react'
import { Link } from 'gatsby'
const Links = ({ styleClass, children }) => {
  return (
    <ul className={styleClass}>
      <li>
        <Link to="/about" className="page-link">
          Start Here
        </Link>
      </li>
      <li>
        <Link to="/posts" className="page-link">
          Blog
        </Link>
        {children}
      </li>
    </ul>
  )
}

export default Links
