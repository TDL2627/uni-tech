import React from "react";
import { UniTechLogoWhite } from "../Icons/index.client";

const Landng = () => {
  return (
    <>
      <div className="w-full h-[92vh] hidden bg-black md:grid items-center">
        <div className="flex w-full  justify-between items-center">
          <div data-aos="fade-right" className="w-full text-center">
            <h1 className="text-white  text-9xl  poppin">UniTech</h1>
            <p className="text-white "></p>
          </div>
          <div data-aos="fade-left" className="w-full">
            <UniTechLogoWhite />
          </div>
        </div>
      </div>
      <div className="w-full h-[92vh] bg-black grid md:hidden place-content-center ">
        <div data-aos="fade-right" className="text-center h-max">
          <h1 className="text-white text-4xl font-semibold mb-4">UniTech</h1>
          <p className="text-white text-lg">
            Your tagline or additional text can go here.
          </p>
        </div>
        <div data-aos="fade-left" className="flex justify-center ">
          {/* Replace 'UniTechLogoWhite' with the appropriate SVG or image component */}
          <UniTechLogoWhite className={" h-40  mt-4"} />
        </div>
      </div>
      
    </>
  );
};

export default Landng;
