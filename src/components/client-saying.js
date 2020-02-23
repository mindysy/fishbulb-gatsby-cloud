import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import AOS from "../../node_modules/aos/dist/aos.js"

import { Container } from "react-bootstrap"
import "../styles/client-saying.scss"
import "../../node_modules/aos/dist/aos.css" // You can also use <link> for styles

const Saying = () => {
  useEffect(() => {
    AOS.init()
  }, [])

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
    <Container fluid className="bg-light-blue text-center clearfix pt-5">
      <h2 className="mb-5">See What Our Clients Are Saying</h2>
      <div className="clearfix position-relative">
        <Img fluid={data.file.childImageSharp.fluid} />

        {/* Client Testimony Tooltip */}
        <div
          className="aos-init tooltip tooltip--1 tooltip--down tooltip--small"
          data-aos="fade-in"
          data-aos-offset="200"
        >
          “We couldn’t be happier with the custom studio management software
          Fishbulb created for us! Staff efficiency has skyrocketed since its
          implementation and customer engagement via our parent and student
          portal has significantly reduced our administration hours.”
          <span>Jodie Williams</span>
          Director, Action Dance Academy
        </div>

        <div
          className="clearfix aos-init tooltip tooltip--2 tooltip--down tooltip--small"
          data-aos="fade-in"
          data-aos-offset="200"
        >
          “Having worked with Fishbulb Solutions for over 10 years we can
          confidently assure you they’re a custom software development partner
          you can trust.”
          <span>Jock Germany</span>
          Director, Environmental Treatment Solutions
        </div>

        <div
          className="clearfix aos-init tooltip tooltip--3 tooltip--down tooltip--med"
          data-aos="fade-in"
          data-aos-offset="300"
        >
          “The custom project management application we had build saves us a
          tonne of time managing our engineering projects. It’s well and truely
          paid for itself and we’re extremely happy with the ROI.”
          <span>Graeme Deaker</span>
          Director, WSP Parsons Brinckerhoff
        </div>

        <div
          className="clearfix aos-init tooltip tooltip--4 tooltip--left tooltip--big"
          data-aos="fade-in"
          data-aos-offset="400"
        >
          “They are a fast, reliable, creative and innovative custom software
          provider and the WHS mobile web app they build for us is extremely
          intuitive.”
          <span>Greg Aylett</span>
          Manufacturing Excellence Manager, Vinidex
        </div>

        <div
          className="clearfix aos-init tooltip tooltip--5 tooltip--right"
          data-aos="fade-in"
          data-aos-offset="450"
        >
          “The team at Fishbulb extended the functionality of our SAP Business
          One ERP software to include a custom barcode, labelling and despatch
          application at a fraction of the cost quoted by other SAP business
          partners. We're extremely pleased with service they provide and have
          continued working with them on further projects.”
          <span>Danny Gellert</span>
          Director, Cello Paper Pty Ltd
        </div>

        <div
          className="clearfix aos-init tooltip tooltip--6 tooltip--left tooltip--small"
          data-aos="fade-in"
          data-aos-offset="500"
        >
          “Fishbulb Solutions helped rescue a FileMaker Pro project management
          application built by an ex employee. Not only did they tidy up the
          backend database and improve reporting capabilities, they also
          improved the user interface making it vastly more intuitive and easy
          to onboard new staff.”
          <span>Ben North</span>
          Managing Director, Waterman AHW Pty Ltd
        </div>

        <div
          className="clearfix aos-init tooltip tooltip--7 tooltip--up tooltip--med"
          data-aos="fade-in"
          data-aos-offset="500"
        >
          “We're extremely impressed with the custom data centre asset
          management software Andrew and the team at Fishbulb Solutions created
          for us. They very quickly deciphered our multitude of spreadsheets,
          graphs and reports and guided us through the process of converting all
          this into a stand-alone, intuitive, custom software system.”
          <span>Michael Baker</span>
          Vodafone Australia Pty Limited
        </div>

        <div
          className="clearfix aos-init tooltip tooltip--8 tooltip--up tooltip--big"
          data-aos="fade-in"
          data-aos-offset="500"
        >
          “Andrew and the team are really easy to work with. They're honest,
          flexible and reliable. The custom software system and supplier portal
          they've created is easy to use and has allowed us to grow quickly
          whilst keeping our admin costs in check.”
          <span>Simon Cook</span>
          Director, Enso International
        </div>

        <div
          className="clearfix aos-init tooltip tooltip--9 tooltip--up tooltip--big"
          data-aos="fade-in"
          data-aos-offset="500"
        >
          “We've worked with Fishbulb Solutions for over 3 years. We originally
          contracted them to rescue our membership database project. They've
          done a fantastic job and our member engagement and system satisfaction
          has risen significantly. FB are now handling all our app, website and
          database requirements and we wouldn't hesitate recommending them!”
          <span>Kirstie Wells</span>
          Global Office Manager, C3 Global
        </div>

        <div
          className="clearfix aos-init tooltip tooltip--10 tooltip--left tooltip--big"
          data-aos="fade-in"
          data-aos-offset="500"
        >
          “Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna.”
          <span>John Micheal Doe</span>
          Director, HQCorp
        </div>
        {/* End Client Testimony Tooltip */}
      </div>
    </Container>
  )
}

export default Saying
