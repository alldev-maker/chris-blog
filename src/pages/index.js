import { graphql } from "gatsby"
import React, { useState } from "react"
import BlogItem from "../components/common/blog-item"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  const categoryList = data.allPrismicCategory.nodes
  const blogList = data.allPrismicBlogPost.nodes

  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("")

  const handleSearchChange = e => {
    setSearch(e.target.value)
  }

  const filtered = !search
    ? blogList
    : blogList.filter(item =>
        item.data.blog_title.toLowerCase().includes(search.toLowerCase())
      )

  return (
    <Layout>
      <Seo title="Home" />
      <section className="container">
        <div className="blog-search">
          <div className="summary text-center">
            <h1 className="headline">Hey, I’m Chris.</h1>
            <h1 className="headline2">
              I’m a <span className="green">Machine Learning Engineer.</span>
            </h1>
          </div>
          <div className="container-small">
            <p className="category-label">I write post about...</p>
            <div className="category-list">
              {categoryList.map((item, idx) => (
                <button
                  onClick={() =>
                    item.prismicId === filter
                      ? setFilter("")
                      : setFilter(item.prismicId)
                  }
                  className={`category-item ${
                    item.prismicId === filter ? "active" : ""
                  }`}
                  key={idx}
                >
                  <img src={item.data.icon.url} alt="category icon" />
                  {item.data.name}
                </button>
              ))}
            </div>
            <div className="text-center">
              <button className="view-all" onClick={() => setFilter("")}>
                view all
              </button>
            </div>

            <input
              className="search-input"
              type="text"
              placeholder="Search"
              value={search}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <div className="blog-list">
          {filtered.map((item, idx) => {
            return filter === "" ? (
              <BlogItem categoryList={categoryList} blog={item} key={idx} />
            ) : item.data.categories.find(cat => cat.category.id === filter) ? (
              <BlogItem categoryList={categoryList} blog={item} key={idx} />
            ) : null
          })}
        </div>
      </section>
    </Layout>
  )
}
export default IndexPage

export const homepageQuery = graphql`
  query homeQuery {
    allPrismicBlogPost {
      nodes {
        data {
          blog_title
          blog_description {
            text
          }
          categories {
            category {
              id
            }
          }
          published_date(formatString: "Do MMM, YYYY")
          reading_time
        }
        url
      }
    }
    allPrismicCategory {
      nodes {
        data {
          name
          icon {
            url
          }
        }
        prismicId
      }
    }
  }
`
