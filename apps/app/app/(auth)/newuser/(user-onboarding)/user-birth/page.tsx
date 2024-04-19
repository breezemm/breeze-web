"use client";

import BirthdayCakeIcon from "@/app/assets/icons/BirthdayCakeIcon";
import { Button, Input } from "@breeze/ui";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React, { useState } from "react";

export default function userbirth() {
  const [birthday, setBirthday] = useState("");

  const handleBirthdayChange = (event: any) => {
    setBirthday(event.target.value);
  };

  const isBirthdayValid = birthday.trim() !== "";

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
      <Input
        placeholder="Birthday"
        type="date"
        name="userbirth"
        className="mb-44 mt-5"
        value={birthday}
        onChange={handleBirthdayChange}
      />
      {!isBirthdayValid ? (
        <Button className="w-full" disabled>
          <Link href="/newuser/user-gender">Next</Link>
        </Button>
      ) : (
        <Button className="w-full" asChild>
          <Link href="/newuser/user-gender">Next</Link>
        </Button>
      )}
    </div>
  );
}
