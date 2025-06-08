import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Styles/ourservics.css'
import { Link } from "react-router-dom";
function KumbhAcomodation() {


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
            image:"./images/diromitory-swiss-tent-head.jpg",
          name: "Dormitories Tent",
          description:
            "Dormitories Tent Booking are the best option to book Budget Camp/accommodations in Kumbh Mela Prayagraj.",
        },
        {
            image:"./images/Economy-Tent.avif",
             name: "Economy Cottage",
            description:"Economy Tents are the best option to stay individually in Kumbh Mela Prayagraj in your budget and visit 2025 Kumbh Mela",
          },
          {
            image:"./images/deluxe-for-home-page.avif",
            
            name: "Deluxe Cottage",
            description:
              "Deluxe Tents offering more amenities as the guest requirement. This tent includes double bed mattress with attached bath",
          },
          {
            image:"./images/Luxury-Tent.avif",
            name: "Luxury Cottage",
            description:
              "Luxury Cottage are one of the finest Luxurious camping in Kumbh Mela 2025. This Cottage includes compete features as the",
          }
      ];


  return(
    
    <>
  <div className="service">

    <div className="serviceh">
        <h1>Accommodation</h1>
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

export default KumbhAcomodation;
