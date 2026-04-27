import React, { Suspense, lazy } from 'react'
import Training200 from './Training200'
import HouseOfYoga from './HouseOfYoga'
import a from '../../../images/Background.jpg'
import daily from '../../../images/Gallery/Daily_Schedule_100_200_300.jpg'

// Standard Lazy Loading (No spaces in paths!)
const YogaTrainingPromo = lazy(() => import('./YogaTrainingPromo '))
const Transformation = lazy(() => import('./Transformation'))
const TransTeach = lazy(() => import('./TransTeach'))
const YogaCoursesPage = lazy(() => import('./YogaCoursesPage '))
const DailySchedulePage = lazy(() => import('./DailySchedulePage '))
const Accordion = lazy(() => import('../../Accordion'))
const Contact = lazy(() => import('../../Contact'))
const Gallery = lazy(() => import('../../HomeCredentials/Gallery'))
const YogaTeachers = lazy(() => import('../../Teachers/YogaTeachers'))
const Ratings = lazy(() => import('../../Ratings'))

const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
    <span className="ml-3 text-gray-600 text-sm">Loading...</span>
  </div>
)

function Service100() {
  return (
    <>
      <Training200 />
      <HouseOfYoga backgroundImage={a} />
      
      <Suspense fallback={<LoadingSpinner />}>
        <YogaTrainingPromo />
        <Transformation backgroundImage={a} />
        <TransTeach />
        <YogaCoursesPage />
        <DailySchedulePage scheduleImage={daily} />
        <Gallery />
        <YogaTeachers />
        <Accordion />
        <Ratings />
        <Contact />
      </Suspense>
    </>
  )
}

export default Service100