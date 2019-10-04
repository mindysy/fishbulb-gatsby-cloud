import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Container } from "react-bootstrap"

import "../styles/footer.scss"

const PreFooter = () => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "assets/say-hi.png" }) {
          childImageSharp {
            fixed(width: 426) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return (
    <Container className="text-center container-md">
      <div>
        <h2>Meet the Team</h2>
        <p>
          Fishbulb Solutions is based in Australia, with as offshore software
          development team in Cebu, Philippines. We are expericend team of
          creative and development professionals passionate about creating
          software solutions and stand-out websites.
        </p>
        <p>
          We've been helping businesses bring their projects to life since 2009,
          and we've picked up a lot of expertise along the way. We're dedicated
          to make sure that every client gets the best possible product and
          support.
        </p>
      </div>
      <Img fixed={data.file.childImageSharp.fixed} />
    </Container>
  )
}

export default PreFooter
