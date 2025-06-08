import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Bath() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,

    autoplay: true,

    autoplaySpeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const data = [
    {
      name: "Paush Ekadashi",
      date: "January 10, 2025",
    },

    {
      name: "Paush Purnima",
      date: "January 13, 2025",
    },
    {
      name: "Makar Sankranti (1st Shahi Snan)",
      date: "January 14, 2025",
    },

    {
      name: "Mauni Amavasya (2nd Shahi Snan)",
      date: "January 29, 2025",
    },
    {
      name: "Basant Panchami (3rd Shahi Snan)",
      date: "February 3, 2025",
    },
    {
      name: "Magh Ekadashi",
      date: "February 7, 2025",
    },
    {
      name: "Maghi Purnima",
      date: "February 12, 2025",
    },
    {
      name: "Maha Shivratri",
      date: "February 26, 2025",
    },
  ];
  return (
    <>
      <div className="bath" style={{ width: "90%", marginLeft: "5%" }}>
        <div className="heading">
          {" "}
          <h1>Bathing Dates</h1>
          <img src="./images/lg.png" alt="" />
        </div>
        <Slider {...settings}>
          {data.map((d) => (
            <div className="bcarousel" style={{ width: "100%" }}>
              <div
                className="box"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <h3 style={{ color: "#CF2156", marginBottom: "10px",fontFamily:"Caudex, serif" }}>
                  {d.name}
                </h3>
                <p style={{ fontFamily: "Roboto", fontSize: "18px" }}>
                  {d.date}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Bath;
