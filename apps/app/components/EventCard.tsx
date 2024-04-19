import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@breeze/ui";
import Image from "next/image";
import FeedImage from "@/app/assets/images/feedImage.jpg";

const EventCard = () => {
  return (
    <Card className="w-full md:w-[278px]">
      <CardHeader className="p-0">
        <Image src={FeedImage} className="w-full" alt="" />
      </CardHeader>

      <CardContent className="p-2">
        <p className="text-neutral-10 font-semibold">breeze PUBLIC Launch</p>
      </CardContent>

      <CardFooter className="flex justify-between ps-2 pe-2 pb-2">
        <p className="text-neutral-10">1 Mar (Tue)</p>
        <p className="text-neutral-10 font-semibold">FREE</p>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
