import React, { useMemo, useCallback, memo, useState, useEffect } from 'react';
import './Schedule.css';

// Memoized Schedule Item Component
const ScheduleItem = memo(({ item, index, isVisible }) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, index * 100); // Staggered animation
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, index]);

  return (
    <div 
      className={`schedule-item ${item.type} ${shouldAnimate ? 'animate-in' : ''}`}
      style={{
        opacity: shouldAnimate ? 1 : 0,
        transform: shouldAnimate ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.5s ease'
      }}
    >
      <div className="time-slot">
        <span className="icon">{item.icon}</span>
        <span className="time">{item.time}</span>
      </div>
      <div className="activity">
        <h3 className="activity-name">{item.activity}</h3>
        <span className={`activity-badge ${item.type}`}>
          {item.displayType}
        </span>
      </div>
    </div>
  );
});

// Memoized Legend Component
const Legend = memo(() => {
  const legendItems = useMemo(() => [
    { type: 'practice', icon: '🧘‍♀️', label: 'Practice' },
    { type: 'theory', icon: '📚', label: 'Theory' },
    { type: 'meditation', icon: '🕯️', label: 'Meditation' },
    { type: 'break', icon: '🍽️', label: 'Break' },
    { type: 'study', icon: '📝', label: 'Study' },
    { type: 'rest', icon: '🌙', label: 'Rest' }
  ], []);

  return (
    <div className="footer">
      <div className="legend">
        <h4>Activity Types</h4>
        <div className="legend-items">
          {legendItems.map(({ type, icon, label }) => (
            <span key={type} className={`legend-item ${type}`}>
              {icon} {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});

// Intersection Observer Hook for performance
const useIntersectionObserver = (callback, options = {}) => {
  const [ref, setRef] = useState(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      callback(entry.isIntersecting);
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    });

    observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, callback]);

  return setRef;
};

const Schedule = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Intersection observer for progressive loading
  const scheduleRef = useIntersectionObserver(
    useCallback((visible) => setIsVisible(visible), [])
  );

  // Memoized schedule data with pre-computed values
  const scheduleData = useMemo(() => [
    { 
      time: '7:00 am - 9:00 am', 
      activity: 'Asana Pranayama Mudra Bandha (APMB)', 
      type: 'practice',
      icon: '🧘‍♀️',
      displayType: 'Practice'
    },
    { 
      time: '9:30 am - 10:30 am', 
      activity: 'Breakfast Break', 
      type: 'break',
      icon: '🍽️',
      displayType: 'Break'
    },
    { 
      time: '11:00 am - 1:00 pm', 
      activity: 'Anatomy and Physiology / Philosophy and Ethics of Yoga', 
      type: 'theory',
      icon: '📚',
      displayType: 'Theory'
    },
    { 
      time: '1:00 pm - 2:00 pm', 
      activity: 'Lunch Break', 
      type: 'break',
      icon: '🍽️',
      displayType: 'Break'
    },
    { 
      time: '3:00 pm - 4:00 pm', 
      activity: 'Teaching Methodology and Techniques', 
      type: 'theory',
      icon: '📚',
      displayType: 'Theory'
    },
    { 
      time: '3:30 pm - 4:00 pm', 
      activity: 'Tea Break', 
      type: 'break',
      icon: '🍽️',
      displayType: 'Break'
    },
    { 
      time: '4:30 pm - 5:30 pm', 
      activity: 'Advanced Asana and Pranayama Techniques', 
      type: 'practice',
      icon: '🧘‍♀️',
      displayType: 'Practice'
    },
    { 
      time: '5:30 pm - 6:30 pm', 
      activity: 'Meditation / Relaxation', 
      type: 'meditation',
      icon: '🕯️',
      displayType: 'Meditation'
    },
    { 
      time: '7:00 pm - 8:00 pm', 
      activity: 'Dinner', 
      type: 'break',
      icon: '🍽️',
      displayType: 'Break'
    },
    { 
      time: '8:00 pm - 9:00 pm', 
      activity: 'Self-Study and Reflection', 
      type: 'study',
      icon: '📝',
      displayType: 'Study'
    },
    { 
      time: '10:00 pm', 
      activity: 'Lights Out', 
      type: 'rest',
      icon: '🌙',
      displayType: 'Rest'
    }
  ], []);

  // Memoized header content
  const headerContent = useMemo(() => ({
    title: "Yoga Teacher Training Schedule",
    logo: "./images/lg.png"
  }), []);

  // Performance monitoring
  useEffect(() => {
    if (isVisible) {
      console.log('Schedule: Content became visible, starting animations');
    }
  }, [isVisible]);

  return (
    <div className="schedule-container">
      <div className="yogaschool">
        <div className="yogaa">
          <div className="heading">
            <h1>{headerContent.title}</h1>
            <img 
              src={headerContent.logo} 
              alt="Ombreathe Logo"
              loading="eager"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
      
      <div 
        ref={scheduleRef}
        className="schedule-grid"
        style={{
          minHeight: isVisible ? 'auto' : '600px',
          transition: 'min-height 0.3s ease'
        }}
      >
        {scheduleData.map((item, index) => (
          <ScheduleItem
            key={`${item.time}-${item.type}`}
            item={item}
            index={index}
            isVisible={isVisible}
          />
        ))}
      </div>
      
      <Legend />
      
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .schedule-item.animate-in {
          animation: slideInUp 0.5s ease forwards;
        }

        .legend {
          animation: fadeIn 0.8s ease 0.5s both;
        }

        /* Performance optimizations */
        .schedule-item {
          will-change: transform, opacity;
          backface-visibility: hidden;
          transform: translateZ(0);
        }

        .schedule-grid {
          will-change: min-height;
        }

        .activity-badge {
          will-change: background-color;
        }

        /* Smooth hover effects */
        .schedule-item:hover {
          transform: translateY(-2px) translateZ(0);
          transition: transform 0.2s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .legend-item:hover {
          transform: scale(1.05) translateZ(0);
          transition: transform 0.2s ease;
        }

        /* Optimized for mobile */
        @media (max-width: 768px) {
          .schedule-item {
            transform: translateZ(0);
          }
          
          .schedule-item:hover {
            transform: translateZ(0);
            box-shadow: none;
          }
        }

        /* Reduced motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .schedule-item,
          .legend {
            animation: none;
          }
          
          .schedule-item {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
};

export default memo(Schedule);