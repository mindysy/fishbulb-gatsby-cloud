import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { Container, Row, Col } from "react-bootstrap"
import "../styles/services.scss"

const Testimonial = () => {
  const data = useStaticQuery(
    graphql`
      query {
        ecommerce: file(relativePath: { eq: "assets/icon-house.png" }) {
          childImageSharp {
            fixed(width: 107) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        gadgets: file(relativePath: { eq: "assets/icon-gadgets.png" }) {
          childImageSharp {
            fixed(width: 159) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        cms: file(relativePath: { eq: "assets/icon-cms.png" }) {
          childImageSharp {
            fixed(width: 126) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        puzzle: file(relativePath: { eq: "assets/icon-puzzle.png" }) {
          childImageSharp {
            fixed(width: 116) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return (
    <div className="services-offer text-center">
      <Container>
        <div>
          <h3>We’ll Create a Website As Unique As You Are</h3>
          <p>
            First impressions are vital. For those who visit your business
            online, your website is your handshake and your calling card. It
            shows people who you are, and what you’re made of. It’s also the way
            repeat customers build a relationship with your brand.
          </p>
        </div>
        <Row className="">
          <Col xs="6" lg="3">
            <div className="services-offer-list">
              <div className="services-offer-img">
                <Img fixed={data.ecommerce.childImageSharp.fixed} />
              </div>
              <span>Ecommerce Web deisgn and Development</span>
            </div>
          </Col>
          <Col xs="6" lg="3">
            <div className="services-offer-list">
              <div className="services-offer-img">
                <Img fixed={data.gadgets.childImageSharp.fixed} />
              </div>
              <span>Responsive Web Design and Development</span>
            </div>
          </Col>
          <Col xs="6" lg="3">
            <div className="services-offer-list">
              <div className="services-offer-img">
                <Img fixed={data.cms.childImageSharp.fixed} />
              </div>
              <span>CMS Web Design and Development</span>
            </div>
          </Col>
          <Col xs="6" lg="3">
            <div className="services-offer-list">
              <div className="services-offer-img">
                <Img fixed={data.puzzle.childImageSharp.fixed} />
              </div>
              <span>Custom Extension</span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Testimonial
