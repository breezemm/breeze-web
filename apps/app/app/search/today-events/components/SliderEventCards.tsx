"use client";
import React from "react";
import EventCard from "@/components/EventCard";
import { Carousel, CarouselContent, CarouselItem } from "@breeze/ui";

const SliderEventCards = () => {
  return (
    <Carousel className="z-10">
      <CarouselContent className="w-full">
        <CarouselItem className="basis-4/5">
          <EventCard />
        </CarouselItem>
        <CarouselItem className="basis-4/5">
          <EventCard />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default SliderEventCards;
