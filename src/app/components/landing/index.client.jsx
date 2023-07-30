import React from "react";
import { UniTechLogoWhite } from "../Icons/index.client";

const Landing = () => {
  return (
    <>
      <>
      <div id="landing" className="w-full h-screen bg-black grid md:flex place-content-center md:justify-between px-10 items-center">
        <div data-aos="fade-right" className="text-center">
          <h1 className="text-white md:text-9xl poppin text-4xl font-semibold mb-4">
            UniTech
          </h1>
          <p className="text-white text-lg md:hidden">
            Your tagline or additional text can go here.
          </p>
        </div>
        <div data-aos="fade-left" className="flex justify-center">
          {/* Replace 'UniTechLogoWhite' with the appropriate SVG or image component */}
          <UniTechLogoWhite className={"h-40 md:h-full mt-4"} />
        </div>
      </div>
    </>
      
    </>
  );
};

export default Landing;
