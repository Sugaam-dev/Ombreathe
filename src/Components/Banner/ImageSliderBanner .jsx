import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import AutoTyping from '../AutoTyping';
import './Banner.css';

const ImageSliderBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const [imageDimensions, setImageDimensions] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  const navigate = useNavigate();

  // Track screen size and orientation for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setScreenSize(width);
      setScreenHeight(height);
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  // Determine if mobile view
  const isMobile = useMemo(() => screenSize <= 768, [screenSize]);

  // Memoized images array - Desktop and Mobile versions
  const images = useMemo(() => {
    if (isMobile) {
      // Mobile images - cropped/optimized for mobile viewing
      return [
        import('../../images/mobile/1. Connecting Jeevatmaaa to Shivatmaa.jpg'),
        import('../../images/mobile/2. Join Our TTC.jpg'),
        import('../../images/mobile/3. Temple Yoga.jpg'),
        import('../../images/mobile/4. Experience.jpg'),
        import('../../images/mobile/5. Certification.jpg'),
        import('../../images/mobile/6. safe pass.jpg'),
        // Add more mobile images as needed
      ];
    } else {
      // Desktop images - original images
      return [
        import('../../images/1.webp'),
        import('../../images/2.jpg'),
        import('../../images/3.jpg'),
        import('../../images/4.jpg'),
        import('../../images/5.jpg')
      ];
    }
  }, [isMobile]);

  // Get image dimensions and aspect ratio
  const getImageDimensions = useCallback((img) => {
    return new Promise((resolve) => {
      const image = new Image();
      image.onload = () => {
        const aspectRatio = image.width / image.height;
        resolve({
          width: image.width,
          height: image.height,
          aspectRatio: aspectRatio
        });
      };
      image.onerror = () => {
        resolve({
          width: 1920,
          height: 1080,
          aspectRatio: 16/9
        }); // Default fallback
      };
      image.src = img;
    });
  }, []);

  // Load images and get their dimensions
  useEffect(() => {
    const loadImagesWithDimensions = async () => {
      try {
        setIsLoading(true);
        const loadedImageSources = await Promise.all(images);
        const imageMap = {};
        const dimensionsMap = {};
        
        // Load images
        loadedImageSources.forEach((img, index) => {
          imageMap[index] = img.default;
        });
        
        // Get image dimensions
        const dimensionPromises = Object.values(imageMap).map(async (imageSrc, index) => {
          const dimensions = await getImageDimensions(imageSrc);
          dimensionsMap[index] = dimensions;
        });
        
        await Promise.all(dimensionPromises);
        
        setImagesLoaded(imageMap);
        setImageDimensions(dimensionsMap);
        setCurrentIndex(0);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading images:', error);
        setIsLoading(false);
      }
    };

    loadImagesWithDimensions();
  }, [images, getImageDimensions]);

  // Memoized image sources array
  const imageSources = useMemo(() => 
    Object.values(imagesLoaded), [imagesLoaded]
  );

  // Calculate container height based on current image aspect ratio and screen width
  const getContainerHeight = useCallback(() => {
    if (!imageDimensions[currentIndex]) return '100vh';
    
    const currentImageDimensions = imageDimensions[currentIndex];
    const aspectRatio = currentImageDimensions.aspectRatio;
    
    // Calculate height based on screen width and image aspect ratio
    const calculatedHeight = screenSize / aspectRatio;
    
    // Ensure minimum height for very wide images
    const minHeight = Math.min(screenHeight * 0.6, 400);
    const maxHeight = screenHeight;
    
    const finalHeight = Math.max(minHeight, Math.min(calculatedHeight, maxHeight));
    
    return `${finalHeight}px`;
  }, [currentIndex, imageDimensions, screenSize, screenHeight]);

  // Responsive texts for AutoTyping based on screen size
  const texts = useMemo(() => {
    if (screenSize <= 480) {
      return [
        'Holistic Yoga Training.',
        'Kundalini Yoga Courses.',
        'Retreats & Workshops.',
      ];
    } else if (screenSize <= 768) {
      return [
        'Holistic Yoga Training Programs.',
        'Kundalini Yoga Courses.',
        'Peaceful Retreats & Workshops.',
      ];
    } else {
      return [
        'Holistic Yoga Training Programs.',
        'Kundalini Yoga Courses.',
        'Peaceful Retreats & Workshops.',
      ];
    }
  }, [screenSize]);

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
    }, 4500);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, imageSources.length]);

  // Memoized navigation functions
  const goToPrevious = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrentIndex(prev => prev === 0 ? imageSources.length - 1 : prev - 1);
    setTimeout(() => setIsAutoPlaying(true), 6000);
  }, [imageSources.length]);

  const goToNext = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrentIndex(prev => prev === imageSources.length - 1 ? 0 : prev + 1);
    setTimeout(() => setIsAutoPlaying(true), 6000);
  }, [imageSources.length]);

  const goToSlide = useCallback((index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 6000);
  }, []);

  // Enhanced image preloading
  useEffect(() => {
    if (imageSources.length === 0) return;

    const preloadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = src;
      });
    };

    const nextIndex = (currentIndex + 1) % imageSources.length;
    const prevIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
    
    const preloadPromises = [];
    if (imageSources[nextIndex]) preloadPromises.push(preloadImage(imageSources[nextIndex]));
    if (imageSources[prevIndex]) preloadPromises.push(preloadImage(imageSources[prevIndex]));
    
    Promise.all(preloadPromises).catch(console.error);
  }, [currentIndex, imageSources]);

  // Loading state
  if (isLoading) {
    return (
      <div className="slider-container" style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
      }}>
        <div className="text-center">
          <div style={{
            width: '60px',
            height: '60px',
            border: '4px solid rgba(255, 255, 255, 0.3)',
            borderTop: '4px solid #ff6b35',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 20px'
          }}>
          </div>
          <p style={{ color: '#fff', fontSize: '1.2rem', fontWeight: '500' }}>
           Connecting Jeevatmaa To Shivatmaa
          </p>
        </div>
      </div>
    );
  }

  if (imageSources.length === 0) {
    return (
      <div className="slider-container" style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
      }}>
        <div className="text-center" style={{ color: '#fff' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Oops!</h2>
          <p style={{ marginBottom: '1.5rem' }}>Unable to load images. Please refresh the page.</p>
          <button 
            onClick={() => window.location.reload()} 
            style={{
              padding: '0.7rem 1.5rem',
              background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
              color: '#fff',
              border: 'none',
              borderRadius: '25px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '600'
            }}
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="slider-container"
      style={{ height: getContainerHeight() }}
    >
      {/* Images with proper aspect ratio */}
      {imageSources.map((image, index) => (
        <div
          key={index}
          className="slider-image-wrapper"
          style={{
            opacity: index === currentIndex ? 1 : 0,
          }}
        >
          <img
            src={image}
            alt={`Yoga training experience ${index + 1}`}
            className="slider-image"
            loading={index === 0 ? "eager" : "lazy"}
            draggable={false}
            onLoad={() => {
              console.log(`Image ${index + 1} loaded with proper aspect ratio`);
            }}
            onError={(e) => {
              console.error(`Failed to load image ${index + 1}:`, e);
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
            <AutoTyping 
              texts={texts} 
              speed={screenSize <= 480 ? 90 : screenSize <= 768 ? 100 : 110} 
              delay={screenSize <= 480 ? 1300 : screenSize <= 768 ? 1500 : 1700} 
            />
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
            <span className="button-text">Teacher Training Program in Bali</span>
          </button>
          
          <button 
            className="slider-button retreat-program-btn" 
            onClick={teacher}
            type="button"
            aria-label="Navigate to Retreat Program in Bali"
          >
            <span className="button-text">Retreat Program in Bali</span>
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
        <IoChevronBack size={screenSize <= 480 ? 22 : screenSize <= 768 ? 26 : 30} />
      </button>
      
      <button
        className="nav-button next"
        onClick={goToNext}
        aria-label="Next image"
        type="button"
      >
        <IoChevronForward size={screenSize <= 480 ? 22 : screenSize <= 768 ? 26 : 30} />
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

      {/* Loading spinner animation */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default React.memo(ImageSliderBanner);