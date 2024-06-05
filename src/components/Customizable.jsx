import React from "react";
import visaMobile from "/images/visa-mobile.png";

//ract isons
import { PiStarFour } from "react-icons/pi";

function Customizable() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-0 md:p-20 lg:p-0">
          <img src={visaMobile} alt="visa-mobile" className="w-full h-auto" />
        </div>
        <div className="pt-5 lg:pt-32">
          <div className="flex items-center gap-2 mt-7 mb-4">
            <div className="bg-gulabi text-white p-2 rounded-full">
              <PiStarFour size={20} />
            </div>
            <h5 className="text-lg font-semibold">Fully Customizable</h5>
          </div>
          <p className="text-zinc-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
            debitis temporibus quaerat vero impedit nobis officia voluptas
            aperiam, iusto odit quos repellendus recusandae labore deserunt
            nostrum nisi. Beatae ipsum iusto vero sed quod aperiam, non, labore
            voluptatum obcaecati quisquam optio provident odit voluptas eveniet
            repellendus!
          </p>
        </div>
      </div>
    </>
  );
}

export default Customizable;
