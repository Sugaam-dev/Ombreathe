import React from 'react';

const DailySchedulePage = ({ 
  title = "Sample Daily Schedule",
  description = "Experience the perfect blend of adventure and yoga in our 7-day retreat. Each day is thoughtfully designed to combine thrilling outdoor activities with peaceful yoga sessions, creating a transformative journey through Bali's stunning landscapes and rich culture.",
  scheduleImage = ''
}) => {
  
  const morningSchedule = [
    { time: "07:00 - 09:00", activity: "APMB / Rice Field Walk" },
    { time: "09:30 - 10:30", activity: "Breakfast" },
    { time: "11:00 - 16:00", activity: "Adventure Excursion Activity" },
    { time: "16:30 - 17:00", activity: "Rest & Refreshment" }
  ];

  const eveningSchedule = [
    { time: "17:00 - 18:30", activity: "Meditation / Yoga Session / Relaxation" },
    { time: "19:30 - 20:30", activity: "Dinner" },
    { time: "21:00 - 22:00", activity: "Self-study / Cultural Activities" },
    { time: "22:00", activity: "Lights out" }
  ];

  return (
    <div className="container-fluid py-5" style={{ minHeight: '100vh' }}>
      <div className="container">
        {/* Header Section */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="display-5 fw-bold mb-4" style={{ color: '#4a4a8b' }}>
              {title}
            </h1>
            <p className="lead" style={{ 
              color: '#6c757d', 
              fontSize: '1.1rem',
              lineHeight: '1.6'
            }}>
              {description}
            </p>
            <div className="mt-4">
              <p className="text-muted" style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>
                *Activities may vary based on weather conditions and group preferences
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="position-relative">
              <img 
                src={scheduleImage}
                alt="Adventure and yoga activities in Ubud"
                className="img-fluid rounded shadow-lg"
                style={{ 
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="row mb-5">
          <div className="col-lg-6">
            <hr style={{ 
              border: 'none',
              height: '3px',
              backgroundColor: '#4a4a8b',
              width: '80%'
            }} />
          </div>
        </div>

        {/* Schedule Section */}
        <div className="row">
          {/* Morning Schedule */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="pe-lg-4">
              <h3 className="mb-4" style={{ color: '#4a4a8b', fontSize: '1.5rem' }}>
                Morning & Afternoon
              </h3>
              {morningSchedule.map((item, index) => (
                <div key={index} className="mb-3 d-flex align-items-center">
                  <span 
                    className="fw-bold me-3" 
                    style={{ 
                      color: '#4a4a8b',
                      fontSize: '1.1rem',
                      minWidth: '140px',
                      
                    }}
                  >
                    {item.time}
                  </span>
                  <span 
                    className="text-muted"
                    style={{ fontSize: '1.1rem' }}
                  >
                    - {item.activity}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Evening Schedule */}
          <div className="col-lg-6">
            <div className="ps-lg-4">
              <h3 className="mb-4" style={{ color: '#4a4a8b', fontSize: '1.5rem' }}>
                Evening Session
              </h3>
              {eveningSchedule.map((item, index) => (
                <div key={index} className="mb-3 d-flex align-items-center">
                  <span 
                    className="fw-bold me-3" 
                    style={{ 
                      color: '#4a4a8b',
                      fontSize: '1.1rem',
                      minWidth: '140px'
                    }}
                  >
                    {item.time}
                  </span>
                  <span 
                    className="text-muted"
                    style={{ fontSize: '1.1rem' }}
                  >
                    - {item.activity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card border-0" style={{ backgroundColor: '#f8f9fa' }}>
              <div className="card-body p-4">
                <h4 className="mb-3" style={{ color: '#4a4a8b' }}>Adventure Activities Include</h4>
                <p className="mb-2" style={{ color: '#6c757d' }}>
                  Jungle trekking, white-water rafting, monkey forest visits, rice field walks, 
                  temple tours, waterfall excursions, Bali swings, and traditional Kecak dance performances.
                </p>
                <p className="mb-0" style={{ color: '#6c757d' }}>
                  Each day combines the thrill of adventure with the serenity of yoga, 
                  creating perfect balance for mind, body, and spirit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailySchedulePage;