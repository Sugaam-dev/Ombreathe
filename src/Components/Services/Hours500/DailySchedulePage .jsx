import React from 'react';

const DailySchedulePage = ({ 
  title = "Sample Daily Schedule",
  description = "House of Om team will share with you an extraordinary experience every day. The program is structured to have a wonderful balance of yoga practice, alignment, anatomy, teaching methodology and philosophy. Transformational 20 days will be guided by our amazing teachers. Globally renowned experts will pass experience and flavor to yoga to you.",
  scheduleImage = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
}) => {
  
  const morningSchedule = [
    { time: "6:00 - 6:15", activity: "Shatkarma" },
    { time: "6:15 - 6:30", activity: "Chanting" },
    { time: "6:30 - 7:45", activity: "Asana & Pranayama" },
    { time: "8:00 - 8:45", activity: "Morning Lab" },
    { time: "8:45 - 10:00", activity: "Breakfast" },
    { time: "10:00 - 12:30", activity: "Jnana Yoga" }
  ];

  const afternoonSchedule = [
    { time: "12:45 - 13:15", activity: "Yoga Nidra" },
    { time: "13:30 - 15:00", activity: "Lunch" },
    { time: "15:00 - 16:00", activity: "Teaching methodology" },
    { time: "16:00 - 17:15", activity: "Alignment & adjustment" },
    { time: "17:30 - 18:30", activity: "Evening Sadhana" },
    { time: "18:30 - 19:30", activity: "Dinner" }
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
          </div>
          <div className="col-lg-6">
            <div className="position-relative">
              <img 
                src={scheduleImage}
                alt="Yoga class session"
                className="img-fluid rounded shadow-lg"
                style={{ 
                  width: '100%',
                  height: '400px',
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
              {morningSchedule.map((item, index) => (
                <div key={index} className="mb-3 d-flex align-items-center">
                  <span 
                    className="fw-bold me-3" 
                    style={{ 
                      color: '#4a4a8b',
                      fontSize: '1.2rem',
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

          {/* Afternoon Schedule */}
          <div className="col-lg-6">
            <div className="ps-lg-4">
              {afternoonSchedule.map((item, index) => (
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
      </div>
    </div>
  );
};

export default DailySchedulePage;