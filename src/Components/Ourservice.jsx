import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Styles/ourservics.css'
import { Link } from "react-router-dom";
function Ourservice() {


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
     
        autoplaySpeed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
       
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
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
      };



    const data = [
        {
            image:"./images/yogaimage.avif",
          name: "Teachers Training Programs",
          description:
            "Welcome to Yogalayaa's Teachers Training Program! Are you passionate about yoga and eager to deepen your practice while gaining the skills.",
        },
        {
            image:"./images/yoga-wear.jpg",
             name: "Merchandise",
            description:"We offer a range of merchandise to help support our students in their yoga journey. Our merchandise includes yoga mats, blocks, straps, and other props, as well as yoga apparel and accessories like t-shirts, tanks, and bags.",
          },
          {
            image:"./images/yoga-retreat-environment.jpg",
            
            name: "Our Retreats",
            description:
              "Our Spiritual Retreats offer a unique opportunity to step away from the stresses of daily life and connect with your inner self.",
          },
          {
            image:"./images/Yoga-Ayurveda-Health-and-Wellness-Banner.jpg",
            name: "Achieve Health & Wealth with Soulfit",
            description:
              "We offer personalized Ayurvedic consultations, herbal remedies, detox programs, lifestyle guidance, and workshops to enhance holistic health and wealth.",
          },
          {
image:"./images/yoga-retreat-1024x1024.webp",
name:"Ayurveda and Yoga Retreats",
description:"In this retreat, Soulfit will introduce guests to the principles of Ayurveda and how it complements yoga. You will also learn about ayurvedic consultations and enjoy ayurvedic cooking classes and herbal remedies workshops."
          },
          {
            image:"./images/naturopathy.jpg",
name:"Naturopathy",
            description:"Discover holistic healing with naturopathy—personalized care blending nature’s wisdom and modern science to restore your body’s balance and vitality."
          }
      ];


  return(
    
    <>
  <div className="service">

    <div className="serviceh">
        <h1>Our Services</h1>
        <img src="./images/lg.png" alt="logo" />
    </div>
    <div className="servicebox">
        <Slider {...settings}>
            {
                data.map((d)=>(

            
<div className="servicecarou">
    <div className="simage">
        <img src={d.image} alt="" />
    </div>
    <div className="ani">

    <div className="sname">
        <h3>{d.name}</h3>
    </div>
    <div className="sdescrip">
        <p>{d.description}</p>
    </div>
    <div className="sbut">
       <Link to='/Contact'> <button>book Now</button></Link>
    </div>
    </div>

</div>
    ))
}
        </Slider>
    </div>
  </div>
  
  </>
  );
}

export default Ourservice;
