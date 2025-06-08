











// import React from 'react';
// import Slider from 'react-slick';
// import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
// import './YogaTeacherCarousel.css'
// // Import slick styles
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const YogaTeachers = () => {
//   const instructors = [
//     {
//       name: "Georgia Talcott",
//       image: "/path/to/your/image1.jpg",
//       title: "Yoga Teacher (E-RYT 500)",
//       description: "Practicing yogi for over 20 years, specializing in Vedic Meditation and Kundalini Yoga",
//       socials: {
//         instagram: "https://instagram.com/georgia",
//         facebook: "https://facebook.com/georgia",
//         twitter: "https://twitter.com/georgia",
//         youtube: "https://youtube.com/georgia"
//       }
//     },
//     {
//       name: "Wissam Barakeh",
//       image: "/path/to/your/image2.jpg",
//       title: "Founder of House of Om",
//       description: "Registered Yoga Teacher, Sound Healing and Hypnotherapist master",
//       socials: {
//         instagram: "https://instagram.com/wissam",
//         linkedin: "https://linkedin.com/in/wissam",
//         facebook: "https://facebook.com/wissam",
//         youtube: "https://youtube.com/wissam"
//       }
//     },
//     {
//       name: "Rama",
//       image: "/path/to/your/image3.jpg",
//       title: "Spiritual Guide & Yoga Practitioner",
//       description: "Instructor has 3 years of teaching experience, certified in 500 hours in 2020, and in hatha and 500 hours in Ayurveda in 2021",
//       socials: {
//         instagram: "https://instagram.com/rama",
//         twitter: "https://twitter.com/rama",
//         facebook: "https://facebook.com/rama",
//         linkedin: "https://linkedin.com/in/rama"
//       }
//     },
//     {
//       name: "Sarah Johnson",
//       image: "/path/to/your/image4.jpg",
//       title: "Mindfulness & Meditation Expert",
//       description: "Certified meditation teacher with 15 years of experience in various contemplative practices",
//       socials: {
//         instagram: "https://instagram.com/sarah",
//         youtube: "https://youtube.com/sarah",
//         twitter: "https://twitter.com/sarah",
//         facebook: "https://facebook.com/sarah"
//       }
//     },
//     {
//       name: "Michael Chen",
//       image: "/path/to/your/image5.jpg",
//       title: "Ashtanga Yoga Specialist",
//       description: "Traditional Ashtanga practitioner and teacher, trained in Mysore, India",
//       socials: {
//         instagram: "https://instagram.com/michael",
//         facebook: "https://facebook.com/michael",
//         linkedin: "https://linkedin.com/in/michael",
//         youtube: "https://youtube.com/michael"
//       }
//     }
//   ];

//   const getSocialIcon = (platform) => {
//     switch(platform) {
//       case 'instagram': return <FaInstagram />;
//       case 'facebook': return <FaFacebook />;
//       case 'twitter': return <FaTwitter />;
//       case 'youtube': return <FaYoutube />;
//       case 'linkedin': return <FaLinkedin />;
//       default: return null;
//     }
//   };

//   // Custom Arrow Components
//   const CustomPrevArrow = ({ onClick }) => (
//     <button
//       className="slick-arrow slick-prev-custom"
//       onClick={onClick}
//       type="button"
//     >
//       <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//         <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//       </svg>
//     </button>
//   );

//   const CustomNextArrow = ({ onClick }) => (
//     <button
//       className="slick-arrow slick-next-custom"
//       onClick={onClick}
//       type="button"
//     >
//       <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//         <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//       </svg>
//     </button>
//   );

//   // Slick settings
//   const settings = {
//     dots:false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     pauseOnHover: true,
//     prevArrow: <CustomPrevArrow />,
//     nextArrow: <CustomNextArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         }
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         }
//       }
//     ]
//   };

//   return (
//     <>
    
//         <div className="yogaschool">
//         <div className="yogaa">
//           <div className="heading">
//             <h1>Yoga Teachers</h1>
//             <img src="./images/lg.png" alt="logo" />
//           </div>
//         </div>
//       </div>
    
//     <div className="yoga-carousel-container">
//       <Slider {...settings} className="instructor-slider">
//         {instructors.map((instructor, index) => (
//           <div key={index} className="slide-wrapper">
//             <div className="instructor-card">
//               <div className="card-image">
//                 <img 
//                   src={instructor.image} 
//                   alt={instructor.name}
//                 />
//               </div>
//               <div className="card-content">
//                 <h3 className="card-title">{instructor.name}</h3>
//                 <p className="card-subtitle">{instructor.title}</p>
//                 <p className="card-description">{instructor.description}</p>
//                 <div className="social-icons">
//                   {Object.entries(instructor.socials).map(([platform, url]) => (
//                     <a
//                       key={platform}
//                       href={url}
//                       className="social-link"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       {getSocialIcon(platform)}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//     </>
//   );
// };

// export default YogaTeachers;

// YogaTeachers.jsx
import React, { useState } from 'react';
import './YogaTeachers.css';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import nitin from '../../images/Teachers/nitin.webp'
import pulkit from '../../images/Teachers/pulkit.webp'
import abhishekh from '../../images/Teachers/abhishekh.webp'
import savitri from '../../images/Teachers/savitri.webp'
const YogaTeachers = () => {
 const [showAll, setShowAll] = useState(false);

  const teachers = [
    {
      id: 1,
      name: "NITIN DOBRIYAL",
      image:nitin,
      title: "Yoga Instructor",
      description: "Practicing yogi for over 10 years, specializing in Vedic Meditation and Kundalini Yoga. Georgia brings ancient wisdom to modern practice.",
      experience: "10+ Years",
      socials: {
        instagram: "https://instagram.com/georgia",
        facebook: "https://facebook.com/georgia",
        twitter: "https://twitter.com/georgia",
        youtube: "https://youtube.com/georgia"
      }
    },
    {
      id: 2,
      name: "PULKIT ARORA",
      image:pulkit,
      title: "Yoga Instructor",
      description: "Registered Yoga Teacher, Sound Healing and Hypnotherapist master. Combines traditional practices with modern healing techniques.",
      experience: "5+ Years",
      socials: {
        instagram: "https://instagram.com/wissam",
        linkedin: "https://linkedin.com/in/wissam",
        facebook: "https://facebook.com/wissam",
        youtube: "https://youtube.com/wissam"
      }
    },
    {
      id: 3,
      name: "ABHISHEKH THALWAL",
      image: abhishekh,
      title: "Astanga Yoga, Hatha Yoga",
      description: "Has 10 years of teaching experience, certified in 500 hours in 2020, and in hatha and 500 hours in Ayurveda in 2021.",
      experience: "10+ Years",
      socials: {
        instagram: "https://instagram.com/rama",
        twitter: "https://twitter.com/rama",
        facebook: "https://facebook.com/rama",
        linkedin: "https://linkedin.com/in/rama"
      }
    },
    {
      id: 4,
      name: "SAVITRI DEVI-GURUMAA",
      image:savitri ,
      title: "KRI Professional Teachers",
      description: "Certified meditation teacher with 25 years of experience in various contemplative practices and mindfulness techniques.",
      experience: "25+ Years",
      socials: {
        instagram: "https://instagram.com/sarah",
        youtube: "https://youtube.com/sarah",
        twitter: "https://twitter.com/sarah",
        facebook: "https://facebook.com/sarah"
      }
    }
  ];

  const displayedTeachers = showAll ? teachers : teachers.slice(0, 3);

  const getSocialIcon = (platform) => {
    switch(platform) {
      case 'instagram': return <FaInstagram />;
      case 'facebook': return <FaFacebook />;
      case 'twitter': return <FaTwitter />; 
      case 'youtube': return <FaYoutube />;
      case 'linkedin': return <FaLinkedin />;
      default: return null;
    }
  };

  const handleImageError = (e) => {
    // Fallback to a reliable placeholder image
    e.target.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center&auto=format';
    e.target.onerror = null; // Prevent infinite loop if fallback also fails
  };

  return (
    <div className="yoga-teachers-wrapper">
      <div className="yoga-teachers-container">
         <div className="yogaschool">
        <div className="yogaa">
          <div className="heading">
            <h1>Our Yoga Teachers</h1>
            <img src="./images/lg.png" alt="logo" />
          </div>
        </div>
      </div>

        <div className="teachers-grid">
          {displayedTeachers.map((teacher, index) => (
            <div key={teacher.id} className={`teacher-card ${showAll && index >= 3 ? 'fade-in' : ''}`}>
              <div className="teacher-image-container">
                <img 
                  src={teacher.image} 
                  alt={teacher.name}
                  className="teacher-image"
                  onError={handleImageError}
                  loading="lazy"
                />
                <div className="image-overlay"></div>
                <div className="experience-badge">{teacher.experience}</div>
                {/* <div className="teacher-number">{teacher.id}</div> */}
              </div>
              
              <div className="teacher-content">
                <h3 className="teacher-name">{teacher.name}</h3>
                <p className="teacher-title">{teacher.title}</p>
                <p className="teacher-description">{teacher.description}</p>
                
                <div className="social-icons">
                  {Object.entries(teacher.socials).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Follow on ${platform}`}
                    >
                      {getSocialIcon(platform)}
                    </a>
                  ))}
                </div>
                
                <button 
                  className="contact-btn"
                  onClick={() => console.log(`Contact: ${teacher.name}`)}
                >
                  Contact Teacher
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="see-more-container">
          {!showAll ? (
            <button 
              onClick={() => setShowAll(true)}
              className="see-more-btn"
            >
              See More Teachers
            </button>
          ) : (
            <button 
              onClick={() => setShowAll(false)}
              className="show-less-btn"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </div>
  );
};


export default YogaTeachers;