'use client'
import React from 'react';
import Image from "next/image";
import ProfileImage from "@/app/assets/images/profile.svg"
import CalendarIcon from "@/app/assets/icons/CalendarIcon";
import Clock from "@/app/assets/icons/Clock";
import LocationIcon from "@/app/assets/icons/LocationIcon";
import {
    Button,
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTrigger
} from "@breeze/ui";
import LeftArrow from "@/app/assets/icons/LeftArrow";
import {useToast} from "@breeze/ui";

const Page = () => {
    const {toast} = useToast()

    const handleDecline=()=>{
        toast({
            title:'Successfully Decline'
        })
    }
    return (
        <div className=" flex flex-col gap-10  h-screen " >
            <div className="px-6 flex items-center  py-2 border-b-4 ">
                <Button className="rounded-full w-8 h-8 p-1.5 bg-none">
                    <LeftArrow/>
                </Button>
                <span className="flex-1 text-center mr-5 text-lg font-bold">Invitation</span>
            </div>
            <div className="px-6 flex flex-col gap-10">
                <div className="flex flex-col items-center gap-4 justify-center ">
                    <div>Nandar</div>
                    <Image src={ProfileImage} alt='' width={70} height={70}/>
                    <div className="flex flex-col items-center gap-2">
                        <span>invites you to</span>
                        <span className="text-lg font-bold">808 Music Festival</span>
                    </div>

                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-4">
                        <CalendarIcon/>

                        <span>
                    Nov, 11 (Sunday), 2023
                </span>
                    </div>
                    <div className="flex gap-4">
                        <Clock/>
                        <span>
                    5 pm - 11 pm
                </span>
                    </div>
                    <div className="flex gap-4">
                        <LocationIcon/>
                        <span>The One Entertainment Park</span>
                    </div>


                </div>
            </div>

            <div className=" justify-center absolute bottom-0  gap-10 flex  w-full border-t-4 py-5 ">

                <Dialog >
                    <DialogTrigger asChild>
                        <Button className="w-36 bg-white text-blacks hover:bg-white active:bg-white ">Decline</Button>
                    </DialogTrigger>
                    <DialogContent className="w-80 rounded-xl">
                        <DialogHeader>
                            <DialogDescription className="font-bold text-black">
                                Are you sure to decline the invitation?
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter className="flex flex-row  justify-center gap-4">
                            <Button type="submit">Cancel</Button>
                            <DialogClose asChild>
                                <Button type="submit" onClick={handleDecline}>Yes,decline</Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                <Dialog >
                    <DialogTrigger asChild>
                        <Button className="w-36">Accept</Button>
                    </DialogTrigger>
                    <DialogContent className="w-80 rounded-xl">
                        <DialogHeader>
                            <DialogDescription className="font-bold text-black">
                                Are you sure to accept the invitation?
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter className="flex flex-row  justify-center gap-4">
                            <Button type="submit">Cancel</Button>
                            <Button type="submit" >Yes,accept</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>

        </div>
    );
};

export default Page;