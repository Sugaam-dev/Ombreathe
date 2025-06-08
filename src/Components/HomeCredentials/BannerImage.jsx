import React from 'react';
import guru from '../../images/sadguru.webp'
const BannerImage = () => {
  return (
    <>
 
      
      <div className="banner-container">
        <img 
          src={guru}
          alt="Banner image"
          className="img-fluid w-100 d-none d-md-block banner-desktop"
        />
        
        <img
             src={guru} 
          alt="Banner image"
          className="img-fluid w-100 d-block d-md-none banner-mobile"
        />
      </div>

      <style jsx>{`
        .banner-container {
          width: 100%;
          overflow: hidden;
        }

        /* Desktop/Tablet - Fixed height banner */
        .banner-desktop {
          height: 60vh;
          min-height: 400px;
          object-fit: cover;
          object-position: center;
        }

        /* Mobile - Full image display */
        .banner-mobile {
          height: auto;
          object-fit: contain;
        }

        @media (max-width: 575.98px) {
          .banner-desktop {
            min-height: 300px;
          }
        }
      `}</style>
    </>
  );
};

export default BannerImage;