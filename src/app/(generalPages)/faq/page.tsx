import { ServicesIcon } from '@/assets'
import { InputField, SectionTitle, SectionWrapper } from '@/components/common'
import { AccordionItemType, CustomAccordion } from '@/components/common/Accordion'
import { Appointments, Cta } from '@/components/LandingPage'
import { AllServices } from '@/components/Services'
import { Button } from '@/components/ui'
import { FaRegEnvelope, FaRegUser } from 'react-icons/fa6'
import { RiPencilLine } from 'react-icons/ri'

type Props = {}

const FaqAccordionItems: AccordionItemType[] = [
  {
    value: '01',
    trigger: '01. What services do you offer?',
    content: [
      [
        'content',
        'At [Your Company Name], we provide comprehensive medical billing solutions, patient scheduling, medical records management, and medical scribe services to help healthcare providers focus on patient care while we manage their administrative needs.'
      ]
    ]
  },
  {
    value: '02',
    trigger: '02. How do I schedule an appointment?',
    content: [
      [
        'content',
        'Scheduling an appointment with us is easy! You can schedule via our online patient portal, give us a call at [Phone Number], or send us an email at [Email Address].'
      ]
    ]
  },
  {
    value: '03',
    trigger: '03. What are your hours of operation?',
    content: [
      ['content', 'Our office is open:'],
      [
        'list',
        [
          ['content', 'Monday - Tuesday: 9am - 6pm'],
          ['content', 'Wednesday - Thursday: 8am - 5pm'],
          ['content', 'Friday: 7am - 10pm'],
          ['content', 'Saturday: 10am - 7pm'],
          ['content', 'Sunday: Closed']
        ]
      ]
    ]
  },
  {
    value: '04',
    trigger: '04. Do you accept walk-in patients?',
    content: [
      [
        'content',
        'While we prefer scheduled appointments for better service, we do accept walk-in patients based on availability. It’s always best to call ahead to check for open slots.'
      ]
    ]
  },
  {
    value: '05',
    trigger: '05. What should I bring to my appointment?',
    content: [
      [
        'content',
        'Please bring a valid ID, your insurance card, any referral documents, and a list of any medications you are currently taking.'
      ]
    ]
  },
  {
    value: '06',
    trigger: '06. Do you accept insurance?',
    content: [
      [
        'content',
        'Yes, we work with most major insurance providers. Please contact us to verify if your insurance is accepted or to get more information on your coverage.'
      ]
    ]
  },
  {
    value: '07',
    trigger: '07. What if I don’t have insurance?',
    content: [
      [
        'content',
        'No insurance? No problem! We offer flexible payment plans and financing options to ensure you still receive the care you need.'
      ]
    ]
  },
  {
    value: '08',
    trigger: '08. What safety measures are in place for COVID-19?',
    content: [
      [
        'content',
        'We prioritize patient safety and adhere to strict COVID-19 protocols, including mandatory mask policies, regular sanitization of facilities, and social distancing in waiting areas.'
      ]
    ]
  },
  {
    value: '09',
    trigger: '09. How long is the average wait time for appointments?',
    content: [
      [
        'content',
        'We aim to minimize waiting times, with most patients seen within 15-20 minutes of their scheduled appointment time. However, this may vary depending on the day’s schedule.'
      ]
    ]
  },
  {
    value: '10',
    trigger: '10. Can I request prescription refills or test results online?',
    content: [
      [
        'content',
        'Yes! You can request prescription refills or access test results through our secure patient portal. You’ll need to log in and follow the simple steps to submit your request.'
      ]
    ]
  },
  {
    value: '11',
    trigger: '11. Is there parking available at the clinic?',
    content: [
      [
        'content',
        'Yes, we have ample parking available for patients and visitors right outside our clinic.'
      ]
    ]
  }
]

const page = (props: Props) => {
  const dividerNumber: number = Math.ceil(FaqAccordionItems.length / 2)
  const firstHalfFaqItems: AccordionItemType[] = FaqAccordionItems.slice(0, dividerNumber)
  const secondHalfFaqItems: AccordionItemType[] = FaqAccordionItems.slice(dividerNumber)
  return (
    <SectionWrapper className='py-[60px]'>
      <div className='flex flex-col items-center'>
        <SectionTitle
          image={ServicesIcon}
          className='!mx-auto'
          title='Frequently Asked Questions'
          heading={{
            title: 'Get Every Single Answer You Need',
            className: 'w-full max-w-[34rem] !text-center'
          }}
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-[58px]'>
        <CustomAccordion
          className=''
          itemsClassName='bg-[#F5F7FA]'
          type='multiple'
          items={firstHalfFaqItems}
        />
        <CustomAccordion
          className=''
          itemsClassName='bg-[#F5F7FA]'
          type='multiple'
          items={secondHalfFaqItems}
        />
      </div>
      <div className='mt-[120px] mb-[50px] rounded-[30px] p-5 md:p-[60px] shadow-cardShadow'>
        <h2 className='font-urbanist font_48_700 text-center mt-[15px] mb-5 text-titleColor'>
          Have Any Other Questions?
        </h2>
        <p className='font-urbanist mx-auto max-w-[30rem] font_16_400 text-[#788094] mb-8 text-center'>
          If you have any more questions or need further clarification, feel free to reach out
          through the contact form
        </p>
        <form className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <InputField
            className='col-span-2 md:col-span-1 rounded-[30px] bg-[#F0F1F5]'
            inputClassName='rounded-[30px] border-none pl-6 pr-10 font-urbanist font_14_400'
            type='text'
            name='name'
            placeholder='Your Name'
            icon={
              <FaRegUser className='absolute top-[1.75rem] -translate-y-1/2 pointer-events-none opacity-50 right-6' />
            }
          />
          <InputField
            className='col-span-2 md:col-span-1 rounded-[30px] bg-[#F0F1F5]'
            inputClassName='rounded-[30px] border-none pl-6 pr-10 font-urbanist font_14_400'
            type='email'
            placeholder='Your Email'
            name='email'
            icon={
              <FaRegEnvelope className='absolute top-[1.75rem] -translate-y-1/2 pointer-events-none opacity-50 right-6' />
            }
          />
          <InputField
            className='col-span-2 rounded-[30px] bg-[#F0F1F5] h-[12rem]'
            textareaClassName='rounded-[30px] border-none pl-6 pr-10 font-urbanist font_14_400'
            type='text'
            placeholder='Write Message...'
            name='message'
            textarea
            icon={
              <RiPencilLine className='absolute top-[1.75rem] -translate-y-1/2 pointer-events-none opacity-50 right-6' />
            }
          />
          <Button
            className='rounded-[30px] col-span-2 uppercase font-dm_sans font_14_700 h-14 border border-themePrimary w-full hover:bg-white hover:text-themePrimary'
            type='submit'
            variant={'primary'}
          >
            submit now
          </Button>
        </form>
      </div>
    </SectionWrapper>
  )
}

export default page
