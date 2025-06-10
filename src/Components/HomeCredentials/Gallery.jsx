import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import a from '../../images/Gallery/1.jpeg';
import b from '../../images/Gallery/2.jpeg';
import c from '../../images/Gallery/3.jpeg';
import e from '../../images/Gallery/4.jpeg';
import f from '../../images/Gallery/5.jpeg';
import g from '../../images/Gallery/6.jpeg';
import h from '../../images/Gallery/7.jpg';
import i from '../../images/Gallery/8.jpg';
import j from '../../images/Gallery/9.jpg';
import k from '../../images/Gallery/10.jpg';
import l from '../../images/Gallery/11.jpg';
import m from '../../images/Gallery/12.jpg';
import n from '../../images/Gallery/13.jpg';
import o from '../../images/Gallery/14.jpg';
import p from '../../images/Gallery/15.jpg';
import q from '../../images/Gallery/16.jpg';
import r from '../../images/Gallery/17.jpg';
import s from '../../images/Gallery/18.jpg';
import t from '../../images/Gallery/19.jpg';
import u from '../../images/Gallery/20.jpg';

const Gallery = ({ 
  showThumbnails = true,
  autoPlay = true,
  interval = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  // Memoized images array
  const images = useMemo(() => [
    { src: a, caption: "Yoga Practice in Nature" },
    { src: b, caption: "Meditation Session" },
    { src: c, caption: "Asana Practice" },
    { src: e, caption: "Peaceful Moments" },
    { src: f, caption: "Yoga Community" },
    { src: g, caption: "Mindful Practice" },
    { src: h, caption: "Serene Environment" },
    { src: i, caption: "Group Session" },
    { src: j, caption: "Tranquil Setting" },
    { src: k, caption: "Yoga Journey" },
    { src: l, caption: "Spiritual Practice" },
    { src: m, caption: "Wellness Focus" },
    { src: n, caption: "Harmony & Balance" },
    { src: o, caption: "Peaceful Practice" },
    { src: p, caption: "Mindfulness" },
    { src: q, caption: "Yoga Flow" },
    { src: r, caption: "Inner Peace" },
    { src: s, caption: "Yogic Life" },
    { src: t, caption: "Meditation Space" },
    { src: u, caption: "Yoga Bliss" }
  ], []);

  // Auto-play functionality with cleanup
  useEffect(() => {
    if (autoPlay && images.length > 1) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, images.length]);

  // Memoized navigation functions
  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  // Optimized touch handlers
  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsDragging(true);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return;
    touchEndX.current = e.touches[0].clientX;
  }, [isDragging]);

  const handleTouchEnd = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const swipeThreshold = 50;
    const swipeDistance = touchStartX.current - touchEndX.current;

    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  }, [isDragging, goToNext, goToPrevious]);

  // Optimized mouse handlers
  const handleMouseDown = useCallback((e) => {
    e.preventDefault();
    touchStartX.current = e.clientX;
    setIsDragging(true);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    touchEndX.current = e.clientX;
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const swipeThreshold = 50;
    const swipeDistance = touchStartX.current - touchEndX.current;

    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  }, [isDragging, goToNext, goToPrevious]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext]);

  // Image preloading for smoother transitions
  useEffect(() => {
    const preloadImage = (src, index) => {
      const img = new Image();
      img.onload = () => {
        setImagesLoaded(prev => ({ ...prev, [index]: true }));
      };
      img.src = src;
    };

    // Preload current and next/previous images
    const preloadIndexes = [
      currentIndex,
      (currentIndex + 1) % images.length,
      (currentIndex - 1 + images.length) % images.length
    ];

    preloadIndexes.forEach(index => {
      if (!imagesLoaded[index]) {
        preloadImage(images[index].src, index);
      }
    });
  }, [currentIndex, images, imagesLoaded]);

  if (!images || images.length === 0) {
    return <div className="text-center py-5">No images to display</div>;
  }

  return (
    <div className="container-fluid py-5">
      <div className="container">
        {/* Title */}
        <div className="text-center mb-5">
          <h2 className="display-4" style={{ color: '#2E3A87', fontWeight: '400' }}>
            Gallery
          </h2>
          <p className="lead text-muted">Moments from our yoga journey</p>
        </div>

        {/* Main Carousel */}
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-md-11 col-lg-10">
            <div 
              className="position-relative shadow-lg rounded overflow-hidden" 
              style={{ 
                backgroundColor: '#f8f9fa',
                cursor: isDragging ? 'grabbing' : 'grab',
                userSelect: 'none'
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {/* Main Image */}
              <div style={{ 
                minHeight: '300px',
                height: 'auto',
                maxHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f8f9fa'
              }}>
                <img
                  src={images[currentIndex].src}
                  alt={images[currentIndex].caption || `Gallery Image ${currentIndex + 1}`}
                  className="img-fluid"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    transition: isDragging ? 'none' : 'opacity 0.5s ease-in-out',
                    pointerEvents: 'none',
                    opacity: imagesLoaded[currentIndex] ? 1 : 0.7
                  }}
                  draggable={false}
                  loading="lazy"
                />
                
                {/* Caption */}
                {images[currentIndex].caption && (
                  <div 
                    className="position-absolute d-none d-md-block"
                    style={{
                      bottom: '60px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      zIndex: 10
                    }}
                  >
                    <span 
                      className="badge bg-dark bg-opacity-75 px-3 py-2"
                      style={{ fontSize: '0.9rem' }}
                    >
                      {images[currentIndex].caption}
                    </span>
                  </div>
                )}
              </div>

              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    className="position-absolute top-50 start-0 translate-middle-y btn btn-dark btn-sm ms-2"
                    onClick={goToPrevious}
                    style={{ zIndex: 10, opacity: 0.8 }}
                    onMouseEnter={(e) => e.target.style.opacity = '1'}
                    onMouseLeave={(e) => e.target.style.opacity = '0.8'}
                    aria-label="Previous image"
                  >
                    <span style={{ fontSize: '1.2rem' }}>‹</span>
                  </button>
                  
                  <button
                    className="position-absolute top-50 end-0 translate-middle-y btn btn-dark btn-sm me-2"
                    onClick={goToNext}
                    style={{ zIndex: 10, opacity: 0.8 }}
                    onMouseEnter={(e) => e.target.style.opacity = '1'}
                    onMouseLeave={(e) => e.target.style.opacity = '0.8'}
                    aria-label="Next image"
                  >
                    <span style={{ fontSize: '1.2rem' }}>›</span>
                  </button>
                </>
              )}

              {/* Dot Indicators */}
              {images.length > 1 && (
                <div 
                  className="position-absolute d-flex justify-content-center gap-2"
                  style={{
                    bottom: '15px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 10
                  }}
                >
                  {images.map((_, index) => (
                    <button
                      key={index}
                      className={`rounded-circle border-0 ${
                        index === currentIndex ? 'bg-white' : 'bg-secondary'
                      }`}
                      onClick={() => goToSlide(index)}
                      style={{
                        width: '12px',
                        height: '12px',
                        opacity: index === currentIndex ? 1 : 0.6,
                        transition: 'opacity 0.3s ease'
                      }}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Image Counter */}
        <div className="text-center mt-4">
          <small className="text-muted">
            {currentIndex + 1} of {images.length} images
          </small>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Gallery);