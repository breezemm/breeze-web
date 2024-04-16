"use client";

import { Button, Input } from "@breeze/ui";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

export default function verifycode() {
  return (
    <div className="mx-auto px-4 max-w-md mt-10">
      <Button size="icon" className="bg-neutral-10 rounded-full mb-5" asChild>
        <Link href="/olduser/forgotpassword/email">
          <ChevronLeftIcon className="h-4 w-4 text-white font-bold" />
        </Link>
      </Button>
      <h3 className="mb-5 font-bold text-xl">We will sent you a code</h3>
      <p className="mb-9">
        A 6-digit verification code has sent to correct@gmail.com.
        <Link href="/olduser/forgotpassword/email">
          <span className="font-bold"> edit email</span>
        </Link>
      </p>
      <Input placeholder="verification code" className="mb-12" type="text" />

      <p className="flex justify-center">
        You can request a new code in
        <span className="font-bold"> 120s.</span>
      </p>

      <p className="flex justify-center mb-36">
        <u>Request</u>
      </p>
      <Button className="w-full" asChild>
        <Link href="/olduser/forgotpassword/resetpassword">Done</Link>
      </Button>
    </div>
  );
}
