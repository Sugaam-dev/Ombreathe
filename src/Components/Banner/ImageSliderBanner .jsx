import React, { useState, useEffect } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import AutoTyping from '../AutoTyping';
import './Banner.css';
import a from '../../images/1.webp';
import b from '../../images/2.jpg';
import c from '../../images/3.jpg';
import d from '../../images/4.jpg';
import e from '../../images/5.jpg';

const ImageSliderBanner = () => {
  // Sample images - you can replace these with your own image URLs
  const images = [a, b, c, d, e];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, images.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const texts = [
    'Holistic Yoga Training.',
    'Kundalini Yoga Courses.',
    'Retreats & Workshops.',
  ];

  return (
    <div className="slider-container">
      {/* Background Images using img tags */}
      {images.map((image, index) => (
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
          />
          <div className="slider-overlay"></div>
        </div>
      ))}

      {/* Content Overlay */}
      <div className="slider-content">
        <h1 className="slider-title">
          Welcome To The Himalayas For
        </h1>
        <div className="type">
          <span>
            <AutoTyping texts={texts} speed={100} delay={1500} />
          </span> 
        </div>
        <button className="slider-button" onClick={() => {
          // Add your navigation logic here
          console.log('Explore Now clicked');
        }}>
          Explore Now
        </button>
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
        {images.map((_, index) => (
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

export default ImageSliderBanner;