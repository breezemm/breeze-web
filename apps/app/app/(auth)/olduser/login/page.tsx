"use client";

import { Button, Input } from "@breeze/ui";
import Link from "next/link";
import React from "react";

export default function olduser() {
  return (
    <div className="ml-96 mr-96">
      <h3 className="mb-5 font-bold text-xl">Log In to your account</h3>
      <p className="mb-9">Welcome back!</p>

      <Input placeholder="Email" className="mb-9" type="email" />
      <Input placeholder="Password" className="mb-9" type="email" />
      <Link href="/olduser/forgotpassword/email">
        <p className="font-bold mb-36">Forget Password?</p>
      </Link>
      <Link href="/">
        <Button className="w-full">Login</Button>
      </Link>
    </div>
  );
}
