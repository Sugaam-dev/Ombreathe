import "../Styles/ayurveda.css";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { Link } from "react-router-dom";
import AyurvedCarousel from "./AyurvedCarousel";
import Slider from 'react-slick'

const Ayurveda = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,

    autoplay: true,
 
    autoplaySpeed: 1500,
    slidesToShow: 2,
    slidesToScroll: -1,
    initialSlide: 0,
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
}

  
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="ayurveda">
      {/* <div className="ayurvedd"> */}

      <div className="ayurved">
          {/* <img src="./images/ayurvedaBack.jpg" alt="" /> */}
          <div className="ayurvedimg" data-aos="fade-right">
            <img src="./images/ayurvedaimage.jpg" alt="img" />
         <div className="cccc">
         <div className="aybox">

<Slider {...settings}>

 <div className="abox">
     <img src="./images/general-medicine.png" alt="" />
     <h2>General Medicine</h2>
 </div>

 <div className="abox">
 <img src="./images/physiotherapy-1.png" alt="" />
 <h2>Physiotharpy</h2>
 </div>
 <div className="abox">
 <img src="./images/panchakarma.png" alt="" />
 <h2>Panchakarma</h2>
 </div>
 <div className="abox">
 <img src="./images/eye-unit.png" alt="" />
 <h2>Eye Unit</h2>
 </div>
 <div className="abox">
 <img src="./images/yoga.png" alt="" />
 <h2>Yoga</h2>
 </div>
 <div className="abox">
 <img src="./images/ENT-Dental-Unit.png" alt="" />
 <h2>ENT & Dental Unit</h2>
 </div>
</Slider>

</div>
         </div>
          </div>
        
          <div className="ayurvedcontent" data-aos="fade-up">
            <h2>Welcome to Soulfit</h2>
            <h1>Discover the Power of Ayurveda with Our Trusted Experts</h1>
         <p>In our fast-paced world, finding balance and wellness can be challenging. Ayurveda offers a timeless solution, focusing on harmony between body, mind, and spirit. It’s not just a way to treat illness; it’s a way to live well, every day. By understanding your unique constitution, Ayurveda helps you make choices that enhance your overall well-being.

Soulfit is dedicated to giving Ayurveda the platform it deserves. We connect you with authentic Ayurvedic wisdom, practices, and remedies designed to nourish your life. From natural herbs to personalized lifestyle guidance, Soulfit brings you closer to the healing power of Ayurveda.

Choosing Ayurveda through Soulfit means embracing a lifestyle rooted in nature’s wisdom. Discover the path to lasting vitality and holistic health with Soulfit—where ancient wisdom meets modern wellness.</p>
            <Link to="/contact">
              {" "}
              <button>make apointment</button>
            </Link>
          </div>
        

   

        </div>


      {/* </div> */}
       
     
      </div>

    </>
  );
};

export default Ayurveda;
