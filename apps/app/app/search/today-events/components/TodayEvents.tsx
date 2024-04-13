"use client";
import React from "react";

import SliderEventCards from "./SliderEventCards";
import FilterIcon from "@/app/assets/icons/FilterIcon";
import {
  Button,
  ContextMenuRadioGroup,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@breeze/ui";

const TodayEvents = () => {
  return (
    <div className="w-full max-w-96">
      <div className="relative  border-b pb-2 mb-7  border-neutral-5">
        <h3 className="text-lg  font-semibold text-center ">Today</h3>
        <Dialog>
          <DialogTrigger>
            <FilterIcon className="absolute right-7 top-1 cursor-pointer" />
          </DialogTrigger>
          <DialogContent className="max-w-96">
            <DialogHeader>
              <DialogTitle>Filter by</DialogTitle>

              <div className="flex flex-col gap-6  justify-center py-4">
                <div className="flex gap-3 items-center">
                  <input
                    type="radio"
                    id="mandalay"
                    name="city"
                    value="Mandalay"
                    className="text-black h-6 w-6 border-gray-300 flex gap-3 items-center"
                  />
                  <label htmlFor="mandalay" className="text-black font-medium">
                    Mandalay
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="radio"
                    id="yangon"
                    name="city"
                    value="Yangon"
                    className="text-black h-6 w-6 border-gray-300"
                  />
                  <label htmlFor="yangon" className="text-black font-medium">
                    Yangon
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="radio"
                    id="naypyitaw"
                    name="city"
                    value="Nay Pyi Taw"
                    className="text-black h-6 w-6 border-gray-300"
                  />
                  <label htmlFor="naypyitaw" className="text-black font-medium">
                    Nay Pyi Taw
                  </label>
                </div>
              </div>

              <DialogFooter>
                <Button className="w-full">Ok</Button>
              </DialogFooter>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      <div className="mb-8 mx-7 md:mx-0">
        <h3 className="font-medium text-lg mb-4">🎉 Fun & Food</h3>
        <SliderEventCards />
      </div>

      <div className="mb-8  mx-7 md:mx-0">
        <h3 className="font-medium text-lg mb-4">🎵 Music</h3>
        <SliderEventCards />
      </div>

      <div className="mb-8  mx-7 md:mx-0">
        <h3 className="font-medium text-lg mb-4">🤖 Technology</h3>
        <SliderEventCards />
      </div>
    </div>
  );
};

export default TodayEvents;
