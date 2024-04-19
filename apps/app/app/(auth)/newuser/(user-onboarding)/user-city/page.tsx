"use client";

import LocationIcon from "@/app/assets/icons/LocationIcon";
import { Button } from "@breeze/ui";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React, { useState } from "react";

export default function usercity() {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCitySelection = (city: any) => {
    setSelectedCity(city);
  };

  const isCitySelected = selectedCity !== null;

  return (
    <div className="mx-auto px-4 max-w-md mt-10">
      <Button size="icon" className="bg-neutral-10 rounded-full mb-5" asChild>
        <Link href="/newuser/user-gender">
          <ChevronLeftIcon className="h-4 w-4 text-white font-bold" />
        </Link>
      </Button>
      <div className="flex gap-2 justify-center mb-9">
        <div className="w-12 h-1 bg-neutral-10 rounded-xl"></div>
        <div className="w-12 h-1 bg-neutral-10 rounded-xl"></div>
        <div className="w-12 h-1 bg-neutral-10 rounded-xl"></div>
        <div className="w-12 h-1 bg-neutral-10 rounded-xl"></div>
      </div>
      <h3 className="mb-7 font-bold text-xl flex justify-center">City</h3>

      <div className="flex justify-center mb-7">
        <LocationIcon />
      </div>
      <div className="">
        <Button
          name="yangon"
          className={`bg-neutral-1 border border-neutral-10 text-neutral-10 w-full hover:text-white ${selectedCity === "yangon" ? "bg-neutral-10 text-white" : ""}`}
          onClick={() => handleCitySelection("yangon")}>
          Yangon
        </Button>
        <Button
          name="mandalay"
          className={`bg-neutral-1 border border-neutral-10 text-neutral-10 w-full hover:text-white mt-5 ${selectedCity === "mandalay" ? "bg-neutral-10 text-white" : ""}`}
          onClick={() => handleCitySelection("mandalay")}>
          Mandalay
        </Button>
        <Button
          name="naypyitaw"
          className={`bg-neutral-1 border border-neutral-10 text-neutral-10 w-full hover:text-white mt-5 ${selectedCity === "naypyitaw" ? "bg-neutral-10 text-white" : ""}`}
          onClick={() => handleCitySelection("naypyitaw")}>
          Nay Pyi Taw
        </Button>
      </div>
      {!isCitySelected ? (
        <Button className="w-full mt-32" disabled>
          <Link href="/newuser/user-selection-t3">Done</Link>
        </Button>
      ) : (
        <Button className="w-full mt-32" asChild>
          <Link href="/newuser/user-selection-t3">Done</Link>
        </Button>
      )}
    </div>
  );
}
