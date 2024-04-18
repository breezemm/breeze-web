"use client";
import BackIcon from "@/app/assets/icons/BackIcon";
import { cn } from "@/utils";
import { Badge, Button } from "@breeze/ui";
import Image from "next/image";
import Songkran from "@/app/assets/images/songKran.svg";
import Music808 from "@/app/assets/images/808Music.svg";
import CalendarIcon from "@/app/assets/icons/CalendarIcon";
import ClockIcon from "@/app/assets/icons/ClockIcon";
import LocationIcon from "@/app/assets/icons/LocationIcon";
import InformationIcon from "@/app/assets/icons/InformationIcon";
import React, { useState } from "react";
import Link from "next/link";

export default function SongkranEvent() {
  const handleGoBack = () => {
    window.history.back();
  };
  const [activePill, setActivePill] = useState("about");

  const handlePillClick = (pill: React.SetStateAction<string>) => {
    setActivePill(pill);
  };

  const isEventEnded = false;

  const [showAdditionalText, setShowAdditionalText] = useState(false);

  const handleSeeAll = () => {
    setShowAdditionalText(true);
  };

  const handleSeeLess = () => {
    setShowAdditionalText(false);
  };

  const renderContent = () => {
    switch (activePill) {
      case "about":
        return (
          <div>
            <section className="text-darkgray max-w-[375px] flex flex-col items-center mt-2 mb-28 ">
              <div className="relative">
                <Image
                  src={Music808}
                  alt="Mural Art Event photo"
                  className="w-[375px] h-[180px]"
                />
                {isEventEnded && (
                  <div className="absolute  bg-alertred left-0 w-full h-10 p-2 gap-2 bg-black  text-center">
                    <p className="text-white leading-6 text-base tracking-tight font-normal">
                      This event has ended.
                    </p>
                  </div>
                )}
              </div>

              <div className="container mt-5 mb-28">
                <ul className="list-none ">
                  <li className="flex items-start mb-5 ">
                    <span className="w-[18px] ml-1">
                      <CalendarIcon />
                    </span>
                    <span className="mt-1 ml-6" />
                    Nov, 11 (Sunday), 2023
                  </li>
                  <li className="flex items-start mb-5">
                    <span className="w-[18px]">
                      <ClockIcon />
                    </span>
                    <span className="mt-1 ml-6" />5 pm - 11 pm
                  </li>
                  <li className="flex items-start mb-5">
                    <span className="w-[18px]">
                      <LocationIcon />
                    </span>
                    <span className="mt-1 ml-6" />
                    The One Entertainment Park
                  </li>
                  <li className="flex items-start mb-5">
                    <span className="w-[18px]">
                      <InformationIcon />
                    </span>
                    <span className="mt-1 ml-6" />
                    <p>
                      808 Festival 2022, the 8th edition of annual EDM festival
                      in Bangkok, will be held from 9 – 11 December 2022 at
                      BITEC Bangna. &nbsp;
                      {!showAdditionalText && (
                        <span
                          className="cursor-pointer font-semibold text-black-1"
                          onClick={handleSeeAll}
                        >
                          ... See all
                        </span>
                      )}
                      {showAdditionalText && (
                        <>
                          <span>
                            the esteemed venue for the 808 Festival 2022,
                            promises an electrifying atmosphere for EDM
                            enthusiasts. With its top-notch facilities and
                            spacious grounds, attendees can immerse themselves
                            in pulsating beats and vibrant energy. Get ready for
                            an unforgettable fusion of music, lights, and
                            excitement at this iconic location.
                          </span>
                          &nbsp;
                          <span
                            className="cursor-pointer font-semibold text-black-1"
                            onClick={handleSeeLess}
                          >
                            See less
                          </span>
                        </>
                      )}
                    </p>
                  </li>
                </ul>
              </div>
              <hr className="border-lightgray mb-3 w-[375px]" />
              <Link href={"/event/including-events/808-music/view-ticket"}>
                <Badge className="w-80 h-11 p-3 gap-4 justify-center">
                  View Ticket
                </Badge>
              </Link>
            </section>
          </div>
        );
      case "community":
        return (
          <div>
            <section className="text-darkgray flex flex-col items-center mt-16">
              <p>Community Comming Soon! </p>
              <p>Stay Tuned!</p>
              <Button className="w-40 mt-6">Join Community</Button>
            </section>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className=" flex flex-col items-center relative">
      <div className="flex items-center flex-col">
        <div className="flex flex-row justify-between">
          <span className="mr-[70px]">
            <Link href="#" onClick={handleGoBack}>
              <BackIcon />
            </Link>
          </span>
          <h1 className=" self-center mr-[100px] font-bold text-xl mb-6">
            808 Music Festival
          </h1>
        </div>

        <ul className="flex flex-row justify-between w-full h-9 px-0 py-0 ">
          <li className="">
            <button
              className={cn("w-40", "h-9", "gap-2", {
                "text-black-1": activePill === "about",
                "text-darkgray": activePill !== "about",
              })}
              onClick={() => handlePillClick("about")}
            >
              About
            </button>
            <hr
              className={cn("w-auto", "border-2", {
                "border-black-1": activePill === "about",
                "border-white": activePill !== "about",
              })}
            />
          </li>
          <li className="">
            <button
              className={cn("w-40", "h-9", "gap-2", {
                "text-black-1": activePill === "community",
                "text-darkgray": activePill !== "community",
              })}
              onClick={() => handlePillClick("community")}
            >
              Community
            </button>
            <hr
              className={cn("w-auto", "self-center", "border-2", {
                "border-black-1": activePill === "community",
                "border-white": activePill !== "community",
              })}
            />
          </li>
        </ul>
        <hr className="border-lightgray w-auto mt-[3px]" />
        {/* Render content based on active pill */}
        {renderContent()}
      </div>
    </div>
  );
}
