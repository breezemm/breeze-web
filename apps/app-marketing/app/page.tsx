'use client'

import React from 'react'
import HeroSection from './components/HeroSection'
import FeatCardsSection from './components/FeatCardsSection'
import {AppPreviewButton} from './components/AppPreviewButton'

const HomePage = () => {
  return (
    <main className='md:ps-36 md:pe-36 md:pb-[16.3rem] px-6 pb-40 '>
      <AppPreviewButton/>
      <HeroSection/>
      <FeatCardsSection/>
    </main>
  )
}

export default HomePage
