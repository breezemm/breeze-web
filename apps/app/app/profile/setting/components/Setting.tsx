import React from "react";
import SettingMenu from "./SettingMenu";
import Link from "next/link";

const Setting = () => {
  const settingsMenuData = [
    {
      title: "About Me",
      links: [
        {
          label: "My Profile",
          href: "/about-me",
        },
      ],
    },
    {
      title: "Security & Privacy",
      links: [
        {
          label: "Reset password",
          href: "/reset-password",
        },
        {
          label: "Privacy policy",
          href: "/privacy-policy",
        },
      ],
    },
    {
      title: "Support & Contact",
      links: [
        {
          label: "Help & support",
          href: "/help-and-support",
        },
        {
          label: "Contact ",
          href: "/contact",
        },
      ],
    },
  ];

  return (
    <div className="w-full max-w-96">
      <h3 className="text-lg font-semibold mb-7 text-center border-b pb-2 border-neutral-5">
        Setting
      </h3>
      <div className="px-6 flex flex-col gap-10">
        {settingsMenuData.map((menu, index) => (
          <SettingMenu key={index} menu={menu} />
        ))}
        <Link className="text-red text-base font-semibold" href={"/logout"}>
          Log Out
        </Link>
      </div>
    </div>
  );
};

export default Setting;
