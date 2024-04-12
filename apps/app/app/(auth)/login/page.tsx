"use client";

import { Button } from "@breeze/ui";
import BreezeLogoIcon from "../../assets/icons/BreezeLogoIcon";
import Link from "next/link";

export default function login() {
  return (
    <div className="md:flex flex-col flex-1 justify-center items-center">
      <BreezeLogoIcon className="md:w-28 md:h-28 w-24 h-24 mb-5" />
      <Link href="/newuser">
        <Button className="w-64 mb-5">Create a new account</Button>
      </Link>
      <Link href="/olduser/login">
        <p>I already have an account</p>
      </Link>
    </div>
  );
}
