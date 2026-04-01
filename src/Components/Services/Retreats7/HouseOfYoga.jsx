import React from 'react';

const HouseOfYoga = ({
  backgroundImage,
  brandName = "Ombreathe",
  houseTitle = "Discover the perfect blend of adventure and yoga in the heart of Bali",
  houseSubtitle = "Join our transformative 7-day retreat combining thrilling adventures with peaceful yoga practice in Ubud!",
  stats = [
    { value: "7 Days", label: "Adventure & Yoga Retreat" },
    { value: "Daily", label: "Adventure Activities" },
    { value: "Ubud", label: "Beautiful Location in Bali" },
    { value: "All Meals", label: "Healthy Organic Food" },
    { value: "$1099", label: "All-Inclusive Package" }
  ],
  welcomeTitle = "Welcome to Our Adventure & Yoga Retreat",
  welcomeLines = [
    "Embark on a journey combining the tranquility of yoga with adventurous activities like jungle trekking, white-water rafting, monkey forest visits, rice field walks, temple visits, and waterfall excursions in lovely Ubud, Bali.",
    "During the retreat, you will get to explore Bali's lush landscapes and sacred temples together with evening yoga sessions to unwind and relax. Practice yoga surrounded by stunning natural landscapes and welcome each day with meditation amidst nature's beauty.",
    "Take some time to focus on you, your yoga practice, and your inner awareness in the ideal location to unplug and enjoy the beauty of nature."
  ]
}) => {
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
          <h5 className="fw-bold">{brandName}</h5>
          <h1 className="display-5 fw-bold">{houseTitle}</h1>
          <p className="lead">{houseSubtitle}</p>

          <div className="row mt-5 justify-content-center">
            {stats.map((stat, i) => (
              <div key={i} className="col-md-2">
                <div style={statStyle}>{stat.value}</div>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="mb-4">{welcomeTitle}</h2>
              {welcomeLines.map((line, i) => (
                <p key={i} className={i === welcomeLines.length - 1 ? "mb-0" : "mb-4"}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseOfYoga;