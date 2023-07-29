import React from "react";
import { UniTechLogoWhite } from "../Icons/index.client";

const Landng = () => {
  return (
    <div className="w-full h-screen bg-black grid items-center">
      <div className="flex w-full  justify-between items-center">
        <div data-aos="fade-right" className="w-full text-center">
          <h1
            className="text-white  text-9xl  poppin"
          >
            UniTech
          </h1>
          <p className="text-white "></p>
        </div>
        <div data-aos="fade-left" className="w-full">
          <UniTechLogoWhite />
        </div>
      </div>
    </div>
  );
};

export default Landng;
