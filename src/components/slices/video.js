import * as React from "react"
import { graphql } from "gatsby"

export const Video = ({ slice }) => {
  return (
    <div className="post-video">
      {slice.items.map((item, idx) => (
        <div
          className="video-slice my-5"
          key={idx}
          dangerouslySetInnerHTML={{ __html: item.embedding }}
        />
      ))}
    </div>
  )
}

export const query = graphql`
  fragment BlogPostDataBodyVideo on PrismicBlogPostDataBodyVideo {
    items {
      embedding
    }
  }
`
