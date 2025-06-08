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
          <h5 className="fw-bold">House of Om</h5>
          <h1 className="display-5 fw-bold">
            Join our life-changing community of over 34,000 students.
          </h1>
          <p className="lead">
            Become part of our family at one of the leading accredited schools in Bali and India!
          </p>

          <div className="row mt-5">
            <div className="col-md-2 offset-md-1">
              <div style={statStyle}>33%</div>
              <p>graduates return to sign up for new programs</p>
            </div>
            <div className="col-md-2">
              <div style={statStyle}>10,000+</div>
              <p>graduated online</p>
            </div>
            <div className="col-md-2">
              <div style={statStyle}>6,000+</div>
              <p>graduated in Bali</p>
            </div>
            <div className="col-md-2">
              <div style={statStyle}>18,000+</div>
              <p>graduated in India</p>
            </div>
            <div className="col-md-2">
              <div style={statStyle}>200k+</div>
              <p>Instagram & Facebook community</p>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <h2>More Info Below</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet, nisi nec
            faucibus laoreet...
          </p>
          <div style={{ height: 'auto' }}></div>
        </div>
      </div>
    </div>
  );
};

export default HouseOfYoga;
