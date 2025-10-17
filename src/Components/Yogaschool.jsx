import React, { useEffect, useState, useMemo, useCallback } from "react";
import { lazy, Suspense } from "react";
import "../Styles/Yogaschool.css";
import "aos/dist/aos.css";
import Aos from "aos";
import school from '../images/logo/1.png'
import Teachings from '../images/logo/2.png'
import Wisdom from '../images/logo/3.png'
import Methodology from '../images/logo/4.png'
import logo from '../images/lg.png'
import firstimage from '../images/Websitefirstimage.jpg'
// Lazy load Slider component
const Slider = lazy(() => import("react-slick"));

const Yogaschool = () => {
  const [images, setImages] = useState({
    logo: null,
    yogaSchool: null
  });
  const [isSliderLoaded, setIsSliderLoaded] = useState(false);

  // Memoized slider settings
  const locationSettings = useMemo(() => ({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    cssEase: "ease-in-out",
    lazyLoad: "ondemand",
    pauseOnHover: true,
    pauseOnFocus: true,
    swipeToSlide: true,
    touchThreshold: 10,
  }), []);

  // Memoized slide content
  const slideContent = useMemo(() => [
    {
      title: "Want To Join The Best Yoga School In Rishikesh, India?",
      description: "Experience the spiritual birthplace of yoga in Rishikesh, nestled in the foothills of the Himalayas. Our Bali and Rishikesh location offers authentic traditional yoga teachings in the most sacred environment. Join thousands of practitioners who have transformed their lives through our comprehensive yoga teacher training programs in this holy city."
    },
    {
      title: "Discover Yoga Paradise In Bali, Indonesia",
      description: "Immerse yourself in the tropical serenity of Bali while deepening your yoga practice. Our Bali location combines traditional yoga wisdom with the island's natural beauty and spiritual energy. Experience transformative yoga training surrounded by lush landscapes, ancient temples, and the warm hospitality of Balinese culture."
    },
    {
      title: "Find Inner Peace In The Himalayas",
      description: "Escape to the majestic Himalayas for the ultimate yoga retreat experience. Our Himalayan location offers pristine mountain air, breathtaking views, and complete tranquility for deep meditation and yoga practice. Connect with nature and yourself in one of the world's most spiritually powerful locations."
    }
  ], []);

  // Memoized features data
  const features = useMemo(() => [
    {
      icon: school,
      title: "No. 1 Yoga School",
      description: "Best Yoga School in Bali and Rishikesh, India",
      delay: 0
    },
    {
      icon:  Teachings,
      title: "Intense Yoga Teachings",
      description: "Comprehensive & immersive yoga courses",
      delay: 100
    },
    {
      icon: Wisdom ,
      title: "Ancient Wisdom",
      description: "Yoga is the journey into the self",
      delay: 200
    },
    {
      icon: Methodology ,
      title: "Traditional Methodology",
      description: "Natural Healing for body & mind",
      delay: 300
    }
  ], []);

  // Load images dynamically
  useEffect(() => {
    const loadImages = async () => {
      try {
        // Use actual image imports or URLs as needed
        setImages({
          logo: logo,
          yogaSchool: firstimage
        });
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    loadImages();
  }, []);

  // Initialize AOS with cleanup
  useEffect(() => {
    Aos.init({
      duration: 800,
      offset: 100,
      easing: "ease-out",
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
    });

    return () => {
      Aos.refresh();
    };
  }, []);

  // Intersection Observer for lazy loading slider
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isSliderLoaded) {
            setIsSliderLoaded(true);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '50px 0px'
      }
    );

    const sliderElement = document.querySelector('.location-slider');
    if (sliderElement) {
      observer.observe(sliderElement);
    }

    return () => {
      if (sliderElement) {
        observer.unobserve(sliderElement);
      }
    };
  }, [isSliderLoaded]);

  // Memoized slider loading component
  const SliderLoader = useCallback(() => (
    <div className="slider-loading" style={{ 
      height: '200px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px'
    }}>
      <div className="text-center">
        <div className="spinner-border text-primary mb-2" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="text-muted small">Loading locations...</p>
      </div>
    </div>
  ), []);

  return (
    <>
      <div className="yogaschool">
        <div className="yogaa">
          <div className="heading">
            <h1>Best Yoga School In India and Indonesia</h1>
            {images.logo && (
              <img 
                src={images.logo} 
                alt="Ombreathe Logo" 
                loading="lazy"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            )}
          </div>

          {/* Location Slider with Lazy Loading */}
          <div className="location-slider">
            {isSliderLoaded ? (
              <Suspense fallback={<SliderLoader />}>
                <Slider {...locationSettings}>
                  {slideContent.map((slide, index) => (
                    <div key={index} className="location-slide">
                      <div className="location-content">
                        <h3>{slide.title}</h3>
                        <p>{slide.description}</p>
                      </div>
                    </div>
                  ))}
                </Slider>
              </Suspense>
            ) : (
              <SliderLoader />
            )}
          </div>

          <div className="box">
            <div
              className="box1"
              data-aos="fade-right"
              data-aos-offset="50"
              data-aos-duration="600"
            >
              {images.yogaSchool && (
                <img 
                  src={images.yogaSchool} 
                  alt="Yoga School" 
                  loading="lazy"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              )}
            </div>
            <div
              className="box2"
              data-aos="fade-left"
              data-aos-offset="50"
              data-aos-duration="600"
            >
              <p>
                At Ombreathe, all courses are led by skilled and certified yoga
                teachers dedicated to delivering authentic, immersive, and Yoga
                Alliance-accredited programs. Whether you're beginning your
                journey or aiming to become a certified instructor, our
                comprehensive training helps you build a strong, mindful
                foundation in yoga. <br/> <br/> With serene campuses in both Bali and
                Rishikesh, we offer an inspiring environment that nurtures
                self-growth, discipline, and spiritual connection. At Ombreathe,
                we guide you to develop your own teaching style, deepen your
                practice, and embrace a holistic yogic lifestyle. <br/> <br/> Our courses
                are designed to transform habits, enhance awareness, and lead
                you toward a life of balance, clarity, and inner peace.<br/> <br/> From
                in-person teacher training and retreats to online programs,
                Ombreathe offers a global platform to learn, grow, and share
                yoga with the world — all rooted in the spiritual essence of
                traditional Indian yoga. <br/> <br/> Join us at Ombreathe and step into your
                fullest potential as a student, seeker, or teacher of yoga.
              </p>
              <div className="boxcontent">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="item1"
                    data-aos="zoom-in"
                    data-aos-delay={feature.delay}
                    data-aos-offset="30"
                    data-aos-duration="500"
                  >
                    <div className="itemlogo">
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        loading="lazy"
                        style={{ maxWidth: '100%', height: 'auto' }}
                      />
                    </div>
                    <div className="item2">
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Yogaschool);