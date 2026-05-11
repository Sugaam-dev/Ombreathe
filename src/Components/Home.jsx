import React, { Suspense, lazy } from 'react'

// Above-the-fold components (load immediately)
import ImageSliderBanner from "./Banner/ImageSliderBanner "
import WelcomeToYogalayaa from "./HomeCredentials/WelcomeToYogalayaa"
import Yogaschool from "./Yogaschool"

// Lazy-loaded components
const WhyChooseLazy = lazy(() => import("./HomeCredentials/WhyChoose"))
const AyurvedaLazy = lazy(() => import("./Ayurveda"))
const OfferingLazy = lazy(() => import("./Offering"))
const ServicessLazy = lazy(() => import("./Services/Servicess"))
const BannerImageLazy = lazy(() => import("./HomeCredentials/BannerImage"))
const YogaTeachersLazy = lazy(() => import("./Teachers/YogaTeachers"))
const GuruLineageLazy = lazy(() => import("./HomeCredentials/GuruLineage"))
const ScheduleLazy = lazy(() => import("./Teachers/Schedule"))
const BlogLazy = lazy(() => import("./Blog/Blog"))
const GalleryLazy = lazy(() => import("./HomeCredentials/Gallery"))
const UtubeLazy = lazy(() => import("./Utube"))
const AccordionLazy = lazy(() => import("./Accordion"))
const RatingsLazy = lazy(() => import("./Ratings"))
const ContactLazy = lazy(() => import("./Contact"))

const SectionLoader = () => (
  <div className="flex justify-center items-center py-10">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
  </div>
)

const Home = () => {
  return (
    <>
      {/* Above-the-fold */}
      <ImageSliderBanner />
      <WelcomeToYogalayaa />
      <Yogaschool />

      {/* Lazy-loaded sections */}
      <Suspense fallback={<SectionLoader />}>
        <WhyChooseLazy />
        <AyurvedaLazy />
        <OfferingLazy />
        <ServicessLazy />
        <BannerImageLazy />
        <YogaTeachersLazy />
        <GuruLineageLazy />
        <ScheduleLazy />
        <BlogLazy />
        <GalleryLazy />
        <UtubeLazy />
        <AccordionLazy />
        <RatingsLazy />
        <ContactLazy />
      </Suspense>
    </>
  )
}

export default Home