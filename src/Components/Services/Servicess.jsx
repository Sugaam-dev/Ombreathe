// Servicess.jsx
import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/Services.css';
import teachertraining from '../../images/services/Teachers_training.jpg'
import online from '../../images/services/Online Courses.webp'
import temple from '../../images/services/temple yoga intro.webp'
import merchandise from '../../images/services/Merchandise.jpg'
import community from '../../images/services/Community service.webp'
import Retreats from '../../images/services/Retreats.jpg'
import events from '../../images/services/Events.webp'

const Servicess = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const yogaPrograms = [
    {
      id: 1,
      image: teachertraining,
      title: "Teachers Training Programs 200 Hours",
      route: "/services/teacher-training-200",
      features: [
        "Comprehensive 200-hour certification program",
        "Expert guidance from experienced instructors",
        "Yoga Alliance registered certificate"
      ],
      price: "$1899"
    },


    {
      id: 9,
      image: teachertraining,
      title: "Teachers Training Programs 300 Hours",
      route: "/services/teacher-training-300",
      features: [
        "Comprehensive 300-hour certification program",
        "Expert guidance from experienced instructors",
        "Yoga Alliance registered certificate"
      ],
      price: "$1999"
    },
     {
      id: 7,
      image: Retreats,
      title: "OUR RETREATS",
      route: "/services/retreats",
      features: [
        "7-14 days immersive spiritual experience",
        "Beautiful natural locations",
        "All meals and accommodation included"
      ],
      price: "$2500"
    },
        {
      id: 2,
      image: teachertraining,
      title: "Teachers Training Programs 100 Hours",
      route: "/services/teacher-training-100",
      features: [
        "Comprehensive 100-hour certification program",
        "Expert guidance from experienced instructors",
        "Yoga Alliance registered certificate"
      ],
      price: "$1399"
    },
  
      
    {
      id: 4,
      image: community,
      title: "Community Services",
      route: "/services/community-services",
      features: [
        "Free yoga sessions for underprivileged communities",
        "Corporate wellness programs",
        "Social impact initiatives"
      ],
      price: "Free"
    },
    {
      id: 5,
      image: temple,
      title: "Membership - Temple Yoga Program",
      route: "/services/temple-yoga",
      features: [
        "Unlimited access to temple yoga sessions",
        "Spiritual guidance and meditation classes",
        "Monthly wellness workshops"
      ],
      price: "$99/month"
    },
    {
      id: 6,
      image: merchandise,
      title: "Merchandise",
      route: "/services/merchandise",
      features: [
        "Premium quality yoga mats and props",
        "Eco-friendly and sustainable materials",
        "Student discount available"
      ],
      price: "$25-$150"
    },
    {
      id: 7,
      image: Retreats,
      title: "OUR RETREATS",
      route: "/services/retreats",
      features: [
        "7-14 days immersive spiritual experience",
        "Beautiful natural locations",
        "All meals and accommodation included"
      ],
      price: "$2500"
    },
    {
      id: 8,
      image: events,
      title: "Events",
      route: "/services/events",
      features: [
        "Special workshops and masterclasses",
        "Guest teachers and spiritual leaders",
        "Networking with yoga community"
      ],
      price: "$50-$200"
    },
    {
      id: 9,
      image: online,
      title: "Advanced Online Courses",
      route: "/services/advanced-online-courses",
      features: [
        "Specialized advanced yoga techniques",
        "One-on-one mentorship sessions",
        "Lifetime access to course materials"
      ],
      price: "$399"
    }
  ];

  const displayedCards = showAll ? yogaPrograms : yogaPrograms.slice(0, 3);

  // Memoized callback to prevent re-renders
  const handleImageError = useCallback((e) => {
    // Set a proper fallback image instead of empty string
    e.target.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center';
  }, []);

  // Updated callback for learn more button with navigation
  const handleLearnMore = useCallback((route, title) => {
    console.log(`Navigating to: ${route} for ${title}`);
    navigate(route);
  }, [navigate]);

  return (
    <div className="yoga-cards-wrapper">
      <div className="yoga-cards-container">
        <div className="section-header">
          <div className="yogaschool">
            <div className="yogaa">
              <div className="heading">
                <h1>Services</h1>
                <img src="./images/lg.png" alt="logo" />
              </div>
            </div>
          </div>
        </div>

        <div className="cards-grid">
          {displayedCards.map((program, index) => (
            <div key={program.id} className={`yoga-card ${showAll && index >= 3 ? 'fade-in' : ''}`}>
              <div className="card-image-container">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="card-image"
                  onError={handleImageError}
                  loading="lazy"
                />
                <div className="image-overlay"></div>
              </div>
              
              <div className="card-content">
                <h3 className="card-title">{program.title}</h3>
                
                <ul className="features-list">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <span className="feature-icon"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="price-section">
                  <span className="price-label">Starts from</span>
                  <span className="price-value">{program.price}</span>
                </div>
                
                <button 
                  className="learn-more-btn"
                  onClick={() => handleLearnMore(program.route, program.title)}
                >
                  Learn more
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
              See More Programs
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

export default Servicess;