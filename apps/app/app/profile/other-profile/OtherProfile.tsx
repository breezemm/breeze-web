"use client";
import React from "react";
import Profile from "../components/Profile";
import UserActivity from "@/app/profile/components/UserActivity";

const OtherProfile = () => {
  return (
    <div>
      <div className="px-6 pb-6 border-b-4 border-neutral-3">
        <Profile isMyProfile={false} />
      </div>
      <UserActivity />
    </div>
  );
};

export default OtherProfile;
