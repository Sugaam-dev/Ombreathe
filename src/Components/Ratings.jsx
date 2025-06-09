import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../Styles/ratings.css";
import { FaFacebook } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

function Ratings() {
  const data = [
    {
      name: "Kristella",
      city: "Bali",
      description:"Experiencing sound healing and inner child healing!",
        },
    {
      name: "Emily",
      city: "Bali",
      description:`I wanted to relax and gain more experience in yoga and meditation.

I chose it for the silent meditation and structured program.`,
   
          },
   
  ];
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          slidesToScroll: 1,
          autoplaySpeed: 2000,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
     <div className="headingr">

        <h1>What our student says about their yoga teacher training by Soulfit</h1>
        <img src="./images/lg.png" alt="" />
     
     </div>
      <div className="rating">
        <div className="reviewslide">
          <Slider {...settings}>
            {data.map((d) => (
              <div className="reviews">
               <div className="name">
               <h3>{d.name}</h3>
               </div>
               <div className="city">
                <h4>{d.city}</h4>
               </div>
<div className="decrip">
    
<p>
               {d.description}
                </p>
</div>
{/* <div className="image">
    
<img src={d.img} alt="imag" />
</div> */}
              </div>
            ))}
          </Slider>
        </div>
        <div className="ratingslide">
        {/* <img src="./images/Screenshot (34).png" alt="logo" /> */}

        <div className="ratingbox">
        <FaFacebook  className="iconn"/>
          <div className="fac">
            <h3>Facebook</h3>
            <div className="star">
            <IoStar /> <IoStar /> <IoStar /> <IoStar /><IoStarHalf />
            </div>
          </div>
        </div>
         <div className="ratingbox">
         <FaInstagram  className="iconn"/>
          <div className="fac">
          <h3>Instagram</h3>
            <div className="star">
            <IoStar /> <IoStar /> <IoStar /> <IoStar /><IoStarHalf />
            </div>
          </div>
        </div>
        <div className="ratingbox">
        <FaXTwitter className="iconn"/>
          <div className="fac">
          <h3>X</h3>
            <div className="star">
            <IoStar/> <IoStar /> <IoStar /> <IoStar /><IoStarHalf />
            </div>
          </div>
        </div>
        <div className="ratingbox">
        <FaYoutube className="iconn"/>
          <div className="fac">
          <h3>YouTube</h3>
            <div className="star">
            <IoStar /> <IoStar /> <IoStar /> <IoStar /><IoStarHalf />
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Ratings;
