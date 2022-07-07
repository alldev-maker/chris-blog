import React from "react"
import { Link } from "gatsby"
import { social_icons } from "../../utils/staticData"

const SocialLinks = () => (
  <div className="social-icons">
    {social_icons.map((item, idx) => (
      <Link to={item.to} className="social-link" key={idx}>
        <img src={item.icon} alt="social icon" />
      </Link>
    ))}
  </div>
)

export default SocialLinks
