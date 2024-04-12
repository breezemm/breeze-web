"use client";

import { Button, Input } from "@breeze/ui";
import Link from "next/link";
import React from "react";

export default function verifycode() {
  return (
    <div className="ml-96 mr-96">
      <h3 className="mb-5 font-bold text-xl">We will sent you a code</h3>
      <p className="mb-9">
        A 6-digit verification code has sent to correct@gmail.com.
        <span className="font-bold"> edit email</span>
      </p>
      <Input placeholder="verification code" className="mb-12" type="text" />

      <p className="flex justify-center">
        You can request a new code in
        <span className="font-bold"> 120s.</span>
      </p>

      <p className="flex justify-center mb-36">
        <u>Request</u>
      </p>

      <Link href="/olduser/forgotpassword/resetpassword">
        <Button className="w-full">Done</Button>
      </Link>
    </div>
  );
}
