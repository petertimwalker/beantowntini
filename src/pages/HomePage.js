import React from "react";
import Hero from "../components/Hero";
import EspressoMartini from "../assets/images/Espresso_Martini.webp";

function HomePage(props) {
  return (
    <div>
      <Hero
        title={props.title}
        subTitle={props.subTitle}
        text={props.text}
      ></Hero>
      <img
        src={EspressoMartini}
        alt="Espresso Martini"
        style={{ width: "200px", height: "200px" }}
      />
    </div>
  );
}

export default HomePage;
