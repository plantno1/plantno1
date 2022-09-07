import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"

import "../Footer/footer.scss"

const links = [
  {
    name: "Menu",
    link: "/menu",
  },
  // {
  //   name: "Catering",
  //   link: "/catering",
  // },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
]

const Footer = () => {
  return (
    <>
      <section className="footer">
        <Container>
          <Row>
            <Col lg="3">
              <h6>Hours</h6>
              <ul>
                <li>Monday - Friday: 10-5</li>
                <li>Saturday: 10-2</li>
              </ul>
              <a id="phone" href="tel:905-988-1413">
                905-988-1413
              </a>
            </Col>
            <Col lg="3">
              <h6>Location</h6>
              <p>
                9 Westwood Court <br /> Niagara-on-the-Lake, Ontario
                <br /> L0S1J0
              </p>
            </Col>
            <Col lg="6">
              <ul className="d-flex justify-content-between">
                {links.map(link => (
                  <li>
                    <Link to={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
          <Row class="infused">
            <Col lg="12">
              <p>
                <a
                  href="https://infused.agency"
                  target="_blank"
                  rel="noreferrer"
                >
                  Niagara web design
                </a>{" "}
                by Infused Agency
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Footer
