"use client";
import React from "react";
import SearchIcon from "@/app/assets/icons/SearchIcon";
import { Input } from "@breeze/ui";
import { useState } from "react";
import FriendsForYou from "@/app/search/components/FriendsForYou";
import CalendarIcon from "@/app/assets/icons/CalendarIcon";
import SuggestedEvents from "@/app/search/components/SuggestedEvents";
import Link from "next/link";

const SearchScreen = () => {
  const [searchUsername, setSearchUsername] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchUsername(e.target.value);
  };

  return (
    <div className="max-w-96">
      <div className="relative mb-6">
        <Input
          type="text"
          className="px-1 border-b-2 border-b-neutral-9 placeholder-gray-800::placeholder text-lg"
          placeholder="Search"
          onChange={handleInputChange}
        />
        <div className="absolute inset-y-0 right-0 flex items-center justify-center pr-[3px]">
          <SearchIcon />
        </div>
      </div>

      <FriendsForYou />

      <div className="my-9">
        <h3 className="font-medium text-lg">Events For You</h3>
        <Link
          href={"/search/today-events"}
          className="bg-neutral-1 border border-neutral-7 p-4 flex gap-4 rounded-md mt-3"
        >
          <CalendarIcon />
          <p className="text-base uppercase ">Today</p>
        </Link>
      </div>

      <SuggestedEvents />
    </div>
  );
};

export default SearchScreen;
