import * as React from "react"
import { graphql } from "gatsby"

export const Video = ({ slice }) => {
  console.log("video slice:", slice)
  return (
    <div className="post-video">
      Video Slice
      {/* <div
        dangerouslySetInnerHTML={{ __html: slice.primary.spotify_videos.html }}
      /> */}
    </div>
  )
}

export const query = graphql`
  fragment BlogPostDataBodyVideo on PrismicBlogPostDataBodyVideo {
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
`
