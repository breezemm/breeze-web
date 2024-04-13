import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@breeze/ui";
import Link from "next/link";
import { Pyae, Shoon, Htoo, Myat } from "@/app/assets/images";
import Image from "next/image";

const FriendsForYou = () => {
  return (
    <div>
      <div className="flex justify-between mb-6 ">
        <h3 className="font-medium text-lg">Friends For You</h3>
        <Link
          href={"/search/see-all-friends"}
          className="font-medium text-lg underline"
        >
          See all
        </Link>
      </div>
      <Carousel>
        <CarouselContent className="w-full gap-2 flex">
          <CarouselItem className="basis-1/5">
            <Link
              className="flex flex-col items-center gap-2 justify-center  "
              href={"/profile-pyae"}
            >
              <Image
                src={Pyae}
                alt={"Pyae Profile Image"}
                width={50}
                height={50}
              />
              <p className="text-base  ">Pyae</p>
            </Link>
          </CarouselItem>
          <CarouselItem className="basis-1/5">
            <Link
              className="flex flex-col items-center gap-2 justify-center  "
              href={"/profile-shoon"}
            >
              <Image
                src={Shoon}
                alt={"Shoon Profile Image"}
                width={50}
                height={50}
              />
              <p className="text-base  ">Pyae</p>
            </Link>
          </CarouselItem>
          <CarouselItem className="basis-1/5">
            <Link
              className="flex flex-col items-center gap-2 justify-center  "
              href={"/profile-htoo"}
            >
              <Image
                src={Htoo}
                alt={"Htoo Profile Image"}
                width={50}
                height={50}
              />
              <p className="text-base  ">Pyae</p>
            </Link>
          </CarouselItem>
          <CarouselItem className="basis-1/5">
            <Link
              className="flex flex-col items-center gap-2 justify-center  "
              href={"/profile-myat"}
            >
              <Image
                src={Myat}
                alt={"Myat Profile Image"}
                width={50}
                height={50}
              />
              <p className="text-base  ">Pyae</p>
            </Link>
          </CarouselItem>
          <CarouselItem className="basis-1/5">
            <Link
              className="flex flex-col items-center gap-2 justify-center  "
              href={"/profile-pyae"}
            >
              <Image
                src={Pyae}
                alt={"Pyae Profile Image"}
                width={50}
                height={50}
              />
              <p className="text-base  ">Pyae</p>
            </Link>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default FriendsForYou;
