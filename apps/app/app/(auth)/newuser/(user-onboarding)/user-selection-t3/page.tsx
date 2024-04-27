"use client";

import { Button } from "@breeze/ui";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import FunAndFood from "@/app/assets/images/fun&food.png";
import SocialAndNetworking from "@/app/assets/images/SocialAndNetworking.png";
import WeekendGataway from "@/app/assets/images/Weekend-Getaway.png";
import ArtAndDesign from "@/app/assets/images/ArtAndDesign.png";
import Technology from "@/app/assets/images/Technology.png";
import Music from "@/app/assets/images/Music.png";
import Clubbing from "@/app/assets/images/Clubbing.png";
import Sport from "@/app/assets/images/Football.png";
import Education from "@/app/assets/images/Education.png";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { userDataStore } from "@/store/User-Data-Store";

interface Option {
  id: string;
  name: string;
  image: any;
  alt: string;
}

const options: Option[] = [
  { id: "1", name: "Fun & Food", image: FunAndFood, alt: "Fun and food" },
  {
    id: "2",
    name: "Social & Networking",
    image: SocialAndNetworking,
    alt: "Social & networking",
  },
  {
    id: "3",
    name: "Weekend Getaway",
    image: WeekendGataway,
    alt: "Weekend Getaway",
  },
  {
    id: "4",
    name: "art_and_design",
    image: ArtAndDesign,
    alt: "Art and design",
  },
  { id: "5", name: "technology", image: Technology, alt: "Technology" },
  { id: "6", name: "music", image: Music, alt: "Music" },
  { id: "7", name: "clubbing", image: Clubbing, alt: "Clubbing" },
  { id: "8", name: "sports", image: Sport, alt: "Sport" },
  { id: "9", name: "education", image: Education, alt: "Education" },
];

export default function UserSelection() {
  // const [options, setOptions] = useState<Option[]>([]);
  const { userSelection, updateUserSelctionT3 } = userDataStore((state) => ({
    userSelection: state.userSelection,
    updateUserSelctionT3: state.updateUserSelectionT3,
  }));

  const fetchData = async () => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_BREEZE_API_URL;
      const response = await fetch(`${apiUrl}/users/interests`);
      const data = await response.json();
      // setOptions(data.map((item: any) => ({ id: item.id, name: item.name })));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    console.log("Api is working..");

    fetchData();
  }, []);

  const handleOptionSelection = (optionId: string) => {
    if (userSelection.includes(optionId)) {
      updateUserSelctionT3(
        userSelection.filter((selectedOption) => selectedOption !== optionId)
      );
    } else {
      if (userSelection.length < 3) {
        updateUserSelctionT3([...userSelection, optionId]);
      }
    }
  };

  const isOptionSelected = userSelection.length > 0;
  const isMaxSelection = userSelection.length === 3;

  return (
    <div className="mx-auto px-4 max-w-md mt-10">
      <Button size="icon" className="bg-neutral-10 rounded-full mb-5" asChild>
        <Link href="/newuser/user-city">
          <ChevronLeftIcon className="h-4 w-4 text-white font-bold" />
        </Link>
      </Button>

      <h3 className="mb-5 font-bold text-xl flex justify-center">
        Select your TOP 3
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
              selected={userSelection.includes(option.id)}
              onClick={() => handleOptionSelection(option.id)}
            />
          ))}
        </div>
      </div>
      {!isOptionSelected || !isMaxSelection ? (
        <Button className="w-full mt-32" disabled>
          <Link href="/newuser/user-favourite">Next</Link>
        </Button>
      ) : (
        <Button className="w-full mt-32" asChild>
          <Link href="/newuser/user-favourite">Next</Link>
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
