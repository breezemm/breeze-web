"use client";

import { Button, Input } from "@breeze/ui";
import Link from "next/link";
import React from "react";

export default function emailverify() {
  return (
    <div className="ml-96 mr-96">
      <h3 className="mb-5 font-bold text-xl">We will sent you a code</h3>
      <p className="mb-9">
        A 6-digit verification code has sent to correct@gmail.com.
        <span className="font-bold"> edit email</span>
      </p>
      <Input placeholder="E.g. 123456" className="mb-48" type="text" />
      <Link href="/newuser/password">
        <Button className="w-full">Next</Button>
      </Link>
    </div>
  );
}
