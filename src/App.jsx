import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import Cont from './Components/Cont';
import Servicess from './Components/Services/Servicess';
import Layout from './Layout';
import Service1 from './Components/Services/Service1/Service1';
// import Service2 from './Components/Services/Hours500/Service2';
// import Service300 from './Components/Services/Hours300/Service300';
// import Service100 from './Components/Services/Hours100/Service100';
import Retreats7 from './Components/Services/Retreats7/Retreats7';
import Retreats7Medi from './Components/Services/Retreats7Med/Retreats7Medi';
import AboutUsPage from './Components/AboutUs/AboutUsPage';
import MembershipProgram from './Components/Services/Membership/MembershipProgram';
import shaktiSadhanaData from './Components/Services/Membership/data/shaktiSadhanaData';
import CardsMembership from './Components/Services/Membership/CardsMembership';
import shivShaktiSadhanaData from './Components/Services/Membership/data/shivShaktiSadhanaData';
import saptaRishiSadhanaData from './Components/Services/Membership/data/saptaRishiSadhanaData';
import pashuPatayaaData from './Components/Services/Membership/data/pashuPatayaaData';
import YogaTeachers from './Components/Teachers/YogaTeachers';
import OnlineYogaTeacherTraining from './Components/Services/OnlineCourse/OnlineYogaTeacherTraining';
// import QRDonationForm from './Components/Donation/QRDonationForm/QRDonationForm';
import UseGTMPageView from './Components/useFullComponent/UseGTMPageView ';
import MTService100 from './Components/Services/MT100Hours/MTService100';
import MTService300 from './Components/Services/MT300Hours/MTService300';
import MTService200 from './Components/Services/MT200Hours/MTService200';
import RetreatCards from './Components/Services/ShortRetreats/RetreatCards'
import mysuruCards from './Components/Services/ShortRetreats/data/mysuru/mysuruCards'
import baliCards from './Components/Services/ShortRetreats/data/bali/baliCards'
import rishikeshCards from './Components/Services/ShortRetreats/data/rishikesh/rishikeshCards'
import RetreatPage from './Components/Services/ShortRetreats/RetreatPage';
import singingBowlData from './Components/Services/ShortRetreats/data/mysuru/singingBowlData';
import wheelYogaData from './Components/Services/ShortRetreats/data/mysuru/wheelYogaData';
import yinYoga50hrData from './Components/Services/ShortRetreats/data/mysuru/yinYoga50hrMysuruData';
import aerialYoga50hrData from './Components/Services/ShortRetreats/data/mysuru/aerialYoga50hrMysuruData';
import baliYinYogaData from './Components/Services/ShortRetreats/data/bali/baliYinYogaData';
import baliAerialYogaData from './Components/Services/ShortRetreats/data/bali/baliAerialYogaData';
import acroYogaData from './Components/Services/ShortRetreats/data/bali/baliAcroYogaData';
import baliPrenatalData from './Components/Services/ShortRetreats/data/bali/baliPrenatalYogaData';
import rishikeshYinYogaData from './Components/Services/ShortRetreats/data/rishikesh/rishikeshYinYogaData';
import rishikeshAerialYogaData from './Components/Services/ShortRetreats/data/rishikesh/rishikeshAerialYogaData';
import rishikeshPrenatalData from './Components/Services/ShortRetreats/data/rishikesh/rishikeshPrenatalYogaData';
// import Service1000 from './Components/Services/Service100combined';
import OmbYogaPage from './ombYoga/pages/OmbYogaPage';
import LocationLandingPage from './ombYoga/pages/programsCard/LocationLandingPage';





function AppRoutes() {
  UseGTMPageView()

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUsPage />} />
        <Route path="contact" element={<Cont />} />
        <Route path="programs" element={<Servicess />} />
        <Route path="our-teachers-list" element={<YogaTeachers />} />
        {/* <Route path="/programs/Bali/200hr" element={<Service1 />} />
        <Route path="/programs/Bali/500hr" element={<Service2 />} />
        <Route path="/programs/Bali/300hr" element={<Service300 />} /> */}
        {/* <Route path="/programs/Bali/100hr" element={<Service100 />} /> */}
        {/* <Route path="/programs/Bali/100hr" element={<OmbYogaPage/>} /> */}
        <Route path="programs/retreat-7-adventure" element={<Retreats7 />} />
        <Route path="programs/retreat-7-meditation" element={<Retreats7Medi />} />
        <Route path="programs/community-services" element={<Service1 />} />
        <Route path="programs/temple-yoga" element={<Service1 />} />
        <Route path="programs/merchandise" element={<Service1 />} />
        <Route path="programs/retreats" element={<Service1 />} />
        <Route path="programs/events" element={<Service1 />} />
        <Route path="programs/advanced-online-courses" element={<OnlineYogaTeacherTraining />} />
        <Route path="programs/Membership-Temple-Yoga-Program" element={<CardsMembership />} />
        <Route path="programs/shakti-sadhana" element={<MembershipProgram data={shaktiSadhanaData} />} />
        <Route path="programs/shiv-shakti-sadhana" element={<MembershipProgram data={shivShaktiSadhanaData} />} />
        <Route path="programs/sapta-rishi-sadhana" element={<MembershipProgram data={saptaRishiSadhanaData} />} />
        <Route path="programs/pashu-patayaa-sadhana" element={<MembershipProgram data={pashuPatayaaData} />} />
        {/* <Route path="donation" element={<QRDonationForm />} /> */}
        <Route path="programs/100-hours-milti-style-teacher-training-course" element={<MTService100 />} />
        <Route path="programs/300-hours-milti-style-teacher-training-course" element={<MTService300 />} />
        <Route path="programs/200-hours-milti-style-teacher-training-course" element={<MTService200 />} />
        <Route path="programs/short-retreats/mysuru" element={<RetreatCards programs={mysuruCards} locationTitle="Mysuru Retreats" />} />
        <Route path="programs/short-retreats/bali" element={<RetreatCards programs={baliCards} locationTitle="Bali Retreats" />} />
        <Route path="programs/short-retreats/rishikesh" element={<RetreatCards programs={rishikeshCards} locationTitle="Rishikesh Retreats" />} />
        {/* Mysuru */}
        <Route path="programs/short-retreats/mysuru/singing-bowl-and-sound-healing-course" element={<RetreatPage data={singingBowlData} />} />
        <Route path="programs/short-retreats/mysuru/7-day-wheel-yoga-teacher-training-course" element={<RetreatPage data={wheelYogaData} />} />
        <Route path="programs/short-retreats/mysuru/50-hour-yin-yoga-teacher-training-course-mysore" element={<RetreatPage data={yinYoga50hrData} />} />
        <Route path="programs/short-retreats/mysuru/50-hour-aerial-yoga-teacher-training-mysore" element={<RetreatPage data={aerialYoga50hrData} />} />

        {/* Bali */}
        <Route path="programs/short-retreats/bali/yin-yoga-teacher-training" element={<RetreatPage data={baliYinYogaData} />} />
        <Route path="programs/short-retreats/bali/aerial-yoga-teacher-training" element={<RetreatPage data={baliAerialYogaData} />} />
        <Route path="programs/short-retreats/bali/acro-yoga-teacher-training" element={<RetreatPage data={acroYogaData} />} />
        <Route path="programs/short-retreats/bali/prenatal-yoga-teacher-training" element={<RetreatPage data={baliPrenatalData} />} />
        {/* <Route path="programs/short-retreats/bali/7-day-adventure-retreat" element={<RetreatPage data={adventure7DayData} />} />
        <Route path="programs/short-retreats/bali/7-day-meditation-retreat" element={<RetreatPage data={meditation7DayData} />} /> */}

        {/* Rishikesh */}
        <Route path="programs/short-retreats/rishikesh/yin-yoga-teacher-training" element={<RetreatPage data={rishikeshYinYogaData} />} />
        <Route path="programs/short-retreats/rishikesh/aerial-yoga-teacher-training" element={<RetreatPage data={rishikeshAerialYogaData} />} />
        <Route path="programs/short-retreats/rishikesh/prenatal-yoga-teacher-training" element={<RetreatPage data={rishikeshPrenatalData} />} />
      {/* <Route path="servic" element={<OmbYogaPage/>}/> */}


<Route path="/programs/bali/:course" element={<OmbYogaPage />} />
<Route path="programs/:location" element={<LocationLandingPage />} />

      </Route>
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
