import React from "react";
import usersGroup from "/images/users-group.png";
import user1 from "/images/user-1.png";

function Testinomial() {
  return (
    <>
      <div className="text-center my-10">
        <p>TESTINOMIAL</p>
        <h3 className="text-3xl md:text-4xl font-bold">What Our Users</h3>
        <h3 className="text-3xl md:text-4xl font-bold">Stay About Us</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-0 md:p-20 lg:p-0">
            <img src={usersGroup} alt="visa-mobile" className="w-full h-auto" />
          </div>
          <div className="pt-5 lg:pt-32 text-left">
            <h4 className="text-xl font-semibold">
              The Best Financial Accounting App Ever!
            </h4>
            <p className="my-5">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis corporis exercitationem quibusdam dolorem optio.
              Aspernatur repellendus, quia quibusdam aperiam eaque excepturi cum
              sit totam similique quae minus quos ex consectetur sunt nobis
              quasi cumque at ea corporis recusandae quas officiis beatae!
              Dolor, ab?"
            </p>
            <div className="mb-5 flex flex-row gap-4 items-center">
              <img src={user1} alt="user-1" className="w-10 h-10" />
              <img src={user1} alt="user-1" className="w-8 h-8" />
              <img src={user1} alt="user-1" className="w-8 h-8" />
              <img src={user1} alt="user-1" className="w-8 h-8" />
              <img src={user1} alt="user-1" className="w-8 h-8" />
            </div>
            <p className="font-semibold text-sm">Nick Jones</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testinomial;
