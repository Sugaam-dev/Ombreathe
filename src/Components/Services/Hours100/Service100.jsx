import React, { Suspense, lazy } from 'react'
import Training200 from './Training200'
import HouseOfYoga from './HouseOfYoga'
import a from '../../../images/services/200.webp'
import daily from '../../../images/Gallery/16.jpg'

// Lazy load everything except critical components
const RestOfPage = lazy(() => Promise.all([
  import('./YogaTrainingPromo '),
  import('./Transformation'),
  import('./TransTeach'),
  import('./YogaCoursesPage '),
  import('./DailySchedulePage '),
  import('../../Accordion'),
  import('../../Contact'),
  import('../../HomeCredentials/Gallery'),
  import('../../Teachers/YogaTeachers'),
  import('../../Ratings')
]).then(([YogaTrainingPromo, Transformation, TransTeach, YogaCoursesPage, DailySchedulePage, Accordion, Contact, Gallery, YogaTeachers, Ratings]) => ({
  default: () => (
    <>
      <YogaTrainingPromo.default/>
      <Transformation.default backgroundImage={a}/>
      <TransTeach.default/>
      <YogaCoursesPage.default/>
      <DailySchedulePage.default scheduleImage={daily} />
      <Gallery.default/>
      <YogaTeachers.default/>
      <Accordion.default/>
      <Ratings.default/>
      <Contact.default/>
    </>
  )
})))

function Service100() {
  return (
    <>
      <Training200/>
      <HouseOfYoga backgroundImage={a}/>
      <Suspense fallback={<div>Loading...</div>}>
        <RestOfPage />
      </Suspense>
    </>
  )
}

export default Service100