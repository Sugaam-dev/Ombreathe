import React, { useState, useEffect } from 'react';
import defaultA from '../../../images/services/7-Day Adventure Retreat.jpg'
import defaultB from '../../../images/Gallery/baliadventure.jpg'
import defaultC from '../../../images/Gallery/Bali-Activities.jpg'

const YogaTrainingPromo = ({
  sectionLabel = "Ombreathe BALI RETREAT",
  promoHeading = "Join us for an immersive\n7-day adventure & yoga\nretreat in lovely Ubud, Bali",
  features = [
    { title: "6 nights luxury accommodation with", subtitle: "private room, A/C, and pool access" },
    { title: "Daily adventure activities: rafting,", subtitle: "jungle trekking, temple visits & more" },
    { title: "3 daily healthy organic meals", subtitle: "vegetarian/vegan/gluten-free options" },
    { title: "Daily yoga sessions, meditation &", subtitle: "relaxation in stunning natural settings" },
    { title: "Traditional Kecak dance performance", subtitle: "& authentic Balinese cultural experiences" }
  ],
  promoImages = [defaultA, defaultB, defaultC]
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedItems, setAnimatedItems] = useState({});

  useEffect(() => {
    setIsVisible(true);
    const timeouts = [];
    features.forEach((_, index) => {
      timeouts.push(
        setTimeout(() => {
          setAnimatedItems(prev => ({ ...prev, [index]: true }));
        }, 300 + index * 200)
      );
    });
    return () => timeouts.forEach(clearTimeout);
  }, [features]);

  return (
    <>
      <style>{`
        .ytp-container { padding: 3rem 1rem; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: white; }
        .ytp-main-content { opacity: 0; transform: translateY(20px); transition: all 0.8s ease-out; }
        .ytp-main-content.ytp-visible { opacity: 1; transform: translateY(0); }
        .ytp-diamond-logo {
          width: 40px; height: 40px; background: #6a5acd; transform: rotate(45deg);
          margin-bottom: 2rem; display: inline-block;
          animation: ytp-rotate 4s linear infinite; position: relative;
        }
        .ytp-diamond-logo::before {
          content: ''; position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%) rotate(-45deg);
          width: 20px; height: 20px; background: white;
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
        @keyframes ytp-rotate { from { transform: rotate(45deg); } to { transform: rotate(405deg); } }
        .ytp-section-title { font-size: 0.9rem; font-weight: 600; color: #6a5acd; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 1.5rem; }
        .ytp-main-heading { font-size: 3.2rem; font-weight: 300; color: #2d3748; line-height: 1.2; margin-bottom: 3rem; white-space: pre-line; }
        .ytp-highlight { color: #6a5acd; font-weight: 400; }
        .ytp-features-container { margin-bottom: 2rem; }
        .ytp-feature-item { display: flex; align-items: center; margin-bottom: 2.5rem; transform: translateX(-30px); opacity: 0; transition: all 0.6s ease; }
        .ytp-feature-item.ytp-animated { transform: translateX(0); opacity: 1; }
        .ytp-feature-item:hover { transform: translateX(10px); }
        .ytp-feature-icon { width: 70px; height: 70px; border: 2px solid #e2e8f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 1.5rem; flex-shrink: 0; transition: all 0.3s ease; background: white; }
        .ytp-feature-item:hover .ytp-feature-icon { border-color: #6a5acd; transform: scale(1.1); box-shadow: 0 5px 20px rgba(106, 90, 205, 0.2); }
        .ytp-feature-text h5 { color: #2d3748; font-weight: 400; margin-bottom: 0.2rem; font-size: 1.1rem; line-height: 1.4; }
        .ytp-feature-text p { color: #6a5acd; margin: 0; font-weight: 400; }
        .ytp-images-container { position: relative; }
        .ytp-main-image { width: 100%; height: auto; border-radius: 20px; overflow: hidden; margin-bottom: 1rem; transform: scale(0.95); opacity: 0; transition: all 0.8s ease; }
        .ytp-main-image.ytp-visible { transform: scale(1); opacity: 1; }
        .ytp-main-image img { width: 100%; height: auto; object-fit: cover; transition: transform 0.5s ease; }
        .ytp-main-image:hover img { transform: scale(1.05); }
        .ytp-secondary-images { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .ytp-secondary-image { height: auto; border-radius: 15px; overflow: hidden; transform: translateY(20px); opacity: 0; transition: all 0.6s ease; }
        .ytp-secondary-image.ytp-visible { transform: translateY(0); opacity: 1; }
        .ytp-secondary-image img { width: 100%; height: auto; object-fit: cover; transition: transform 0.5s ease; }
        .ytp-secondary-image:hover img { transform: scale(1.1); }
        @media (max-width: 768px) {
          .ytp-main-heading { font-size: 2.2rem; }
          .ytp-secondary-images { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="ytp-container">
        <div className="container-fluid">
          <div className={`ytp-main-content ${isVisible ? 'ytp-visible' : ''}`}>
            <div className="row g-5">

              {/* Left - features */}
              <div className="col-lg-6">
                <div className="ytp-diamond-logo"></div>
                <h6 className="ytp-section-title">{sectionLabel}</h6>
                <h1 className="ytp-main-heading">{promoHeading}</h1>

                <div className="ytp-features-container">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className={`ytp-feature-item ${animatedItems[index] ? 'ytp-animated' : ''}`}
                    >
                      {/* Simple circle icon for all features */}
                      <div className="ytp-feature-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" stroke="#6a5acd" strokeWidth="2" fill="none"/>
                          <path d="M9 12l2 2 4-4" stroke="#6a5acd" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div className="ytp-feature-text">
                        <h5>{feature.title}</h5>
                        <p>{feature.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - images */}
              <div className="col-lg-6">
                <div className="ytp-images-container">
                  <div className={`ytp-main-image ${isVisible ? 'ytp-visible' : ''}`}>
                    <img src={promoImages[0]} alt="Main promo" />
                  </div>
                  <div className="ytp-secondary-images">
                    <div className={`ytp-secondary-image ${isVisible ? 'ytp-visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
                      <img src={promoImages[1]} alt="Secondary promo 1" />
                    </div>
                    <div className={`ytp-secondary-image ${isVisible ? 'ytp-visible' : ''}`} style={{ transitionDelay: '0.6s' }}>
                      <img src={promoImages[2]} alt="Secondary promo 2" />
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

export default YogaTrainingPromo;