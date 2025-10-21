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
          <h5 className="fw-bold">Ombreath</h5>
          <h1 className="display-5 fw-bold">
            Join our transformative community at the premier yoga school in Bali and India
          </h1>
          <p className="lead">
            Experience authentic yoga from an indigenous yoga school with comprehensive knowledge, both theoretical and practical!
          </p>

          <div className="row mt-5">
            <div className="col-md-2 offset-md-1">
              <div style={statStyle}>100</div>
              <p>Foundation Hours Program</p>
            </div>
            <div className="col-md-2">
              <div style={statStyle}>Beginner</div>
              <p>Friendly Certification</p>
            </div>
            <div className="col-md-2">
              <div style={statStyle}>13 Days</div>
              <p>Foundation Training</p>
            </div>
            <div className="col-md-2">
              <div style={statStyle}>Essential</div>
              <p>Teaching Skills</p>
            </div>
            <div className="col-md-2">
              <div style={statStyle}>Philosophy</div>
              <p>Introduction & Practice</p>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="mb-4">Welcome to Ombreath</h2>
              <p className="mb-4">
                Welcome to Ombreath's 100-Hour Foundation Yoga Teacher Training - a perfect introduction for beginners 
                and those seeking to establish a solid foundation in yoga practice and teaching. With our experienced teachers 
                and supportive approach, we offer a gentle yet comprehensive journey designed to introduce newcomers to the beautiful world of yoga.
              </p>
              <p className="mb-4">
                Our 100-hour foundation training covers essential yoga fundamentals, basic anatomy, foundational philosophy, 
                and introductory teaching skills. This program is designed for complete beginners or those who want to deepen 
                their personal practice before committing to longer teacher training programs.
              </p>
              <p className="mb-0">
                At Ombreath, we believe that every yoga journey begins with strong foundations. Join us in this nurturing 
                experience that will introduce you to the fundamentals of this ancient practice in a safe, supportive environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseOfYoga;