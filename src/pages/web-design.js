import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Offers from "../components/offers"
import Testimonials from "../components/testimonials"
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

      <Offers />
      <Container className="py-5 text-center">
        <h3>How Much Does Web Design Cost?</h3>
        <p>
          At Fishbulb Solutions, we pride ourselves on offering affordable web
          design. We’ve worked with businesses of all kinds to create websites
          that look great, and work even better.
        </p>
        <p>
          Our cost depends on the complexity of your needs, and the number of
          features your website requires. Entry level websites start at $8k,
          while most professional web design costs close to $12k.{" "}
          <a href="/">Contact us today</a> to find out how much it would cost
          for us to build the ideal website for your business.
        </p>
      </Container>
      <Testimonials />
    </Layout>
  )
}

export default ServicesPage
