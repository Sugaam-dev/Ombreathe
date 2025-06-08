import React, { useState, useEffect } from 'react';

const TransTeach = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imagesVisible, setImagesVisible] = useState({});

  useEffect(() => {
    setIsVisible(true);
    
    // Stagger image animations
    const timeouts = [];
    [0, 1, 2].forEach((index) => {
      timeouts.push(
        setTimeout(() => {
          setImagesVisible(prev => ({ ...prev, [index]: true }));
        }, 500 + index * 300)
      );
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  const yogaImages = [
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Advanced therapeutic yoga practice",
      title: "Therapeutic Yoga",
      description: "Advanced applications for healing, injury prevention, and specialized populations with therapeutic protocols"
    },
    {
      src: "https://images.unsplash.com/photo-1593810450967-f9c42742e326?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Advanced Ashtanga sequences",
      title: "Advanced Ashtanga",
      description: "Mastery of Primary Series and introduction to Intermediate Series with advanced breathing techniques"
    },
    {
      src: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Sanskrit studies and Vedantic philosophy",
      title: "Sanskrit & Vedanta",
      description: "Deep study of classical texts, Sanskrit pronunciation, and advanced philosophical understanding"
    }
  ];

  return (
    <>
      <style jsx>{`
        .yt-main-container {
          background: white;
          overflow: hidden;
        }

        .yt-main-heading {
          font-size: 3.2rem;
          font-weight: 300;
          color: #4a5568;
          line-height: 1.3;
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease-out;
        }

        .yt-main-heading.yt-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .yt-highlight {
          color: #6a5acd;
          font-weight: 400;
          position: relative;
        }

        .yt-highlight::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #6a5acd, #48bb78);
          transform: scaleX(0);
          animation: yt-expandLine 2s ease-out 0.5s both;
        }

        @keyframes yt-expandLine {
          to { transform: scaleX(1); }
        }

        .yt-subtitle {
          font-size: 1.3rem;
          color: #718096;
          font-weight: 300;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease-out 0.3s;
        }

        .yt-subtitle.yt-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .yt-image-card {
          position: relative;
          height: 400px;
          border-radius: 25px;
          overflow: hidden;
          transform: translateY(50px) scale(0.9);
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }

        .yt-image-card.yt-visible {
          transform: translateY(0) scale(1);
          opacity: 1;
        }

        .yt-image-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 60px rgba(106, 90, 205, 0.2);
        }

        .yt-image-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .yt-image-card:hover img {
          transform: scale(1.1);
        }

        .yt-image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            45deg,
            rgba(106, 90, 205, 0.3) 0%,
            rgba(72, 187, 120, 0.3) 50%,
            rgba(139, 69, 19, 0.2) 100%
          );
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .yt-image-card:hover .yt-image-overlay {
          opacity: 1;
        }

        .yt-image-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 2rem;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
          color: white;
          transform: translateY(100%);
          transition: transform 0.4s ease;
        }

        .yt-image-card:hover .yt-image-content {
          transform: translateY(0);
        }

        .yt-practice-title {
          font-size: 1.2rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .yt-practice-description {
          font-size: 0.9rem;
          opacity: 0.9;
          line-height: 1.4;
          margin: 0;
        }

        @media (max-width: 576px) {
          .yt-main-heading {
            font-size: 2rem;
          }
          
          .yt-subtitle {
            font-size: 1.1rem;
          }
          
          .yt-image-card {
            height: 300px;
          }
        }

        @media (max-width: 768px) {
          .yt-main-heading {
            font-size: 2.4rem;
          }
        }
      `}</style>

      <div className="yt-main-container py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className={`yt-main-heading text-center mb-4 ${isVisible ? 'yt-visible' : ''}`}>
                Advanced mastery teachings of <span className="yt-highlight">Therapeutic Yoga, Advanced Ashtanga, and Vedantic Studies</span> exploring<br />
                deep philosophical foundations and practical applications for healing
              </h1>

              <p className={`yt-subtitle text-center mb-5 ${isVisible ? 'yt-visible' : ''}`}>
                Our 300-hour advanced training builds upon foundational knowledge, diving deep into therapeutic applications, advanced anatomy, Sanskrit studies, and specialized teaching methodologies. This intensive program prepares experienced practitioners to become master teachers and yoga therapists.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {yogaImages.map((image, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-12">
                <div 
                  className={`yt-image-card ${imagesVisible[index] ? 'yt-visible' : ''}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <img src={image.src} alt={image.alt} />
                  <div className="yt-image-overlay"></div>
                  <div className="yt-image-content">
                    <h3 className="yt-practice-title">{image.title}</h3>
                    <p className="yt-practice-description">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information Section */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="text-center">
                <h3 className="mb-4" style={{ color: '#4a5568' }}>What Makes Our 300-Hour Training Exceptional</h3>
                <div className="row g-4">
                  <div className="col-md-4">
                    <div className="p-4">
                      <h5 style={{ color: '#6a5acd' }}>Advanced Therapeutic Focus</h5>
                      <p style={{ color: '#718096' }}>
                        Specialized training in yoga therapy, injury rehabilitation, and working with specific populations
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="p-4">
                      <h5 style={{ color: '#6a5acd' }}>Master-Level Teaching</h5>
                      <p style={{ color: '#718096' }}>
                        Advanced sequencing, workshop design, and mentorship skills for experienced practitioners
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="p-4">
                      <h5 style={{ color: '#6a5acd' }}>Deep Sanskrit Studies</h5>
                      <p style={{ color: '#718096' }}>
                        Comprehensive study of classical texts, chanting, and traditional philosophical frameworks
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransTeach;