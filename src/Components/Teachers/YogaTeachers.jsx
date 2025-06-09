import React, { useState, useRef } from 'react';
import './YogaTeachers.css';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import nitin from '../../images/Teachers/nitin.webp'
import pulkit from '../../images/Teachers/pulkit.webp'
import abhishekh from '../../images/Teachers/abhishekh.webp'
import savitri from '../../images/Teachers/savitri.webp'
import ranjan from '../../images/Teachers/ranjan.jpeg'
import ishani from '../../images/Teachers/Ishani.jpeg'
import lg from '../../images/lg.png'

const YogaTeachers = () => {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null); // Add ref to target the section

  const teachers = [
    {
      id: 10,
      name: "YOGI RANJAN",
      image:ranjan,
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
      id: 11,
      name: "Ishani Ghate",
      image:ishani,
      title: "Yoga Therapist & Trainer",
      description: "Practicing yogi for over 8 years, specializing in Vedic Meditation and Kundalini Yoga. Georgia brings ancient wisdom to modern practice.",
      experience: "8+ Years",
      socials: {
        instagram: "https://instagram.com/georgia",
        facebook: "https://facebook.com/georgia",
        twitter: "https://twitter.com/georgia",
        youtube: "https://youtube.com/georgia"
      }
    },
    {
      id: 1,
      name: "NITIN DOBRIYAL",
      image:nitin,
      title: "Yoga Instructor",
      description: "Practicing yogi for over 6 years, specializing in Vedic Meditation and Kundalini Yoga. Georgia brings ancient wisdom to modern practice.",
      experience: "6+ Years",
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
      description: "Has 7 years of teaching experience, certified in 500 hours in 2020, and in hatha and 500 hours in Ayurveda in 2021.",
      experience: "7+ Years",
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
      description: "Certified meditation teacher with 20 years of experience in various contemplative practices and mindfulness techniques.",
      experience: "20+ Years",
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

  // Updated function to handle showing more teachers
  const handleShowMore = () => {
    setShowAll(true);
  };

  // Updated function to handle showing less teachers with scroll
  const handleShowLess = () => {
    setShowAll(false);
    // Scroll to the top of the section after a short delay to let the DOM update
    setTimeout(() => {
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }, 100);
  };

  return (
    <div className="yoga-teachers-wrapper">
      <div className="yoga-teachers-container" ref={sectionRef}>
        <div className="yogaschool">
          <div className="yogaa">
            <div className="heading">
              <h1>Our Yoga Teachers</h1>
              <img src={lg} alt="logo" />
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
              onClick={handleShowMore}
              className="see-more-btn"
            >
              See More Teachers
            </button>
          ) : (
            <button 
              onClick={handleShowLess}
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