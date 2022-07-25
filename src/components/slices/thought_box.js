import * as React from "react"
import { graphql } from "gatsby"
import { ThinkEmoji } from "../../utils/imgImport"

export const ThoughtBox = ({ slice }) => {
  const [show, showThought] = React.useState(false)
  return (
    <div className="thought-box">
      <div className="d-flex align-items-center">
        <button className="tb-show" onClick={() => showThought(!show)}>
          <div
            className="tb-question"
            dangerouslySetInnerHTML={{ __html: slice.primary.question.html }}
          />
          &nbsp;&nbsp;
          <img src={ThinkEmoji} alt="think emoji" />
        </button>
      </div>
      {show && (
        <div className="tb-container">
          {slice.items.map((item, idx) => (
            <div
              className="rich-text"
              dangerouslySetInnerHTML={{ __html: item.tb_content.html }}
              key={idx}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export const query = graphql`
  fragment BlogPostDataBodyThoughtBox on PrismicBlogPostDataBodyThoughtBox {
    items {
      tb_content {
        html
      }
    }
    primary {
      question {
        html
      }
      tb_switch
    }
  }
`
