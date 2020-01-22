import React from "react"
import Layout from "../components/layout"
import Testimonials from "../components/testimonials"
import OurClient from "../components/our-clients"
import { graphql, useStaticQuery } from "gatsby"
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
      <div className="services-banner services-banner-wave pb-0">
        <Container className="text-center">
          <Row>
            <Col lg={{ span: 10, offset: 1 }}>
              <h1>Web Application</h1>
              <div className="container-sm mx-auto">
                <h3>
                  Database development hosted on the web, so you can access your
                  data from anywhere
                </h3>
              </div>
              <div className="services-banner-img">
                <Img fluid={data.banner.childImageSharp.fluid} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="text-center py-5 container-md">
        <h3>
          Database development hosted on the web, so you can access your data
          from anywhere
        </h3>
        <p>
          At Fishbulb Solutions, we want to make using data the best it can be.
        </p>
        <p>
          <ol>
            <li>
              This means custom software that is{" "}
              <span class="text-blue">
                fast, easy, and reduces manual error
              </span>
              . It also means databases that can be accessed and edited from
              anywhere.
            </li>
            <li>
              We are{" "}
              <span class="text-blue">
                experts in a range of web technologies
              </span>
              we use to create database applications accessed over the net. From
              Laravel PHP development to JQWidgets, we’ll pick the tech that’s
              best for you.
            </li>
            <li>
              We’ll meet with you to understand your business requirements, and{" "}
              <span class="text-blue">
                shape our web application development to meet your needs
              </span>
              .
            </li>
          </ol>
        </p>
      </Container>
      <div className="bg-img-lightblue p-5">
        <Container>
          <h3 className="text-center pb-5">
            Here's what our web application can do:
          </h3>
          <Row className="align-items-center">
            <Col xs={12} lg={6} className="pl-0">
              <Img fluid={data.customDatabase.childImageSharp.fluid} />
            </Col>
            <Col xs={12} lg={6} xl={{ offset: 1 }}>
              <h3 className="mb-0 py-5">
                Custom databases that can be accessed from anywhere
              </h3>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col xs={12} lg={{ span: 6, order: 2 }} className="pr-0">
              <Img fluid={data.customData.childImageSharp.fluid} />
            </Col>
            <Col xs={12} lg={{ span: 6, order: 1 }} xl={{ offset: 1 }}>
              <h3 className="mb-0 py-5">
                Manage customer data, active jobs, and business contacts
              </h3>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col xs={12} lg={6} className="pl-0">
              <Img fluid={data.invoiceReport.childImageSharp.fluid} />
            </Col>
            <Col xs={12} lg={6} xl={{ offset: 1 }}>
              <h3 className="mb-0 py-5">
                Streamline and automate invoicing and reporting
              </h3>
            </Col>
          </Row>
          <Row className="align-items-center pb-5">
            <Col xs={12} lg={{ span: 6, order: 2 }} className="pr-0">
              <Img fluid={data.systemIntegration.childImageSharp.fluid} />
            </Col>
            <Col xs={12} lg={{ span: 6, order: 1 }} xl={{ offset: 1 }}>
              <h3 className="mb-0 py-5">
                Systems integration, including accounting, CRM, ERP &amp; more
              </h3>
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
