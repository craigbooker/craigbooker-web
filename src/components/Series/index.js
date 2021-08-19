import React from 'react'
import Series from './Series'
import Banner from '../Banner'

const SeriesListing = ({ posts, title }) => {
  return (
    <section className="posts">
      <h3 className="posts-title">{title}</h3>
      <div className="posts-center">
        {/*  posts column */}
        <article>
          {posts.map(post => {
            return <Series key={post.id} {...post} />
          })}
        </article>
        {/*  banner column */}
        <article>
          <Banner />
        </article>
      </div>
    </section>
  )
}

export default SeriesListing
