"use client";

import { Button, Checkbox, Input } from "@breeze/ui";
import Link from "next/link";
import React from "react";

export default function password() {
  return (
    <div className="ml-96 mr-96">
      <h3 className="mb-5 font-bold text-xl">Reset your password</h3>
      <p className="mb-9">Let's reset your password</p>
      <Input placeholder="Password" className="mb-6" type="password" />
      <Input placeholder="Confirm password" className="mb-6" type="password" />
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
