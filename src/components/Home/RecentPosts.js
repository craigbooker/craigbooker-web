import React from 'react'
import Post from '../Posts/Post'
const RecentPosts = ({ posts, title }) => {
  return (
    <section className="posts">
      <h3 className="posts-title">{title}</h3>
      <div className="posts-center">
        {/*  posts column */}
        <article>
          {posts.map(post => {
            return <Post key={post.id} {...post} />
          })}
        </article>
        {/*  banner column */}
      </div>
    </section>
  )
}

export default RecentPosts
