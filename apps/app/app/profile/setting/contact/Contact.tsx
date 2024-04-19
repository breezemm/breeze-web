import FacebookIcon from "@/app/assets/icons/social/FacebookIcon";
import InstagramIcon from "@/app/assets/icons/social/InstagramIcon";
import LinkedInIcon from "@/app/assets/icons/social/LinkedInIcon";
import PhoneIcon from "@/app/assets/icons/social/PhoneIcon";
import TelegramIcon from "@/app/assets/icons/social/TelegramIcon";
import TikTokIcon from "@/app/assets/icons/social/TikTokIcon";
import WebIcon from "@/app/assets/icons/social/WebIcon";
import React from "react";

const Contact = () => {
  const contactListsData = [
    {
      contactIcon: <LinkedInIcon />,
      label: "LinkedIn",
    },
    {
      contactIcon: <TelegramIcon />,
      label: "Telegram",
    },
    {
      contactIcon: <InstagramIcon />,
      label: "Instagram",
    },
    {
      contactIcon: <FacebookIcon />,
      label: "Facebook",
    },
    {
      contactIcon: <TikTokIcon />,
      label: "TikTok",
    },
    {
      contactIcon: <WebIcon />,
      label: "breezemm.com",
    },
    {
      contactIcon: <PhoneIcon />,
      label: "09 - 443 111 017",
    },
  ];

  return (
    <div className="w-full max-w-96">
      <h3 className="text-lg font-semibold mb-7 text-center border-b pb-2 border-neutral-5">
        Contact
      </h3>
      <div className="px-6 flex flex-col gap-9">
        {contactListsData.map((list, index) => (
          <div key={index} className="flex items-center gap-4">
            {list.contactIcon}
            <p>{list.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
