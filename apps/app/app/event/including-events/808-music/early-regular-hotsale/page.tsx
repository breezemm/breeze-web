"use client";
import BackIcon from "@/app/assets/icons/BackIcon";
import RightArrowIcon from "@/app/assets/icons/RightArrowIcon";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Checkbox,
  Toggle,
} from "@breeze/ui";
import { cn } from "@/utils";

export default function EarlyRegularHot() {
  const handleGoBack = () => {
    window.history.back();
  };
  const [badgeTexts, setBadgeTexts] = useState(["", "", ""]);

  const getBadgeColor = (text: string) => {
    if (text === "Available") {
      return "bg-availablegreen";
    } else if (text === "Coming Soon") {
      return "bg-commingorange";
    } else {
      return "bg-soldoutgray";
    }
  };
  const setBadgeTextByIndex = (index: number) => {
    switch (index) {
      case 0:
        return "Available";
      case 1:
        return "Coming Soon";
      case 2:
        return "Sold Out";
      default:
        return ""; // Return empty string for unknown index
    }
  };

  useEffect(() => {
    // Call setBadgeTextByIndex with the desired index to set the badge texts
    setBadgeTexts([
      setBadgeTextByIndex(0),
      setBadgeTextByIndex(1),
      setBadgeTextByIndex(2),
    ]);
  }, []);

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
        </div>
        <Accordion type="single" collapsible className="w-[23rem]">
          <AccordionItem value="item-1">
            <Link
              href={
                badgeTexts[0].includes("Available")
                  ? "/event/including-events/808-music/early-regular-hotsale/early-tickets"
                  : "#"
              }
            >
              <div
                className={cn(
                  "flex",
                  "flex-row",
                  "justify-between",
                  "p-3",
                  "mt-4",
                  "mb-4"
                )}
              >
                <section className="">
                  <h1 className="font-bold text-base">
                    Early Bird{" "}
                    <Badge
                      className={cn(
                        "w-auto",
                        "h-7",
                        "rounded-[50px]",
                        "justify-center ml-3",
                        getBadgeColor(badgeTexts[0])
                      )}
                    >
                      {badgeTexts[0]}
                    </Badge>
                  </h1>
                  <p className="font-normal text-base leading-6 text-bulletgray tracking-wider gap-4 mt-3">
                    Sales ends on{" "}
                    <span className="font-semibold text-base leading-6 tracking-wider gap-4">
                      Dec 14, 2023
                    </span>
                  </p>
                </section>
                <span className="p-4">
                  <RightArrowIcon />
                </span>
              </div>
            </Link>
          </AccordionItem>
          <AccordionItem value="item-1">
            <Link
              href={
                badgeTexts[0].includes("Available")
                  ? "/event/including-events/808-music/early-regular-hotsale/regular-tickets"
                  : "#"
              }
            >
              <div
                className={cn(
                  "flex",
                  "flex-row",
                  "justify-between",
                  "p-3",
                  "mt-4",
                  "mb-4"
                )}
              >
                <section className="">
                  <h1 className="font-bold text-base">
                    Regular{" "}
                    <Badge
                      className={cn(
                        "w-auto",
                        "h-7",
                        "rounded-[50px]",
                        "justify-center ml-3",
                        getBadgeColor(badgeTexts[0])
                      )}
                    >
                      {badgeTexts[0]}
                    </Badge>
                  </h1>
                  <p className="font-normal text-base leading-6 text-bulletgray tracking-wider gap-4 mt-3">
                    Sales ends on{" "}
                    <span className="font-semibold text-base leading-6 tracking-wider gap-4">
                      Dec 14, 2023
                    </span>
                  </p>
                </section>
                <span className="p-4">
                  <RightArrowIcon />
                </span>
              </div>
            </Link>
          </AccordionItem>
          <AccordionItem value="item-1">
            <Link
              href={
                badgeTexts[2].includes("Available")
                  ? "/event/including-events/808-music/early-regular-hotsale/early-tickets"
                  : "#"
              }
            >
              <div
                className={cn(
                  "flex",
                  "flex-row",
                  "justify-between",
                  "p-3",
                  "mt-4",
                  "mb-4"
                )}
              >
                <section className="">
                  <h1 className="font-bold text-base">
                    Hot Sale{" "}
                    <Badge
                      className={cn(
                        "w-auto",
                        "h-7",
                        "rounded-[50px]",
                        "justify-center ml-3",
                        getBadgeColor(badgeTexts[1])
                      )}
                    >
                      {badgeTexts[1]}
                    </Badge>
                  </h1>
                  <p className="font-normal text-base leading-6 text-bulletgray tracking-wider gap-4 mt-3">
                    Sales ends on{" "}
                    <span className="font-semibold text-base leading-6 tracking-wider gap-4">
                      Dec 14, 2023
                    </span>
                  </p>
                </section>
                <span className="p-4">
                  <RightArrowIcon />
                </span>
              </div>
            </Link>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
