import * as React from "react"
import { graphql } from "gatsby"

export const Video = ({ slice }) => {
  console.log("video slice:", slice)
  console.log("video slice here!!!")
  return (
    <div className="post-video">
      {slice.items.map((item, idx) => (
        <div
          className="video-slice"
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
