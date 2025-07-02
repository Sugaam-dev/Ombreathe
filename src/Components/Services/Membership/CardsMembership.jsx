import React, { useState, useCallback, useRef, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Services.css';

// Import all images at the top
import teachertraining from '../../../images/Membership/SHIV SHAKTI SADHANA MEMBERSHIP PROGRAM.jpg'
import online from '../../../images/Membership/SAPTA RISHI SADHANA MEMBERSHIP PROGRAM.jpg'
import temple from '../../../images/Membership/SHAKTI SADHANA MEMBERSHIP PROGRAM.jpg'
import merchandise from '../../../images/Membership/PASHU-PATAYAA SADHANA MEMBERSHIP PROGRAM.jpg'
import lg from '../../../images/lg.png'

const Servicess = () => {
  const [showAll, setShowAll] = useState(false);
  const [imageLoadStates, setImageLoadStates] = useState({});
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  // Image mapping - FIXED: Added actual image mappings
  const imageMap = useMemo(() => ({
    'shiv-shakti-sadhana': teachertraining, // Map to actual imported image
    'shakti-sadhana': temple,
    'sapta-rishi-sadhana': online,
    'pashu-patayaa-sadhana': merchandise,
  }), []);

  // Memoized yoga programs data
  const yogaPrograms = useMemo(() => [
    {
      id: 1,
      imageKey: 'shiv-shakti-sadhana', // This now maps to teachertraining
      title: "SHIV SHAKTI SADHANA MEMBERSHIP PROGRAM",
      subtitle: "Temple Yoga with Unified Divine Energy",
      route: "/programs/shiv-shakti-sadhana",
      features: [
        "300 Hours comprehensive certification program",
        "Temple Yoga with Unified Divine Energy practices",
        "Yogalayaa certified training program",
        "Integration of Shiva and Shakti principles",
        "Advanced meditation and spiritual practices"
      ],
      price: "$2,800",
      hours: "300 Hours",
      certification: "Yogalayaa",
      priority: 1
    },
    {
      id: 2,
      imageKey: 'shakti-sadhana', // This now maps to temple
      title: "SHAKTI SADHANA MEMBERSHIP PROGRAM",
      subtitle: "Temple Yoga with Divine Feminine Energy",
      route: "/programs/shakti-sadhana",
      features: [
        "200 Hours certification program",
        "Divine Feminine Energy cultivation",
        "Yogalayaa certified training",
        "Sacred feminine practices and rituals",
        "Goddess-centered yoga methodology"
      ],
      price: "$1899",
      hours: "200 Hours",
      certification: "Yogalayaa",
      priority: 2
    },
    {
      id: 3,
      imageKey: 'sapta-rishi-sadhana', // This now maps to online
      title: "SAPTA RISHI SADHANA MEMBERSHIP PROGRAM",
      subtitle: "Vedic Wisdom and Ancient Knowledge",
      route: "/programs/sapta-rishi-sadhana",
      features: [
        "400 Hours advanced certification program",
        "Vedic Wisdom and Ancient Knowledge studies",
        "Yogalayaa certified comprehensive training",
        "Seven Sages (Sapta Rishi) teachings",
        "Deep dive into Vedic scriptures and practices"
      ],
      price: "$2999",
      hours: "400 Hours",
      certification: "Yogalayaa",
      priority: 3
    },
    {
      id: 4,
      imageKey: 'pashu-patayaa-sadhana', // This now maps to merchandise
      title: "PASHU-PATAYAA SADHANA MEMBERSHIP PROGRAM",
      subtitle: "Lord of Animals - Nature Connection Yoga",
      route: "/programs/pashu-patayaa-sadhana",
      features: [
        "250 Hours specialized certification program",
        "Lord of Animals (Pashupati) connection practices",
        "Yogalayaa certified nature-based training",
        "Animal spirit yoga and nature connection",
        "Ecological awareness and earth-based practices"
      ],
      price: "$2199",
      hours: "250 Hours",
      certification: "Yogalayaa",
      priority: 4
    }
  ], []);

  // Initialize all images as loaded since they're imported
  useEffect(() => {
    const initialStates = {};
    yogaPrograms.forEach(program => {
      initialStates[program.id] = 'loaded';
    });
    setImageLoadStates(initialStates);
  }, [yogaPrograms]);

  // Memoized displayed cards
  const displayedCards = useMemo(() => 
    showAll ? yogaPrograms : yogaPrograms.slice(0, 3),
    [showAll, yogaPrograms]
  );

  // Memoized callback to prevent re-renders
  const handleImageError = useCallback((e) => {
    console.error('Image failed to load:', e.target.src);
    // Set a fallback or placeholder
    e.target.style.display = 'none';
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
                <h1>Membership Temple Yoga Program</h1>
                <img 
                  src={lg}
                  alt="Yogalayaa Logo" 
                  loading="eager"
                  style={{ maxWidth: '100%', height: 'auto' }}
                  onError={(e) => console.error('Logo failed to load:', e.target.src)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="cards-grid">
          {displayedCards.map((program, index) => {
            const imageLoadState = imageLoadStates[program.id] || 'loading';
            const imageSrc = imageMap[program.imageKey];
            
            // Debug logging
            if (!imageSrc) {
              console.warn(`No image found for imageKey: ${program.imageKey}`);
            }
            
            return (
              <div key={program.id} className={`yoga-card ${showAll && index >= 3 ? 'fade-in' : ''}`}>
                <div className="card-image-container">
                  {!imageSrc ? (
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
                      Image Not Available
                    </div>
                  ) : (
                    <img 
                      src={imageSrc} 
                      alt={program.title}
                      className="card-image"
                      onError={handleImageError}
                      onLoad={() => handleImageLoad(program.id)}
                      loading="lazy"
                      // style={{
                      //   opacity: imageLoadState === 'displayed' ? 1 : 0.8,
                      //   transition: 'opacity 0.3s ease',
                      //   width: '100%',
                      //   height: '200px',
                      //   objectFit: 'contain'
                      // }}
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