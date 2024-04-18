"use client";
import BackIcon from "@/app/assets/icons/BackIcon";

import SadReaction from "@/app/assets/images/sadReaction.png";
import Link from "next/link";
import React, { useState } from "react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Badge,
  Checkbox,
  Toggle,
} from "@breeze/ui";
import { cn } from "@/utils";
import Image from "next/image";
import CancleIcon from "@/app/assets/icons/CancleIcon";
import CancelWhiteIcon from "@/app/assets/icons/CancelWhiteIcon";
export default function BuyPriceType1() {
  const handleGoBack = () => {
    window.history.back();
  };
  const userMoney = 1000000; // Assuming user has 250,000 units of currency

  const [selectedButtons, setSelectedButtons] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [showInsufficientFundsAlert, setShowInsufficientFundsAlert] =
    useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleButtonClick = (buttonId: number) => {
    if (!selectedButtons.includes(buttonId)) {
      setSelectedButtons([buttonId]);
    } else {
      setSelectedButtons([]);
    }
  };

  const handleBuyTicketClick = () => {
    if (userMoney < 300000) {
      setShowInsufficientFundsAlert(true);
    } else {
      // Proceed to the successful purchase page
      window.location.href = "/event/including-events/808-music/buy-successful";
    }
  };

  const buttons = [
    { id: 1, label: "1", available: false },
    { id: 2, label: "2", available: true },
    { id: 3, label: "3", available: true },
    { id: 4, label: "4", available: false },
    { id: 5, label: "5", available: true },
    { id: 6, label: "6", available: false },
    { id: 7, label: "7", available: false },
    { id: 8, label: "8", available: false },
    { id: 9, label: "9", available: true },
    { id: 10, label: "10", available: true },
    { id: 11, label: "11", available: false },
  ];

  return (
    <div>
      {showInsufficientFundsAlert && (
        <div className="fixed inset-0 flex items-center justify-center bg-black-1 bg-opacity-50 z-50">
          <div className="relative">
            <Alert className="bg-black-1 text-white w-[375px] h-[88px] border-black-1 bg-opacity-90">
              <button
                className="absolute top-0 right-0 m-3"
                onClick={() => setShowInsufficientFundsAlert(false)}
              >
                <CancelWhiteIcon className="w-6 h-6" />
              </button>
              <div className="flex flex-row ">
                <span className="p-2">
                  <Image src={SadReaction} className="w-10 h-10" />
                </span>
                <div className="ml-3">
                  <h1 className="font-semibold text-lg text-white ">
                    Not enough money !
                  </h1>
                  <AlertDescription>Cash-in to buy ticket.</AlertDescription>
                </div>
              </div>
            </Alert>
          </div>
        </div>
      )}
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
                "h-auto mt-6"
              )}
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
          </section>

          <section>
            <div className="bg-softlightgray flex flex-row p-2  mb-4">
              {isChecked && selectedButtons.length === 0 ? (
                <>
                  <p className="pl-12 pr-24">Select your ticket</p>
                  <span className="pr-10 text-alertred"> *select one* </span>
                </>
              ) : (
                <p className="pl-12 pr-56">Select your ticket</p>
              )}
            </div>
          </section>
          <div className="flex justify-center mb-4">
            <div className="grid grid-cols-5 gap-6 max-w-[375px] px-16 py-2 mb-4 mx-auto">
              {buttons.map((button) => (
                <button
                  key={button.id}
                  className={cn(
                    "w-[32px] h-[32px] gap-2 border border-soldoutgray text-black rounded-lg",
                    {
                      "bg-soldoutgray cursor-not-allowed": !button.available,
                      "border-[3px] border-black-1": selectedButtons.includes(
                        button.id
                      ),
                    }
                  )}
                  onClick={() => {
                    if (button.available) handleButtonClick(button.id);
                  }}
                  disabled={!button.available}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>

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

          <hr className="border-lightgray mt-28 mb-3 lg:mt-[] w-[28rem] " />
          <div className="flex flex-row">
            <h1 className="font-semibold text-lg p-2 pl-5 ">300,000</h1>
            {isChecked && selectedButtons.length > 0 ? (
              <Badge
                className="w-40 h-11 p-3 gap-4 ml-16 lg:ml-24 justify-center cursor-pointer"
                onClick={handleBuyTicketClick}
              >
                Buy Ticket
              </Badge>
            ) : (
              <Badge className="w-40 h-11 p-3 gap-4 ml-16 lg:ml-24 justify-center opacity-50 cursor-not-allowed">
                Buy Ticket
              </Badge>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
