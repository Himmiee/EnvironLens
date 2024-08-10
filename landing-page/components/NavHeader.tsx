import { RxHamburgerMenu } from "react-icons/rx";
import { PiMapPinAreaBold } from "react-icons/pi";
import { IoIosSearch, IoIosArrowRoundDown } from "react-icons/io";
import { IoSettingsOutline, IoGrid } from "react-icons/io5";
import { VscColorMode } from "react-icons/vsc";

export const NavHeader = () => {
  return (
    <nav className="flex bg-teal-400 justify-between px-12">
      <div className="infro-wrap-1 flex items-center text-[14px] gap-2">
        <div className="p-3  bg-white rounded-full">
          <RxHamburgerMenu />
        </div>
        <div className="flex items-center gap-2 bg-white px-5 py-2 rounded-full">
          <p>Go to dashboard</p>
          <IoGrid className="text-teal-700" />
        </div>
      </div>
      <div className="relative text-[14px] ">
        <div className="info-wrap-2 flex items-center justify-between gap-4 p-2 rounded-full shadow-md backdrop-blur-lg bg-white/30 z-0">
          <div className="flex items-center gap-2 bg-white py-2 px-6 rounded-full z-10">
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
            <div className="border-[1px] p-1 rounded-full border-black">
              <IoSettingsOutline />
            </div>
          </div>
        </div>
      </div>

      <div className="info wrap-3 flex items-center gap-3 text-[14px]">
        <div className="flex items-center bg-black py-2 px-4 gap-2 text-white rounded-full">
          color
          <div>
            <VscColorMode />
          </div>
        </div>
        <div className="py-2 bg-white rounded-full px-4">Services</div>
        <div className="flex gap-1 items-center py-2 bg-white rounded-full px-4">
          About
          <div className="border-[1px] border-black rounded-full p-[2px]">
            <IoIosArrowRoundDown />
          </div>
        </div>
      </div>
    </nav>
  );
};
