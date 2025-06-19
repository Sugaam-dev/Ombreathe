import React, { Suspense, lazy } from 'react'

// Critical above-the-fold components - load immediately
import ImageSliderBanner from "./Banner/ImageSliderBanner "
import WelcomeToYogalayaa from "./HomeCredentials/WelcomeToYogalayaa"
import Yogaschool from "./Yogaschool"

// Keep all original imports that aren't used (commented out code)
import Ayurveda from "./Ayurveda"

import Offering from "./Offering"
import Carousal from "./Carousal"
import Contact from "./Contact"
import Utube from "./Utube"
import Ratings from "./Ratings"

import Accordion from "./Accordion"

import Package1 from "./Package1"
import Package2 from "./Package2"


import AyurvedCarousel from "./AyurvedCarousel"

import WhyChoose from "./HomeCredentials/WhyChoose"
import YogaTeachers from "./Teachers/YogaTeachers"
import Servicess from "./Services/Servicess"
import Schedule from "./Teachers/Schedule"
import Blog from "./Blog/Blog"
import guru from '../images/sadguru.webp'
import BannerImage from "./HomeCredentials/BannerImage"
import Training200 from "./Services/Service1/Training200"
import HouseOfYoga from "./Services/Service1/HouseOfYoga"
import a from '../images/services/200.webp'
import YogaTrainingPromo from "./Services/Service1/YogaTrainingPromo "
import Transformation from "./Services/Service1/Transformation"
import TransTeach from "./Services/Service1/TransTeach"
import Service1 from "./Services/Service1/Service1"
import Gallery from "./HomeCredentials/Gallery"
import Navbar from './Header/Navbar'

// Lazy load only the components that are actually used
const WhyChooseLazy = lazy(() => import("./HomeCredentials/WhyChoose"))
const AyurvedaLazy = lazy(() => import("./Ayurveda"))
const OfferingLazy = lazy(() => import("./Offering"))
const ServicessLazy = lazy(() => import("./Services/Servicess"))
const BannerImageLazy = lazy(() => import("./HomeCredentials/BannerImage"))
const YogaTeachersLazy = lazy(() => import("./Teachers/YogaTeachers"))
const ScheduleLazy = lazy(() => import("./Teachers/Schedule"))
const BlogLazy = lazy(() => import("./Blog/Blog"))
const GalleryLazy = lazy(() => import("./HomeCredentials/Gallery"))
const UtubeLazy = lazy(() => import("./Utube"))
const AccordionLazy = lazy(() => import("./Accordion"))
const RatingsLazy = lazy(() => import("./Ratings"))
const ContactLazy = lazy(() => import("./Contact"))

// Loading component for sections
const SectionLoader = () => (
  <div className="flex justify-center items-center py-8">
    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-orange-500"></div>
    <span className="ml-3 text-gray-600 text-sm">Loading...</span>
  </div>
)

const Home = () => {
  return ( 
    <>
      {/* Critical above-the-fold content - loads immediately */}
      <ImageSliderBanner/>
      <WelcomeToYogalayaa/>
      <Yogaschool/>

      {/* Lazy load sections as user scrolls */}
      <Suspense fallback={<SectionLoader />}>
        <WhyChooseLazy/>
        <AyurvedaLazy/>
        <OfferingLazy/>
        <ServicessLazy/>
        <BannerImageLazy/>
        <YogaTeachersLazy/>
        <ScheduleLazy/>
        <BlogLazy/>
        <GalleryLazy/>
        <UtubeLazy/>
        <AccordionLazy/>
        <RatingsLazy/>
        <ContactLazy/>
      </Suspense>

      {/* All your commented code preserved for reference:
      
      <YogaTrainingSection/>
      <Welcome/>
      <YogaTrainingSection/>
      <Package1/>
      <Package2/>
      <Service1/>
      <Training200/>
      <HouseOfYoga backgroundImage={a} />
      <YogaTrainingPromo/>
      <Transformation backgroundImage={a}/>
      <TransTeach/>
      <AyurvedCarousel/>
      <Ourservice/>
      <Kumbh/>
      <Bath/>
      <Carousal/>
      <KumbhAcomodation/>
      <Questions/>
      
      */}
    </>
  )
}
 
export default Home