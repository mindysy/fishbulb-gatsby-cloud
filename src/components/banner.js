import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { Container } from "react-bootstrap"
import "../styles/banner.scss"

const Banner = () => {
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
                Purpose built
                <br />
                Custom Software <br />
                for Your Business
              </div>
              <p>We Integrate. We Systemise. We Automate. We Streamline.</p>
              <Link to="/about" className="btn btn-blue">
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
          Purpose-driven Custom Software Development and Web Development in
          Sydney, Melbourne and Perth
        </h2>
        <p>
          We create affordable solutions that bring your company's goals to
          life. These automated applications can help you run business
          efficiently and effectively.
        </p>
        <p>We listen, we discover, we develop and we deliver</p>
      </Container>
    </React.Fragment>
  )
}

export default Banner
