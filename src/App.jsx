import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Components/Home';

import Cont from './Components/Cont';
import Servicess from './Components/Services/Servicess';
import Package1 from './Components/Package1';
import Package2 from './Components/Package2';
import Package3 from './Components/Package3';
import Package4 from './Components/Package4';
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs_page/>} />
          <Route path="contact" element={<Cont />} />
          <Route path="services" element={<Servicess />} />
          <Route path="package1" element={<Package1 />} />
          <Route path="package2" element={<Package2 />} />
          <Route path="package3" element={<Package3 />} />
          <Route path="package4" element={<Package4 />} />
          <Route path="service" element={<Servicess/>} />
          
          {/* Individual Service Routes */}
          <Route path="services/teacher-training-200" element={<Service1/>} />
          <Route path="services/teacher-training-500" element={<Service2/>} />
          <Route path="services/teacher-training-300" element={<Service300/>} />
          <Route path="services/teacher-training-100" element={<Service100/>} />
          <Route path="services/retreat-7-adventure" element={<Retreats7/>} />
          <Route path="services/retreat-7-meditation" element={<Retreats7Medi/>} />
          <Route path="services/community-services" element={<Service1 />} />
          <Route path="services/temple-yoga" element={<Service1 />} />
          <Route path="services/merchandise" element={<Service1 />} />
          <Route path="services/retreats" element={<Service1 />} />
          <Route path="services/events" element={<Service1 />} />
          <Route path="services/advanced-online-courses" element={<Service1 />} />
             
          <Route path="programs/Membership-Temple-Yoga-Program" element={<CardsMembership/>} />
          <Route path="programs/shakti-sadhana" element={<MembershipProgram data={shaktiSadhanaData}/>} />
          <Route path="programs/shiv-shakti-sadhana" element={<MembershipProgram data={shivShaktiSadhanaData}/>} />
          <Route path="programs/sapta-rishi-sadhana" element={<MembershipProgram data={saptaRishiSadhanaData}/>} />
          <Route path="programs/pashu-patayaa-sadhana" element={<MembershipProgram data={pashuPatayaaData}/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;