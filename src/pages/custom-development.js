import React from "react"
import Layout from "../components/layout"
import Testimonials from "../components/testimonials"
import OurClient from "../components/our-clients"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { Container, Row, Col } from "react-bootstrap"

const WhatWeDo = () => {
  const data = useStaticQuery(
    graphql`
      query {
        banner: file(relativePath: { eq: "assets/banner-ecommerce.png" }) {
          childImageSharp {
            fluid(maxWidth: 946, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        streamline: file(relativePath: { eq: "assets/streamline.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        systemise: file(relativePath: { eq: "assets/systemise.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        automate: file(relativePath: { eq: "assets/automate.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        integrate: file(relativePath: { eq: "assets/integrate.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        csd: file(relativePath: { eq: "assets/csd.png" }) {
          childImageSharp {
            fluid(maxWidth: 522, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        csdAnalyse: file(relativePath: { eq: "assets/csd-analyse.png" }) {
          childImageSharp {
            fluid(maxWidth: 295, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        csdDb: file(relativePath: { eq: "assets/csd-database.png" }) {
          childImageSharp {
            fluid(maxWidth: 294, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        csdReports: file(relativePath: { eq: "assets/csd-reports.png" }) {
          childImageSharp {
            fluid(maxWidth: 299, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <div className="services-banner">
        <Container className="text-center">
          <h1>Custom Software Development</h1>
          <div className="mx-auto">
            <h3>
              We create affordable solutions that bring that goals of your
              business to life.
            </h3>
          </div>
          <Row className="pt-3 pb-5">
            <Col>
              <div className="services-leadin">
                <Img fluid={data.csdAnalyse.childImageSharp.fluid} />
              </div>
              Its' not just about storing it. It's about using it, compating it
              and analysing it.
            </Col>
            <Col>
              <div className="services-leadin">
                <Img fluid={data.csdReports.childImageSharp.fluid} />
              </div>
              It’s about creating insights, reports, and customer knowledge that
              give your business an edge.
            </Col>
            <Col>
              <div className="services-leadin">
                <Img fluid={data.csdDb.childImageSharp.fluid} />
              </div>
              We can create custom, user friendly, business databases that look
              and work the way which suits you best.
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-img-lightblue p-5">
        <Container className="text-center pb-5 container-md">
          <h3>Here's What We Do</h3>
          <p>
            At Fishbulb Solutions, we specialise in creating user friendly
            custom software development to help your business operate the way it
            works best.
          </p>
          <p>
            We’ll upgrade your business from time-draining manual spreadsheets,
            to sharable digital databases. To do this, we’ll create easy to use,
            purpose built software that will save you time, and reduce human
            error. We’ll even take automation one step further by integrating
            our new system with your existing software.
          </p>
        </Container>
        <Container>
          <Row className="align-items-center position-relative pb-lg-5">
            <Col xs={12} lg={12} className="pb-5 pb-lg-3">
              <Img fluid={data.streamline.childImageSharp.fluid} />
            </Col>
            <Col xs={12} lg={6} className="streamline">
              <h3 className="mb-2">Streamline</h3>
              <p>
                With over 9 years’ experience creating, custom software
                applications we’re certain we can streamline and modernise your
                systems to capture all the unique requirements of your business.
              </p>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col xs={12} lg={{ span: 6, order: 2 }} className="py-5 py-lg-3">
              <Img fluid={data.systemise.childImageSharp.fluid} />
            </Col>
            <Col xs={12} lg={{ span: 6, order: 1 }} xl={{ offset: 1 }}>
              <h3 className="mb-2">Systemise</h3>
              <p>
                Creating fully customised, branded software to organise all your
                data in one place is what we do. Once deployed, our unified
                custom software application will boost staff productivity,
                helping them work faster and smarter.
              </p>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col xs={12} lg={6} className="py-5 py-lg-3">
              <Img fluid={data.automate.childImageSharp.fluid} />
            </Col>
            <Col xs={12} lg={6} xl={{ offset: 1 }}>
              <h3 className="mb-2">Automate</h3>
              <p>
                Well-designed software saves your business time &amp; money, and
                automating manual tasks is one of the most powerful ways to
                achieve this. Identifying and implementing these automations is
                a hugely effective way to increase output whilst keeping your
                staffing costs in check.
              </p>
            </Col>
          </Row>
          <Row className="align-items-center py-lg-5">
            <Col xs={12} lg={{ span: 7, order: 2 }} className="py-5 py-lg-3">
              <Img fluid={data.integrate.childImageSharp.fluid} />
            </Col>
            <Col xs={12} lg={{ span: 5, order: 1 }} xl={{ offset: 1 }}>
              <h3 className="mb-2">Integrate</h3>
              <p>
                The only way to harness the full advantages software can bring
                your organisation is to tailor it to suit your business’ unique
                operations. However, there are some applications we’d strongly
                advise integrating with. For example, if you’re using an
                accounting platform such as MYOB, Xero, Quickbooks or Saasu, it
                would be much more cost effective and beneficial to create a
                seamless connection with their platform letting them do what
                they do best.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-grey py-5">
        <Container>
          <h3 className="text-center">
            What is Custom Software Development, and Why Would I Need It?
          </h3>
          <Row>
            <Col lg={6} xl={7}>
              <Img fluid={data.csd.childImageSharp.fluid} />
            </Col>
            <Col lg={6} xl={5}>
              <p>
                Have you ever needed to make a piece of off-the-shelf software
                perform a function it just wasn’t made to do? It’s frustrating,
                slow, and hard to reach the result you need. Custom software
                development means we create software that does exactly what you
                need it do, with all the functionality your business requires.
                From boosting staff productivity and reducing key person risk,
                to decision making and customer satisfaction, bespoke software
                can help transform your business for the better. Your objectives
                are our objectives, and we’ll create the solution you need in
                order to meet them.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Testimonials />
      <Container fluid className="bg-dark-blue text-center py-5 mt-5">
        <a href="/about" className="btn btn-blue px-4">
          FIND OUT MORE ABOUT OUR WORK
        </a>
      </Container>
      <OurClient />
    </Layout>
  )
}

export default WhatWeDo
