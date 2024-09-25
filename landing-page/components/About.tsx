import { FaArrowRightLong } from "react-icons/fa6";
import { CiCloudDrizzle } from "react-icons/ci";
import { SocialComponent } from "./Social";
import { GridComponent } from "./Grid";

export const AboutComponent = () => {
  return (
    <div className="px-6 py-4 pb-20 sm:pb-48 relative h-full pt-32  bg-[#f1f1f1]">
      <div className="absolute top-56 right-6">
        <SocialComponent />
      </div>
      <>
        <p className="font-bold">
          About <span className="text-teal-800 text-[10px] ">[01]</span>
        </p>
        <div className="flex justify-center text-center flex-col items-center">
          <h3 className="text-[65px]  font-medium ">
            Don&#39;t
            <span className="bg-white ml-2 px-4 text-teal-800  gap-2 rounded-full inline-flex items-center">
              guess{" "}
              <CiCloudDrizzle
                size={45}
                className="border-[1px]  p-1.5 text-white bg-teal-800  border-teal-800 rounded-full"
              />{" "}
            </span>{" "}
            the <br /> weather!
          </h3>
          <p className="text-md py-6">
            Rely on EnvironLens for year round weather <br />
            forecast for your location <br />{" "}
            <span className="font-bold">across the world.</span>
          </p>
          <button className="flex border-black rounded-full border-[1px] px-3 py-2 items-center gap-4">
            Explore benefits
            <div className="border-[1px] cursor-pointer p-2 rounded-full bg-teal-800 text-white">
              <FaArrowRightLong />
            </div>
          </button>
        </div>
      </>
      <GridComponent />
    </div>
  );
};
