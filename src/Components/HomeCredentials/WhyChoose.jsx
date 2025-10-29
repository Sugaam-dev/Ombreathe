import React from 'react';
import "./Styles/whychoose.css";
import { useNavigate } from 'react-router-dom';

const WhyChoose = () => {
  const navigate =useNavigate()
  const navi=()=>{
    navigate('/contact')
  }
  const credentials = [
    {
      iconSymbol: "📊",
      title: "10+ Years Of Experience",
      description: "With over 10 years of teaching experience, Ombreathe offers authentic training in Himalayan Yoga, Ashtanga, Vinyasa, Aerial Yoga, Hasta Yoga, and more.Join us for transformative programs in Bali, Rishikesh, and McLeod Ganj — where tradition meets soul."

    },
    {
      iconSymbol: "💻",
      title: "Online Courses",
      description:"Online Yoga Courses by Ombreathe Learn authentic yoga from the comfort of your home with Ombreathe’s expertly designed online courses. Explore Hatha, Ashtanga, Vinyasa, Meditation, Pranayama, and more — guided by experienced teachers with over 10 years of training excellence.Flexible, accessible, and certified — your yoga journey starts here, anytime, anywhere."



    },
    {
      iconSymbol: "🎓",
      title: "6,000+ Teaching Hours Completed",
      description: "6,000+ Teaching Hours Completed Our experienced teachers have led thousands of hours of yoga trainings, retreats, and workshops.Each hour reflects our deep commitment to authentic teaching, personal growth, and yogic wisdom."



    },
    {
      iconSymbol: "🏆",
      title: "Yoga Alliance Certified",
      description: `All our teacher training programs are internationally recognized and certified by Yoga Alliance, ensuring high standards and global credibility.`
    },
    {
      iconSymbol: "🎁",
      title: "Special Workshops",
      description: "We offer focused sessions including Corporate Yoga, Stress Relief Workshops, Mindfulness Programs, Sound Healing, Pranayama, and more.Designed for individuals, teams, and organizations seeking balance, wellness, and inner clarity."

    },
    {
      iconSymbol: "🌿",
      title: "Holistic Approach",
      description: `At Ombreathe, we integrate the physical, mental, emotional, and spiritual aspects of yoga.
Our teachings go beyond asanas — embracing breathwork, meditation, lifestyle, and inner healing for complete well-being.`
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
              <button className="soulfit-cta-button" onClick={navi}>Start Your Practice Today</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;