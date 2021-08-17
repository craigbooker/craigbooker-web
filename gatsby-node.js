const path = require('path')
const siteConfig = require('./data/SiteConfig')
const moment = require('moment')
const _ = require('lodash')

const query = `    
{
      posts: allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
      categories: allMdx {
        distinct(field: frontmatter___category)
      }
        series: allMdx(
    filter: {fileAbsolutePath: {regex: "/series/"}}
    sort: {fields: frontmatter___date, order: DESC}
  ) {
    edges {
      node {
        id
        frontmatter {
          path
          title
          tags
          category
          date
        }
      }
    }
  }

}
`

// // create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const templates = {
    post: path.resolve('src/templates/post-template.js'),
    category: path.resolve('src/templates/category-template.js'),
  }

  const response = await graphql(`
    {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
      categories: allMdx {
        distinct(field: frontmatter___category)
      }
    }
  `)

  // Grab Query
  const result = await graphql(query)

  // Check for errors
  if (result.errors) {
    console.error(result.errors)
    throw new Error(result.errors)
  }

  const postEdges = result.data.posts.nodes

  /* 
Original to the MDX blog
Creates posts
*/
  response.data.allMdx.nodes.forEach(({ frontmatter: { slug } }) => {
    createPage({
      path: `/${slug}`,
      component: templates.post,
      context: {
        slug,
      },
    })
  })
  /* 
Original to the MDX blog
Creates category pages
*/
  response.data.categories.distinct.forEach(category => {
    createPage({
      path: `/category/${category}`,
      component: templates.category,
      context: {
        category,
      },
    })
  })
}
