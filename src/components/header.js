import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap"
import "../styles/header.scss"

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        file(relativePath: { eq: "assets/logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 320, quality: 100) {
              ...GatsbyImageSharpFluid
            }
            fixed(width: 280) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return (
    <React.Fragment>
      <header className="header">
        <Container>
          <Navbar expand="lg">
            <Link to="/" className="navbar-brand">
              <Img fixed={data.file.childImageSharp.fixed} />
            </Link>
            <div className="btn btn-primary btn-blue">02 9003 1015</div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Item>
                  <Link to="/" activeClassName="active">
                    Home
                  </Link>
                </Nav.Item>
                <NavDropdown title="Services" id="nav-dropdown">
                  <NavDropdown.Item href="/#action/3.2">
                    Custom Software Development
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/web-design" activeClassName="active">
                      Web Design
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/ecommerce" activeClassName="active">
                      Web Development
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Filemaker Pro to Web Conversion
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Item>
                  <Link to="/clients" activeClassName="active">
                    Clients
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/blog" activeClassName="active">
                    Blog
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  {/* <Nav.Link href="/about">About</Nav.Link> */}
                  <Link to="/about" activeClassName="active">
                    About
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/contact" activeClassName="active">
                    Contact
                  </Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </header>
    </React.Fragment>
  )
}

export default Header
