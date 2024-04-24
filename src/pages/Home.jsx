import React from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Destinations from "../components/Destinations";

const Home = () => {
  return (
    <>
      <NavBar/>
      <HeroSection/>
      <h1 className="text-center text-4xl font-bold mb-7 mt-7">Explore Our Destinations</h1>
      
      <Destinations />
      </> 
  
  );
};

export default Home;
