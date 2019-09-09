import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { Container, Row, Col } from "react-bootstrap"

const WhatWeDo = () => {
  const data = useStaticQuery(
    graphql`
      query {
        customSoftware: file(
          relativePath: { eq: "assets/custom-software-dev.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        webDevelopment: file(relativePath: { eq: "assets/web-dev.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        webDesign: file(relativePath: { eq: "assets/web-design.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        eCommerce: file(relativePath: { eq: "assets/ecommerce.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <React.Fragment>
      <Container className="text-center py-5">
        <h2>What We Do</h2>
        <p>
          We do custom software development, web design, web development,
          Ecommerce web design and development and Filemaker Pro to web
          conversion for your business.
        </p>
      </Container>
      <Container fluid>
        <Row className="align-items-center">
          <Col xs={12} lg={6} className="pl-0">
            <Img fluid={data.customSoftware.childImageSharp.fluid} />
          </Col>
          <Col xs={12} lg={6}>
            <h3>Custom Software Development</h3>
            <p>
              Bespoke software development provides your business with the tools
              needed to thrive. We help you handle data, automate workflow, and
              integrate with existing back end systems so that you can handle
              your business better.
            </p>
            <p>We use a range of modern web technologies to make it happen.</p>
            <Link to="/about" className="text-link">
              LEARN MORE
            </Link>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col xs={12} lg={{ span: 6, order: 2 }} className="pr-0">
            <Img fluid={data.webDevelopment.childImageSharp.fluid} />
          </Col>
          <Col xs={12} lg={{ span: 6, order: 1 }}>
            <h3>Web Development</h3>
            <p>
              Custom web development turns your visitors into customers.
              Transform your tired website into a seamless, simple and beautiful
              brand experience. Or start afresh to create a cutting edge web
              presence.
            </p>
            <p>We create with Wordpress, Magento, Drupal and more.</p>
            <Link to="/about" className="text-link">
              LEARN MORE
            </Link>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col xs={12} lg={6} className="pl-0">
            <Img fluid={data.webDesign.childImageSharp.fluid} />
          </Col>
          <Col xs={12} lg={6}>
            <h3>Web Design</h3>
            <p>
              Great business site design makes your brand stand out online. We
              create website designs that will give your online presence that
              look and feel you want, and create a customer experience that is
              intuitive and delightful. We create a seamless, steamlined visitor
              journey across desktop, mobile and tablet.
            </p>
            <p>Increase your conversion rates with great web design.</p>
            <Link to="/about" className="text-link">
              LEARN MORE
            </Link>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col xs={12} lg={{ span: 6, order: 2 }} className="pr-0">
            <Img fluid={data.eCommerce.childImageSharp.fluid} />
          </Col>
          <Col xs={12} lg={{ span: 6, order: 1 }}>
            <h3>Ecommerce Web Design &amp; Development</h3>
            <p>
              Expert ecommerce website development makes it easy to do business
              online. We create memorable ecommerce experiences designed to
              maximise your product's potential.
            </p>
            <p>We use Magento and WordPress with WooCommerce.</p>
            <Link to="/about" className="text-link">
              LEARN MORE
            </Link>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col xs={12} lg={6} className="pl-0">
            <Img fluid={data.webDesign.childImageSharp.fluid} />
          </Col>
          <Col xs={12} lg={6}>
            <h3>Filemaker Pro to Web Conversion</h3>
            <p>We are experts at converting Filemaker Pro products to web.</p>
            <Link to="/about" className="text-link">
              LEARN MORE
            </Link>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default WhatWeDo
