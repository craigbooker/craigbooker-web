import React from 'react'
import { Link } from 'gatsby'
import Series from '../Series/Series'
import { IoMdArrowRoundForward } from 'react-icons/io'

const RecentSeries = ({ series, title }) => {
  return (
    <section className="posts">
      <h3 className="posts-title">{title}</h3>
      <div className="posts-center">
        {/*  posts column */}
        <article>
          {series.map(series => {
            return <Series key={series.id} {...series} />
          })}
          <Link to="/series" className="btn">
            Read More
            <IoMdArrowRoundForward />
          </Link>
        </article>
        {/*  banner column */}
      </div>
    </section>
  )
}

export default RecentSeries
