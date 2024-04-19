import ArrowIcon from "@/app/assets/icons/ArrowIcon";
import Link from "next/link";
import React from "react";

interface MenuItem {
  label: string;
  href: string;
}

interface SettingMenuProps {
  menu: {
    title: string;
    links: MenuItem[];
  };
}

const SettingMenu: React.FC<SettingMenuProps> = ({ menu }) => {
  return (
    <div className=" flex flex-col gap-6">
      <h4 className="text-base font-semibold">{menu.title}</h4>
      {menu.links.map((item, index) => (
        <Link
          key={index}
          className="flex justify-between text-base items-center"
          href={`/profile/setting${item.href}`}
        >
          {item.label}
          <ArrowIcon />
        </Link>
      ))}
    </div>
  );
};

export default SettingMenu;
