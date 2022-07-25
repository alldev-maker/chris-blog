import React, { useState } from "react"
import { Link } from "gatsby"

const Header = () => {
  const navs = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "About",
      to: "/about",
    },
    {
      name: "Buy Me Coffee",
      to: "/",
    },
  ]

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
            Logo
          </Link>
          <ul className={navMenuClsName}>
            {navs.map((item, idx) => (
              <li className="nav-item" key={idx}>
                <Link className="nav-link" key={idx} to={item.to}>
                  {item.name}
                </Link>
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
