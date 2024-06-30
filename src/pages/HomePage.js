import React from "react";
import Hero from "../components/Hero";

function HomePage(props) {
  return (
    <div>
      <Hero
        title={props.title}
        subTitle={props.subTitle}
        text={props.text}
      ></Hero>
    </div>
  );
}

export default HomePage;
