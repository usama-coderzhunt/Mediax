import { faq_bg, faq_woman, faqs_pana, ServicesIconPrimary } from '@/assets'
import { SectionTitle, SectionWrapper } from '@/components/common'
import { AccordionItemType, CustomAccordion } from '@/components/common/Accordion'
import Image from 'next/image'

type Props = {}

const FaqAccordionItems: AccordionItemType[] = [
  {
    value: '01',
    trigger: '01. What services do you offer?',
    content: [
      [
        'content',
        `We provide comprehensive medical billing services, including insurance verification, claim submission, denial management, and revenue cycle optimization. Our team handles the entire billing process from start to finish, ensuring accurate and timely reimbursements.`
      ]
    ]
  },
  {
    value: '02',
    trigger: '02. How do I get started with your billing services?',
    content: [
      [
        'content',
        `You can easily get started by contacting us through our online form, phone, or email. Our team will guide you through the onboarding process and tailor our services to your practice's specific needs.`
      ]
    ]
  },
  {
    value: '03',
    trigger: '03. How do you ensure claims are processed efficiently?',
    content: [
      [
        'content',
        `Our team uses advanced billing software and follows a proactive approach to submitting and tracking claims. We ensure that all claims are processed accurately and address any denials promptly to recover lost revenue.`
      ]
    ]
  }
]

export const FAQs = (props: Props) => {
  return (
    <SectionWrapper
      className='overflow-hidden mb-16'
      innerContainerClassName='gap-[80px] flex gap-[80px] relative'
      bgProps={
        <>
          <Image
            className='absolute top-0 left-0 h-full w-full object-cover'
            src={faq_bg}
            height={1150}
            width={1920}
            alt='faq background'
          />
        </>
      }
    >
      <div className='flex-1 flex flex-col justify-center py-10 items-start'>
        <SectionTitle
          image={ServicesIconPrimary}
          title='faqs'
          heading={{
            title: 'Frequently Asked Have Any Question',
            className: 'text-white !text-left'
          }}
        />
        <div className='mt-14'>
          <CustomAccordion items={FaqAccordionItems} />
        </div>
      </div>
      <div className='pt-2 flex-1 justify-center items-end hidden xl:flex'>
        <Image
          className='h-full max-h-screen object-contain'
          src={faqs_pana}
          height={410}
          width={681}
          alt='black female doctor'
        />
      </div>
    </SectionWrapper>
  )
}
