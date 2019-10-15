import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { Container, Carousel } from "react-bootstrap"
import "../styles/services.scss"

const Testimonial = () => {
  const data = useStaticQuery(
    graphql`
      query {
        jeremy: file(relativePath: { eq: "assets/jeremy.png" }) {
          childImageSharp {
            fixed(width: 112) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return (
    <div className="carousel-testimonial py-5">
      <Container>
        <div className="text-center container-sm mx-auto">
          <h3>Who We’ve Helped</h3>
          <p>
            From construction and consultancy, to printing and engineering,
            we’ve developed countless custom solutions for businesses like
            yours.
          </p>
        </div>
        <div className="clearfix">
          <Carousel>
            <Carousel.Item>
              <div>
                <p>
                  “Environmental Treatment Solutions provides hazardous waste
                  disposal services to businesses throughout Australia. For many
                  years we managed all aspects of the business using Word
                  documents, Excel spreadsheets and Microsoft Outlook contact
                  lists. Whilst we were a small growing business this was
                  manageable, however as we grew cracks started to appear in our
                  manual systems with the reduced productivity and missed
                  opportunities costing us time and money. We decided to engage
                  Fishbulb Solution to help us develop a custom software
                  solution that would streamline all of our business’s
                  operational and sales procedures. We started with a quoting
                  and job tracking system and after this was successfully
                  implement we continued to add additional functionality to
                  further improve the system. Three years on and the software
                  now manages almost every aspect of our business. The increased
                  efficiency the software offers has enabled us to grow whilst
                  keeping our staffing costs in check. If you run a growing
                  business and are looking to implement a custom software system
                  to streamline your manual processes I would highly recommend
                  contacting Andrew and the team at Fishbulb Solutions.”
                </p>
                <div className="d-flex align-items-center">
                  <div className="pl-2 pr-5">
                    <Img fixed={data.jeremy.childImageSharp.fixed} />
                  </div>
                  <div>
                    <h3>Jeremy Dock</h3>
                    <span>
                      Director, Environmental Treatment Solutions Pty Ltd
                    </span>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div>
                <p>
                  “Environmental Treatment Solutions provides hazardous waste
                  disposal services to businesses throughout Australia. For many
                  years we managed all aspects of the business using Word
                  documents, Excel spreadsheets and Microsoft Outlook contact
                  lists. Whilst we were a small growing business this was
                  manageable, however as we grew cracks started to appear in our
                  manual systems with the reduced productivity and missed
                  opportunities costing us time and money. We decided to engage
                  Fishbulb Solution to help us develop a custom software
                  solution that would streamline all of our business’s
                  operational and sales procedures. We started with a quoting
                  and job tracking system and after this was successfully
                  implement we continued to add additional functionality to
                  further improve the system. Three years on and the software
                  now manages almost every aspect of our business. The increased
                  efficiency the software offers has enabled us to grow whilst
                  keeping our staffing costs in check. If you run a growing
                  business and are looking to implement a custom software system
                  to streamline your manual processes I would highly recommend
                  contacting Andrew and the team at Fishbulb Solutions.”
                </p>
                <div className="d-flex align-items-center">
                  <div className="pl-2 pr-5">
                    <Img fixed={data.jeremy.childImageSharp.fixed} />
                  </div>
                  <div>
                    <h3>Jeremy Dock</h3>
                    <span>
                      Director, Environmental Treatment Solutions Pty Ltd
                    </span>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </Container>
    </div>
  )
}

export default Testimonial
