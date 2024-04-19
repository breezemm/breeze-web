import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { Myat, Htoo, Shoon, Pyae } from "@/app/assets/images";

interface Friend {
  profileImage: StaticImageData;
  name: string;
  profileUrl: string;
}

const FriendLists = () => {
  const friendsdata = [
    {
      profileImage: Myat,
      name: "Myat",
      profileUrl: "/profile-myat",
    },
    {
      profileImage: Htoo,
      name: "Htoo",
      profileUrl: "/profile-htoo",
    },
    {
      profileImage: Shoon,
      name: "Shoon",
      profileUrl: "/profile-shoon",
    },
    {
      profileImage: Pyae,
      name: "Pyae",
      profileUrl: "/profile-pyae",
    },
    {
      profileImage: Myat,
      name: "Myat",
      profileUrl: "/profile-myat",
    },
    {
      profileImage: Htoo,
      name: "Htoo",
      profileUrl: "/profile-htoo",
    },
    {
      profileImage: Shoon,
      name: "Shoon",
      profileUrl: "/profile-shoon",
    },
    {
      profileImage: Pyae,
      name: "Pyae",
      profileUrl: "/profile-pyae",
    },
    {
      profileImage: Myat,
      name: "Myat",
      profileUrl: "/profile-myat",
    },
    {
      profileImage: Htoo,
      name: "Htoo",
      profileUrl: "/profile-htoo",
    },
    {
      profileImage: Shoon,
      name: "Shoon",
      profileUrl: "/profile-shoon",
    },
    {
      profileImage: Pyae,
      name: "Pyae",
      profileUrl: "/profile-pyae",
    },
  ];

  return (
    <div className="w-full max-w-96">
      <h3 className="text-lg font-semibold mb-7 text-center border-b pb-2 border-neutral-5">
        Friends
      </h3>

      <div className="px-8 flex flex-col w-full items-start">
        {friendsdata.map((friend) => (
          <FriendProfile friend={friend} />
        ))}
      </div>
    </div>
  );
};

const FriendProfile: React.FC<{ friend: Friend }> = ({ friend }) => {
  return (
    <Link className="flex gap-4  py-2 items-center" href={friend.profileUrl}>
      <Image
        src={friend.profileImage}
        alt={`${friend.profileImage}-profile`}
        width={40}
        height={40}
      />
      <p className="text-base font-normal">{friend.name}</p>
    </Link>
  );
};

export default FriendLists;
