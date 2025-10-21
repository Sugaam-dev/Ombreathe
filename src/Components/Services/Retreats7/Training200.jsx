import React, { useState, useEffect, useCallback } from 'react';

const Training200 = () => {
  // State for dynamic image loading
  const [adventureImage, setAdventureImage] = useState(null);

  // Load image dynamically for better performance
  useEffect(() => {
    const loadImage = async () => {
      try {
        const img = await import('../../../images/Gallery/Canyoneering-Bali.jpg');
        setAdventureImage(img.default);
      } catch (error) {
        console.error('Error loading adventure image:', error);
      }
    };

    loadImage();
  }, []);

  // Memoized button hover handlers
  const handleMouseEnter = useCallback((e) => {
    e.target.style.transform = 'translateY(-2px)';
    e.target.style.boxShadow = '0 12px 35px rgba(46, 58, 135, 0.4)';
  }, []);

  const handleMouseLeave = useCallback((e) => {
    e.target.style.transform = 'translateY(0)';
    e.target.style.boxShadow = '0 8px 25px rgba(46, 58, 135, 0.3)';
  }, []);

  return (
    <>
      <div>
        {/* First Section - Retreat Offer */}
        <div className="min-vh-100 d-flex align-items-center justify-content-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10 col-xl-8">
                <div className="text-center">
                  
                  {/* Header section */}
                  <div className="mb-4 mb-md-5">
                    <h6 className="text-uppercase mb-2 mb-md-3" 
                        style={{ 
                          color: '#2E3A87', 
                          fontWeight: '600',
                          letterSpacing: '2px',
                          fontSize: 'clamp(0.8rem, 2vw, 1rem)'
                        }}>
                      7 Day Adventure and Yoga Retreat<br />
                      In Lovely Ubud, Bali, Indonesia<br />
                      With Ombreath
                    </h6>
                  </div>

                  {/* Main title */}
                  <div className="mb-4 mb-md-5">
                    <h1 className="display-4 mb-4" 
                        style={{ 
                          color: '#2E3A87', 
                          fontWeight: '400',
                          lineHeight: '1.2',
                          fontSize: 'clamp(2rem, 5vw, 3.5rem)'
                        }}>
                      Combine the thrill of adventure with the serenity of yoga
                    </h1>
                    
                    <p className="lead mb-0" 
                       style={{ 
                         color: '#2E3A87', 
                         fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                         fontWeight: '300'
                       }}>
                      7 days of transformative experiences in Bali's most spiritual destination
                    </p>
                  </div>

                  {/* Pricing section */}
                  <div className="mb-4 mb-md-5">
                    <div className="d-flex align-items-center justify-content-center flex-wrap gap-3 mb-3">
                      <span className="h1" 
                            style={{ 
                              color: '#2E3A87', 
                              fontWeight: '600',
                              fontSize: 'clamp(2rem, 5vw, 3rem)'
                            }}>
                        $1099 USD
                      </span>
                    </div>
                    
                    <p className="mb-0" 
                       style={{ 
                         color: '#2E3A87', 
                         fontWeight: '500',
                         fontSize: 'clamp(0.9rem, 2vw, 1.1rem)'
                       }}>
                      *All-inclusive: accommodation, meals, activities & yoga sessions
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div className="mb-4">
                    <button 
                      className="btn btn-lg px-5 py-3 text-white text-uppercase fw-semibold" 
                      style={{ 
                        backgroundColor: '#2E3A87',
                        border: 'none',
                        borderRadius: '50px',
                        fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                        letterSpacing: '1px',
                        boxShadow: '0 8px 25px rgba(46, 58, 135, 0.3)',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      Book Your Retreat
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section - What's Included */}
        <section className="py-5">
          <div className="container">
            <div className="row">
              {/* Image Section - Lazy loaded with loading state */}
              <div className="col-12 mb-4 d-flex justify-content-center">
                {adventureImage ? (
                  <img 
                    src={adventureImage}
                    alt="Adventure and yoga in Bali" 
                    className="img-fluid"
                    style={{ 
                      maxWidth: '900px',
                      width: '100%',
                      height: 'auto',
                      borderRadius: '25px',
                      objectFit: 'cover'
                    }}
                    loading="lazy"
                  />
                ) : (
                  <div 
                    className="d-flex align-items-center justify-content-center bg-light"
                    style={{ 
                      maxWidth: '900px',
                      width: '100%',
                      height: '400px',
                      borderRadius: '25px'
                    }}
                  >
                    <div className="text-muted">Loading adventure image...</div>
                  </div>
                )}
              </div>

              {/* Content Section Below Image */}
              <div className="col-12">
                <div className="row align-items-start">
                  {/* Left side - Title */}
                  <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                    <h2 className="mb-4" 
                        style={{ 
                          color: '#2E3A87', 
                          fontWeight: '400',
                          fontSize: 'clamp(2rem, 4vw, 3rem)',
                          lineHeight: '1.2'
                        }}>
                      What's included in<br />
                      your retreat...
                    </h2>
                    
                    <div className="mb-3">
                      <h5 style={{ color: '#2E3A87', fontWeight: '500' }}>Your adventure includes:</h5>
                      <ul className="list-unstyled" style={{ color: '#6B7280' }}>
                        <li className="mb-2">• 6 nights luxury accommodation with A/C & pool</li>
                        <li className="mb-2">• Free airport pickup from Ngurah Rai (DPS)</li>
                        <li className="mb-2">• Daily yoga sessions and meditation</li>
                        <li className="mb-2">• Adventure activities: rafting, trekking, temple visits</li>
                        <li className="mb-2">• Traditional Kecak dance performance</li>
                        <li className="mb-2">• Certificate of completion & yoga kit</li>
                      </ul>
                    </div>
                  </div>

                  {/* Right side - Ratings and info */}
                  <div className="col-12 col-lg-6">
                    {/* Rating badges */}
                    <div className="d-flex gap-3 mb-3 justify-content-start justify-content-lg-end">
                      <div className="rounded-circle d-flex align-items-center justify-content-center"
                           style={{
                             width: '80px',
                             height: '80px',
                             border: '3px solid #2E3A87',
                             color: '#2E3A87'
                           }}>
                        <div className="text-center">
                          <div style={{ fontSize: '11px', fontWeight: 'bold', lineHeight: '1' }}>FOOD</div>
                          <div style={{ fontSize: '20px', fontWeight: 'bold', lineHeight: '1' }}>4.75</div>
                          <div style={{ fontSize: '9px', lineHeight: '1' }}>RATING</div>
                        </div>
                      </div>
                      <div className="rounded-circle d-flex align-items-center justify-content-center"
                           style={{
                             width: '80px',
                             height: '80px',
                             border: '3px solid #2E3A87',
                             color: '#2E3A87'
                           }}>
                        <div className="text-center">
                          <div style={{ fontSize: '8px', fontWeight: 'bold', lineHeight: '1' }}>TEACHERS</div>
                          <div style={{ fontSize: '20px', fontWeight: 'bold', lineHeight: '1' }}>4.5</div>
                          <div style={{ fontSize: '9px', lineHeight: '1' }}>RATING</div>
                        </div>
                      </div>
                    </div>

                    {/* Info text */}
                    <div className="text-start text-lg-end">
                      <p className="mb-1" 
                         style={{ 
                           color: '#6B7280', 
                           fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                           fontWeight: '400'
                         }}>
                        Highly rated retreat experience with excellent food and teachers.
                      </p>
                      <p className="mb-1" 
                         style={{ 
                           color: '#6B7280', 
                           fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                           fontWeight: '400'
                         }}>
                        Located 8 minutes from Ubud Palace and Market.
                      </p>
                      <p className="mb-0" 
                         style={{ 
                           color: '#2E3A87', 
                           fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                           fontWeight: '500'
                         }}>
                        Transform your mind, body and spirit in Bali
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default React.memo(Training200);