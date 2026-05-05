import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import AutoTyping from '../AutoTyping';

const ImageSliderBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const [imageDimensions, setImageDimensions] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  // Track breakpoint separately so image set only reloads when crossing mobile/desktop boundary
  const [currentBreakpoint, setCurrentBreakpoint] = useState(() =>
    window.innerWidth <= 768 ? 'mobile' : 'desktop'
  );

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setScreenSize(width);
      setScreenHeight(height);

      const newBreakpoint = width <= 768 ? 'mobile' : 'desktop';
      setCurrentBreakpoint((prev) => {
        if (prev !== newBreakpoint) {
          // Reset stale image/dimension cache when switching image sets
          setImagesLoaded({});
          setImageDimensions({});
          setCurrentIndex(0);
          setIsLoading(true);
        }
        return newBreakpoint;
      });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  const isMobile = useMemo(() => currentBreakpoint === 'mobile', [currentBreakpoint]);
  const isTablet = useMemo(() => screenSize > 768 && screenSize <= 1024, [screenSize]);

  // Mobile → mobile images | Tablet + Desktop → desktop images
  const images = useMemo(() => {
    if (isMobile) {
      return [
        import('../../images/mobile/shiv_Mobile.png'),
        import('../../images/mobile/TTC.jpg'),
        import('../../images/mobile/temple yoga.jpg'),
        import('../../images/mobile/Experience.jpg'),
        import('../../images/mobile/Certification.jpg'),
      ];
    } else {
      return [
        import('../../images/Gemini_Generated_Image.jpg'),
        import('../../images/2.jpg'),
        import('../../images/3.jpg'),
        import('../../images/4.jpg'),
        import('../../images/5.jpg'),
      ];
    }
  }, [isMobile]);

  const getImageDimensions = useCallback((img) => {
    return new Promise((resolve) => {
      const image = new Image();
      image.onload = () => {
        resolve({
          width: image.width,
          height: image.height,
          aspectRatio: image.width / image.height,
        });
      };
      image.onerror = () => {
        resolve({ width: 1920, height: 1080, aspectRatio: 16 / 9 });
      };
      image.src = img;
    });
  }, []);

  // Reload images whenever breakpoint switches (cancelled if another switch happens first)
  useEffect(() => {
    let cancelled = false;

    const loadImagesWithDimensions = async () => {
      try {
        setIsLoading(true);
        const loadedImageSources = await Promise.all(images);
        if (cancelled) return;

        const imageMap = {};
        const dimensionsMap = {};

        loadedImageSources.forEach((img, index) => {
          imageMap[index] = img.default;
        });

        const dimensionPromises = Object.values(imageMap).map(async (imageSrc, index) => {
          const dimensions = await getImageDimensions(imageSrc);
          dimensionsMap[index] = dimensions;
        });

        await Promise.all(dimensionPromises);
        if (cancelled) return;

        setImagesLoaded(imageMap);
        setImageDimensions(dimensionsMap);
        setCurrentIndex(0);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading images:', error);
        if (!cancelled) setIsLoading(false);
      }
    };

    loadImagesWithDimensions();
    return () => { cancelled = true; };
  }, [images, getImageDimensions]);

  const imageSources = useMemo(() => Object.values(imagesLoaded), [imagesLoaded]);

  // Height logic:
  // Mobile  → exact aspect ratio (portrait images fit perfectly)
  // Tablet  → exact aspect ratio (desktop images, no clamping so nothing gets cut)
  // Desktop → clamp to screen height
  const getContainerHeight = useCallback(() => {
    if (!imageDimensions[currentIndex]) return 'auto';
    const aspectRatio = imageDimensions[currentIndex].aspectRatio;
    const calculatedHeight = screenSize / aspectRatio;

    if (isMobile || isTablet) {
      return `${calculatedHeight}px`;
    }

    const minHeight = Math.min(screenHeight * 0.6, 400);
    const maxHeight = screenHeight;
    return `${Math.max(minHeight, Math.min(calculatedHeight, maxHeight))}px`;
  }, [currentIndex, imageDimensions, screenSize, screenHeight, isMobile, isTablet]);

  const texts = useMemo(() => {
    if (screenSize <= 480) {
      return ['Holistic Yoga Training.', 'Kundalini Yoga Courses.', 'Retreats & Workshops.'];
    }
    return ['Holistic Yoga Training Programs.', 'Kundalini Yoga Courses.', 'Peaceful Retreats & Workshops.'];
  }, [screenSize]);

  const teacher = useCallback(() => navigate('/programs'), [navigate]);
  const retreats = useCallback(() => navigate('/programs/retreat-7-adventure'), [navigate]);

  useEffect(() => {
    if (!isAutoPlaying || imageSources.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === imageSources.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, imageSources.length]);

  const goToPrevious = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === 0 ? imageSources.length - 1 : prev - 1));
    setTimeout(() => setIsAutoPlaying(true), 6000);
  }, [imageSources.length]);

  const goToNext = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === imageSources.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAutoPlaying(true), 6000);
  }, [imageSources.length]);

  const goToSlide = useCallback((index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 6000);
  }, []);

  useEffect(() => {
    if (imageSources.length === 0) return;
    const preloadImage = (src) => new Promise((res, rej) => {
      const img = new Image();
      img.onload = res;
      img.onerror = rej;
      img.src = src;
    });
    const next = (currentIndex + 1) % imageSources.length;
    const prev = (currentIndex - 1 + imageSources.length) % imageSources.length;
    Promise.all([
      imageSources[next] && preloadImage(imageSources[next]),
      imageSources[prev] && preloadImage(imageSources[prev]),
    ].filter(Boolean)).catch(console.error);
  }, [currentIndex, imageSources]);

  if (isLoading) {
    return (
      <>
        <style>{`@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`}</style>
        <div style={{
          minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'linear-gradient(135deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%)',
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '60px', height: '60px',
              border: '4px solid rgba(255,255,255,0.3)', borderTop: '4px solid #ff6b35',
              borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 20px',
            }} />
            <p style={{ color: '#fff', fontSize: '1.2rem', fontWeight: '500' }}>
              Connecting Jeevatmaa To Shivatmaa
            </p>
          </div>
        </div>
      </>
    );
  }

  if (imageSources.length === 0) {
    return (
      <div style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'linear-gradient(135deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%)',
      }}>
        <div style={{ textAlign: 'center', color: '#fff' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Oops!</h2>
          <p style={{ marginBottom: '1.5rem' }}>Unable to load images. Please refresh the page.</p>
          <button onClick={() => window.location.reload()} style={{
            padding: '0.7rem 1.5rem', background: 'linear-gradient(135deg,#ff6b35,#f7931e)',
            color: '#fff', border: 'none', borderRadius: '25px', cursor: 'pointer',
            fontSize: '1rem', fontWeight: '600',
          }}>Refresh Page</button>
        </div>
      </div>
    );
  }

  return (
    <>
      <style>{`
        *{margin:0;padding:0;box-sizing:border-box}
        html,body{width:100%;overflow-x:hidden;font-family:sans-serif}
        @keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}

        .slider-container{
          position:relative;
          width:100%;
          overflow:hidden;
          z-index:1;
        }

        .slider-image-wrapper{
          position:absolute;
          inset:0;
          transition:opacity 0.8s ease-in-out;
          z-index:1;
        }

        /* Desktop: cover fills nicely */
        .slider-image{
          width:100%;
          height:100%;
          object-fit:cover;
          object-position:center center;
          display:block;
          transition:transform 0.3s ease;
        }

        /* Tablet: contain so full desktop image shows, no cropping */
        @media(max-width:1024px) and (min-width:769px){
          .slider-image{
            object-fit:contain;
            background-color:#000;
          }
        }

        /* Mobile: cover works great with portrait images */
        @media(max-width:768px){
          .slider-image{
            object-fit:cover;
          }
        }

        .slider-overlay{
          position:absolute;inset:0;
          background:linear-gradient(rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.4) 50%,rgba(0,0,0,0.3) 100%);
          z-index:2;
        }

        .slider-content{
          position:absolute;top:46%;left:50%;
          transform:translate(-50%,-50%);
          text-align:center;color:#fff;z-index:100;
          width:90%;max-width:1200px;
          padding:clamp(0.5rem,2vw,2rem);
        }

        .slider-title{
          font-size:clamp(1.6rem,4.5vw,3.5rem);
          font-weight:bold;
          margin-bottom:clamp(0.6rem,2vw,1.2rem);
          text-shadow:2px 2px 8px rgba(0,0,0,0.9);
          line-height:1.3;
        }

        .type{
          font-size:clamp(1.2rem,3.5vw,2.5rem);
          font-weight:600;
          margin-bottom:clamp(1.5rem,3vw,2rem);
          color:#ff6b35;
          text-shadow:2px 2px 6px rgba(0,0,0,0.9);
          min-height:clamp(2rem,4vw,3rem);
          display:flex;align-items:center;justify-content:center;
        }

        .type span{
          display:block;white-space:nowrap;text-align:center;
          min-height:clamp(40px,5vw,60px);
        }

        .slider-buttons-container{
          display:flex;flex-wrap:wrap;justify-content:center;
          gap:clamp(1rem,2.5vw,1.8rem);
          margin-top:clamp(1.5rem,3vw,2.5rem);
        }

        .slider-button{
          padding:clamp(0.8rem,2vw,1.2rem) clamp(1.5rem,4vw,2.8rem);
          font-size:clamp(0.9rem,2vw,1.1rem);
          font-weight:600;border:none;border-radius:50px;cursor:pointer;
          text-transform:uppercase;letter-spacing:0.5px;
          box-shadow:0 4px 15px rgba(0,0,0,0.4);
          display:inline-flex;align-items:center;justify-content:center;
          transition:all 0.3s ease;
          min-height:clamp(45px,6vw,60px);
          backdrop-filter:blur(5px);position:relative;overflow:hidden;
        }

        .button-text{
          white-space:nowrap;overflow:hidden;
          text-overflow:ellipsis;max-width:100%;
        }

        .teacher-training-btn{background:linear-gradient(135deg,#ff6b35,#f7931e);color:#fff}
        .teacher-training-btn:hover{
          background:linear-gradient(135deg,#f7931e,#ff6b35);
          transform:translateY(-2px);
          box-shadow:0 6px 20px rgba(255,107,53,0.5);
        }

        .retreat-program-btn{background:linear-gradient(135deg,#4a90e2,#357abd);color:#fff}
        .retreat-program-btn:hover{
          background:linear-gradient(135deg,#357abd,#4a90e2);
          transform:translateY(-2px);
          box-shadow:0 6px 20px rgba(74,144,226,0.5);
        }

        .nav-button{
          position:absolute;top:50%;transform:translateY(-50%);
          background:rgba(255,255,255,0.9);border-radius:50%;border:none;
          width:clamp(45px,5vw,60px);height:clamp(45px,5vw,60px);
          display:flex;align-items:center;justify-content:center;
          cursor:pointer;z-index:200;backdrop-filter:blur(10px);
          transition:all 0.3s ease;box-shadow:0 2px 10px rgba(0,0,0,0.2);
        }
        .nav-button:hover{
          background:rgba(255,255,255,1);
          transform:translateY(-50%) scale(1.1);
          box-shadow:0 4px 15px rgba(0,0,0,0.3);
        }
        .nav-button.prev{left:clamp(1rem,3vw,2rem)}
        .nav-button.next{right:clamp(1rem,3vw,2rem)}

        .dots-container{
          position:absolute;bottom:clamp(1.5rem,4vw,2.5rem);left:50%;
          transform:translateX(-50%);
          display:flex;gap:clamp(0.5rem,1.5vw,0.8rem);z-index:200;
        }

        .dot{
          width:clamp(12px,2vw,16px);height:clamp(12px,2vw,16px);
          border:2px solid rgba(255,255,255,0.8);border-radius:50%;
          background:transparent;cursor:pointer;
          transition:all 0.3s ease;backdrop-filter:blur(5px);
        }
        .dot.active{
          background:white;border-color:white;
          transform:scale(1.3);box-shadow:0 0 10px rgba(255,255,255,0.5);
        }
        .dot:hover{border-color:white;transform:scale(1.1)}

        /* Tablet typography */
        @media(max-width:1024px) and (min-width:769px){
          .slider-title{font-size:clamp(1.8rem,4vw,2.8rem)}
          .type{font-size:clamp(1.3rem,3vw,2rem)}
          .button-text{font-size:clamp(0.9rem,2.2vw,1rem)}
        }

        /* Mobile */
        @media(max-width:768px){
          .slider-content{width:95%;padding:clamp(1rem,3vw,1.5rem)}
          .slider-title{font-size:clamp(1.4rem,5vw,2.2rem);margin-bottom:clamp(0.8rem,2vw,1rem)}
          .type{font-size:clamp(1rem,4vw,1.8rem);margin-bottom:clamp(1.2rem,3vw,1.8rem);min-height:clamp(1.5rem,5vw,2.5rem)}
          .slider-buttons-container{gap:clamp(1rem,3vw,1.5rem);margin-top:clamp(1.2rem,3vw,2rem)}
          .slider-button{width:100%;max-width:350px;font-size:clamp(0.8rem,3vw,1rem);padding:clamp(0.8rem,3vw,1rem) clamp(1.2rem,4vw,2rem);min-height:clamp(40px,7vw,50px)}
          .button-text{font-size:clamp(0.8rem,3vw,1rem);letter-spacing:0.3px}
        }

        /* Small Mobile */
        @media(max-width:480px){
          .slider-content{width:96%;padding:clamp(0.8rem,3vw,1.2rem)}
          .slider-title{font-size:clamp(1.2rem,6vw,1.8rem);margin-bottom:clamp(0.6rem,2vw,0.8rem);line-height:1.2}
          .type{font-size:clamp(0.9rem,5vw,1.4rem);margin-bottom:clamp(1rem,3vw,1.5rem);min-height:clamp(1.3rem,6vw,2rem)}
          .slider-buttons-container{gap:clamp(0.8rem,3vw,1.2rem);margin-top:clamp(1rem,3vw,1.5rem)}
          .slider-button{max-width:320px;font-size:clamp(0.75rem,3.5vw,0.9rem);padding:clamp(0.7rem,3vw,0.9rem) clamp(1rem,4vw,1.5rem);min-height:clamp(38px,8vw,45px)}
          .button-text{font-size:clamp(0.75rem,3.5vw,0.9rem);letter-spacing:0.2px}
          .nav-button{width:clamp(40px,8vw,50px);height:clamp(40px,8vw,50px)}
          .nav-button.prev{left:clamp(0.5rem,2vw,1rem)}
          .nav-button.next{right:clamp(0.5rem,2vw,1rem)}
        }

        /* Very Small Mobile */
        @media(max-width:360px){
          .slider-title{font-size:clamp(1rem,7vw,1.5rem);line-height:1.1}
          .type{font-size:clamp(0.8rem,6vw,1.2rem);min-height:clamp(1.2rem,7vw,1.8rem)}
          .slider-button{font-size:clamp(0.7rem,4vw,0.8rem);padding:clamp(0.6rem,3vw,0.8rem) clamp(0.8rem,4vw,1.2rem);max-width:280px;min-height:clamp(35px,9vw,42px)}
          .button-text{font-size:clamp(0.7rem,4vw,0.8rem);letter-spacing:0.1px}
        }

        /* Landscape Mobile */
        @media(max-height:500px) and (orientation:landscape){
          .slider-content{width:95%;padding:clamp(0.5rem,2vw,1rem)}
          .slider-title{font-size:clamp(1rem,4vw,1.6rem);margin-bottom:clamp(0.3rem,1vw,0.5rem)}
          .type{font-size:clamp(0.8rem,3vw,1.2rem);margin-bottom:clamp(0.6rem,2vw,1rem);min-height:clamp(1rem,4vw,1.5rem)}
          .slider-buttons-container{flex-direction:row;gap:clamp(0.8rem,3vw,1.2rem);margin-top:clamp(0.8rem,2vw,1.2rem)}
          .slider-button{width:auto;max-width:none;min-width:clamp(140px,20vw,200px);font-size:clamp(0.7rem,2.5vw,0.9rem);padding:clamp(0.4rem,2vw,0.6rem) clamp(1rem,4vw,1.5rem);min-height:clamp(32px,6vw,40px)}
          .button-text{font-size:clamp(0.7rem,2.5vw,0.9rem)}
          .dots-container{bottom:clamp(0.5rem,2vw,1rem)}
        }

        /* Ultra-wide */
        @media(min-width:1600px){
          .slider-title{font-size:clamp(2.5rem,3vw,4rem)}
          .type{font-size:clamp(2rem,2.5vw,3rem)}
          .slider-button{font-size:clamp(1rem,1.2vw,1.3rem);padding:clamp(1rem,1.5vw,1.5rem) clamp(2rem,3vw,3.5rem);min-height:clamp(55px,4vw,70px)}
        }
      `}</style>

      <div className="slider-container" style={{ height: getContainerHeight() }}>

        {imageSources.map((image, index) => (
          <div
            key={index}
            className="slider-image-wrapper"
            style={{ opacity: index === currentIndex ? 1 : 0 }}
          >
            <img
              src={image}
              alt={`Yoga training experience ${index + 1}`}
              className="slider-image"
              loading={index === 0 ? 'eager' : 'lazy'}
              draggable={false}
             
            />
            <div className="slider-overlay" />
          </div>
        ))}

        <div className="slider-content">
          <h1 className="slider-title">Welcome To The Ombreathe For</h1>
          <div className="type">
            <span>
              <AutoTyping
                texts={texts}
                speed={screenSize <= 480 ? 90 : screenSize <= 768 ? 100 : 110}
                delay={screenSize <= 480 ? 1300 : screenSize <= 768 ? 1500 : 1700}
              />
            </span>
          </div>
          <div className="slider-buttons-container">
            <button
              className="slider-button teacher-training-btn"
              onClick={teacher}
              type="button"
              aria-label="Navigate to Teacher Training Program in Bali"
            >
              <span className="button-text">Teacher Training Program</span>
            </button>
            <button
              className="slider-button retreat-program-btn"
              onClick={retreats}
              type="button"
              aria-label="Navigate to Retreat Program in Bali"
            >
              <span className="button-text">Retreat Program</span>
            </button>
          </div>
        </div>

        {/* Nav arrows: desktop only */}
        {!isMobile && (
          <>
            <button className="nav-button prev" onClick={goToPrevious} aria-label="Previous image" type="button">
              <IoChevronBack size={30} />
            </button>
            <button className="nav-button next" onClick={goToNext} aria-label="Next image" type="button">
              <IoChevronForward size={30} />
            </button>
          </>
        )}

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

      </div>
    </>
  );
};

export default React.memo(ImageSliderBanner); 