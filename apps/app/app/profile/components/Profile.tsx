import SettingIcon from "@/app/assets/icons/SettingIcon";
import FacebookIcon from "@/app/assets/icons/social/FacebookIcon";
import InstagramIcon from "@/app/assets/icons/social/InstagramIcon";
import SnapchatIcon from "@/app/assets/icons/social/SnapchatIcon";
import TelegramIcon from "@/app/assets/icons/social/TelegramIcon";
import TikTokIcon from "@/app/assets/icons/social/TikTokIcon";
import { Pyae } from "@/app/assets/images";
import { Button } from "@breeze/ui";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProfileProps {
  isMyProfile?: boolean;
}

const Profile = ({ isMyProfile = true }: ProfileProps) => {
  return (
    <div>
      <div className="relative pb-2 mb-7  ">
        <h3 className="text-lg  font-semibold text-center ">Jonathan</h3>
        <SettingIcon className="absolute right-7 top-1 cursor-pointer" />
      </div>

      <div className="flex gap-8 justify-between items-center mb-8">
        <Image src={Pyae} alt={`Pyae Profile Image`} width={70} height={70} />
        <div className="flex">
          <div className="flex flex-col gap-2 px-2 items-center">
            <p className="text-base font-semibold">24</p>
            <p className="text-base font-normal">events</p>
          </div>
          <div className="flex flex-col gap-2 px-2 items-center">
            <p className="text-base font-semibold">168</p>
            <p className="text-base font-normal">followers</p>
          </div>
          <div className="flex flex-col gap-2 px-2 items-center">
            <p className="text-base font-semibold">83</p>
            <p className="text-base font-normal">following</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 ">
        <h5 className="text-sm font-normal">
          A Shone Ma Pay Nae. Kyoe Sarrrrrrr. 💪🏼
        </h5>
        <div className="flex gap-6">
          <FacebookIcon />
          <TelegramIcon />
          <InstagramIcon />
          <TikTokIcon />
          <SnapchatIcon />
        </div>
        {isMyProfile ? (
          <Button asChild className="w-full">
            <Link href={"/profile/edit"}>Eidt Profile</Link>
          </Button>
        ) : (
          <Button asChild className="w-1/2 bg-blue-7">
            <Link href={"/profile/follow"}>Follow</Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Profile;
