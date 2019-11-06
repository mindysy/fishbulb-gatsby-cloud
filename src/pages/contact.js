import React from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Form, Button } from "react-bootstrap"

import "../styles/contact.scss"

const ContactPage = () => {
  return (
    <Layout>
      <div className="contact">
        <Container className="text-center contact-content">
          <h1>Get in Touch with Fishbulb</h1>
          <h3>
            We'd love to hear where your business is heading,
            <br />
            and talk about what we can do to help you get there.
          </h3>
        </Container>
        <Container className="contact-container">
          <div className="contact-form">
            <Row>
              <Col className="py-5 pl-5 pr-3" lg="7" xl="8">
                <h3>Send Us The Details Online</h3>
                <Form>
                  <Form.Row>
                    <Form.Group
                      as={Col}
                      sm="12"
                      md="6"
                      controlId="formGridName"
                    >
                      <Form.Control type="text" placeholder="Name" required />
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      sm="12"
                      md="6"
                      controlId="formGridEmail"
                    >
                      <Form.Control type="text" placeholder="Email" required />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group
                      as={Col}
                      sm="12"
                      md="6"
                      controlId="formGridPhone"
                    >
                      <Form.Control type="text" placeholder="Phone" />
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      sm="12"
                      md="6"
                      controlId="formGridCompany"
                    >
                      <Form.Control type="text" placeholder="Company" />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="formGridMessage">
                    <Form.Control as="textarea" placeholder="Message" />
                  </Form.Group>

                  <Button type="submit" className="btn-blue btn-blue-glow">
                    SEND
                  </Button>
                </Form>
              </Col>
              <Col className="p-5" lg="5" xl="4">
                <h3>
                  Let Us Know
                  <br />
                  How We Can Help
                </h3>
                <p>
                  Chat to out director Andrew about your project today. He's
                  always keen for a chat!
                </p>
                <div className="contact-director">
                  <h3>Andrew Fish</h3>
                  <span>
                    <a href="tel:0290031015">PHONE: (02) 9003 1015</a>
                  </span>
                </div>
              </Col>
            </Row>
          </div>
          <Row>
            <Col xs="12" lg="6">
              <div className="contact-office">
                <h3>Sydney Head Office</h3>
                <div className="contact-office-details">
                  <div>
                    <h5>ADDRESS</h5>
                    <p>
                      Level 32, 101 Miller Street
                      <br />
                      North Sydney NSW 2060
                    </p>
                    <h5>PHONE</h5>
                    <span>
                      <a href="tel:0290031015">(02) 9003 1015</a>
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="12" lg="6">
              <div className="contact-office">
                <h3>Cebu Development Office</h3>
                <div className="contact-office-details">
                  <div>
                    <h5>ADDRESS</h5>
                    <p>
                      Unit 19U, Avenir Bldg.,
                      <br />
                      Archbishop Reyes,
                      <br />
                      Cebu, Cebu City, Lahug
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default ContactPage
