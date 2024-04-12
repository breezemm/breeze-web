"use client";

import { Button, Input } from "@breeze/ui";
import Link from "next/link";
import React from "react";

export default function newUser() {
  return (
    <div className="ml-96 mr-96">
      <h3 className="mb-5 font-bold text-xl">Create a "new" account</h3>
      <p className="mb-9">Let's start with your email first</p>
      <Input placeholder="Email" className="mb-48" type="email" />
      <Link href="/newuser/emailverify">
        <Button className="w-full">Next</Button>
      </Link>
    </div>
  );
}
