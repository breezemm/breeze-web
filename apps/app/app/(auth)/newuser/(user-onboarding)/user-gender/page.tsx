"use client";

import GenderIcon from "@/app/assets/icons/GenderIcon";
import { userDataStore } from "@/store/User-Data-Store";
import { Button } from "@breeze/ui";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React, { useState } from "react";
import { z } from "zod";

// Define Zod schema for gender validation
const genderSchema = z.enum(["male", "female"]);

export default function usergender() {
  const [isGenderValid, setIsGenderValid] = useState(false);

  const { userGender, updateUserGender } = userDataStore((state) => ({
    userGender: state.userGender,
    updateUserGender: state.updateUserGender,
  }));

  const handleGenderSelection = (gender: string) => {
    if (userGender === gender) {
      updateUserGender(""); // Deselect if the same gender is clicked again
    } else {
      updateUserGender(gender); // Select the clicked gender
    }
    validateGender(gender);
  };

  const validateGender = (value: string) => {
    try {
      genderSchema.parse(value);
      setIsGenderValid(true);
    } catch (error) {
      setIsGenderValid(false);
    }
  };

  const isGenderSelected = userGender !== "";

  return (
    <div className="mx-auto px-4 max-w-md mt-10">
      <Button size="icon" className="bg-neutral-10 rounded-full mb-5" asChild>
        <Link href="/newuser/user-birth">
          <ChevronLeftIcon className="h-4 w-4 text-white font-bold" />
        </Link>
      </Button>
      <div className="flex gap-2 justify-center mb-9">
        <div className="w-12 h-1 bg-neutral-10 rounded-xl"></div>
        <div className="w-12 h-1 bg-neutral-10 rounded-xl"></div>
        <div className="w-12 h-1 bg-neutral-10 rounded-xl"></div>
        <div className="w-12 h-1 bg-neutral-5 rounded-xl"></div>
      </div>
      <h3 className="mb-7 font-bold text-xl flex justify-center">Gender</h3>

      <div className="flex justify-center mb-7">
        <GenderIcon />
      </div>
      <div className="flex justify-center gap-4 mb-16">
        <Button
          name="male"
          className={`bg-neutral-1 border border-neutral-10 text-neutral-10 w-full hover:text-white ${userGender === "male" ? "bg-neutral-10 text-white" : ""}`}
          onClick={() => handleGenderSelection("male")}>
          Male
        </Button>
        <Button
          name="female"
          className={`bg-neutral-1 border border-neutral-10 text-neutral-10 w-full hover:text-white ${userGender === "female" ? "bg-neutral-10 text-white" : ""}`}
          onClick={() => handleGenderSelection("female")}>
          Female
        </Button>
      </div>

      {/* {!isGenderValid && (
        <p className="text-red mt-2">Please select a valid gender</p>
      )} */}
      {!isGenderSelected ? (
        <Button className="w-full mt-72" disabled>
          Next
        </Button>
      ) : (
        <Button className="w-full mt-72" asChild>
          <Link href="/newuser/user-city">Next</Link>
        </Button>
      )}
    </div>
  );
}
