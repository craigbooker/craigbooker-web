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
      categoryList: allMdx {
        distinct(field: frontmatter___category)
      }

      seriesSet: allMdx(
				filter: { fileAbsolutePath: { regex: "/series/" } }  
				sort: { fields: frontmatter___date, order: DESC}
			) {
        distinct(field: frontmatter___series)
      }

			seriesEdges: allMdx(
				filter: { fileAbsolutePath: { regex: "/series/" } }  
				sort: { fields: frontmatter___date, order: DESC}
			)  {
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
    series: path.resolve('src/templates/series-template.js'),
    postListing: path.resolve('src/templates/post-listing-template.js'),
    seriesListing: path.resolve('./src/templates/series-listing-template.js'),
  }

  //const response = await graphql(oQuery)

  // Grab Query
  const result = await graphql(oQuery)

  // Check for errors
  if (result.errors) {
    console.error(result.errors)
    throw new Error(result.errors)
  }

  // Lists of Data
  // All of the categories of posts, all of the
  // different series of posts.
  const categoryList = result.data.categoryList.edges
  const seriesSet = result.data.seriesSet.edges

  // The actual posts for articles, series
  const postEdges = result.data.posts.edges
  // const seriesEdges = result.data.series.edges
  const seriesEdges = result.data.seriesEdges.edges

  // Paging
  const { postsPerPage, seriesPerPage, postsPerCategoryPage } = siteConfig

  // Create individual series pages
  //response.data.categories.distinct.forEach
  result.data.seriesSet.distinct.forEach(series => {
    //console.log('SERIES:' + series)

    createPage({
      path: `/series/${_.kebabCase(series)}/`,
      component: templates.series,
      context: { series },
    })
  })
  // seriesSet.forEach(series => {
  //   console.log('SERIES:' + series)

  //   createPage({
  //     path: `/series/${_.kebabCase(series)}/`,
  //     component: templates.series,
  //     context: { series },
  //   })
  // })

  // Create blog post pages
  postEdges.forEach((edge, index) => {
    const nextID = index + 1 < postEdges.length ? index + 1 : 0
    const prevID = index - 1 >= 0 ? index - 1 : postEdges.length - 1
    const nextEdge = postEdges[nextID]
    const prevEdge = postEdges[prevID]

    //console.log('PATH:' + edge.node.frontmatter.path)

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
        component: templates.postListing,
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
In this section we will create the individual series
pages. We will also create a listing of all the series.
This listing will have links to each of the individual series pages.

 */

  // Series Post Listing Page
  if (seriesPerPage) {
    const pageCount = Math.ceil(seriesEdges.length / seriesPerPage)

    //seriesEdges.forEach(({ node }, index, arr) => {
    Array.from({ length: pageCount }).forEach((_, index, arr) => {
      //console.log('Series Post Edges Count: ' + seriesEdges.length);
      //console.log('Series Posts Per Page Count: ' + seriesPerPage);
      //console.log('Series PageCount: ' + pageCount);

      createPage({
        path: index === 0 ? `/series` : `/series/page/${index + 1}/`,
        component: templates.seriesListing,
        context: {
          limit: seriesPerPage,
          skip: index * seriesPerPage,
          pageCount,
          currentPageNum: index + 1,
        },
      })
    })
  } else {
    // Load the landing page instead
    createPage({
      path: `/`,
      component: templates.landing,
    })
  }

  //  Create category-list pages
  // if (postsPerCategoryPage) {
  //   const categoryPageCount = Math.ceil(categoryEdges.length / postsPerCategoryPage)

  //   Array.from({ length: categoryPageCount }).forEach((_, index, arr) => {

  //     createPage({
  //       path: index === 0 ? `/blog` : `/blog/page/${index + 1}/`,
  //       component: templates.postListingTemplate,
  //       context: {
  //         limit: postsPerPage,
  //         skip: index * postsPerPage,
  //         pageCount,
  //         currentPageNum: index + 1,
  //       },
  //     })
  //   })
  // }

  // // Create Category pages
  // categoryEdges.distinct.forEach(category => {
  //   createPage({
  //     path: `/category/${category}`,
  //     component: templates.category,
  //     context: {
  //       category,
  //     },
  //   })
  // })

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
