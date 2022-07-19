import * as React from "react"
import { graphql } from "gatsby"

export const Quote = ({ slice }) => {
  return (
    <div className="post-quote">
      <div
        className="rich-text quote-text"
        dangerouslySetInnerHTML={{ __html: slice.primary.quote.html }}
      />
    </div>
  )
}

export const query = graphql`
  fragment BlogPostDataBodyQuote on PrismicBlogPostDataBodyQuote {
    primary {
      quote {
        html
      }
      quoted_by {
        html
      }
    }
  }
`
