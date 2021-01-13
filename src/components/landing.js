import React from "react"
import Layout from "./layout"
import SEO from "../components/seo"
import "../css/landing.scss"
import illustration from "../images/credit_card.svg"
import arrow from "../images/arrow.svg"
import dots from "../images/dots.svg"

const Landing = () => {
  return (
    <>
      <SEO title="Home" />
      <div className="landing">
        <div className="left">
          <div className="top">
            <div className="big-text">
              <h1>Payment solutions that drive your online business forward</h1>
            </div>
            <div className="small-text">
              <p>
                Expand your business coverage by accepting payments from all
                over the world
              </p>
            </div>
          </div>
          <div className="bottom">
            <div className="bottom-left">
              <div className="sign-up-button">
                <h1>Sign Up</h1>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div className="bottom-right">
              <img className="bottom-left-dots" src={dots} alt="dots" />
              <h1>All Countries</h1>
              <img className="top-right-dots" src={dots} alt="dots" />
            </div>
          </div>
        </div>
        <div className="right">
          <img src={illustration} alt="credit card" />
        </div>
      </div>
    </>
  )
}

export default Landing
