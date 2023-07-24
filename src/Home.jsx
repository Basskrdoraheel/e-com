import React from "react";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
import Trusted from "./Components/Trusted";
import Feature from "./Components/Feature";

const Home = () => {
  const data = {
    name: "Rocky Store",
  };
  return (
    <>
      <HeroSection myData={data} />
      <Feature />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
