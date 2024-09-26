import { banner_medicalRecords } from "@/assets";
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
        src={banner_medicalRecords}
        height={450}
        width={792}
        alt="random image"
      />
      <h3 className="font-urbanist mt-10 font_36_700 text-titleColor">
        Medical Records Management Services
      </h3>
      <p className="mt-10 font-urbanist font_16_400 text-[#788094]">
        At Novacures, we offer comprehensive Medical Records Management solutions
        designed to streamline the documentation process, ensuring that
        healthcare providers can easily access, update, and manage patient
        records securely and efficiently. We help you maintain compliance with
        regulations while safeguarding sensitive information.
      </p>
      <h3 className="font-urbanist mt-10 font_36_700 text-titleColor">
        What is Medical Records Management?
      </h3>
      <p className="mt-10 font-urbanist font_16_400 text-[#788094]">
        Medical Records Management is the process of handling patient health
        information in a way that ensures accuracy, security, and accessibility.
        This involves the collection, storage, and management of patient data,
        including medical history, diagnoses, treatment plans, and more, all in
        a compliant and organized manner.
      </p>
      <h3 className="mt-[60px] font-urbanist font_36_700 text-titleColor">
        Our Approach
      </h3>
      <p className="mt-10 font-urbanist font_16_400 text-[#788094]">
        We understand that maintaining accurate and accessible medical records
        is critical to patient care and the financial health of your practice.
        Our advanced medical records management system ensures that patient
        information is securely stored, easily retrieved, and updated in
        real-time, allowing healthcare providers to focus on delivering
        excellent care.
      </p>
      <h3 className="mt-[60px] font-urbanist font_36_700 text-titleColor">
        Key Features of Our Medical Records Management Service
      </h3>
      <ul className="flex flex-col gap-[30px] mt-8">
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Secure Digital Storage</span>&nbsp;
            <span>-</span>
            &nbsp;
            <span>
              Our system ensures that all patient records are stored securely in
              a digital format, compliant with HIPAA and other healthcare
              regulations. This reduces the risk of data breaches and ensures
              patient confidentiality.
            </span>
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Real-Time Access</span>&nbsp;
            <span>-</span>&nbsp;
            <span>
              Authorized healthcare providers can access patient records in
              real-time, allowing them to review medical history, treatment
              plans, and other critical information quickly and easily.
            </span>
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Document Scanning and Indexing</span>
            &nbsp;<span>-</span>
            &nbsp;We convert paper records into digital formats through document
            scanning and indexing, making it easy to search and retrieve patient
            information without sifting through physical files.
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Data Encryption and Security</span>
            &nbsp;<span>-</span>
            &nbsp;Our platform uses advanced encryption protocols to protect
            patient data, ensuring that all records are safe from unauthorized
            access or cyber threats.
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">
              Compliance with Healthcare Regulations
            </span>
            &nbsp;
            <span>-</span>
            &nbsp;We ensure that your records management system adheres to
            industry standards, such as HIPAA, ensuring that your practice
            remains compliant and avoids costly penalties.
          </p>
        </li>
      </ul>
      <h3 className="mt-[60px] font-urbanist font_36_700 text-titleColor">
        Why Choose Our Medical Records Management Service?
      </h3>
      <ul className="flex flex-col gap-[30px] mt-8">
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Enhanced Patient Care</span>&nbsp;
            <span>-</span>
            &nbsp;
            <span>
              With immediate access to up-to-date patient information,
              healthcare providers can make informed decisions quickly,
              improving the quality of care.
            </span>
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Improved Efficiency</span>&nbsp;
            <span>-</span>
            &nbsp;
            <span>
              Our records management service reduces the administrative burden
              of handling paper files and manual updates. We streamline the
              process so your staff can focus on more critical tasks.
            </span>
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Better Compliance</span>&nbsp;
            <span>-</span>
            &nbsp;
            <span>
              Our system ensures that all patient records are stored and managed
              according to the latest regulatory standards, reducing the risk of
              audits or fines.
            </span>
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Disaster Recovery</span>&nbsp;
            <span>-</span>
            &nbsp;
            <span>
              Digital records are securely backed up, ensuring that patient
              information is protected in the event of a system failure or
              natural disaster.
            </span>
          </p>
        </li>
      </ul>
      <h3 className="mt-[60px] font-urbanist font_36_700 text-titleColor">
        The Medical Records Management Process
      </h3>
      <ul className="flex flex-col gap-[30px] mt-8">
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Initial Data Collection</span>&nbsp;
            <span>-</span>
            &nbsp;
            <span>
              We begin by collecting all patient records and converting paper
              documents into digital formats through scanning and indexing. All
              data is organized and stored securely in our system.
            </span>
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Secure Storage and Access</span>&nbsp;
            <span>-</span>
            &nbsp;
            <span>
              Patient records are stored securely in compliance with healthcare
              regulations. Authorized personnel can access records through a
              secure login, ensuring that patient confidentiality is maintained.
            </span>
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Real-Time Updates</span>&nbsp;
            <span>-</span>
            &nbsp;
            <span>
              Our system allows for real-time updates to patient records,
              ensuring that healthcare providers always have access to the most
              current information, from medical histories to recent lab results.
            </span>
          </p>
        </li>
        <li className="font-urbanist font_16_400 text-[#788094] flex gap-[14px]">
          <FaCircleCheck className="text-themePrimary aspect-square w-5 h-5 relative top-1" />
          <p className="flex-1">
            <span className="font-bold">Data Encryption and Protection</span>
            &nbsp;<span>-</span>
            &nbsp;
            <span>
              All medical records are encrypted and stored in a highly secure
              environment, ensuring that sensitive patient data is protected
              against unauthorized access and breaches.
            </span>
          </p>
        </li>
      </ul>
      <h3 className="mt-[60px] font-urbanist font_36_700 text-titleColor">
        Ready to Optimize Your Medical Records Management?
      </h3>
      <p className="mt-10 mb-5 font-urbanist font_16_400 text-[#788094]">
        Managing patient records has never been easier. Contact us today to
        learn more about how our Medical Records Management services can help
        your practice stay organized, compliant, and efficient.
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
