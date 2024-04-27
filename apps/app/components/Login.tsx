import BreezeLogoIcon from "@/app/assets/icons/BreezeLogoIcon";
import { signIn } from "@/auth";

import { Button } from "@breeze/ui";
import Link from "next/link";
import React from "react";

function Login() {
  return (
    <div className="flex flex-col justify-center items-center h-full px-4 mt-16">
      <div className="flex flex-col items-center">
        <BreezeLogoIcon className="w-20 h-20 mb-5" />
        <Button className="w-full md:w-64 mb-5" asChild>
          <Link href="/newuser">Create a new account</Link>
        </Button>
      </div>
      <form
        action={async () => {
          "use server";
          await signIn();
        }}>
        <button type="submit">
          <p className="text-center">I already have an account</p>
        </button>
      </form>
    </div>
  );
}

export default Login;
