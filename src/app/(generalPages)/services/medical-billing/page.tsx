import { banner_medicalBilling } from "@/assets";
// import { AccordionItemType, CustomAccordion } from '@/components/common/Accordion'
// import { extraServices } from '@/constants/data'
import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";

type Props = {};

// const accordionData: AccordionItemType[] = [
//   {
//     value: '01',
//     trigger: '01.What services does the clinic offer?',
//     content:
//       'Our clinic is strategically located for easy access, ensuring that you can reach us conveniently from various parts of the community. We also provide accessibility.'
//   },
//   {
//     value: '02',
//     trigger: '02.How do I schedule an appointment?',
//     content:
//       'Our clinic is strategically located for easy access, ensuring that you can reach us conveniently from various parts of the community. We also provide accessibility.'
//   },
//   {
//     value: '03',
//     trigger: "03.What are the clinic's hours of operation?",
//     content:
//       'Our clinic is strategically located for easy access, ensuring that you can reach us conveniently from various parts of the community. We also provide accessibility.'
//   },
//   {
//     value: '04',
//     trigger: "03.What are the clinic's hours of operation?",
//     content:
//       'Our clinic is strategically located for easy access, ensuring that you can reach us conveniently from various parts of the community. We also provide accessibility.'
//   },
//   {
//     value: '05',
//     trigger: "03.What are the clinic's hours of operation?",
//     content:
//       'Our clinic is strategically located for easy access, ensuring that you can reach us conveniently from various parts of the community. We also provide accessibility.'
//   },
//   {
//     value: '06',
//     trigger: "03.What are the clinic's hours of operation?",
//     content:
//       'Our clinic is strategically located for easy access, ensuring that you can reach us conveniently from various parts of the community. We also provide accessibility.'
//   }
// ]

export default function page({}: Props) {
  return (
    <>
      <Image
        className="w-full h-auto rounded-[35px] overflow-hidden"
        src={banner_medicalBilling}
        height={450}
        width={792}
        alt="random image"
      />
      <h3 className="font-urbanist mt-10 font_36_700 text-titleColor">
        Medical Billing Services
      </h3>
      <p className="mt-10 font-urbanist font_16_400 text-[#788094]">
        At Mediax, we specialize in providing comprehensive medical billing
        services that ensure accuracy, efficiency, and maximum reimbursements.
        Our team of certified billing experts works with healthcare providers to
        handle the entire billing process, from claim submission to payment
        posting, so you can focus on patient care while we handle your revenue
        cycle management.
      </p>
      <h3 className="font-urbanist mt-10 font_36_700 text-titleColor">
        What is Medical Billing?
      </h3>
      <p className="mt-10 font-urbanist font_16_400 text-[#788094]">
        Medical billing is the process of submitting and following up on claims
        with health insurance companies to receive payment for services provided
        by healthcare providers. It involves coding procedures and diagnoses,
        submitting claims, and ensuring that practices get reimbursed accurately
        and timely for their services.
      </p>
      <h3 className="mt-[60px] font-urbanist font_36_700 text-titleColor">
        Our Approach
      </h3>
      <p className="mt-10 font-urbanist font_16_400 text-[#788094]">
        We combine the latest technology with expert knowledge to streamline
        your medical billing process. Our goal is to reduce claim denials,
        minimize administrative burdens, and ensure that your practice receives
        the maximum reimbursement for services rendered.
      </p>
      <h3 className="mt-[60px] font-urbanist font_36_700 text-titleColor">
        Key Features of Our Medical Billing Service
      </h3>
      <ul className="flex flex-col gap-[30px] mt-8">
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Accurate Medical Coding</span>&nbsp;
            <span>-</span>
            &nbsp;
            <span>
              Our certified medical coders are experts in ICD-10, CPT, and HCPCS
              coding. We ensure that all procedures are coded accurately to
              avoid denials and delays in payments.
            </span>
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Claim Submission</span>&nbsp;
            <span>-</span>&nbsp;
            <span>
              We handle all claim submissions electronically to speed up the
              reimbursement process. Our team ensures that claims are submitted
              error-free, reducing the chances of rejection.
            </span>
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Denial Management</span>&nbsp;
            <span>-</span>
            &nbsp;In the event of a denied claim, we proactively manage the
            process by identifying the reasons for the denial, correcting
            errors, and resubmitting the claim to ensure you don&apos;t lose
            revenue.
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Payment Posting</span>&nbsp;
            <span>-</span>
            &nbsp;Once payments are received, we post them accurately to your
            system, ensuring that your accounts are updated, and any
            discrepancies are promptly addressed.
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">
              Accounts Receivable (A/R) Management
            </span>
            &nbsp;
            <span>-</span>
            &nbsp;Our team continuously monitors outstanding claims, follows up
            with insurance companies, and ensures that your practice maintains a
            healthy cash flow.
          </p>
        </li>
      </ul>
      <h3 className="mt-[60px] font-urbanist font_36_700 text-titleColor">
        Why Choose Our Medical Billing Service?
      </h3>
      <ul className="flex flex-col gap-[30px] mt-8">
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Expertise in All Specialties</span>
            &nbsp;<span>-</span>
            &nbsp;
            <span>
              Our team has experience working with healthcare providers in
              various specialties, from general practice to specialized fields
              such as cardiology, orthopedics, and more.
            </span>
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">
              Compliance with Industry Standards
            </span>
            &nbsp;
            <span>-</span>
            &nbsp;
            <span>
              We stay updated with the latest healthcare regulations, ensuring
              that your billing practices comply with federal and state laws,
              including HIPAA and Medicare.
            </span>
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Reduction in Denials</span>&nbsp;
            <span>-</span>
            &nbsp;
            <span>
              Our accurate coding and submission processes reduce the chances of
              claim denials, and our denial management services ensure that you
              recover lost revenue quickly.
            </span>
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Faster Payments</span>&nbsp;
            <span>-</span>
            &nbsp;
            <span>
              With electronic claim submissions and continuous follow-ups, our
              services help you receive payments faster and keep your revenue
              cycle moving.
            </span>
          </p>
        </li>
      </ul>
      <h3 className="mt-[60px] font-urbanist font_36_700 text-titleColor">
        The Medical Billing Process
      </h3>
      <ul className="flex flex-col gap-[30px] mt-8">
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Patient Registration</span>&nbsp;
            <span>-</span>
            &nbsp;
            <span>
              We start by collecting all necessary patient details, including
              insurance information and medical history, to ensure that all
              claims are based on accurate data.
            </span>
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Insurance Verification</span>&nbsp;
            <span>-</span>
            &nbsp;
            <span>
              Before any claim submission, we verify the patient’s insurance
              coverage to prevent denials due to ineligibility or incorrect
              coverage information.
            </span>
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Medical Coding & Charge Entry</span>
            &nbsp;<span>-</span>
            &nbsp;
            <span>
              Our certified coders assign the correct codes for the services
              provided, ensuring that claims reflect accurate treatments and
              diagnoses.
            </span>
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Claim Submission</span>&nbsp;
            <span>-</span>
            &nbsp;
            <span>
              We submit the claims electronically to insurance companies,
              following up promptly to ensure that they are processed without
              delays.
            </span>
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Payment Posting</span>&nbsp;
            <span>-</span>
            &nbsp;
            <span>
              Once payments are received from insurers, we post them to your
              accounts, ensuring that all revenue is accounted for and
              discrepancies are resolved.
            </span>
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Denial Management</span>&nbsp;
            <span>-</span>
            &nbsp;
            <span>
              If a claim is denied, our team investigates the cause, makes the
              necessary corrections, and resubmits the claim to recover the lost
              revenue.
            </span>
          </p>
        </li>
      </ul>
      <h3 className="mt-[60px] font-urbanist font_36_700 text-titleColor">
        Benefits for Your Practice
      </h3>
      <ul className="flex flex-col gap-[30px] mt-8">
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Maximized Revenue</span>
            <span>:</span>
            &nbsp;
            <span>
              With accurate coding and timely claim submission, you can ensure
              that your practice receives the maximum reimbursement for the
              services you provide.
            </span>
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Reduced Administrative Burden</span>
            <span>:</span>
            &nbsp;
            <span>
              Our team takes care of the entire billing process, reducing the
              time and effort your staff spends on managing claims and payments.
            </span>
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Improved Cash Flow</span>
            <span>:</span>
            &nbsp;
            <span>
              By minimizing denials and ensuring timely payments, we help keep
              your practice’s cash flow steady and predictable.
            </span>
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Compliance and Security</span>
            <span>:</span>
            &nbsp;
            <span>
              We ensure that your billing process is compliant with all
              healthcare regulations and that patient data is handled securely.
            </span>
          </p>
        </li>
      </ul>
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
