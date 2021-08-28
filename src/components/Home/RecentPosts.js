import React from 'react'
import { Link } from 'gatsby'
import Post from '../Posts/Post'
import { IoMdArrowRoundForward } from 'react-icons/io'
import {
  recentPosts,
  recentPostsTitle,
  recentPostsCenter,
} from '../../assets/css/recent-posts.module.css'

const RecentPosts = ({ posts, title }) => {
  return (
    <section className={recentPosts}>
      <h3 className={recentPostsTitle}>{title}</h3>
      <div className={recentPostsCenter}>
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
