import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <Link className="logo" to="/">
            Chris Terrel Jones
          </Link>
          <Link className="nav-link" to="/about-me">
            About Me
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
