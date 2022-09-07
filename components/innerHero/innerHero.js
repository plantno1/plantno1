import React from "react"
import InnerHeroTitle from "./innerHeroTitle/innerHeroTitle"
import "../innerHero/inner-hero.scss"

const InnerHero = ({ bgImage, title, subTitle }) => {
  return (
    <>
      <section
        className="inner-hero"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <InnerHeroTitle title={title} subTitle={subTitle} />
      </section>
    </>
  )
}

export default InnerHero
