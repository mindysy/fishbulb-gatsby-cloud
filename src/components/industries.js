import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { Container, Accordion, Card } from "react-bootstrap"
import "../styles/industries.scss"

const Industries = () => {
  const data = useStaticQuery(
    graphql`
      query {
        waste: file(relativePath: { eq: "assets/waste-mngt.png" }) {
          childImageSharp {
            fluid(maxWidth: 195, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        wasteInactive: file(
          relativePath: { eq: "assets/waste-mngt-inactive.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 195, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        churches: file(relativePath: { eq: "assets/churches.png" }) {
          childImageSharp {
            fluid(maxWidth: 143, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        churchesInactive: file(
          relativePath: { eq: "assets/churches-inactive.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 143, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        dance: file(relativePath: { eq: "assets/dance.png" }) {
          childImageSharp {
            fluid(maxWidth: 138) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        danceInactive: file(relativePath: { eq: "assets/dance-inactive.png" }) {
          childImageSharp {
            fluid(maxWidth: 138) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        manufacturing: file(relativePath: { eq: "assets/manufacturing.png" }) {
          childImageSharp {
            fluid(maxWidth: 187, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        logistics: file(relativePath: { eq: "assets/logistics.png" }) {
          childImageSharp {
            fluid(maxWidth: 209, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        engineering: file(relativePath: { eq: "assets/engineering.png" }) {
          childImageSharp {
            fluid(maxWidth: 208, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <Container className="py-5 container-xl">
      <div className="text-center">
        <h2>Industries We've Helped</h2>
        <p>We provide creative solutions for various industries:</p>
      </div>
      <Accordion defaultActiveKey="0">
        <Card className="accordion-1">
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
            WASTE MANAGEMENT
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ul>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
              </ul>
              <div className="industry-img">
                <Img fluid={data.waste.childImageSharp.fluid} />
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="accordion-2">
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
            CHURCHES
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <ul>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
              </ul>
              <div className="industry-img">
                <Img fluid={data.churches.childImageSharp.fluid} />
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="accordion-3">
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
            DANCE &amp; FITNESS
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <ul>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
              </ul>
              <div className="industry-img">
                <Img fluid={data.dance.childImageSharp.fluid} />
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="accordion-4">
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="3">
            MANUFACTURING
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <ul>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
              </ul>
              <div className="industry-img">
                <Img fluid={data.manufacturing.childImageSharp.fluid} />
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="accordion-5">
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="4">
            LOGISTICS
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              <ul>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
              </ul>
              <div className="industry-img">
                <Img fluid={data.logistics.childImageSharp.fluid} />
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="accordion-6">
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="5">
            ENGINEERING &amp; CONSTRUCTION
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
              <ul>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
              </ul>
              <div className="industry-img">
                <Img fluid={data.engineering.childImageSharp.fluid} />
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <div className="industry">
        <div className="industry-item industry-1">
          <div className="industry-title">
            WASTE
            <br />
            MANAGEMENT
          </div>
          <div className="industry-img">
            <Img fluid={data.waste.childImageSharp.fluid} />
          </div>
          <ul className="industry-item__list">
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
          </ul>
        </div>
        <div className="industry-item industry-2">
          <div className="industry-title">CHURCHES</div>
          <div className="industry-img">
            <Img fluid={data.churches.childImageSharp.fluid} />
          </div>
          <ul className="industry-item__list">
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
          </ul>
        </div>
        <div className="industry-item industry-3">
          <div className="industry-title">DANCE &amp; FITNESS</div>
          <div className="industry-img">
            <Img fluid={data.dance.childImageSharp.fluid} />
          </div>
          <ul className="industry-item__list">
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
          </ul>
        </div>
        <div className="industry-item industry-4">
          <div className="industry-title">MANUFACTURING</div>
          <div className="industry-img">
            <Img fluid={data.manufacturing.childImageSharp.fluid} />
          </div>
          <ul className="industry-item__list">
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
          </ul>
        </div>
        <div className="industry-item industry-5">
          <div className="industry-title">LOGISTICS</div>
          <div className="industry-img">
            <Img fluid={data.logistics.childImageSharp.fluid} />
          </div>
          <ul className="industry-item__list">
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
          </ul>
        </div>
        <div className="industry-item industry-6">
          <div className="industry-title">
            ENGINEERING &amp;
            <br />
            CONSTRUCTION
          </div>
          <div className="industry-img">
            <Img fluid={data.engineering.childImageSharp.fluid} />
          </div>
          <ul className="industry-item__list">
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
          </ul>
        </div>
      </div>
    </Container>
  )
}

export default Industries
