import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import optimized components
import About_Header from './About_Header.jsx';
import AboutUs_section from './AboutUs_section.jsx';
import Community from './Community.jsx';
import Founder from './Founder.jsx';
import YogaTeachers from '../../Components/Teachers/YogaTeachers.jsx';
import Gallery from '../HomeCredentials/Gallery';


import Experience from './Experiences.jsx';

const AboutUs_page = () => {
  return (
    <main className="aboutus-main-page">
      {/* Hero Section - About Us Header */}
      <About_Header />
      
      {/* Reach Potential Section */}
      <AboutUs_section />

      {/* School and Community Section */}
      <Community />

      {/* Founder and Philosopher Section */}
      <Founder />
<Experience/>
      {/* Yoga Teachers Section */}
      <YogaTeachers />

      {/* Gallery Section */}
      <Gallery />
    </main>
  );
};

export default AboutUs_page;