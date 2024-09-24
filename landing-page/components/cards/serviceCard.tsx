"use client";
import { CardComponent, statusTab } from "../../app/helpers/index";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const ServiceCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    if (activeIndex < statusTab.length - 1) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <main className="py-4 relative bg-[#f1f1f1] h-full lg:max-h-full">
      <div className="relative">
        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
          {statusTab.map((item, index) => (
            <button
              key={index}
              className={`py-2 px-4 rounded-full  ${
                activeIndex === index
                  ? "bg-teal-700 text-white"
                  : "bg-[#f1f1f1] border border-teal-700 text-teal-700"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {item.text}
            </button>
          ))}
        </div>

        {/* Display the active tab content with Arrows */}
        <div className="flex items-center justify-center mb-4">
          <button
            onClick={handlePrevious}
            className={`text-teal-700 p-2 ${
              activeIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={activeIndex === 0}
          >
            <IoIosArrowBack size={32} />
          </button>

          <CardComponent
            icon={statusTab[activeIndex].icon}
            text={statusTab[activeIndex].text}
            description={statusTab[activeIndex].description}
          />

          <button
            onClick={handleNext}
            className={`text-teal-700 p-2 ${
              activeIndex === statusTab.length - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            disabled={activeIndex === statusTab.length - 1}
          >
            <IoIosArrowForward size={32} />
          </button>
        </div>
      </div>
      <button className="flex justify-center mx-auto border-black rounded-full border-[1px] px-3 py-2  mt-20 items-center gap-4">
        Explore More With Us
        <div className="border-[1px] cursor-pointer p-2 rounded-full bg-teal-800 text-white">
          <FaArrowRightLong />
        </div>
      </button>
      <div className="flex justify-center absolute bottom-3 gap-2 left-[40%] lg:left-1/2">
        {statusTab.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              activeIndex === index ? "bg-teal-700" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </main>
  );
};
