import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { Container } from "react-bootstrap"
import "../styles/footer.scss"

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        file(relativePath: { eq: "assets/say-hi.png" }) {
          childImageSharp {
            fixed(width: 320) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return (
    <footer>
      <Container className="text-center">
        <div>
          <h2>Meet the Team</h2>
          <p>
            Fishbulb Solutions is based in Australia, with as offshore software
            development team in Cebu, Philippines. We are expericend team of
            creative and development professionals passionate about creating
            software solutions and stand-out websites.
          </p>
          <p>
            We've been helping businesses bring their projects to life since
            2009, and we've picked up a lot of expertise along the way. We're
            dedicated to make sure that every client gets the best possible
            product and support.
          </p>
        </div>
        <Img fixed={data.file.childImageSharp.fixed} />
        <div className="clearfix my-5">
          &copy; {data.site.siteMetadata.title} 2016. All rights reserved.
          <br />
          <div>
            <a href="tel:0290031015" className="call-btn">
              02 9003 1015
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
