"use client";
import { Button, Input } from "@breeze/ui";
import Link from "next/link";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import React, { FormEventHandler, useState } from "react";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

// Define Zod schema for email and password validation
const emailSchema = z.string().email("Invalid email address");
const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters long");

export default function olduser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateEmail(newEmail);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const validateEmail = (value: string) => {
    const validationResult = emailSchema.safeParse(value);
    setIsEmailValid(validationResult.success);
  };

  const validatePassword = (value: string) => {
    const validationResult = passwordSchema.safeParse(value);
    setIsPasswordValid(validationResult.success);
  };

  const isDisabledButton = !(
    email &&
    password &&
    isEmailValid &&
    isPasswordValid
  );

  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });
    if (res?.error) {
      console.error("Signin failed:", res.error);
    } else {
      router.push("/");
    }
  };

  return (
    <div className="mx-auto px-4 max-w-md mt-10">
      <Button size="icon" className="bg-neutral-10 rounded-full mb-5" asChild>
        <Link href="/login">
          <ChevronLeftIcon className="h-4 w-4 text-white font-bold" />
        </Link>
      </Button>
      <h3 className="mb-5 font-bold text-xl">Log In to your account</h3>
      <p className="">Welcome back!</p>

      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Email"
          className={`mt-9 ${!isEmailValid ? "border-red-500" : ""}`}
          type="email"
          value={email}
          onChange={handleChangeEmail}
          required
        />
        {!isEmailValid && <p className="text-red">Invalid email address</p>}
        <Input
          placeholder="Password"
          className={`mt-9 ${!isPasswordValid ? "border-red-500" : ""}`}
          type="password"
          value={password}
          onChange={handleChangePassword}
          required
        />
        {!isPasswordValid && (
          <p className="text-red">
            Password must be at least 8 characters long
          </p>
        )}
        <Link href="/olduser/forgotpassword/email">
          <p className="font-bold mt-9">Forget Password?</p>
        </Link>
        {!isDisabledButton ? (
          <Button className="w-full mt-72" type="submit">
            Login
          </Button>
        ) : (
          <Button className="w-full mt-72" type="submit" disabled>
            Login
          </Button>
        )}
      </form>
    </div>
  );
}
