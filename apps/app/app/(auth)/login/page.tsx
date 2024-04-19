"use client";

import { Button } from "@breeze/ui";
import BreezeLogoIcon from "../../assets/icons/BreezeLogoIcon";
import Link from "next/link";

export default function login() {
  return (
    <div className="flex flex-col justify-center items-center h-full px-4">
      <div className="flex flex-col items-center">
        <BreezeLogoIcon className="w-20 h-20 mb-5" />
        <Button className="w-full md:w-64 mb-5" asChild>
          <Link href="/newuser">Create a new account</Link>
        </Button>
      </div>
      <Link href="/olduser/login">
        <p className="text-center">I already have an account</p>
      </Link>
    </div>
  );
}
