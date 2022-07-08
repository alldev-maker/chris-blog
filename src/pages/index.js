import { graphql } from "gatsby"
import React, { useState } from "react"
import BlogItem from "../components/common/blog-item"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  const categoryList = data.allContentfulCategory.nodes
  const blogList = data.allContentfulBlogPost.nodes

  const [search, setSearch] = useState("")
  const [view_all, setViewAll] = useState(false)

  return (
    <Layout>
      <Seo title="Home" />
      <section className="container">
        <div className="blog-search">
          <div className="summary">
            <h1 className="headline">Hi I’m Chris Terrel Jones</h1>
            <h1 className="headline">
              I’m a <span className="green">Machine Learning Engineer.</span>
            </h1>
            <h1 className="headline">I write post about...</h1>
          </div>
          <input
            className="search-input"
            type="text"
            placeholder="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <div className="category-list">
            {view_all
              ? categoryList.map((item, idx) => (
                  <button className="category-item" key={idx}>
                    <img src={item.icon.url} alt="category icon" />
                    {item.name}
                  </button>
                ))
              : categoryList.slice(0, 5).map((item, idx) => (
                  <button className="category-item" key={idx}>
                    <img src={item.icon.url} alt="category icon" />
                    {item.name}
                  </button>
                ))}
            <button className="view-all" onClick={() => setViewAll(!view_all)}>
              {view_all ? "view less" : "view all"}
            </button>
          </div>
        </div>
        <div className="blog-list">
          {blogList.map((item, idx) => (
            <BlogItem blog={item} key={idx} />
          ))}
        </div>
      </section>
    </Layout>
  )
}
export default IndexPage

export const homepageQuery = graphql`
  query homeQuery {
    allContentfulBlogPost {
      nodes {
        slug
        title
        content {
          raw
        }
        readingTime
        date(formatString: "Do MMM, YYYY")
        categories {
          name
          icon {
            url
          }
        }
      }
    }
    allContentfulCategory {
      nodes {
        name
        icon {
          url
        }
      }
    }
  }
`
