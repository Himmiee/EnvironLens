import { RiInstagramFill } from "react-icons/ri";
import { GrFacebookOption } from "react-icons/gr";
import { FaThreads } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaLink } from "react-icons/fa6";

export const SocialComponent = () => {
  return (
    <div className="side hidden  text-teal-800 absolute cursor-pointer right-6 top-1/2  h-6 w-6 sm:flex flex-col items-center gap-1 justify-center">
      <div className="p-2 border-[1px] border-teal-800 rounded-full">
        <IoShareSocial />
      </div>
      <div className="gap-2 flex backdrop-blur-sm p-1 rounded-full flex-col">
        <div className="p-2 border-[1px] border-teal-800 rounded-full">
          <RiInstagramFill />
        </div>
        <div className="p-2 border-[1px] border-teal-800 rounded-full">
          <GrFacebookOption />
        </div>
        <div className="p-2 border-[1px] border-teal-800 rounded-full">
          <FaThreads />
        </div>
      </div>
    </div>
  );
};

export const WriteUp = () => {
  return (
    <aside>
      <div className="sm:p-16 p-12 top-36 m-6 sm:m-0 backdrop-blur-sm text-white rounded-lg absolute sm:left-6 sm:top-1/3 ">
        <div></div>
        <h3 className="text-[50px] sm:text-[60px] font-semibold">
          <span className="text-teal-600"> Precise </span> Weather
          <br />
          Precisely for you.
        </h3>
        <div className="flex items-center gap-4 backdrop-blur-sm  p-2 rounded-full">
          <p>Let's start! </p>
          <div className="border-[1px] cursor-pointer border-white text-teal-800 p-2 bg-white rounded-full">
            <IoIosArrowRoundForward />
          </div>
        </div>
      </div>
      <div className="absolute bg-white rounded-full p-2 px-6 text-teal-800 right-6 bottom-4 text-sm  sm:flex items-center gap-2 cursor-pointer hidden ">
        <p> Copy link</p>
        <div className="">
          <FaLink />
        </div>
      </div>
    </aside>
  );
};
