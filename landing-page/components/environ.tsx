import { SocialComponent } from "./Social";
import { IoArrowDown } from "react-icons/io5";
import { arr, weatherArray } from "@/app/helpers";
import Image from "next/image";
import { FaCloud } from "react-icons/fa6";

export const EnvironComponent = () => {
  return (
    <div className="px-6 py-4 relative h-full pt-32 bg-[#f1f1f1]">
      <div className="absolute top-56 right-6">
        <SocialComponent />
      </div>
      <>
        <p className="font-bold">
          Environ <span className="text-teal-800 text-[10px] ">[03]</span>
        </p>
        <div className="flex justify-center text-center flex-col items-center">
          <h3 className="text-[65px] font-medium ">
            Weather forecast in <br /> your
            <span className="bg-white px-4 text-teal-800 ml-2 gap-2 rounded-full inline-flex items-center">
              pocket{" "}
              <IoArrowDown
                size={45}
                className="border-[1px] p-1.5 text-white bg-teal-800 border-teal-800 rounded-full"
              />
            </span>
          </h3>
        </div>
        <div>
          {" "}
          <div className="relative flex justify-center items-center h-screen">
            {/* Main Image in the Center */}
            <div className="flex justify-center my-32 w-full gap-4 lg:gap-12">
              {arr.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="relative w-4/5 sm:w-2/3 lg:w-1/4 h-full"
                  >
                    {/* Upper Semi-Circle */}
                    <div className="w-full title h-[150px] bg-teal-700  rounded-t-xl sm:rounded-t-[30px] border border-teal-700 flex justify-center items-center">
                      <span className="text-white text-5xl">{item.number}</span>
                    </div>
                    {/* Lower Semi-Circle */}
                    <div className="w-full h-[400px] bg-teal-800 rounded-b-xl sm:rounded-b-[30px] flex justify-center items-center">
                      <p className="text-center text-white">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {weatherArray.map((item, idx) => (
              <div
                key={idx}
                className={`absolute ${item.position} ${item.bgColor} ${item.textColor} max-w-fit p-3  flex items-center rounded-full gap-3 text-3xl px-6 lg:p-3 font-semibold`}
              >
                {/* <p className="hidden sm:flex">{item.label}</p> */}
                {item.icon}
              </div>
            ))}
          </div>
        </div>
      </>
    </div>
  );
};
