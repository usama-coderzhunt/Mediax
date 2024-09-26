import { AboutUsSection } from '@/components/AboutUs'
import { CommonFooter } from '@/components/Footers'
import { LandingPageHeader } from '@/components/Headers'
import {
  Appointments,
  Cta,
  ExtraServices,
  FAQs,
  HeroSection,
  Testimonials,
  WorkProcess
} from '@/components/LandingPage'
import { Services } from '@/components/Services'

export default function Home() {
  return (
    <>
      <LandingPageHeader />
      <HeroSection />
      <ExtraServices />
      <AboutUsSection />
      {/* <WhyChoseUs /> */}
      <Services />
      <WorkProcess />
      <Appointments currentPage='landingPage' />
      <Testimonials />
      <FAQs />
      <Cta currentPage='other' />
      {/* <Blogs /> */}
      <CommonFooter />
    </>
  )
}
