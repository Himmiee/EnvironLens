import {
  IoArrowDown,
  IoArrowForward,
} from "react-icons/io5";

export const FooterComponent = () => {
  return (
    <div className="px-6 py-4 pb-20 relative h-full bg-[#f1f1f1]">
      <>
        <p className="font-bold">
          Subscribe <span className="text-teal-800 text-[10px] ">[04]</span>
        </p>
        <div className="flex justify-center text-center flex-col items-center">
          <div className="text-[55px] sm:text-[65px] font-medium ">
            Know{" "}
            <div className="title inline-block w-28 h-9 rounded-full bg-teal-800"></div>{" "}
            more <br className="hidden sm:flex" />
            about
            <span className="bg-white px-4 text-teal-800 ml-3 gap-2 text-[50px] rounded-full inline-flex items-center">
              EnvironLens{" "}
              <IoArrowDown
                size={45}
                className="border-[1px] p-1.5 text-white bg-teal-800 border-teal-800 rounded-full"
              />
            </span>
          </div>
        </div>
      </>
      <div className="flex justify-center mt-24 sm:mt-64 items-center">
        <div className="flex items-center border-b-2 border-teal-700 w-[780px]">
          <label htmlFor="" className="flex-grow">
            <input
              type="text"
              className="outline-none w-full h-12 bg-transparent"
              placeholder="Enter your email"
            />
          </label>
          <div className="flex items-center ml-4 gap-2 my-2">
            <p className="text-teal-700">Subscribe</p>
            <div className="w-14 h-14 flex justify-center items-center rounded-full bg-teal-700 text-white cursor-pointer">
              <IoArrowForward size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
