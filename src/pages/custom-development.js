import React from "react"
import Layout from "../components/layout"
import Testimonials from "../components/testimonials"
import OurClient from "../components/our-clients"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { Container, Row, Col } from "react-bootstrap"

const WhatWeDo = () => {
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
        customDatabase: file(
          relativePath: { eq: "assets/custom-database.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        customData: file(relativePath: { eq: "assets/custom-data.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        invoiceReport: file(
          relativePath: { eq: "assets/invoice-reports.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        systemIntegration: file(
          relativePath: { eq: "assets/system-integration.png" }
        ) {
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
    <Layout>
      <div className="services-banner">
        <Container className="text-center">
          <Row>
            <Col lg={{ span: 10, offset: 1 }}>
              <h1>Custom Software Development</h1>
              <div className="container-sm mx-auto">
                <h3>
                  We create affordable solutions that bring that goals of your
                  business to life.
                </h3>
              </div>
              <Row>
                <Col>
                  Its' not just about storing it. It's about using it, compating
                  it and analysing it.
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <Testimonials />
      <Container fluid className="bg-dark-blue text-center py-5 mt-5">
        <a href="/about" className="btn btn-blue px-4">
          FIND OUT MORE ABOUT OUR WORK
        </a>
      </Container>
      <OurClient />
    </Layout>
  )
}

export default WhatWeDo
