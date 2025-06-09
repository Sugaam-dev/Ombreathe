import React from 'react';

const YogaCoursesPage = ({ heading = "7-Day Multi-Style & Meditation Retreat", subheading = "Silent Serenity Program" }) => {
  const activities = [
    {
      title: "Silent Meditation",
      icon: "🧘‍♀️",
      content: [
        "Guided silent meditations",
        "Vipassana meditation practices",
        "Mindfulness and self-awareness",
        "Daily reflection sessions",
        "Walking meditations in nature",
        "Group silence periods",
        "Candlelight meditation",
        "Inner peace cultivation",
        "Self-exploration techniques"
      ]
    },
    {
      title: "Multi-Style Yoga",
      icon: "🕉️",
      content: [
        "Ashtanga Yoga for strength",
        "Hatha Yoga for balance",
        "Nidra Yoga for deep relaxation",
        "Vipassana Yoga for mindfulness",
        "Vinyasa Yoga for flow",
        "Morning yoga sessions",
        "Evening yoga practice",
        "Yoga philosophy integration",
        "Mindful movement practices"
      ]
    },
    {
      title: "Healing Sessions",
      icon: "🎵",
      content: [
        "Sound healing therapy",
        "Inner child healing",
        "Tibetan singing bowls",
        "Chakra balancing sounds",
        "Therapeutic vibrations",
        "Emotional release work",
        "Energy healing practices",
        "Restorative sound baths",
        "Healing frequency experiences"
      ]
    },
    {
      title: "Silent Activities",
      icon: "🌅",
      content: [
        "Silent beach walks",
        "Nature immersion in silence",
        "Silent meals practice",
        "Mindful eating meditation",
        "Silent group activities",
        "Contemplative walks",
        "Silent journaling time",
        "Peaceful observation",
        "Quiet reflection periods"
      ]
    },
    {
      title: "Cultural Experiences",
      icon: "🎭",
      content: [
        "Traditional Kecak dance performance",
        "Balinese spiritual ceremonies",
        "Temple visits and prayers",
        "Local cultural immersion",
        "Sacred site explorations",
        "Traditional healing rituals",
        "Spiritual storytelling",
        "Cultural wisdom sharing",
        "Ancient practice learning"
      ]
    },
    {
      title: "Accommodation & Meals",
      icon: "🏨",
      content: [
        "6 nights modern Balinese accommodation",
        "Air-conditioned rooms with pool access",
        "3 daily sattvic meals",
        "Plant-based whole foods",
        "Organic locally sourced ingredients",
        "Vegan and vegetarian options",
        "Gluten-free meal availability",
        "Mindful eating practices",
        "Nutritionally balanced meals"
      ]
    },
    {
      title: "Teachers & Guidance",
      icon: "👨‍🏫",
      content: [
        "Yogi Ranjan - 10+ years experience",
        "Ishani Ghate - MSc Yoga Therapy",
        "Expert meditation guidance",
        "Personalized attention",
        "Silent retreat facilitation",
        "Spiritual mentorship",
        "Practice modification support",
        "Individual progress tracking",
        "Compassionate guidance"
      ]
    },
    {
      title: "Wellness Support",
      icon: "💆‍♀️",
      content: [
        "Daily relaxation techniques",
        "Stress release practices",
        "Breathing technique training",
        "Mental clarity enhancement",
        "Emotional well-being support",
        "Detoxification support",
        "Energy level boosting",
        "Sleep quality improvement",
        "Overall vitality enhancement"
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
                Embrace the power of silence to cultivate inner peace through guided meditation and multi-style yoga
              </p>
              <p className="lead" style={{ color: '#6c757d', fontSize: '1.1rem' }}>
                Experience transformative practices in the magical spiritual energy of Bali with expert guidance
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Activities Section */}
      <div className="container">
        <div className="row g-4">
          {activities.map((activity, index) => (
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
                      {activity.icon}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h4 className="card-title text-center mb-3 pb-2" style={{
                    color: '#6f42c1',
                    fontWeight: 'bold',
                    borderBottom: '2px solid #6f42c1'
                  }}>
                    {activity.title}
                  </h4>
                  
                  {/* Content List */}
                  <ul className="list-unstyled" style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
                    {activity.content.map((item, itemIndex) => (
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

        {/* Daily Experience Breakdown */}
        <div className="row mt-5">
          <div className="col-12">
            <h3 className="text-center mb-4" style={{ color: '#4a4a8b' }}>7-Day Silent Journey Experience</h3>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card border-0" style={{ backgroundColor: '#e3f2fd' }}>
                  <div className="card-body text-center p-4">
                    <h5 style={{ color: '#1976d2' }}>Days 1-2</h5>
                    <p style={{ color: '#424242', fontSize: '0.9rem' }}>
                      Arrival, silent introduction, guided meditation basics, and beginning of silence practice
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0" style={{ backgroundColor: '#f3e5f5' }}>
                  <div className="card-body text-center p-4">
                    <h5 style={{ color: '#7b1fa2' }}>Days 3-5</h5>
                    <p style={{ color: '#424242', fontSize: '0.9rem' }}>
                      Deep silent meditation, multi-style yoga, sound healing, and silent nature immersion
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0" style={{ backgroundColor: '#e8f5e8' }}>
                  <div className="card-body text-center p-4">
                    <h5 style={{ color: '#388e3c' }}>Days 6-7</h5>
                    <p style={{ color: '#424242', fontSize: '0.9rem' }}>
                      Kecak dance experience, integration practices, closing ceremony, and gentle transition back
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing and Reviews Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card border-0" style={{ backgroundColor: '#fff3e0' }}>
              <div className="card-body text-center p-5">
              
                <p style={{ color: '#424242', fontSize: '1.1rem', margin: '20px 0' }}>
                  All-inclusive silent meditation retreat with accommodation, meals, sessions, and healing practices!
                </p>
                <div className="d-flex justify-content-center flex-wrap gap-4 mb-4">
                  <span style={{ color: '#666' }}>🥗 Food rating: 4.75/5</span>
                  <span style={{ color: '#666' }}>👩‍🏫 Teachers: 4.5/5</span>
                  <span style={{ color: '#666' }}>📍 Perfect location in Ubud</span>
                
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