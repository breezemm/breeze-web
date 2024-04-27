"use client";
import BirthdayCakeIcon from "@/app/assets/icons/BirthdayCakeIcon";
import { userDataStore } from "@/store/User-Data-Store";
import { Button, DatePickerDemo, Input } from "@breeze/ui";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React, { useState } from "react";
import { z } from "zod";

// Define Zod schema for birthday validation
const birthdaySchema = z.string().refine(
  (val) => {
    const selectedDate = new Date(val);
    const currentDate = new Date();
    // Check if the selected date is not in the future
    return selectedDate <= currentDate;
  },
  { message: "Please select a date not in the future" }
);

export default function userbirth() {
  const [isBirthdayValid, setIsBirthdayValid] = useState(false);

  const { userBithday, updateUserBirthday } = userDataStore((state) => ({
    userBithday: state.userBirth,
    updateUserBirthday: state.updateUserBirthday,
  }));

  const handleBirthdayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newBirthday = event.target.value;
    updateUserBirthday(newBirthday);
    validateBirthday(newBirthday);
  };

  const validateBirthday = (value: string) => {
    try {
      birthdaySchema.parse(value);
      setIsBirthdayValid(true);
    } catch (error) {
      setIsBirthdayValid(false);
    }
  };

  return (
    <div className="mx-auto px-4 max-w-md mt-10">
      <Button size="icon" className="bg-neutral-10 rounded-full mb-5" asChild>
        <Link href="/newuser/user-name">
          <ChevronLeftIcon className="h-4 w-4 text-white font-bold" />
        </Link>
      </Button>
      <div className="flex gap-2 justify-center mb-9">
        <div className="w-12 h-1 bg-neutral-10 rounded-xl"></div>
        <div className="w-12 h-1 bg-neutral-10 rounded-xl"></div>
        <div className="w-12 h-1 bg-neutral-5 rounded-xl"></div>
        <div className="w-12 h-1 bg-neutral-5 rounded-xl"></div>
      </div>
      <h3 className="mb-7 font-bold text-xl flex justify-center">Birthday</h3>

      <div className="flex justify-center mb-7">
        <BirthdayCakeIcon />
      </div>
      {/* <div className="flex justify-center">
        <DatePickerDemo />
        
      </div> */}

      <Input
        placeholder="Birthday"
        type="date"
        name="userbirth"
        className="mt-5 mb-16"
        value={userBithday}
        onChange={handleBirthdayChange}
      />
      <p>This is user birth date: {userBithday}</p>
      {isBirthdayValid ? (
        <Button className="w-full mt-72" asChild>
          <Link href="/newuser/user-gender">Next</Link>
        </Button>
      ) : (
        <Button className="w-full mt-72" disabled>
          Next
        </Button>
      )}
    </div>
  );
}
