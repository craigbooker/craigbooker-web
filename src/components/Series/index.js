import React from 'react'
import Series from './Series'

const SeriesListing = ({ series, title }) => {
  return (
    <section className="posts">
      <h3 className="posts-title">{title}</h3>
      <div className="posts-center">
        {/*  posts column */}
        <article>
          {series.map(series => {
            return <Series key={series.id} {...series} />
          })}
        </article>
      </div>
    </section>
  )
}

export default SeriesListing
