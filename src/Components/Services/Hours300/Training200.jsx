import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const Training200 = () => {
  const navigate = useNavigate();
  
  // State for dynamic image loading
  const [images, setImages] = useState({
    mainImage: null,
    cert300: null,
    yogaCert: null,
    yacepCert: null
  });

  // Memoized navigation function
  const navi = useCallback(() => {
    navigate('/contact');
  }, [navigate]);

  // Load images dynamically for better performance
  useEffect(() => {
    const loadImages = async () => {
      try {
        const [mainImg, cert300Img, yogaImg, yacepImg] = await Promise.all([
          import('../../../images/services/Yogalyaa_300_Hour_TTC_1st image.jpg'),
          import('../../../images/cirtificats/300.png'),
          import('../../../images/cirtificats/yoga.png'),
          import('../../../images/cirtificats/YACEP.png')
        ]);
        
        setImages({
          mainImage: mainImg.default,
          cert300: cert300Img.default,
          yogaCert: yogaImg.default,
          yacepCert: yacepImg.default
        });
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };

    loadImages();
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
        {/* First Section - Yoga Training Offer */}
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
                      300-Hour Yoga Alliance Accredited<br />
                      Advanced Ashtanga Vinyasa Yoga Teacher Training<br />
                      In Ubud, Bali with Yogalayaa
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
                      Become an advanced certified yoga teacher with transformative journey
                    </h1>
                    
                    <p className="lead mb-0" 
                       style={{ 
                         color: '#2E3A87', 
                         fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                         fontWeight: '300'
                       }}>
                      35 Days intensive advanced training in the spiritual heart of Bali - deepening Jeevatmaa to Shivatmaa connection
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
                        $1999
                      </span>
                    </div>
                    
                    <p className="mb-0" 
                       style={{ 
                         color: '#2E3A87', 
                         fontWeight: '500',
                         fontSize: 'clamp(0.9rem, 2vw, 1.1rem)'
                       }}>
                      *Inclusive of accommodation, meals, excursions & advanced certification
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
                      onClick={navi}
                    >
                      Book Your Spot
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section - Certificate Information */}
        <section className="py-5">
          <div className="container">
            <div className="row">
              {/* Image Section - Lazy loaded with loading state */}
              <div className="col-12 mb-4 d-flex justify-content-center">
                {images.mainImage ? (
                  <img 
                    src={images.mainImage}
                    alt="Yoga practitioners in Bali nature" 
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
                    <div className="text-muted">Loading image...</div>
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
                      After completing the<br />
                      course...
                    </h2>
                    
                    <div className="mb-3">
                      <h5 style={{ color: '#2E3A87', fontWeight: '500' }}>What you'll gain from 300-Hour Advanced Training:</h5>
                      <ul className="list-unstyled" style={{ color: '#6B7280' }}>
                        <li className="mb-2">• Advanced authentic yoga from indigenous yoga masters</li>
                        <li className="mb-2">• Comprehensive advanced knowledge - theoretical and practical</li>
                        <li className="mb-2">• Specialized therapeutic applications and injury prevention</li>
                        <li className="mb-2">• Advanced Sanskrit studies and traditional texts</li>
                        <li className="mb-2">• 300-Hour Yoga Alliance RYT certification (requires 200-Hour prerequisite)</li>
                        <li className="mb-2">• Advanced teaching methodology and class sequencing</li>
                      </ul>
                    </div>
                  </div>

                  {/* Right side - Certificates and text */}
                  <div className="col-12 col-lg-6">
                    {/* Certification badges */}
                    <div className="d-flex gap-3 mb-3 justify-content-start justify-content-lg-end">
                      <div className="rounded-circle d-flex align-items-center justify-content-center"
                           style={{
                             width: '100px',
                             height: '100px',
                             color: '#2E3A87'
                           }}>
                        {images.cert300 ? (
                          <img 
                            src={images.cert300} 
                            alt="300 Hour Certification" 
                            style={{
                              width: '70px',
                              height: '70px',
                              objectFit: 'contain'
                            }}
                            loading="lazy"
                          />
                        ) : (
                          <div className="bg-light rounded-circle" style={{ width: '70px', height: '70px' }}></div>
                        )}
                      </div>
                      <div className="rounded-circle d-flex align-items-center justify-content-center"
                           style={{
                             width: '100px',
                             height: '100px',
                             color: '#2E3A87'
                           }}>
                        {images.yogaCert ? (
                          <img 
                            src={images.yogaCert} 
                            alt="Yoga Alliance Certification" 
                            style={{
                              width: '70px',
                              height: '70px',
                              objectFit: 'contain'
                            }}
                            loading="lazy"
                          />
                        ) : (
                          <div className="bg-light rounded-circle" style={{ width: '70px', height: '70px' }}></div>
                        )}
                      </div>
                      <div className="rounded-circle d-flex align-items-center justify-content-center"
                           style={{
                             width: '100px',
                             height: '100px',
                             color: '#2E3A87'
                           }}>
                        {images.yacepCert ? (
                          <img 
                            src={images.yacepCert} 
                            alt="YACEP Certification" 
                            style={{
                              width: '70px',
                              height: '70px',
                              objectFit: 'contain'
                            }}
                            loading="lazy"
                          />
                        ) : (
                          <div className="bg-light rounded-circle" style={{ width: '70px', height: '70px' }}></div>
                        )}
                      </div>
                    </div>

                    {/* Certificate text - aligned to right on desktop */}
                    <div className="text-start text-lg-end">
                      <p className="mb-1" 
                         style={{ 
                           color: '#6B7280', 
                           fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                           fontWeight: '400'
                         }}>
                        You will receive a 300-Hour Yoga Alliance certificate.
                      </p>
                      <p className="mb-1" 
                         style={{ 
                           color: '#6B7280', 
                           fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                           fontWeight: '400'
                         }}>
                        Advanced level recognized worldwide.
                      </p>
                      <p className="mb-0" 
                         style={{ 
                           color: '#2E3A87', 
                           fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                           fontWeight: '500'
                         }}>
                        Deepening Jeevatmaa To Shivatmaa Connection
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