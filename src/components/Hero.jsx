import React from "react";

//react icons
import { IoPlayCircleOutline } from "react-icons/io5";
import { HiArrowLongRight } from "react-icons/hi2";

import zigZagSlip from "/images/zigzag-slip.png";
import bgRing from "/images/bg-ring.png";
import tiledIphone1 from "/images/tiled-iphone-1.png";
import tiledIphone2 from "/images/tiled-iphone-2.png";
import rightMobilePhones from "/images/right-mobile-phones.PNG?url";

function Hero() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-20">
        <div className="pt-5 md:pt-20">
          <div className="">
            {/* <div className="absolute w-32 h-32 right-52 rounded-full bg-[#FF5555] blur-xl"></div> */}
            <h1 className="text-3xl md:text-5xl font-bold">
              Make The Best Financial Decisions
            </h1>
          </div>
          <p className="my-5">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <div className="flex md:items-center flex-col md:flex-row gap-5 md:gap-10">
            <button className="bg-black text-white md:text-lg rounded-md px-4 md:px-8 py-2 md:py-4 flex gap-3 w-fit">
              Get Started <HiArrowLongRight size={25} />
            </button>
            <div className="flex gap-2">
              <IoPlayCircleOutline size={30} />
              <p className="text-lg">Watch Video</p>
            </div>
          </div>
          <div className="pr-5 lg:pr-20 pt-20">
            <img src={zigZagSlip} alt="Zig Zag Slip" />
          </div>
        </div>
        <div className="p-0 md:p-20 lg:p-0 relative">
          {/* <div className="bg-gulabi -top-72 lg:top-0 relative">
            <img
              src={bgRing}
              alt="Backgrounf Three Ring"
              className="absolute -top-20 -right-20"
            />
            <img
              src={tiledIphone1}
              alt="Tiled Iphone 1"
              className="absolute top-10 left-36"
            />
            <img
              src={tiledIphone1}
              alt="Tiled Iphone 1"
              className="absolute -top-10 left-10"
            />
            <img
              src={tiledIphone1}
              alt="Tiled Iphone 1"
              className="absolute -top-28 -left-20"
            />
          </div> */}

          <img src={rightMobilePhones} alt="" className="w-full h-auto" />
          {/* <div className="absolute w-32 h-32 top-72 left-32 rounded-full bg-[#FF5555] blur-xl"></div> */}
        </div>
      </div>
    </>
  );
}

export default Hero;
