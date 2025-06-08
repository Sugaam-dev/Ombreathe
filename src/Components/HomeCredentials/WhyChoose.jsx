import React from 'react';
import "./Styles/whychoose.css";

const WhyChoose = () => {
  const credentials = [
    {
      iconSymbol: "📊",
      title: "10+ Years Of Experience",
      description: "A un Angleso semblar un simplificat Angles, quam un skepticbridge."
    },
    {
      iconSymbol: "💻",
      title: "Online Courses Available",
      description: "A un Angleso semblar un simplificat Angles, quam un skepticbridge."
    },
    {
      iconSymbol: "🎓",
      title: "6,000+ Certified Yoga Students",
      description: "A un Angleso semblar un simplificat Angles, quam un skepticbridge."
    },
    {
      iconSymbol: "🏆",
      title: "Yoga Alliance Certified",
      description: "A un Angleso semblar un simplificat Angles, quam un skepticbridge."
    },
    {
      iconSymbol: "🎁",
      title: "Special Workshops",
      description: "A un Angleso semblar un simplificat Angles, quam un skepticbridge."
    },
    {
      iconSymbol: "🌿",
      title: "Holistic Approach",
      description: "A un Angleso semblar un simplificat Angles, quam un skepticbridge."
    }
  ];

  return (
    <>
      <div className="yogaschool">
        <div className="yogaa">
          <div className="heading">
            <h1>Why Choose Us? Get Your Life Style Back</h1>
            <img src="./images/lg.png" alt="logo" />
          </div>
        </div>
      </div>

      {/* Credentials Section */}
      <div className="soulfit-credentials-section">
        <div className="soulfit-credentials-container">
         

          <div className="soulfit-credentials-grid">
            {credentials.map((credential, index) => (
              <div key={index} className="soulfit-credential-card">
                <div className="soulfit-icon-container">
                  <span className="soulfit-icon-emoji">{credential.iconSymbol}</span>
                </div>
                <div className="soulfit-card-content">
                  <h3>{credential.title}</h3>
                  <p>{credential.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="soulfit-cta-section">
            <div className="soulfit-cta-card">
              <h2>Ready to Begin Your Journey?</h2>
              <p>Join thousands of students who have transformed their lives through yoga. Start your practice today with personalized guidance and support.</p>
              <button className="soulfit-cta-button">Start Your Practice Today</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;