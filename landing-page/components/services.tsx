import Image from "next/image";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { buttonsData } from "@/app/helpers";

export const ServiceComponent = () => {
  return (
    <div className="h-full relative bg-teal-700 p-6 sm:rounded-r-lg  py-2">
      <>
        {" "}
        <p className="font-bold text-white">
          Services <span className=" text-[10px] ">[02]</span>
        </p>
        <div className="bg-white flex mx-auto w-80 h-80 sm:h-96 sm:w-96 opacity-90 rounded-full mt-32 relative overflow-hidden">
          <Image
            src="/trees.jpg"
            alt="Description of image"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </>

      <div>
        {buttonsData.map((button, index) => (
          <div
            key={index}
            className={`bg-teal-700 gap-2 absolute border text-lg font-semibold border-white items-center text-white w-fit flex justify-center p-3 rounded-full ${button.position}`}
          >
            <p>{button.text}</p>
            <div>
              <IoArrowDownCircleOutline size={24} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
