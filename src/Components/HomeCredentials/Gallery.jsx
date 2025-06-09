import React, { useState, useEffect, useRef } from 'react';
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
  images = [
    {
      src: a,
      caption: "Image 1"
    },
    {
      src: b,
      caption: "Image 2"
    },
    {
      src: c,
      caption: "Image 3"
    },
    {
      src: e,
      caption: "Image 2"
    },
    {
      src: f,
      caption: "Image 3"
    },
    {
      src: g,
      caption: "Image 4"
    },
    {
      src: h,
      caption: "Image 2"
    },
    {
      src: i,
      caption: "Image 3"
    },
    {
      src: j,
      caption: "Image 4"
    },
    {
      src: k,
      caption: "Image 2"
    },
    {
      src: l,
      caption: "Image 3"
    },
    {
      src: m,
      caption: "Image 4"
    },
    {
      src: n,
      caption: "Image 2"
    },
    {
      src: o,
      caption: "Image 3"
    },
    {
      src: p,
      caption: "Image 4"
    },
    {
      src: q,
      caption: "Image 2"
    },
    {
      src: r,
      caption: "Image 3"
    },
    {
      src: s,
      caption: "Image 4"
    }
  ],
  showThumbnails = true,
  autoPlay = true,
  interval = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && images.length > 1) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // Touch/Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const swipeThreshold = 50; // Minimum distance for a swipe
    const swipeDistance = touchStartX.current - touchEndX.current;

    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        // Swiped left - go to next image
        goToNext();
      } else {
        // Swiped right - go to previous image
        goToPrevious();
      }
    }

    // Reset touch positions
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Mouse handlers for desktop drag support
  const handleMouseDown = (e) => {
    e.preventDefault();
    touchStartX.current = e.clientX;
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    touchEndX.current = e.clientX;
  };

  const handleMouseUp = () => {
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
  };

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
  }, []);

  if (!images || images.length === 0) {
    return <div className="text-center py-5">No images to display</div>;
  }

  return (
    <div className="container-fluid py-5">
      <div className="container">
        {/* Title */}
        <div className="text-center mb-5">
          <h2 className="display-4">Gallery</h2>
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
              onMouseLeave={handleMouseUp} // Handle mouse leaving the area
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
                  alt={images[currentIndex].caption || `Image ${currentIndex + 1}`}
                  className="img-fluid"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    transition: isDragging ? 'none' : 'opacity 0.5s ease-in-out',
                    pointerEvents: 'none' // Prevent image dragging
                  }}
                  draggable={false}
                />
                
                {/* Caption */}
                {images[currentIndex].caption && (
                  <div 
                    className="position-absolute d-none d-md-block"
                    style={{
                      bottom: '20px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      zIndex: 10
                    }}
                  >
                  
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
                    ></button>
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

export default Gallery;