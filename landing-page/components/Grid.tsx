import { RiInstagramFill } from "react-icons/ri";
import { FaThreads } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";
import { MdAddIcCall } from "react-icons/md";
import { IoInformationCircleOutline } from "react-icons/io5";
import { SiInternetcomputer } from "react-icons/si";
import { FaLink } from "react-icons/fa6";

export const GridComponent = () => {
  return (
    <aside className="pt-24 ">
      <div className="sm:flex  justify-between sm:gap-6 lg:gap-12 h-64 sm:h-96 lg:pt-16">
        <div className="two mb-6 sm:my-0  flex flex-col items-center rounded-3xl h-full  sm:w-[50%] relative">
          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-3xl"></div>{" "}
          <div className="relative z-10 w-48 m-2 p-1 flex justify-center border-white border-[1px] rounded-full px-2 text-white text-[16px]">
            21:h 30:m 56:s
          </div>
          <div className="relative z-10 px-6  pt-20 text-lg lg:text-2xl sm:pt-48 lg:pt-32">
            <p className="text-white z-10">
              Daily morning & evening weather outlooks
            </p>
          </div>
        </div>
        <div className="one mb-6 sm:my-0 sm:hidden lg:flex px-2 gap-4 rounded-3xl sm:w-[70%] flex flex-col  justify-center h-full sm:h-1/2 sm:mt-[170px] relative">
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl"></div>{" "}
          <div className="relative mt-14 w-1/2 items-center gap-2 flex z-10 backdrop-blur-sm py-3 px-1 text-white">
            More info
            <div className="flex gap-3">
              <RiInstagramFill />
              <IoShareSocial />
              <FaThreads />
            </div>
          </div>
        </div>
        <div className="five mb-6 sm:my-0  rounded-3xl sm:w-[60%] h-full sm:h-2/3 relative">
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl"></div>{" "}
          <div className="flex gap-2 absolute right-2 bottom-2">
            {" "}
            <div className="relative z-10 backdrop-blur-sm w-12 h-12  flex justify-center items-center bg-white text-teal-800 font-bold rounded-full">
              <MdAddIcCall size={22} />
            </div>
            <div className="relative z-10 backdrop-blur-sm w-12 h-12 flex justify-center items-center bg-white text-teal-800  rounded-full">
              <IoShareSocial size={22} />
            </div>
          </div>
        </div>
        <div className="four mb-6 sm:my-0  rounded-3xl sm:w-[70%] h-full sm:h-1/2 sm:mt-[120px] relative">
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl"></div>{" "}
          <div className="relative z-10">
            <div className="text-white flex justify-center p-2">
              <IoInformationCircleOutline size={30} />
            </div>
            <div className="backdrop-blur-sm text-[16px] sm:text-sm lg:text-[16px]">
              <p className="text-white text-center mt-12 sm:mt-3 px-6">
                Call or text us here for the next thing to do on this
                informations.
              </p>
              <p className="text-white text-center  px-6">A call Away!</p>
            </div>
          </div>
        </div>
        <div className="three mb-6 sm:my-0  rounded-3xl p-3 sm:w-[60%] lg:w-[50%] h-full relative">
          <div className="absolute inset-0 bg-black bg-opacity-10 rounded-3xl"></div>{" "}
          <div className="bg-white w-8 h-8  items-center rounded-full z-10 relative flex justify-center">
            <SiInternetcomputer size={20} />
          </div>
          <div className="bottom-2 cursor-pointer  px-4 sm:px-3 lg:px-4 right-2 z-10 flex items-center gap-2 justify-center bg-white rounded-full p-1 absolute ">
            <p>copy link here</p>{" "}
            <div>
              <FaLink className="font-bold" />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
