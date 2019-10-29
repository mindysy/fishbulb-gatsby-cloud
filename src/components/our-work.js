import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Container } from "react-bootstrap"
import Img from "gatsby-image"

const OurWork = () => {
  const data = useStaticQuery(
    graphql`
      query {
        ets: file(relativePath: { eq: "assets/project-ets.png" }) {
          childImageSharp {
            fluid(maxWidth: 914, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <Container className="text-center container-md py-5">
      <h2>Our Work</h2>
      <div>
        <Img fluid={data.ets.childImageSharp.fluid} />
      </div>
    </Container>
  )
}

export default OurWork
