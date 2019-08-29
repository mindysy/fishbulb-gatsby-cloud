import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

import { Container } from "react-bootstrap"

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../styles/index.scss"

const Layout = props => {
  return (
    <React.Fragment>
      <Header />
      <Container fluid>{props.children}</Container>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
