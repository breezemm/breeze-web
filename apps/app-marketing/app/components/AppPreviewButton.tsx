import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
export const AppPreviewButton = () => {
  return (
    <div className="flex justify-center pb-7 pt-4">
      <button
        className="flex  px-6 py-2 
  rounded-md shadow-[6px_6px_1px_1px_rgba(0,0,0,0.3)]  bg-primary text-white items-center justify-center gap-2"
      >
        App Preview <FaArrowRightLong />
      </button>
    </div>
  );
};
