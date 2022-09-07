import React from "react"
import { Container, Row, Col } from "reactstrap"

import "../innerHeroTitle/inner-hero-title.scss"

const InnerHeroTitle = ({ title, subTitle }) => {
  return (
    <>
      <section className="inner-hero-title">
        <Container>
          <Row>
            <Col lg="12">
              <hr />
              <h1>{title}</h1>
              <p>{subTitle}</p>
              <hr />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default InnerHeroTitle
