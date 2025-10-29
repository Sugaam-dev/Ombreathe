


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
            Join our transformative community at the premier yoga school in Bali and India
          </h1>
          <p className="lead">
            Experience authentic yoga from an indigenous yoga school with comprehensive knowledge, both theoretical and practical!
          </p>

          <div className="row mt-5">
            <div className="col-md-2 offset-md-1">
              <div style={statStyle}>100-500</div>
              <p>Hours YTTC Programs Available</p>
            </div>
            <div className="col-md-2">
              <div style={statStyle}>Yoga Alliance</div>
              <p>Internationally Recognized Certification</p>
            </div>
            <div className="col-md-2">
              <div style={statStyle}>25 Days</div>
              <p>Immersive Training in Bali</p>
            </div>
            <div className="col-md-2">
              <div style={statStyle}>Ubud</div>
              <p>Beautiful Location in Bali</p>
            </div>
            <div className="col-md-2">
              <div style={statStyle}>Multi-Location</div>
              <p>Rishikesh, Goa, McLeod Ganj & Bali</p>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="mb-4">Welcome to Ombreathe</h2>
              <p className="mb-4">
                Welcome to Ombreathe, a premier yoga school dedicated to providing high-quality yoga classes and courses 
                for people of all ages and skill levels. With a team of experienced and certified yoga trainers, 
                we offer a wide range of programs that are designed to help you achieve your wellness goals and transform your life.
              </p>
              <p className="mb-4">
                Our courses are broadly divided into General classes and Master Classes (Teachers training), 
                so whether you're a beginner or an experienced practitioner, we have something for everyone. 
                We also provide trial classes to help you get a taste of what we offer before committing to a full course.
              </p>
              <p className="mb-0">
                At Ombreathe, we believe that yoga is more than just a form of exercise, it's a way of life. 
                So come and join us on this journey of self-discovery, healing, and transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseOfYoga;