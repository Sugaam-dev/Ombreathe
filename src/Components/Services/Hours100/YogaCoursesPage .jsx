import React from 'react';

const YogaCoursesPage = ({ heading = "100-hour Foundation Yoga Teacher Training", subheading = "Essential Foundation Curriculum" }) => {
  const courses = [
    {
      title: "Basic Asana Practice",
      icon: "🧘‍♀️",
      content: [
        "Fundamental standing postures",
        "Basic seated positions and forward folds",
        "Gentle backbends and twists",
        "Introduction to Sun Salutations",
        "Basic balancing poses",
        "Simple inversions (legs up wall)",
        "Relaxation poses and savasana",
        "Proper alignment principles",
        "Safe entry and exit from poses"
      ]
    },
    {
      title: "Basic Pranayama & Breathing",
      icon: "🌬️",
      content: [
        "Introduction to yogic breathing",
        "Diaphragmatic breathing technique",
        "Three-part breath (Dirga Pranayama)",
        "Basic Ujjayi breathing",
        "Simple breath awareness practices",
        "Breath counting techniques",
        "Benefits of conscious breathing",
        "Breathing for relaxation",
        "Integration with movement"
      ]
    },
    {
      title: "Yoga Philosophy Introduction",
      icon: "📚",
      content: [
        "What is Yoga? - Definition and purpose",
        "Brief history of yoga",
        "Introduction to yoga lifestyle",
        "Basic ethical principles (Yamas & Niyamas)",
        "Understanding yoga beyond physical practice",
        "Meditation and mindfulness basics",
        "Yoga and daily life integration",
        "Respect for tradition and teachers",
        "Personal practice development"
      ]
    },
    {
      title: "Basic Teaching Skills",
      icon: "👩‍🏫",
      content: [
        "How to demonstrate basic poses",
        "Clear and simple verbal instructions",
        "Creating a safe practice environment",
        "Basic class structure and timing",
        "Observing students safely",
        "Offering simple modifications",
        "Voice projection and communication",
        "Building confidence as a teacher",
        "Student-teacher boundaries"
      ]
    },
    {
      title: "Essential Anatomy",
      icon: "🦴",
      content: [
        "Basic body awareness",
        "Major muscle groups and bones",
        "Spine health and safety",
        "Joint mobility and protection",
        "Common areas of tension",
        "Breathing muscles and mechanics",
        "Warning signs and contraindications",
        "Injury prevention basics",
        "Body alignment fundamentals"
      ]
    },
    {
      title: "Meditation & Relaxation",
      icon: "🧘‍♀️",
      content: [
        "Introduction to meditation",
        "Basic seated meditation postures",
        "Guided relaxation techniques",
        "Body scan meditation",
        "Mindfulness practices",
        "Stress reduction through yoga",
        "Creating personal meditation practice",
        "Yoga Nidra introduction",
        "Daily mindfulness integration"
      ]
    },
    {
      title: "Class Sequencing Basics",
      icon: "📝",
      content: [
        "Simple warm-up sequences",
        "Basic class structure",
        "Cool-down and relaxation",
        "Beginner-friendly flows",
        "Modification and adaptation",
        "Time management in classes",
        "Creating balanced practice",
        "Student safety priorities",
        "Building confidence in sequencing"
      ]
    },
    {
      title: "Personal Practice Development",
      icon: "🌱",
      content: [
        "Establishing daily practice routine",
        "Home practice guidelines",
        "Self-study and reflection",
        "Setting realistic goals",
        "Tracking progress safely",
        "Listening to your body",
        "Building consistency over intensity",
        "Journaling and self-reflection",
        "Connecting with yoga community"
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
                Our 100-hour foundation curriculum provides essential resources for beginners seeking to establish a solid foundation in yoga practice and basic teaching skills
              </p>
              <p className="lead" style={{ color: '#6c757d', fontSize: '1.1rem' }}>
                Perfect introduction to yoga fundamentals with gentle, supportive guidance from experienced teachers
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

        {/* Training Structure Section */}
        <div className="row mt-5">
          <div className="col-12">
            <h3 className="text-center mb-4" style={{ color: '#4a4a8b' }}>12-Day Foundation Training Structure</h3>
            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <div className="card border-0" style={{ backgroundColor: '#e3f2fd' }}>
                  <div className="card-body text-center p-4">
                    <h5 style={{ color: '#1976d2' }}>Days 1-4</h5>
                    <p style={{ color: '#424242', fontSize: '0.9rem' }}>
                      Foundation of yoga practice, basic postures, breathing techniques, and introduction to philosophy
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card border-0" style={{ backgroundColor: '#f3e5f5' }}>
                  <div className="card-body text-center p-4">
                    <h5 style={{ color: '#7b1fa2' }}>Days 5-8</h5>
                    <p style={{ color: '#424242', fontSize: '0.9rem' }}>
                      Basic teaching skills, gentle flows, meditation practices, and personal practice development
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card border-0" style={{ backgroundColor: '#e8f5e8' }}>
                  <div className="card-body text-center p-4">
                    <h5 style={{ color: '#388e3c' }}>Days 9-12</h5>
                    <p style={{ color: '#424242', fontSize: '0.9rem' }}>
                      Class sequencing, practice teaching, integration, assessment, and graduation ceremony
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Who This Course Is For */}
            <div className="row mt-5">
              <div className="col-12">
                <div className="card border-0" style={{ backgroundColor: '#fff3e0' }}>
                  <div className="card-body p-4">
                    <h4 className="mb-3" style={{ color: '#f57c00' }}>Who This Foundation Training Is For</h4>
                    <div className="row">
                      <div className="col-md-6">
                        <ul className="list-unstyled" style={{ color: '#424242' }}>
                          <li className="mb-2">• Complete beginners to yoga practice</li>
                          <li className="mb-2">• Those wanting to deepen personal practice</li>
                          <li className="mb-2">• People interested in basic teaching skills</li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="list-unstyled" style={{ color: '#424242' }}>
                          <li className="mb-2">• Students preparing for 200-hour training</li>
                          <li className="mb-2">• Those seeking stress relief and wellness</li>
                          <li className="mb-2">• Anyone curious about yoga philosophy and lifestyle</li>
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
                <h3 className="text-center mb-4" style={{ color: '#4a4a8b' }}>Foundation Learning Outcomes</h3>
                <div className="row g-4">
                  <div className="col-lg-4">
                    <div className="card border-0 h-100" style={{ backgroundColor: '#f0f4ff' }}>
                      <div className="card-body p-4">
                        <h5 className="mb-3" style={{ color: '#4a4a8b' }}>🌱 Personal Practice</h5>
                        <p style={{ color: '#6c757d', fontSize: '0.95rem' }}>
                          Establish a safe, sustainable personal yoga practice with proper alignment, breathing techniques, 
                          and basic meditation skills for daily well-being.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card border-0 h-100" style={{ backgroundColor: '#f8f0ff' }}>
                      <div className="card-body p-4">
                        <h5 className="mb-3" style={{ color: '#4a4a8b' }}>🎯 Basic Teaching Skills</h5>
                        <p style={{ color: '#6c757d', fontSize: '0.95rem' }}>
                          Learn fundamental teaching skills including clear instruction, basic sequencing, 
                          and creating a safe environment for beginner students.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card border-0 h-100" style={{ backgroundColor: '#f0fff4' }}>
                      <div className="card-body p-4">
                        <h5 className="mb-3" style={{ color: '#4a4a8b' }}>📖 Yoga Foundation</h5>
                        <p style={{ color: '#6c757d', fontSize: '0.95rem' }}>
                          Understand basic yoga philosophy, ethics, and lifestyle principles that support 
                          both personal practice and teaching with authenticity and respect.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Steps Section */}
            <div className="row mt-5">
              <div className="col-12">
                <div className="card border-0" style={{ backgroundColor: '#e8f5e8' }}>
                  <div className="card-body p-4 text-center">
                    <h4 className="mb-3" style={{ color: '#388e3c' }}>🎓 Upon Completion & Next Steps</h4>
                    <div className="row justify-content-center">
                      <div className="col-lg-8">
                        <p className="mb-3" style={{ color: '#424242', fontSize: '1.1rem' }}>
                          Graduates receive a <strong>100-Hour Foundation Certificate</strong> that serves as an excellent 
                          foundation for continuing your yoga education. This certificate opens doors to:
                        </p>
                        <div className="row">
                          <div className="col-md-6">
                            <ul className="list-unstyled text-start" style={{ color: '#424242' }}>
                              <li className="mb-2">• Continuing to 200-hour teacher training</li>
                              <li className="mb-2">• Teaching basic yoga to friends and family</li>
                              <li className="mb-2">• Leading simple meditation sessions</li>
                            </ul>
                          </div>
                          <div className="col-md-6">
                            <ul className="list-unstyled text-start" style={{ color: '#424242' }}>
                              <li className="mb-2">• Assisting experienced teachers</li>
                              <li className="mb-2">• Deepening personal practice with confidence</li>
                              <li className="mb-2">• Building a strong foundation for advanced study</li>
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