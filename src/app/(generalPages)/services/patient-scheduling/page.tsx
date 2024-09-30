import { banner_patientScheduling } from "@/assets";
// import { AccordionItemType } from '@/components/common/Accordion'
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
        src={banner_patientScheduling}
        height={450}
        width={792}
        alt="random image"
      />
      <h3 className="font-urbanist mt-10 font_36_700 text-titleColor">
        Patient Scheduling & Registration
      </h3>
      <p className="mt-10 font-urbanist font_16_400 text-[#788094]">
        At Novacures, we understand that managing patient appointments efficiently
        is the backbone of any healthcare practice. Our Patient Scheduling &
        Registration service ensures that your practice can offer a seamless
        experience for both patients and staff, reducing wait times and
        improving the overall workflow.
      </p>
      <h3 className="font-urbanist mt-10 font_36_700 text-titleColor">
        What is Patient Scheduling & Registration?
      </h3>
      <p className="mt-10 font-urbanist font_16_400 text-[#788094]">
        Patient scheduling and registration is the process of booking
        appointments, collecting patient information, and ensuring all necessary
        documentation is completed prior to the visit. This crucial step ensures
        that both healthcare providers and patients are well-prepared for their
        appointments, resulting in smooth operations and improved patient
        satisfaction.
      </p>
      <h3 className="mt-[60px] font-urbanist font_36_700 text-titleColor">
        Our Approach
      </h3>
      <p className="mt-10 font-urbanist font_16_400 text-[#788094]">
        We take a proactive approach to patient scheduling and registration,
        combining cutting-edge technology with expert support to ensure all
        patient details are accurately captured. Our streamlined process reduces
        administrative workload, minimizes errors, and ensures that your staff
        can focus on delivering quality care to patients.
      </p>
      <h3 className="mt-[60px] font-urbanist font_36_700 text-titleColor">
        Key Features of Our Patient Scheduling Service
      </h3>
      <ul className="flex flex-col gap-[30px] mt-8">
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Automated Appointment Scheduling</span>
            &nbsp;<span>-</span>
            &nbsp;
            <span>
              Our system automates appointment scheduling, sending reminders to
              both patients and staff. This reduces missed appointments and
              optimizes scheduling efficiency.
            </span>
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Patient Portal Access</span>&nbsp;
            <span>-</span>&nbsp;
            <span>
              Patients can easily book and manage their appointments through our
              secure online portal. This self-service feature improves the
              patient experience and reduces calls to the front desk.
            </span>
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Real-Time Availability Updates</span>
            &nbsp;<span>-</span>
            &nbsp;Our system syncs with your practice&apos;s calendar, showing
            real-time availability, ensuring appointments are booked without
            conflicts.
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Data Accuracy and Integration</span>
            &nbsp;<span>-</span>
            &nbsp;All patient data, including medical history, insurance
            information, and demographics, are captured and stored securely.
            This ensures that your billing and insurance processes start on the
            right foot.
          </p>
        </li>
      </ul>
      <h3 className="mt-[60px] font-urbanist font_36_700 text-titleColor">
        Why Choose Our Patient Scheduling & Registration Service?
      </h3>
      <ul className="flex flex-col gap-[30px] mt-8">
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Increased Efficiency</span>&nbsp;
            <span>-</span>
            &nbsp;
            <span>
              Streamline your workflow by automating the scheduling process,
              allowing your staff to focus on more important tasks.
            </span>
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Improved Patient Satisfaction</span>
            &nbsp;<span>-</span>
            &nbsp;
            <span>
              With automated reminders and easy access to appointment
              management, your patients will enjoy a seamless experience from
              start to finish.
            </span>
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Reduction in No-Shows</span>&nbsp;
            <span>-</span>
            &nbsp;
            <span>
              Automated reminders and real-time scheduling updates help minimize
              no-shows, ensuring your practice runs smoothly.
            </span>
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Integrated System</span>&nbsp;
            <span>-</span>
            &nbsp;
            <span>
              Our scheduling system is integrated with patient registration and
              billing services, making sure that your financial and clinical
              workflows are connected.
            </span>
          </p>
        </li>
      </ul>
      <h3 className="mt-[60px] font-urbanist font_36_700 text-titleColor">
        The Process
      </h3>
      <ul className="flex flex-col gap-[30px] mt-8">
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Appointment Booking</span>&nbsp;
            <span>-</span>
            &nbsp;
            <span>
              Patients can schedule appointments through phone, email, or the
              patient portal. Our system syncs with your calendar to ensure
              availability.
            </span>
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Patient Data Collection</span>&nbsp;
            <span>-</span>
            &nbsp;
            <span>
              We collect patient information at the time of scheduling,
              including insurance details, medical history, and contact
              information, ensuring a smooth transition into the billing
              process.
            </span>
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Reminders & Follow-Ups</span>&nbsp;
            <span>-</span>
            &nbsp;
            <span>
              Automated reminders are sent to patients prior to their
              appointments, reducing the risk of missed appointments and
              last-minute cancellations.
            </span>
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Confirmation & Updates</span>&nbsp;
            <span>-</span>
            &nbsp;
            <span>
              Any changes or cancellations to the appointment are communicated
              to both patients and staff in real time, ensuring transparency and
              minimal disruptions.
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
            <span className="font-bold">Optimized Scheduling</span>
            <span>:</span>
            &nbsp;
            <span>
              Patients can schedule appointments through phone, email, or the
              patient portal. Our system syncs with your calendar to ensure
              availability.
            </span>
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Streamlined Administration</span>
            <span>:</span>
            &nbsp;
            <span>
              Reduce paperwork and manual scheduling tasks, freeing up your
              staff for other responsibilities.
            </span>
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Enhanced Data Accuracy</span>
            <span>:</span>
            &nbsp;
            <span>
              Ensure that all patient information is collected accurately during
              the scheduling phase, reducing errors during billing and
              treatment.
            </span>
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Increased Revenue</span>
            <span>:</span>
            &nbsp;
            <span>
              By reducing no-shows and optimizing appointment times, your
              practice can maintain a steady flow of patients and revenue.
            </span>
          </p>
        </li>
      </ul>
      <h3 className="mt-[60px] font-urbanist font_36_700 text-titleColor">
        Patient-Focused Features
      </h3>
      <ul className="flex flex-col gap-[30px] mt-8">
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Easy Online Scheduling</span>
            <span>:</span>
            &nbsp;
            <span>
              Patients can easily book, cancel, or reschedule appointments via
              the patient portal.
            </span>
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Automated Communication</span>
            <span>:</span>
            &nbsp;
            <span>
              Appointment confirmations and reminders are sent automatically,
              reducing staff follow-ups.
            </span>
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Mobile-Friendly</span>
            <span>:</span>
            &nbsp;
            <span>
              Patients can manage their appointments on the go, enhancing
              convenience and satisfaction.
            </span>
          </p>
        </li>
      </ul>
      {/* <div className='mt-10 flex flex-wrap gap-10'>
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
