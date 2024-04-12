"use client";
import BackIcon from "@/app/assets/icons/backicon";
import { Button } from "@breeze/ui";
import Link from "next/link";

import React, { useState } from "react";

export default function MuralArtEvent() {
  const [activePill, setActivePill] = useState("about");

  const handlePillClick = (pill: React.SetStateAction<string>) => {
    setActivePill(pill);
  };
  const renderContent = () => {
    switch (activePill) {
      case "about":
        return (
          <div>
            <section className="text-darkgray flex flex-col items-center mt-16">
              <p>No upcoming events? </p>
              <p>Join now and let the fun begin!</p>

              <Button
                className="w-40 mt-6"
                onClick={() => handlePillClick("launched")}
              >
                Join Event
              </Button>
            </section>
          </div>
        );
      case "community":
        return (
          <div>
            <section className="text-darkgray flex flex-col items-center mt-16">
              <p>Create memories! </p>
              <p>Join an event now and start the adventure!</p>
              <Button
                className="w-40 mt-6"
                onClick={() => handlePillClick("launched")}
              >
                Join Event
              </Button>
            </section>
          </div>
        );
        return (
          <div>
            <section className="text-darkgray flex flex-col items-center mt-16">
              <p>No events saved yet. </p>
              <p>Any plans in mind? Let's fill it up!</p>

              <Link href={"#"}>
                <Button className="w-40 mt-6">Launch Event</Button>
              </Link>
            </section>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className=" flex flex-col items-center relative">
      <div className="flex items-center flex-col mt-5">
        <div className="flex flex-row">
          <BackIcon className="mr-12"></BackIcon>
          <h1 className=" self-center font-bold text-xl mb-6">
            Mural Festival
          </h1>
        </div>

        <ul className="flex flex-row justify-between w-full h-9 px-0 py-0 ">
          <li className="">
            <button
              className={`w-40 h-9 gap-2 ${activePill === "launched" ? "text-black-1" : "text-darkgray"}`}
              onClick={() => handlePillClick("launched")}
            >
              About
            </button>
            <hr
              className={`w-auto border-2 ${activePill === "launched" ? "border-black-1" : "border-white"}`}
            />
          </li>
          <li className="">
            <button
              className={`w-40 h-9 gap-2 ${activePill === "upcoming" ? "text-black-1" : "text-darkgray"}`}
              onClick={() => handlePillClick("upcoming")}
            >
              Community
            </button>
            <hr
              className={`w-auto self-center border-2 ${activePill === "upcoming" ? "border-black-1" : "border-white"}`}
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
