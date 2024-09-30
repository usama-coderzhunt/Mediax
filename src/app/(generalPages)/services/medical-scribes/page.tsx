import { banner_medicalScribes } from "@/assets";
import { Button } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";
import { FaCircleCheck } from "react-icons/fa6";

type Props = {};

export default function page({}: Props) {
  return (
    <>
      <Image
        className="w-full h-auto rounded-[35px] overflow-hidden"
        src={banner_medicalScribes}
        height={450}
        width={792}
        alt="random image"
      />
      <h3 className="font-urbanist mt-10 font_36_700 text-titleColor">
        Medical Scribe Services
      </h3>
      <p className="mt-10 font-urbanist font_16_400 text-[#788094]">
        At Novacures, we provide professional Medical Scribe Services designed to
        improve healthcare providers&apos; efficiency by offloading the
        administrative burden of documentation. Our experienced medical scribes
        ensure that your practice maintains accurate and comprehensive patient
        records, allowing you to focus on what you do best—delivering quality
        care to your patients.
      </p>
      <h3 className="font-urbanist mt-10 font_36_700 text-titleColor">
        What is a Medical Scribe?
      </h3>
      <p className="mt-10 font-urbanist font_16_400 text-[#788094]">
        A medical scribe is a professional trained to assist healthcare
        providers by documenting patient visits in real-time, entering the
        necessary information into electronic health records (EHR) systems. This
        allows healthcare providers to dedicate more time to patient care and
        less time to paperwork, improving both the patient experience and the
        provider&apos;s workflow.
      </p>
      <h3 className="mt-[60px] font-urbanist font_36_700 text-titleColor">
        Our Approach
      </h3>
      <p className="mt-10 font-urbanist font_16_400 text-[#788094]">
        Our medical scribes are trained in medical terminology, coding, and
        healthcare workflows. They work alongside healthcare providers during
        patient visits, transcribing relevant details accurately into the EHR.
        Whether you need in-person or virtual scribe support, our services are
        tailored to meet the unique needs of your practice.
      </p>
      <h3 className="mt-[60px] font-urbanist font_36_700 text-titleColor">
        Why Choose Our Medical Scribe Service?
      </h3>
      <ul className="flex flex-col gap-[30px] mt-8">
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Highly Trained Scribes</span>&nbsp;
            <span>-</span>
            &nbsp;
            <span>
              Our medical scribes are well-versed in medical terminology and EHR
              systems, ensuring accurate and comprehensive documentation.
            </span>
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Customizable Solutions</span>&nbsp;
            <span>-</span>
            &nbsp;
            <span>
              Whether your practice needs in-person scribes or virtual support,
              we offer flexible solutions to fit your workflow.
            </span>
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Increased Provider Efficiency</span>
            &nbsp;<span>-</span>
            &nbsp;
            <span>
              By delegating documentation to our scribes, healthcare providers
              can see more patients and spend more time focusing on care,
              ultimately increasing efficiency and revenue.
            </span>
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Better Patient Interaction</span>&nbsp;
            <span>-</span>
            &nbsp;
            <span>
              With medical scribes handling the administrative tasks, healthcare
              providers can spend more time interacting with their patients,
              improving the overall patient experience.
            </span>
          </p>
        </li>
      </ul>
      <h3 className="mt-[60px] font-urbanist font_36_700 text-titleColor">
        Ready to Improve Your Practice’s Efficiency?
      </h3>
      <p className="mt-10 mb-5 font-urbanist font_16_400 text-[#788094]">
        If you&apos;re ready to streamline your documentation process and focus
        more on patient care, our Medical Scribe Services are here to help.
        Contact us today to learn more about how our scribes can transform your
        practice.
      </p>
      <Link href="/contact" className="!rounded-full">
        <Button className="h-14 font_14_400 px-10 rounded-full">
          Contact Us
        </Button>
      </Link>
    </>
  );
  return (
    <>
      {/* <Image
        className='w-full h-auto rounded-[35px] overflow-hidden'
        src={services_image01}
        height={450}
        width={792}
        alt='random image'
      />
      <h3 className='font-urbanist mt-10 font_36_700 text-titleColor'>What is Dental Care?</h3>
      <p className='mt-10 font-urbanist font_16_400 text-[#788094]'>
        From primary care and pediatrics to specialized services like dermatology, orthopedics, and
        women&apos;s health, we offer a wide spectrum of medical services under one roof. This means
        you can receive all the care you need conveniently in one location.
      </p>
      <p className='mt-10 font-urbanist font_16_400 text-[#788094]'>
        Your health and well-being are our top priorities. We take the time to listen to your
        concerns, answer your questions, and involve you in the decision-making process for your
        healthcare. We believe in empowering our patients to make informed choices about their
        health.
      </p>
      <h3 className='mt-[60px] font-urbanist font_36_700 text-titleColor'>Treatments</h3>
      <p className='mt-10 font-urbanist font_16_400 text-[#788094]'>
        Our team of skilled doctors, nurses, and specialists bring years of experience and expertise
        to ensure you receive the highest quality of care. We are dedicated to treating each patient
        with compassion.
      </p>
      <div className='mt-10 flex flex-wrap gap-10'>
        <Image
          className='flex-1 basis-[20rem] object-cover rounded-[35px] overflow-hidden'
          src={services_image02}
          height={300}
          width={370}
          alt='some image'
        />
        <div className='flex-1 basis-[20rem]'>
          <p className='mb-[30px] font-urbanist font_16_400 text-[#788094]'>
            Our team of skilled doctors, nurses, and specialists bring years of experience and
            expertise to ensure you receive the highest quality of care. We are dedicated to
            treating each patient.
          </p>
          <ul className='flex flex-col gap-[30px]'>
            <li className='font-urbanist font_16_400 text-[#788094] flex gap-[14px]'>
              <FaCircleCheck className='text-themePrimary aspect-square w-5 h-5 relative top-1' />
              <span className='flex-1'>
                Minimal sedation – you are awake but relaxed many years of experience
              </span>
            </li>
            <li className='font-urbanist font_16_400 text-[#788094] flex gap-[14px]'>
              <FaCircleCheck className='text-themePrimary aspect-square w-5 h-5 relative top-1' />
              <span className='flex-1'>
                Deep sedation – you are on the edge of consciousness but can still 24/7 care for
                mother and baby.
              </span>
            </li>
            <li className='font-urbanist font_16_400 text-[#788094] flex gap-[14px]'>
              <FaCircleCheck className='text-themePrimary aspect-square w-5 h-5 relative top-1' />
              <span className='flex-1'>The four levels of the healthcare system</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='mt-10 flex flex-wrap gap-10'>
        <div className='flex-1 basis-[20rem]'>
          <h3 className='font-urbanist font_36_700 text-titleColor'>Dental Family Plan</h3>
          <p className='mt-10 mb-[30px] font-urbanist font_16_400 text-[#788094]'>
            Our team of skilled doctors, nurses, and specialists bring years of experience and
            expertise to ensure you receive the highest quality of care.
          </p>
          <ul className='flex flex-col gap-[30px]'>
            <li className='font-urbanist font_16_400 text-[#788094] flex gap-[14px]'>
              <FaCircleCheck className='text-themePrimary aspect-square w-5 h-5 relative top-1' />
              <span className='flex-1'>General Consulting</span>
            </li>
            <li className='font-urbanist font_16_400 text-[#788094] flex gap-[14px]'>
              <FaCircleCheck className='text-themePrimary aspect-square w-5 h-5 relative top-1' />
              <span className='flex-1'>Construction Management</span>
            </li>
            <li className='font-urbanist font_16_400 text-[#788094] flex gap-[14px]'>
              <FaCircleCheck className='text-themePrimary aspect-square w-5 h-5 relative top-1' />
              <span className='flex-1'>Modeling & Algorithm</span>
            </li>
            <li className='font-urbanist font_16_400 text-[#788094] flex gap-[14px]'>
              <FaCircleCheck className='text-themePrimary aspect-square w-5 h-5 relative top-1' />
              <span className='flex-1'>Better Decision Making</span>
            </li>
            <li className='font-urbanist font_16_400 text-[#788094] flex gap-[14px]'>
              <FaCircleCheck className='text-themePrimary aspect-square w-5 h-5 relative top-1' />
              <span className='flex-1'>Professional Consulting Services</span>
            </li>
          </ul>
        </div>
        <div className='flex-1 basis-[20rem]'>
          <h3 className='font-urbanist font_36_700 text-titleColor'>Why Choose Us?</h3>
          <p className='mt-10 mb-[30px] font-urbanist font_16_400 text-[#788094]'>
            Our team of skilled doctors, nurses, and specialists bring years of experience and
            expertise to ensure you receive the highest quality of care.
          </p>
          <ul className='flex flex-col gap-[30px]'>
            <li className='font-urbanist font_16_400 text-[#788094] flex gap-[14px]'>
              <FaCircleCheck className='text-themePrimary aspect-square w-5 h-5 relative top-1' />
              <span className='flex-1'>General Consulting</span>
            </li>
            <li className='font-urbanist font_16_400 text-[#788094] flex gap-[14px]'>
              <FaCircleCheck className='text-themePrimary aspect-square w-5 h-5 relative top-1' />
              <span className='flex-1'>Construction Management</span>
            </li>
            <li className='font-urbanist font_16_400 text-[#788094] flex gap-[14px]'>
              <FaCircleCheck className='text-themePrimary aspect-square w-5 h-5 relative top-1' />
              <span className='flex-1'>Modeling & Algorithm</span>
            </li>
            <li className='font-urbanist font_16_400 text-[#788094] flex gap-[14px]'>
              <FaCircleCheck className='text-themePrimary aspect-square w-5 h-5 relative top-1' />
              <span className='flex-1'>Better Decision Making</span>
            </li>
            <li className='font-urbanist font_16_400 text-[#788094] flex gap-[14px]'>
              <FaCircleCheck className='text-themePrimary aspect-square w-5 h-5 relative top-1' />
              <span className='flex-1'>Professional Consulting Services</span>
            </li>
          </ul>
        </div>
      </div>
      <h3 className='mt-[60px] font-urbanist font_36_700 text-titleColor'>
        We are pleased to offer you the healthy.
      </h3>
      <p className='my-10 font-urbanist font_16_400 text-[#788094]'>
        There are many variations of passages of lorem Pilum but the majority. Monotonically seize
        vertical niche markets with global schemas. Completely streamline premier information
        through best-of-breed potentialities. Synergistically incubate team building synergy with
        B2C methods of empowerment. Uniquely matrix an proactively through web-enabled outsourcing.
      </p>
      <CustomAccordion
        className=''
        itemsClassName='shadow-cardShadow'
        type='single'
        items={accordionData}
      /> */}
    </>
  );
}
