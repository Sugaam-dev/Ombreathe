import React from 'react';

const DailySchedulePage = ({ 
  title = "Daily Schedule - 300 Hours YTTC",
  description = "Yogalayaa's 300-hour advanced yoga teacher training program is designed for experienced practitioners seeking deeper knowledge and advanced teaching skills. This comprehensive program builds upon foundational training, offering intensive study of advanced asanas, philosophy, and specialized teaching methodologies over an extended immersive experience.",
  scheduleImage = ""
}) => {
  
  const morningSchedule = [
    { time: "05:00 AM", activity: "Advanced Self-Practice & Meditation" },
    { time: "06:00 AM", activity: "Advanced Pranayama & Energy Work" },
    { time: "07:30 AM", activity: "Advanced Hatha & Ashtanga Practice" },
    { time: "09:30 AM", activity: "Breakfast" },
    { time: "10:45 AM", activity: "Advanced Anatomy & Therapeutic Applications" },
    { time: "12:00 PM", activity: "Advanced Teaching Methodology & Sequencing" }
  ];

  const afternoonSchedule = [
    { time: "01:30 PM", activity: "Lunch" },
    { time: "02:45 PM", activity: "Sanskrit Studies & Chanting" },
    { time: "04:00 PM", activity: "Advanced Philosophy & Vedantic Studies" },
    { time: "05:30 PM", activity: "Advanced Vinyasa & Inversions" },
    { time: "07:00 PM", activity: "Dinner" },
    { time: "08:30 PM", activity: "Yoga Nidra & Advanced Meditation" }
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
                *Please note: The timing of teaching and modules may vary depending on the season.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="position-relative">
              <img 
                src={scheduleImage}
                alt="Yoga class session at Yogalayaa"
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
                Morning Session
              </h3>
              {morningSchedule.map((item, index) => (
                <div key={index} className="mb-3 d-flex align-items-center">
                  <span 
                    className="fw-bold me-3" 
                    style={{ 
                      color: '#4a4a8b',
                      fontSize: '1.1rem',
                      minWidth: '120px',
                      
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

          {/* Afternoon/Evening Schedule */}
          <div className="col-lg-6">
            <div className="ps-lg-4">
              <h3 className="mb-4" style={{ color: '#4a4a8b', fontSize: '1.5rem' }}>
                Afternoon & Evening Session
              </h3>
              {afternoonSchedule.map((item, index) => (
                <div key={index} className="mb-3 d-flex align-items-center">
                  <span 
                    className="fw-bold me-3" 
                    style={{ 
                      color: '#4a4a8b',
                      fontSize: '1.1rem',
                      minWidth: '120px'
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
                <h4 className="mb-3" style={{ color: '#4a4a8b' }}>About the Advanced Schedule</h4>
                <p className="mb-2" style={{ color: '#6c757d' }}>
                  Our 300-hour advanced daily schedule is designed for experienced practitioners seeking deeper immersion 
                  into yoga practice, philosophy, and teaching methodology. This intensive program includes advanced asana practice, 
                  therapeutic applications, and comprehensive study of traditional texts.
                </p>
                <p className="mb-0" style={{ color: '#6c757d' }}>
                  The program builds upon foundational knowledge to develop advanced teaching skills, deepen personal practice, 
                  and explore specialized areas including yoga therapy, advanced anatomy, and traditional Sanskrit studies.
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