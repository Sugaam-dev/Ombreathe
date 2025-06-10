import React, { useEffect, useMemo, useCallback, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import "../Styles/ayurveda.css";
import "aos/dist/aos.css";
import Aos from "aos";

// Lazy load Slider component
const Slider = lazy(() => import('react-slick'));

const Ayurveda = () => {
  // Memoized slider settings
  const settings = useMemo(() => ({
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    lazyLoad: 'ondemand',
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }), []);

  // Memoized service data
  const services = useMemo(() => [
    {
      image: "./images/general-medicine.png",
      title: "General Medicine",
      alt: "General Medicine Ayurveda Service"
    },
    {
      image: "./images/physiotherapy-1.png",
      title: "Physiotherapy",
      alt: "Physiotherapy Ayurveda Service"
    },
    {
      image: "./images/panchakarma.png",
      title: "Panchakarma",
      alt: "Panchakarma Ayurveda Treatment"
    },
    {
      image: "./images/eye-unit.png",
      title: "Eye Unit",
      alt: "Eye Unit Ayurveda Treatment"
    },
    {
      image: "./images/yoga.png",
      title: "Yoga",
      alt: "Yoga Ayurveda Practice"
    },
    {
      image: "./images/ENT-Dental-Unit.png",
      title: "ENT & Dental Unit",
      alt: "ENT and Dental Ayurveda Treatment"
    }
  ], []);

  // Initialize AOS with cleanup
  useEffect(() => {
    Aos.init({ 
      duration: 2000,
      once: true,
      offset: 50
    });

    return () => {
      Aos.refresh();
    };
  }, []);

  // Memoized slider loader
  const SliderLoader = useCallback(() => (
    <div style={{ 
      height: '200px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      color: 'white'
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{
          width: '20px',
          height: '20px',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          borderTop: '2px solid white',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '0 auto 10px'
        }}></div>
        <p style={{ fontSize: '14px', margin: 0 }}>Loading services...</p>
      </div>
    </div>
  ), []);

  return (
    <>
      <div className="ayurveda">
        <div className="ayurved">
          <div className="ayurvedimg" data-aos="fade-right">
            <img 
              src="./images/ayurvedaimage.jpg" 
              alt="Ayurveda healing and wellness" 
              loading="lazy"
            />
            <div className="cccc">
              <div className="aybox">
                <Suspense fallback={<SliderLoader />}>
                  <Slider {...settings}>
                    {services.map((service, index) => (
                      <div key={index} className="abox">
                        <img 
                          src={service.image} 
                          alt={service.alt}
                          loading="lazy"
                        />
                        <h2>{service.title}</h2>
                      </div>
                    ))}
                  </Slider>
                </Suspense>
              </div>
            </div>
          </div>
        
          <div className="ayurvedcontent" data-aos="fade-up">
            <h2>Welcome to Yogalayaa</h2>
            <h1>Discover the Power of Ayurveda with Our Trusted Experts</h1>
            <p>
              In our fast-paced world, finding balance and wellness can be challenging. 
              Ayurveda offers a timeless solution, focusing on harmony between body, mind, 
              and spirit. It's not just a way to treat illness; it's a way to live well, every day. 
              By understanding your unique constitution, Ayurveda helps you make choices that 
              enhance your overall well-being.
            </p>
            <p>
              Yogalayaa is dedicated to giving Ayurveda the platform it deserves. We connect 
              you with authentic Ayurvedic wisdom, practices, and remedies designed to nourish 
              your life. From natural herbs to personalized lifestyle guidance, Yogalayaa brings 
              you closer to the healing power of Ayurveda.
            </p>
            <p>
              Choosing Ayurveda through Yogalayaa means embracing a lifestyle rooted in nature's 
              wisdom. Discover the path to lasting vitality and holistic health with Yogalayaa—where 
              ancient wisdom meets modern wellness.
            </p>
            <Link to="/contact">
              <button type="button" aria-label="Book Ayurveda Appointment">
                Book Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Add spinner animation styles */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
};

export default React.memo(Ayurveda);