// Home.jsx

import React, { Suspense, lazy } from "react";
import { useInView } from "react-intersection-observer";

// ==========================
// ABOVE THE FOLD COMPONENTS
// ==========================
import ImageSliderBanner from "./Banner/ImageSliderBanner ";
import WelcomeToYogalayaa from "./HomeCredentials/WelcomeToYogalayaa";
import Yogaschool from "./Yogaschool";
import WhyChoose from "./HomeCredentials/WhyChoose";

// ==========================
// LAZY LOADED COMPONENTS
// ==========================
const AyurvedaLazy = lazy(() => import("./Ayurveda"));

const OfferingLazy = lazy(() => import("./Offering"));

const ServicessLazy = lazy(() =>
  import("./Services/Servicess")
);

const BannerImageLazy = lazy(() =>
  import("./HomeCredentials/BannerImage")
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

// ==========================
// LIGHTWEIGHT LOADER
// ==========================
const SectionLoader = () => (
  <div className="section-loader">
    <div className="spinner"></div>

    <style jsx="true">{`
      .section-loader {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 60px 0;
      }

      .spinner {
        width: 34px;
        height: 34px;
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

// ==========================
// INTERSECTION OBSERVER
// ==========================
const LazySection = ({ Component }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "800px",
  });

  return (
    <section ref={ref}>
      {inView && (
        <Suspense fallback={<SectionLoader />}>
          <Component />
        </Suspense>
      )}
    </section>
  );
};

// ==========================
// HOME COMPONENT
// ==========================
const Home = () => {
  return (
    <>
      {/* ==========================
          ABOVE THE FOLD
      ========================== */}

      <ImageSliderBanner />

      <WelcomeToYogalayaa />

      <Yogaschool />

      <WhyChoose />

      {/* ==========================
          BELOW THE FOLD
      ========================== */}

      <LazySection Component={AyurvedaLazy} />

      <LazySection Component={OfferingLazy} />

      <LazySection Component={ServicessLazy} />

      <LazySection Component={BannerImageLazy} />

      <LazySection Component={YogaTeachersLazy} />

      <LazySection Component={GuruLineageLazy} />

      <LazySection Component={ScheduleLazy} />

      <LazySection Component={BlogLazy} />

      <LazySection Component={GalleryLazy} />

      <LazySection Component={UtubeLazy} />

      <LazySection Component={AccordionLazy} />

      <LazySection Component={RatingsLazy} />

      <LazySection Component={ContactLazy} />
    </>
  );
};

export default Home;