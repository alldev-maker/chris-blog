import React from "react"
import { graphql } from "gatsby"
import { SliceZone } from "@prismicio/react"
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share"

import Layout from "../components/layout"
import BlogTimeInfo from "../components/common/blog-time-info"
import { components } from "../components/slices"

const BlotPost = ({ data }) => {
  const blogData = data.prismicBlogPost.data
  const categoryData = data.allPrismicCategory.nodes
  const getCategoryData = categoryId => {
    return categoryData.filter(item => item.prismicId === categoryId)[0].data
  }

  console.log(categoryData)
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
        <h3 className="tags-label">Tags</h3>
        <div className="d-flex justify-content-center flex-wrap">
          {blogData.categories.map((item, idx) => (
            <div className="category-item" key={idx}>
              <img
                src={getCategoryData(item.category.id).icon.url}
                alt={getCategoryData(item.category.id).name}
              />
              {getCategoryData(item.category.id).name}
            </div>
          ))}
        </div>
        <h3 className="tags-label mt-4">Share</h3>
        <div className="d-flex align-items-center justify-content-center gap-3">
          <FacebookShareButton
            url={window.location.href}
            title={blogData.blog_title}
          >
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
          <TwitterShareButton
            url={window.location.href}
            title={blogData.blog_title}
          >
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
          <LinkedinShareButton
            url={window.location.href}
            title={blogData.blog_title}
          >
            <LinkedinIcon size={32} round={true} />
          </LinkedinShareButton>
          <EmailShareButton
            url={window.location.href}
            title={blogData.blog_title}
          >
            <EmailIcon size={32} round={true} />
          </EmailShareButton>
        </div>
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
        categories {
          category {
            id
          }
        }
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
    allPrismicCategory {
      nodes {
        prismicId
        data {
          name
          icon {
            url
          }
        }
      }
    }
  }
`
