import React from 'react';
import './Styles/Community.css';
import embraceImage from '../../images/Gallery/5.jpeg';
import communityGroupImage from '../../images/Gallery/13.jpg';
import community_img3 from '../../images/Gallery/14.jpg';

const Community = () => {
  return (
    <section className="community-school-section">
      <div className="container">
        {/* Section Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-12">
            <h2 className="community-school-title">
              School and Community
            </h2>
          </div>
        </div>

        {/* Content Row */}
        <div className="row g-4">
          {/* First Column */}
          <div className="col-lg-4 col-md-6 col-12">
            <div className="community-school-card">
              {/* Diamond bullet point and text */}
              <div className="community-school-intro">
                <div className="d-flex align-items-start">
                  <div className="community-school-bullet">
                    <span>◆</span>
                  </div>
                  <p className="community-school-description">
                    The school was opened on the 6th of June 2016 and during this 
                    time has successfully certified more than 1,700 students
                  </p>
                </div>
              </div>

              {/* First Image */}
              <div className="community-school-image-container">
                <img 
                  src={embraceImage}
                  alt="Two people embracing in a yoga studio setting"
                  className="community-school-image"
                  loading="lazy"
                />
              </div>

              {/* Community Description Below Image */}
              <div className="community-school-info">
                <p className="community-school-subtitle">
                  A place of strength, growth and expansion.
                </p>
                <p className="community-school-highlight">
                  <strong>We're a community, a family, a school and a charity center.</strong>
                </p>
                <p className="community-school-text">
                  We are conducting seminars and events around the world and making Yoga 
                  Teaching training more available and affordable
                </p>
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div className="col-lg-4 col-md-6 col-12">
            <div className="community-school-card">
              {/* Second Image */}
              <div className="community-school-image-container">
                <img 
                  src={communityGroupImage}
                  alt="Three women in white clothing holding flowers, smiling together outdoors"
                  className="community-school-image"
                  loading="lazy"
                />
              </div>

              {/* Philosophy Text */}
              <div className="community-school-philosophy">
                <p className="community-school-philosophy-intro">
                  <span className="community-school-highlight-blue">People come to us from all over the world.</span> Your 
                  age, weight, or nationality are not important.
                </p>
                <p className="community-school-quote">
                  Our philosophy is <em>"You already have everything 
                  you need to start"</em>
                </p>
              </div>
            </div>
          </div>

          {/* Third Column */}
          <div className="col-lg-4 col-md-6 col-12">
            <div className="community-school-card">
              {/* Diamond bullet point and text */}
              <div className="community-school-intro">
                <div className="d-flex align-items-start">
                  <div className="community-school-bullet">
                    <span>◆</span>
                  </div>
                  <p className="community-school-description">
                    Join our global community where transformation meets tradition, 
                    and every journey is supported with love and guidance
                  </p>
                </div>
              </div>

              {/* Third Image */}
              <div className="community-school-image-container">
                <img 
                  src={community_img3}
                  alt="Yoga community gathering in natural setting"
                  className="community-school-image"
                  loading="lazy"
                />
              </div>

              {/* Community Description Below Image */}
              <div className="community-school-info">
                <p className="community-school-subtitle">
                  Where every soul finds its home.
                </p>
                <p className="community-school-highlight">
                  <strong>Creating lasting bonds that transcend borders and cultures.</strong>
                </p>
                <p className="community-school-text">
                  Experience the power of collective growth and shared wisdom in our 
                  nurturing environment designed for personal transformation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;