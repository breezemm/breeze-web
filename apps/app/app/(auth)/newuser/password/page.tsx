"use client";

import { Button, Checkbox, Input } from "@breeze/ui";
import Link from "next/link";
import React from "react";

export default function password() {
  return (
    <div className="ml-96 mr-96">
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

      <Link href="/">
        <Button className="w-full">Done</Button>
      </Link>
    </div>
  );
}
