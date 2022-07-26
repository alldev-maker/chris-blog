import React from "react"
import SocialLinks from "./common/social-links"

const Footer = () => (
  <footer>
    <div className="container">
      <h1 className="name">Chris Terrel Jones</h1>
      <SocialLinks />
      <p className="my-5 pb-3 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sed nibh
        lectus sed nunc natoque faucibus eget. Arcu et varius feugiat imperdiet
        consequat, et tempus. Mi urna, purus nisi gravida tincidunt proin
        hendrerit tellus.
      </p>
    </div>
    <div className="bottom-bar">
      <p className="text-center">
        © {new Date().getFullYear()} Chris Jones — Machine Learning Engineer
      </p>
    </div>
  </footer>
)

export default Footer
