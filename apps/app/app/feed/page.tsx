'use client'
import EventPost from "@/components/EventPost";

const NewFeed = () => {
  return(
      <div className="flex justify-center flex-col  items-center" >
          <EventPost />
          <EventPost />
          <EventPost />
      </div>
  );
};

export default NewFeed;
