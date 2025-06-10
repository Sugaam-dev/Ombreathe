import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import AutoTyping from '../AutoTyping';
import './Banner.css';

const ImageSliderBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  // Memoized images array to prevent recreation
  const images = useMemo(() => {
    const imagePromises = [
      import('../../images/1.webp'),
      import('../../images/2.jpg'),
      import('../../images/3.jpg'),
      import('../../images/4.jpg'),
      import('../../images/5.jpg')
    ];
    return imagePromises;
  }, []);

  // Load images dynamically for better performance
  useEffect(() => {
    const loadImages = async () => {
      try {
        const loadedImageSources = await Promise.all(images);
        const imageMap = {};
        
        loadedImageSources.forEach((img, index) => {
          imageMap[index] = img.default;
        });
        
        setImagesLoaded(imageMap);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading images:', error);
        setIsLoading(false);
      }
    };

    loadImages();
  }, [images]);

  // Memoized image sources array
  const imageSources = useMemo(() => 
    Object.values(imagesLoaded), [imagesLoaded]
  );

  // Memoized texts for AutoTyping
  const texts = useMemo(() => [
    'Holistic Yoga Training.',
    'Kundalini Yoga Courses.',
    'Retreats & Workshops.',
  ], []);

  // Memoized navigation function
  const teacher = useCallback(() => {
    navigate('/service');
  }, [navigate]);

  // Auto-play functionality with cleanup
  useEffect(() => {
    if (!isAutoPlaying || imageSources.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === imageSources.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, imageSources.length]);

  // Memoized navigation functions
  const goToPrevious = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrentIndex(prev => prev === 0 ? imageSources.length - 1 : prev - 1);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  }, [imageSources.length]);

  const goToNext = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrentIndex(prev => prev === imageSources.length - 1 ? 0 : prev + 1);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  }, [imageSources.length]);

  const goToSlide = useCallback((index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  }, []);

  // Image preloading for smoother transitions
  useEffect(() => {
    if (imageSources.length === 0) return;

    const preloadImage = (src) => {
      const img = new Image();
      img.src = src;
    };

    // Preload next and previous images
    const nextIndex = (currentIndex + 1) % imageSources.length;
    const prevIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
    
    if (imageSources[nextIndex]) preloadImage(imageSources[nextIndex]);
    if (imageSources[prevIndex]) preloadImage(imageSources[prevIndex]);
  }, [currentIndex, imageSources]);

  // Loading state
  if (isLoading) {
    return (
      <div className="slider-container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="text-center">
          <div className="spinner-border text-light mb-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="text-light">Loading yoga experience...</p>
        </div>
      </div>
    );
  }

  if (imageSources.length === 0) {
    return (
      <div className="slider-container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="text-center text-light">
          <p>Unable to load images. Please refresh the page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="slider-container">
      {/* Background Images using img tags */}
      {imageSources.map((image, index) => (
        <div
          key={index}
          className="slider-image-wrapper"
          style={{
            opacity: index === currentIndex ? 1 : 0
          }}
        >
          <img
            src={image}
            alt={`Yoga training slide ${index + 1}`}
            className="slider-image"
            loading={index === 0 ? "eager" : "lazy"}
            onLoad={() => {
              // Mark image as loaded for potential future optimizations
              console.log(`Image ${index + 1} loaded`);
            }}
          />
          <div className="slider-overlay"></div>
        </div>
      ))}

      {/* Content Overlay */}
      <div className="slider-content">
        <h1 className="slider-title">
          Welcome To The Yogalayaa For 
        </h1>
        <div className="type">
          <span>
            <AutoTyping texts={texts} speed={100} delay={1500} />
          </span> 
        </div>
        
        {/* Two Buttons Container */}
        <div className="slider-buttons-container">
          <button 
            className="slider-button teacher-training-btn" 
            onClick={teacher}
            type="button"
            aria-label="Navigate to Teacher Training Program in Bali"
          >
            Teacher Training Program in Bali
          </button>
          
          <button 
            className="slider-button retreat-program-btn" 
            onClick={teacher}
            type="button"
            aria-label="Navigate to Retreat Program in Bali"
          >
            Retreat Program in Bali
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        className="nav-button prev"
        onClick={goToPrevious}
        aria-label="Previous image"
        type="button"
      >
        <IoChevronBack size={24} />
      </button>
      
      <button
        className="nav-button next"
        onClick={goToNext}
        aria-label="Next image"
        type="button"
      >
        <IoChevronForward size={24} />
      </button>

      {/* Dot Indicators */}
      <div className="dots-container">
        {imageSources.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
            type="button"
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div 
        className={`auto-play-indicator ${isAutoPlaying ? 'active' : 'inactive'}`}
        title={isAutoPlaying ? 'Auto-play is active' : 'Auto-play is paused'}
      ></div>
    </div>
  );
};

export default React.memo(ImageSliderBanner);