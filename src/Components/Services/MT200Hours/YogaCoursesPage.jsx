

import React from 'react';

const YogaCoursesPage = ({ heading = "200-hour Yoga Teacher Training", subheading = "Comprehensive Curriculum" }) => {
  const courses = [
    {
      title: "Hatha Yoga",
      icon: "🧘‍♀️",
      content: [
          "Pavan Muktasana Series 1 (15 practices)",
          "Pavan Muktasana Series 2 (10 practices)",
          "Pavan Muktasana Series 3 (10 practices)",
          "Centering Postures Series (5 practices)",
          "Surya Namaskar (12 asana series)",
          "Chandra Namaskar (12 asana series)",
          "Standing Postures Series (10 practices)",
          "Sitting Postures Series (10 practices)",
          "Forward Bending Postures Series (5 practices)"
        ]
    },
    {
      title: "Ashtanga Yoga",
      icon: "🧘",
      content: [
          "Introduction to Ashtanga Yoga",
          "History of Ashtanga Yoga",
          "Awakening the Fire Within",
          "The Breath of Life and Prana",
          "Eight Limbs of Yoga and K. Pattabhi Jois method",
          "Bandha (energy locks) in Ashtanga practice",
          "Drishti (focus during movements)",
          "Sun Salutation A & B",
          "Standing and Sitting Asana Series"
        ]
    },
    {
      title: "Pranayama (Breathing Practices)",
      icon: "🌬️",
      content: [
          "What is Prana",
          "What is Pranayama",
          "Understanding breath and connection with Prana",
          "Importance and benefits of Pranayama",
          "Aspects of breathing",
          "Breath flow in five elements",
          "Three levels of Prana",
          "Three Gunas",
          "Quality and imbalance of breath"
        ]
    },
    {
      title: "Meditation (Dhyana)",
      icon: "🧘",
      content: [
          "Introduction to Meditation",
          "History and philosophy of meditation",
          "Preparation and sitting positions for meditation",
          "How to sit correctly and relax in meditation",
          "Role of breath and diaphragmatic breathing",
          "Meditation traditions and scriptures",
          "Aim and objectives of meditation",
          "Mindfulness, mantra and Tratak practices",
          "Kundalini, chakra awareness and silence practices"
        ]
    },
    {
      title: "Yoga Nidra (Psychic Sleep)",
      icon: "🛌",
      content: [
        "Basic relaxation practices",
        "Chakra awareness in Yoga Nidra",
        "Meaning and purpose of Yoga Nidra",
        "Different schools and tantric origin of Yoga Nidra",
        "Lifestyle and rules for Yoga Nidra practitioners",
        "Benefits and risks of Yoga Nidra",
        "Difference between Yoga Nidra and meditation",
        "Four states of consciousness",
        "Body awareness and tension relaxation techniques"
      ]
    },
    {
      title: "Yoga Philosophy (Yoga Darshana)",
      icon: "📖",
      content: [
        "Introduction to Indian culture and spirituality",
        "Ancient scriptures of yoga and spirituality",
        "Meaning and purpose of Indian philosophy",
        "Patanjali Yoga Sutra and Eight Limbs of Yoga",
        "Yamas, Niyamas and science of karma",
        "Mind control, concentration, meditation and samadhi",
        "Bhagavad Gita and Upanishads overview",
        "Chakras, Nadis and Kundalini",
        "Triguna, Panchakosha and Mahabhutas"
      ]
    },
    {
      title: "Ayurveda",
      icon: "🌿",
      content: [
        "Introduction to Ayurveda",
        "Unique features of Ayurvedic treatment",
        "Fundamentals of Ayurveda",
        "Panchamahabhuta (five elements)",
        "Kapha - structure and lubrication",
        "Vata - energy of movement",
        "Pitta - transformation and heat",
        "Understanding Prakriti (your constitution)",
        "Balance and imbalance of doshas"
      ]
    },
    {
      title: "Adjustment",
      icon: "🤲",
      content: [
        "What is the sense of yoga adjustment",
        "Levels of yoga adjustment",
        "Why adjustment is needed in yoga asana",
        "Role of adjustments in yoga asana class",
        "Right technique of perfect adjustment",
        "How to apply bandha and when",
        "Exploring the dynamics of each asana",
        "How to adjust self in a posture",
        "How to adjust others during the class"
      ]
    }
  ];

  return (
    <div className="container-fluid py-5" style={{ minHeight: '100vh' }}>
      {/* Header Section */}
      <div className="container mb-5">
        <div className="text-center">
          <h1 className="display-4 fw-bold mb-3" style={{ color: '#4a4a8b' }}>
            {heading}
          </h1>
          <h2 className="h3 mb-4" style={{ color: '#4a4a8b' }}>
            {subheading}
          </h2>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <p className="lead mb-2" style={{ color: '#6c757d', fontSize: '1.1rem' }}>
                Our comprehensive curriculum provides a wealth of resources to help you achieve excellence on all levels—physical, spiritual, and emotional
              </p>
              <p className="lead" style={{ color: '#6c757d', fontSize: '1.1rem' }}>
                Covering all key aspects of traditional yoga practices and philosophy with highly qualified teachers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="container">
        <div className="row g-4">
          {courses.map((course, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12">
              <div className="card h-100 shadow-sm" style={{ 
                backgroundColor: '#f8d7da', 
                border: 'none',
                borderRadius: '15px'
              }}>
                <div className="card-body p-4">
                  {/* Icon Circle */}
                  <div className="text-center mb-3">
                    <div 
                      className="rounded-circle d-inline-flex align-items-center justify-content-center"
                      style={{
                        width: '80px',
                        height: '80px',
                        backgroundColor: 'white',
                        fontSize: '2rem'
                      }}
                    >
                      {course.icon}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h4 className="card-title text-center mb-3 pb-2" style={{
                    color: '#6f42c1',
                    fontWeight: 'bold',
                    borderBottom: '2px solid #6f42c1'
                  }}>
                    {course.title}
                  </h4>
                  
                  {/* Content List */}
                  <ul className="list-unstyled" style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
                    {course.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="mb-1">
                        <span style={{ color: '#6f42c1', marginRight: '8px' }}>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Weekly Breakdown Section */}
        <div className="row mt-5">
          <div className="col-12">
            <h3 className="text-center mb-4" style={{ color: '#4a4a8b' }}>20-Day Training Structure</h3>
            <div className="row g-4">
              <div className="col-md-6 col-lg-3">
                <div className="card border-0" style={{ backgroundColor: '#e3f2fd' }}>
                  <div className="card-body text-center p-4">
                    <h5 style={{ color: '#1976d2' }}>Days 1-5</h5>
                    <p style={{ color: '#424242', fontSize: '0.9rem' }}>
                      Foundation of yoga practice and philosophy, Introduction to Hatha Yoga, Pranayama basics
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card border-0" style={{ backgroundColor: '#f3e5f5' }}>
                  <div className="card-body text-center p-4">
                    <h5 style={{ color: '#7b1fa2' }}>Days 6-10</h5>
                    <p style={{ color: '#424242', fontSize: '0.9rem' }}>
                      Ashtanga Yoga, Teaching methodology, Alignment and adjustment techniques
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card border-0" style={{ backgroundColor: '#e8f5e8' }}>
                  <div className="card-body text-center p-4">
                    <h5 style={{ color: '#388e3c' }}>Days 11-15</h5>
                    <p style={{ color: '#424242', fontSize: '0.9rem' }}>
                      Advanced asana, Advanced pranayama, Yoga Nidra, Sanskrit chanting
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card border-0" style={{ backgroundColor: '#fff3e0' }}>
                  <div className="card-body text-center p-4">
                    <h5 style={{ color: '#f57c00' }}>Days 16-20</h5>
                    <p style={{ color: '#424242', fontSize: '0.9rem' }}>
                      Integration, Assessment, Final practicum, Graduation ceremony
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YogaCoursesPage;