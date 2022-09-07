import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Helmet } from "react-helmet"
import Nav from "../../components/Nav/nav"
import InnerHero from "../../components/innerHero/innerHero"
import InnerContent from "../../components/innerContent/innerContent"
import Footer from "../../components/Footer/footer"
import aboutImg from "../img/about.jpg"
import bgImage from "../img/hero.jpg"
import "../scss/about.scss"

const About = () => {
  return (
    <>
      <Helmet>
        <title>About - Plant No. 01</title>
        <meta
          name="description"
          content="We offer a creative line-up of plant based comfort foods, and
                  yes, because we love desserts, we have a pretty awesome
                  selection of that too. We use the best ingredients we can
                  find, void of anything artificial, hydrogenated or
                  genetically modified."
        />
      </Helmet>
      <Nav />
      <InnerHero
        bgImage={bgImage}
        title="About"
        subTitle="We are a zero waste “vegan food factory” located in NIagara-on-the-Lake, Ontario, just a few minutes off the QEW highway."
      />
      <InnerContent>
        <section className="about">
          <div className="container">
            {/* One */}
            <Row className="d-flex align-items-center">
              <Col lg="12">
                <p>
                  Plant No. 01 is a vegan food factory located in an unassuming
                  , light Industrial area of Niagara-on-the-Lake. Our concept is
                  different but our goal is simple. Lunch, dinner ,and desserts
                  are available six days a week. We offer pack-and-go (in a rush
                  and need it ready), heat-and-eat (taking it home for lunch or
                  dinner) and frozen options (keeping it for those unexpected
                  visitors or way too tired to cook ) of almost everything we
                  make. Our biggest passion is producing small batch, artisanal
                  dairy substitutes which we use in many of our “daily grub” and
                  catering items. We take our food seriously. Much time goes
                  into sourcing local ingredients and eliminating artificial
                  colours, flavours, preservatives, hydrogenated fats and all
                  other nasty ingredients not meant for human consumption.
                  Because we really like to see our fellow humans in person, you
                  will need to come and see us to pick up your “daily grub”. We
                  truly hope that our heartfelt efforts to produce meals with
                  clean ingredients and compassion will be enjoyed by all.{" "}
                </p>
              </Col>
            </Row>
          </div>
          <Container>
            <Row>
              <Col lg="12">
                <br />
                <h2>On a side note...</h2>
                <p>
                  Plant No. 1 is a pretty interesting place (literally built
                  from the ground up).. We try to run (mostly) on solar power,
                  we recycle grey water from our roof to take care of our
                  outdoor landscaping, packaging is compostable or biodegradable
                  right down to the labels (please,please pack all of your food
                  items from Plant No. 01 in your compost bin at work or at home
                  ) and we compost almost every bit of waste generated by our
                  facility...down to one bag of garbage...I think we can do it!
                  <br />
                  <br />
                  We are all about respect for this beautiful planet, the human
                  race, and all things living.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </InnerContent>
      <Footer />
    </>
  )
}

export default About
