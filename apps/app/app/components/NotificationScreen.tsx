import React from 'react';
import Image from "next/image";
import ProfileImage from "@/app/assets/images/profile.svg"
const NotificationScreen = () => {
    return (
        <div className="flex gap-4">
            <Image src={ProfileImage} alt=""/>
            <div>
                <div><span className="font-bold ">Mee Mee</span> follows you</div>
                <div className="text-sm text-grey-1">30m</div>
            </div>
        </div>
    );
};

export default NotificationScreen;