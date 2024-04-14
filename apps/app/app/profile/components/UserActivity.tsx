"use client";
import TimeLinePost from "@/app/components/TimeLinePost";
import { TimeLineProps } from "@/interfaces/TimeLineData";
import { Button } from "@breeze/ui";
import Link from "next/link";
import React, { useState } from "react";

const timelineData: TimeLineProps[] = [
  {
    id: 30,
    is_my_event: false,
    name: "Quas omnis est et provident.",
    start_date: "2015-04-29",
    start_time: "00:52:50",
    place: "Yangon",
    description:
      "Hatter: and in a great hurry to change the subject of conversation. While she was coming back to the heads of the hall: in fact she was holding, and she drew herself up and throw us, with the words.",
    is_has_phases: false,
    image: "",
    user: {
      id: 11,
      name: "Mr. Don Ferry I",
      username: "keeling.idell",
      profile_image: "",
      email: "vaughn.armstrong@example.com",
      date_of_birth: "2003-11-09",
      interests: [
        {
          id: 1,
          name: "Fun & Casual",
        },
        {
          id: 2,
          name: " Social & Networking",
        },
        {
          id: 3,
          name: " Weekend Getaway",
        },
      ],
      address: {
        city: "Yangon",
      },
      settings: {
        bio: "",
        social_links: {
          facebook: "",
          telegram: "",
          instagram: "",
          tiktok: "",
          snapchat: "",
          website: "",
        },
        language: "en",
      },
      has_followed: null,
    },
    phases: [],
    comments: [],
    likers_count: 0,
    comments_count: 0,
  },
];

const UserActivity = () => {
  const [hasActivity, SetHasActivity] = useState<boolean>(true);

  if (!hasActivity) {
    return (
      <div className="p-6 flex flex-col items-center justify-center gap-4">
        <div className="text-base font-normal  text-center">
          <p>You have no activity.</p>
          <p>Go out and join some events.</p>
        </div>
        <Button asChild>
          <Link href={"/search/today-events"}>Show me events</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      {timelineData.map((data: TimeLineProps) => {
        return <TimeLinePost key={data.id} data={data} />;
      })}
    </div>
  );
};

export default UserActivity;
