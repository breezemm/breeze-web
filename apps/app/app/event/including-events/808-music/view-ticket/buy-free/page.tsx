"use client";
import BackIcon from "@/app/assets/icons/BackIcon";
import Link from "next/link";
import React, { useState } from "react";
import { Badge, Checkbox, Toggle } from "@breeze/ui";

export default function BuyFree() {
  const handleGoBack = () => {
    window.history.back();
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
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
              aria-label="Toggle"
              className="border flex flex-col border-black-1 w-[357px] h-auto"
            >
              <div className="flex flex-row mt-3">
                <h1 className="font-medium text-lg ">GA</h1>
                <h1 className="font-semibold text-lg ml-60">FREE</h1>
              </div>
              <div>
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
                  <p className="font-normal text-base leading-6 text-bulletgray tracking-wider gap-4 mr-[108px] p-3">
                    Sales ends on{" "}
                    <span className="font-semibold text-base leading-6 tracking-tighter gap-4">
                      Dec 14, 2023
                    </span>
                  </p>
                </div>
              </div>
            </Toggle>
          </section>

          <hr className="border-lightgray  w-[410px] " />
          <div className="flex items-center justify-center mt-2 space-x-2">
            <Checkbox id="terms" onClick={handleCheckboxChange} />
            <p>
              I accept{" "}
              <Link href={"#"}>
                <span className="font-semibold text-base tracking-tighter underline">
                  breeze’s Terms and Conditions.
                </span>
              </Link>
              (Required)
            </p>
          </div>

          <hr className="border-lightgray mt-[30rem] mb-3 lg:mt-[19rem] w-[28rem] " />
          <div className="flex flex-row">
            <h1 className="font-semibold text-lg p-2 pl-5 ">FREE</h1>
            {isChecked ? (
              <Link href={"/event/including-events/808-music/buy-successful"}>
                <Badge className="w-40 h-11 p-3 gap-4 ml-16 lg:ml-24 justify-center">
                  Buy Ticket
                </Badge>
              </Link>
            ) : (
              <Badge className="w-40 h-11 p-3 gap-4 ml-16 justify-center opacity-50 cursor-not-allowed">
                Buy Ticket
              </Badge>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
