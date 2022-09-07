import React from "react"
import { Container, Row, Col } from "reactstrap"

import "../Plant-Based Foods/plant-based-foods.scss"

function PlantBasedFoods({ title }) {
  return (
    <>
      <section id="plant">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>{title}</h2>
              <hr />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default PlantBasedFoods
