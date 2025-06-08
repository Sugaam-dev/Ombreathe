import React from 'react';

const YogaCoursesPage = ({ heading = "300-hour Advanced Yoga Teacher Training", subheading = "Comprehensive Advanced Curriculum" }) => {
  const courses = [
    {
      title: "Advanced Asana Practice",
      icon: "🧘‍♀️",
      content: [
        "Advanced Ashtanga Primary & Intermediate Series",
        "Complex arm balances and inversions",
        "Advanced backbends and deep hip work",
        "Therapeutic modifications and variations",
        "Advanced sequencing principles",
        "Peak pose development",
        "Advanced alignment and energetics",
        "Challenging transitions and flows",
        "Advanced breathing integration"
      ]
    },
    {
      title: "Yoga Therapy & Therapeutics",
      icon: "🏥",
      content: [
        "Principles of Yoga Therapy",
        "Assessment and treatment planning",
        "Working with injuries and limitations",
        "Chronic pain management through yoga",
        "Mental health applications",
        "Stress and trauma-informed approaches",
        "Special populations (seniors, pregnancy)",
        "Therapeutic use of props and modifications",
        "Ethics in therapeutic settings"
      ]
    },
    {
      title: "Advanced Anatomy & Physiology",
      icon: "🧠",
      content: [
        "Advanced musculoskeletal system",
        "Nervous system and yoga",
        "Endocrine system and hormonal balance",
        "Biomechanics of complex poses",
        "Fascial system and myofascial release",
        "Breathwork and respiratory system",
        "Advanced injury prevention",
        "Kinesiology applications",
        "Research in yoga and health"
      ]
    },
    {
      title: "Advanced Pranayama & Energy Work",
      icon: "⚡",
      content: [
        "Advanced pranayama techniques",
        "Chakra system and energy anatomy",
        "Bandhas and advanced energy locks",
        "Kundalini and energy awakening",
        "Advanced meditation practices",
        "Mantra and sound healing",
        "Mudras and hasta mudras",
        "Energy healing modalities",
        "Subtle body practices"
      ]
    },
    {
      title: "Sanskrit & Classical Texts",
      icon: "📚",
      content: [
        "Advanced Sanskrit pronunciation",
        "Yoga Sutras of Patanjali (complete study)",
        "Bhagavad Gita philosophical analysis",
        "Hatha Yoga Pradipika",
        "Upanishads and Vedantic texts",
        "Chanting and mantra practice",
        "Traditional yoga poetry",
        "Classical commentaries",
        "Sanskrit etymology in yoga"
      ]
    },
    {
      title: "Advanced Teaching Methodology",
      icon: "👨‍🏫",
      content: [
        "Advanced class sequencing",
        "Workshop and retreat design",
        "Mentoring and teacher development",
        "Advanced adjustment techniques",
        "Teaching therapeutic applications",
        "Business and marketing for teachers",
        "Online teaching methodologies",
        "Creating specialized programs",
        "Leadership in yoga communities"
      ]
    },
    {
      title: "Philosophy & Ethics",
      icon: "🕉️",
      content: [
        "Advanced Vedantic philosophy",
        "Ethics for advanced practitioners",
        "Teacher-student relationship dynamics",
        "Cultural appropriation awareness",
        "Traditional lineages and sampradayas",
        "Modern applications of ancient wisdom",
        "Social responsibility in yoga",
        "Philosophy in practice integration",
        "Dharma and life purpose exploration"
      ]
    },
    {
      title: "Specialized Practices",
      icon: "🌟",
      content: [
        "Yin Yoga and passive practices",
        "Restorative yoga techniques",
        "Yoga Nidra facilitation",
        "Advanced meditation instruction",
        "Kirtan and devotional practices",
        "Ayurvedic principles in yoga",
        "Seasonal and lunar practices",
        "Advanced shatkarma practices",
        "Integration of traditional and modern"
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
                Our advanced 300-hour curriculum provides comprehensive resources for experienced practitioners seeking mastery on all levels—physical, spiritual, emotional, and therapeutic
              </p>
              <p className="lead" style={{ color: '#6c757d', fontSize: '1.1rem' }}>
                Building upon 300-hour foundation with advanced practices, therapeutic applications, and deep philosophical study with master teachers
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
            <h3 className="text-center mb-4" style={{ color: '#4a4a8b' }}>35-Day Advanced Training Structure</h3>
            <div className="row g-4">
              <div className="col-md-6 col-lg-3">
                <div className="card border-0" style={{ backgroundColor: '#e3f2fd' }}>
                  <div className="card-body text-center p-4">
                    <h5 style={{ color: '#1976d2' }}>Week 1-2</h5>
                    <p style={{ color: '#424242', fontSize: '0.9rem' }}>
                      Advanced asana practice, therapeutic foundations, advanced anatomy and injury assessment
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card border-0" style={{ backgroundColor: '#f3e5f5' }}>
                  <div className="card-body text-center p-4">
                    <h5 style={{ color: '#7b1fa2' }}>Week 3-4</h5>
                    <p style={{ color: '#424242', fontSize: '0.9rem' }}>
                      Yoga therapy applications, advanced pranayama, Sanskrit studies and classical texts
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card border-0" style={{ backgroundColor: '#e8f5e8' }}>
                  <div className="card-body text-center p-4">
                    <h5 style={{ color: '#388e3c' }}>Week 4-5</h5>
                    <p style={{ color: '#424242', fontSize: '0.9rem' }}>
                      Advanced teaching methodology, workshop design, specialized populations and ethics
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card border-0" style={{ backgroundColor: '#fff3e0' }}>
                  <div className="card-body text-center p-4">
                    <h5 style={{ color: '#f57c00' }}>Final Week</h5>
                    <p style={{ color: '#424242', fontSize: '0.9rem' }}>
                      Integration practicum, final assessments, thesis presentation, graduation ceremony
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Prerequisites Section */}
            <div className="row mt-5">
              <div className="col-12">
                <div className="card border-0" style={{ backgroundColor: '#fff3e0' }}>
                  <div className="card-body p-4">
                    <h4 className="mb-3" style={{ color: '#f57c00' }}>Prerequisites for 300-Hour Training</h4>
                    <div className="row">
                      <div className="col-md-6">
                        <ul className="list-unstyled" style={{ color: '#424242' }}>
                          <li className="mb-2">• Completed 300-Hour Yoga Alliance certified training</li>
                          <li className="mb-2">• Minimum 1 year of consistent teaching experience</li>
                          <li className="mb-2">• Regular personal practice (minimum 6 months)</li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="list-unstyled" style={{ color: '#424242' }}>
                          <li className="mb-2">• Basic understanding of Sanskrit and yoga philosophy</li>
                          <li className="mb-2">• Commitment to daily practice during training</li>
                          <li className="mb-2">• Open mind for advanced spiritual practices</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Learning Outcomes Section */}
            <div className="row mt-5">
              <div className="col-12">
                <h3 className="text-center mb-4" style={{ color: '#4a4a8b' }}>Advanced Learning Outcomes</h3>
                <div className="row g-4">
                  <div className="col-lg-4">
                    <div className="card border-0 h-100" style={{ backgroundColor: '#f0f4ff' }}>
                      <div className="card-body p-4">
                        <h5 className="mb-3" style={{ color: '#4a4a8b' }}>🎯 Therapeutic Expertise</h5>
                        <p style={{ color: '#6c757d', fontSize: '0.95rem' }}>
                          Develop advanced skills in yoga therapy, injury prevention, and working with special populations. 
                          Learn to create therapeutic sequences and modify practices for individual needs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card border-0 h-100" style={{ backgroundColor: '#f8f0ff' }}>
                      <div className="card-body p-4">
                        <h5 className="mb-3" style={{ color: '#4a4a8b' }}>📖 Sanskrit Mastery</h5>
                        <p style={{ color: '#6c757d', fontSize: '0.95rem' }}>
                          Gain deep understanding of classical yoga texts, Sanskrit terminology, and traditional chanting. 
                          Study Patanjali's Yoga Sutras, Bhagavad Gita, and other foundational texts.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card border-0 h-100" style={{ backgroundColor: '#f0fff4' }}>
                      <div className="card-body p-4">
                        <h5 className="mb-3" style={{ color: '#4a4a8b' }}>🌟 Advanced Practice</h5>
                        <p style={{ color: '#6c757d', fontSize: '0.95rem' }}>
                          Master complex asanas, advanced pranayama, and energy work. Develop teaching skills for 
                          workshops, retreats, and specialized programs with confidence and authenticity.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certification Details */}
            <div className="row mt-5">
              <div className="col-12">
                <div className="card border-0" style={{ backgroundColor: '#e8f5e8' }}>
                  <div className="card-body p-4 text-center">
                    <h4 className="mb-3" style={{ color: '#388e3c' }}>🏆 Upon Completion</h4>
                    <div className="row justify-content-center">
                      <div className="col-lg-8">
                        <p className="mb-3" style={{ color: '#424242', fontSize: '1.1rem' }}>
                          Graduates receive a <strong>300-Hour Yoga Alliance RYT certification</strong>, enabling registration as an 
                          <strong>RYT 500</strong> (when combined with 300-hour training). This advanced certification opens doors to:
                        </p>
                        <div className="row">
                          <div className="col-md-6">
                            <ul className="list-unstyled text-start" style={{ color: '#424242' }}>
                              <li className="mb-2">• Teaching advanced workshops and retreats</li>
                              <li className="mb-2">• Yoga therapy and therapeutic applications</li>
                              <li className="mb-2">• Mentoring new yoga teachers</li>
                            </ul>
                          </div>
                          <div className="col-md-6">
                            <ul className="list-unstyled text-start" style={{ color: '#424242' }}>
                              <li className="mb-2">• Leading teacher training programs</li>
                              <li className="mb-2">• Specialized population instruction</li>
                              <li className="mb-2">• Advanced continuing education teaching</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
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