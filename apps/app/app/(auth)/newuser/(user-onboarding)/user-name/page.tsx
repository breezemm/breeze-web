"use client";
import AddMediaIcon from "@/app/assets/icons/AddMediaIcon";
import CameraIcon from "@/app/assets/icons/CameraIcon";
import { userDataStore } from "@/store/User-Data-Store";
import { Button, Input } from "@breeze/ui";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";
import { z } from "zod";

// Define Zod schema for username validation
const usernameSchema = z
  .string()
  .min(3, "Username must be at least 3 characters long");

export default function userName() {
  const [isUserNameValid, setIsUserNameValid] = useState(false);
  const {
    updateUserName,
    userNameFromStore,
    userImageUrl,
    updateUserImageUrl,
  } = userDataStore((state) => ({
    updateUserName: state.updateUserName,
    userNameFromStore: state.userName,
    userImageUrl: state.userImageUrl,
    updateUserImageUrl: state.updateUserImageUrl,
  }));

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUsername = event.target.value;
    updateUserName(newUsername);
    validateUsername(newUsername);
  };

  const handleUserImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newUserImageUrl = event.target.value;
    updateUserImageUrl(newUserImageUrl);
  };

  const validateUsername = (value: string) => {
    const validationResult = usernameSchema.safeParse(value);
    setIsUserNameValid(validationResult.success);
  };

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
          <input
            type="file"
            name="file_upload"
            className="hidden"
            onChange={handleUserImageChange}
          />
        </span>
      </label>
      <Input
        placeholder="Username"
        type="text"
        name="username"
        value={userNameFromStore}
        onChange={handleUsernameChange}
        className={`mt-5 ${!isUserNameValid ? "border-red" : ""}`}
      />
      {/* {!isUserNameValid && (
        <p className="text-red">Username must be at least 3 characters long</p>
      )} */}
      {isUserNameValid ? (
        <Button className="w-full mt-72" asChild>
          <Link href="/newuser/user-birth">Next</Link>
        </Button>
      ) : (
        <Button className="w-full mt-72" disabled>
          Next
        </Button>
      )}
    </div>
  );
}
