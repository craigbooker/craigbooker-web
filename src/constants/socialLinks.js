import React from 'react'
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaLinkedin,
} from 'react-icons/fa'
const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={styleClass}>
      <li>
        <a href="https://twitter.com/craigbooker">
          <FaTwitterSquare className="social-icon twitter-icon"></FaTwitterSquare>
        </a>
      </li>
      <li>
        <a href="https://github.com/craigbooker">
          <FaGithubSquare className="social-icon github-icon"></FaGithubSquare>
        </a>
      </li>
      <li>
        <a href="https://linkedin.com/in/craigbooker">
          <FaLinkedin className="social-icon linkedin-icon"></FaLinkedin>
        </a>
      </li>
      <li>
        <a href="https://facebook.com/craigbooker">
          <FaFacebookSquare className="social-icon facebook-icon"></FaFacebookSquare>
        </a>
      </li>
    </ul>
  )
}
export default SocialLinks
