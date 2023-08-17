import React from "react";
import { UniTechLogoWhite } from "../Icons/index.client";

const Landing = () => {
  return (
    <>
      <>
        <div
          id="landing"
          className="w-full h-screen bg-black grid md:flex place-content-center md:justify-between px-10 items-center"
        >
          <div data-aos="fade-right" className="text-center">
            <h1 className="text-white md:text-[200px] poppin text-4xl font-semibold mb-4">
              UniTech
            </h1>
          </div>
          <div data-aos="fade-left" className="flex justify-center">
            {/* Replace 'UniTechLogoWhite' with the appropriate SVG or image component */}
            <UniTechLogoWhite className={"h-40 md:h-full mt-4"} />
          </div>
          <p className="text-white text-lg md:hidden text-center mt-4">Providing tech for you</p>
        </div>
      </>
    </>
  );
};

export default Landing;
