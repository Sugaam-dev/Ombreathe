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
          <h5 className="fw-bold">Ombreathe</h5>
          <h1 className="display-5 fw-bold">
            Step into a world of serene silence and inner reflection in magical Bali
          </h1>
          <p className="lead">
            Experience a transformative multi-style yoga and meditation retreat designed to deepen your practice through silence and mindfulness!
          </p>

          <div className="row mt-5">
            <div className="col-md-2 offset-md-1">
              <div style={statStyle}>7 Days</div>
              <p>Multi-Style & Meditation</p>
            </div>
            <div className="col-md-2">
              <div style={statStyle}>Silent</div>
              <p>Meditation Practice</p>
            </div>
            <div className="col-md-2">
              <div style={statStyle}>5 Styles</div>
              <p>Yoga Modalities</p>
            </div>
            <div className="col-md-2">
              <div style={statStyle}>Sound</div>
              <p>Healing Sessions</p>
            </div>
            <div className="col-md-2">
              <div style={statStyle}>₹65,018</div>
              <p>Early Bird Pricing</p>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="mb-4">Welcome to Your Silent Meditation Retreat</h2>
              <p className="mb-4">
                This retreat provides a transformative experience for those seeking inner peace through a series of 
                silent meditation sessions. Participants will engage in guided mindfulness practices, walking meditations, 
                and periods of group silence in the magical setting of Ubud, Bali.
              </p>
              <p className="mb-4">
                Experience multiple yoga styles including Ashtanga, Hatha, Nidra, Vipassana, and Vinyasa yoga. 
                Practice amidst Bali's stunning natural beauty with silent beach walks, nature immersion, 
                and sound healing sessions that enhance your journey toward inner tranquility.
              </p>
              <p className="mb-0">
                It's the perfect opportunity for individuals looking to deepen their meditation practice, 
                connect with their inner selves, and embrace the profound peace that silence brings 
                in this spiritually enriching environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseOfYoga;