import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { graphql } from 'gatsby'
import Posts from '../components/Posts'
import SEO from '../components/SEO'

const PostsPage = ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data

  return (
    <Layout>
      <SEO title="Posts " />
      <Hero />
      <Posts posts={posts} title="all posts" />
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
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

// export const query1 = graphql`
//   {
//     posts: allMdx(
//       filter: { fileAbsolutePath: { regex: "/posts/" } }
//       sort: { fields: frontmatter___date, order: DESC }
//     ) {
//       edges {
//         node {
//           id
//           frontmatter {
//             path
//             title
//             tags
//             category
//             series
//             date
//           }
//         }
//       }
//     }
//   }
// `

export default PostsPage
