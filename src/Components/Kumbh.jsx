import React, { useState } from "react";
import "../Styles/kumbh.css";
function Kumbh() {

  const [isopen,setIsopen] =useState(false)


  const isstyle={
    WebkitLineClamp:2,
    WebkitBoxOrient:"vertical",
    overflow:"hidden",
    display:"-webkit-box"
   }
  return (
    <>
      <div className="kumbh">
        <div className="headingk">
          <h1>Kumbh Mela Prayagraj</h1>
          <img src="./images/lg.png" alt="logo" />
        </div>
        <div className="kumbhcont">
          <div className="kboxs">
            <div className="kbox">
              <p>
                Kumbh Mela Prayagraj 2025 is a Hindu festival, which is also the
                world gathering of humanity in one place. In the Ardh Kumbh Mela
                at Prayagraj in 2019, 150 million tourists came from all over
                the world. This number is greater than the combined population
                of 100 countries. It is in fact listed as Intangible Cultural
                Heritage by UNESCO. The upcoming Kumbh Mela, known as the Maha
                Kumbh Mela, is set to be hosted by Prayagraj (Allahabad) in
                2025. <br /> <br /> Kumbh Mela is held after a gap of every 12
                years in Haridwar, Prayagraj, Nashik and Ujjain. In 2025,
                Prayagraj (Allahabad) will host the next kumbh mela called Maha
                Kumbh Mela. The festival is also called the Purna Kumbh. There
                is even the Ardh Kumbh, held every 6 years in Prayagraj and
                Haridwar. <br /> <br />
                The legend behind the Kumbh Mela is that during Samudra Manthan
                or the churning of the ocean, a pot of amrita (nectar) emerged
                from the ocean. Whoever drank the nectar
              </p>
              <img
                src="./images/Kumbh-Mela-2025-Prayag.jpg"
                alt=""
              />
            </div>
            <p>
              became immortal. So the Devas and Asuras fought with each other
              for this pot of nectar. And while Lord Vishnu taking the form of
              Mohini Avatar, carried away the Amrit Kalash (pot of nectar). some
              drops fell at Haridwar, Allahabad, Nashik and Ujjain. Finally
              Kumbh Mela is held at these places to celebrate this legend.
              Another celestial event takes place at the time of Kumbh Mela, and
              it is the time when Jupiter is in Kumbh (pot) rashi, or Aquarius
              and Sun enters the astrological sign of Aries.
            </p>
          </div>
          <div className="kk" style={isopen ? null :isstyle}>
            <h1>Kumbh Mela Prayagraj 2025</h1>
            <p>
              The Kumbh Mela is celebrated for many centuries. Earliest mention
              of Prayagraj Kumbh Mela Dates back to the year 1600 AD. And at
              other places, Kumbh Mela was held in the early 14 century. Kumbh
              Mela is hugely sacred and religious fair and holds special
              significance for the sadhus and saints of India. They are in fact
              the first to bathe in the holy river waters. Other people can
              bathe in the river only after the Shahi Snan of these sadhus. They
              belong to akharas and come in large numbers during the Kumbh Mela. <br /> <br />
              Their procession is a sight to watch as they sing hymns, prayers,
              and chants during their walk to the ghats. The Kumbh Mela
              Allahabad 2025 starts on the day of Pausa Purnima, which is on 13
              January 2025 and concludes on 26 February 2025. It is a
              once-in-a-lifetime experience for tourists as well. Living in
              tents and camps gives you a warm feeling and the sight of the
              starry night sky is an otherworldly experience in itself. <br /> <br /> There
              are satsangs, prayers, spiritual lectures, langar meals that can
              be enjoyed by one and all at the Kumbh Mela. A holy dip in the
              Ganga River, Meet the Naga Sadhu and their Akhara at the Kumbh
              Mela 2025. Of course, it is the number one attraction of the Kumbh
              Mela. Other attractions during Kumbh Mela are the places to be
              visited in Prayagraj like Sangam, Hanuman Temple, Prayagraj Fort,
              Akshayavat, and many others. Varanasi is also close to Prayagraj
              and visiting Varanasi is also there in every tourist itinerary.
              Note*: Everyone is aware that the most recent Maha Kumbh Mela took
              place in 2013, and the Next Maha Kumbh Mela is scheduled for 2025
              in Prayagraj.
            </p>
          </div>
          <button onClick={()=>setIsopen(!isopen)}>{isopen ? 'read less' : 'read more...'}</button>
        </div>
      </div>
    </>
  );
}

export default Kumbh;
