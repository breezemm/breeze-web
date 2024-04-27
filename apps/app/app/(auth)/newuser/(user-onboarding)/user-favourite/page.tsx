"use client";

import { Button } from "@breeze/ui";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import SocialAndNetworking from "@/app/assets/images/SocialAndNetworking.png";
import ArtAndDesign from "@/app/assets/images/ArtAndDesign.png";
import Technology from "@/app/assets/images/Technology.png";
import Clubbing from "@/app/assets/images/Clubbing.png";
import Sport from "@/app/assets/images/Football.png";
import Education from "@/app/assets/images/Education.png";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { userDataStore } from "@/store/User-Data-Store";

interface Option {
  id: string;
  name: string;
  image: any;
  alt: string;
}

const options: Option[] = [
  {
    id: "2",
    name: "Social and Networking",
    image: SocialAndNetworking,
    alt: "Social and networking",
  },
  {
    id: "4",
    name: "Art and Design",
    image: ArtAndDesign,
    alt: "Art and design",
  },
  { id: "5", name: "Technology", image: Technology, alt: "Technology" },
  { id: "7", name: "Clubbing", image: Clubbing, alt: "Clubbing" },
  { id: "8", name: "Sports", image: Sport, alt: "Sport" },
  { id: "9", name: "Education", image: Education, alt: "Education" },
];

export default function UserSelection() {
  const { userFavourite, updateUserFavourite } = userDataStore((state) => ({
    userFavourite: state.userFavourite,
    updateUserFavourite: state.updateUserFavourite,
  }));

  const handleOptionSelection = (optionId: string) => {
    if (userFavourite.includes(optionId)) {
      updateUserFavourite(
        userFavourite.filter((selectedOption) => selectedOption !== optionId)
      );
    } else {
      if (userFavourite.length < 1) {
        updateUserFavourite([...userFavourite, optionId]);
      }
    }
  };

  const isOptionSelected = userFavourite.length > 0;
  const isMaxSelection = userFavourite.length === 1;

  return (
    <div className="mx-auto px-4 max-w-md mt-10">
      <Button size="icon" className="bg-neutral-10 rounded-full mb-5" asChild>
        <Link href="/newuser/user-selection-t3">
          <ChevronLeftIcon className="h-4 w-4 text-white font-bold" />
        </Link>
      </Button>

      <h3 className="mb-5 font-bold text-xl flex justify-center">
        Select your least favourite 1
      </h3>
      <div className="flex justify-center ">
        <div className="grid grid-cols-3 gap-7 ">
          {options.map((option) => (
            <OptionButton
              key={option.id}
              id={option.id}
              name={option.name}
              image={option.image}
              alt={option.alt}
              selected={userFavourite.includes(option.id)}
              onClick={() => handleOptionSelection(option.id)}
            />
          ))}
        </div>
      </div>
      {!isOptionSelected || !isMaxSelection ? (
        <Button className="w-full mt-64" disabled>
          <Link href="/">Next</Link>
        </Button>
      ) : (
        <Button className="w-full mt-64" asChild>
          <Link href="/">Next</Link>
        </Button>
      )}
    </div>
  );
}

interface OptionButtonProps {
  id: string;
  name: string;
  image: any;
  alt: string;
  selected: boolean;
  onClick: () => void;
}

function OptionButton({
  id,
  name,
  image,
  alt,
  selected,
  onClick,
}: OptionButtonProps) {
  return (
    <div className="flex flex-col items-center">
      <Button
        id={id}
        name={name}
        className={`bg-neutral-1 border border-neutral-5 rounded-full h-20 w-20 flex items-center justify-center ${selected ? "bg-neutral-10" : ""}`}
        onClick={onClick}>
        <Image src={image} alt={alt} />
      </Button>
      <span className="mt-2 text-center">{name}</span>
    </div>
  );
}
