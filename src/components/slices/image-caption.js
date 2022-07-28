import * as React from "react"
import { graphql } from "gatsby"

export const ImageCaption = ({ slice }) => (
  <div className="post-image container">
    <figcaption className="block-img">
      <img
        className="w-100"
        src={slice.primary.image.url}
        alt={slice.primary.image.alt}
      />
      <figcaption className="image-label">{slice.primary.caption}</figcaption>
    </figcaption>
  </div>
)

export const query = graphql`
  fragment BlogPostDataBodyImageCaption on PrismicBlogPostDataBodyImageCaption {
    primary {
      image {
        alt
        url
      }
      caption
    }
  }
`
