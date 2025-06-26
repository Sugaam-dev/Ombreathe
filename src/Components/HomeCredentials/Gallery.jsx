import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import './Styles/Gallery.css'; // Import the CSS file

// Import all 46 yoga gallery images
import img1 from '../../images/new Gallery/1.jpg';
import img2 from '../../images/new Gallery/2.jpg';
import img3 from '../../images/new Gallery/3.jpg';
import img4 from '../../images/new Gallery/4.jpg';
import img5 from '../../images/new Gallery/5.jpg';
import img6 from '../../images/new Gallery/6.jpg';
import img7 from '../../images/new Gallery/7.jpg';
import img8 from '../../images/new Gallery/8.jpg';
import img9 from '../../images/new Gallery/9.jpg';
import img10 from '../../images/new Gallery/10.jpg';
import img11 from '../../images/new Gallery/11.jpg';
import img12 from '../../images/new Gallery/12.jpg';
import img13 from '../../images/new Gallery/13.jpg';
import img14 from '../../images/new Gallery/14.jpg';
import img15 from '../../images/new Gallery/15.jpg';
import img16 from '../../images/new Gallery/16.jpg';
import img17 from '../../images/new Gallery/17.jpg';
import img18 from '../../images/new Gallery/18.jpg';
import img19 from '../../images/new Gallery/19.jpg';
import img20 from '../../images/new Gallery/20.jpg';
import img21 from '../../images/new Gallery/21.jpg';
import img22 from '../../images/new Gallery/22.jpg';
import img23 from '../../images/new Gallery/23.jpg';
import img24 from '../../images/new Gallery/24.jpg';
import img25 from '../../images/new Gallery/25.jpg';
import img26 from '../../images/new Gallery/26.jpg';
import img27 from '../../images/new Gallery/27.jpg';
import img28 from '../../images/new Gallery/28.jpg';
import img29 from '../../images/new Gallery/29.jpg';
import img30 from '../../images/new Gallery/30.jpg';
import img31 from '../../images/new Gallery/31.jpg';
import img32 from '../../images/new Gallery/32.jpg';
import img33 from '../../images/new Gallery/33.jpg';
import img34 from '../../images/new Gallery/34.jpg';
import img35 from '../../images/new Gallery/35.jpg';
import img36 from '../../images/new Gallery/36.jpg';
import img37 from '../../images/new Gallery/37.jpg';
import img38 from '../../images/new Gallery/38.jpg';
import img39 from '../../images/new Gallery/39.jpg';
import img40 from '../../images/new Gallery/40.jpg';
import img41 from '../../images/new Gallery/41.jpg';
import img42 from '../../images/new Gallery/42.jpg';
import img43 from '../../images/new Gallery/43.jpg';
import img44 from '../../images/new Gallery/44.jpg';
import img45 from '../../images/new Gallery/45.jpg';
import img46 from '../../images/new Gallery/46.jpg';

const Gallery = ({ 
  showThumbnails = true,
  autoPlay = false,
  interval = 4000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(new Set());
  const [isVisible, setIsVisible] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const galleryRef = useRef(null);
  const imageCache = useRef(new Map());

  // All 46 yoga images array
  const images = useMemo(() => [
    { src: img1, id: 'img-0' },
    { src: img2, id: 'img-1' },
    { src: img3, id: 'img-2' },
    { src: img4, id: 'img-3' },
    { src: img5, id: 'img-4' },
    { src: img6, id: 'img-5' },
    { src: img7, id: 'img-6' },
    { src: img8, id: 'img-7' },
    { src: img9, id: 'img-8' },
    { src: img10, id: 'img-9' },
    { src: img11, id: 'img-10' },
    { src: img12, id: 'img-11' },
    { src: img13, id: 'img-12' },
    { src: img14, id: 'img-13' },
    { src: img15, id: 'img-14' },
    { src: img16, id: 'img-15' },
    { src: img17, id: 'img-16' },
    { src: img18, id: 'img-17' },
    { src: img19, id: 'img-18' },
    { src: img20, id: 'img-19' },
    { src: img21, id: 'img-20' },
    { src: img22, id: 'img-21' },
    { src: img23, id: 'img-22' },
    { src: img24, id: 'img-23' },
    { src: img25, id: 'img-24' },
    { src: img26, id: 'img-25' },
    { src: img27, id: 'img-26' },
    { src: img28, id: 'img-27' },
    { src: img29, id: 'img-28' },
    { src: img30, id: 'img-29' },
    { src: img31, id: 'img-30' },
    { src: img32, id: 'img-31' },
    { src: img33, id: 'img-32' },
    { src: img34, id: 'img-33' },
    { src: img35, id: 'img-34' },
    { src: img36, id: 'img-35' },
    { src: img37, id: 'img-36' },
    { src: img38, id: 'img-37' },
    { src: img39, id: 'img-38' },
    { src: img40, id: 'img-39' },
    { src: img41, id: 'img-40' },
    { src: img42, id: 'img-41' },
    { src: img43, id: 'img-42' },
    { src: img44, id: 'img-43' },
    { src: img45, id: 'img-44' },
    { src: img46, id: 'img-45' }
  ], []);

  // Intersection Observer for performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Smart image preloading
  const preloadImage = useCallback((src, index, priority = 'low') => {
    if (imageCache.current.has(src)) {
      setImagesLoaded(prev => new Set([...prev, index]));
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      const img = new Image();
      
      if (priority === 'high') {
        img.loading = 'eager';
        img.fetchPriority = 'high';
      } else {
        img.loading = 'lazy';
        img.fetchPriority = 'low';
      }
      
      img.onload = () => {
        imageCache.current.set(src, img);
        setImagesLoaded(prev => new Set([...prev, index]));
        resolve();
      };
      
      img.onerror = reject;
      img.src = src;
    });
  }, []);

  // Progressive loading strategy
  useEffect(() => {
    if (!isVisible) return;

    const loadImages = async () => {
      // Priority 1: Current image
      await preloadImage(images[currentIndex].src, currentIndex, 'high');
      
      // Priority 2: Next and previous images
      const nextIndex = (currentIndex + 1) % images.length;
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      
      Promise.all([
        preloadImage(images[nextIndex].src, nextIndex, 'high'),
        preloadImage(images[prevIndex].src, prevIndex, 'high')
      ]);

      // Priority 3: Batch load nearby images
      if (window.requestIdleCallback) {
        window.requestIdleCallback(() => {
          const batchSize = 5;
          const startIndex = Math.max(0, currentIndex - batchSize);
          const endIndex = Math.min(images.length - 1, currentIndex + batchSize);
          
          for (let i = startIndex; i <= endIndex; i++) {
            if (i !== currentIndex && i !== nextIndex && i !== prevIndex) {
              preloadImage(images[i].src, i, 'low');
            }
          }
        });
      }
    };

    loadImages();
  }, [currentIndex, images, isVisible, preloadImage]);

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && images.length > 1 && isVisible) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, images.length, isVisible]);

  // Navigation functions
  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  // Touch/Mouse handlers
  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsDragging(true);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return;
    touchEndX.current = e.touches[0].clientX;
    e.preventDefault();
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
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goToPrevious();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goToNext();
    }
  }, [goToPrevious, goToNext]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Optimized thumbnail rendering
  const getVisibleThumbnails = useMemo(() => {
    if (!showThumbnails) return [];
    
    const thumbsToShow = 12;
    const startIndex = Math.max(0, currentIndex - Math.floor(thumbsToShow / 2));
    const endIndex = Math.min(images.length - 1, startIndex + thumbsToShow - 1);
    
    return images.slice(startIndex, endIndex + 1).map((img, idx) => ({
      ...img,
      originalIndex: startIndex + idx
    }));
  }, [images, currentIndex, showThumbnails]);

  if (!images || images.length === 0) {
    return <div className="gallery-empty">No images to display</div>;
  }

  return (
    <div className="gallery-container" ref={galleryRef}>
      <div className="gallery-inner">
        {/* Gallery Title */}
        <div className="gallery-header">
          <h2 className="gallery-title">Yoga Gallery</h2>
          <p className="gallery-subtitle">
<<<<<<< HEAD
          Take a glimpse into our yoga journey through these beautiful moments.
=======
       Take a glimpse into our yoga journey through these beautiful moments.
>>>>>>> af995228e503abc893868678a32eecd1a509682a
          </p>
        </div>

        {/* Main Gallery Container - Dynamic Size */}
        <div className="gallery-main-wrapper">
          <div className="gallery-main-container">
            <div 
              className={`gallery-viewport ${isDragging ? 'dragging' : ''}`}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {/* Main Image Display */}
              <div className="gallery-image-container">
                {/* Loading State */}
                {!imagesLoaded.has(currentIndex) && (
                  <div className="gallery-loading">
                    <div className="gallery-loading-content">
                      <div className="gallery-spinner"></div>
                    </div>
                  </div>
                )}
                
                {/* Main Image */}
                <img
                  src={images[currentIndex].src}
                  alt={`Yoga Gallery Image ${currentIndex + 1}`}
                  className={`gallery-main-image ${imagesLoaded.has(currentIndex) ? 'loaded' : ''}`}
                  draggable={false}
                  loading="eager"
                  fetchpriority="high"
                />
              </div>

              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    className="gallery-nav-btn gallery-nav-prev"
                    onClick={goToPrevious}
                    aria-label="Previous image"
                  >
                    <span>‹</span>
                  </button>
                  
                  <button
                    className="gallery-nav-btn gallery-nav-next"
                    onClick={goToNext}
                    aria-label="Next image"
                  >
                    <span>›</span>
                  </button>
                </>
              )}

              {/* Dot Indicators */}
              {images.length > 1 && (
                <div className="gallery-dots">
                  {Array.from({ length: Math.min(images.length, 15) }, (_, i) => {
                    const actualIndex = Math.floor((i * images.length) / 15);
                    const isActive = Math.abs(actualIndex - currentIndex) < 3;
                    
                    return (
                      <button
                        key={actualIndex}
                        className={`gallery-dot ${actualIndex === currentIndex ? 'active' : ''} ${isActive ? 'visible' : ''}`}
                        onClick={() => goToSlide(actualIndex)}
                        aria-label={`Go to image ${actualIndex + 1}`}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Gallery);
