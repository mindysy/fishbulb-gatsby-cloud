import React, { useEffect } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Typed from "../../node_modules/typed.js/src/typed"

import { Container } from "react-bootstrap"
import "../styles/banner.scss"

const Banner = () => {
  useEffect(() => {
    new Typed("#typed", {
      stringsElement: "#typed-strings",
      strings: ["Streamline", "Systemise", "Automate", "Integrate"],
      typeSpeed: 40,
      backSpeed: 60,
      smartBackspace: true,
      loop: true,
    })
  }, [])

  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "assets/banner-1.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <React.Fragment>
      <Container fluid className="pr-0">
        <div className="banner clearfix">
          <Container className="banner-content">
            <div>
              <div className="banner-title">
                Custom-made
                <br />
                websites, apps and software <br />
                for your business
              </div>
              <div className="banner-typed">
                We <span id="typed"></span>
              </div>
              <Link to="/about" className="btn btn-blue btn-blue-glow">
                LEARN MORE
              </Link>
            </div>
          </Container>
          <div className="banner-img">
            <Img fluid={data.file.childImageSharp.fluid} />
          </div>
        </div>
      </Container>
      <Container className="text-center pb-5">
        <h2>
          Custom Software Development and Web Development in Sydney, Melbourne,
          Brisbane and Perth.
        </h2>
        <p>
          We create affordable solutions that bring the goals of your business
          to life.
        </p>
        <p>We listen, we plan, we develop and we deliver.</p>
      </Container>
    </React.Fragment>
  )
}

export default Banner
