"use client";

import { userDataStore } from "@/store/User-Data-Store";
import { Button, Input } from "@breeze/ui";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React, { useState } from "react";
import { z } from "zod";

// Define Zod schema for email validation
const emailSchema = z.string().email("Invalid email address");

export default function newUser() {
  const [isValidEmail, setIsValidEmail] = useState(false);

  const { userEmail, updateUserEmail } = userDataStore((state) => ({
    userEmail: state.email,
    updateUserEmail: state.updateUserEmail,
  }));

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    updateUserEmail(newEmail);
    validateEmail(newEmail);
  };

  const validateEmail = (value: string) => {
    const validationResult = emailSchema.safeParse(value);
    setIsValidEmail(validationResult.success);
  };

  return (
    <div className="mx-auto px-4 max-w-md mt-10">
      <Button size="icon" className="bg-neutral-10 rounded-full mb-5" asChild>
        <Link href="/login">
          <ChevronLeftIcon className="h-4 w-4 text-white font-bold" />
        </Link>
      </Button>
      <h3 className="mb-5 font-bold text-xl">Create a "new" account</h3>
      <p className="mb-9">Let's start with your email first</p>
      <Input
        placeholder="Email"
        className="mb-48"
        type="email"
        value={userEmail}
        onChange={handleEmailChange}
      />

      {isValidEmail ? (
        <Button className="w-full mt-64" asChild>
          <Link href="/newuser/email-verify">Next</Link>
        </Button>
      ) : (
        <Button className="w-full mt-64" disabled>
          Next
        </Button>
      )}
    </div>
  );
}
