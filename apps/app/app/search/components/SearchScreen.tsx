"use client";
import SearchIcon from "@/app/assets/icons/SearchIcon";
import { Carousel, CarouselContent, CarouselItem, Input } from "@breeze/ui";
import React from "react";
import { useState } from "react";

const SearchScreen = () => {
  const [searchUsername, setSearchUsername] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchUsername(e.target.value);
  };

  return (
    <div>
      <div className="relative w-80">
        <Input
          type="text"
          className="border-b-2 border-b-neutral-9"
          placeholder="Search"
          onChange={handleInputChange}
        />
        <div className="absolute inset-y-0 right-0 flex items-center justify-center pr-[3px]">
          <SearchIcon />
        </div>
      </div>
      <div>
        <h3>Friends For You</h3>
        <Carousel>
          <CarouselContent>
            <CarouselItem>One</CarouselItem>
            <CarouselItem>Two</CarouselItem>
            <CarouselItem>Three</CarouselItem>
            <CarouselItem>Four</CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default SearchScreen;
