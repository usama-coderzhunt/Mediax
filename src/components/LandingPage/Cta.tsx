import React from 'react'
import { SectionWrapper } from '@/components/common'
import Image from 'next/image'
import { cta_bg } from '@/assets'
import { Button } from '@/components/ui'
import { cn } from '@/lib/utils'
import Link from "next/link";

type Props = {
  currentPage?: 'landingPage' | 'other'
  className?: string
}

export function Cta({ currentPage = 'other', className }: Props) {
  return (
    <SectionWrapper
      className={cn('', className)}
      bgProps={
        currentPage === 'landingPage' && (
          <div className='absolute top-1/2 left-0 w-full h-full bg-[#F5F8FD] p-4'></div>
        )
      }
      outerContainerClassName={cn(currentPage === 'landingPage' ? '' : 'px-0')}
    >
      <div className='w-full rounded-[20px]  relative h-auto min-h-[422px]  overflow-hidden '>
        <Image
          className='object-cover  object-center absolute top-0 left-0 h-full w-full'
          src={cta_bg}
          height={417}
          width={626}
          alt='cta background image'
        />
        <div className='absolute bg-cta-gradient  top-0 left-0 h-full w-full'></div>
        <div className='absolute flex  flex-col h-full w-full gap-9 px-[61px] justify-center items-start'>
          <h2 className='font-urbanist font_48_700 text-white max-w-[45rem]'>
          We Are Pleased to Offer You Reliable Medical Billing Solutions
          </h2>
          
          <Link href={"/contact"}>
          <Button
            variant='secondary'
            className='rounded-full uppercase font-dm_sans font_14_700 h-14 w-[206px] cursor-pointer z-50'
          >
            contact us now
          </Button>
        </Link>
        </div>
      </div>
    </SectionWrapper>
  )
}
