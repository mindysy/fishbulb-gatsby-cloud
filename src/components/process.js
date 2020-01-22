import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Container, ListGroup, Tab } from "react-bootstrap"

import "../styles/process.scss"

const Process = () => {
  const data = useStaticQuery(
    graphql`
      query {
        discover: file(relativePath: { eq: "assets/process-discover.png" }) {
          childImageSharp {
            fluid(maxWidth: 285, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        design: file(relativePath: { eq: "assets/process-design.png" }) {
          childImageSharp {
            fluid(maxWidth: 285, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        develop: file(relativePath: { eq: "assets/process-develop.png" }) {
          childImageSharp {
            fluid(maxWidth: 285, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        deploy: file(relativePath: { eq: "assets/process-deploy.png" }) {
          childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <div className="process-bg pt-3">
      <Container className="process text-center pt-5 pb-1">
        <h3 className="mb-5">Our Application Development Process</h3>

        <div className="d-lg-none">
          <div className="process-content">
            <div>
              <div className="process-img">
                <Img fluid={data.design.childImageSharp.fluid} />
              </div>
              <h3>Design</h3>
              We meet with you and establish all your business’s requirements.
              At the end of this “discover” stage we will provide you with a
              sitemap, build documentation and even create a mockup for you so
              you will have a very clear idea of what we will be building, right
              from the outset.
            </div>
            <div className="mt-5">
              <div className="process-img process-img-discover">
                <Img fluid={data.discover.childImageSharp.fluid} />
              </div>
              <h3>Discover</h3>
              The UX designer then takes the mockup and your logo &amp; branding
              and makes it look pretty, but more importantly functional and
              user-friendly.
            </div>
            <div className="mt-5">
              <div className="process-img process-img-develop">
                <Img fluid={data.develop.childImageSharp.fluid} />
              </div>
              <h3>Develop</h3>
              The development team takes the designs and builds your software on
              a staging site, which you will have access to. We carry out all
              testing at this stage to ensure everything is workings as it
              should.
            </div>
            <div className="mt-5">
              <div className="process-img process-img-deploy">
                <Img fluid={data.deploy.childImageSharp.fluid} />
              </div>
              <h3>Deploy</h3>
              We deploy your software on powerful, reliable and secure
              infrastructure giving you and your team access to the software
              from any device, wherever you are in the world.
            </div>
          </div>
        </div>

        <div className="d-none d-lg-block">
          <Tab.Container id="process" defaultActiveKey="#discover">
            <ListGroup horizontal>
              <ListGroup.Item href="#discover">
                <div className="process-item">
                  <div className="process-img">
                    <Img fluid={data.discover.childImageSharp.fluid} />
                  </div>
                  <h3>Discover</h3>
                </div>
              </ListGroup.Item>
              <div className="process-arrow"></div>
              <ListGroup.Item href="#design">
                <div className="process-item">
                  <div className="process-img process-img-design">
                    <Img fluid={data.design.childImageSharp.fluid} />
                  </div>
                  <h3>Design</h3>
                </div>
              </ListGroup.Item>
              <div className="process-arrow"></div>
              <ListGroup.Item href="#develop">
                <div className="process-item">
                  <div className="process-img process-img-develop">
                    <Img fluid={data.develop.childImageSharp.fluid} />
                  </div>
                  <h3>Develop</h3>
                </div>
              </ListGroup.Item>
              <div className="process-arrow"></div>
              <ListGroup.Item href="#deploy">
                <div className="process-item">
                  <div className="process-img process-img-deploy">
                    <Img fluid={data.deploy.childImageSharp.fluid} />
                  </div>
                  <h3>Deploy</h3>
                </div>
              </ListGroup.Item>
            </ListGroup>

            <Tab.Content className="process-content mt-3">
              <Tab.Pane eventKey="#discover">
                We meet with you and establish all your business’s requirements.
                At the end of this “discover” stage we will provide you with a
                sitemap, build documentation and even create a mockup for you so
                you will have a very clear idea of what we will be building,
                right from the outset.
              </Tab.Pane>
              <Tab.Pane eventKey="#design">
                The UX designer then takes the mockup and your logo &amp;
                branding and makes it look pretty, but more importantly
                functional and user-friendly.
              </Tab.Pane>
              <Tab.Pane eventKey="#develop">
                The development team takes the designs and builds your software
                on a staging site, which you will have access to. We carry out
                all testing at this stage to ensure everything is workings as it
                should.
              </Tab.Pane>
              <Tab.Pane eventKey="#deploy">
                We deploy your software on powerful, reliable and secure
                infrastructure giving you and your team access to the software
                from any device, wherever you are in the world.
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </Container>
    </div>
  )
}

export default Process
