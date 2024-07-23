import React, { useRef, useState } from "react";
import data from "../common/Helper";
import { AccArrow, AccTopArrow, AccBottomArrow } from "./Icons";

const AccordionItem = ({ heading, question, answer, isOpen, onClick }) => {
  const contentHeight = useRef();
  return (
    <div
      data-aos="flip-up"
      className="overflow-hidden mb-6 border-[1px] border-[#2B2B2D] bg-accordian-grident backdrop-opacity-10 rounded-[13px]"
    >
      <button
        className={`w-full text-left sm:py-6 py-3 px-5 flex items-center justify-between cursor-pointer ${
          isOpen ? "active" : ""
        }`}
        onClick={onClick}
      >
        <div className="flex gap-2 items-baseline ">
          <p className="font-mont font-normal sm:text-[18px] text-[16px] leading-[21.94px] text-white">
            {question}
          </p>
          <p className="font-poppins font-normal text-[18px] leading-[27px] text-white">
            {heading}
          </p>
        </div>
        <span>{isOpen ? <AccTopArrow /> : <AccBottomArrow />}</span>
      </button>
      <div
        ref={contentHeight}
        className="transition-all duration-300 ease-linear"
        style={
          isOpen
            ? { height: contentHeight.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="flex gap-3 items-center pb-4 px-[19px]">
          <AccArrow />
          <p className="answer-content font-poppins font-normal text-[18px] leading-[27px] text-[#B7B7B8] text-left">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          heading={item.heading}
          answer={item.answer}
          question={item.question}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
