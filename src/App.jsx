import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
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

// Import individual service components (you'll need to create these)
// import TeacherTraining from './Components/Services/TeacherTraining/TeacherTraining';
// import OnlineCourses from './Components/Services/OnlineCourses/OnlineCourses';
// import CommunityServices from './Components/Services/CommunityServices/CommunityServices';
// import TempleYoga from './Components/Services/TempleYoga/TempleYoga';
// import Merchandise from './Components/Services/Merchandise/Merchandise';
// import Retreats from './Components/Services/Retreats/Retreats';
// import Events from './Components/Services/Events/Events';
// import AdvancedOnlineCourses from './Components/Services/AdvancedOnlineCourses/AdvancedOnlineCourses';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
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
          <Route path="services/community-services" element={<Service1 />} />
          <Route path="services/temple-yoga" element={<Service1 />} />
          <Route path="services/merchandise" element={<Service1 />} />
          <Route path="services/retreats" element={<Service1 />} />
          <Route path="services/events" element={<Service1 />} />
          <Route path="services/advanced-online-courses" element={<Service1 />} />
         
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;