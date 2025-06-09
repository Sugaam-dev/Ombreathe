import React from 'react';

const HouseOfYoga = ({ backgroundImage }) => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    minHeight: '100vh',
    width: '100%',
  };

  const overlayStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    minHeight: '100vh',
    paddingTop: '50px',
    color: 'white',
  };

  const statStyle = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
  };

  return (
    <div style={backgroundStyle}>
      <div style={overlayStyle}>
        <div className="container text-center py-5">
          <h5 className="fw-bold">Yogalayaa</h5>
          <h1 className="display-5 fw-bold">
            Discover the perfect blend of adventure and yoga in the heart of Bali
          </h1>
          <p className="lead">
            Join our transformative 7-day retreat combining thrilling adventures with peaceful yoga practice in Ubud!
          </p>

          <div className="row mt-5">
            <div className="col-md-2 offset-md-1">
              <div style={statStyle}>7 Days</div>
              <p>Adventure & Yoga Retreat</p>
            </div>
            <div className="col-md-2">
              <div style={statStyle}>Daily</div>
              <p>Adventure Activities</p>
            </div>
            <div className="col-md-2">
              <div style={statStyle}>Ubud</div>
              <p>Beautiful Location in Bali</p>
            </div>
            <div className="col-md-2">
              <div style={statStyle}>All Meals</div>
              <p>Healthy Organic Food</p>
            </div>
            <div className="col-md-2">
              <div style={statStyle}>$1099</div>
              <p>All-Inclusive Package</p>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="mb-4">Welcome to Our Adventure & Yoga Retreat</h2>
              <p className="mb-4">
                Embark on a journey combining the tranquility of yoga with adventurous activities like 
                jungle trekking, white-water rafting, monkey forest visits, rice field walks, 
                temple visits, and waterfall excursions in lovely Ubud, Bali.
              </p>
              <p className="mb-4">
                During the retreat, you will get to explore Bali's lush landscapes and sacred temples 
                together with evening yoga sessions to unwind and relax. Practice yoga surrounded by 
                stunning natural landscapes and welcome each day with meditation amidst nature's beauty.
              </p>
              <p className="mb-0">
                Take some time to focus on you, your yoga practice, and your inner awareness in 
                the ideal location to unplug and enjoy the beauty of nature.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseOfYoga;