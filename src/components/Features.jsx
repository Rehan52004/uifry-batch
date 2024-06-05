import React from "react";
import visaMobile from "/images/visa-mobile.png";

//ract isons
import { PiStarFour } from "react-icons/pi";
import grainy from "/grainy.svg";

function Features() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-0 md:p-20 lg:p-0">
          <img src={visaMobile} alt="visa-mobile" className="w-full h-auto" />
        </div>
        <div className="pt-5 lg:pt-24">
          <p>FEATURES</p>
          <h3 className="text-3xl md:text-4xl font-bold">Unifry Premium</h3>
          <div className="mt-5">
            <div className="flex items-center gap-2">
              <PiStarFour size={20} className="text-gulabi" />
              <p className="font-semibold">Budgeting Intervals</p>
            </div>
            <p className="text-zinc-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus nisi deserunt quisquam ut ad minima perspiciatis sit
              facere omnis eum.
            </p>
          </div>
          <div className="mt-5">
            <div className="flex items-center gap-2">
              <PiStarFour size={20} className="text-gulabi" />
              <p className="font-semibold">Budgeting Intervals</p>
            </div>
            <p className="text-zinc-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus nisi deserunt quisquam ut ad minima perspiciatis sit
              facere omnis eum.
            </p>
          </div>
          <div className="mt-5">
            <div className="flex items-center gap-2">
              <PiStarFour size={20} className="text-gulabi" />
              <p className="font-semibold">Budgeting Intervals</p>
            </div>
            <p className="text-zinc-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus nisi deserunt quisquam ut ad minima perspiciatis sit
              facere omnis eum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
