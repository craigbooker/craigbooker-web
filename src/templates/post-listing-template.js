import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import StyledHero from '../components/StyledHero'
import HeroBanner from '../components/HeroBanner'
import Posts from '../components/Posts'
import SEO from '../components/seo'
import Pagination from '../components/Pagination'

const ArticleIndex = ({ data, pageContext }) => {
  const {
    allMdx: { nodes: posts },
  } = data

  //console.log('POSTS:' + posts)
  // const { posts } = data.posts

  return (
    <Layout>
      <SEO title="Posts " />
      {/* <Hero /> */}
      <StyledHero>
        <HeroBanner title="Blog" info="" />
      </StyledHero>
      <main>
        <Posts posts={posts} title="blog" />
        <Pagination pageContext={pageContext} />
      </main>

      {/* <section className={styles.links}>
        {!isFirst && (
          <Link to={prevPage} className={styles.link}>
            Previous
          </Link>
        )}
        {[...Array(pageCount)].map((_val, index) => {
          const pageNum = index + 1
          return (
            <Link
              key={`listing-page-${pageNum}`}
              to={pageNum === 1 ? '/blog' : `/blog/page/${pageNum}/`}
              className={
                index + 1 === currentPageNum
                  ? `${styles.link} ${styles.active}`
                  : `${styles.link}`
              }
            >
              {pageNum}
            </Link>
          )
        })}
        {!isLast && (
          <Link to={nextPage} className={styles.link}>
            Next
          </Link>
        )}
      </section> */}
    </Layout>
  )
}

export default ArticleIndex

/* eslint no-undef: "off" */
// export const articleIndexQuery = graphql`
//   query articleIndexQuery($skip: Int!, $limit: Int!) {
//     allMdx(
//       filter: { fileAbsolutePath: { regex: "/posts/" } }
//       sort: { fields: frontmatter___date, order: DESC }
//       skip: $skip
//       limit: $limit
//     ) {
//       edges {
//         node {
//           id
//           frontmatter {
//             slug
//           }
//         }
//       }
//     }
//   }
// `

/* eslint no-undef: "off" */
export const articleIndexQuery = graphql`
  query articleIndexQuery($skip: Int!, $limit: Int!) {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      nodes {
        id
        excerpt
        frontmatter {
          title
          author
          category
          tags
          date(formatString: "MMMM, Do YYYY")
          slug
          cover {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
