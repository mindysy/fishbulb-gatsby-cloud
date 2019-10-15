import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Offers from "../components/offers"
import Testimonials from "../components/testimonials"
import Img from "gatsby-image"

import { Container, Row, Col } from "react-bootstrap"
import "../styles/services.scss"
import "../styles/ecommerce.scss"

const EcommercePage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        banner: file(relativePath: { eq: "assets/banner-ecommerce.png" }) {
          childImageSharp {
            fluid(maxWidth: 946, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <div className="services-banner ecommerce-banner">
        <Container className="text-center">
          <Row>
            <Col lg={{ span: 10, offset: 1 }}>
              <h1>Ecommerce Web Design &amp; Development</h1>
              <h3>We create custom software that makes your data do more.</h3>
              <div className="services-banner-img">
                <Img fluid={data.banner.childImageSharp.fluid} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="py-5 text-center">
        <h3>What we can create</h3>
        <p>
          Filemaker Pro is a powerful cross-platform database development
          program. FileMaker developers like us love FileMaker Pro because it's
          fast, flexible and robust. Here are some things we can do with
          FileMaker development:
        </p>
      </Container>

      <Container fluid className="bg-light-blue py-5 text-center">
        <div className="container-md mx-auto text-white">
          <h3>Here’s what our web applications can do:</h3>
          <p>
            At Fishbulb Solutions, we pride ourselves on offering affordable
            ecommerce web design &amp; development. We’ve worked with businesses
            of all kinds to create websites that bring out the best from their
            products and brands.
          </p>
          <p>
            Our cost depends on the complexity of your needs, and the number of
            features your website requires. Entry level websites start at $8k,
            while most professional web design costs close to $12k.{" "}
            <a href="/">Contact us today</a> to find out how much it would cost
            for us to build the ideal website for your business.
          </p>
        </div>
      </Container>

      <Testimonials />
      <Offers />

      <Container fluid className="bg-dark-blue text-center py-5">
        <h3>We'll Create a Website As Unique As You Are</h3>
        <div>
          <a href="/" className="btn btn-blue btn-blue-glow">
            GET IN TOUCH
          </a>
        </div>
      </Container>
      <Container className="text-center py-5">
        <h3>Our Client</h3>
      </Container>
    </Layout>
  )
}

export default EcommercePage
