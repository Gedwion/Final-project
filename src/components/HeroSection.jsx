import React from "react";

const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${require("../photos/background.jpg")})`,
        height: "90vh",
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        paddingLeft: "10%",
      }}
    >
      <div className="text-center">
        <h1 className="text-blue-800 text-5xl font-bold ">Explore Your Travel</h1>
        <p className="text-blue-900 text-2xl mt-5">Explore amazing destinations and plan your next trip.</p>
        <div className="flex space-x-10 mt-5">
          <button className="bg-gradient-to-b from-green-600 to-green-500 p-2 px-10 text-white text-sm font-medium rounded-md hover:bg-green-900">
            Contact Us
          </button>
          <button className="bg-gradient-to-b from-blue-600 to-blue-500 p-3 px-10 text-white text-sm font-medium rounded-md hover:bg-blue-700">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;