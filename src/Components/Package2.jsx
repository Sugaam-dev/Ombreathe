import React from "react";
import "../Styles/Package1.css";
import Contact from "./Contact";
function Package2() {
  return (
    <>
      <div className="package">
        <div className="headpackage">
          <h1>Kumbh Mela Package 2 Nights 3 Days</h1>
        </div>
        <div className="description">
          <h2>Description</h2>
          <img src="./images/bath2.jpg" alt="" />
          <p>
            Kumbh Mela Package 1 Nights 2 Days: Our Kumbh Mela Package offers
            you the best of Prayagraj Kumbh Mela 2025 experiences in the
            shortest possible time. This is complete 1 night and 2 days Kumbh
            Mela Tour Package. We have made arrangements in this package to give
            you that special privilege as holy dip in ghat and local
            Sightseeing. You attend the Ganga Aarti at ghat is like
            participating in a grand ceremony of spiritual ecstasy. <br />{" "}
            <br /> So be prepared to be a part of the largest human gathering on
            this planet, and we have designed your tour itinerary so that you
            get all that is to see at the Prayagraj Kumbh Mela 2025. Our
            representatives are there to guide you to the best places to see the
            Naga Sadhus and will even let you have an insight into their
            spiritual lives at close range. This Package is valid for Non
            Bathing Date Only.
          </p>
        </div>
        <div className="iti">
          <h1>Itinerary</h1>
          <div className="">
            {" "}
            <span>DAY 01</span>
            <h2>Arrival At Prayagraj</h2>
          </div>
          <p>
            On arrival at Prayagraj Railway Station/Airport, our representative
            will pick you up and transfer you to our camp. Upon arrival, check
            in at the camp and freshen up. If you arrive early, you can visit
            the Bade Hanuman Temple, Akshayvat, and participate in the Ganga
            Aarti. Dinner and overnight stay will be provided at our camp.
            Please note that pick-up will be done by vehicle, and sightseeing
            can be done on foot at your own pace.
          </p>

          <div className="">
            {" "}
            <span>DAY 02</span>
            <h2>Kumbh Mela Holy Dip</h2>
          </div>
          <p>
            In the morning, take a holy dip in the Triveni Sangam, the
            confluence point of the Ganga, Yamuna, and the invisible Saraswati.
            Afterward, return to the camp for breakfast. The rest of the time is
            free for you to explore the Kumbh Mela. In the evening, visit the
            Akhara and the Naga Sadhus Camp. Dinner and overnight stay will be
            provided at our camp. Please note that sightseeing can be done on
            foot at your own pace.
          </p>

          <div className="">
            {" "}
            <span>DAY 03</span>
            <h2>Drop At Prayagraj Railway Station/Airport</h2>
          </div>
          <p>
          In the morning, after breakfast, check out from the camp and transfer to the Railway Station/Airport for your onward journey.
          </p>

          <h3>Tour END With Soulfit</h3>
        </div>
        <div className="det">
          <div className="gg">
            <div className="headingg">
              <h1>Inclusions</h1>
            </div>
            <p>1. Pick-up & Drop from Railway Station/Airport to the camp.</p>
            <p>
              2. Accommodation on double occupancy in Deluxe Category Tents.
            </p>
            <p>3. Morning Tea, Breakfast, Lunch & Dinner at the camp.</p>
            <p>4. Packaged Mineral water- 1 Bottle/Person/Day</p>
            <p>5. Complimentary Wi-Fi</p>
          </div>
          <div className="gg">
            <div className="headingg">
              <h1>Exclusion</h1>
            </div>
            <p>1. GST</p>
            <p>2. Medical & Travel Insurance</p>
            <p>3. Any kind of Entry Fees</p>
            <p>4. Tour Guide</p>
          </div>

          <div className="gg">
            <div className="headingg">
              <h1>Price</h1>
            </div>
            <h3>INR 3000-5000/ Per Day</h3>
           <a href="https://wa.me/8797879750?texr=Welcome to Soulfit" target='_blank'> <button>Book Now</button></a>
           
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}

export default Package2;
