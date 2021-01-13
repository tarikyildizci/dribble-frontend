import { Link } from "gatsby"
import React from "react"
import "../css/header.scss"
import down_arrow from "../images/down_arrow.svg"

const Header = () => (
  <div className="navbar">
    <div className="logo">
      <h1>TRANZZO</h1>
    </div>
    <div className="links">
      <li>
        <Link>Products</Link>
        <img src={down_arrow} alt="" />
      </li>
      <li>
        <Link>Get Started</Link>
        <img src={down_arrow} alt="" />
      </li>
      <li>
        <Link>Pricing Plans</Link>
      </li>
      <li>
        <Link>About Us</Link>
        <img src={down_arrow} alt="" />
      </li>
      <li>
        <Link>Help</Link>
        <img src={down_arrow} alt="" />
      </li>
      <li className="sign-in">
        <Link>Sign in</Link>
      </li>
    </div>
  </div>
)

export default Header
