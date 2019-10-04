import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

import { Container, Row, Col } from "react-bootstrap"
import "../styles/services.scss"

const ServicesPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        banner: file(relativePath: { eq: "assets/banner-services.png" }) {
          childImageSharp {
            fluid(maxWidth: 946, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        elmy: file(relativePath: { eq: "assets/cartoon-elmy.png" }) {
          childImageSharp {
            fluid(maxWidth: 257, quality: 100) {
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
              <h1>Turn your visitors into customers</h1>
              <div className="services-banner-img">
                <Img fluid={data.banner.childImageSharp.fluid} />
              </div>
              <h3>Business Web Design to Make Your Brand Stand Out Online</h3>
              <p>
                First impressions are vital. For those who visit your business
                online, your website is your handshake and your calling card. It
                shows people who you are, and what you’re made of. It’s also the
                way repeat customers build a relationship with your brand.
              </p>
              <p>
                <a href="/">LEARN MORE</a>
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="services-offer text-center">
        <Container>
          <div>
            <h3>We’ll Create a Website As Unique As You Are</h3>
            <p>
              First impressions are vital. For those who visit your business
              online, your website is your handshake and your calling card. It
              shows people who you are, and what you’re made of. It’s also the
              way repeat customers build a relationship with your brand.
            </p>
          </div>
          <Row>
            <Col>Ecommerce Web deisgn and Development</Col>
            <Col>Responsive Web Design and Development</Col>
            <Col>CMS Web Design and Development</Col>
            <Col>Custom Extension</Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default ServicesPage
