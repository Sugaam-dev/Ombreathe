import React, { Suspense, lazy, useState, useEffect } from 'react'

// Critical above-the-fold components - load immediately
import Training200 from './Training200'
import HouseOfYoga from './HouseOfYoga'

// Non-critical components - lazy load for better performance
// Fixed import paths with correct spacing
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

// Loading component for better UX
const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-8">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    <span className="ml-3 text-gray-600">Loading...</span>
  </div>
)

// Section wrapper for better organization
const LazySection = ({ children, fallback = <LoadingSpinner /> }) => (
  <Suspense fallback={fallback}>
    {children}
  </Suspense>
)

function Service300() {
  // State for dynamic image loading
  const [backgroundImage, setBackgroundImage] = useState(null)
  const [dailyImage, setDailyImage] = useState(null)

  // Load images dynamically to improve initial load time
  useEffect(() => {
    const loadImages = async () => {
      try {
        const [bgImg, dailyImg] = await Promise.all([
          import('../../../images/services/200.webp'),
          import('../../../images/Gallery/Daily_Schedule_100_200_300.jpg')
        ])
        setBackgroundImage(bgImg.default)
        setDailyImage(dailyImg.default)
      } catch (error) {
        console.error('Error loading images:', error)
        // Fallback to direct imports if dynamic loading fails
        import('../../../images/services/200.webp').then(img => setBackgroundImage(img.default))
        import('../../../images/Gallery/16.jpg').then(img => setDailyImage(img.default))
      }
    }

    loadImages()
  }, [])

  return (
    <>
      {/* Critical above-the-fold content - loads immediately */}
      <Training200 />
      <HouseOfYoga backgroundImage={backgroundImage} />

      {/* First lazy-loaded section - loads when user scrolls */}
      <LazySection>
        <YogaTrainingPromo />
      </LazySection>

      <LazySection>
        <Transformation backgroundImage={backgroundImage} />
      </LazySection>

      <LazySection>
        <TransTeach />
      </LazySection>

      {/* Course and schedule sections */}
      <LazySection>
        <YogaCoursesPage />
      </LazySection>

      <LazySection>
        <DailySchedulePage scheduleImage={dailyImage} />
      </LazySection>

      {/* Visual content sections */}
      <LazySection>
        <Gallery />
      </LazySection>

      <LazySection>
        <YogaTeachers />
      </LazySection>

      {/* Interactive sections */}
      <LazySection>
        <Accordion />
      </LazySection>

      <LazySection>
        <Ratings />
      </LazySection>

      {/* Contact section - usually at bottom */}
      <LazySection>
        <Contact />
      </LazySection>
    </>
  )
}

export default React.memo(Service300)