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
       Awaken Your Inner Yogi and Embrace the Magic of Rishikesh, Bali, and McLeod Ganj with Yogalayaa Yoga Ashram
        </h3>
        <p>
      Welcome to Yogalayaa Yoga Ashram, a leading yoga school with centers in Rishikesh, Bali, and McLeod Ganj. Our Yoga Teacher Training courses are Yoga Alliance accredited and offer a comprehensive, immersive learning experience for practitioners of all levels.

Guided by experienced and certified teachers, we provide personalized attention to help you build a strong foundation in yoga practice. Nestled in serene and spiritual locations, our schools create the perfect environment for growth, healing, and transformation.

Whether you want to deepen your practice or become a certified yoga teacher, Yogalayaa’s TTC programs in Rishikesh, Bali, and McLeod Ganj will empower you to reach your goals.
        </p>
      </div>
      <div className="utube">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/_xLrirWP-S0?si=agNMvNIB3f5wyI41" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </>
  );
}

export default Utube;