import React from "react"
import { graphql, useStaticQuery } from "gatsby"
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
      }
    `
  )

  return (
    <footer>
      <Container className="text-center container-md">
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
