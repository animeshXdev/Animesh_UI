import { WobbleCardDemo } from '@/components/CardHover'
import { CompareDemo } from '@/components/Compare'
import { TypewriterEffectSmoothDemo } from '@/components/Hero'
import { HeroParallaxDemo } from '@/components/HeroParallel'
import { LensDemo } from '@/components/LensDemo'
import { StickyScrollRevealDemo } from '@/components/ParrallelScroll'
import { CardHoverEffectDemo } from '@/components/Projects'
import { BackgroundGradientDemo } from '@/components/shoeCard'
import { TabsDemo } from '@/components/TabsDemo'
import { MacbookScrollDemo } from '@/components/ui/About'
import { shoesData } from '@/data/shoes'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='h-screen hidden sm:block'>

        <TypewriterEffectSmoothDemo />
      </div>
      <div className=' mt-[-380px] sm:mt-[-200px] hidden sm:block'>
        <MacbookScrollDemo />

      </div>
      <div className='hidden sm:block h-screen'>
        <WobbleCardDemo />
      </div>
      <div className='  w-[90vw] mx-auto hidden sm:block '>
        <StickyScrollRevealDemo />
      </div>
      
        <div className=' sm:flex  justify-center flex-wrap gap-6  hidden '>
        {shoesData.map((val, index)=>{
          return <BackgroundGradientDemo val = {val}  key={ index} />
        })}
      </div>
      <div>
<HeroParallaxDemo />
      </div>
      {/* <div className=' sm:hidden'>
        <FeaturesSectionDemo />
      </div> */}
      <div>
        <CardHoverEffectDemo />
      </div>
      <div>
        <CompareDemo />
      </div>
      {/* <div>
        <WorldMapDemo />
      </div> */}
      <div>
        <TabsDemo />
      </div>
      <div>
        <LensDemo />
      </div>
      
    </>

  )
}

export default page