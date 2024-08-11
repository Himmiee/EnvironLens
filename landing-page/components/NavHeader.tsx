import { RxHamburgerMenu } from "react-icons/rx";
import { PiMapPinAreaBold } from "react-icons/pi";
import { IoIosSearch, IoIosArrowRoundDown } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { VscColorMode } from "react-icons/vsc";
import { MdKeyboardArrowRight } from "react-icons/md";

export const NavHeader = () => {
  return (
    <nav className="flex text-teal-800 justify-start backdrop-blur-[2px] sm:justify-between p-4 sm:px-6 ">
      <div className="infro-wrap-1 cursor-pointer flex items-center text-sm gap-2">
        <div className="p-3  bg-white rounded-full">
          <RxHamburgerMenu />
        </div>
        <div className="flex items-center sm:hidden lg:flex gap-2 bg-white px-5 py-2 rounded-full">
          <p>Go to dashboard</p>
          <div className="p-[2px] border-[1px] rounded-full border-teal-800">
            {" "}
            <MdKeyboardArrowRight className="" />
          </div>
        </div>
      </div>

      <div className="info-wrap-2 hidden cursor-pointer  sm:flex items-center justify-between text-sm gap-4 p-2 rounded-full shadow-md backdrop-blur-lg bg-white/30 z-0">
        <div className="flex items-center  gap-2 bg-white py-2 px-6 rounded-full z-10">
          <PiMapPinAreaBold />
          <div className="flex  gap-1">
            <p>Lagos, Nigeria</p>
            <p>20°C</p>
          </div>
        </div>
        <div className="bg-white p-3 rounded-full z-10">
          <IoIosSearch />
        </div>
        <div className="flex bg-white py-2 px-3 rounded-full  items-center gap-2 z-10">
          <p>°F</p>
          <div className="border-[1px] p-1 rounded-full border-teal-800">
            <IoSettingsOutline />
          </div>
        </div>
      </div>

      <div className="info-wrap-3  hidden sm:flex items-center gap-3 text-sm">
        <div className="flex cursor-pointer items-center bg-teal-800 py-2 px-4 gap-2 text-white rounded-full">
          Color
          <div>
            <VscColorMode />
          </div>
        </div>
        <div className="py-2 cursor-pointer  bg-white rounded-full px-4">
          Services
        </div>
        <div className="flex gap-2 cursor-pointer  items-center py-2 bg-white rounded-full px-4">
          About
          <div className="border-[1px] border-teal-800 rounded-full p-[2px]">
            <IoIosArrowRoundDown />
          </div>
        </div>
      </div>
    </nav>
  );
};
