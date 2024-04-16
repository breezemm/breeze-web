"use client";
import AddMediaIcon from "@/app/assets/icons/AddMediaIcon";
import CameraIcon from "@/app/assets/icons/CameraIcon";
import { Button, Input } from "@breeze/ui";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function username() {
  return (
    <div className="mx-auto px-4 max-w-md mt-10">
      <Button size="icon" className="bg-neutral-10 rounded-full mb-5" asChild>
        <Link href="/newuser/password">
          <ChevronLeftIcon className="h-4 w-4 text-white font-bold" />
        </Link>
      </Button>
      <div className="flex gap-2 justify-center mb-9">
        <div className="w-12 h-1 bg-neutral-10 rounded-xl"></div>
        <div className="w-12 h-1 bg-neutral-5 rounded-xl"></div>
        <div className="w-12 h-1 bg-neutral-5 rounded-xl"></div>
        <div className="w-12 h-1 bg-neutral-5 rounded-xl"></div>
      </div>
      <h3 className="mb-5 font-bold text-xl flex justify-center">
        Let's get ready to join event.
      </h3>

      <label className="flex justify-center mb-7">
        <span className="relative bg-neutral-5 rounded-full w-28 h-28 flex justify-center items-center">
          <CameraIcon />

          <AddMediaIcon className="absolute bottom-0 right-0  mr-3 rounded-full w-7 h-7" />
          <input type="file" name="file_upload" className="hidden" />
        </span>
      </label>
      <Input
        placeholder="Username"
        type="text"
        name="username"
        className="mb-32 mt-5"
      />
      <Button className="w-full" asChild>
        <Link href="/newuser/user-birth">Next</Link>
      </Button>
    </div>
  );
}
