import React from 'react';

const YogaCoursesPage = ({ heading = "200-hour Yoga Teacher Training", subheading = "Studying program" }) => {
  const courses = [
    {
      title: "Asana",
      icon: "🧘‍♀️",
      content: [
        "Variations in standing and seated postures",
        "Deep spinal bends and rotations",
        "Inversions",
        "Balancing",
        "Standing",
        "Seated",
        "Prone",
        "Supine",
        "Hatha, Vinyasa, and Ashtanga ½ Primary Series",
        "English and Sanskrit names"
      ]
    },
    {
      title: "Teaching Methodology",
      icon: "👩‍🏫",
      content: [
        "How to design and sequence a class",
        "Adjustment Techniques",
        "Assisting and Hands on",
        "Verbal cues to support students",
        "Correct Alignment and Potential Risks of Yoga Postures",
        "Teaching Practice (Adhyapanam)",
        "Pose families",
        "Practicum with Feedback"
      ]
    },
    {
      title: "Yoga Anatomy",
      icon: "🏃‍♂️",
      content: [
        "Structure of the body through bones and muscle",
        "How to use anatomy to support poses",
        "Yoga's effects on the body systems",
        "Contraindications",
        "Adjusting for injury"
      ]
    },
    {
      title: "Pranayama",
      icon: "🧘‍♀️",
      content: [
        "Adding Pranayama into a class",
        "Yogic breathing (dirga pranayama)",
        "Nadi Shodhana",
        "Kapalabhati",
        "Ujjayi",
        "Same Vritti",
        "Anulom Vilom",
        "Bhastrika",
        "Brahmari",
        "Surya Bheda",
        "Chandra Bheda",
        "Sheetali",
        "Sheetkari",
        "Benefits and Contraindications of pranayama"
      ]
    },
    {
      title: "Meditation",
      icon: "🧘‍♀️",
      content: [
        "Introduction to Meditation",
        "Body-Scan Meditation",
        "Mindfulness",
        "Breathing techniques",
        "Meditation Philosophy",
        "Sadhu Nails Board"
      ]
    },
    {
      title: "Philosophy",
      icon: "📚",
      content: [
        "Sanatana Dharma",
        "Mystical Origins of Yoga",
        "Vedas",
        "Upanishads",
        "Bhagavad Gita",
        "Patanjali's Yoga Sutras",
        "Chakras and Energy Systems"
      ]
    },
    {
      title: "Shatkarma",
      icon: "🕯️",
      content: [
        "Jala Neti",
        "Kapal Bhati",
        "Trataka",
        "Agni Sar"
      ]
    },
    {
      title: "Additional topic",
      icon: "📋",
      content: [
        "Yoga Philosophy (Yoga Darshana)",
        "Yoga Nidra (Psychic Sleep)",
        "Yoga Bandhas (Energy Lock)",
        "Mudras (Yoga Gestures)",
        "Recitation of Sacred Sound (Mantra Chanting)",
        "English and Sanskrit names"
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
                Multi-style YTT covers all key aspects of the ancient practice and philosophy of yoga
              </p>
              <p className="lead" style={{ color: '#6c757d', fontSize: '1.1rem' }}>
                Learn from globally recognized gurus with decennial teaching experience
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
      </div>
    </div>
  );
};

export default YogaCoursesPage;