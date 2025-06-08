// import React from 'react';

// const DailySchedulePage = ({ 
//   title = "Sample Daily Schedule",
//   description = "House of Om team will share with you an extraordinary experience every day. The program is structured to have a wonderful balance of yoga practice, alignment, anatomy, teaching methodology and philosophy. Transformational 20 days will be guided by our amazing teachers. Globally renowned experts will pass experience and flavor to yoga to you.",
//   scheduleImage = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
// }) => {
  
//   const morningSchedule = [
//     { time: "6:00 - 6:15", activity: "Shatkarma" },
//     { time: "6:15 - 6:30", activity: "Chanting" },
//     { time: "6:30 - 7:45", activity: "Asana & Pranayama" },
//     { time: "8:00 - 8:45", activity: "Morning Lab" },
//     { time: "8:45 - 10:00", activity: "Breakfast" },
//     { time: "10:00 - 12:30", activity: "Jnana Yoga" }
//   ];

//   const afternoonSchedule = [
//     { time: "12:45 - 13:15", activity: "Yoga Nidra" },
//     { time: "13:30 - 15:00", activity: "Lunch" },
//     { time: "15:00 - 16:00", activity: "Teaching methodology" },
//     { time: "16:00 - 17:15", activity: "Alignment & adjustment" },
//     { time: "17:30 - 18:30", activity: "Evening Sadhana" },
//     { time: "18:30 - 19:30", activity: "Dinner" }
//   ];

//   return (
//     <div className="container-fluid py-5" style={{ minHeight: '100vh' }}>
//       <div className="container">
//         {/* Header Section */}
//         <div className="row align-items-center mb-5">
//           <div className="col-lg-6 mb-4 mb-lg-0">
//             <h1 className="display-5 fw-bold mb-4" style={{ color: '#4a4a8b' }}>
//               {title}
//             </h1>
//             <p className="lead" style={{ 
//               color: '#6c757d', 
//               fontSize: '1.1rem',
//               lineHeight: '1.6'
//             }}>
//               {description}
//             </p>
//           </div>
//           <div className="col-lg-6">
//             <div className="position-relative">
//               <img 
//                 src={scheduleImage}
//                 alt="Yoga class session"
//                 className="img-fluid rounded shadow-lg"
//                 style={{ 
//                   width: '100%',
//                   height: '400px',
//                   objectFit: 'cover'
//                 }}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Divider Line */}
//         <div className="row mb-5">
//           <div className="col-lg-6">
//             <hr style={{ 
//               border: 'none',
//               height: '3px',
//               backgroundColor: '#4a4a8b',
//               width: '80%'
//             }} />
//           </div>
//         </div>

//         {/* Schedule Section */}
//         <div className="row">
//           {/* Morning Schedule */}
//           <div className="col-lg-6 mb-4 mb-lg-0">
//             <div className="pe-lg-4">
//               {morningSchedule.map((item, index) => (
//                 <div key={index} className="mb-3 d-flex align-items-center">
//                   <span 
//                     className="fw-bold me-3" 
//                     style={{ 
//                       color: '#4a4a8b',
//                       fontSize: '1.2rem',
//                       minWidth: '140px',
                      
//                     }}
//                   >
//                     {item.time}
//                   </span>
//                   <span 
//                     className="text-muted"
//                     style={{ fontSize: '1.1rem' }}
//                   >
//                     - {item.activity}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Afternoon Schedule */}
//           <div className="col-lg-6">
//             <div className="ps-lg-4">
//               {afternoonSchedule.map((item, index) => (
//                 <div key={index} className="mb-3 d-flex align-items-center">
//                   <span 
//                     className="fw-bold me-3" 
//                     style={{ 
//                       color: '#4a4a8b',
//                       fontSize: '1.1rem',
//                       minWidth: '140px'
//                     }}
//                   >
//                     {item.time}
//                   </span>
//                   <span 
//                     className="text-muted"
//                     style={{ fontSize: '1.1rem' }}
//                   >
//                     - {item.activity}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DailySchedulePage;



import React from 'react';

const DailySchedulePage = ({ 
  title = "Daily Schedule - 200 Hours YTTC",
  description = "Yogalayaa's 200-hour yoga teacher training program is designed to equip aspiring yoga teachers with the knowledge and skills needed to teach and guide students in a safe and effective manner. The program is structured to allow participants to immerse themselves fully in the practice, with a daily schedule that includes yoga classes, meditation sessions, lectures, and workshops.",
  scheduleImage = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
}) => {
  
  const morningSchedule = [
    { time: "05:30 AM", activity: "Self-Practice & Self-Awareness" },
    { time: "06:15 AM", activity: "Pranayama and Shatkarma" },
    { time: "07:30 AM", activity: "Hatha Yoga" },
    { time: "09:00 AM", activity: "Breakfast" },
    { time: "10:45 AM", activity: "Yoga Anatomy" },
    { time: "12:00 PM", activity: "Yoga Alignment & Adjustment / Teaching Methodology" }
  ];

  const afternoonSchedule = [
    { time: "01:15 PM", activity: "Lunch" },
    { time: "02:30 PM", activity: "Self-Study" },
    { time: "03:45 PM", activity: "Yoga Philosophy" },
    { time: "05:00 PM", activity: "Ashtanga Yoga" },
    { time: "07:00 PM", activity: "Dinner" },
    { time: "09:00 PM", activity: "Self-Reflection and Meditation" }
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
                <h4 className="mb-3" style={{ color: '#4a4a8b' }}>About the Schedule</h4>
                <p className="mb-2" style={{ color: '#6c757d' }}>
                  Our daily schedule is designed to provide a wonderful balance of yoga practice, alignment, anatomy, 
                  teaching methodology and philosophy. These transformational days will be guided by our amazing teachers 
                  with decades of experience.
                </p>
                <p className="mb-0" style={{ color: '#6c757d' }}>
                  The program helps you align your life with your passion, establish nurturing self-care rituals, 
                  improve coordination and flexibility, and build exceptional mental and physical resilience.
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