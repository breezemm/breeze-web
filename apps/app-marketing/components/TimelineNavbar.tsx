'use client'
import React from 'react'
import HomeIcon from '@/app/assets/icons/HomeIcon'
import SearchIcon from '@/app/assets/icons/SearchIcon'
import EventIcon from '@/app/assets/icons/EventIcon'
import NotificationIcon from '@/app/assets/icons/NotiIcon'
import UserProfileIcon from '../app/assets/icons/UserProfileIcon'
import DownloadDialogBox from "@/components/DownloadDialogBox";

const TimelineNavbar = () => {
  return (
    <DownloadDialogBox className="md:flex items-center justify-between ms-24 px-8 w-[380px]   hidden">
        <HomeIcon/>
        <SearchIcon/>
        <EventIcon/>
        <NotificationIcon/>
        <UserProfileIcon/>
    </DownloadDialogBox>


  )
}

export default TimelineNavbar
