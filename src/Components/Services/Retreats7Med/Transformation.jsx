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
            font-size: 3.5rem;
            max-width: 90%;
            margin: 0 auto;
            line-height: 1.3;
            font-weight: 300;
          }

          .highlight-text {
            color: #6a5acd;
            font-weight: 400;
          }

          @media (max-width: 992px) {
            .transformation-text {
              font-size: 2.8rem;
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
        <div>
          <p className="transformation-text mb-4">
            Embrace the <span className="highlight-text">power of silence</span> to cultivate profound inner peace and transformation
          </p>
          <p style={{ fontSize: '1.5rem', fontWeight: '300', maxWidth: '80%', margin: '0 auto', opacity: '0.9' }}>
            Our 7-day silent meditation retreat combines multiple yoga styles with guided mindfulness practices, 
            creating a transformative journey of self-discovery in the magical spiritual energy of Bali
          </p>
        </div>
      </div>
    </div>
  );
};

export default Transformation;