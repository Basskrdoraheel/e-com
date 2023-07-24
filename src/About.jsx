import React from "react";
import HeroSection from "./Components/HeroSection";
import { useProductContext } from "./Context/ProductContext";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "E-commerce",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />;
    </>
  );
};

export default About;
