import React, { Suspense, lazy, useRef, useState, useEffect, memo } from 'react'

// ─── ABOVE-THE-FOLD: Load immediately (critical path) ───────────────────────
import ImageSliderBanner from "./Banner/ImageSliderBanner "
import WelcomeToYogalayaa from "./HomeCredentials/WelcomeToYogalayaa"
import Yogaschool from "./Yogaschool"
import GuruLineage from './HomeCredentials/GuruLineage'

// ─── BELOW-THE-FOLD: Lazy load (code-split) ──────────────────────────────────
const WhyChooseLazy    = lazy(() => import("./HomeCredentials/WhyChoose"))
const AyurvedaLazy     = lazy(() => import("./Ayurveda"))
const OfferingLazy     = lazy(() => import("./Offering"))
const ServicessLazy    = lazy(() => import("./Services/Servicess"))
const BannerImageLazy  = lazy(() => import("./HomeCredentials/BannerImage"))
const YogaTeachersLazy = lazy(() => import("./Teachers/YogaTeachers"))
const ScheduleLazy     = lazy(() => import("./Teachers/Schedule"))
const BlogLazy         = lazy(() => import("./Blog/Blog"))
const GalleryLazy      = lazy(() => import("./HomeCredentials/Gallery"))
const UtubeLazy        = lazy(() => import("./Utube"))
const AccordionLazy    = lazy(() => import("./Accordion"))
const RatingsLazy      = lazy(() => import("./Ratings"))
const ContactLazy      = lazy(() => import("./Contact"))

// ─── Static skeleton placeholder (avoids CLS / layout shift) ─────────────────
const SectionSkeleton = memo(({ height = 'h-32' }) => (
  <div
    className={`w-full ${height} bg-gray-100`}
    aria-hidden="true"
    style={{ contain: 'layout paint' }}
  />
))
SectionSkeleton.displayName = 'SectionSkeleton'

// ─── IntersectionObserver hook ────────────────────────────────────────────────
// Fires only once when the element enters the viewport + rootMargin buffer.
// rootMargin="300px" means the chunk starts downloading 300px BEFORE the
// section scrolls into view — so the user never sees a spinner.
function useInView(rootMargin = '300px 0px') {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (inView) return
    const el = ref.current
    if (!el) return

    if (!('IntersectionObserver' in window)) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [inView, rootMargin])

  return [ref, inView]
}

// ─── LazySection wrapper ──────────────────────────────────────────────────────
// Does NOT mount Suspense (or start fetching the chunk) until the user
// scrolls near the section. Each section has its own Suspense boundary so
// one slow chunk never blocks adjacent sections.
const LazySection = memo(({ children, skeletonHeight = 'h-32', rootMargin = '300px 0px' }) => {
  const [ref, inView] = useInView(rootMargin)

  return (
    <div ref={ref} style={{ minHeight: 1 }}>
      {inView ? (
        <Suspense fallback={<SectionSkeleton height={skeletonHeight} />}>
          {children}
        </Suspense>
      ) : (
        <SectionSkeleton height={skeletonHeight} />
      )}
    </div>
  )
})
LazySection.displayName = 'LazySection'

// ─── Home ─────────────────────────────────────────────────────────────────────
const Home = () => {
  return (
    <>
      {/* Critical path — rendered immediately, no lazy boundary */}
      <ImageSliderBanner />
      <WelcomeToYogalayaa />
      <Yogaschool />

      {/* Each section loads independently when near the viewport */}

      <LazySection skeletonHeight="h-64" rootMargin="400px 0px">
        <WhyChooseLazy />
      </LazySection>

      <LazySection skeletonHeight="h-64" rootMargin="350px 0px">
        <AyurvedaLazy />
      </LazySection>

      <LazySection skeletonHeight="h-64" rootMargin="350px 0px">
        <OfferingLazy />
      </LazySection>

      <LazySection skeletonHeight="h-96" rootMargin="350px 0px">
        <ServicessLazy />
      </LazySection>

      <LazySection skeletonHeight="h-64" rootMargin="300px 0px">
        <BannerImageLazy />
      </LazySection>

      <LazySection skeletonHeight="h-96" rootMargin="300px 0px">
        <YogaTeachersLazy />
      </LazySection>

      {/* GuruLineage — statically imported, no lazy wrapper needed */}
      <GuruLineage />

      <LazySection skeletonHeight="h-64" rootMargin="300px 0px">
        <ScheduleLazy />
      </LazySection>

      <LazySection skeletonHeight="h-96" rootMargin="300px 0px">
        <BlogLazy />
      </LazySection>

      <LazySection skeletonHeight="h-96" rootMargin="250px 0px">
        <GalleryLazy />
      </LazySection>

      <LazySection skeletonHeight="h-64" rootMargin="250px 0px">
        <UtubeLazy />
      </LazySection>

      <LazySection skeletonHeight="h-48" rootMargin="200px 0px">
        <AccordionLazy />
      </LazySection>

      <LazySection skeletonHeight="h-48" rootMargin="200px 0px">
        <RatingsLazy />
      </LazySection>

      <LazySection skeletonHeight="h-64" rootMargin="150px 0px">
        <ContactLazy />
      </LazySection>
    </>
  )
}

export default Home