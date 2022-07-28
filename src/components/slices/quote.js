import * as React from "react"
import { graphql } from "gatsby"

export const Quote = ({ slice }) => {
  return (
    <div className="post-quote">
      <p className="quote-text">{slice.primary.quote}</p>
      <p className="quote-author">{slice.primary.quoted_by}</p>
    </div>
  )
}

export const query = graphql`
  fragment BlogPostDataBodyQuote on PrismicBlogPostDataBodyQuote {
    primary {
      quote
      quoted_by
    }
  }
`
