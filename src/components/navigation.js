import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import { Link } from "gatsby"

const NavigationBar = () => (
  <React.Fragment>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Fishbulb</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Link to="/">Home</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/services">Services</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/clients">Clients</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/blog">Blog</Link>
          </Nav.Item>
          <Nav.Item>
            {/* <Nav.Link href="/about">About</Nav.Link> */}
            <Link to="/about">About</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/contact">Contact</Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </React.Fragment>
)

export default NavigationBar
