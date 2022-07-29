import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SocialLinks from "../components/common/social-links"
import Faq from "../components/common/faq"

const AboutMe = ({ data }) => {
  const aboutData = data.allPrismicAboutMe.nodes[0]
  return (
    <Layout>
      <section className="container">
        <div className="about-me row align-items-center justify-content-center">
          <div className="col-lg-7 text-center">
            {/* <img src={ChrisImg} alt="chris" /> */}
            <GatsbyImage
              className="avatar"
              image={getImage(aboutData.data.profile_picture)}
              alt="chris"
            />
          </div>
          <div className="col-lg-5 text-center">
            <h1 className="name">{aboutData.data.my_name}</h1>
            <p className="role">{aboutData.data.job_title}</p>
            <SocialLinks />
          </div>
        </div>
        <div
          className="about-content"
          dangerouslySetInnerHTML={{ __html: aboutData.data.am_body.html }}
        />
        <div className="faq-list my-5">
          <h1>FAQs</h1>
          {aboutData.data.faq_list.map((item, idx) => (
            <Faq question={item.question} answer={item.answer} key={idx} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default AboutMe

export const pageQuery = graphql`
  query AboutMeQuery {
    allPrismicAboutMe {
      nodes {
        data {
          my_name
          job_title
          am_body {
            html
          }
          faq_list {
            question
            answer {
              html
            }
          }
          profile_picture {
            gatsbyImageData
          }
        }
      }
    }
  }
`
