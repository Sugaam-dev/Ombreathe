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
              <div style={statStyle}>300-500</div>
              <p>Advanced Hours YTTC Programs</p>
            </div>
            <div className="col-md-2">
              <div style={statStyle}>RYT 300</div>
              <p>Advanced Yoga Alliance Certification</p>
            </div>
            <div className="col-md-2">
              <div style={statStyle}>35 Days</div>
              <p>Intensive Advanced Training</p>
            </div>
            <div className="col-md-2">
              <div style={statStyle}>Therapeutic</div>
              <p>Specialized Applications</p>
            </div>
            <div className="col-md-2">
              <div style={statStyle}>Sanskrit</div>
              <p>Advanced Studies & Texts</p>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="mb-4">Welcome to Ombreath</h2>
              <p className="mb-4">
                Welcome to Ombreath's 300-Hour Advanced Yoga Teacher Training - a premier program for experienced practitioners 
                seeking to deepen their practice and teaching skills. With our team of master teachers and traditional approach, 
                we offer an intensive journey designed to transform dedicated yoga practitioners into advanced certified instructors.
              </p>
              <p className="mb-4">
                Our 300-hour advanced training builds upon foundational knowledge, diving deep into therapeutic applications, 
                advanced anatomy, Sanskrit studies, and specialized teaching methodologies. This program is designed for those 
                who already hold a 300-hour certification and wish to expand their expertise significantly.
              </p>
              <p className="mb-0">
                At Ombreath, we believe that advanced yoga practice is a lifelong journey of self-discovery and service to others. 
                Join us in this transformative experience that will elevate your understanding and teaching of this ancient practice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseOfYoga;