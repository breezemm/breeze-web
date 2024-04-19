"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";

const UserDashboardNavbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };
  return (
    <div className="flex justify-around border-b pb-2 w-full max-w-96 border-neutral-5">
      <Link
        href="/profile/user-dashboard/events"
        className={
          activeLink === "events" ? "border-b-2 border-blue-7 pb-2" : ""
        }
        onClick={() => handleLinkClick("events")}
      >
        Events
      </Link>
      <Link
        href="/profile/user-dashboard/followers"
        className={
          activeLink === "followers" ? "border-b-2 border-blue-7 pb-2" : ""
        }
        onClick={() => handleLinkClick("followers")}
      >
        Followers
      </Link>
      <Link
        href="/profile/user-dashboard/followings"
        className={
          activeLink === "followings" ? "border-b-2 border-blue-7 pb-2" : ""
        }
        onClick={() => handleLinkClick("followings")}
      >
        Followings
      </Link>
    </div>
  );
};

export default UserDashboardNavbar;
