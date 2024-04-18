"use client";
import React, { useState } from "react";
import Congratulation from "@/app/assets/images/congratulation.png";
import DownloadIcon from "@/app/assets/icons/DownloadIcon";
import CancelIcon from "@/app/assets/icons/CancleIcon";
import Image from "next/image";
import Link from "next/link";
import { Badge, cn } from "@breeze/ui";
import SavedIcon from "@/app/assets/icons/SavedIcon";

export default function BuySuccessful() {
  const [isETicketSaved, setIsETicketSaved] = useState(false);

  const handleSaveETicket = () => {
    setIsETicketSaved(true);
  };
  return (
    <div className=" flex flex-col items-center ">
      <Link href={"/"}>
        <button className="ml-56 pl-28 ">
          <CancelIcon className="h-6 w-6 bg-neutral-10" />
        </button>
      </Link>

      <h1 className=" self-center font-bold text-xl mb-4">Congratulations !</h1>
      <p className="font-normal text-base leading-6 tracking-wider gap-4  mt-3 mb-4 ">
        You have bought the ticket.
      </p>
      <span className="p-20">
        <Image src={Congratulation} className="w-[70px] h-[70px] " />
      </span>
      <p className="font-normal text-base leading-6 gap-4 mb-4 ">
        See you at the
      </p>
      <h1 className=" self-center font-semibold text-lg mb-4">
        808 Music Festival
      </h1>
      <Link href={"#"}>
        <div className="flex flex-row space-x-3 pt-44 lg:pt-2">
          {isETicketSaved ? (
            <>
              <SavedIcon className="w-5 h-5" />
              <h1 className="self-center font-semibold text-base text-savedgreen mb-4">
                Your e-ticket is saved
              </h1>
            </>
          ) : (
            <>
              <DownloadIcon
                onClick={handleSaveETicket}
                className="w-5 h-5 cursor-pointer"
              />
              <h1
                onClick={handleSaveETicket}
                className="self-center font-semibold text-base  mb-4 underline cursor-pointer"
              >
                Save my e-ticket
              </h1>
            </>
          )}
        </div>
      </Link>
      <hr className="border-lightgray mb-3 mt-10 lg:mt-10 w-[28rem]" />
      <Link href={"/"}>
        <Badge className={cn("w-80", "h-11", "p-3", "gap-4", "justify-center")}>
          OK
        </Badge>
      </Link>
    </div>
  );
}
