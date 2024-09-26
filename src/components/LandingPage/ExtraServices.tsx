import {
  es_topLeftBg,
  ExtraServiceCardBg,
  ExtraServiceCardHoverBg,
  ExtraServicesAnimatedMedicine,
  ServicesIcon,
} from "@/assets";
import { Button } from "@/components/ui";
import { type ExtraService, extraServices } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatedCartoonImageBg,
  BackgroundCornerImage,
  SectionTitle,
} from "../common";

type Props = {};

export const ExtraServices = (props: Props) => {
  return (
    <div id="services" className="relative z-10 bg-[#F5F7FA]">
      <BackgroundCornerImage
        position="top left"
        image={es_topLeftBg}
        alt="extra services background vector"
      />
      <AnimatedCartoonImageBg
        image={ExtraServicesAnimatedMedicine}
        alt="Floating capsules"
        position="bottom left"
        dimensions={{
          height: 192,
          width: 105,
        }}
      />
      <div className="outerContainer pt-[128px] pb-[94px]">
        <div className="innerContainer">
          <SectionTitle image={ServicesIcon} title="Services" />
        </div>
        <div className="mt-[15px] innerContainer grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {extraServices.map((service) => {
            return <ServiceCard key={service.title} service={service} />;
          })}
        </div>
        {/* <div className='innerContainer flex__center mt-[60px]'>
          <div className='border-t border-[#D8DDE1] flex-1 h-0'></div>
          <p className='border border-[#D8DDE1] flex__center flex-wrap rounded-[100px] w-full min-h-10 text-center max-w-[460px] text-[#788094] font-dm_sans font_16_500'>
            You Get Our 20+ More services...&nbsp;
            <Link
              className='font-dm_sans inline font_16_700 underline text-themePrimary'
              href='/services'
            >
              Explore All Services
            </Link>
          </p>
          <div className='border-t border-[#D8DDE1] flex-1 h-0'></div>
        </div> */}
      </div>
    </div>
  );
};

export const ServiceCard = ({ service }: { service: ExtraService }) => {
  const { title, image, slug, doctorsCount, background } = service;
  // const doctorsCountRoundFigure =
  //   Math.trunc(doctorsCount / 10) * 10 + (doctorsCount % 10 > 0 ? "+" : "");
  return (
    <div className="bg-white group/card rounded-[20px] overflow-hidden relative shadow-cardShadow py-[30px] px-4 flex justify-between items-center flex-col h-[287px]">
      <Image
        className="absolute block group-hover/card:hidden z-10 bottom-0 left-1/2 object-cover h-[calc(120%)]"
        src={ExtraServiceCardBg}
        alt="card bg"
        width={520}
        height={382}
      />
      <div className="absolute hidden [&_*]:pointer-events-none pointer-events-none group-hover/card:block z-10 top-0 left-0 h-full w-full">
        <Image
          className="absolute top-0 left-0 h-[calc(130%)] w-full object-cover"
          src={background ?? ExtraServiceCardHoverBg}
          alt="card hover bg"
          width={520}
          height={382}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#000D44] opacity-80"></div>
      </div>

      <div className="flex__center relative rounded-full z-10 bg-[#E6E9EE] group-hover/card:bg-themePrimary h-[80px] w-[80px] aspect-square">
        <Image src={image} height={50} width={50} alt={title} />
      </div>
      <div className="flex__center flex-col z-10">
        <h4 className="font-urbanist font_24_700 group-hover/card:text-white">
          {title}
        </h4>
        {/* <p className="text-[#788094] font-urbanist font_14_400">
          {doctorsCountRoundFigure} Doctors
        </p> */}
      </div>
      <Link className="inline-block rounded-full" href={`/services/${slug}`}>
        <Button
          variant={"outline"}
          className="border-themePrimary rounded-[30px] z-10 group-hover/card:bg-themePrimary group-hover/card:text-white text-themePrimary uppercase font-dm_sans font_14_700 h-[46px] w-[151px] duration-0"
        >
          Read more
        </Button>
      </Link>
    </div>
  );
};
