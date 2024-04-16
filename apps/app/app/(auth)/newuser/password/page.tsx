"use client";

import { Button, Checkbox, Input } from "@breeze/ui";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

export default function password() {
  return (
    <div className="mx-auto px-4 max-w-md mt-10">
      <Button size="icon" className="bg-neutral-10 rounded-full mb-5" asChild>
        <Link href="/newuser/email-verify">
          <ChevronLeftIcon className="h-4 w-4 text-white font-bold" />
        </Link>
      </Button>
      <h3 className="mb-5 font-bold text-xl">The last step</h3>
      <p className="mb-9">You are strong and your password should be too.</p>
      <Input placeholder="Password" className="mb-6" type="password" />
      <Input placeholder="Confirm password" className="mb-6" type="password" />
      <Checkbox className="mb-10 mr-3" id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        I accept <u>breeze's Terms and Conditions.</u> (Required)
      </label>
      <div className="mb-36">
        <p>Your password must include:</p>

        <li>8 letters</li>
        <li>a special character (@.#,$,*)</li>
        <li>a capital letter</li>
      </div>
      <Button className="w-full" asChild>
        <Link href="/newuser/user-name">Done</Link>
      </Button>
    </div>
  );
}
