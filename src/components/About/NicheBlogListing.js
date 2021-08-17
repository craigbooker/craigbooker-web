import React, { Component } from 'react'

import { StaticQuery, graphql, Link } from 'gatsby'
import NicheBlogCard from './NicheBlogCard'
import Title from '../Title'
import { featuredArticles, center } from '../../assets/css/items.module.css'

const NicheBlogListing = ({ data }) => {
  const {
    allMdx: { nodes: blogs },
  } = data

  return (
    <section className={featuredArticles}>
      <Title title=" my niche" subtitle="blogs" />
      Below are my niche blog sites where I write about my various interests.
      <div className={center}>
        {blogs.map(({ node }) => {
          return <NicheBlogCard key={node.id} blog={node} />
        })}
      </div>
    </section>
  )
}

export const query = graphql`
  {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/blogs/" } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 3
    ) {
      nodes {
        id
        excerpt
        frontmatter {
          title
          description
          tags
          url
          date
          cover {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`

export default NicheBlogListing
