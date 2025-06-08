import React from 'react';
import a from '../../../images/services/200.webp'
import HouseOfYoga from './HouseOfYoga';

const Training200 = () => {
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
                    200-Hour Accredited<br />
                    Yoga Teacher Training<br />
                    In Amertham, Bali
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
                    Become a certified yoga teacher by Yoga Alliance
                  </h1>
                  
                  <p className="lead mb-0" 
                     style={{ 
                       color: '#2E3A87', 
                       fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                       fontWeight: '300'
                     }}>
                    and take part in an exciting journey of 20 days in Bali
                  </p>
                </div>

                {/* Pricing section */}
                <div className="mb-4 mb-md-5">
                  <div className="d-flex align-items-center justify-content-center flex-wrap gap-3 mb-3">
                    <span className="h2" 
                          style={{ 
                            color: '#A8A8A8', 
                            fontWeight: '300',
                            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                            textDecoration: 'line-through'
                          }}>
                      USD 2350
                    </span>
                    <span className="h1" 
                          style={{ 
                            color: '#2E3A87', 
                            fontWeight: '600',
                            fontSize: 'clamp(2rem, 5vw, 3rem)'
                          }}>
                      USD 2000
                    </span>
                  </div>
                  
                  <p className="mb-0" 
                     style={{ 
                       color: '#2E3A87', 
                       fontWeight: '500',
                       fontSize: 'clamp(0.9rem, 2vw, 1.1rem)'
                     }}>
                    *early bird offer -15%
                  </p>
                </div>

                {/* CTA Button */}
                <div className="mb-4">
                  <button className="btn btn-lg px-5 py-3 text-white text-uppercase fw-semibold" 
                          style={{ 
                            backgroundColor: '#2E3A87',
                            border: 'none',
                            borderRadius: '50px',
                            fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                            letterSpacing: '1px',
                            boxShadow: '0 8px 25px rgba(46, 58, 135, 0.3)',
                            transition: 'all 0.3s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 12px 35px rgba(46, 58, 135, 0.4)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 8px 25px rgba(46, 58, 135, 0.3)';
                          }}>
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
            {/* Image Section - Proper sized with rounded corners */}
            <div className="col-12 mb-4 d-flex justify-content-center">
              <img 
                src={a}
                alt="Yoga practitioners in nature" 
                className="img-fluid"
                style={{ 
                  maxWidth: '900px',
                  width: '100%',
                  height: '400px',
                  borderRadius: '25px',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* Content Section Below Image */}
            <div className="col-12">
              <div className="row align-items-start">
                {/* Left side - Title */}
                <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                  <h2 className="mb-0" 
                      style={{ 
                        color: '#2E3A87', 
                        fontWeight: '400',
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        lineHeight: '1.2'
                      }}>
                    After completing the<br />
                    course...
                  </h2>
                </div>

                {/* Right side - Certificates and text */}
                <div className="col-12 col-lg-6">
                  {/* Certification badges */}
                  <div className="d-flex gap-3 mb-3 justify-content-start justify-content-lg-end">
                    <div className="rounded-circle d-flex align-items-center justify-content-center"
                         style={{
                           width: '80px',
                           height: '80px',
                           border: '3px solid #2E3A87',
                           color: '#2E3A87'
                         }}>
                      <div className="text-center">
                        <div style={{ fontSize: '11px', fontWeight: 'bold', lineHeight: '1' }}>RYS</div>
                        <div style={{ fontSize: '20px', fontWeight: 'bold', lineHeight: '1' }}>200</div>
                        <div style={{ fontSize: '9px', lineHeight: '1' }}>YOGA</div>
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
                        <div style={{ fontSize: '11px', fontWeight: 'bold', lineHeight: '1' }}>RYS</div>
                        <div style={{ fontSize: '20px', fontWeight: 'bold', lineHeight: '1' }}>300</div>
                        <div style={{ fontSize: '9px', lineHeight: '1' }}>YOGA</div>
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
                        <div style={{ fontSize: '11px', fontWeight: 'bold', lineHeight: '1' }}>RYS</div>
                        <div style={{ fontSize: '20px', fontWeight: 'bold', lineHeight: '1' }}>500</div>
                        <div style={{ fontSize: '9px', lineHeight: '1' }}>YOGA</div>
                      </div>
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
                      You will receive a Yoga Alliance certificate.
                    </p>
                    <p className="mb-0" 
                       style={{ 
                         color: '#6B7280', 
                         fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                         fontWeight: '400'
                       }}>
                      Recognised and accepted worldwide.
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

export default Training200;