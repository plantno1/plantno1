import React from "react"
import Nav from "../../components/Nav/nav"
import Hero from "../../components/Home/Hero/Hero"
import Catering from "../../components/Home/Catering/Catering"
import Pics from "../../components/Home/Pics/Pics"
import OurStory from "../../components/Home/Our Story/OurStory"
import Footer from "../../components/Footer/footer"

import { Helmet } from "react-helmet"

import "bootstrap/dist/css/bootstrap.min.css"
import "../scss/typography.scss"
import "../scss/general.scss"

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Plant No. 01</title>
        <meta
          name="description"
          content="A vegan food factory serving Niagara-on-the-Lake. Made locally, in house, on our beautiful blue planet, by hard working people."
        />
      </Helmet>
      <Nav />
      <Hero
        title={[
          "Plant No.01 is a vegan food factory located in the Niagara region providing entrees, baked goods and non-dairy cheeses using sustainable practices.",
          <br />,
          <br />,
          "Our mission is to create plant-based versions of traditional dishes using fresh and organic ingredients. We operate as a minimal waste facility using compostable packaging and implementing up-cycling measures.",
          <br />,
          <br />,
          "Made locally, in house, by hard working people.",
          ,
        ]}
        // subtitle="Made locally, in-house, by hard working people."
      />
      {/* <Intro
        imgAlt="Vegan restaraunt in Niagara-on-the-Lake, Niagara Falls and St. Catharines"
        title="Vegan Food Factory"
        description="100% plant based foods without the use of artificial colours, flavours, gmo's, or hydrogenated fats but we love organic and synthetic chemical free fruits and vegetables."
        btnText="View Menu"
        btnLink="/menu"
      /> */}
      {/* <PlantBasedFoods title="All Plant-Based Foods" /> */}
      <Pics />
      {/* <OurStory
        title="Thoughtfully chosen ingredients."
        btnText="Our Story"
        btnLink="/about"
      /> */}
      <Footer />
    </>
  )
}

export default Home
