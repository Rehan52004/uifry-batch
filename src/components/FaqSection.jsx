import React from "react";
import FaqsCard from "./FaqsCard";

function FaqSection() {
  return (
    <>
      <div>
        <p className="text-gulabi">FAQ</p>
        <h3 className="text-3xl md:text-4xl font-bold">Frequently Asked</h3>
        <h3 className="text-3xl md:text-4xl font-bold mb-7">Questions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {faqsData.map((faq) => (
            <FaqsCard
              title={faq.title}
              description={faq.description}
              textColor={faq.textColor}
              bgColor={faq.bgColor}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default FaqSection;

const faqsData = [
  {
    title: "The Best Financial Accounting App Ever!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem alias quae quaerat sit porro accusamus eligendi ut harum",
    textColor: "text-white",
    bgColor: "bg-gulabi",
  },
  {
    title: "The Best Financial Accounting App Ever!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem alias quae quaerat sit porro accusamus eligendi ut harum",
    textColor: "text-black",
    bgColor: "bg-white",
  },
  {
    title: "The Best Financial Accounting App Ever!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem alias quae quaerat sit porro accusamus eligendi ut harum",
    textColor: "text-black",
    bgColor: "bg-white",
  },
  {
    title: "The Best Financial Accounting App Ever!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem alias quae quaerat sit porro accusamus eligendi ut harum",
    textColor: "text-white",
    bgColor: "bg-gulabi",
  },

  {
    title: "The Best Financial Accounting App Ever!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem alias quae quaerat sit porro accusamus eligendi ut harum",
    textColor: "text-white",
    bgColor: "bg-gulabi",
  },
  {
    title: "The Best Financial Accounting App Ever!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem alias quae quaerat sit porro accusamus eligendi ut harum",
    textColor: "text-black",
    bgColor: "bg-white",
  },
];
