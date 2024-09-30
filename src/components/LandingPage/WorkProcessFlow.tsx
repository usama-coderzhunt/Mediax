import {
  DirectingCurveArrowToRightBottom,
  DirectingCurveArrowToRightTop,
  wp_checkups,
  wp_getReport,
  wp_ongoingCare,
  wp_patientRegisteration
} from '@/assets'
import { formatNumber } from '@/lib/utils'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {}

type FlowStepType = {
  image: StaticImport
  title: string
  desc: string
}

const flowSteps: FlowStepType[] = [
  {
    image: wp_patientRegisteration,
    title: 'Patient Registration & Insurance Verification',
    desc: 'We begin by gathering patient details and verifying insurance coverage to ensure a smooth billing process from the start.'
  },
  {
    image: wp_checkups,
    title: 'Medical Coding & Claim Creation',
    desc: 'Our coders accurately assign medical codes to services, ensuring compliance and proper reimbursement.'
  },
  {
    image: wp_getReport,
    title: 'Claim Submission & Follow-ups',
    desc: 'We submit claims to insurance providers electronically and follow up regularly to ensure timely payments.'
  },
  {
    image: wp_ongoingCare,
    title: 'Denial Management & Payment Posting',
    desc: 'Denied claims are reviewed and reprocessed quickly to recover lost revenue and Payments received are posted accurately.'
  }
]

export const WorkProcessFlow = (props: Props) => {
  return (
    <div className='mt-14 w-full max-w-[1224px] grid grid-cols-1 gap-y-[80px] md:grid-cols-3 xl:grid-cols-7'>
      <FlowStep className='' count={1} {...flowSteps[0]} />
      <DirectingArrow className='hidden md:block' />
      <FlowStep count={2} {...flowSteps[1]} />
      <DirectingArrow className='hidden xl:block' direction='right' position='bottom' />
      <FlowStep count={3} {...flowSteps[2]} />
      <DirectingArrow className='hidden md:block' />
      <FlowStep count={4} {...flowSteps[3]} />
    </div>
  )
}

const FlowStep = ({
  image,
  count,
  title,
  desc,
  className
}: FlowStepType & { count: number; className?: HTMLAttributes<HTMLDivElement>['className'] }) => {
  return (
    <div
      className={twMerge(
        '[&_*]:text-center flex items-center justify-start flex-col w-full max-w-none xl:max-w-[248px] gap-7',
        className
      )}
    >
      <div
        className={twMerge(
          'rounded-full aspect-square relative h-[180px] w-[180px] flex__center border',
          count % 2 !== 0 && 'border-themePrimary',
          count % 2 === 0 && 'border-themeSecondary'
        )}
      >
        <div
          className={twMerge(
            'h-[60px] font-urbanist font_24_700 text-white rounded-full absolute top-0 right-0 aspect-square w-[60px] flex__center',
            count % 2 !== 0 && 'bg-themePrimary',
            count % 2 === 0 && 'bg-themeSecondary'
          )}
        >
          {formatNumber(count)}
        </div>
        <Image src={image} alt={title} height={106} width={106} />
      </div>
      <h6 className='font-urbanist font_20_700 text-titleColor'>{title}</h6>
      <p className='font-urbanist font_16_400 text-[#788094]'>{desc}</p>
    </div>
  )
}

const DirectingArrow = ({
  direction = 'right',
  position = 'top',
  className
}: {
  direction?: 'right'
  // direction?: 'left' | 'right'
  position?: 'top' | 'bottom'
  className?: HTMLAttributes<HTMLImageElement>['className']
}) => {
  return (
    <>
      {direction === 'right' && position === 'top' && (
        <Image
          className={twMerge('relative w-full h-auto top-[0rem]', className)}
          src={DirectingCurveArrowToRightTop}
          width={125}
          height={67}
          alt='directing arrow'
        />
      )}
      {direction === 'right' && position === 'bottom' && (
        <Image
          className={twMerge('relative w-full h-auto top-[3rem]', className)}
          src={DirectingCurveArrowToRightBottom}
          width={125}
          height={67}
          alt='directing arrow'
        />
      )}
    </>
  )
}
