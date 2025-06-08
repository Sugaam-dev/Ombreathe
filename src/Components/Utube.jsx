import React from "react";
import "../Styles/utube.css";

function Utube() {
  return (
    <>
      <div className="headingu">
        <h1>Yoga School By Yogalayaa</h1>
        <img src="./images/lg.png" alt="logo" />
      </div>
      <div className="contt">
        <h3>
          Awaken Your Inner Yogi and Embrace the Magic of Rishikesh with Yogalayaa
          Yoga Ashram
        </h3>
        <p>
          Welcome to Yogalayaa Yoga Ashram: the leading yoga school in Rishikesh.
          Our Yoga Teacher Training courses in Rishikesh are accredited by Yoga
          Alliance and offer a comprehensive and immersive learning experience
          for students of all levels. Our experienced and certified teachers
          provide personalized attention and guidance to help you develop a
          strong foundation in the practice of yoga. Our school is located in
          the heart of Rishikesh and provides a serene and spiritual environment
          for learning. Whether you are looking to deepen your practice or
          become a certified yoga teacher, our Yoga TTC in Rishikesh will
          empower you to achieve your goal
        </p>
      </div>
      <div className="utube">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/_xLrirWP-S0?si=agNMvNIB3f5wyI41" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </>
  );
}

export default Utube;