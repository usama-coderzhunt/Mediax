"use client";

import { DoctorWithTooth, ServicesBgVector, ServicesIcon } from "@/assets";
import { Button } from "@/components/ui";
import { services } from "@/constants/data";
import Image from "next/image";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { ServiceSlider } from "./ServiceSlider";
import Link from "next/link";
import {
  AnimatedCartoonImageBg,
  BackgroundCornerImage,
  SectionTitle,
} from "@/components/common";

type Props = {};

export const Services = (props: Props) => {
  const [currentCard, setCurrentCard] = useState<number>(1);

  const lastCard = services[services.length - 1].idx;

  const handlePrevService = () => setCurrentCard((prev) => prev - 1);
  const handleNextService = () => setCurrentCard((prev) => prev + 1);

  return (
    <div className="relative z-10">
      <section className="py-[70px] outerContainer">
        <BackgroundCornerImage
          position="top right"
          image={ServicesBgVector}
          alt="services background vector"
        />
        <AnimatedCartoonImageBg
          image={DoctorWithTooth}
          alt="doctor with tooth"
          position="bottom left"
          dimensions={{
            height: 176,
            width: 125,
          }}
        />
        <div className="relative z-20 innerContainer bg-transparent flex">
          <div className="flex flex-col mx-auto lg:mx-0">
            <SectionTitle image={ServicesIcon} title="Why Choose Us?" />
          </div>
          <div className="justify-center items-center hidden xl:flex ml-auto gap-[15px]">
            <Button
              className="h-14 w-14 bg-themePrimary border-themePrimary text-white disabled:text-titleColor disabled:border-outline disabled:bg-gray-200"
              variant="circularOutline"
              disabled={currentCard === 1}
              onClick={handlePrevService}
            >
              <FaArrowLeft />
            </Button>
            <Button
              className="h-14 w-14 bg-themePrimary border-themePrimary text-white disabled:text-titleColor disabled:border-outline disabled:bg-gray-200"
              variant="circularOutline"
              disabled={currentCard === lastCard}
              onClick={handleNextService}
            >
              <FaArrowRight />
            </Button>
          </div>
        </div>
        <ServiceSlider
          currentCard={currentCard}
          setCurrentCard={setCurrentCard}
        />
        {/* <p className='mt-[60px] bg-lightBluishGray innerContainer rounded-[30px] text-center py-[23px] font-urbanist font_14_400 w-full px-4'>
          Click any of the above services to learn more &nbsp;
          <Link className='font-dm_sans font_16_700 underline text-themeSecondary' href='/services'>
            View Our All Services
          </Link>
        </p> */}
      </section>
    </div>
  );
};
