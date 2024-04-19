import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@breeze/ui";
import EventCard from "@/components/EventCard";

const SuggestedEvents = () => {
  return (
    <div>
      <h3 className="font-medium text-lg mb-4">Suggested events For You</h3>
      <Carousel>
        <CarouselContent className="w-full">
          <CarouselItem className="basis-4/5">
            <EventCard />
          </CarouselItem>
          <CarouselItem className="basis-4/5">
            <EventCard />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default SuggestedEvents;
