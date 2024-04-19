import FacebookIcon from "@/app/assets/icons/social/FacebookIcon";
import InstagramIcon from "@/app/assets/icons/social/InstagramIcon";
import SnapchatIcon from "@/app/assets/icons/social/SnapchatIcon";
import TelegramIcon from "@/app/assets/icons/social/TelegramIcon";
import TikTokIcon from "@/app/assets/icons/social/TikTokIcon";
import { Button, Input } from "@breeze/ui";
import React from "react";

const SocialURL = () => {
  return (
    <div className="my-14">
      <h4 className="text-base font-semibold">My Social URLs</h4>
      <div className="mt-4 flex flex-col gap-5">
        <div className="flex gap-3 items-center">
          <FacebookIcon />
          <Input
            type="url"
            className="px-1 border-b border-b-neutral-9 placeholder-gray-800::placeholder text-lg"
            placeholder="Facebook URL"
          />
        </div>
        <div className="flex gap-3 items-center">
          <InstagramIcon />
          <Input
            type="url"
            className="px-1 border-b border-b-neutral-9 placeholder-gray-800::placeholder text-lg"
            placeholder="Instagram URL"
          />
        </div>
        <div className="flex gap-3 items-center">
          <TelegramIcon />
          <Input
            type="url"
            className="px-1 border-b border-b-neutral-9 placeholder-gray-800::placeholder text-lg"
            placeholder="Telegram URL"
          />
        </div>
        <div className="flex gap-3 items-center">
          <TikTokIcon />
          <Input
            type="url"
            className="px-1 border-b border-b-neutral-9 placeholder-gray-800::placeholder text-lg"
            placeholder="TikTok URL"
          />
        </div>
        <div className="flex gap-3 items-center">
          <SnapchatIcon />
          <Input
            type="url"
            className="px-1 border-b border-b-neutral-9 placeholder-gray-800::placeholder text-lg"
            placeholder="Snapchat URL"
          />
        </div>
        <Button className="mt-4">Save</Button>
      </div>
    </div>
  );
};

export default SocialURL;
