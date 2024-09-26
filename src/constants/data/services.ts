import {
  CosmeticDentistry,
  es_bg_medicalBilling,
  es_bg_medicalRecords,
  es_bg_medicalScribes,
  es_bg_patientScheduling,
  es_dentalCare,
  es_internalMedicine,
  es_neurologyCare,
  es_urologyCare,
  OralSurgery,
  OrthodonticsService,
  PediatricDentistry,
  RootCanal,
} from "@/assets";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type Services = {
  idx: number;
  image: StaticImport;
  title: string;
  color: "blueishGray" | "brownishYellow" | "white";
  content: {
    desc: string;
    points?: string[];
  };
};

export interface ExtraService {
  title: string;
  doctorsCount: number;
  image: string | StaticImport;
  slug: string;
  background?: string | StaticImport;
}

export const services: Services[] = [
  {
    idx: 1,
    image: CosmeticDentistry,
    title: "Expert Team",
    color: "blueishGray",
    content: {
      desc: "Our team comprises certified of medical billing professionals with years of experience in various specialties, ensuring accurate and timely claim submissions.",
      // points: [
      //   'Many years of experience',
      //   '24/7 care for mother and baby',
      //   'Qualified team of professors',
      //   'Modern apparatus'
      // ]
    },
  },
  {
    idx: 2,
    image: OrthodonticsService,
    title: "Advanced Technology",
    color: "brownishYellow",
    content: {
      desc: "We use state-of-the-art billing software and tools that streamline the entire billing process, reduce errors, and increase revenue for healthcare providers.",
      // points: [
      //   'Many years of experience',
      //   '24/7 care for mother and baby',
      //   'Qualified team of professors',
      //   'Modern apparatus'
      // ]
    },
  },
  {
    idx: 3,
    image: OralSurgery,
    title: "Personalized Service",
    color: "white",
    content: {
      desc: "We tailor our billing services to fit the specific needs of your practice, offering customized solutions to optimize your revenue cycle.",
      // points: [
      //   'Many years of experience',
      //   '24/7 care for mother and baby',
      //   'Qualified team of professors',
      //   'Modern apparatus'
      // ]
    },
  },
  {
    idx: 4,
    image: RootCanal,
    title: "Proactive Denial Management",
    color: "blueishGray",
    content: {
      desc: "Our proactive approach to handling denied claims ensures they are reprocessed quickly, reducing the risk of revenue loss.",
      // points: [
      //   'Many years of experience',
      //   '24/7 care for mother and baby',
      //   'Qualified team of professors',
      //   'Modern apparatus'
      // ]
    },
  },
  {
    idx: 5,
    image: PediatricDentistry,
    title: "Compliance and Accuracy",
    color: "brownishYellow",
    content: {
      desc: "We stay up-to-date with the latest healthcare regulations and compliance standards to make sure your billing is accurate and compliant with industry standards.",
      // points: [
      //   'Many years of experience',
      //   '24/7 care for mother and baby',
      //   'Qualified team of professors',
      //   'Modern apparatus'
      // ]
    },
  },
];

export const extraServices: ExtraService[] = [
  {
    title: "Patient Scheduling",
    doctorsCount: 32,
    image: es_internalMedicine,
    slug: "patient-scheduling",
    background: es_bg_patientScheduling,
  },
  {
    title: "Medical Billing",
    doctorsCount: 22,
    image: es_dentalCare,
    slug: "medical-billing",
    background: es_bg_medicalBilling,
  },
  {
    title: "Medical Records",
    doctorsCount: 42,
    image: es_urologyCare,
    slug: "medical-records",
    background: es_bg_medicalRecords,
  },
  {
    title: "Medical Scribes",
    doctorsCount: 32,
    image: es_neurologyCare,
    slug: "medical-scribes",
    background: es_bg_medicalScribes,
  },
];
