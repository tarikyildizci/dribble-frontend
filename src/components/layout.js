import React from "react"
import Header from "./header"
import "../css/layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main>{children}</main>
    </>
  )
}

export default Layout
