'use client'
import HeartIcon from "@/app/assets/icons/HeartIcon";
import MessageIcon from "@/app/assets/icons/MessageIcon";
import SaveIcon from "@/app/assets/icons/SaveIcon";
import React from "react";
import {usePathname, useRouter} from "next/navigation";



export default function ReactionBar({isComment}:{isComment:boolean}) {
    const router = useRouter()
    const pathname = usePathname()

    const handleComment=()=>{
        router.push('/comments')
    }
    return <div className="flex justify-between py-2">
        <div className="flex gap-10">
            <div className="flex gap-2">
                <HeartIcon/>
                <span>44</span>
            </div>
            <div onClick={handleComment}>
                <MessageIcon/>
            </div>
        </div>
        {
            !isComment && <div>
                <SaveIcon/>
            </div>
        }

    </div>;
}
