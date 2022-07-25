import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { ChrisImg } from "../utils/imgImport"
import SocialLinks from "../components/common/social-links"
import Faq from "../components/common/faq"

const AboutMe = ({ data }) => {
  const aboutData = data.allPrismicAboutMe.nodes[0]
  return (
    <Layout>
      <section className="container">
        <div className="about-me d-flex flex-wrap align-items-center justify-content-center">
          <img className="avatar" src={ChrisImg} alt="chris" />
          <div>
            <h1 className="name">Chris Terrel Jones</h1>
            <p className="role">-{aboutData.data.job_title}</p>
            <SocialLinks />
          </div>
        </div>
        <div
          className="about-content"
          dangerouslySetInnerHTML={{ __html: aboutData.data.am_body.html }}
        />
        <div className="faq-list my-4">
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
          job_title
          am_body {
            html
          }
          faq_list {
            answer
            question
          }
        }
      }
    }
  }
`
