import React, { useState, useCallback, useRef, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/Services.css';

// Import all images at the top but don't use them immediately
import teachertraining from '../../images/services/Teachers_training.jpg'
import online from '../../images/services/Online Courses.webp'
import temple from '../../images/services/temple yoga intro.webp'
import merchandise from '../../images/services/Merchandise.jpg'
import community from '../../images/services/Community service.webp'
import Retreats from '../../images/services/Retreats.jpg'
import events from '../../images/services/Events.webp'
import a from '../../images/Gallery/8.jpg'

const Servicess = () => {
  const [showAll, setShowAll] = useState(false);
  const [imageLoadStates, setImageLoadStates] = useState({});
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  // Image mapping for easier management
  const imageMap = useMemo(() => ({
    teachertraining,
    online,
    temple,
    merchandise,
    community,
    Retreats,
    events,
    gallery8: a
  }), []);

  // Memoized yoga programs data
  const yogaPrograms = useMemo(() => [
    {
      id: 1,
      imageKey: 'teachertraining',
      title: "Teachers Training Programs 200 Hours",
      route: "/services/teacher-training-200",
      features: [
        "Comprehensive 200-hour certification program",
        "Expert guidance from experienced instructors",
        "Yoga Alliance registered certificate"
      ],
      price: "$1899",
      priority: 1
    },
    {
      id: 9,
      imageKey: 'teachertraining',
      title: "Teachers Training Programs 300 Hours",
      route: "/services/teacher-training-300",
      features: [
        "Comprehensive 300-hour certification program",
        "Expert guidance from experienced instructors",
        "Yoga Alliance registered certificate"
      ],
      price: "$1999",
      priority: 2
    },
    {
      id: 10,
      imageKey: 'Retreats',
      title: "OUR RETREATS",
      route: "/services/retreat-7-adventure",
      features: [
        "7 days Adventure and immersive spiritual experience",
        "Beautiful natural locations",
        "All meals and accommodation included"
      ],
      price: "$1099",
      priority: 3
    },
    {
      id: 11,
      imageKey: 'gallery8',
      title: "OUR RETREATS",
      route: "/services/retreat-7-meditation",
      features: [
        "7 days Meditation, Yoga and immersive spiritual experience",
        "Beautiful natural locations",
        "All meals and accommodation included"
      ],
      price: "$1099",
      priority: 7
    },
    {
      id: 2,
      imageKey: 'teachertraining',
      title: "Teachers Training Programs 100 Hours",
      route: "/services/teacher-training-100",
      features: [
        "Comprehensive 100-hour certification program",
        "Expert guidance from experienced instructors",
        "Yoga Alliance registered certificate"
      ],
      price: "$1399",
      priority: 6
    },
    {
      id: 4,
      imageKey: 'community',
      title: "Community Services",
      route: "/services/community-services",
      features: [
        "Free yoga sessions for underprivileged communities",
        "Corporate wellness programs",
        "Social impact initiatives"
      ],
      price: "Free",
      priority: 8
    },
    {
      id: 5,
      imageKey: 'temple',
      title: "Membership - Temple Yoga Program",
      route: "/services/temple-yoga",
      features: [
        "Unlimited access to temple yoga sessions",
        "Spiritual guidance and meditation classes",
        "Monthly wellness workshops"
      ],
      price: "$99/month",
      priority: 9
    },
    {
      id: 6,
      imageKey: 'merchandise',
      title: "Merchandise",
      route: "/services/merchandise",
      features: [
        "Premium quality yoga mats and props",
        "Eco-friendly and sustainable materials",
        "Student discount available"
      ],
      price: "$25-$150",
      priority: 10
    },
    {
      id: 7,
      imageKey: 'Retreats',
      title: "OUR RETREATS",
      route: "/services/retreats",
      features: [
        "7-14 days immersive spiritual experience",
        "Beautiful natural locations",
        "All meals and accommodation included"
      ],
      price: "$2500",
      priority: 5
    },
    {
      id: 8,
      imageKey: 'events',
      title: "Events",
      route: "/services/events",
      features: [
        "Special workshops and masterclasses",
        "Guest teachers and spiritual leaders",
        "Networking with yoga community"
      ],
      price: "$50-$200",
      priority: 11
    },
    {
      id: 12,
      imageKey: 'online',
      title: "Advanced Online Courses",
      route: "/services/advanced-online-courses",
      features: [
        "Specialized advanced yoga techniques",
        "One-on-one mentorship sessions",
        "Lifetime access to course materials"
      ],
      price: "$399",
      priority: 4
    }
  ], []);

  // Progressive image loading simulation for performance
  useEffect(() => {
    const loadImagesProgressively = () => {
      // Load priority images first (first 3 cards)
      const priorityPrograms = yogaPrograms
        .filter(p => p.priority <= 3)
        .sort((a, b) => a.priority - b.priority);

      priorityPrograms.forEach((program, index) => {
        setTimeout(() => {
          setImageLoadStates(prev => ({
            ...prev,
            [program.id]: 'loaded'
          }));
        }, index * 100); // 100ms delay between priority images
      });

      // Load remaining images with longer delays
      const remainingPrograms = yogaPrograms
        .filter(p => p.priority > 3)
        .sort((a, b) => a.priority - b.priority);

      remainingPrograms.forEach((program, index) => {
        setTimeout(() => {
          setImageLoadStates(prev => ({
            ...prev,
            [program.id]: 'loaded'
          }));
        }, 300 + (index * 150)); // Start after priority images, longer delays
      });
    };

    loadImagesProgressively();
  }, [yogaPrograms]);

  // Memoized displayed cards
  const displayedCards = useMemo(() => 
    showAll ? yogaPrograms : yogaPrograms.slice(0, 3),
    [showAll, yogaPrograms]
  );

  // Memoized callback to prevent re-renders
  const handleImageError = useCallback((e) => {
    e.target.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center';
  }, []);

  // Handle actual image load
  const handleImageLoad = useCallback((programId) => {
    setImageLoadStates(prev => ({
      ...prev,
      [programId]: 'displayed'
    }));
  }, []);

  // Updated callback for learn more button with navigation
  const handleLearnMore = useCallback((route, title) => {
    console.log(`Navigating to: ${route} for ${title}`);
    navigate(route);
  }, [navigate]);

  // Memoized show more handler
  const handleShowMore = useCallback(() => {
    setShowAll(true);
  }, []);

  // Memoized show less handler with scroll
  const handleShowLess = useCallback(() => {
    setShowAll(false);
    setTimeout(() => {
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }, 100);
  }, []);

  return (
    <div className="yoga-cards-wrapper">
      <div className="yoga-cards-container" ref={sectionRef}>
        <div className="section-header">
          <div className="yogaschool">
            <div className="yogaa">
              <div className="heading">
                <h1>Programs</h1>
                <img 
                  src="./images/lg.png" 
                  alt="Yogalayaa Logo" 
                  loading="eager"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="cards-grid">
          {displayedCards.map((program, index) => {
            const imageLoadState = imageLoadStates[program.id] || 'loading';
            const imageSrc = imageMap[program.imageKey];
            
            return (
              <div key={program.id} className={`yoga-card ${showAll && index >= 3 ? 'fade-in' : ''}`}>
                <div className="card-image-container">
                  {imageLoadState === 'loading' ? (
                    <div 
                      className="card-image"
                      style={{
                        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#666',
                        fontSize: '14px',
                        height: '200px'
                      }}
                    >
                      Loading...
                    </div>
                  ) : (
                    <img 
                      src={imageSrc} 
                      alt={program.title}
                      className="card-image"
                      onError={handleImageError}
                      onLoad={() => handleImageLoad(program.id)}
                      loading="lazy"
                      style={{
                        opacity: imageLoadState === 'displayed' ? 1 : 0.8,
                        transition: 'opacity 0.3s ease'
                      }}
                    />
                  )}
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
                    type="button"
                    aria-label={`Learn more about ${program.title}`}
                  >
                    Learn more
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="see-more-container">
          {!showAll ? (
            <button 
              onClick={handleShowMore}
              className="see-more-btn"
              type="button"
              aria-label="Show more yoga programs"
            >
              See More Programs
            </button>
          ) : (
            <button 
              onClick={handleShowLess}
              className="show-less-btn"
              type="button"
              aria-label="Show fewer yoga programs"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Servicess);