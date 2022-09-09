import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Helmet } from "react-helmet";
import Nav from "../../components/Nav/nav";
import InnerContent from "../../components/innerContent/innerContent";
import Footer from "../../components/Footer/footer";
import InnerHero from "../../components/innerHero/innerHero";
import imgMeal from "../img/daily-grub-menu.jpg";
import imgDessert from "../img/daily-desserts-menu.jpg";
import imgCatering from "../img/catering-menu.jpg";
import desertMenu from "../img/desert-menu.pdf";
import grubMenu from "../img/grub-menu.pdf";
import cateringMenu from "../img/catering-menu.pdf";
import bgImage from "../img/hero.jpg";
import "../scss/menu.scss";

const Menu = () => {
  return (
    <>
      <Helmet>
        <title>Menu - Plant No. 01</title>
        <meta
          name="description"
          content="We use the best ingredients we can find, void of anything artificial, hydrogenated or genetically modified."
        />
      </Helmet>
      <Nav />
      <InnerHero
        bgImage={bgImage}
        title="Menu"
        subTitle="We use the best ingredients we can find, void of anything artificial, hydrogenated or genetically modified."
      />
      <InnerContent>
        <section className="menu">
          <Container>
            <Row>
              <Col lg="12">
                <h2 className="menu-title">Daily Grub Meal Menu</h2>
                <p className="script">
                  Subject to change based on the creative talents of our Kitchen
                  crew. *Meats, Cheeses, Butter, Dips, Sauces, Gravy, Etc. Are
                  Entirely Plant Based and Made in Our Kitchen
                </p>
                <h3>Lasagna</h3>
                <ul>
                  <li>
                    Six layer lasagna with house made meat and cheese sauce
                    served with dinner roll with butter.
                  </li>
                </ul>
                <h3>Empanadas (two)</h3>
                <ul>
                  <li>Served with mango salsa and chipotle mayo.</li>
                </ul>
                <h3>Hash</h3>
                <ul>
                  <li>
                    Black bean and potato hash served with house made ketchup.
                    Side of seasonal vegetables.
                  </li>
                </ul>
                <h3>Mac and cheese</h3>
                <ul>
                  <li>
                    Creamy cheese sauce with elbow pasta served with bacon and
                    parmesan. Side of seasonal vegetables and dinner roll and
                    butter.
                  </li>
                </ul>
                <h3>Sweet potato gnocchi</h3>
                <ul>
                  <li>
                    Garlic, kale sweet potato gnocchi served with seasonal
                    vegetables, dinner roll and butter.
                  </li>
                </ul>
                <h3>Sunday Night Dinner</h3>
                <ul>
                  <li>
                    Meatloaf , scalloped potatoes, seasonal vegetables served
                    with gravy, dinner roll and butter.
                  </li>
                </ul>
                <p className="script">
                  Daily specials, creations, experiments and potential
                  blunders... see our Instagram posts for updates.
                </p>
              </Col>
            </Row>
            <br />
            <Row>
              <Col lg="12">
                <h2 className="menu-title">Daily Grub Dessert Menu</h2>
                <p class="script">
                  May vary depending on our customer’s stress levels, World
                  events, and our own shortcomings. *Unbleached, Non GMO Flours,
                  No Artificial Flavours, Colours or Hydrogenated Fats.
                </p>
                <h3>Baked cheese cake</h3>
                <ul>
                  <li>
                    Served with seasonal fruit reduction or caramel sauce.
                  </li>
                </ul>
                <h3>Sandwich cookies</h3>
                <ul>
                  <li>Peanut butter with chocolate ganache.</li>
                </ul>
                <h3>Dark chocolate oreo cookie</h3>
                <ul>
                  <li>NEED DESCRIPTION</li>
                </ul>
                <h3>Seasonal semolina cake</h3>
                <ul>
                  <li>Made with seasonal, local fruit.</li>
                </ul>
                <h3>Triple chocolate brownie</h3>
                <ul>
                  <li>Chewie, intense dark chocolate.</li>
                </ul>
                <h3>Chocolate chunk cookie</h3>
                <ul>
                  <li>Soft and chewy with Malden sea salt.</li>
                </ul>
                <h3>Cupcake</h3>
                <ul>
                  <li>
                    Boston cream filled with vanilla custard topped with
                    chocolate ganache.
                  </li>
                </ul>
                <h3>Carrot cake</h3>
                <ul>
                  <li>
                    Traditional moist cake topped with cream cheese frosting.
                  </li>
                </ul>
                <h3>Key lime pie</h3>
                <ul>
                  <li>Creamy key lime filling with lime curd.</li>
                </ul>
                <p className="script">
                  Daily inspirations, fits of addiction and hormone induced
                  novelties…see our instagram posts and updates.
                </p>
              </Col>
            </Row>
          </Container>
          {/* <Container>
            <Row>
              <Col lg="4">
                <img
                  className="img-fluid"
                  src={imgDessert}
                  alt="Daily Grub Meal Menu"
                />
                <h4>Daily Grub Meal Menu</h4>
                <a href={grubMenu} target="_blank" rel="noreferrer">
                  <Button>View Menu</Button>
                </a>
              </Col>
              <Col lg="4">
                <img
                  className="img-fluid"
                  src={imgMeal}
                  alt="Daily Grub Meal Menu"
                />
                <h4>Daily Grub Dessert Menu</h4>
                <a href={desertMenu} target="_blank" rel="noreferrer">
                  <Button>View Menu</Button>
                </a>
              </Col>
              <Col lg="4">
                <img
                  className="img-fluid"
                  src={imgCatering}
                  alt="Daily Grub Meal Menu"
                />
                <h4>Catering Menu</h4>
                <a href={cateringMenu} target="_blank" rel="noreferrer">
                  <Button>View Menu</Button>
                </a>
              </Col>
            </Row>
          </Container> */}
        </section>
      </InnerContent>
      <Footer />
    </>
  );
};

export default Menu;
