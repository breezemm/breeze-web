"use client";
import React from "react";
import Link from "next/link";
import DownloadButton from "@/components/DownloadButton";
import { usePathname } from "next/navigation";
import TimelineNavbar from "@/components/TimelineNavbar";
import BreezeLogoTextIcon from "@/app/assets/icons/BreezeLogoTextIcon";

const NavBar = () => {
  const pathname: string = usePathname();
  return (
    <div className="flex  items-center sticky top-0 z-0  justify-between bg-white   ps-2 pe-6 py-4 md:py-6  md:pe-10 md:ps-4">
      <Link href="/">
        <BreezeLogoTextIcon className="md:w-52 md:h-20 w-28 h-16" />
      </Link>
      <TimelineNavbar />
      <DownloadButton />
    </div>
  );
};

export default NavBar;
