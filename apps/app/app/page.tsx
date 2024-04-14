import Image from "next/image";
import FeedScreen from "@/app/components/FeedScreen";
import React from "react";
import {env} from "@/env";

export default function Home() {
    return (
        <div className="flex md:justify-center ">
            {env.NEXT_PUBLIC_BREEZE_API_URL}
            <FeedScreen/>
            <div>hey</div>
        </div>
    );
}
