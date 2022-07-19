import * as React from "react"
import { graphql } from "gatsby"

export const SubContext = ({ slice }) => {
  return (
    <div className="sub-context">
      {slice.items.map((item, idx) => (
        <div
          className="rich-text"
          dangerouslySetInnerHTML={{ __html: item.blog_sub_context.html }}
          key={idx}
        />
      ))}
    </div>
  )
}

export const query = graphql`
  fragment BlogPostDataBodySubContext on PrismicBlogPostDataBodySubContext {
    items {
      blog_sub_context {
        html
      }
    }
  }
`
