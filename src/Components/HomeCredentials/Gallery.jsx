import React, { useState, useEffect } from 'react';
const Gallery = ({ 
  images = [
    {
      src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Yoga class session",
      caption: "Morning Yoga Practice"
    },
    {
      src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Meditation session",
      caption: "Peaceful Meditation"
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Outdoor yoga",
      caption: "Outdoor Yoga Sessions"
    },
    {
      src: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Yoga studio",
      caption: "Beautiful Studio Space"
    },
    {
      src: "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Group yoga",
      caption: "Community Practice"
    }
  ],

  showThumbnails = true,
  autoPlay = true,
  interval = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <div className="container-fluid py-5">
      <div className="container">
        {/* Title */}
        <div className="text-center mb-5">
        
        </div>

        {/* Main Carousel */}
        <div className="row justify-content-center mb-4">
          <div className="col-lg-10">
            <div className="position-relative shadow-lg rounded overflow-hidden">
              {/* Main Image */}
              <div style={{ height: '500px', overflow: 'hidden' }}>
                <img
                  src={images[currentIndex].src}
                  className="w-100 h-100"
                  alt={images[currentIndex].alt}
                  style={{
                    objectFit: 'cover',
                    transition: 'opacity 0.5s ease-in-out'
                  }}
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
                    <div className="bg-dark bg-opacity-75 rounded px-4 py-2">
                      <h5 className="mb-0 text-white">{images[currentIndex].caption}</h5>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation Arrows */}
              <button
                className="position-absolute top-50 start-0 translate-middle-y btn btn-dark btn-sm ms-2"
                onClick={goToPrevious}
                style={{ zIndex: 10, opacity: 0.8 }}
                onMouseEnter={(e) => e.target.style.opacity = '1'}
                onMouseLeave={(e) => e.target.style.opacity = '0.8'}
              >
                <span style={{ fontSize: '1.2rem' }}>‹</span>
              </button>
              
              <button
                className="position-absolute top-50 end-0 translate-middle-y btn btn-dark btn-sm me-2"
                onClick={goToNext}
                style={{ zIndex: 10, opacity: 0.8 }}
                onMouseEnter={(e) => e.target.style.opacity = '1'}
                onMouseLeave={(e) => e.target.style.opacity = '0.8'}
              >
                <span style={{ fontSize: '1.2rem' }}>›</span>
              </button>

              {/* Dot Indicators */}
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
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        {showThumbnails && (
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="d-flex flex-wrap justify-content-center gap-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`btn p-0 border rounded overflow-hidden shadow-sm ${
                      index === currentIndex ? 'border-primary border-3' : 'border-light'
                    }`}
                    onClick={() => goToSlide(index)}
                    style={{
                      width: '80px',
                      height: '60px',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <img
                      src={image.src}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-100 h-100"
                      style={{
                        objectFit: 'cover',
                        opacity: index === currentIndex ? 1 : 0.7,
                        transform: index === currentIndex ? 'scale(1.05)' : 'scale(1)',
                        transition: 'all 0.3s ease'
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

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