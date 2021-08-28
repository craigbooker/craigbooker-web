import React from 'react'
import { Link } from 'gatsby'
import Series from '../Series/Series'
import { IoMdArrowRoundForward } from 'react-icons/io'
import {
  recentSeries,
  recentSeriesTitle,
  recentSeriesCenter,
} from '../../assets/css/recent-series.module.css'

const RecentSeries = ({ series, title }) => {
  return (
    <section className={recentSeries}>
      <h3 className={recentSeriesTitle}>{title}</h3>
      <div className={recentSeriesCenter}>
        {/*  posts column */}
        <article>
          {series.map(series => {
            return <Series key={series.id} {...series} />
          })}
          <Link to="/series" className="btn">
            See All Series
            <IoMdArrowRoundForward />
          </Link>
        </article>
        {/*  banner column */}
      </div>
    </section>
  )
}

export default RecentSeries
