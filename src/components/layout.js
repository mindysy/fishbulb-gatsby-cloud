import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../styles/index.scss"

const Layout = props => {
  return (
    <React.Fragment>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
