import React, { useState } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  const [search, setSearch] = useState("")
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
        </div>
      </section>
    </Layout>
  )
}
export default IndexPage
