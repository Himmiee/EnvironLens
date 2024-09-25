import { FaCloud } from "react-icons/fa";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { IoIosWarning } from "react-icons/io";
import { TbRadarFilled } from "react-icons/tb";
import { ReactNode } from "react";
import {
  FaSun,
  FaBolt,
  FaExclamationTriangle,
  FaCloudRain,
} from "react-icons/fa";

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

type Props = {
  text: string;
  icon: ReactNode; // Change icon type to ReactNode
  description: string;
};

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

export const arr = [
  { number: "ONE", description: "Description for ONE" },
  // { number: "TWO", description: "Description for TWO" },
  // { number: "THREE", description: "Description for THREE" },
];

export const CardComponent = ({ icon, text, description }: Props) => {
  return (
    <div className="flex flex-col w-2/3 mx-auto">
      <div className="w-16 h-16 bg-teal-700 text-white mx-auto mt-12 rounded-full flex justify-center items-center">
        {" "}
        {icon}
      </div>
      <div className="w-full flex flex-col ">
        {" "}
        <div className="flex items-center gap-2 justify-center">
          <h3 className="lg:text-[43px] sm:text-3xl text-2xl mt-12 mb-4 font-bold  ">
            {text}
          </h3>
        </div>
        <p className="text-gray-600 mt-2 text-wrap text-center text-lg justify-center flex mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
};

export const weatherArray = [
  {
    label: "Sunshine and Rays",
    icon: <FaSun />,
    position: "top-40  lg:left-10 left-0 lg:hidden",
    bgColor: "bg-teal-700",
    textColor: "text-white",
  },
  {
    label: "Lightening sore",
    icon: <FaBolt />,
    position: "top-60 lg:left-10 left-0 lg:hidden",
    bgColor: "bg-teal-700",
    textColor: "text-white",
  },
  {
    label: "Weather and Climate",
    icon: <FaExclamationTriangle />,
    position: "bottom-40 lg:right-10 right-0 lg:hidden",
    bgColor: "bg-white",
    textColor: "text-teal-700",
  },
  {
    label: "Warning",
    icon: <FaCloudRain />,
    position: "bottom-60 lg:right-10 right-0 lg:hidden",
    bgColor: "bg-white",
    textColor: "text-teal-700",
  },
  {
    label: "Sunshine and Rays",
    icon: <FaSun />,
    position: "hidden lg:flex  top-60 right-[400px]",
    bgColor: "bg-teal-700",
    textColor: "text-white",
  },
  {
    label: "Lightening sore",
    icon: <FaBolt />,
    position: "hidden lg:flex  top-50 left-[400px]",
    bgColor: "bg-teal-700",
    textColor: "text-white",
  },
  {
    label: "Lightening sore",
    icon: <FaSun />,
    position: "hidden lg:flex bottom-60 right-[400px]",
    bgColor: "bg-teal-700",
    textColor: "text-white",
  },
  {
    label: "Lightening sore",
    icon: <FaBolt />,
    position: "hidden lg:flex top-[330px] right-[250px]",
    bgColor: "bg-teal-700",
    textColor: "text-white",
  },
  {
    label: "Lightening sore",
    icon: <FaSun />,
    position: "hidden lg:flex  bottom-[330px] right-[250px]",
    bgColor: "bg-teal-700",
    textColor: "text-white",
  },
  {
    label: "Lightening sore",
    icon: <FaBolt />,
    position: "hidden lg:flex  bottom-30 left-[130px]",
    bgColor: "bg-teal-700",
    textColor: "text-white",
  },
  {
    label: "Weather and Climate",
    icon: <FaExclamationTriangle />,
    position: "hidden lg:flex top-60 left-[400px]",
    bgColor: "bg-white",
    textColor: "text-teal-700",
  },

  {
    label: "Warning",
    icon: <FaCloudRain />,
    position: "hidden lg:flex top-50 right-[400px]",
    bgColor: "bg-white",
    textColor: "text-teal-700",
  },
  {
    label: "Warning",
    icon: <FaCloudRain />,
    position: "hidden lg:flex bottom-60 left-[400px]",
    bgColor: "bg-white",
    textColor: "text-teal-700",
  },
  {
    label: "Weather and Climate",
    icon: <FaExclamationTriangle />,
    position: "hidden lg:flex top-[330px] left-[250px]",
    bgColor: "bg-white",
    textColor: "text-teal-700",
  },

  {
    label: "Warning",
    icon: <FaCloudRain />,
    position: "hidden lg:flex bottom-[330px] left-[250px]",
    bgColor: "bg-white",
    textColor: "text-teal-700",
  },
  {
    label: "Warning",
    icon: <FaCloudRain />,
    position: "hidden lg:flex bottom-30 right-[130px]",
    bgColor: "bg-white",
    textColor: "text-teal-700",
  },
];
