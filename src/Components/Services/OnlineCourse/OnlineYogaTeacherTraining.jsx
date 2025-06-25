import React, { useState, useEffect, useCallback } from 'react';
import './OnlineCourse.css';
import YogaTeachers from '../../Teachers/YogaTeachers';
import Ratings from '../../Ratings';
import { useNavigate } from 'react-router-dom';

const OnlineYogaTeacherTraining = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedItems, setAnimatedItems] = useState({});
  const [selectedModule, setSelectedModule] = useState(-1);
const navigate=useNavigate()
const contact=()=>{
    navigate('/contact')
}
  const courseData = {
    theme: {
      primary: '#2E3A87',
      accent: '#d4af37',
      buttonShadow: 'rgba(212, 175, 55, 0.4)'
    },
    hero: {
      subtitle: "ONLINE YOGA TEACHER TRAINING CERTIFICATION",
      title: "Become a Certified Yoga Instructor from Home",
      description: "Complete 200-Hour Yoga Alliance Certified Teacher Training with live virtual classes, mentorship, and lifetime support",
      ctaText: "Enroll Now - Limited Seats"
    },
    stats: [
      { number: "2000+", label: "Certified Teachers" },
      { number: "50+", label: "Countries Reached" },
      { number: "4.9/5", label: "Student Rating" },
      { number: "200hrs", label: "Training Hours" }
    ],
    pricing: {
      earlybird: {
        amount: "$1,497",
        originalPrice: "$2,497",
        savings: "Save $1,000",
        features: ["200-Hour YTT Certification", "Live weekly classes", "Personal mentor assigned", "Lifetime course access", "Teaching practice sessions"]
      },
      standard: {
        amount: "$1,997",
        originalPrice: "$2,497",
        savings: "Save $500",
        features: ["200-Hour YTT Certification", "Live weekly classes", "Group mentorship", "1-year course access", "Teaching practice sessions"]
      },
      inclusions: "Yoga Alliance Certified • Payment plans available • 30-day guarantee"
    },
    features: [
      {
        icon: "🎥",
        title: "Live Virtual Classes",
        subtitle: "Interactive sessions with real-time feedback and Q&A"
      },
      {
        icon: "👨‍🏫",
        title: "Expert Instructors",
        subtitle: "Learn from E-RYT 500 certified teachers with 15+ years experience"
      },
      {
        icon: "📱",
        title: "Mobile Learning Platform",
        subtitle: "Access content anywhere with our custom mobile app"
      },
      {
        icon: "🏆",
        title: "Yoga Alliance Certified",
        subtitle: "Globally recognized 200-Hour RYT certification"
      },
      {
        icon: "👥",
        title: "Small Class Sizes",
        subtitle: "Maximum 20 students per cohort for personalized attention"
      },
      {
        icon: "🔄",
        title: "Lifetime Support",
        subtitle: "Ongoing mentorship and community access after graduation"
      }
    ],
    curriculum: {
      title: "Comprehensive 200-Hour Curriculum",
      subtitle: "Yoga Alliance Standards Compliant",
      modules: [
        {
          title: "Yoga Philosophy & History",
          icon: "📚",
          duration: "25 hours",
          lessons: 8,
          description: "Ancient wisdom meets modern application",
          content: [
            "History of yoga from ancient to modern times",
            "Study of Yoga Sutras of Patanjali",
            "Eight limbs of yoga (Ashtanga)",
            "Vedantic philosophy and non-dualism",
            "Karma, dharma, and spiritual ethics",
            "Sanskrit terminology and chanting",
            "Meditation traditions and practices",
            "Integration of philosophy into daily life"
          ]
        },
        {
          title: "Asana Practice & Alignment",
          icon: "🧘‍♀️",
          duration: "50 hours",
          lessons: 16,
          description: "Master poses and teach with confidence",
          content: [
            "Fundamental standing poses and alignment",
            "Sun salutations and vinyasa flow",
            "Seated poses and forward folds",
            "Backbends and heart opening poses",
            "Twists and lateral poses",
            "Inversions and arm balances",
            "Restorative and yin yoga poses",
            "Props usage and modifications",
            "Injury prevention and safety",
            "Advanced pose variations"
          ]
        },
        {
          title: "Pranayama & Meditation",
          icon: "🌬️",
          duration: "20 hours",
          lessons: 6,
          description: "Breathwork and mindfulness techniques",
          content: [
            "Fundamentals of yogic breathing",
            "Classical pranayama techniques",
            "Breath awareness and regulation",
            "Meditation styles and methods",
            "Mindfulness and present moment awareness",
            "Guided meditation techniques",
            "Chakra balancing practices",
            "Sound healing and mantra"
          ]
        },
        {
          title: "Anatomy & Physiology",
          icon: "🫀",
          duration: "30 hours",
          lessons: 10,
          description: "Essential body knowledge for safe teaching",
          content: [
            "Musculoskeletal system basics",
            "Spine anatomy and movement",
            "Joint mechanics and flexibility",
            "Respiratory and nervous systems",
            "Common yoga injuries and prevention",
            "Body alignment principles",
            "Modifications for different bodies",
            "Energetic anatomy and chakras",
            "Physiological benefits of yoga",
            "Special populations considerations"
          ]
        },
        {
          title: "Teaching Methodology",
          icon: "🎯",
          duration: "25 hours",
          lessons: 8,
          description: "Develop your unique teaching style",
          content: [
            "Class planning and sequencing",
            "Verbal and physical adjustments",
            "Creating a safe learning environment",
            "Different learning styles adaptation",
            "Voice projection and clear instruction",
            "Demonstration techniques",
            "Building confidence as a teacher",
            "Handling challenging students/situations"
          ]
        },
        {
          title: "Practicum & Assessment",
          icon: "🎭",
          duration: "30 hours",
          lessons: 10,
          description: "Practice teaching with mentor feedback",
          content: [
            "Peer teaching practice sessions",
            "Video analysis and feedback",
            "Mock class teaching",
            "Student interaction skills",
            "Building class themes",
            "Music and ambiance creation",
            "Final teaching assessment",
            "Graduation ceremony preparation"
          ]
        },
        {
          title: "Business & Ethics",
          icon: "💼",
          duration: "20 hours",
          lessons: 6,
          description: "Professional development for yoga teachers",
          content: [
            "Yoga teacher ethics and boundaries",
            "Building your yoga business",
            "Marketing and social media",
            "Legal considerations and insurance",
            "Continuing education requirements",
            "Creating workshops and retreats",
            "Online teaching best practices",
            "Building authentic relationships"
          ]
        }
      ]
    },
    schedule: {
      title: "Flexible Learning Schedule",
      description: "Designed for working professionals with live sessions and self-paced study",
      format: [
        {
          type: "Live Sessions",
          frequency: "2x per week",
          duration: "2 hours each",
          time: "Evening & Weekend options"
        },
        {
          type: "Self-Study",
          frequency: "At your pace",
          duration: "3-5 hours weekly",
          time: "24/7 platform access"
        },
        {
          type: "Practice Teaching",
          frequency: "Weekly",
          duration: "1 hour",
          time: "Small group sessions"
        }
      ],
      duration: "6 months intensive or 12 months part-time"
    },
    faq: [
      {
        q: "Is this certification recognized internationally?",
        a: "Yes! Our 200-Hour YTT is Yoga Alliance certified and recognized worldwide. You'll be able to teach yoga anywhere upon completion."
      },
      {
        q: "What if I miss a live session?",
        a: "All live sessions are recorded and available within 24 hours. You'll also have access to make-up sessions and one-on-one support."
      },
      {
        q: "Do I need previous yoga experience?",
        a: "We recommend at least 6 months of regular yoga practice. However, our program is designed to meet you where you are and help you grow."
      },
      {
        q: "What equipment do I need?",
        a: "A yoga mat, blocks, strap, and bolster. We provide a recommended equipment list upon enrollment, and some props can be substituted with household items."
      },
      {
        q: "Is there a payment plan available?",
        a: "Yes! We offer flexible payment plans starting at $249/month. Contact us to discuss options that work for your budget."
      }
    ]
  };

  useEffect(() => {
    setIsVisible(true);
    
    const timeouts = [];
    courseData.features.forEach((_, index) => {
      timeouts.push(
        setTimeout(() => {
          setAnimatedItems(prev => ({ ...prev, [index]: true }));
        }, 300 + index * 200)
      );
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  const handleMouseEnter = useCallback((e) => {
    e.target.style.transform = 'translateY(-2px)';
    e.target.style.boxShadow = `0 12px 35px ${courseData.theme.buttonShadow}`;
  }, []);

  const handleMouseLeave = useCallback((e) => {
    e.target.style.transform = 'translateY(0)';
    e.target.style.boxShadow = `0 8px 25px ${courseData.theme.buttonShadow}`;
  }, []);

  return (
    <div className="oc-container">
      {/* Hero Section */}
      <section className="oc-hero-section">
        <div className="oc-hero-bg"></div>
        
        <div className="oc-hero-content">
          <div className="oc-hero-subtitle">
            {courseData.hero.subtitle}
          </div>
          
          <h1 className="oc-hero-title">
            {courseData.hero.title}
          </h1>
          
          <p className="oc-hero-description">
            {courseData.hero.description}
          </p>

          {/* Stats */}
          <div className="oc-stats-grid">
            {courseData.stats.map((stat, index) => (
              <div key={index} className="oc-stat-item">
                <span className="oc-stat-number">{stat.number}</span>
                <span className="oc-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          <button
            className="oc-hero-cta"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={contact}
          >
            {courseData.hero.ctaText}
          </button>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="oc-section oc-section-alt">
        <div className="oc-container-width">
          <div className="oc-section-header">
            <h2 className="oc-section-title">Choose Your Training Path</h2>
          </div>

          <div className="oc-pricing-grid">
            {/* Early Bird Pricing */}
            <div className="oc-pricing-card featured">
              <div className="oc-pricing-badge">MOST POPULAR</div>

              <h3 className="oc-pricing-title">Early Bird Special</h3>
              
              <div>
                <span className="oc-pricing-amount">{courseData.pricing.earlybird.amount}</span>
                <span className="oc-pricing-original">{courseData.pricing.earlybird.originalPrice}</span>
              </div>

              <p className="oc-pricing-savings">{courseData.pricing.earlybird.savings}</p>

              <ul className="oc-pricing-features">
                {courseData.pricing.earlybird.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Standard Pricing */}
            <div className="oc-pricing-card">
              <h3 className="oc-pricing-title">Standard Program</h3>
              
              <div>
                <span className="oc-pricing-amount">{courseData.pricing.standard.amount}</span>
                <span className="oc-pricing-original">{courseData.pricing.standard.originalPrice}</span>
              </div>

              <p className="oc-pricing-savings">{courseData.pricing.standard.savings}</p>

              <ul className="oc-pricing-features">
                {courseData.pricing.standard.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>

          <p className="oc-pricing-note">{courseData.pricing.inclusions}</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="oc-section">
        <div className="oc-container-width">
          <div className="oc-section-header">
            <h2 className="oc-section-title">Why Choose Our Online Training?</h2>
            <p className="oc-section-subtitle">
              Experience the perfect blend of traditional yoga wisdom and modern online learning technology
            </p>
          </div>

          <div className="oc-features-grid">
            {courseData.features.map((feature, index) => (
              <div
                key={index}
                className={`oc-feature-card ${animatedItems[index] ? 'visible' : ''}`}
              >
                <span className="oc-feature-icon">{feature.icon}</span>
                <h4 className="oc-feature-title">{feature.title}</h4>
                <p className="oc-feature-description">{feature.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="oc-section oc-section-alt">
        <div className="oc-container-width">
          <div className="oc-section-header">
            <h2 className="oc-section-title">{courseData.curriculum.title}</h2>
            <p className="oc-section-subtitle">{courseData.curriculum.subtitle}</p>
          </div>

          <div className="oc-curriculum-grid">
            {courseData.curriculum.modules.map((module, index) => (
              <div
                key={index}
                className={`oc-module-card ${selectedModule === index ? 'active' : ''}`}
                onClick={() => setSelectedModule(selectedModule === index ? -1 : index)}
              >
                <div className="oc-module-header">
                  <span className="oc-module-icon">{module.icon}</span>
                  <div className="oc-module-info">
                    <h4>{module.title}</h4>
                    <div className="oc-module-meta">
                      <span>📅 {module.duration}</span>
                      <span>📚 {module.lessons} lessons</span>
                    </div>
                  </div>
                </div>

                <p className="oc-module-description">{module.description}</p>

                {selectedModule === index && (
                  <div className="oc-module-content">
                    <h5>What You'll Learn:</h5>
                    <ul className="oc-module-list">
                      {module.content.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="oc-section">
        <div className="oc-container-width">
          <div className="oc-section-header">
            <h2 className="oc-section-title">{courseData.schedule.title}</h2>
            <p className="oc-section-subtitle">{courseData.schedule.description}</p>
          </div>

          <div className="oc-schedule-grid">
            {courseData.schedule.format.map((format, index) => (
              <div key={index} className="oc-schedule-card">
                <h4 className="oc-schedule-type">{format.type}</h4>
                <div className="oc-schedule-frequency">{format.frequency}</div>
                <div className="oc-schedule-duration">{format.duration}</div>
                <div className="oc-schedule-time">{format.time}</div>
              </div>
            ))}
          </div>

          <div className="oc-schedule-highlight">
            <h3>Program Duration</h3>
            <p>{courseData.schedule.duration}</p>
          </div>
        </div>
      </section>

      {/* Instructors Section - Using YogaTeachers Component */}
      <section className="oc-section oc-section-alt">
        <YogaTeachers />
      </section>

      {/* Testimonials Section - Using Ratings Component */}
      <section className="oc-section">
        <Ratings />
      </section>

      {/* FAQ Section */}
      <section className="oc-section oc-section-alt">
        <div className="oc-faq-container">
          <div className="oc-section-header">
            <h2 className="oc-section-title">Frequently Asked Questions</h2>
          </div>

          <div className="oc-faq-list">
            {courseData.faq.map((faq, index) => (
              <div key={index} className="oc-faq-item">
                <h4 className="oc-faq-question">{faq.q}</h4>
                <p className="oc-faq-answer">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="oc-final-cta">
        <div className="oc-final-content">
          <h2 className="oc-final-title">Ready to Begin Your Teaching Journey?</h2>
          
          <p className="oc-final-description">
            Join thousands of graduates who have transformed their lives and are now sharing the gift of yoga with others around the world.
          </p>

          <div className="oc-final-offer">
            <h3>Early Bird Offer Ends Soon!</h3>
            <p>Save $1,000 on your teacher training</p>
            <div className="oc-final-urgency">⏰ Only 12 spots remaining in our next cohort</div>
          </div>

          <div className="oc-final-buttons">
            <button
              className="oc-btn-primary"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={contact}
            >
              Enroll Now - $1,497
            </button>
            
            <button className="oc-btn-secondary"
             onClick={contact}
             >
              Learn More
            </button>
          </div>

          <div className="oc-final-guarantee">
            🔒 Secure checkout • 💰 30-day money-back guarantee • 📱 Instant access
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnlineYogaTeacherTraining;