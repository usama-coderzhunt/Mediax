import React from "react";
import { SectionWrapper } from "@/components/common";
import Image from "next/image";
import {
  customercare,
  doctor_vector,
  HeroBg,
  HeroBgCutter,
  painless_treetment,
  top_dental_treetment,
} from "@/assets";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Button } from "../ui";
import Link from "next/link";

type Props = {};

interface Feature {
  icon: string | StaticImport;
  title: string;
  desc: string;
}

const data: Feature[] = [
  {
    icon: doctor_vector,
    title: "Experienced Billing Specialists",
    desc: "Our team of certified professionals ensures all billing and coding tasks are handled with precision and expertise",
  },
  {
    icon: painless_treetment,
    title: "Efficient and Error-Free Processing",
    desc: "We prioritize efficiency, ensuring your claims are processed quickly and without errors, minimizing payment delays",
  },
  {
    icon: top_dental_treetment,
    title: "Advanced Billing Tools",
    desc: "We use the latest technology and software to streamline the entire billing process, ensuring accuracy and compliance",
  },
  {
    icon: customercare,
    title: "Ongoing Support",
    desc: "Our team is available round the clock to address your billing inquiries and support your practice’s financial health",
  },
];

export function HeroSection({}: Props) {
  return (
    <>
      <SectionWrapper
        className="h-[1560px] md:h-[1159px] z-[5] sm:p-[50px]"
        containerBgProps={
          <>
            <Image
              className="h-full w-full hidden lg:block absolute object-cover top-0 left-0 "
              src={HeroBg}
              height={1059}
              width={1820}
              alt="young female doctor smiling with dentures"
            />
          </>
        }
        outerContainerClassName="h-full rounded-[60px] flex bg-[#4290DA] lg:bg-transparent p-0 justify-end items-end 2xl:rounded-[60px_60px_0_60px] overflow-hidden"
        innerContainerClassName="flex w-full justify-end h-full !max-w-none items-end !mx-0"
      >
        <div className="absolute outerContainer inset-0 w-full h-full flex flex-col items-center justify-center 2xl:items-start">
          <div className="innerContainer flex flex-col relative 2xl:bottom-[8rem] items-start">
            <div className="max-w-[42rem] flex flex-col gap-10">
              <div className="flex items-center gap-5 px-4 py-[10px] rounded-full bg-hero-subtitle-gradient">
                <span className="uppercase font-outfit font_18_600 text-white">
                  professional
                </span>
                <span className="block w-[50px] border-t border-themePrimary"></span>
                <span className="uppercase font-outfit font_18_600 text-white">
                  Medical Billing
                </span>
              </div>
              <h1 className="text-white leading-[6rem] uppercase font-outfit font_64_700">
                best{" "}
                <p className="px-4 py-1 inline-block border-4 relative">
                  <span className="h-4 w-4 aspect-square bg-themePrimary hidden md:block absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"></span>
                  <span className="h-4 w-4 aspect-square bg-themePrimary hidden md:block absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"></span>
                  <span className="h-4 w-4 aspect-square bg-themePrimary hidden md:block absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2"></span>
                  <span className="h-4 w-4 aspect-square bg-themePrimary hidden md:block absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2"></span>
                  medical
                </p>{" "}
                billing service
              </h1>
              <p className="text-white">
                We aim to provide accurate, reliable, and timely billing
                solutions, ensuring healthcare providers can focus on patient
                care while we handle administrative tasks.
              </p>
              <div className="flex gap-[30px] flex-wrap">
                <a className="rounded-full inline" href="#services">
                  <Button
                    className="rounded-full uppercase px-10 h-14 font-dm_sans font_14_700"
                    variant="primary"
                  >
                    View all services
                  </Button>
                </a>
                <Link className="rounded-full inline" href="/contact">
                  <Button
                    className="rounded-full uppercase px-10 bg-transparent h-14 font-dm_sans font_14_700"
                    variant="outline"
                  >
                    contact us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white hidden px-[3rem] py-[5rem] min-h-[250px] grid-cols-1 md:grid-cols-2 w-full 2xl:flex 2xl:justify-between gap-4 2xl:items-start max-w-[1620px] 2xl:rounded-tl-[60px] relative top-0 left-0 border-0">
          <Image
            className="absolute bottom-0 hidden xl:block right-full"
            src={HeroBgCutter}
            height={81}
            width={81}
            alt="border radii"
          />
          <Image
            className="absolute bottom-full hidden xl:block right-0"
            src={HeroBgCutter}
            height={81}
            width={81}
            alt="border radii"
          />
          {data.map((element) => {
            return <Feature key={element.title} {...element} />;
          })}
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div className="bg-white px-[3rem] py-[5rem] min-h-[265px] grid 2xl:hidden grid-cols-1 md:grid-cols-2 w-full xl:justify-between gap-4 xl:items-center max-w-[1552px] relative top-0 left-0 border-0">
          {data.map((element) => {
            return <Feature key={element.title} {...element} />;
          })}
        </div>
      </SectionWrapper>
    </>
  );
}

const Feature = ({ icon, title, desc }: Feature) => {
  return (
    <div className="flex items-start max-w-[300px] gap-4">
      <Image
        className="relative top-2"
        src={icon}
        alt="title"
        height={60}
        width={60}
      />
      <div className="flex flex-col gap-2">
        <h4 className="font_24_700 text-titleColor">{title}</h4>
        <p className="font_18_400 text-[#788094]">{desc}</p>
      </div>
    </div>
  );
};
