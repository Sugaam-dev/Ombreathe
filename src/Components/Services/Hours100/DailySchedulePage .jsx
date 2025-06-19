import React from 'react';

const DailySchedulePage = ({ 
  title = "Daily Schedule - 100 Hours Foundation YTTC",
  description = "Yogalayaa's 100-hour foundation yoga teacher training program is designed for beginners and those seeking an introduction to yoga teaching. This comprehensive foundation program provides essential knowledge and skills needed to begin teaching yoga safely and effectively, with a daily schedule that includes fundamental yoga practices, basic anatomy, and foundational philosophy.",
  scheduleImage = ""
}) => {
  
  const morningSchedule = [
    { time: "06:00 AM", activity: "Morning Meditation & Breathing" },
    { time: "06:30 AM", activity: "Basic Pranayama Practice" },
    { time: "07:30 AM", activity: "Foundational Hatha Yoga" },
    { time: "09:00 AM", activity: "Breakfast" },
    { time: "10:30 AM", activity: "Basic Yoga Anatomy" },
    { time: "11:45 AM", activity: "Teaching Fundamentals & Alignment Basics" }
  ];

  const afternoonSchedule = [
    { time: "01:00 PM", activity: "Lunch" },
    { time: "02:30 PM", activity: "Self-Study & Practice" },
    { time: "03:30 PM", activity: "Yoga Philosophy Introduction" },
    { time: "04:45 PM", activity: "Gentle Vinyasa Flow" },
    { time: "06:30 PM", activity: "Dinner" },
    { time: "08:00 PM", activity: "Relaxation & Yoga Nidra" }
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
                <h4 className="mb-3" style={{ color: '#4a4a8b' }}>About the Foundation Schedule</h4>
                <p className="mb-2" style={{ color: '#6c757d' }}>
                  Our 100-hour foundation schedule is designed for beginners and those new to yoga teaching. 
                  The program provides a gentle introduction to yoga practice, basic anatomy, fundamental philosophy, 
                  and essential teaching skills in a supportive and nurturing environment.
                </p>
                <p className="mb-0" style={{ color: '#6c757d' }}>
                  This foundational program helps you establish a personal practice, understand basic yoga principles, 
                  learn fundamental teaching techniques, and build confidence to begin sharing yoga with others safely and effectively.
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