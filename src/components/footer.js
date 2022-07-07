import React from "react"
import SocialLinks from "./common/social-links"

const Footer = () => (
  <footer>
    <div className="container">
      <h2 className="text-center">Chris Terrel Jones</h2>
      <SocialLinks />
      <p className="my-5 pb-3">
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
