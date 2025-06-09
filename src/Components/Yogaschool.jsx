import "../Styles/Yogaschool.css";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import Slider from 'react-slick';

const Yogaschool = () => {
  const locationSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    cssEase: 'ease-in-out',
    lazyLoad: 'ondemand',
    pauseOnHover: true,
    pauseOnFocus: true,
    swipeToSlide: true,
    touchThreshold: 10
  };

  useEffect(() => {
    Aos.init({ 
      duration: 800,
      offset: 100,
      easing: 'ease-out',
      once: true,
      mirror: false,
      anchorPlacement: 'top-bottom'
    });
  }, []);

  return (
    <>
      <div className="yogaschool">
        <div className="yogaa">
          <div className="heading">
            <h1>Best Yoga School In India and Indonesia</h1>
            <img src="./images/lg.png" alt="logo" />
          </div>

          {/* Location Slider */}
          <div className="location-slider">
            <Slider {...locationSettings}>
              <div className="location-slide">
                <div className="location-content">
                  <h3>Want To Join The Best Yoga School In Rishikesh, India?</h3>
                  <p>
                    Experience the spiritual birthplace of yoga in Rishikesh, nestled in the foothills of the Himalayas. Our Bali and Rishikesh location offers authentic traditional yoga teachings in the most sacred environment. Join thousands of practitioners who have transformed their lives through our comprehensive yoga teacher training programs in this holy city.
                  </p>
                </div>
              </div>
              
              <div className="location-slide">
                <div className="location-content">
                  <h3>Discover Yoga Paradise In Bali, Indonesia</h3>
                  <p>
                    Immerse yourself in the tropical serenity of Bali while deepening your yoga practice. Our Bali location combines traditional yoga wisdom with the island's natural beauty and spiritual energy. Experience transformative yoga training surrounded by lush landscapes, ancient temples, and the warm hospitality of Balinese culture.
                  </p>
                </div>
              </div>
              
              <div className="location-slide">
                <div className="location-content">
                  <h3>Find Inner Peace In The Himalayas</h3>
                  <p>
                    Escape to the majestic Himalayas for the ultimate yoga retreat experience. Our Himalayan location offers pristine mountain air, breathtaking views, and complete tranquility for deep meditation and yoga practice. Connect with nature and yourself in one of the world's most spiritually powerful locations.
                  </p>
                </div>
              </div>
            </Slider>
          </div>

          <div className="box">
            <div className="box1" data-aos="fade-right" data-aos-offset="50" data-aos-duration="600">
              <img src="./images/yoga-school.webp" alt="Yoga School" />
            </div>
            <div className="box2" data-aos="fade-left" data-aos-offset="50" data-aos-duration="600">
              <p>
                All yoga courses are conducted by the skilled yoga teachers.
                Living Yoga School is best known for its unique yoga courses in
                Bali and Rishikesh. Our school is accredited by Yoga Alliance and offers
                immersive and comprehensive courses. We help you to develop a
                strong foundation in yoga. Living Yoga School in India is
                located in a spiritual and serene environment in Bali and Rishikesh.
                Whether you want to become a teacher, instructor, or deepen your
                yoga practice, we will help you achieve your goal. <br /> <br /> We prepare
                you to develop your unique teaching method for self-study and
                growth as a teacher. That's why we are one of the top yoga
                schools in India. Our yoga training focuses on replacing your
                bad habits and routines with a positive and yogic life. We bring
                grace and spirituality into practice to celebrate the qualities
                and diversities and seek greater connection in nature. <br /> <br /> We
                provide high-quality education and you are invited to learn yoga
                in a nurturing and safe environment. From the birthplace of
                Yoga, we offer several online classes, retreats, and yoga
                training in Bali and Rishikesh. Consider Living Yoga School for any yoga
                course. We are an International Yoga Alliance-recognized yoga
                school in Bali and Rishikesh, India to offer Yoga Alliance-certified
                courses in India.
              </p>
              <div className="boxcontent">
                <div className="item1" data-aos="zoom-in" data-aos-delay="0" data-aos-offset="30" data-aos-duration="500">
                  <div className="itemlogo">
                    <img src="https://livingyogaschool.com/images/about-icon1.svg" alt="No. 1 Yoga School" />
                  </div>
                  <div className="item2">
                    <h3>No. 1 Yoga School</h3>
                    <p>Best Yoga School in Bali and Rishikesh, India</p>
                  </div>
                </div>
                <div className="item1" data-aos="zoom-in" data-aos-delay="100" data-aos-offset="30" data-aos-duration="500">
                  <div className="itemlogo">
                    <img src="https://livingyogaschool.com/images/about-icon3.svg" alt="Intense Yoga Teachings" />
                  </div>
                  <div className="item2">
                    <h3>Intense Yoga Teachings</h3>
                    <p>Comprehensive & immersive yoga courses</p>
                  </div>
                </div>
                <div className="item1" data-aos="zoom-in" data-aos-delay="200" data-aos-offset="30" data-aos-duration="500">
                  <div className="itemlogo">
                    <img src="https://livingyogaschool.com/images/about-icon4.svg" alt="Ancient Wisdom" />
                  </div>
                  <div className="item2">
                    <h3>Ancient Wisdom</h3>
                    <p>Yoga is the journey into the self</p>
                  </div>
                </div>
                <div className="item1" data-aos="zoom-in" data-aos-delay="300" data-aos-offset="30" data-aos-duration="500">
                  <div className="itemlogo">
                    <img src="https://livingyogaschool.com/images/about-icon2.svg" alt="Traditional Methodology" />
                  </div>
                  <div className="item2">
                    <h3>Traditional Methodology</h3>
                    <p>Natural Healing for body & mind</p>
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

export default Yogaschool;