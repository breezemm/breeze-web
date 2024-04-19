"use client";
import ArrowIcon from "@/app/assets/icons/ArrowIcon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Input,
} from "@breeze/ui";
import React, { useState } from "react";
import SocialURL from "./SocialURL";

const AboutMe = () => {
  const [selectedGender, setSelectedGender] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");

  const handleSelectGender = (gender: string) => {
    setSelectedGender(gender);
    console.log(`Selected Gender: ${gender}`);
  };

  const handleSelectCity = (city: string) => {
    setSelectedCity(city);
    console.log(`Selected Gender: ${city}`);
  };

  return (
    <div className="w-full max-w-96">
      <h3 className="text-lg font-semibold mb-7 text-center border-b pb-2 border-neutral-5">
        My Profile
      </h3>
      <div className="px-6 ">
        <div className="flex flex-col gap-8">
          <Input
            type="url"
            className="px-1 border-b border-b-neutral-9 placeholder-gray-800::placeholder text-lg"
            placeholder="Username"
          />
          <Input
            type="date"
            className="px-1 border-b border-b-neutral-9 placeholder-gray-800::placeholder text-lg"
            placeholder="Username"
          />

          <DropdownMenu>
            <DropdownMenuTrigger className="relative flex">
              <Input
                type="text"
                className="px-1 border-b border-b-neutral-9 placeholder-neutral-9 text-lg"
                placeholder={selectedGender || "Gender"}
              />
              <ArrowIcon className="absolute right-2 rotate-90" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80">
              <DropdownMenuItem onClick={() => handleSelectGender("Male")}>
                Male
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSelectGender("Female")}>
                Female
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="relative flex">
              <Input
                type="text"
                className="px-1 border-b border-b-neutral-9 placeholder-neutral-9 text-lg"
                placeholder={selectedCity || "City"}
              />
              <ArrowIcon className="absolute right-2 rotate-90" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80">
              <DropdownMenuItem onClick={() => handleSelectCity("Nay Pyi Taw")}>
                Nay Pyi Taw
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSelectCity("Yangon")}>
                Yangon
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSelectCity("Mandalay")}>
                Mandalay
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <SocialURL />
      </div>
    </div>
  );
};

export default AboutMe;
