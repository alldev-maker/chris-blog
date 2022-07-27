import React, { useState } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

const Header = () => {
  const { allPrismicLogo, allPrismicNavBar } = useStaticQuery(
    graphql`
      query {
        allPrismicLogo {
          nodes {
            data {
              logo {
                url
              }
            }
          }
        }
        allPrismicNavBar {
          nodes {
            data {
              links {
                link
                link_title
              }
            }
          }
        }
      }
    `
  )
  const navs = allPrismicNavBar.nodes[0].data.links
  const [hambugerActive, setHambugerActiveState] = useState(false)

  const hamburgerHandler = () => {
    setHambugerActiveState(!hambugerActive)
  }

  let humbugerClsName = "hamburger "
  let navMenuClsName = "navbar-nav "

  if (hambugerActive) {
    humbugerClsName += "active"
    navMenuClsName += "active"
  }

  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <Link className="logo" to="/">
            <img src={allPrismicLogo.nodes[0].data.logo.url} alt="logo" />
          </Link>
          <ul className={navMenuClsName}>
            {navs.map((item, idx) => (
              <li className="nav-item" key={idx}>
                <a className="nav-link" key={idx} href={item.link}>
                  {item.link_title}
                </a>
              </li>
            ))}
          </ul>
          <div
            className={humbugerClsName}
            onClick={hamburgerHandler}
            onKeyDown={hamburgerHandler}
            role="button"
            tabIndex="0"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
