"use client";

import { Button, Input } from "@breeze/ui";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React, { useState } from "react";

export default function emailverify() {
  const [emailVerify, setemailVerify] = useState("");

  const handleEmailVerifyChange = (event: any) => {
    setemailVerify(event.target.value);
  };

  const isEmailVerifyValid = emailVerify !== "";
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
        className="mb-48"
        type="text"
        value={emailVerify}
        onChange={handleEmailVerifyChange}
      />
      {isEmailVerifyValid ? (
        <Button className="w-full" asChild>
          <Link href="/newuser/password">Next</Link>
        </Button>
      ) : (
        <Button className="w-full" disabled>
          Next
        </Button>
      )}
    </div>
  );
}
