"use client";

import { Button } from "@breeze/ui";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function userselection() {
  return (
    <div className="mx-auto px-4 max-w-md mt-10">
      <Button size="icon" className="bg-neutral-10 rounded-full mb-5" asChild>
        <Link href="/newuser/password">
          <ChevronLeftIcon className="h-4 w-4 text-white font-bold" />
        </Link>
      </Button>

      <h3 className="mb-5 font-bold text-xl flex justify-center">
        Select your least favourite 1
      </h3>
      <div className="flex justify-center ">
        <div className="grid grid-cols-3 gap-7 ">
          <div className="flex flex-col items-center">
            <Button
              id="2"
              name="social_and_networking"
              className="bg-neutral-1 border border-neutral-5  rounded-full h-20 w-20 flex items-center justify-center "
            >
              🫱🏻‍🫲🏻
            </Button>
            <span className="mt-2 text-center">Social & Networking</span>
          </div>

          <div className="flex flex-col items-center">
            <Button
              id="4"
              name="art_and_design"
              className="bg-neutral-1 border border-neutral-5  rounded-full h-20 w-20 flex items-center justify-center "
            >
              🎨
            </Button>
            <span className="mt-2 text-center">Art & Design</span>
          </div>
          <div className="flex flex-col items-center">
            <Button
              id="5"
              name="technology"
              className="bg-neutral-1 border border-neutral-5  rounded-full h-20 w-20 flex items-center justify-center "
            >
              🤖
            </Button>
            <span className="mt-2 text-center">Technology</span>
          </div>

          <div className="flex flex-col items-center">
            <Button
              id="7"
              name="clubbing"
              className="bg-neutral-1 border border-neutral-5  rounded-full h-20 w-20 flex items-center justify-center "
            >
              🪩
            </Button>
            <span className=" mt-2 text-center">Clubbing</span>
          </div>
          <div className="flex flex-col items-center">
            <Button
              id="8"
              name="sports"
              className="bg-neutral-1 border border-neutral-5 rounded-full h-20 w-20 flex items-center justify-center "
            >
              ⚽
            </Button>
            <span className="mt-2 text-center">Sport</span>
          </div>
          <div className="flex flex-col items-center">
            <Button
              id="9"
              name="education"
              className="bg-neutral-1 border border-neutral-5  rounded-full h-20 w-20 flex items-center justify-center "
            >
              🎓
            </Button>
            <span className="mt-2 text-center">Education</span>
          </div>
        </div>
      </div>

      <Button className="w-full mt-36" asChild>
        <Link href="/newuser/user-favourite">Next</Link>
      </Button>
    </div>
  );
}
