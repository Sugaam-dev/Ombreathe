import React, { useState, useCallback, useRef, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Services.css'; // same CSS as Servicess

const RetreatCards = ({ programs, locationTitle }) => {
  const [showAll, setShowAll] = useState(false);
  const [imageLoadStates, setImageLoadStates] = useState({});
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  // Build imageMap dynamically from programs data
  // Each program has { imageKey, image } where image is the imported image
  const imageMap = useMemo(() => {
    const map = {};
    programs.forEach(p => {
      map[p.imageKey] = p.image;
    });
    return map;
  }, [programs]);

  // Progressive image loading - same logic as Servicess
  useEffect(() => {
    const loadImagesProgressively = () => {
      const priorityPrograms = programs
        .filter(p => p.priority <= 3)
        .sort((a, b) => a.priority - b.priority);

      priorityPrograms.forEach((program, index) => {
        setTimeout(() => {
          setImageLoadStates(prev => ({
            ...prev,
            [program.id]: 'loaded'
          }));
        }, index * 100);
      });

      const remainingPrograms = programs
        .filter(p => p.priority > 3)
        .sort((a, b) => a.priority - b.priority);

      remainingPrograms.forEach((program, index) => {
        setTimeout(() => {
          setImageLoadStates(prev => ({
            ...prev,
            [program.id]: 'loaded'
          }));
        }, 300 + (index * 150));
      });
    };

    loadImagesProgressively();
  }, [programs]);

  // Show first 3 cards, rest on "See More"
  const displayedCards = useMemo(() =>
    showAll ? programs : programs.slice(0, 3),
    [showAll, programs]
  );

  const handleImageError = useCallback((e) => {
    e.target.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center';
  }, []);

  const handleImageLoad = useCallback((programId) => {
    setImageLoadStates(prev => ({
      ...prev,
      [programId]: 'displayed'
    }));
  }, []);

  const handleLearnMore = useCallback((route, title) => {
    navigate(route);
  }, [navigate]);

  const handleShowMore = useCallback(() => {
    setShowAll(true);
  }, []);

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

        {/* Header - shows location name e.g. "Mysuru Retreats" */}
        <div className="section-header">
          <div className="yogaschool">
            <div className="yogaa">
              <div className="heading">
                <h1>{locationTitle}</h1>
                <img
                  src="../../../images/lg.png"
                  alt="Ombreathe Logo"
                  loading="eager"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="cards-grid">
          {displayedCards.map((program, index) => {
            const imageLoadState = imageLoadStates[program.id] || 'loading';
            const imageSrc = imageMap[program.imageKey];

            return (
              <div
                key={program.id}
                className={`yoga-card ${showAll && index >= 3 ? 'fade-in' : ''}`}
              >
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

        {/* Show More / Show Less */}
        <div className="see-more-container">
          {!showAll ? (
            <button
              onClick={handleShowMore}
              className="see-more-btn"
              type="button"
              aria-label="Show more retreat programs"
            >
              See More Programs
            </button>
          ) : (
            <button
              onClick={handleShowLess}
              className="show-less-btn"
              type="button"
              aria-label="Show fewer retreat programs"
            >
              Show Less
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

export default React.memo(RetreatCards);
