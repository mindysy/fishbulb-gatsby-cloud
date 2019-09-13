import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { Container } from "react-bootstrap"
import "../styles/client-saying.scss"

import AOS from "aos"
import "../../node_modules/aos/dist/aos.css" // You can also use <link> for styles

AOS.init()

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
      <h2 className="mb-5">See What Our Clients Are Saying</h2>
      <div className="clearfix position-relative">
        <Img fluid={data.file.childImageSharp.fluid} />

        {/* Client Testimony Tooltip */}
        <div
          className="aos-init tooltip tooltip--1 tooltip--down tooltip--small"
          data-aos="fade-in"
          data-aos-offset="500"
        >
          “Lorem ipsum dolor sit amet, consectetuer adipiscing elit.”
          <span>John Micheal Doe</span>
          Director, Company Name
        </div>

        <div
          className="clearfix aos-init tooltip tooltip--2 tooltip--down tooltip--small"
          data-aos="fade-in"
          data-aos-offset="500"
        >
          “Lorem ipsum dolor sit amet, consectetuer adipiscing elit.”
          <span>John Micheal Doe</span>
          Director, Company Name
        </div>

        <div
          className="clearfix aos-init tooltip tooltip--3 tooltip--down tooltip--med"
          data-aos="fade-in"
          data-aos-offset="500"
        >
          “Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio.”
          <span>John Micheal Doe</span>
          Director, Company Name
        </div>

        <div
          className="clearfix aos-init tooltip tooltip--4 tooltip--left tooltip--big"
          data-aos="fade-in"
          data-aos-offset="500"
        >
          “Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.”
          <span>John Micheal Doe</span>
          Director, Company Name
        </div>

        <div
          className="clearfix aos-init tooltip tooltip--5 tooltip--right tooltip--small"
          data-aos="fade-in"
          data-aos-offset="500"
        >
          “Lorem ipsum dolor sit amet, consectetuer adipiscing elit.”
          <span>John Micheal Doe</span>
          Director, Company Name
        </div>

        <div
          className="clearfix aos-init tooltip tooltip--6 tooltip--left tooltip--small"
          data-aos="fade-in"
          data-aos-offset="500"
        >
          “Lorem ipsum dolor sit amet, consectetuer adipiscing elit.”
          <span>John Micheal Doe</span>
          Director, Company Name
        </div>

        <div
          className="clearfix aos-init tooltip tooltip--7 tooltip--up tooltip--med"
          data-aos="fade-in"
          data-aos-offset="500"
        >
          “Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna.”
          <span>John Micheal Doe</span>
          Director, Company Name
        </div>

        <div
          className="clearfix aos-init tooltip tooltip--8 tooltip--up tooltip--big"
          data-aos="fade-in"
          data-aos-offset="500"
        >
          “Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna.”
          <span>John Micheal Doe</span>
          Director, Company Name
        </div>

        <div
          className="clearfix aos-init tooltip tooltip--9 tooltip--up tooltip--small"
          data-aos="fade-in"
          data-aos-offset="500"
        >
          “Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna.”
          <span>John Micheal Doe</span>
          Director, Company Name
        </div>

        <div
          className="clearfix aos-init tooltip tooltip--10 tooltip--left tooltip--big"
          data-aos="fade-in"
          data-aos-offset="500"
        >
          “Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna.”
          <span>John Micheal Doe</span>
          Director, Company Name
        </div>
        {/* End Client Testimony Tooltip */}
      </div>
    </Container>
  )
}

export default Saying
