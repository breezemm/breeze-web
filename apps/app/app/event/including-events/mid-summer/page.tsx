"use client";
import BackIcon from "@/app/assets/icons/BackIcon";
import { cn } from "@/utils";
import { Badge, Button } from "@breeze/ui";
import Image from "next/image";
import MidSummer2 from "@/app/assets/images/midSummer2.svg";
import CalendarIcon from "@/app/assets/icons/CalendarIcon";
import ClockIcon from "@/app/assets/icons/ClockIcon";
import LocationIcon from "@/app/assets/icons/LocationIcon";
import InformationIcon from "@/app/assets/icons/InformationIcon";
import React, { useState } from "react";
import Link from "next/link";

export default function MuralArtEvent() {
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
                  src={MidSummer2}
                  alt="Mural Art Event photo"
                  className="w-[375px] "
                />
                {isEventEnded && (
                  <div className="absolute bottom-48 bg-alertred left-0 w-full h-10 p-2 gap-2 bg-black  text-center">
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
                    May, 28 (Thursday), 2023
                  </li>
                  <li className="flex items-start mb-5">
                    <span className="w-[18px]">
                      <ClockIcon />
                    </span>
                    <span className="mt-1 ml-6" />
                    10 am - 2 pm
                  </li>
                  <li className="flex items-start mb-5">
                    <span className="w-[18px]">
                      <LocationIcon />
                    </span>
                    <span className="mt-1 ml-6" />
                    Myanmar Ahla Gallery
                  </li>
                  <li className="flex items-start mb-5">
                    <span className="w-[18px]">
                      <InformationIcon />
                    </span>
                    <span className="mt-1 ml-6" />
                    <p>
                      This is a brief description about Mural Art Festival. If
                      you want to know more about this festival, you can check
                      that out here by tapping &nbsp;
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
                            this link. The Mural Art Festival is an annual
                            celebration of creativity, culture, and community.
                            Spanning several days, it brings together talented
                            artists from around the world to transform blank
                            walls into vibrant works of art. From stunning
                            portraits to abstract designs, the festival
                            showcases a diverse range of styles and techniques.
                            Visitors can wander through the streets, taking in
                            the colorful murals and experiencing the energy of
                            live art creation. In addition to the main mural
                            installations, the festival often features
                            workshops, performances, and interactive exhibits,
                            making it an immersive experience for art lovers of
                            all ages. Whether you're a seasoned art enthusiast
                            or just looking for something unique to explore, the
                            Mural Art Festival offers a dynamic blend of
                            inspiration and entertainment. Don't miss out on
                            this opportunity to witness the power of art to
                            transform spaces and bring communities together. Tap
                            the link to dive deeper into the world of the Mural
                            Art Festival and discover everything it has to
                            offer!
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
              <Link href={"#"}>
                <Badge className="w-80 h-11 p-3 gap-4 justify-center">
                  My e-ticket
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
            Mural Festival
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
