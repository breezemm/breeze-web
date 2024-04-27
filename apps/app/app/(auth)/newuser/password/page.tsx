"use client";

import { userDataStore } from "@/store/User-Data-Store";
import { Button, Checkbox, Input } from "@breeze/ui";
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
    termsAccepted,
    updateUserPassword,
    updateUserConfirmPassword,
    updateUserTermsAccepted,
  } = userDataStore((state) => ({
    password: state.password,
    confirmPassword: state.confirmPassword,
    termsAccepted: state.termsAccepted,
    updateUserPassword: state.updateUserPassword,
    updateUserConfirmPassword: state.updateUserConfirmPassword,
    updateUserTermsAccepted: state.updateUserTermsAccepted,
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

  const handleTermsAcceptance = () => {
    updateUserTermsAccepted(!termsAccepted);
  };

  const isPasswordValid = passwordValidationResult.success;
  const passwordsMatch = password === confirmPassword;
  const isButtonDisabled =
    !isPasswordValid || !passwordsMatch || !termsAccepted;
  const isPasswordLengthValid = password.length >= 8;
  const isPasswordSpecialCharValid = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const isPasswordCapitalLetterValid = /[A-Z]/.test(password);

  return (
    <div className="mx-auto px-4 max-w-md mt-10">
      <Button size="icon" className="bg-neutral-10 rounded-full mb-5">
        <Link href="/newuser/email-verify">
          <ChevronLeftIcon className="h-4 w-4 text-white font-bold" />
        </Link>
      </Button>
      <h3 className="mb-5 font-bold text-xl">The last step</h3>
      <p className="mb-9">You are strong and your password should be too.</p>
      <Input
        placeholder="Password"
        className="mb-3"
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
      <Checkbox
        className="mb-7 mr-3"
        id="terms"
        checked={termsAccepted}
        onClick={handleTermsAcceptance}
      />
      <label
        htmlFor="terms"
        className={`text-sm font-medium leading-none ${
          !termsAccepted
            ? "peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            : ""
        }`}>
        I accept <u>breeze's Terms and Conditions.</u> (Required)
      </label>

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
        <Button className="w-full mt-28" disabled>
          <Link href="/newuser/user-name">Done</Link>
        </Button>
      ) : (
        <Button className="w-full mt-28" asChild>
          <Link href="/newuser/user-name">Done</Link>
        </Button>
      )}
    </div>
  );
}
