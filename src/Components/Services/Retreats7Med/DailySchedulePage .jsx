import React from 'react';

const DailySchedulePage = ({ 
  title = "Sample Daily Schedule",
  description = "Step into a world of serene silence and inner reflection. This retreat offers a peaceful environment designed to help you deepen your meditation practice through silent meditation sessions, mindful yoga, and transformative experiences in magical Bali.",
  scheduleImage = ""
}) => {
  
  const morningSchedule = [
    { time: "07:00 - 09:00", activity: "Silent meditation and yoga" },
    { time: "09:30 - 10:30", activity: "Silent breakfast and mindful eating" },
    { time: "11:00 - 12:30", activity: "Silent reflection and self-exploration" },
    { time: "13:30 - 14:30", activity: "Silent lunch and nature contemplation" }
  ];

  const eveningSchedule = [
    { time: "15:30 - 17:00", activity: "Silent beach walks / Guided meditation / Relaxation" },
    { time: "17:30 - 18:30", activity: "Candlelight meditation or evening yoga session" },
    { time: "19:30", activity: "Silent dinner" },
    { time: "20:30 - 21:30", activity: "Self-study / Sound healing sessions" },
    { time: "22:00", activity: "Silent night and restful sleep" }
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
                *Schedule may vary based on the teacher's guidance and group needs
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="position-relative">
              <img 
                src={scheduleImage}
                alt="Silent meditation and yoga retreat in Bali"
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
                <h4 className="mb-3" style={{ color: '#4a4a8b' }}>Silent Retreat Experience</h4>
                <p className="mb-2" style={{ color: '#6c757d' }}>
                  Embrace the power of silence to cultivate inner peace through guided silent meditations, 
                  nature immersion, silent beach walks, sound healing sessions, and mindful movement practices.
                </p>
                <p className="mb-0" style={{ color: '#6c757d' }}>
                  This transformative experience combines multiple yoga styles including Ashtanga, Hatha, 
                  Nidra, Vipassana, and Vinyasa in a serene environment designed for deep self-reflection.
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