"use client";
import React, { useState } from "react";
import { Badge, Button } from "@breeze/ui";
import Link from "next/link";

export default function Event() {
  const [activePill, setActivePill] = useState("launched");

  const handlePillClick = (pill: React.SetStateAction<string>) => {
    setActivePill(pill);
  };

  const renderContent = () => {
    switch (activePill) {
      case "launched":
        return (
          <div>
            <section className="text-darkgray flex flex-col items-center mt-16">
              <p>‘ Zero ’ events launched.</p>
              <p>Launch your event right away!</p>
              <Link href={"#"}>
                <Button className="w-40 mt-6">Launch Event</Button>
              </Link>
            </section>
          </div>
        );

      case "upcoming":
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
      case "joined":
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
      case "saved":
        return (
          <div>
            <section className="text-darkgray flex flex-col items-center mt-16">
              <p>No events saved yet. </p>
              <p>Any plans in mind? Let's fill it up!</p>

              <Link href={"#"}>
                <Button className="w-40 mt-6">Search Event</Button>
              </Link>
            </section>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <>
      <div className="flex flex-col items-center relative">
        <h1 className="mr-52 font-bold text-xl mb-6">My Wallet</h1>
        <Link href={"#"}>
          <Badge
            variant="outline"
            className="w-80 h-14 rounded-lg border border-black-1 py-4 text-base leading-6 tracking-tighter justify-between"
          >
            0.00
            <span className="inline-block text-2xl">&#x2192;</span>
          </Badge>
        </Link>

        <div className="flex flex-row justify-between space-x-32 mt-11 ">
          <h1 className="font-bold text-xl">My Event</h1>
          <Link href={"#"}>
            <Badge className="inline-block w-auto h-7 px-2 py-1 gap-x-4 rounded-lg ">
              Launch Event
            </Badge>
          </Link>
        </div>

        <div className="flex flex-col mt-5">
          <ul className="flex w-full overflow h-9 px-0 py-0 pl-6 justify-between">
            <li className="mr-2">
              <button
                className={`py-2 px-4 gap-2 ${activePill === "launched" ? "text-black-1" : "text-darkgray"}`}
                onClick={() => handlePillClick("launched")}
              >
                Launched
              </button>
              <hr
                className={`w-auto border-2 ${activePill === "launched" ? "border-black-1" : "border-white"}`}
              />
            </li>
            <li className="mr-2">
              <button
                className={`py-2 px-4 gap-2 ${activePill === "upcoming" ? "text-black-1" : "text-darkgray"}`}
                onClick={() => handlePillClick("upcoming")}
              >
                Upcoming
              </button>
              <hr
                className={`w-auto border-2 ${activePill === "upcoming" ? "border-black-1" : "border-white"}`}
              />
            </li>
            <li>
              <button
                className={`py-2 px-4 gap-2 ${activePill === "joined" ? "text-black-1" : "text-darkgray"}`}
                onClick={() => handlePillClick("joined")}
              >
                Joined
              </button>
              <hr
                className={`w-auto border-2 ${activePill === "joined" ? "border-black-1" : "border-white"}`}
              />
            </li>
            <li>
              <button
                className={`py-2 px-4 gap-2 ${activePill === "saved" ? "text-black-1" : "text-darkgray"}`}
                onClick={() => handlePillClick("saved")}
              >
                Saved
              </button>
              <hr
                className={`w-auto border-2 ${activePill === "saved" ? "border-black-1" : "border-white"}`}
              />
            </li>
          </ul>
          <hr className="border-lightgray w-auto mt-2" />
          {/* Render content based on active pill */}
          {renderContent()}
        </div>
      </div>
    </>
  );
}
