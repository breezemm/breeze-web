"use client";
import React from "react";
import Link from "next/link";
import DownloadButton from "@/components/DownloadButton";
import BreezeLogoIcon from "@/app/assets/icons/BreezeLogoIcon";
import { usePathname } from "next/navigation";
import TimelineNavbar from "@/components/TimelineNavbar";

const NavBar = () => {
  const pathname: string = usePathname();
  return (
    <div className="flex  items-center sticky top-0 z-20  justify-between bg-white   ps-3.5 pe-6 py-4 md:py-6  md:pe-10 md:ps-7">
      <Link href="/">
        <BreezeLogoIcon className="md:w-20 md:h-20 w-16 h-16" />
      </Link>
      <TimelineNavbar />
      <DownloadButton />
    </div>
  );
};

export default NavBar;
