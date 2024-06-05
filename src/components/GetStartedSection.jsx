import React from "react";
import { FaApple } from "react-icons/fa";
import threeIphone from "/images/three-iphone.png";

function GetStartedSection() {
  return (
    <>
      <div className="h-auto lg:h-[508px] bg-black my-20 py-2 text-white rounded-md">
        <div className="flex justify-between items-center pl-2 md:pl-10">
          <div>
            <h3 className="text-2xl md:text-5xl font-bold mb-5">
              Ready To Get Started?
            </h3>
            <p className="text-sm md:text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              quos.
            </p>
            <button className="bg-white text-black text-sm md:text-lg rounded-md px-4 md:px-8 py-2 md:py-4 mt-5 flex items-center gap-3">
              Download App
              <FaApple size={25} />
            </button>
          </div>
          <div>
            <img src={threeIphone} alt="" className="pb-3 pt-7" />
          </div>
        </div>
      </div>
    </>
  );
}

export default GetStartedSection;
