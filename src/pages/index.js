import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import StyledHero from '../components/StyledHero'
import HeroBanner from '../components/HeroBanner'
// import Posts from '../components/Posts'
import RecentPosts from '../components/Home/RecentPosts'

import SEO from '../components/SEO'

const IndexPage = ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data

  return (
    <Layout>
      <SEO title="Home " />
      <Hero showPerson />
      <StyledHero>
        <HeroBanner title="Hello & Welcome!" info="" />
      </StyledHero>
      {/* <Posts posts={posts} title="recently published" /> */}
      <RecentPosts posts={posts} title="recently published" />
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(limit: 3, sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        excerpt
        frontmatter {
          title
          author
          category
          date(formatString: "MMMM, Do YYYY")
          slug
          cover {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
  }
`

export default IndexPage
