import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { Container } from "react-bootstrap"
import "../styles/client-saying.scss"

const Saying = () => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "assets/buildings.png" }) {
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
    <Container fluid className="bg-light-blue text-center clearfix py-5">
      <h2>See What Our Clients Are Saying</h2>
      <div>
        <Img fluid={data.file.childImageSharp.fluid} />
      </div>
    </Container>
  )
}

export default Saying
