import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Container, Row, Col } from "react-bootstrap"

import "../styles/footer.scss"

const OurClients = () => {
  const data = useStaticQuery(
    graphql`
      query {
        wsp: file(relativePath: { eq: "assets/logo-wsp.png" }) {
          childImageSharp {
            fixed(width: 159) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        waterman: file(relativePath: { eq: "assets/logo-waterman.png" }) {
          childImageSharp {
            fixed(width: 186) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        tresillian: file(relativePath: { eq: "assets/logo-tresillian.png" }) {
          childImageSharp {
            fixed(width: 186) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        cello: file(relativePath: { eq: "assets/logo-cello.png" }) {
          childImageSharp {
            fixed(width: 128) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        ets: file(relativePath: { eq: "assets/logo-ets.png" }) {
          childImageSharp {
            fixed(width: 159) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return (
    <Container className="text-center pt-5 pb-1">
      <h3>Our Clients</h3>
      <Row className="align-items-center">
        <Col>
          <Img fixed={data.wsp.childImageSharp.fixed} />
        </Col>
        <Col>
          <Img fixed={data.waterman.childImageSharp.fixed} />
        </Col>
        <Col>
          <Img fixed={data.tresillian.childImageSharp.fixed} />
        </Col>
        <Col>
          <Img fixed={data.cello.childImageSharp.fixed} />
        </Col>
        <Col>
          <Img fixed={data.ets.childImageSharp.fixed} />
        </Col>
      </Row>
    </Container>
  )
}

export default OurClients
