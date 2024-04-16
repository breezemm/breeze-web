import Image from "next/image";
import ProfileImage from "@/app/assets/images/profile.svg";
import EventCard from "@/components/EventCard";
import ReactionBar from "@/components/ReactionBar";
import React from "react";
import Comment from "@/components/Comment";

const EventPost = () => {
  return (
    <div className="border-b-4">
      <div className="ml-18 text-sm pt-4">
        <span className="font-semibold ">Jonathan</span> commented on this.
      </div>
      <div className="flex items-start gap-2 px-6 py-4">
        <div className="mt-1">
          <Image src={ProfileImage} alt="profile image" />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <div>
              <span className="font-semibold">Star City Sport Club</span>
              <span> launched an event.</span>
            </div>
            <div className="text-grey-1">5m</div>
          </div>
          <div>
            <EventCard />
          </div>
          <ReactionBar isComment={false} />
        </div>
      </div>
      <div>
        <Comment />
      </div>
    </div>
  );
};

export default EventPost;
