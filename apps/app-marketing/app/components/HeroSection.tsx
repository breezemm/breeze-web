import { eventCategories } from '@/data/eventCategories'
import CelebrateIcon from '@/icons/CelebrateIcon'
import MyanmarFlagIcon from '@/icons/MyanmarFlagIcon'
import SearchIcon from '@/icons/SearchIcon'
import React from 'react'
import { MdOutlineFileDownload } from 'react-icons/md'
import EventCategory from './EventCategory'
import {EventCategoryInterface} from "@/interfaces/EventCategory";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-2 gap-28 pb-64">
        <div className="col-span-full text-center lg:col-span-1">
          <div className="mb-16">
            <div className="mb-4 flex items-center justify-center gap-2">
              <SearchIcon />
              <h3 className="text-3xl font-bold">Find events</h3>
            </div>
            <h3 className="mb-4 text-3xl font-bold">or</h3>
            <div className="mb-4 flex items-center justify-center gap-2">
              <CelebrateIcon />
              <h3 className="text-3xl font-bold">Create events</h3>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="mb-4 text-3xl font-bold">Get your account in 3 mins !</h3>
            <p className="mb-4">Only in 3 mins. For Real. No Cap.</p>
          </div>
          <div className="relative mb-4">
            <a href="#" className="bg-primary text-neutral-1 block w-full rounded-md py-3 text-center">
              <div className="flex items-center justify-center gap-4 text-sm">
                <MdOutlineFileDownload size={20} />
                <p>Download App</p>
              </div>
            </a>
            <div className="bg-green-6 absolute -right-6 -top-3 rounded-full px-2 py-1">
              <p className="text-neutral-1 text-xs uppercase">100% free</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MyanmarFlagIcon />
            <p className="font-semibold">Proudly Made in Myanmar.</p>
          </div>
        </div>
        <div className="col-span-full grid grid-cols-3 gap-y-6 lg:col-span-1">
          {eventCategories.map((eventCategory: EventCategoryInterface) => {
            return <EventCategory key={eventCategory?.id} eventCategory={eventCategory} />
          })}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
