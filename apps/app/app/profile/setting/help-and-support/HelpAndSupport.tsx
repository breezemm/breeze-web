import React from "react";
import Link from "next/link";
import ArrowIcon from "@/app/assets/icons/ArrowIcon";
import Image from "next/image";
import USAFlag from "@/app/assets/images/USAFlag.png";
import MMFlag from "@/app/assets/images/MyanmarFlag.png";

const HelpAndSupport = () => {
  const settingsMenuData = [
    {
      title: "How to launch an event?",
      links: [
        {
          label: "Myanmar Language ",
          flag: MMFlag,
          href: "/how-to-launch-event-mm",
        },
        {
          label: "English Language ",
          flag: USAFlag,
          href: "/how-to-launch-event-english",
        },
      ],
    },
    {
      title: "How to cash-in/ cash-out?",
      links: [
        {
          label: "Myanmar Language ",
          flag: MMFlag,
          href: "/how-to-cash-in-cash-out-mm",
        },
        {
          label: "English Language ",
          flag: USAFlag,
          href: "/how-to-cash-in-cash-out-english",
        },
      ],
    },
  ];

  return (
    <div className="w-full max-w-96">
      <h3 className="text-lg font-semibold mb-7 text-center border-b pb-2 border-neutral-5">
        Help & Support
      </h3>
      <div className="px-6 flex flex-col gap-12">
        {settingsMenuData.map((menu, index) => (
          <div className=" flex flex-col gap-6 ">
            <h4 className="text-base font-semibold">{menu.title}</h4>
            {menu.links.map((item, index) => (
              <Link
                key={index}
                className="flex justify-start gap-4 text-base items-center"
                href={`/profile/setting${item.href}`}
              >
                <p>{item.label}</p>
                <Image src={item.flag} alt="USA Flag" width={25} height={25} />
                <ArrowIcon className="ml-auto" />
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpAndSupport;
