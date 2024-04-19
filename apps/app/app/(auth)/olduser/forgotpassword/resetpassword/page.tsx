"use client";

import { Button, Input } from "@breeze/ui";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React, { useState } from "react";

export default function password() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: any) => {
    setConfirmPassword(e.target.value);
  };

  const isPasswordValid =
    password.length >= 8 &&
    /[!@#$%^&*(),.?":{}|<>]/.test(password) &&
    /[A-Z]/.test(password);

  const passwordsMatch = password === confirmPassword;

  const isButtonDisabled = !isPasswordValid || !passwordsMatch;

  return (
    <div className="mx-auto px-4 max-w-md mt-10">
      <Button size="icon" className="bg-neutral-10 rounded-full mb-5" asChild>
        <Link href="/olduser/forgotpassword/verifycode">
          <ChevronLeftIcon className="h-4 w-4 text-white font-bold" />
        </Link>
      </Button>
      <h3 className="mb-5 font-bold text-xl">Reset your password</h3>
      <p className="mb-9">Let's reset your password</p>
      <Input
        placeholder="Password"
        className="mb-6"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <Input
        placeholder="Confirm password"
        className="mb-6"
        type="password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
      <div className="mb-36">
        <p>Your password must include:</p>

        <li>8 letters</li>
        <li>a special character (@.#,$,*)</li>
        <li>a capital letter</li>
      </div>
      {isButtonDisabled ? (
        <Button className="w-full" disabled>
          <Link href="/">Done</Link>
        </Button>
      ) : (
        <Button className="w-full" asChild>
          <Link href="/">Done</Link>
        </Button>
      )}
    </div>
  );
}
