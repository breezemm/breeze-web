"use client";

import { Button, Input } from "@breeze/ui";
import Link from "next/link";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import React from "react";

export default function olduser() {
  return (
    <div className="mx-auto px-4 max-w-md mt-10">
      <Button size="icon" className="bg-neutral-10 rounded-full mb-5" asChild>
        <Link href="/login">
          <ChevronLeftIcon className="h-4 w-4 text-white font-bold" />
        </Link>
      </Button>
      <h3 className="mb-5 font-bold text-xl">Log In to your account</h3>
      <p className="mb-9">Welcome back!</p>

      <form action="">
        <Input placeholder="Email" className="mb-9" type="email" />
        <Input placeholder="Password" className="mb-9" type="password" />
        <Link href="/olduser/forgotpassword/email">
          <p className="font-bold mb-36">Forget Password?</p>
        </Link>

        <Button asChild className="w-full" type="submit">
          <Link href="/">Login</Link>
        </Button>
      </form>
    </div>
  );
}
