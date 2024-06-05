import React from "react";
import companyLogo from "/images/company-logo.png";
import { IoReorderTwoOutline } from "react-icons/io5";

function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center py-5">
        {/* desktop navbar menu */}
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <img src={companyLogo} alt="Comapny Logo" />
          </div>
          <nav className="gap-4 hidden md:flex">
            <p className="font-semibold text-gulabi">Home</p>
            <p>About Us</p>
            <p>Pricing</p>
            <p>Features</p>
          </nav>
        </div>
        <div className="">
          <button className="bg-black text-white text-lg rounded-md px-8 py-4 hidden md:block">
            Download
          </button>
          <button className="block md:hidden">
            <IoReorderTwoOutline size={30} />
          </button>
        </div>
      </div>

      {/* mobile view menu */}
      <div className="hidden">
        <nav className="flex flex-col gap-3 text-center">
          <p className="font-semibold text-gulabi">Home</p>
          <p>About Us</p>
          <p>Pricing</p>
          <p>Features</p>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
