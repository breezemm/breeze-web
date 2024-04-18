"use client";
import BackIcon from "@/app/assets/icons/BackIcon";
import Link from "next/link";
import React, { useState } from "react";
import { Badge, Toggle } from "@breeze/ui";
import { cn } from "@/utils";

export default function ViewTicket() {
  const handleGoBack = () => {
    window.history.back();
  };

  const [isToggleSelected, setIsToggleSelected] = useState(false);

  const handleToggleChange = () => {
    console.log("Toggle clicked");
    setIsToggleSelected(!isToggleSelected);
  };

  return (
    <div>
      <div className=" flex flex-col items-center relative">
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
          <section className="flex flex-col mt-5 mb-10">
            <Toggle
              className={cn(
                "border",
                "flex",
                "flex-col",
                "border-black-1",
                "w-[357px]",
                "h-auto",
                {
                  "border-2 shadow-lg": isToggleSelected,
                }
              )}
              onClick={handleToggleChange}
            >
              <div className="flex flex-row mt-3">
                <h1 className="font-medium text-lg ">GA</h1>
                <h1 className="font-semibold text-lg ml-60">FREE</h1>
              </div>
              <div className="flex items-start">
                <div>
                  {/*
                  <ul className="pr-40 list-disc text-bulletgray">
                    <li className="font-normal text-base leading-6 tracking-tighter">
                      1
                    </li>
                    <li className="font-normal text-base leading-6 tracking-tighter">
                      2
                    </li>
                    <li className="font-normal text-base leading-6 tracking-tighter">
                      3
                    </li>
                    <li className="font-normal text-base leading-6 tracking-tighter">
                      4
                    </li>
                    <li className="font-normal text-base leading-6 tracking-tighter">
                      5
                    </li>
                  </ul>
  */}
                </div>

                <p className="font-normal text-base leading-6 text-bulletgray tracking-wider gap-4 mr-[108px] mt-3 mb-4 ">
                  Sales ends on{" "}
                  <span className="font-semibold text-base leading-6 tracking-tighter gap-4">
                    Dec 14, 2023
                  </span>
                </p>
              </div>
            </Toggle>
          </section>
          <hr className="border-lightgray mb-3 mt-[31rem] lg:mt-[21rem] w-[375px]" />
          <Link
            href={
              isToggleSelected
                ? "/event/including-events/808-music/view-ticket/buy-free"
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
                  "cursor-not-allowed": !isToggleSelected, // Disable badge if not selected
                  "opacity-50": !isToggleSelected,
                  "pointer-events-none": !isToggleSelected,
                }
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
