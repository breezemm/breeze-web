import React from 'react'
import {LuDownload} from 'react-icons/lu'

import {Dialog, DialogContent, DialogOverlay, DialogTrigger,} from "@breeze/ui"

import AppleStore from '@/app/assets/apple_store.svg'
import GoogleStore from '@/app/assets/google_store.svg'
import Image from 'next/image'

const DownloadButton = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div
          className="bg-neutral-9 font-semibold  items-center justify-center  text-neutral-1 hidden h-11 w-40 rounded-md  text-center  md:flex ">
          Download Free
        </div>
        <div className="bg-green-6 flex h-10 w-10 items-center justify-center rounded-md md:hidden">
          <LuDownload className="text-white"/>
        </div>
      </DialogTrigger>
      <DialogOverlay className='bg-overlaycolor  backdrop-blur-sm'/>

      <DialogContent  style={{borderRadius:'1rem'}} className='w-80  flex justify-center  flex-col items-center gap-12 p-16'>
        <div className='flex flex-col items-center gap-2'>
          <p className='text-lg font-bold text-neutral-10'>Download Now!</p>
          <p className='text-base'>Get an account for <span className='text-green-7 font-bold'>FREE</span>.</p>
        </div>
        <div className='flex flex-col items-center gap-4'>
          <Image src={AppleStore} alt='appleStore'/>
          <Image src={GoogleStore} alt='appleStore'/>
        </div>
      </DialogContent>

    </Dialog>

  )
}

export default DownloadButton
