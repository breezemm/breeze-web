"use client";

import { userDataStore } from "@/store/User-Data-Store";
import { Button, Input } from "@breeze/ui";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import { z } from "zod";

// Define Zod schema for verification code validation
const verificationCodeSchema = z
  .string()
  .length(6, "Verification code must be 6 digits");

export default function emailverify() {
  const { newUserEmailVerify, updateUserEmailVerify } = userDataStore(
    (state) => ({
      newUserEmailVerify: state.emailVerify,
      updateUserEmailVerify: state.updateUserEmailVerify,
    })
  );

  const handleEmailVerifyChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    updateUserEmailVerify(event.target.value);
  };

  const isDisabledButton = newUserEmailVerify.length !== 6;
  return (
    <div className="mx-auto px-4 max-w-md mt-10">
      <Button size="icon" className="bg-neutral-10 rounded-full mb-5" asChild>
        <Link href="/newuser">
          <ChevronLeftIcon className="h-4 w-4 text-white font-bold" />
        </Link>
      </Button>
      <h3 className="mb-5 font-bold text-xl">We will sent you a code</h3>
      <p className="mb-9">
        A 6-digit verification code has sent to correct@gmail.com.
        <Link href="/newuser">
          <span className="font-bold"> edit email</span>
        </Link>
      </p>
      <Input
        placeholder="E.g. 123456"
        className="mb-44"
        type="text"
        value={newUserEmailVerify}
        onChange={handleEmailVerifyChange}
      />
      {isDisabledButton ? (
        <Button className="w-full mt-60" disabled>
          <Link href="/newuser/password">Next</Link>
        </Button>
      ) : (
        <Button className="w-full mt-60" asChild>
          <Link href="/newuser/password">Next</Link>
        </Button>
      )}
    </div>
  );
}
