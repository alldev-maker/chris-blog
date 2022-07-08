import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"
import Layout from "../components/layout"
import BlogTimeInfo from "../components/common/blog-time-info"

const BlotPost = ({ data }) => {
  const blogData = data.contentfulBlogPost
  console.log(blogData)
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        // const { gatsbyImageData } = node.data.target
        console.log(node)
        const gatsbyImageData = node.data.target?.gatsbyImageData
        return (
          <>
            {gatsbyImageData && (
              <GatsbyImage
                image={getImage(gatsbyImageData)}
                alt="blog detail img"
              />
            )}
          </>
        )
      },
    },
  }

  return (
    <Layout>
      <section className="container">
        <div className="blog-detail">
          <h1 className="title">{blogData.title}</h1>
          <div className="d-flex justify-content-between my-5">
            <BlogTimeInfo
              date={blogData.date}
              readingTime={blogData.readingTime}
            />
          </div>
          <div className="blog-content">
            {blogData.content?.raw && renderRichText(blogData.content, options)}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BlotPost

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      slug
      title
      readingTime
      date(formatString: "Do MMM, YYYY")
      content {
        raw
      }
      categories {
        name
        icon {
          url
        }
      }
    }
  }
`
