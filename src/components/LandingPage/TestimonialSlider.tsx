import React, { ReactNode } from "react";
import {
  type CarouselItem,
  CustomCarousel,
} from "@/components/common/Carousel";
import Image from "next/image";
import {
  dummy_user,
  testimonial_quote,
  female_feedback,
  male_feedback,
} from "@/assets";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { FaRegStar, FaStar } from "react-icons/fa6";

type Props = {};

type StarCountType = 1 | 2 | 3 | 4 | 5;

interface TestimonialType {
  id: number;
  user: {
    image: string | StaticImport;
    name: string;
    profession: string;
  };
  review: {
    stars: StarCountType;
    description: string;
  };
}

const testimonials: TestimonialType[] = [
  {
    id: 1,
    user: {
      image: female_feedback,
      name: "Dr. Emily Johnson",
      profession: "Cardiologist",
    },
    review: {
      stars: 1,
      description: `"The team at mediax has completely transformed our medical billing process. Their expertise in denial management and claim submission has saved us time and significantly increased our revenue. We couldn't be happier!"`,
    },
  },
  {
    id: 2,
    user: {
      image: male_feedback,
      name: "Dr. Mark Thompson",
      profession: "Pediatrician",
    },
    review: {
      stars: 2,
      description: `"Since partnering with mediax, our billing has been seamless. Their professionalism and attention to detail are unmatched. I highly recommend their services to any medical practice looking to optimize their revenue cycle."`,
    },
  },
  {
    id: 3,
    user: {
      image: female_feedback,
      name: "Dr. Sarah Williams",
      profession: "Internal Medicine",
    },
    review: {
      stars: 3,
      description: `"The accuracy and efficiency of mediax's medical billing services have been a game-changer for our practice. Their team is knowledgeable and always available to help with any issues. We’ve seen a 20% increase in our revenue collection!"`,
    },
  },
  {
    id: 4,
    user: {
      image: male_feedback,
      name: "Dr. Michael Lee",
      profession: "Orthopedic Surgeon",
    },
    review: {
      stars: 4,
      description: `"Partnering with mediax has streamlined our billing process beyond what we expected. Their commitment to compliance and attention to detail means we can focus on patient care without worrying about our financials."`,
    },
  },
  {
    id: 5,
    user: {
      image: female_feedback,
      name: "Dr. Olivia Parker",
      profession: "Dermatologist",
    },
    review: {
      stars: 5,
      description: `"Our clinic has benefited immensely from mediax's customized billing solutions. They helped us reduce denied claims and improve cash flow. I highly recommend them to any medical provider."`,
    },
  },
];

export const TestimonialSlider = (props: Props) => {
  const items: CarouselItem[] = testimonials.map((testimonial) => ({
    id: testimonial.id,
    content: <Testimonial {...testimonial} />,
  }));
  return (
    <div className="mt-14">
      <CustomCarousel className="basis-full xl:basis-1/2" dots items={items} />
    </div>
  );
};

const Testimonial = ({
  review: { description, stars },
  user,
}: TestimonialType) => {
  return (
    <TestimonialWrapper>
      <StarsReview stars={stars} />
      <p className="font-urbanist font_16_400 text-[#788094]">{description}</p>
      <UserBox {...user} />
    </TestimonialWrapper>
  );
};

const TestimonialWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="rounded-[20px] bg-[#F5F7FA] gap-4 p-2 md:p-10 min-h-[285px] flex flex-col justify-between items-start relative">
      <Image
        className="absolute hidden md:block bottom-10 right-10"
        src={testimonial_quote}
        height={56}
        width={56}
        alt="quote"
      />
      <>{children}</>
    </div>
  );
};

const StarsReview = ({ stars }: { stars: StarCountType }) => {
  return (
    <div className="flex gap-1">
      {stars === 1 && (
        <>
          <FaStar className="text-[#FBA018]" />
          <FaRegStar className="text-[#FBA018]" />
          <FaRegStar className="text-[#FBA018]" />
          <FaRegStar className="text-[#FBA018]" />
          <FaRegStar className="text-[#FBA018]" />
        </>
      )}
      {stars === 2 && (
        <>
          <FaStar className="text-[#FBA018]" />
          <FaStar className="text-[#FBA018]" />
          <FaRegStar className="text-[#FBA018]" />
          <FaRegStar className="text-[#FBA018]" />
          <FaRegStar className="text-[#FBA018]" />
        </>
      )}
      {stars === 3 && (
        <>
          <FaStar className="text-[#FBA018]" />
          <FaStar className="text-[#FBA018]" />
          <FaStar className="text-[#FBA018]" />
          <FaRegStar className="text-[#FBA018]" />
          <FaRegStar className="text-[#FBA018]" />
        </>
      )}
      {stars === 4 && (
        <>
          <FaStar className="text-[#FBA018]" />
          <FaStar className="text-[#FBA018]" />
          <FaStar className="text-[#FBA018]" />
          <FaStar className="text-[#FBA018]" />
          <FaRegStar className="text-[#FBA018]" />
        </>
      )}
      {stars === 5 && (
        <>
          <FaStar className="text-[#FBA018]" />
          <FaStar className="text-[#FBA018]" />
          <FaStar className="text-[#FBA018]" />
          <FaStar className="text-[#FBA018]" />
          <FaStar className="text-[#FBA018]" />
        </>
      )}
    </div>
  );
};

const UserBox = ({ image, name, profession }: TestimonialType["user"]) => {
  return (
    <div className="flex gap-4 items-center">
      <Image
        className="h-14 w-14 object-cover rounded-[100%] aspect-square pointer-events-none"
        src={image}
        alt={name}
        height={56}
        width={56}
      />
      <div className="flex flex-col">
        <h5 className="font-urbanist font_20_700 text-titleColor">{name}</h5>
        <h6 className="font-urbanist font_14_400 text-[#788094]">
          {profession}
        </h6>
      </div>
    </div>
  );
};
