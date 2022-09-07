import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Nav from "../../components/Nav/nav"
import InnerContent from "../../components/innerContent/innerContent"
import Catering from "../../components/Home/Catering/Catering"
import Footer from "../../components/Footer/footer"
import InnerHero from "../../components/innerHero/innerHero"
import bgImage from "../img/hero.jpg"
import "../scss/menu.scss"

const Cateringg = () => {
  return (
    <>
      <Helmet>
        <title>Catering - Plant No. 01</title>
        <meta
          name="description"
          content="We can prepare something special for any occasion. Click here to learn more."
        />
      </Helmet>
      <Nav />
      <InnerHero
        bgImage={bgImage}
        title="Catering"
        subTitle="Our catering menu is where imagination, creativity and experimentation abound.
        Our founder and visionary uses botanical infusions in many of our desserts including
        sugared and dried flowers, local fruit reductions and essential oils.  Combined
        with our artisanal cheeses, our catering options are the result of passion and
        curiosity."
      />
      <InnerContent>
        <section className="catering">
          <Container>
            <Row>
              <Col lg="12">
                <Row>
                  <Col lg="12">
                    <h2 className="menu-title">Daily Grub Catering Menu</h2>
                    <p class="script">
                      All desert items are created for individual servings.
                      Entrees are prepared for servings of six (feeding
                      twelve...order two). A minimum advance order time of one
                      week is required (maybe more during peak party times!).
                    </p>
                    <p>
                      <em>
                        <strong>entrees</strong>
                      </em>
                    </p>
                    <h3>Mushroom Wellington</h3>
                    <ul>
                      <li>
                        Rosemary, pecans, mushroom meat, puff pastry surround
                      </li>
                    </ul>
                    <h3>Walnut Ragu Lasagna</h3>
                    <ul>
                      <li>Walnut meat, bechamel sauce, loose lasagna noodle</li>
                    </ul>
                    <h3>Tomato Galette</h3>
                    <ul>
                      <li>
                        Corn meal crust, various house made cheeses, zucchini,
                        "honey", fresh grape tomatoes
                      </li>
                    </ul>
                    <h3>Frittata</h3>
                    <ul>
                      <li>
                        Quiche style flan with seasonal vegetables, blind baked
                        pastry crust
                      </li>
                    </ul>
                    <h3>Vegetable Goulash</h3>
                    <ul>
                      <li>
                        Kamut penne, creamy garlic sauce, house made meatballs,
                        seasonal grilled vegetables
                      </li>
                    </ul>
                    <h3>Stuffed Sweet Peppers</h3>
                    <ul>
                      <li>
                        Tri-coloured peppers, walnut meat and cauliflower rice,
                        toasted and seasoned crumb
                      </li>
                    </ul>
                    <h3>Cannelloni with Endive and Ricotta</h3>
                    <ul>
                      <li>
                        White sauce, house made ricotta, crushed endive, toasted
                        cashews, jumbo white raisins, caramelized onions
                      </li>
                    </ul>
                    <h3>Sweet Potato Gnocci</h3>
                    <ul>
                      <li>
                        Olive oil and garlic drizzle, mushrooms, braised kale
                      </li>
                    </ul>
                    <br />
                    <br />
                    <p>
                      <em>
                        <strong>desserts</strong>
                      </em>
                    </p>
                    <p>(minimum order of one dozen per dessert)</p>
                    <h3>Strawberry Mimosa Pillow Cakes</h3>
                    <ul>
                      <li>
                        Champagne, citrus and strawberry, light layer cake
                        rounds, whipped butta cream middle
                      </li>
                    </ul>
                    <h3>Whisky Sour Cake</h3>
                    <ul>
                      <li>
                        Lemons, gentle bourbon infused sponge, butta cream
                        frosting
                      </li>
                    </ul>
                    <h3>Custard Slice</h3>
                    <ul>
                      <li>
                        Traditional custard, puff pastry, chocolate and cream
                        glaze
                      </li>
                    </ul>
                    <h3>Lavender Mint Cookies</h3>
                    <ul>
                      <li>Sugar cookie with botanicals</li>
                    </ul>
                    <h3>Rosewater Lemonade Cakes</h3>
                    <ul>
                      <li>
                        Lemon sponge, pure rosewater, butta cream frosting
                      </li>
                    </ul>
                    <h3>Key Lime Pie</h3>
                    <ul>
                      <li>Crumb base, hibiscus drizzle, dense lime custard</li>
                    </ul>
                    <h3>Wine Cake</h3>
                    <ul>
                      <li>Sauvignon infused sponge, dark chocolate ganache</li>
                    </ul>
                    <h3>Pears with Mascarpone</h3>
                    <ul>
                      <li>
                        Caramelized pears, hints of spice, signature mascarpone
                      </li>
                    </ul>
                    <h3>Translucent Botanical Cake (One Cake)</h3>
                    <ul>
                      <li>
                        Botanicals in agar jelly, vanilla sponge, delicate
                        citrus cream
                      </li>
                    </ul>
                    <h3>Chamomile Loaf with Elderflower</h3>
                    <ul>
                      <li>
                        Tea infused sour cream sponge, elderflower frosting,
                        sugared botanicals
                      </li>
                    </ul>
                    <h3>Rose Shortbread</h3>
                    <ul>
                      <li>Delicate shortbread, dried rose petals</li>
                    </ul>
                    <h3>Assortment of Filled Chocolates (Seasonal)</h3>
                    <ul>
                      <li>Caramel, rose, violet, peppermint, buttacream</li>
                    </ul>
                    <p>
                      <em>Thank you for letting us celebrate with you.</em>
                    </p>
                  </Col>
                </Row>
                <Catering title="Interested in Catering?" />
                <form
                  name="catering"
                  method="post"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <div class="form-group">
                    <input
                      name="name"
                      type="name"
                      class="form-control"
                      id="Name-field"
                      aria-describedby="namehelp"
                      aria-label="name field"
                      placeholder="Name"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      name="email"
                      type="email"
                      class="form-control"
                      id="Email-field"
                      aria-label="email field"
                      placeholder="Email"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      name="phone"
                      type="phone"
                      class="form-control"
                      id="Phone-field"
                      aria-describedby="urlhelp"
                      aria-label="phone field"
                      placeholder="Phone"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      name="date"
                      type="date"
                      class="form-control"
                      id="Date-field"
                      aria-describedby="urlhelp"
                      aria-label="date field"
                    />
                  </div>
                  <div class="form-group">
                    <textarea
                      name="message"
                      class="form-control"
                      id="Message-field"
                      aria-label="message field"
                      rows="3"
                      placeholder="List items you'd like from our Catering menu"
                    ></textarea>
                  </div>
                  <button className="btn btn-secondary" type="submit">
                    Submit
                  </button>
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="form-name" value="contact" />
                </form>
              </Col>
            </Row>
          </Container>
        </section>
      </InnerContent>
      <Footer />
    </>
  )
}

export default Cateringg
