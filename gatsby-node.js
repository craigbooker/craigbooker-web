const path = require('path')
const siteConfig = require('./data/SiteConfig')
const moment = require('moment')
const _ = require('lodash')

const oQuery = `
    {
      posts: allMdx(
				filter: { fileAbsolutePath: { regex: "/posts/" } }  
				sort: { fields: frontmatter___date, order: DESC}
			)  {
        edges {
          node {
            frontmatter {
              slug
              title
              path
            }
          }
          }
      }

      categories: allMdx {
        distinct(field: frontmatter___category)
      }

    }
  `

// // create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const templates = {
    post: path.resolve('src/templates/post-template.js'),
    category: path.resolve('src/templates/category-template.js'),
    series: path.resolve('src/templates/series-template.js'),
    postListingTemplate: path.resolve('src/templates/post-listing-template.js'),
  }

  //const response = await graphql(oQuery)

  // Grab Query
  const result = await graphql(oQuery)

  // Check for errors
  if (result.errors) {
    console.error(result.errors)
    throw new Error(result.errors)
  }

  const postEdges = result.data.posts.edges
  // const seriesEdges = result.data.series.edges

  // Paging
  const { postsPerPage, seriesPerPage } = siteConfig

  // Create blog post pages
  postEdges.forEach((edge, index) => {
    const nextID = index + 1 < postEdges.length ? index + 1 : 0
    const prevID = index - 1 >= 0 ? index - 1 : postEdges.length - 1
    const nextEdge = postEdges[nextID]
    const prevEdge = postEdges[prevID]

    console.log('PATH:' + edge.node.frontmatter.path)

    createPage({
      path: `${edge.node.frontmatter.path}/`,
      component: templates.post,
      context: {
        slug: edge.node.frontmatter.slug,
        id: edge.node.id,
        nexttitle: nextEdge.node.frontmatter.title,
        nextslug: nextEdge.node.frontmatter.slug,
        prevtitle: prevEdge.node.frontmatter.title,
        prevslug: prevEdge.node.frontmatter.slug,
      },
    })
  })

  // Create blog-list pages
  if (postsPerPage) {
    const pageCount = Math.ceil(postEdges.length / postsPerPage)

    Array.from({ length: pageCount }).forEach((_, index, arr) => {
      // console.log('Blog Post Edges Count: ' + postEdges.length)
      // console.log('Blog Posts Per Page Count: ' + postsPerPage)
      // console.log('Blog PageCount: ' + pageCount)

      createPage({
        path: index === 0 ? `/blog` : `/blog/page/${index + 1}/`,
        component: templates.postListingTemplate,
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          pageCount,
          currentPageNum: index + 1,
        },
      })
    })
  }

  /* 
Original to the MDX blog
Creates posts
*/
  // response.data.posts.nodes.forEach(({ frontmatter: { slug } }) => {
  //   createPage({
  //     path: `/${slug}`,
  //     component: templates.post,
  //     context: {
  //       slug,
  //     },
  //   })
  // })
  /* 
Original to the MDX blog
Creates category pages
*/
  // response.data.categories.distinct.forEach(category => {
  //   createPage({
  //     path: `/category/${category}`,
  //     component: templates.category,
  //     context: {
  //       category,
  //     },
  //   })
  // })

  // response.data.series.forEach(series => {
  //   createPage({
  //     path: `/series/${series}`,
  //     component: templates.series,
  //     context: {
  //       series,
  //     },
  //   })
  // })
}
