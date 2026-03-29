import React, { Suspense, lazy } from 'react'
import Training200 from '../Retreats7/Training200'
import HouseOfYoga from '../Retreats7/HouseOfYoga'

// Lazy load non-critical components
const YogaTrainingPromo = lazy(() => import('../Retreats7/YogaTrainingPromo '))
const Transformation = lazy(() => import('../Retreats7/Transformation'))
const TransTeach = lazy(() => import('../Retreats7/TransTeach'))
const YogaCoursesPage = lazy(() => import('../Retreats7/YogaCoursesPage '))
const DailySchedulePage = lazy(() => import('../Retreats7/DailySchedulePage '))

// ✅ Shared components (one extra ../ because we're inside Services/ShortRetreats/)
const Accordion = lazy(() => import('../../Accordion'))
const Contact = lazy(() => import('../../Contact'))
const Gallery = lazy(() => import('../../HomeCredentials/Gallery'))
const YogaTeachers = lazy(() => import('../../Teachers/YogaTeachers'))
const Ratings = lazy(() => import('../../Ratings'))

function RetreatPage({ data }) {
  return (
    <>
      {/* Hero section - title, price, subtitle, location, what's included */}
      <Training200
        tagline={data.tagline}
        title={data.title}
        subtitle={data.subtitle}
        price={data.price}
        priceNote={data.priceNote}
        buttonText={data.buttonText}
        location={data.location}
        heroImage={data.heroImage}
        includedTitle={data.includedTitle}
        includedItems={data.includedItems}
        ratings={data.ratings}
        infoLines={data.infoLines}
        closingLine={data.closingLine}
      />

      {/* Parallax background section - stats + welcome text */}
      <HouseOfYoga
        backgroundImage={data.backgroundImage}
        brandName={data.brandName}
        houseTitle={data.houseTitle}
        houseSubtitle={data.houseSubtitle}
        stats={data.stats}
        welcomeTitle={data.welcomeTitle}
        welcomeLines={data.welcomeLines}
      />

      <Suspense fallback={<div>Loading...</div>}>

        {/* Features list + 3 images */}
        <YogaTrainingPromo
          sectionLabel={data.promoSectionLabel}
          promoHeading={data.promoHeading}
          features={data.promoFeatures}
          promoImages={data.promoImages}
        />

        {/* Fullscreen quote / highlight section */}
        <Transformation
          backgroundImage={data.backgroundImage}
          transformationText={data.transformationText}
          transformationSubtext={data.transformationSubtext}
        />

        {/* 3 image cards with hover */}
        <TransTeach
          mainHeading={data.transTeachHeading}
          mainSubtitle={data.transTeachSubtitle}
          experienceImages={data.experienceImages}
          specialFeatures={data.specialFeatures}
        />

        {/* Activity/curriculum cards grid */}
        <YogaCoursesPage
          heading={data.coursesHeading}
          subheading={data.coursesSubheading}
          courseDescription={data.courseDescription}
          activities={data.activities}
          dayBreakdown={data.dayBreakdown}
          packagePrice={data.price}
          packageIncludes={data.packageIncludes}
        />

        {/* Daily schedule + image */}
        <DailySchedulePage
          title={data.scheduleTitle}
          description={data.scheduleDescription}
          scheduleImage={data.scheduleImage}
          morningSchedule={data.morningSchedule}
          eveningSchedule={data.eveningSchedule}
          additionalInfoTitle={data.additionalInfoTitle}
          additionalInfoLines={data.additionalInfoLines}
        />

        <Gallery />
        <YogaTeachers />
        <Accordion />
        <Ratings />
        <Contact />
      </Suspense>
    </>
  )
}

export default RetreatPage
