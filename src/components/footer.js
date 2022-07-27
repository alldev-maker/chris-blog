import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SocialLinks from "./common/social-links"

const Footer = () => {
  const { allPrismicFooter } = useStaticQuery(graphql`
    query {
      allPrismicFooter {
        nodes {
          data {
            footer_text {
              html
            }
          }
        }
      }
    }
  `)
  return (
    <footer>
      <div className="container">
        <h1 className="name">Chris Terrel Jones</h1>
        <SocialLinks />
        <div
          className="my-4 pb-3 footer-text"
          dangerouslySetInnerHTML={{
            __html: allPrismicFooter.nodes[0].data.footer_text.html,
          }}
        />
      </div>
      <div className="bottom-bar">
        <p className="text-center">
          © {new Date().getFullYear()} Chris Jones — Machine Learning Engineer
        </p>
      </div>
    </footer>
  )
}

export default Footer
