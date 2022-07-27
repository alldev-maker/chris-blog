import * as React from "react"
import { graphql } from "gatsby"
import Highlight from "react-highlight"
import "highlight.js/styles/rainbow.css"

export const CodeSlice = ({ slice }) => {
  return (
    <>
      {slice.items.map((item, idx) => (
        <div className="code-slice" key={idx}>
          <Highlight language="javascript">
            <div
              className="rich-text"
              dangerouslySetInnerHTML={{ __html: item.embedded_code.html }}
            />
          </Highlight>
          <div
            className="rich-text"
            dangerouslySetInnerHTML={{ __html: item.code_explanation.html }}
          />
        </div>
      ))}
    </>
  )
}

export const query = graphql`
  fragment BlogPostDataBodyCodeSlice on PrismicBlogPostDataBodyCodeSlice {
    items {
      embedded_code {
        html
      }
      code_explanation {
        html
      }
    }
  }
`
