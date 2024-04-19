// "use client";

// import { Button } from "@breeze/ui";
// import { ChevronLeftIcon } from "@radix-ui/react-icons";
// import FunAndFood from "@/app/assets/images/fun&food.png";
// import SocialAndNetworking from "@/app/assets/images/SocialAndNetworking.png";
// import WeekendGataway from "@/app/assets/images/Weekend-Getaway.png";
// import ArtAndDesign from "@/app/assets/images/ArtAndDesign.png";
// import Technology from "@/app/assets/images/Technology.png";
// import Music from "@/app/assets/images/Music.png";
// import Clubbing from "@/app/assets/images/Clubbing.png";
// import Sport from "@/app/assets/images/Football.png";
// import Education from "@/app/assets/images/Education.png";
// import Image from "next/image";
// import Link from "next/link";

// export default function userselection() {
//   return (
//     <div className="mx-auto px-4 max-w-md mt-10">
//       <Button size="icon" className="bg-neutral-10 rounded-full mb-5" asChild>
//         <Link href="/newuser/password">
//           <ChevronLeftIcon className="h-4 w-4 text-white font-bold" />
//         </Link>
//       </Button>

//       <h3 className="mb-5 font-bold text-xl flex justify-center">
//         Select your TOP 3
//       </h3>
//       <div className="flex justify-center ">
//         <div className="grid grid-cols-3 gap-7 ">
//           <div className="flex flex-col items-center">
//             <Button
//               id="1"
//               name="fun_and_food"
//               className="bg-neutral-1 border border-neutral-5  rounded-full h-20 w-20 flex items-center justify-center">
//               <Image src={FunAndFood} alt="Fun and food" />
//             </Button>
//             <span className="mt-2 text-center">Fun & Food</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <Button
//               id="2"
//               name="social_and_networking"
//               className="bg-neutral-1 border border-neutral-5  rounded-full h-20 w-20 flex items-center justify-center ">
//               <Image src={SocialAndNetworking} alt="Social and networking" />
//             </Button>
//             <span className="mt-2 text-center">Social & Networking</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <Button
//               id="3"
//               name="weekend_gateway"
//               className="bg-neutral-1 border border-neutral-5  rounded-full h-20 w-20 flex items-center justify-center ">
//               <Image src={WeekendGataway} alt="Weekend Gataway" />
//             </Button>
//             <span className="mt-2 text-center">Weekend Gataway</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <Button
//               id="4"
//               name="art_and_design"
//               className="bg-neutral-1 border border-neutral-5  rounded-full h-20 w-20 flex items-center justify-center ">
//               <Image src={ArtAndDesign} alt="Art and design" />
//             </Button>
//             <span className="mt-2 text-center">Art & Design</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <Button
//               id="5"
//               name="technology"
//               className="bg-neutral-1 border border-neutral-5  rounded-full h-20 w-20 flex items-center justify-center ">
//               <Image src={Technology} alt="Technology" />
//             </Button>
//             <span className="mt-2 text-center">Technology</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <Button
//               id="6"
//               name="music"
//               className="bg-neutral-1 border border-neutral-5  rounded-full h-20 w-20 flex items-center justify-center ">
//               <Image src={Music} alt="Music" />
//             </Button>
//             <span className="mt-2 text-center">Music</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <Button
//               id="7"
//               name="clubbing"
//               className="bg-neutral-1 border border-neutral-5  rounded-full h-20 w-20 flex items-center justify-center ">
//               <Image src={Clubbing} alt="Clubbing" />
//             </Button>
//             <span className=" mt-2 text-center">Clubbing</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <Button
//               id="8"
//               name="sports"
//               className="bg-neutral-1 border border-neutral-5 rounded-full h-20 w-20 flex items-center justify-center ">
//               <Image src={Sport} alt="Sport" />
//             </Button>
//             <span className="mt-2 text-center">Sport</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <Button
//               id="9"
//               name="education"
//               className="bg-neutral-1 border border-neutral-5  rounded-full h-20 w-20 flex items-center justify-center ">
//               <Image src={Education} alt="Education" />
//             </Button>
//             <span className="mt-2 text-center">Education</span>
//           </div>
//         </div>
//       </div>

//       <Button className="w-full mt-32" asChild>
//         <Link href="/newuser/user-favourite">Next</Link>
//       </Button>
//     </div>
//   );
// }

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

interface Option {
  id: string;
  name: any;
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
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [interests, setInterests] = useState<string[]>([]);

  const fetchData = async () => {
    const response = await fetch(
      `https://shining-actually-stork.ngrok-free.app/api/v1/users/interests`
    );
    const data = await response.json();
    setInterests(data);
    console.log("the  data is : ");
  };

  useEffect(() => {
    console.log("Api is working..");

    fetchData();
  }, []);

  const handleOptionSelection = (optionId: string) => {
    if (selectedOptions.includes(optionId)) {
      setSelectedOptions(
        selectedOptions.filter((selectedOption) => selectedOption !== optionId)
      );
    } else {
      if (selectedOptions.length < 3) {
        setSelectedOptions([...selectedOptions, optionId]);
      }
    }
  };

  const isOptionSelected = selectedOptions.length > 0;
  const isMaxSelection = selectedOptions.length === 3;

  return (
    <div className="mx-auto px-4 max-w-md mt-10">
      <Button size="icon" className="bg-neutral-10 rounded-full mb-5" asChild>
        <Link href="/newuser/password">
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
              selected={selectedOptions.includes(option.id)}
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
