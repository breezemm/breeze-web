"use client";
import React from "react";
import HomeIcon from "@/app/assets/icons/HomeIcon";
import SearchIcon from "@/app/assets/icons/SearchIcon";
import EventIcon from "@/app/assets/icons/EventIcon";
import NotificationIcon from "@/app/assets/icons/NotiIcon";
import DownloadDialogBox from "@/components/DownloadDialogBox";
import UserProfileIcon from "@/app/assets/icons/UserProfileIcon";

const TimelineFooter = () => {
  return (

    <div className="fixed w-full  bottom-0 md:flex">
      <DownloadDialogBox className="justify-between   w-full flex bg-white pt-2 pb-5 items-center px-6 border-t-2  md:hidden">
        <HomeIcon />
        <SearchIcon />
        <EventIcon />
        <NotificationIcon />
        <UserProfileIcon />
      </DownloadDialogBox>
    </div>
  );
};

export default TimelineFooter;
