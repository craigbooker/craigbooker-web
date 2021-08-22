import React from 'react'
import { Link } from 'gatsby'
import { links, link, active } from '../assets/css/blog.module.css'
// import { pagingContainer } from '../assets/css/pagination.module.css'

const Pagination = ({ pageContext }) => {
  const { currentPageNum, pageCount } = pageContext
  const prevPage =
    currentPageNum - 1 === 1 ? '/blog' : `/blog/page/${currentPageNum - 1}/`
  const nextPage = `/blog/page/${currentPageNum + 1}/`
  const isFirst = currentPageNum === 1
  const isLast = currentPageNum === pageCount

  return (
    <section className={links}>
      {!isFirst && (
        <Link to={prevPage} className={link}>
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
              index + 1 === currentPageNum ? `${link} ${active}` : `${link}`
            }
          >
            {pageNum}
          </Link>
        )
      })}
      {!isLast && (
        <Link to={nextPage} className={link}>
          Next
        </Link>
      )}
    </section>
  )
}

export default Pagination
