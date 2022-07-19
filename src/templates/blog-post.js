import React from "react"
import { graphql } from "gatsby"
import { SliceZone } from "@prismicio/react"

import Layout from "../components/layout"
import BlogTimeInfo from "../components/common/blog-time-info"
import { components } from "../components/slices"

const BlotPost = ({ data }) => {
  const blogData = data.prismicBlogPost.data

  return (
    <Layout>
      <section className="container blog-detail">
        <h1 className="title">{blogData.blog_title}</h1>
        <div className="d-flex justify-content-between my-5">
          <BlogTimeInfo
            date={blogData.published_date}
            readingTime={blogData.reading_time}
          />
        </div>
        <div
          className="rich-text blog-content"
          dangerouslySetInnerHTML={{ __html: blogData.blog_description.html }}
        />
        <SliceZone slices={blogData.body} components={components} />
      </section>
    </Layout>
  )
}

export default BlotPost

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    prismicBlogPost(id: { eq: $id }) {
      data {
        blog_title
        blog_description {
          html
        }
        published_date
        reading_time
        body {
          ... on PrismicSliceType {
            id
            slice_label
            slice_type
          }
          ... on PrismicBlogPostDataBodyQuote {
            id
            primary {
              quote {
                html
              }
              quoted_by {
                html
              }
            }
          }
          ... on PrismicBlogPostDataBodySubHeading {
            id
            primary {
              sub_title
            }
          }
          ... on PrismicBlogPostDataBodySubContext {
            id
            items {
              blog_sub_context {
                html
              }
            }
          }
          ... on PrismicBlogPostDataBodyThoughtBox {
            id
            items {
              tb_content {
                html
              }
            }
            primary {
              tb_switch
              question {
                html
              }
            }
          }
          ... on PrismicBlogPostDataBodyVideo {
            id
            primary {
              spotify_videos {
                html
              }
              twitter_posts {
                html
              }
              youtube_videos {
                html
              }
            }
          }
          ... on PrismicBlogPostDataBodyCodeSlice {
            id
            items {
              embedded_code {
                html
              }
              code_explanation {
                html
              }
            }
          }
        }
      }
    }
  }
`
