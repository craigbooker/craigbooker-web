import React from 'react'
import { Link } from 'gatsby'
import Post from '../Posts/Post'
import { IoMdArrowRoundForward } from 'react-icons/io'

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
          <Link to="/blog" className="btn">
            See All Articles
            <IoMdArrowRoundForward />
          </Link>
        </article>
        {/*  banner column */}
      </div>
    </section>
  )
}

export default RecentPosts
