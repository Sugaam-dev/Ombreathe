import React from 'react'
import Slider from 'react-slick'
import '../Styles/AyurvedCarousel.css'
function AyurvedCarousel() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,

        autoplay: true,
     
        autoplaySpeed: 1500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
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
  return (
    <>
      <div className="aybox">

       <Slider {...settings}>

        <div className="abox">
            <img src="https://ahaliaayurvedic.org/hospital/wp-content/uploads/sites/5/2020/09/kaumarabritya.png" alt="" />
          
        </div>

        <div className="abox">
            <img src="https://ahaliaayurvedic.org/hospital/wp-content/uploads/sites/5/2020/09/kaumarabritya.png" alt="" />
      
        </div>
        <div className="abox">
            <img src="https://ahaliaayurvedic.org/hospital/wp-content/uploads/sites/5/2020/09/kaumarabritya.png" alt="" />

        </div>
        <div className="abox">
            <img src="https://ahaliaayurvedic.org/hospital/wp-content/uploads/sites/5/2020/09/kaumarabritya.png" alt="" />
          
        </div>
        <div className="abox">
            <img src="https://ahaliaayurvedic.org/hospital/wp-content/uploads/sites/5/2020/09/kaumarabritya.png" alt="" />
        
        </div>
        <div className="abox">
            <img src="https://ahaliaayurvedic.org/hospital/wp-content/uploads/sites/5/2020/09/kaumarabritya.png" alt="" />
         
        </div>
       </Slider>

      </div>
    </>
  )
}

export default AyurvedCarousel
