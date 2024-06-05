import React from "react";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import companyLogo from "/images/company-logo.png";

function Footer() {
  return (
    <>
      <div className="grid grid-cols-6 sm:grid-cols-12 gap-5 sm:gap-3 my-16 font-[500] text-center sm:text-left">
        <div className="col-span-6 lg:col-span-3">
          <img
            src={companyLogo}
            alt="Company Logo"
            className="mx-auto sm:mx-0"
          />
          <div className="flex items-center justify-center sm:justify-start gap-2 my-3">
            <MdEmail size={20} className="text-gulabi" />
            <p>help@frybix.com</p>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <IoCallSharp size={20} className="text-gulabi" />
            <p>+1234 456 678 89</p>
          </div>
        </div>
        <div className="col-span-6 lg:col-span-2">
          <h3 className="text-2xl">Links</h3>
          {links.map((link) => (
            <p className="my-2">{link}</p>
          ))}
        </div>
        <div className="col-span-6 lg:col-span-2">
          <h3 className="text-2xl">Legal</h3>
          {legals.map((legal) => (
            <p className="my-2">{legal}</p>
          ))}
        </div>
        <div className="col-span-6 lg:col-span-2">
          <h3 className="text-2xl">Products</h3>
          {products.map((product) => (
            <p className="my-2">{product}</p>
          ))}
        </div>
        <div className="col-span-6 lg:col-span-3">
          <h3 className="text-2xl">Products</h3>
          <p>Stay Up To Date</p>
          <div className="flex justify-center sm:justify-start mt-5">
            <input
              type="text"
              placeholder="Your Email"
              className="border-none outline-none w-[120px] bg-white rounded-md"
            />
            <button className="bg-black text-white px-8 py-4 rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage:
            "linear-gradient(to right, #e9e7e8, #cac7c9, #aca8aa, #8e8b8c, #726e70, #726e70, #726e70, #726e70, #8e8b8c, #aca8aa, #cac7c9, #e9e7e8)",
        }}
        className="h-[1px] w-full"
      ></div>
      <p className="text-center my-10">
        Copyright 2022 Uifry.com All Rights Reserved
      </p>
    </>
  );
}

export default Footer;

const links = ["Home", "About Us", "Booking", "Blog"];
const legals = ["Terms Of Use", "Privacy Policy", "Cooking Policy"];
const products = ["Take Tour", "Live Chat", "Reviews"];
