import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import SEO from '../components/seo'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
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
      <Hero />
      <Posts posts={posts} title="all posts" />
      <Pagination pageContext={pageContext} />
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

const Wrapper = styled.article`
  margin-bottom: 3rem;
  .info {
    text-align: center;
  }
  .img {
    margin-bottom: 1rem;
    border-radius: var(--radius);
    height: 17rem;
  }
  .category {
    display: inline-block;
    margin-bottom: 1rem;
    background: var(--clr-grey-10);
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
  }
  h3 {
    font-weight: 400;
    margin-bottom: 1rem;
    text-transform: initial;
  }
  .underline {
    width: 5rem;
    height: 1px;
    background: var(--clr-grey-9);
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  p {
    color: var(--clr-grey-5);
    line-height: 1.8;
  }
  .link {
    text-transform: uppercase;
    letter-spacing: var(--spacing);
    font-weight: 700;
    color: var(--clr-primary-5);
    padding-bottom: 0.1rem;
    display: flex;
    align-items: center;
    svg {
      margin-left: 0.25rem;
      font-size: 1.2rem;
    }
  }
  .link:hover {
    border-color: var(--clr-primary-8);
    color: var(--clr-primary-8);
  }
  footer {
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid var(--clr-grey-9);
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--clr-grey-5);

    & .date {
      display: flex;
      align-items: center;
      & .icon {
        color: var(--clr-primary-5);
        margin-right: 0.5rem;
      }
    }
  }
  @media (min-width: 600px) {
    .img {
      height: 20rem;
    }
  }
  @media (min-width: 800px) {
    .img {
      height: 25rem;
    }
  }
  @media (min-width: 992px) {
    & {
      display: grid;
      grid-template-columns: 30rem 1fr;
      column-gap: 1.5rem;
      .info {
        text-align: left;
      }
      .img {
        height: 100%;
        max-height: 20rem;
      }
      .underline {
        margin-left: 0;
        margin-right: 0;
      }
    }
  }
`
