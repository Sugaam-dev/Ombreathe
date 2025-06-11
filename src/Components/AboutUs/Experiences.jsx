import React, { useState, useEffect, useCallback } from 'react';
import './Styles/Experience.css';

// Import experience images from images folder
import baliExperience1 from '../../images/Gallery/8.jpg';
import baliExperience2 from '../../images/Gallery/9.jpg';
import baliExperience3 from '../../images/Gallery/11.jpg';

const Experience = () => {
  // State for carousel
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Array of images for carousel
  const experienceImages = [
    {
      src: baliExperience1,
      alt: "Serene yoga practice by waterfall in Bali's natural setting",
      title: "Natural Harmony"
    },
    {
      src: baliExperience2,
      alt: "Group meditation session in lush Balinese gardens",
      title: "Collective Peace"
    },
    {
      src: baliExperience3,
      alt: "Spiritual awakening experience in Bali's sacred spaces",
      title: "Sacred Connection"
    }
  ];

  // Navigate to previous slide
  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => prev === 0 ? experienceImages.length - 1 : prev - 1);
  }, [experienceImages.length]);

  // Navigate to next slide
  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => prev === experienceImages.length - 1 ? 0 : prev + 1);
  }, [experienceImages.length]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide, isAutoPlaying]);

  // Handle mouse enter/leave for auto-play
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  }, [prevSlide, nextSlide]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <section className="bali-experience-section" aria-label="Bali Experience Showcase">
      <div className="container">
        {/* Section Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-12">
            <div className="bali-experience-header">
              <h2 className="bali-experience-title">
                Bali Experience
              </h2>
              <p className="bali-experience-subtitle">
                Discover the magic of transformation in paradise
              </p>
            </div>
          </div>
        </div>

        {/* Content Row */}
        <div className="row align-items-center g-4">
          {/* Left Column - Text Content */}
          <div className="col-lg-4 col-md-12">
            <div className="bali-experience-content">
              <div className="bali-experience-intro">
                <div className="d-flex align-items-start">
                  <div className="bali-experience-bullet">
                    <span>◆</span>
                  </div>
                  <div>
                    <h3 className="bali-experience-content-title">
                      The locations are not chosen by chance.
                    </h3>
                    <p className="bali-experience-description">
                      Every sacred space in Bali has been carefully selected for its unique energy, 
                      natural beauty, and spiritual significance to enhance your transformative journey.
                    </p>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="bali-experience-features">
                <div className="bali-experience-feature">
                  <span className="bali-experience-feature-icon">🌺</span>
                  <span className="bali-experience-feature-text">Sacred temple grounds</span>
                </div>
                <div className="bali-experience-feature">
                  <span className="bali-experience-feature-icon">🏞️</span>
                  <span className="bali-experience-feature-text">Natural waterfalls & rice terraces</span>
                </div>
                <div className="bali-experience-feature">
                  <span className="bali-experience-feature-icon">🧘</span>
                  <span className="bali-experience-feature-text">Peaceful meditation spaces</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column - Image Carousel */}
          <div className="col-lg-5 col-md-12">
            <div 
              className="bali-experience-carousel-container"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="bali-experience-carousel" role="region" aria-label="Image carousel">
                {/* Previous Arrow */}
                <button 
                  className="bali-carousel-arrow bali-carousel-arrow-prev"
                  onClick={prevSlide}
                  aria-label="Previous image"
                  type="button"
                >
                  <span aria-hidden="true">‹</span>
                </button>

                {/* Image Container */}
                <div className="bali-carousel-image-container">
                  <div className="bali-carousel-image-wrapper">
                    <img 
                      src={experienceImages[currentSlide].src}
                      alt={experienceImages[currentSlide].alt}
                      className="bali-experience-image"
                      loading="lazy"
                    />
                    <div className="bali-carousel-image-overlay">
                      <h4 className="bali-carousel-image-title">
                        {experienceImages[currentSlide].title}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Next Arrow */}
                <button 
                  className="bali-carousel-arrow bali-carousel-arrow-next"
                  onClick={nextSlide}
                  aria-label="Next image"
                  type="button"
                >
                  <span aria-hidden="true">›</span>
                </button>
              </div>

              {/* Carousel Indicators */}
              <div className="bali-carousel-indicators" role="tablist">
                {experienceImages.map((_, index) => (
                  <button
                    key={index}
                    className={`bali-carousel-indicator ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    role="tab"
                    aria-selected={index === currentSlide}
                  />
                ))}
              </div>

              {/* Progress Bar */}
              <div className="bali-carousel-progress">
                <div 
                  className="bali-carousel-progress-bar"
                  style={{ 
                    width: `${((currentSlide + 1) / experienceImages.length) * 100}%` 
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right Column - Location Description */}
          <div className="col-lg-3 col-md-12">
            <div className="bali-experience-location">
              <div className="bali-location-card">
                <div className="bali-location-header">
                  <h4 className="bali-location-title">
                    <span className="bali-location-highlight">Bali</span>
                  </h4>
                  <div className="bali-location-rating">
                    <span className="bali-rating-stars">★★★★★</span>
                    <span className="bali-rating-text">Spiritual Haven</span>
                  </div>
                </div>
                
                <p className="bali-location-description">
                  A unique place with carefully preserved traditions, breathtaking 
                  natural landscapes, and sweeping cultural diversity that creates 
                  the perfect environment for personal transformation.
                </p>

                <div className="bali-location-highlights">
                  <div className="bali-highlight-item">
                    <span className="bali-highlight-number">1000+</span>
                    <span className="bali-highlight-label">Sacred Temples</span>
                  </div>
                  <div className="bali-highlight-item">
                    <span className="bali-highlight-number">365</span>
                    <span className="bali-highlight-label">Days of Ceremony</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="bali-experience-bg-element-1" aria-hidden="true"></div>
      <div className="bali-experience-bg-element-2" aria-hidden="true"></div>
    </section>
  );
};

export default Experience;