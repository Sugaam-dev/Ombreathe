import React from "react";
import "../Styles/about.css";
import Ratings from "./Ratings";
import Contact from "./Contact";
function About() {
  return (
    <>
      <div className="about">
        <div className="aboutt">
          <div className="headingabout">
            <h1>Would You Like To Know More About Yogalayaa?</h1>
            <img src="./images/lg.png" alt="logo" />
          </div>

          <div className="abjoin">
            <p>
              Are you ready to take a step forward for your yogic journey and
              experience traditional yoga teacher training course in the
              birthplace of yoga, Bali and Rishikesh? Are you ready to feel the light,
              peace and love shining in and out through you? We are excited to
              see you as part of our family and walk together in this yogic
              path.Living Yoga School is founded by Yogi Vishnu Panigrahi. With
              the mission of our Guru Ji, which is to spread “yoga” throughout
              the whole world to help the world to become a better place, we
              dedicate ourselves to let our students experience the best yoga
              teacher training with the finest standards in India.
            </p>
          </div>
          <div className="aboutbox">
            <div className="abox1">
              <img src="./images/lys-about-our-school.webp" alt="img1" />
            </div>
            <div className="abox2">
              <p>
                With all our dedication and love, as Living Yoga School we offer
                200 Hour, 300 Hour and 500 Hour Yoga Teacher Training Courses
                (YTTC) registered with Yoga Alliance USA and Yoga Alliance
                International. Through our courses, we aim to teach traditional
                teachings of yoga with focus on Hatha Yoga, Ashtanga Yoga,
                Pranayama, Yoga Philosophy, Yoga Therapy, Adjustment and
                Alignment, Meditation, etc. In today’s world, timing is really
                important. We know that, for many of our students it is not easy
                to take a month off and come here for a yoga teacher training
                (YTTC) program. So, we really appreciate for this dedicated
                time. Hence, it is our big responsibility to deliver you the
                best yoga teacher training course and serve you to get
                everything that you can experience during your stay in
                Bali and Rishikesh. As part of this hard work that we put our heart in
                it, we present you the opportunity to study yoga with the most
                qualified teachers’ team in India. Many of our teachers hold
                Master’s and Doctorate Degree in Yoga and Yogic Science.
              </p>
            </div>
          </div>
        </div>
        <div className="aboutcc">
          <p>
            Whole world is one. Through our other schools in different parts of
            India and abroad, we also offer yoga teacher training courses (YTTC)
            in different locations.Also, to help and support students who are
            not able to pay for the course, we have scholarship, discount and
            free offerings. Because, as Living Yoga School Family we strongly
            believe that “Karma Yoga” is so crucial to transform our society and
            world into a place with full of light, love and peace.It will be our
            pleasure to see you as a part of our family.
          </p>
        </div>
      </div>

      <div className="whyyoga">
        <div className="headingabout">
          <h1>
            Why Should You Get Your Yoga Teacher Training Course In Yogalayaa
          </h1>
          <img src="./images/lg.png" alt="logo" />
        </div>
        <div className="pp">
          <p>
            Why Should You Get Your Yoga Teacher Training Course In Bali and Rishikesh?
            Answer is so simple.. Because it is the world capital of yoga. To
            give another solid reason which happened in the mid 1900s, Beatles
            came to Bali and Rishikesh in 1968 and stayed at Maharishi Mahesh Ashram. As
            the band explained, their stay at the ashram, in Bali and Rishikesh, was the
            band’s most productive period of their life in terms of songwriting.
            Bali and Rishikesh is a holy city which is settled on the foothills of
            Himalayas and home to Mother Ganges River. As city having its own
            spiritual vibes which come from ancient times as yoga was born here,
            with the combination of its stunning nature, it is a perfect
            destination for traditional and authentic yoga teacher training
            courses (YTTC). Bali and Rishikesh has been home to yogic practices since
            millennia via attracting many yogis, sages, saints. <br /> <br /> Now, could you
            stop for a second and imagine, waking up and opening your eyes to
            the Himalayas, hearing various sounds of birds, having a shower,
            walking by the Mother Ganges and heading onto your mat for your yoga
            class? Learning yoga and its philosophy from Indian Gurus (teachers)
            who have a strong background about all aspects of yoga.. Doesn’t it
            sound so peaceful and wonderful? <br /> <br /> In Western World, yoga is
            misunderstood and taught. Because of physical concerns or increased
            popularity of yoga, people only focus on the physical aspects of
            yoga which is asanas. However, yoga teacher training courses in
            Bali and Rishikesh offers more than its physical aspects because yoga is not
            only physical practice. As you deeply study yogic philosophy,
            breathing techniques, ancient texts etc, you will improve yourself
            more in your yogic practice. It is not something that you should
            practice only 1 or 2 hours a day but rather it is something that you
            should pursue as your life style. <br /> <br /> To experience yoga teacher
            training course (YTTC) in Bali and Rishikesh is solely life changing. Create
            your own opportunity to join our yoga teacher training courses in
            Bali and Rishikesh. Your life will never be the same. Let the peace shine
            through your heart! We are waiting for you on the mat by Mother
            Ganges.
          </p>
        </div>
        <div className="abouticon">
          <div className="aicon">
          <img src="./images/about-icon1.svg" alt="" />
          <h4>Means Of Happiness</h4>
          </div>
          <div className="aicon">
          <img src="./images/course-icon2.svg" alt="" />
          <h4>Excellent Health</h4>
          </div>
          <div className="aicon">
          <img src="./images/course-icon3.svg" alt="" />
          <h4>Slim And Strong Figure</h4>
          </div>
          <div className="aicon">
          <img src="./images/course-icon4.svg" alt="" />
          <h4>Youth And Beauty</h4>
          </div>
          <div className="aicon">
          <img src="./images/about-icon1.svg" alt="" />
          <h4>Hatha Yoga Training</h4>
          </div>
          <div className="aicon">
          <img src="./images/about-icon2.svg" alt="" />
          <h4>Kundalini Yoga</h4>
          </div>
         
        </div>
      </div>
      <Ratings/>
      <Contact/>
          </>
    
  );
}

export default About;
