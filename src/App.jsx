import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Components/Home';

import Cont from './Components/Cont';
import Servicess from './Components/Services/Servicess';

import Layout from './Layout';
import Service1 from './Components/Services/Service1/Service1';
import Service2 from './Components/Services/Hours500/Service2';
import Service300 from './Components/Services/Hours300/Service300';
import Service100 from './Components/Services/Hours100/Service100';
import Retreats7 from './Components/Services/Retreats7/Retreats7';
import Retreats7Medi from './Components/Services/Retreats7Med/Retreats7Medi';
import AboutUs_page from './Components/AboutUs/AboutUs_page';
import MembershipProgram from './Components/Services/Membership/MembershipProgram';
import shaktiSadhanaData from './Components/Services/Membership/data/shaktiSadhanaData';
import CardsMembership from './Components/Services/Membership/CardsMembership';
import shivShaktiSadhanaData from './Components/Services/Membership/data/shivShaktiSadhanaData';
import saptaRishiSadhanaData from './Components/Services/Membership/data/saptaRishiSadhanaData';
import pashuPatayaaData from './Components/Services/Membership/data/pashuPatayaaData';
import YogaTeachers from './Components/Teachers/YogaTeachers';
import OnlineYogaTeacherTraining from './Components/Services/OnlineCourse/OnlineYogaTeacherTraining';
import QRDonationForm from './Components/Donation/QRDonationForm/QRDonationForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs_page/>} />
          <Route path="contact" element={<Cont />} />
          <Route path="programs" element={<Servicess />} />
          <Route path="our-teachers-list" element={<YogaTeachers/>} />
          
          {/* Individual Service Routes */}
          <Route path="programs/teacher-training-200" element={<Service1/>} />
          <Route path="programs/teacher-training-500" element={<Service2/>} />
          <Route path="programs/teacher-training-300" element={<Service300/>} />
          <Route path="programs/teacher-training-100" element={<Service100/>} />
          <Route path="programs/retreat-7-adventure" element={<Retreats7/>} />
          <Route path="programs/retreat-7-meditation" element={<Retreats7Medi/>} />
          <Route path="programs/community-services" element={<Service1 />} />
          <Route path="programs/temple-yoga" element={<Service1 />} />
          <Route path="programs/merchandise" element={<Service1 />} />
          <Route path="programs/retreats" element={<Service1 />} />
          <Route path="programs/events" element={<Service1 />} />
          <Route path="programs/advanced-online-courses" element={<OnlineYogaTeacherTraining/>} />
             
          <Route path="programs/Membership-Temple-Yoga-Program" element={<CardsMembership/>} />
          <Route path="programs/shakti-sadhana" element={<MembershipProgram data={shaktiSadhanaData}/>} />
          <Route path="programs/shiv-shakti-sadhana" element={<MembershipProgram data={shivShaktiSadhanaData}/>} />
          <Route path="programs/sapta-rishi-sadhana" element={<MembershipProgram data={saptaRishiSadhanaData}/>} />
          <Route path="programs/pashu-patayaa-sadhana" element={<MembershipProgram data={pashuPatayaaData}/>} />
         



                <Route path="donation" element={<QRDonationForm/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;