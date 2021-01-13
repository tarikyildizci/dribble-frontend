import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import "../css/header.scss"
import down_arrow from "../images/down_arrow.svg"
import hamburger from "../images/hamburger.svg"
import x from "../images/x.svg"

const Header = () => {
  const [hamburgerVisible, setHamburgerVisible] = useState(false)
  const [isHamburger, setIsHamburger] = useState(true)
  const windowSize = useWindowSize()

  if (windowSize.width < 979 && !hamburgerVisible) {
    setHamburgerVisible(true)
  }
  if (windowSize.width > 978 && hamburgerVisible) {
    setHamburgerVisible(false)
    setIsHamburger(true)
  }
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h1>TRANZZO</h1>
        </div>
        <div className="links">
          {hamburgerVisible ? (
            <img
              className="hamburger"
              src={isHamburger ? hamburger : x}
              alt=""
              onClick={() => {
                setIsHamburger(!isHamburger)
              }}
            />
          ) : (
            <>
              <li>
                <Link className="gatsby-link" to="/">
                  Products
                </Link>
                <img src={down_arrow} alt="" />
              </li>
              <li>
                <Link className="gatsby-link" to="/">
                  Get Started
                </Link>
                <img src={down_arrow} alt="" />
              </li>
              <li>
                <Link className="gatsby-link" to="/">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link className="gatsby-link" to="/">
                  About Us
                </Link>
                <img src={down_arrow} alt="" />
              </li>
              <li>
                <Link className="gatsby-link" to="/">
                  Help
                </Link>
                <img src={down_arrow} alt="" />
              </li>
              <li className="sign-in">
                <Link className="gatsby-link" to="/">
                  Sign in
                </Link>
              </li>
            </>
          )}
        </div>
      </div>
      {!isHamburger ? <Menu /> : ""}
    </>
  )
}

const Menu = () => {
  return (
    <div className="coll-menu ">
      <li>
        <Link className="gatsby-link" to="/">
          Products
        </Link>
        <img src={down_arrow} alt="" />
      </li>
      <li>
        <Link className="gatsby-link" to="/">
          Get Started
        </Link>
        <img src={down_arrow} alt="" />
      </li>
      <li>
        <Link className="gatsby-link" to="/">
          Pricing Plans
        </Link>
      </li>
      <li>
        <Link className="gatsby-link" to="/">
          About Us
        </Link>
        <img src={down_arrow} alt="" />
      </li>
      <li>
        <Link className="gatsby-link" to="/">
          Help
        </Link>
        <img src={down_arrow} alt="" />
      </li>
      <li className="sign-in">
        <Link className="gatsby-link" to="/">
          Sign in
        </Link>
      </li>
    </div>
  )
}
export default Header

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  return windowSize
}
