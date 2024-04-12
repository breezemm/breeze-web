"use client";

import { Button, Input } from "@breeze/ui";
import Link from "next/link";
import React from "react";

export default function email() {
  return (
    <div className="ml-96 mr-96">
      <h3 className="mb-5 font-bold text-xl">Forget password?</h3>
      <p className="mb-9">
        Enter your email <br />
        So, we can sent you a code.
      </p>
      <Input placeholder="Mail" className="mb-48" type="email" />
      <Link href="/olduser/forgotpassword/verifycode">
        <Button className="w-full">Next</Button>
      </Link>
    </div>
  );
}
