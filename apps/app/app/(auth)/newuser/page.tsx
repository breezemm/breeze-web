"use client";

import { Button, Input } from "@breeze/ui";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

export default function newUser() {
  return (
    <div className="mx-auto px-4 max-w-md mt-10">
      <Button size="icon" className="bg-neutral-10 rounded-full mb-5" asChild>
        <Link href="/login">
          <ChevronLeftIcon className="h-4 w-4 text-white font-bold" />
        </Link>
      </Button>
      <h3 className="mb-5 font-bold text-xl">Create a "new" account</h3>
      <p className="mb-9">Let's start with your email first</p>
      <Input placeholder="Email" className="mb-48" type="email" />
      <Button className="w-full" asChild>
        <Link href="/newuser/email-verify">Next</Link>
      </Button>
    </div>
  );
}
