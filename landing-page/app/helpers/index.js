import { FaCloud } from "react-icons/fa";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { IoIosWarning } from "react-icons/io";
import { TbRadarFilled } from "react-icons/tb";

export const buttonsData = [
  {
    text: "What is the weather like Today",
    position: "top-12",
  },
  {
    text: "What is the weather like",
    position: "top-32",
  },
  {
    text: "What is the weather",
    position: "top-[13rem]",
  },
  {
    text: "Explore with us here at environlens",
    position: "right-8 bottom-8 ",
  },
  {
    text: "Explore with us here",
    position: "right-8 bottom-28 ",
  },
  {
    text: "Explore with us",
    position: "right-8 bottom-48 ",
  },
];

export const statusTab = [
  {
    text: "Daily Date",
    icon: <FaCloud size={28} />,
    description:
      "Get the latest weather updates for your location every day. Stay informed about temperature, humidity, and wind conditions.",
  },
  {
    text: "Lightening Warnings",
    icon: <BsFillLightningChargeFill size={28} />,
    description:
      "Receive real-time lightning alerts and safety tips to protect yourself during thunderstorms.",
  },
  {
    text: "Weather Tracker",
    icon: <IoIosWarning size={28} />,
    description:
      "Track weather patterns and significant changes over time to stay ahead of any potential hazards.",
  },
  {
    text: "Time Radar",
    icon: <TbRadarFilled size={28} />,
    description:
      "Use radar technology to predict the weather with accuracy, providing insights into upcoming changes by the hour.",
  },
];

export const CardComponent = ({ icon, text, description }) => {
  return (
    <div className="flex flex-col w-2/3 mx-auto">
      <div className="w-16 h-16 bg-teal-700 text-white mx-auto mt-12 rounded-full flex justify-center items-center">
        {" "}
        {icon}
      </div>
      <div className="w-full flex flex-col ">
        {" "}
        <div className="flex items-center gap-2 justify-center">
          <h3 className="lg:text-[43px] sm:text-3xl text-2xl mt-12 mb-4 font-bold  ">{text}</h3>
        </div>
        <p className="text-gray-600 mt-2 text-wrap text-center text-lg justify-center flex mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
};
