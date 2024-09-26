import React from 'react'
import { SectionTitle, SectionWrapper } from '@/components/common'
import { ServicesIcon } from '@/assets'
import { WorkProcessFlow } from './WorkProcessFlow'

type Props = {}

export const WorkProcess = (props: Props) => {
  return (
    <SectionWrapper className='py-[120px]' innerContainerClassName='flex__center flex-col'>
      <SectionTitle
        className='mx-auto text-center'
        image={ServicesIcon}
        title='work process'
        heading={{
          title: 'How Our Billing Process Works',
          className: '!text-center'
        }}
      />
      <WorkProcessFlow />
    </SectionWrapper>
  )
}
