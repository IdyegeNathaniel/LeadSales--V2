import { useEffect, useState, useRef } from "react";
import bgimage from "/assets/BG.png";

const Hero = ({
  title = "We Are Your Realtors!",
  subtitle = "Buy And Sell Your Properties Here",
}) => {
  const backGround = {
    backgroundImage: `url(${bgimage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className="w-full py-40 mb-4 border-b border-b-orange-400"
      style={backGround}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center mt-10 text-white">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="my-4 text-xl font-bold">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
