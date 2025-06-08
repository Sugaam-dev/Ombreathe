// import React from 'react';

// const YogaCoursesPage = ({ heading = "200-hour Yoga Teacher Training", subheading = "Studying program" }) => {
//   const courses = [
//     {
//       title: "Asana",
//       icon: "🧘‍♀️",
//       content: [
//         "Variations in standing and seated postures",
//         "Deep spinal bends and rotations",
//         "Inversions",
//         "Balancing",
//         "Standing",
//         "Seated",
//         "Prone",
//         "Supine",
//         "Hatha, Vinyasa, and Ashtanga ½ Primary Series",
//         "English and Sanskrit names"
//       ]
//     },
//     {
//       title: "Teaching Methodology",
//       icon: "👩‍🏫",
//       content: [
//         "How to design and sequence a class",
//         "Adjustment Techniques",
//         "Assisting and Hands on",
//         "Verbal cues to support students",
//         "Correct Alignment and Potential Risks of Yoga Postures",
//         "Teaching Practice (Adhyapanam)",
//         "Pose families",
//         "Practicum with Feedback"
//       ]
//     },
//     {
//       title: "Yoga Anatomy",
//       icon: "🏃‍♂️",
//       content: [
//         "Structure of the body through bones and muscle",
//         "How to use anatomy to support poses",
//         "Yoga's effects on the body systems",
//         "Contraindications",
//         "Adjusting for injury"
//       ]
//     },
//     {
//       title: "Pranayama",
//       icon: "🧘‍♀️",
//       content: [
//         "Adding Pranayama into a class",
//         "Yogic breathing (dirga pranayama)",
//         "Nadi Shodhana",
//         "Kapalabhati",
//         "Ujjayi",
//         "Same Vritti",
//         "Anulom Vilom",
//         "Bhastrika",
//         "Brahmari",
//         "Surya Bheda",
//         "Chandra Bheda",
//         "Sheetali",
//         "Sheetkari",
//         "Benefits and Contraindications of pranayama"
//       ]
//     },
//     {
//       title: "Meditation",
//       icon: "🧘‍♀️",
//       content: [
//         "Introduction to Meditation",
//         "Body-Scan Meditation",
//         "Mindfulness",
//         "Breathing techniques",
//         "Meditation Philosophy",
//         "Sadhu Nails Board"
//       ]
//     },
//     {
//       title: "Philosophy",
//       icon: "📚",
//       content: [
//         "Sanatana Dharma",
//         "Mystical Origins of Yoga",
//         "Vedas",
//         "Upanishads",
//         "Bhagavad Gita",
//         "Patanjali's Yoga Sutras",
//         "Chakras and Energy Systems"
//       ]
//     },
//     {
//       title: "Shatkarma",
//       icon: "🕯️",
//       content: [
//         "Jala Neti",
//         "Kapal Bhati",
//         "Trataka",
//         "Agni Sar"
//       ]
//     },
//     {
//       title: "Additional topic",
//       icon: "📋",
//       content: [
//         "Yoga Philosophy (Yoga Darshana)",
//         "Yoga Nidra (Psychic Sleep)",
//         "Yoga Bandhas (Energy Lock)",
//         "Mudras (Yoga Gestures)",
//         "Recitation of Sacred Sound (Mantra Chanting)",
//         "English and Sanskrit names"
//       ]
//     }
//   ];

//   return (
//     <div className="container-fluid py-5" style={{ minHeight: '100vh' }}>
//       {/* Header Section */}
//       <div className="container mb-5">
//         <div className="text-center">
//           <h1 className="display-4 fw-bold mb-3" style={{ color: '#4a4a8b' }}>
//             {heading}
//           </h1>
//           <h2 className="h3 mb-4" style={{ color: '#4a4a8b' }}>
//             {subheading}
//           </h2>
//           <div className="row justify-content-center">
//             <div className="col-lg-10">
//               <p className="lead mb-2" style={{ color: '#6c757d', fontSize: '1.1rem' }}>
//                 Multi-style YTT covers all key aspects of the ancient practice and philosophy of yoga
//               </p>
//               <p className="lead" style={{ color: '#6c757d', fontSize: '1.1rem' }}>
//                 Learn from globally recognized gurus with decennial teaching experience
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Courses Section */}
//       <div className="container">
//         <div className="row g-4">
//           {courses.map((course, index) => (
//             <div key={index} className="col-lg-3 col-md-6 col-sm-12">
//               <div className="card h-100 shadow-sm" style={{ 
//                 backgroundColor: '#f8d7da', 
//                 border: 'none',
//                 borderRadius: '15px'
//               }}>
//                 <div className="card-body p-4">
//                   {/* Icon Circle */}
//                   <div className="text-center mb-3">
//                     <div 
//                       className="rounded-circle d-inline-flex align-items-center justify-content-center"
//                       style={{
//                         width: '80px',
//                         height: '80px',
//                         backgroundColor: 'white',
//                         fontSize: '2rem'
//                       }}
//                     >
//                       {course.icon}
//                     </div>
//                   </div>
                  
//                   {/* Title */}
//                   <h4 className="card-title text-center mb-3 pb-2" style={{
//                     color: '#6f42c1',
//                     fontWeight: 'bold',
//                     borderBottom: '2px solid #6f42c1'
//                   }}>
//                     {course.title}
//                   </h4>
                  
//                   {/* Content List */}
//                   <ul className="list-unstyled" style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
//                     {course.content.map((item, itemIndex) => (
//                       <li key={itemIndex} className="mb-1">
//                         <span style={{ color: '#6f42c1', marginRight: '8px' }}>•</span>
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default YogaCoursesPage;

import React from 'react';

const YogaCoursesPage = ({ heading = "200-hour Yoga Teacher Training", subheading = "Comprehensive Curriculum" }) => {
  const courses = [
    {
      title: "Ashtanga Vinyasa Yoga Flow",
      icon: "🧘‍♀️",
      content: [
        "Surya Namaskar (Sun Salutations)",
        "Standing Postures: Trikonasana, Parsvakonasana",
        "Seated Postures: Paschimottanasana, Marichyasana",
        "Backbends: Urdhva Dhanurasana, Setu Bandhasana",
        "Inversions: Sirsasana, Sarvangasana",
        "Arm Balances: Bhujapidasana, Kukkutasana",
        "Twists and Hip Openers",
        "Primary Series Flow Sequences",
        "Vinyasa Transitions and Breathing"
      ]
    },
    {
      title: "Pranayama (Breathing Techniques)",
      icon: "🌬️",
      content: [
        "Definition of Prana (vital force energy)",
        "Nadis (energy channels) and Chakras",
        "Ujjayi, Bhastrika, Kapalbhati",
        "Nadi Shodhana (Alternate Nostril)",
        "Surya and Chandra Bhedi",
        "Bhramari (Bee Breath)",
        "Sheetali and Sheetkari",
        "Diaphragmatic and Yogic Breathing",
        "Benefits and Contraindications"
      ]
    },
    {
      title: "Yoga Philosophy & History",
      icon: "📚",
      content: [
        "Introduction to Yoga",
        "History and Evolution of Yoga",
        "Patanjali's Yoga Sutras",
        "The Eight Limbs of Yoga",
        "Vedic Philosophies and Vedanta",
        "Sanskrit Language and Chanting",
        "Yoga Philosophy and Lifestyle",
        "Chakras and Energy Systems",
        "Traditional vs Modern Practice"
      ]
    },
    {
      title: "Teaching Methodology",
      icon: "👩‍🏫",
      content: [
        "Art of Sequencing and Planning Classes",
        "Teaching Techniques for Asanas",
        "Adjustments and Modifications",
        "Verbal Cues and Instruction",
        "Teaching Methodologies for Different Styles",
        "Class Management and Safety",
        "Student-Teacher Relationship",
        "Practicum with Feedback",
        "Business of Yoga"
      ]
    },
    {
      title: "Anatomy & Physiology",
      icon: "🏃‍♂️",
      content: [
        "Anatomy and Physiology of Yoga Practice",
        "Structure through Bones and Muscles",
        "Nervous System and Yoga",
        "Effects on Body Systems",
        "Contraindications and Injury Prevention",
        "Alignment Principles",
        "Understanding Physical Limitations",
        "Therapeutic Applications"
      ]
    },
    {
      title: "Meditation & Yoga Nidra",
      icon: "🧘‍♀️",
      content: [
        "Introduction to Meditation",
        "Body-Scan Meditation",
        "Mindfulness Practices",
        "Yoga Nidra (Psychic Sleep)",
        "Relaxation Techniques",
        "Concentration Methods",
        "Mantra and Chanting",
        "Self-Reflection Practices"
      ]
    },
    {
      title: "Shatkarma (Cleansing)",
      icon: "🕯️",
      content: [
        "Yoga Cleansing Practices",
        "Jala Neti (Nasal Cleansing)",
        "Kapal Bhati",
        "Trataka (Candle Gazing)",
        "Agni Sar",
        "Benefits and Precautions",
        "Traditional Methods"
      ]
    },
    {
      title: "Bandhas & Mudras",
      icon: "🤲",
      content: [
        "Yoga Bandhas (Energy Locks)",
        "Mula Bandha, Uddiyana Bandha",
        "Jalandhara Bandha",
        "Mudras (Yoga Gestures)",
        "Hand and Body Mudras",
        "Energy Work and Applications",
        "Integration in Practice"
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
            <h3 className="text-center mb-4" style={{ color: '#4a4a8b' }}>25-Day Training Structure</h3>
            <div className="row g-4">
              <div className="col-md-6 col-lg-3">
                <div className="card border-0" style={{ backgroundColor: '#e3f2fd' }}>
                  <div className="card-body text-center p-4">
                    <h5 style={{ color: '#1976d2' }}>Week 1</h5>
                    <p style={{ color: '#424242', fontSize: '0.9rem' }}>
                      Foundation of yoga practice and philosophy, Introduction to Hatha Yoga, Pranayama basics
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card border-0" style={{ backgroundColor: '#f3e5f5' }}>
                  <div className="card-body text-center p-4">
                    <h5 style={{ color: '#7b1fa2' }}>Week 2</h5>
                    <p style={{ color: '#424242', fontSize: '0.9rem' }}>
                      Ashtanga Yoga, Teaching methodology, Alignment and adjustment techniques
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card border-0" style={{ backgroundColor: '#e8f5e8' }}>
                  <div className="card-body text-center p-4">
                    <h5 style={{ color: '#388e3c' }}>Week 3</h5>
                    <p style={{ color: '#424242', fontSize: '0.9rem' }}>
                      Advanced asana, Advanced pranayama, Yoga Nidra, Sanskrit chanting
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card border-0" style={{ backgroundColor: '#fff3e0' }}>
                  <div className="card-body text-center p-4">
                    <h5 style={{ color: '#f57c00' }}>Week 4</h5>
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