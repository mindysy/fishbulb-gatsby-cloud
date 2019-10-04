import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

import { Container, Row, Col } from "react-bootstrap"
import "../styles/about.scss"

const AboutPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        earl: file(relativePath: { eq: "assets/cartoon-earl.png" }) {
          childImageSharp {
            fluid(maxWidth: 257, quality: 100) {
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
      <div className="about-banner text-center">
        <Container className="container-lg">
          <h1>The Company</h1>
          <p>
            Lightbulb is based in Australia with an offshore development team in
            Cebu Philippines, we specialise in affordable software and web
            solutions that make businesses work better.
          </p>
        </Container>
      </div>
      <div className="about-content">
        <Container>
          <Row>
            <Col md="6" lg="5">
              <h2>
                The Brains Behind
                <br />
                Our Expertise
              </h2>
              <p>
                Fishbulb Solutions is a custom software and web development
                company passionate about bringing business projects to life. We
                started our services in 2009, and have handpicked a friendly
                team of creative and development experts that love what they do.
              </p>
              <p>
                Our development team has the perfect mix of creative flair and
                logical expertise to ensure each project not only looks great,
                but is intuitive and easy to use for both you and your
                customers.
              </p>
              <p>
                <a href="/">LEARN MORE</a>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="text-center py-5">
        <h2>The Team</h2>
        <p>
          We are a team of 11 experts with passion for design and development.
        </p>
        <Row className="about-team pt-3 my-5">
          <Col>
            <div className="about-team-img">
              <Img fluid={data.elmy.childImageSharp.fluid} />
            </div>
            <h3>Andrew Fish</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh
            </p>
          </Col>
          <Col>
            <div className="about-team-img">
              <Img fluid={data.earl.childImageSharp.fluid} />
            </div>
            <h3>Earl Evan Amante</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh
            </p>
          </Col>
          <Col>
            <div className="about-team-img">
              <Img fluid={data.elmy.childImageSharp.fluid} />
            </div>
            <h3>Isaac Manubag</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh
            </p>
          </Col>
          <Col>
            <div className="about-team-img">
              <Img fluid={data.earl.childImageSharp.fluid} />
            </div>
            <h3>Mindy Sy</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh
            </p>
          </Col>
        </Row>
        <div className="py-5">
          <h2>Our Latest Projects</h2>
          <p>Information coming soon.</p>
        </div>
      </Container>
    </Layout>
  )
}

export default AboutPage
