"use client";

import { userDataStore } from "@/store/User-Data-Store";
import { Button, Input } from "@breeze/ui";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React, { useState } from "react";
import { z } from "zod";

// Define Zod schema for password validation
const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters long")
  .regex(
    /[!@#$%^&*(),.?":{}|<>]/,
    "Password must contain at least one special character"
  )
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter");

export default function password() {
  const [passwordsMatchError, setPasswordsMatchError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  //using the zustand store
  const {
    password,
    confirmPassword,

    updateUserPassword,
    updateUserConfirmPassword,
  } = userDataStore((state) => ({
    password: state.password,
    confirmPassword: state.confirmPassword,

    updateUserPassword: state.updateUserPassword,
    updateUserConfirmPassword: state.updateUserConfirmPassword,
  }));

  // Validation result for password
  const passwordValidationResult = passwordSchema.safeParse(password);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateUserPassword(event.target.value);
    setPasswordsMatchError("");
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newPassword = event.target.value;
    updateUserConfirmPassword(newPassword);
    if (newPassword !== password) {
      setConfirmPasswordError("password does not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const isPasswordValid = passwordValidationResult.success;
  const passwordsMatch = password === confirmPassword;
  const isButtonDisabled = !isPasswordValid || !passwordsMatch;
  const isPasswordLengthValid = password.length >= 8;
  const isPasswordSpecialCharValid = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const isPasswordCapitalLetterValid = /[A-Z]/.test(password);

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
        className={`mb-3 ${confirmPasswordError ? "border-red-500" : ""}`}
        type="password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
      {confirmPasswordError && (
        <p className="text-red mb-3 font-bold">{confirmPasswordError}</p>
      )}
      <div className="mb-32">
        <p>Your password must include:</p>
        <li className={`${isPasswordLengthValid ? "text-green-7" : ""}`}>
          8 letters
        </li>
        <li className={`${isPasswordSpecialCharValid ? "text-green-7" : ""}`}>
          a special character (@.#,$,*)
        </li>
        <li className={`${isPasswordCapitalLetterValid ? "text-green-7" : ""}`}>
          a capital letter
        </li>
      </div>
      {isButtonDisabled ? (
        <Button className="w-full mt-36" disabled>
          <Link href="/">Done</Link>
        </Button>
      ) : (
        <Button className="w-full mt-36" asChild>
          <Link href="/">Done</Link>
        </Button>
      )}
    </div>
  );
}
