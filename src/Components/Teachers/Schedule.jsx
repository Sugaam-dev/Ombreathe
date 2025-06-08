import React from 'react';
import './Schedule.css';

const Schedule = () => {
  const scheduleData = [
    { time: '7:00 am - 9:00 am', activity: 'Asana Pranayama Mudra Bandha (APMB)', type: 'practice' },
    { time: '9:30 am - 10:30 am', activity: 'Breakfast Break', type: 'break' },
    { time: '11:00 am - 1:00 pm', activity: 'Anatomy and Physiology / Philosophy and Ethics of Yoga', type: 'theory' },
    { time: '1:00 pm - 2:00 pm', activity: 'Lunch Break', type: 'break' },
    { time: '3:00 pm - 4:00 pm', activity: 'Teaching Methodology and Techniques', type: 'theory' },
    { time: '3:30 pm - 4:00 pm', activity: 'Tea Break', type: 'break' },
    { time: '4:30 pm - 5:30 pm', activity: 'Advanced Asana and Pranayama Techniques', type: 'practice' },
    { time: '5:30 pm - 6:30 pm', activity: 'Meditation / Relaxation', type: 'meditation' },
    { time: '7:00 pm - 8:00 pm', activity: 'Dinner', type: 'break' },
    { time: '8:00 pm - 9:00 pm', activity: 'Self-Study and Reflection', type: 'study' },
    { time: '10:00 pm', activity: 'Lights Out', type: 'rest' }
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case 'practice': return '🧘‍♀️';
      case 'theory': return '📚';
      case 'meditation': return '🕯️';
      case 'break': return '🍽️';
      case 'study': return '📝';
      case 'rest': return '🌙';
      default: return '⏰';
    }
  };

  return (
    <div className="schedule-container">
      <div className="yogaschool">
        <div className="yogaa">
          <div className="heading">
            <h1>Yoga Teacher Training Schedule</h1>
            <img src="./images/lg.png" alt="logo" />
          </div>
        </div>
      </div>
      
      <div className="schedule-grid">
        {scheduleData.map((item, index) => (
          <div key={index} className={`schedule-item ${item.type}`}>
            <div className="time-slot">
              <span className="icon">{getActivityIcon(item.type)}</span>
              <span className="time">{item.time}</span>
            </div>
            <div className="activity">
              <h3 className="activity-name">{item.activity}</h3>
              <span className={`activity-badge ${item.type}`}>
                {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="footer">
        <div className="legend">
          <h4>Activity Types</h4>
          <div className="legend-items">
            <span className="legend-item practice">🧘‍♀️ Practice</span>
            <span className="legend-item theory">📚 Theory</span>
            <span className="legend-item meditation">🕯️ Meditation</span>
            <span className="legend-item break">🍽️ Break</span>
            <span className="legend-item study">📝 Study</span>
            <span className="legend-item rest">🌙 Rest</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;