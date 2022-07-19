import * as React from "react"
import { graphql } from "gatsby"

export const SubHeading = ({ slice }) => {
  return <p className="sub-heading">{slice.primary.sub_title}</p>
}

export const query = graphql`
  fragment BlogPostDataBodySubHeading on PrismicBlogPostDataBodySubHeading {
    primary {
      sub_title
    }
  }
`
