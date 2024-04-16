import React from 'react';
import Image from "next/image";
import ProfileImage from "@/app/assets/images/profile.svg"
import TelegramIcon from "@/app/assets/icons/TelegramIcon";
import InstagramIcon from "@/app/assets/icons/InstagramIcon";
import TiktokIcon from "@/app/assets/icons/TiktokIcon";
import {Button} from "@breeze/ui";
import EventPost from "@/components/EventPost";
const FollowerProfile = () => {
    return (
        <div>
            <div className="flex gap-8 px-6 justify-center flex-col border-b-4 pb-6">
                <div className="flex gap-8 w-full items-center">
                    <div>
                        <Image src={ProfileImage} width={70} height={70} alt=''/>
                    </div>
                    <div className="flex flex-1 justify-between ">
                        <div className="flex flex-col items-center">
                            <span className="font-semibold">24</span>
                            <span>events</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="font-semibold">168</span>
                            <span>followers</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="font-semibold">83</span>
                            <span>following</span>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <span>Yes,and?</span>
                    <div className="flex gap-6">
                        <TelegramIcon/>
                        <InstagramIcon/>
                        <TiktokIcon/>
                    </div>
                </div>
                <div>
                    <Button className="bg-followButtonBackground">Follow back</Button>
                </div>

            </div>
            <EventPost/>
        </div>
    );
};

export default FollowerProfile;