import React from 'react'
import {
  blog,
  imgContainer,
  img,
  link,
  footer,
  readMore,
  blogCardBtn,
} from '../../assets/css/blog-card.module.css'
import Image from 'gatsby-image'

const NicheBlogCard = ({ blog }) => {
  const { title, date, author, description, url } = blog.frontmatter
  const slug = blog.fields.slug

  //console.log(blog.frontmatter);

  const img = blog.frontmatter.cover.childImageSharp.fluid

  //console.log('BLOGCARD - SLUG: ' + slug + ' ID: ' + id);

  return (
    <article className={blog}>
      <div className={imgContainer}>
        <Image fluid={img} className={img} alt="single post" />
        <AniLink fade className={link} to={`${url}`}>
          go to site
        </AniLink>
      </div>
      <div className={footer}>
        <h4>{title}</h4>
        <h5>{author}</h5>
        <p>{description}</p>
        <p class={readMore}>
          <AniLink fade to={`${url}`} className={blogCardBtn}>
            go to site
          </AniLink>
        </p>
      </div>
    </article>
  )
}

export default NicheBlogCard
