import React from 'react';

const YogaCoursesPage = ({ heading = "7-Day Adventure & Yoga Retreat", subheading = "Complete Experience Package" }) => {
  const activities = [
    {
      title: "Daily Yoga Sessions",
      icon: "🧘‍♀️",
      content: [
        "Hatha Yoga for strength and flexibility",
        "Ashtanga Yoga for dynamic flow",
        "Nidra Yoga for deep relaxation",
        "Vinyasa Yoga connecting breath and movement",
        "Vipassana meditation practices",
        "Morning meditation sessions",
        "Evening relaxation techniques",
        "Yoga with stunning natural views",
        "Sunrise meditation in nature"
      ]
    },
    {
      title: "Adventure Activities",
      icon: "🏞️",
      content: [
        "Jungle trekking through lush landscapes",
        "White-water rafting on Ayung River",
        "Jungle safari wildlife experiences",
        "Monkey Forest sanctuary visits",
        "Rice field walks through terraces",
        "Waterfall excursions and swimming",
        "Bali swing experiences",
        "Beach walks and coastal exploration",
        "Temple visits and spiritual tours"
      ]
    },
    {
      title: "Cultural Experiences",
      icon: "🎭",
      content: [
        "Traditional Kecak dance performance",
        "Tirta Empul holy water temple",
        "Goa Gajah elephant cave exploration",
        "Ubud Palace and royal heritage",
        "Red walk through Ubud center",
        "Local market visits and shopping",
        "Balinese cooking demonstrations",
        "Traditional craft workshops",
        "Sacred ceremony participation"
      ]
    },
    {
      title: "Wellness & Relaxation",
      icon: "💆‍♀️",
      content: [
        "Daily meditation and mindfulness",
        "Relaxation and breathing techniques",
        "Self-study and reflection time",
        "Spa treatments and massages",
        "Pool relaxation sessions",
        "Nature walks and grounding",
        "Sound healing experiences",
        "Aromatherapy sessions"
      ]
    },
    {
      title: "Accommodation & Meals",
      icon: "🏨",
      content: [
        "6 nights luxury accommodation",
        "Private rooms with A/C and pool access",
        "Daily healthy breakfast",
        "Nutritious organic lunch",
        "Wholesome dinner meals",
        "Vegetarian and vegan options",
        "Gluten-free meal availability",
        "Fresh fruit and herbal teas",
        "Sattvic yogic nutrition principles"
      ]
    },
    {
      title: "Logistics & Support",
      icon: "✈️",
      content: [
        "Free airport pickup from DPS",
        "Daily excursion transportation",
        "Professional English-speaking guides",
        "Yoga kit and materials provided",
        "Certificate of completion",
        "24/7 support and assistance",
        "Travel insurance recommendations",
        "Local SIM card assistance"
      ]
    },
    {
      title: "Teachers & Guidance",
      icon: "👨‍🏫",
      content: [
        "Yogi Ranjan - 10+ years experience",
        "Ishani Ghate - MSc Yoga Therapy",
        "Expert local adventure guides",
        "Cultural experience facilitators",
        "Personalized attention and care",
        "Safety-focused instruction",
        "Modification for all levels",
        "Individual progress support"
      ]
    },
    {
      title: "Special Features",
      icon: "⭐",
      content: [
        "Small group intimate experience",
        "Beginner to advanced welcome",
        "Instagram-worthy locations",
        "Photography opportunities",
        "Souvenir shopping assistance",
        "Local friendship connections",
        "Eco-friendly practices",
        "Sustainable tourism support",
        "Lifetime memories creation"
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
                Combine the thrill of adventure with the serenity of yoga in Bali's most spiritual destination
              </p>
              <p className="lead" style={{ color: '#6c757d', fontSize: '1.1rem' }}>
                Explore lush landscapes, sacred temples, and experience transformative yoga sessions
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

        {/* Daily Breakdown Section */}
        <div className="row mt-5">
          <div className="col-12">
            <h3 className="text-center mb-4" style={{ color: '#4a4a8b' }}>7-Day Journey Highlights</h3>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card border-0" style={{ backgroundColor: '#e3f2fd' }}>
                  <div className="card-body text-center p-4">
                    <h5 style={{ color: '#1976d2' }}>Days 1-2</h5>
                    <p style={{ color: '#424242', fontSize: '0.9rem' }}>
                      Arrival, welcome yoga session, Monkey Forest visit, rice field walks, and cultural orientation
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0" style={{ backgroundColor: '#f3e5f5' }}>
                  <div className="card-body text-center p-4">
                    <h5 style={{ color: '#7b1fa2' }}>Days 3-5</h5>
                    <p style={{ color: '#424242', fontSize: '0.9rem' }}>
                      Adventure activities: white-water rafting, jungle trekking, waterfall visits, temple tours
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0" style={{ backgroundColor: '#e8f5e8' }}>
                  <div className="card-body text-center p-4">
                    <h5 style={{ color: '#388e3c' }}>Days 6-7</h5>
                    <p style={{ color: '#424242', fontSize: '0.9rem' }}>
                      Kecak dance performance, final yoga sessions, reflection time, and departure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing and Booking Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card border-0" style={{ backgroundColor: '#fff3e0' }}>
              <div className="card-body text-center p-5">
                <h3 style={{ color: '#f57c00' }}>All-Inclusive Package: $1099 USD</h3>
                <p style={{ color: '#424242', fontSize: '1.1rem', margin: '20px 0' }}>
                  Everything included: accommodation, meals, activities, yoga sessions, airport transfer, and more!
                </p>
                <div className="d-flex justify-content-center flex-wrap gap-4 mb-4">
                  <span style={{ color: '#666' }}>✓ 6 nights accommodation</span>
                  <span style={{ color: '#666' }}>✓ All meals & activities</span>
                
                  <span style={{ color: '#666' }}>✓ Yoga kit included</span>
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