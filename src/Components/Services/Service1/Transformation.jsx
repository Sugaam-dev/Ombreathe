import React from 'react';

const Transformation = ({ backgroundImage }) => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    minHeight: '100vh',
    width: '100%',
  };

  return (
    <div style={backgroundStyle}>
      <style>
        {`
          .overlay {
            background-color: rgba(0, 0, 0, 0.6);
            min-height: 100vh;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 20px;
          }

          .transformation-text {
            font-size: 4rem;
            max-width: 90%;
            margin: 0 auto;
            line-height: 1.3;
          }

          @media (max-width: 992px) {
            .transformation-text {
              font-size: 3rem;
            }
          }

          @media (max-width: 600px) {
            .transformation-text {
              font-size: 2rem;
            }
          }
        `}
      </style>
      <div className="overlay">
        <p className="transformation-text">
          We take you on a transformational journey connecting the mind, body and spirit amidst of cascading waterfalls
        </p>
      </div>
    </div>
  );
};

export default Transformation;
