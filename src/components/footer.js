import React from "react"
import SocialLinks from "./common/social-links"

const Footer = () => (
  <footer>
    <div className="container">
      <h1 className="name">Chris Terrel Jones</h1>
      <SocialLinks />
      <p className="my-4 pb-3 footer-text">
        Mauris erat odio, tempor dignissim porta at, rutrum eu nibh. Ut ac
        aliquet eros. Etiam porta purus augue, a venenatis ex facilisis at.
        Vivamus ullamcorper ut nibh vitae auctor. Etiam vitae augue nec leo
        scelerisque tristique. Maecenas tincidunt id urna et vulputate.
        Phasellus imperdiet eleifend urna eget iaculis. Morbi aliquet lorem
        enim, ac aliquet nibh consectetur nec. Nullam nec tellus non purus
        egestas dignissim. Ut non erat auctor, commodo risus a, suscipit enim.
        Curabitur porttitor rhoncus neque.
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
