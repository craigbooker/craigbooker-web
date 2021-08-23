import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FaRegClock } from 'react-icons/fa'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Post = ({ excerpt, frontmatter }) => {
  const { title, cover, slug, date, category } = frontmatter
  return (
    <Wrapper>
      <GatsbyImage image={getImage(cover)} alt={title} className="img" />
      <div className="info">
        <h3>{title}</h3>
        <div className="underline"></div>
        <span className="category">{category}</span>
        <p>{excerpt}</p>
        <Link to={`/${slug}`} className="article-link">
          Continue Reading <IoMdArrowRoundForward />
        </Link>
        <footer>
          <span className="date">
            <FaRegClock className="icon" />
            {date}
          </span>
          {/* <span>{readTime} min read</span> */}
        </footer>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  margin-bottom: 3rem;
  .info {
    text-align: center;
  }
  .img {
    margin-bottom: 1rem;
    border-radius: var(--radius);
    height: 17rem;
  }
  .category {
    display: inline-block;
    margin-bottom: 1rem;
    background: var(--clr-grey-10);
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
  }
  h3 {
    font-weight: 400;
    margin-bottom: 1rem;
    text-transform: initial;
  }
  .underline {
    width: 5rem;
    height: 1px;
    background: var(--clr-grey-9);
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  p {
    color: var(--clr-grey-5);
    line-height: 1.8;
  }
  .link {
    text-transform: uppercase;
    letter-spacing: var(--spacing);
    font-weight: 700;
    color: var(--clr-primary-5);
    padding-bottom: 0.1rem;
    display: flex;
    align-items: center;
    svg {
      margin-left: 0.25rem;
      font-size: 1.2rem;
    }
  }
  .link:hover {
    border-color: var(--clr-primary-8);
    color: var(--clr-primary-8);
  }

  .article-link {
    margin-right: 1rem;
  }

  .article-link {
    text-transform: uppercase;

    color: var(--clr-black);
    letter-spacing: var(--spacing);
    font-weight: 700;
    padding: 0.375rem 0.75rem;
    display: inline-block;
    align-items: center;
    transition: var(--transition);
    border-radius: var(--radius);
    svg {
      margin-left: 0.25rem;
      padding-top: 0.35rem;
      font-size: 1.3rem;
    }
  }
  .article-link:hover {
    /* border-color: var(--clr-primary-8);
    color: var(--clr-primary-8); */
    background: var(--clr-black);
    color: var(--clr-white);
  }

  footer {
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid var(--clr-grey-9);
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--clr-grey-5);

    & .date {
      display: flex;
      align-items: center;
      & .icon {
        color: var(--clr-primary-5);
        margin-right: 0.5rem;
      }
    }
  }
  @media (min-width: 600px) {
    .img {
      height: 20rem;
    }
  }
  @media (min-width: 800px) {
    .img {
      height: 25rem;
    }
  }
  @media (min-width: 992px) {
    & {
      display: grid;
      grid-template-columns: 30rem 1fr;
      column-gap: 1.5rem;
      .info {
        text-align: left;
      }
      .img {
        height: 100%;
        max-height: 20rem;
      }
      .underline {
        margin-left: 0;
        margin-right: 0;
      }
    }
  }
`

export default Post
