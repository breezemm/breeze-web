"use client";

import LocationIcon from "@/app/assets/icons/LocationIcon";
import { userDataStore } from "@/store/User-Data-Store";
import { Button } from "@breeze/ui";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React, { useState } from "react";
import { z } from "zod";

// Define Zod schema for city validation
const citySchema = z.enum(["yangon", "mandalay", "naypyitaw"]);

export default function usercity() {
  const [isCityValid, setIsCityValid] = useState(false);

  const { usercity, updateUserCity } = userDataStore((state) => ({
    usercity: state.userCity,
    updateUserCity: state.updateUserCity,
  }));

  const handleCitySelection = (city: string) => {
    if (usercity === city) {
      updateUserCity("");
    } else {
      updateUserCity(city);
    }
    setIsCityValid(true);
  };

  const validateCity = (city: string) => {
    try {
      citySchema.parse(city);
      return true;
    } catch (error) {
      return false;
    }
  };

  const isCitySelected = usercity !== "";

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
          className={`bg-neutral-1 border border-neutral-10 text-neutral-10 w-full hover:text-white ${
            usercity === "yangon" ? "bg-neutral-10 text-white" : ""
          }`}
          onClick={() => handleCitySelection("yangon")}>
          Yangon
        </Button>
        <Button
          name="mandalay"
          className={`bg-neutral-1 border border-neutral-10 text-neutral-10 w-full hover:text-white mt-5 ${
            usercity === "mandalay" ? "bg-neutral-10 text-white" : ""
          }`}
          onClick={() => handleCitySelection("mandalay")}>
          Mandalay
        </Button>
        <Button
          name="naypyitaw"
          className={`bg-neutral-1 border border-neutral-10 text-neutral-10 w-full hover:text-white mt-5 ${
            usercity === "naypyitaw" ? "bg-neutral-10 text-white" : ""
          }`}
          onClick={() => handleCitySelection("naypyitaw")}>
          Nay Pyi Taw
        </Button>
      </div>
      {!isCitySelected ? (
        <Button className="w-full mt-64" disabled>
          Done
        </Button>
      ) : (
        <Button className="w-full mt-64" asChild>
          <Link href="/newuser/user-selection-t3">Done</Link>
        </Button>
      )}
    </div>
  );
}
