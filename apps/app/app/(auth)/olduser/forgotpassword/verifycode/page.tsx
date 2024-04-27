"use client";

import { Button, Input } from "@breeze/ui";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { z } from "zod";

// Define Zod schema for verification code validation
const verificationCodeSchema = z
  .string()
  .length(6, "Verification code must be 6 digits");

export default function verifycode() {
  const [verifyCode, setVerifyCode] = useState("");
  const [timer, setTimer] = useState(120); // Initial timer value
  const [isRequestClickable, setIsRequestClickable] = useState(false);

  const handleVerifyCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVerifyCode = e.target.value;
    setVerifyCode(newVerifyCode);
    validateVerifyCode(newVerifyCode);
  };

  const validateVerifyCode = (value: string) => {
    try {
      verificationCodeSchema.parse(value);
    } catch (error) {
      // If validation fails, handle accordingly (e.g., display error message)
      console.error("Verification code validation error");
    }
  };

  const isDisabledButton = verifyCode.length !== 6;

  // Update timer every second
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer <= 0) {
        setTimer(0); // Ensure timer does not go negative
        setIsRequestClickable(true); // Enable request button when timer reaches 0
      } else {
        setTimer((prevTimer) => prevTimer - 1);
      }
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [timer]);

  const handleRequestClick = () => {
    // Handle requesting new verification code from API
    // You can implement the API request logic here
    console.log("Requesting new verification code...");
    // After requesting the code, reset the timer
    setTimer(120);
    setIsRequestClickable(false);
  };

  return (
    <div className="mx-auto px-4 max-w-md mt-10">
      <Button size="icon" className="bg-neutral-10 rounded-full mb-5" asChild>
        <Link href="/olduser/forgotpassword/email">
          <ChevronLeftIcon className="h-4 w-4 text-white font-bold" />
        </Link>
      </Button>
      <h3 className="mb-5 font-bold text-xl">We will send you a code</h3>
      <p className="mb-9">
        A 6-digit verification code has been sent to correct@gmail.com.
        <Link href="/olduser/forgotpassword/email">
          <span className="font-bold"> edit email</span>
        </Link>
      </p>
      <Input
        placeholder="Verification code"
        className="mb-12"
        type="text"
        value={verifyCode}
        onChange={handleVerifyCodeChange}
      />

      <p className="flex justify-center">
        You can request a new code in
        <span className="font-bold ml-1"> {timer}s.</span>
      </p>

      <p className="flex justify-center mb-36">
        {isRequestClickable ? (
          <button onClick={handleRequestClick} className="">
            <u>Request</u>
          </button>
        ) : (
          <u className="opacity-50">Request</u>
        )}
      </p>

      {isDisabledButton ? (
        <Button className="w-full mt-44" disabled>
          <Link href="/olduser/forgotpassword/resetpassword">Done</Link>
        </Button>
      ) : (
        <Button className="w-full mt-44" asChild>
          <Link href="/olduser/forgotpassword/resetpassword">Done</Link>
        </Button>
      )}
    </div>
  );
}
