import React, { useState } from "react"
import Layout from "../components/layout"

const About = () => {
  const [mystate, setMystate] = useState(0)

  const ClickerHandler = () => {
    setMystate(mystate + 1)
  }

  return (
    <Layout>
      <h1>Test Page</h1>
      <p>This is a test sentence for viewing {mystate}</p>
      <button onClick={ClickerHandler}>Clicker</button>
    </Layout>
  )
}

export default About
