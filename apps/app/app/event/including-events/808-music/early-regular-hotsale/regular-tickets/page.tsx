"use client";
import BackIcon from "@/app/assets/icons/BackIcon";
import Link from "next/link";
import React, { useState } from "react";
import { Badge, Toggle } from "@breeze/ui";
import { cn } from "@/utils";

export default function RegularTickets() {
  const handleGoBack = () => {
    window.history.back();
  };

  const [selectedToggle, setSelectedToggle] = useState(null);

  const handleToggleChange = (toggle: string | React.SetStateAction<null>) => {
    setSelectedToggle(toggle);
  };

  return (
    <div>
      <div className="  flex flex-col items-center relative">
        <div className="flex items-center flex-col">
          <div className="flex flex-row justify-between">
            <span className="mr-[70px]">
              <Link href="#" onClick={handleGoBack}>
                <BackIcon />
              </Link>
            </span>
            <h1 className=" self-center mr-[100px] font-bold text-xl mb-4">
              808 Music Festival
            </h1>
          </div>
          <hr className="border-lightgray w-[430px] mt-[2px]" />
          <section className="mr-32 mt-4">
            <h1 className="font-bold text-base">
              Regular{" "}
              <Badge
                className={cn(
                  "w-auto",
                  "h-7",
                  "rounded-[50px]",
                  "justify-center ml-3",
                  "bg-availablegreen",
                )}
              >
                Available
              </Badge>
            </h1>
            <p className="font-normal text-base leading-6 text-bulletgray tracking-wider gap-4 mt-3">
              Sales ends on{" "}
              <span className="font-semibold text-base leading-6 tracking-wider gap-4">
                Dec 14, 2023
              </span>
            </p>
          </section>
          <section className="flex flex-col">
            <Toggle
              className={cn(
                "border",
                "flex",
                "flex-col",
                "border-black-1",
                "w-[357px]",
                "h-auto mt-6",
                {
                  "border-[3px] shadow-lg": selectedToggle === "GA",
                },
              )}
              onClick={() => handleToggleChange("GA")}
            >
              <div className="flex flex-row mt-3">
                <h1 className="font-medium text-lg ">GA</h1>
                <h1 className="font-semibold text-lg ml-52">30,000</h1>
              </div>
              <div className="flex items-start">
                <p className="font-normal text-base leading-6 text-bulletgray tracking-wider gap-4 mr-[108px] mt-3 mb-4 ">
                  Sales ends on{" "}
                  <span className="font-semibold text-base leading-6 tracking-tighter gap-4">
                    Dec 14, 2023
                  </span>
                </p>
              </div>
            </Toggle>

            <Toggle
              className={cn(
                "border",
                "flex",
                "flex-col",
                "border-black-1",
                "w-[357px]",
                "h-auto mt-6",
                {
                  "border-[3px] shadow-lg": selectedToggle === "VIP",
                },
              )}
              onClick={() => handleToggleChange("VIP")}
            >
              <div className="flex flex-row mt-3">
                <h1 className="font-medium text-lg ">VIP</h1>
                <h1 className="font-semibold text-lg ml-48">300,000</h1>
              </div>
              <div className="mr-48 mt-3">
                <ul className="list-disc list-inside text-bulletgray">
                  <li className="font-normal text-base leading-6 tracking-wider whitespace-nowrap mr-4">
                    6 Pax
                  </li>
                  <li className="font-normal text-base leading-6 tracking-wider whitespace-nowrap">
                    6 Beers
                  </li>
                  <li className="font-normal text-base leading-6 tracking-wider whitespace-nowrap ml-14">
                    2 Water Bottle
                  </li>
                </ul>
              </div>
              <p className="font-normal text-base leading-6 text-bulletgray whitespace-nowrap tracking-wider gap-4 mr-[108px] mt-3 mb-4 ">
                Sales ends on{" "}
                <span className="font-semibold text-base leading-6 tracking-tighter gap-4">
                  Dec 14, 2023
                </span>
              </p>
            </Toggle>

            <Toggle
              className={cn(
                "border",
                "flex",
                "flex-col",
                "border-black-1",
                "w-[357px]",
                "h-auto mt-6",
                {
                  "border-[3px] shadow-lg": selectedToggle === "VVIP",
                },
              )}
              onClick={() => handleToggleChange("VVIP")}
            >
              <div className="flex flex-row mt-3">
                <h1 className="font-medium text-lg ">VVIP</h1>
                <h1 className="font-semibold text-lg ml-44">400,000</h1>
              </div>
              <div className="mr-48 mt-3">
                <ul className="list-disc list-inside text-bulletgray">
                  <li className="font-normal text-base leading-6 tracking-wider whitespace-nowrap mr-4">
                    7 Pax
                  </li>
                  <li className="font-normal text-base leading-6 tracking-wider whitespace-nowrap">
                    7 Beers
                  </li>
                  <li className="font-normal text-base leading-6 tracking-wider whitespace-nowrap ml-[24.5px]">
                    1 Potatoes
                  </li>
                  <li className="font-normal text-base leading-6 tracking-wider whitespace-nowrap ml-1">
                    2 Cokes
                  </li>
                  <li className="font-normal text-base leading-6 tracking-wider whitespace-nowrap ml-14">
                    2 Water Bottle
                  </li>
                </ul>
              </div>
              <p className="font-normal text-base leading-6 text-bulletgray tracking-wider gap-4 mr-[108px] mt-3 mb-4 ">
                Sales ends on{" "}
                <span className="font-semibold text-base leading-6 tracking-tighter gap-4">
                  Dec 14, 2023
                </span>
              </p>
            </Toggle>
          </section>
          <hr className="border-lightgray mb-3 mt-10 lg:mt-10 w-[28rem]" />
          <Link
            href={
              selectedToggle
                ? "/event/including-events/808-music/early-regular-hotsale/regular-tickets/buy-price"
                : "#"
            }
          >
            <Badge
              className={cn(
                "w-80",
                "h-11",
                "p-3",
                "gap-4",
                "justify-center",

                {
                  "cursor-not-allowed": !selectedToggle, // Disable badge if no toggle selected
                  "opacity-50": !selectedToggle,
                  "pointer-events-none": !selectedToggle,
                },
              )}
            >
              Next
            </Badge>
          </Link>
        </div>
      </div>
    </div>
  );
}
