import React, { useRef } from "react";

const Destinations = () => {
  const destinationsRef = useRef(null);

  const scrollLeft = () => {
    destinationsRef.current.scrollLeft -= 300; // Adjust scroll amount as needed
  };

  const scrollRight = () => {
    destinationsRef.current.scrollLeft += 300; // Adjust scroll amount as needed
  };

  return (
    <div>
      <div className="flex flex-row overflow-hidden" ref={destinationsRef}>
        <div
          className="flex bg-cover bg-center bg-no-repeat"
          style={{
            width: "33.33%",
            height: "50vh",
            backgroundImage: `url(${require("../photos/gonder.jpg")})`,
          }}
        >
          <h2 className="text-white text-2xl font-bold">Gonder</h2>
        </div>
        <div
          className="flex bg-cover bg-center bg-no-repeat"
          style={{
            width: "33.33%",
            height: "50vh",
            backgroundImage: `url(${require("../photos/lalibla.jpg")})`,
          }}
        >
          <h2 className="text-white text-2xl font-bold">Lalibela</h2>
        </div>
        <div
          className="flex bg-cover bg-center bg-no-repeat"
          style={{
            width: "33.33%",
            height: "50vh",
            backgroundImage: `url(${require("../photos/background.jpg")})`,
          }}
        >
          <h2 className="text-white text-2xl font-bold">Choose Your Place</h2>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button onClick={scrollLeft}>{'<'}</button>
        <button onClick={scrollRight}>{'>'}</button>
      </div>
    </div>
  );
};

export default Destinations;
