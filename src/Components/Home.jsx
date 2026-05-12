// Home.jsx

import React, { Suspense, lazy } from "react";

// ==========================================
// NORMAL IMPORTS (ABOVE THE FOLD)
// ==========================================
import ImageSliderBanner from "./Banner/ImageSliderBanner ";
import WelcomeToYogalayaa from "./HomeCredentials/WelcomeToYogalayaa";
import Yogaschool from "./Yogaschool";
import WhyChoose from "./HomeCredentials/WhyChoose";

// ==========================================
// LAZY LOADED COMPONENTS
// ==========================================
const AyurvedaLazy = lazy(() => import("./Ayurveda"));

const OfferingLazy = lazy(() => import("./Offering"));

// const ServicessLazy = lazy(() =>
//   import("./Services/Servicess")
// );

const BannerImageLazy = lazy(() =>
  import("./HomeCredentials/BannerImage")
);

const ProgramsCarouselLazy = lazy(() =>
  import("../ombYoga/pages/programsCard/ProgramsCarousel")
);

const YogaTeachersLazy = lazy(() =>
  import("./Teachers/YogaTeachers")
);

const GuruLineageLazy = lazy(() =>
  import("./HomeCredentials/GuruLineage")
);

const ScheduleLazy = lazy(() =>
  import("./Teachers/Schedule")
);

const BlogLazy = lazy(() => import("./Blog/Blog"));

const GalleryLazy = lazy(() =>
  import("./HomeCredentials/Gallery")
);

const UtubeLazy = lazy(() => import("./Utube"));

const AccordionLazy = lazy(() => import("./Accordion"));

const RatingsLazy = lazy(() => import("./Ratings"));

const ContactLazy = lazy(() => import("./Contact"));

// ==========================================
// LIGHTWEIGHT LOADER
// ==========================================
const SectionLoader = () => (
  <div className="section-loader">
    <div className="loader-spinner"></div>

    <style jsx="true">{`
      .section-loader {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 70px 0;
      }

      .loader-spinner {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 3px solid rgba(0, 0, 0, 0.08);
        border-top-color: #f97316;
        animation: spin 0.7s linear infinite;
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </div>
);

// ==========================================
// HOME COMPONENT
// ==========================================
const Home = () => {
  return (
    <>
      {/* ==========================================
          NORMAL TOP SECTIONS
      ========================================== */}

      <ImageSliderBanner />

      <WelcomeToYogalayaa />

      <Yogaschool />

      <WhyChoose />

      {/* ==========================================
          LAZY LOADED SECTIONS
      ========================================== */}

      <Suspense fallback={<SectionLoader />}>
        <AyurvedaLazy />

        <OfferingLazy />

        {/* <ServicessLazy /> */}

        <BannerImageLazy />

        <ProgramsCarouselLazy />

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
  );
};

export default Home;