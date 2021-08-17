import React from 'react'
import styled from 'styled-components'

import { useStaticQuery, graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'

const StyledHero = ({ img, className, children, home }) => {
  const { backgroundImage123 } = useStaticQuery(
    graphql`
      query {
        backgroundImage123: file(
          relativePath: { eq: "images/defaultBcg.jpg" }
        ) {
          childImageSharp {
            gatsbyImageData(
              width: 2000
              quality: 50
              webpOptions: { quality: 70 }
            )
          }
        }
      }
    `
  )

  const pluginImage = getImage(backgroundImage123)
  // const pluginImage = getImage(backgroundImage123)

  return (
    <BgImage className={className} image={img || pluginImage} home={home}>
      {children}
    </BgImage>
  )
}

export default styled(StyledHero)`
  min-height: ${props => (props.home ? 'calc(100vh - 80px)' : '50vh')};
  background: ${props =>
    props.home
      ? 'linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))'
      : 'none'};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`
