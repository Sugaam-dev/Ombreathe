import React from 'react'

import HouseOfYoga from './HouseOfYoga'
import a from '../../../images/services/200.webp'
import YogaTrainingPromo from './YogaTrainingPromo '
import Transformation from './Transformation'
import TransTeach from './TransTeach'
import YogaCoursesPage from './YogaCoursesPage '
import DailySchedulePage from './DailySchedulePage '
import Accordion from '../../Accordion'
import Contact from '../../Contact'
import Gallery from '../../HomeCredentials/Gallery'
import YogaTeachers from '../../Teachers/YogaTeachers'
import Ratings from '../../Ratings'
import Training200 from './Training200'
function Retreats7Medi() {
  return (
    <>
    <Training200/>
      <HouseOfYoga backgroundImage={a}/>
      <YogaTrainingPromo/>
      <Transformation  backgroundImage={a}/>
      <TransTeach/>
      <YogaCoursesPage/>
      <DailySchedulePage />
      <Gallery/>
      <YogaTeachers/>
      <Accordion/>
      <Ratings/>
      <Contact/>
    </>
  )
}

export default Retreats7Medi
