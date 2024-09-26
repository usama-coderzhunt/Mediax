import { SectionWrapper } from '@/components/common'
import React from 'react'

type Props = {}

const loading = (props: Props) => {
  return (
    <SectionWrapper className='py-[60px]'>
      <div className="min-h-[60vh] flex__center">
        <span>Loading...</span>
      </div>
    </SectionWrapper>
  )
}

export default loading