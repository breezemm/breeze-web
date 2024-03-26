'use client'
import React from 'react'
import Link from 'next/link'
import DownloadButton from '@/components/DownloadButton'
import BreezeLogoIcon from '@/app/assets/BreezeLogoIcon'
import TimelineNavbar from "@/components/TimelineNavbar";
import {usePathname} from "next/navigation";

const NavBar = () => {
    const pathname:string = usePathname();
    return (
        <div
            className="flex  items-center sticky top-0 z-0  justify-between bg-white   ps-3.5 pe-6 py-4 md:py-6  md:pe-10 md:ps-7">
            <Link href="/">
                <BreezeLogoIcon className='md:w-20 md:h-20 w-16 h-16'/>
            </Link>
            {pathname === '/feed' && <TimelineNavbar/> }
            <DownloadButton/>
        </div>
    )
}

export default NavBar
