"use client";

import GenderIcon from "@/app/assets/icons/GenderIcon";
import { Button } from "@breeze/ui";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function usergender() {
  return (
    <div className="mx-auto px-4 max-w-md mt-10">
      <Button size="icon" className="bg-neutral-10 rounded-full mb-5" asChild>
        <Link href="/newuser/user-birth">
          <ChevronLeftIcon className="h-4 w-4 text-white font-bold" />
        </Link>
      </Button>
      <div className="flex gap-2 justify-center mb-9">
        <div className="w-12 h-1 bg-neutral-10 rounded-xl"></div>
        <div className="w-12 h-1 bg-neutral-10 rounded-xl"></div>
        <div className="w-12 h-1 bg-neutral-10 rounded-xl"></div>
        <div className="w-12 h-1 bg-neutral-5 rounded-xl"></div>
      </div>
      <h3 className="mb-7 font-bold text-xl flex justify-center">Gender</h3>

      <div className="flex justify-center mb-7">
        <GenderIcon />
      </div>
      <div className="flex justify-center gap-4">
        <Button
          name="male"
          className="bg-neutral-1 border border-neutral-10 text-neutral-10 w-full hover:text-white"
        >
          Male
        </Button>
        <Button
          name="female"
          className="bg-neutral-1 border border-neutral-10 text-neutral-10 w-full hover:text-white"
        >
          Female
        </Button>
      </div>

      <Button className="w-full mt-36" asChild>
        <Link href="/newuser/user-city">Next</Link>
      </Button>
    </div>
  );
}
