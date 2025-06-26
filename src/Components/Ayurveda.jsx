// import React, { useEffect, useMemo, useCallback, lazy, Suspense } from "react";
// import { Link } from "react-router-dom";
// import "../Styles/ayurveda.css";
// import "aos/dist/aos.css";
// import Aos from "aos";

// // Lazy load Slider component
// const Slider = lazy(() => import('react-slick'));

// const Ayurveda = () => {
//   // Memoized slider settings
//   const settings = useMemo(() => ({
//     dots: false,
//     infinite: true,
//     speed: 500,
//     autoplay: true,
//     autoplaySpeed: 1500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     initialSlide: 0,
//     lazyLoad: 'ondemand',
//     pauseOnHover: true,
//     pauseOnFocus: true,
//     responsive: [
//       {
//         breakpoint: 1440,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: false
//         }
//       },
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: false
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           initialSlide: 1
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   }), []);

//   // Memoized service data
//   const services = useMemo(() => [
//     {
//       image: "./images/general-medicine.png",
//       title: "General Medicine",
//       alt: "General Medicine Ayurveda Service"
//     },
//     {
//       image: "./images/physiotherapy-1.png",
//       title: "Physiotherapy",
//       alt: "Physiotherapy Ayurveda Service"
//     },
//     {
//       image: "./images/panchakarma.png",
//       title: "Panchakarma",
//       alt: "Panchakarma Ayurveda Treatment"
//     },
//     {
//       image: "./images/eye-unit.png",
//       title: "Eye Unit",
//       alt: "Eye Unit Ayurveda Treatment"
//     },
//     {
//       image: "./images/yoga.png",
//       title: "Yoga",
//       alt: "Yoga Ayurveda Practice"
//     },
//     {
//       image: "./images/ENT-Dental-Unit.png",
//       title: "ENT & Dental Unit",
//       alt: "ENT and Dental Ayurveda Treatment"
//     }
//   ], []);

//   // Initialize AOS with cleanup
//   useEffect(() => {
//     Aos.init({ 
//       duration: 2000,
//       once: true,
//       offset: 50
//     });

//     return () => {
//       Aos.refresh();
//     };
//   }, []);

//   // Memoized slider loader
//   const SliderLoader = useCallback(() => (
//     <div style={{ 
//       height: '200px', 
//       display: 'flex', 
//       alignItems: 'center', 
//       justifyContent: 'center',
//       color: 'white'
//     }}>
//       <div style={{ textAlign: 'center' }}>
//         <div style={{
//           width: '20px',
//           height: '20px',
//           border: '2px solid rgba(255, 255, 255, 0.3)',
//           borderTop: '2px solid white',
//           borderRadius: '50%',
//           animation: 'spin 1s linear infinite',
//           margin: '0 auto 10px'
//         }}></div>
//         <p style={{ fontSize: '14px', margin: 0 }}>Loading services...</p>
//       </div>
//     </div>
//   ), []);

//   return (
//     <>
//       <div className="ayurveda">
//         <div className="ayurved">
//           <div className="ayurvedimg" data-aos="fade-right">
//             <img 
//               src="./images/ayurvedaimage.jpg" 
//               alt="Ayurveda healing and wellness" 
//               loading="lazy"
//             />
//             <div className="cccc">
//               <div className="aybox">
//                 <Suspense fallback={<SliderLoader />}>
//                   <Slider {...settings}>
//                     {services.map((service, index) => (
//                       <div key={index} className="abox">
//                         <img 
//                           src={service.image} 
//                           alt={service.alt}
//                           loading="lazy"
//                         />
//                         <h2>{service.title}</h2>
//                       </div>
//                     ))}
//                   </Slider>
//                 </Suspense>
//               </div>
//             </div>
//           </div>
        
//           <div className="ayurvedcontent" data-aos="fade-up">
//             <h2>Welcome to Yogalayaa</h2>
//             <h1>Discover the Power of Ayurveda with Our Trusted Experts</h1>
//             <p>
//               In our fast-paced world, finding balance and wellness can be challenging. 
//               Ayurveda offers a timeless solution, focusing on harmony between body, mind, 
//               and spirit. It's not just a way to treat illness; it's a way to live well, every day. 
//               By understanding your unique constitution, Ayurveda helps you make choices that 
//               enhance your overall well-being.
//             </p>
//             <p>
//               Yogalayaa is dedicated to giving Ayurveda the platform it deserves. We connect 
//               you with authentic Ayurvedic wisdom, practices, and remedies designed to nourish 
//               your life. From natural herbs to personalized lifestyle guidance, Yogalayaa brings 
//               you closer to the healing power of Ayurveda.
//             </p>
//             <p>
//               Choosing Ayurveda through Yogalayaa means embracing a lifestyle rooted in nature's 
//               wisdom. Discover the path to lasting vitality and holistic health with Yogalayaa—where 
//               ancient wisdom meets modern wellness.
//             </p>
//             <Link to="/contact">
//               <button type="button" aria-label="Book Ayurveda Appointment">
//                 Book Appointment
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Add spinner animation styles */}
//       <style jsx>{`
//         @keyframes spin {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }
//       `}</style>
//     </>
//   );
// };

// export default React.memo(Ayurveda);















import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import "../Styles/ayurveda.css"; // Import the separate CSS file

const EnhancedAyurveda = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  
  // Your original service data with navigation paths
  const services = [
    {
      image: "./images/general-medicine.png",
      title: "General Medicine",
      alt: "General Medicine Ayurveda Service",
      link: "/contact"
    },
    {
      image: "./images/physiotherapy-1.png",
      title: "Physiotherapy",
      alt: "Physiotherapy Ayurveda Service",
      link: "/contact"
    },
    {
      image: "./images/panchakarma.png",
      title: "Panchakarma",
      alt: "Panchakarma Ayurveda Treatment",
      link: "/contact"
    },
    {
      image: "./images/eye-unit.png",
      title: "Eye Unit",
      alt: "Eye Unit Ayurveda Treatment",
      link: "/contact"
    },
    {
      image: "./images/yoga.png",
      title: "Yoga",
      alt: "Yoga Ayurveda Practice",
      link: "/contact"
    },
    {
      image: "./images/ENT-Dental-Unit.png",
      title: "ENT & Dentistry",
      alt: "ENT and Dental Ayurveda Treatment",
      link: "/contact"
    }
  ];

  // Animation effects - only for desktop
  useEffect(() => {
    const handleAnimations = () => {
      const isMobile = window.innerWidth <= 768;
      
      if (isMobile) {
        // On mobile, show everything immediately
        setImageLoaded(true);
        setContentVisible(true);
      } else {
        // On desktop, use animations
        const timer1 = setTimeout(() => setImageLoaded(true), 300);
        const timer2 = setTimeout(() => setContentVisible(true), 800);
        
        return () => {
          clearTimeout(timer1);
          clearTimeout(timer2);
        };
      }
    };

    handleAnimations();
    
    // Handle resize
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImageLoaded(true);
        setContentVisible(true);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // React Slick settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    cssEase: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    centerMode: false,
    variableWidth: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
          centerPadding: '20px',
          variableWidth: false,
          adaptiveHeight: true,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
          centerPadding: '10px',
          variableWidth: false,
          adaptiveHeight: true,
          dots: false
        }
      }
    ]
  };

  // Custom arrow components
  const CustomPrevArrow = ({ onClick }) => (
    <button
      className="wellness-slider-btn wellness-prev-btn"
      onClick={onClick}
      type="button"
      aria-label="Previous slide"
      style={{ display: 'flex' }}
    >
      &#8249;
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      className="wellness-slider-btn wellness-next-btn"
      onClick={onClick}
      type="button"
      aria-label="Next slide"
      style={{ display: 'flex' }}
    >
      &#8250;
    </button>
  );

  return (
    <div className="wellness-main-container">
      {/* Left Image Section */}
      <div className={`wellness-left-image-section ${imageLoaded ? 'wellness-slide-in-left' : ''}`}>
        <img 
          src="https://myayushgoa.com/wp-content/uploads/2022/10/ayurvedic-treatment.jpg" 
          alt="Ayurveda healing and wellness" 
          className="wellness-left-image"
          onLoad={() => setImageLoaded(true)}
          style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
        />
      </div>
      
      {/* Right Content Section */}
      <div className={`wellness-right-content-section ${contentVisible ? 'wellness-slide-in-bottom' : ''}`}>
        <h2 className="wellness-sub-heading">Welcome to Yogalayaa</h2>
        <h1 className="wellness-main-heading">Discover the Power of Ayurveda with Our Trusted Experts</h1>
        <p className="wellness-content-text">
          In our fast-paced world, finding balance and wellness can be challenging. 
          Ayurveda offers a timeless solution, focusing on harmony between body, mind, 
          and spirit. It's not just a way to treat illness; it's a way to live well, every day.
        </p>
        <p className="wellness-content-text">
          Yogalayaa is dedicated to giving Ayurveda the platform it deserves. We connect 
          you with authentic Ayurvedic wisdom, practices, and remedies designed to nourish 
          your life.
        </p>
        <Link to="/contact" className="wellness-cta-button">
          Book Appointment
        </Link>
      </div>

      {/* Bottom Slider Section */}
      <div className="wellness-slider-section">
        <div className="wellness-slider-container">
          <h2 className="wellness-slider-heading">Our Ayurvedic Services</h2>
          
          <div className="slider-wrapper">
            <Slider 
              {...sliderSettings}
              prevArrow={<CustomPrevArrow />}
              nextArrow={<CustomNextArrow />}
            >
              {services.map((service, index) => (
                <div key={`service-${index}`} className="wellness-slide-item">
                  <Link 
                    to={service.link}
                    className="wellness-service-card"
                    role="button"
                    tabIndex={0}
                  >
                    <img 
                      src={service.image} 
                      alt={service.alt}
                      className="wellness-service-image"
                      loading="lazy"
                      style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        console.error(`Failed to load image: ${service.image}`);
                      }}
                    />
                    <h3 className="wellness-service-title">{service.title}</h3>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(EnhancedAyurveda);