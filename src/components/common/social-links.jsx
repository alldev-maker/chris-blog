import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const SocialLinks = () => {
  const { allPrismicSocialMedia } = useStaticQuery(
    graphql`
      query {
        allPrismicSocialMedia {
          nodes {
            data {
              name
              image {
                url
              }
              link {
                url
              }
            }
          }
        }
      }
    `
  )
  return (
    <div className="social-icons">
      {allPrismicSocialMedia.nodes.map((item, idx) => (
        <a href={item.data.link.url} className="social-link" key={idx}>
          <img src={item.data.image.url} alt={item.data.name} />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
