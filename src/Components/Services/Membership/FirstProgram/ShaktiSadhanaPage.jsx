// import React, { useState, useEffect, useCallback } from 'react';

// const ShaktiSadhanaMembership = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [animatedItems, setAnimatedItems] = useState({});
  
//   useEffect(() => {
//     setIsVisible(true);
    
//     // Stagger animations for feature items
//     const timeouts = [];
//     [0, 1, 2, 3, 4].forEach((index) => {
//       timeouts.push(
//         setTimeout(() => {
//           setAnimatedItems(prev => ({ ...prev, [index]: true }));
//         }, 300 + index * 200)
//       );
//     });

//     return () => timeouts.forEach(clearTimeout);
//   }, []);

//   // Memoized button hover handlers
//   const handleMouseEnter = useCallback((e) => {
//     e.target.style.transform = 'translateY(-2px)';
//     e.target.style.boxShadow = '0 12px 35px rgba(46, 58, 135, 0.4)';
//   }, []);

//   const handleMouseLeave = useCallback((e) => {
//     e.target.style.transform = 'translateY(0)';
//     e.target.style.boxShadow = '0 8px 25px rgba(46, 58, 135, 0.3)';
//   }, []);

//   const features = [
//     {
//       icon: (
//         <div className="ss-feature-icon">
//           <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#d4af37" stroke="#d4af37" strokeWidth="2"/>
//           </svg>
//         </div>
//       ),
//       title: "Visit 12 Sacred Shakti/Siddha Peeths",
//       subtitle: "During any one of the four Navratris"
//     },
//     {
//       icon: (
//         <div className="ss-feature-icon">
//           <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <circle cx="12" cy="12" r="3" stroke="#d4af37" strokeWidth="2"/>
//             <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" stroke="#d4af37" strokeWidth="2"/>
//           </svg>
//         </div>
//       ),
//       title: "Practice Goddess postures and",
//       subtitle: "Devi Sadhanas (Navarna Mantra, Sri Lalita Sahasranama)"
//     },
//     {
//       icon: (
//         <div className="ss-feature-icon">
//           <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M20 6L9 17l-5-5" stroke="#d4af37" strokeWidth="2"/>
//             <circle cx="12" cy="12" r="10" stroke="#d4af37" strokeWidth="1" opacity="0.3"/>
//           </svg>
//         </div>
//       ),
//       title: "200 Hours Temple Yoga",
//       subtitle: "Certification upon completion"
//     },
//     {
//       icon: (
//         <div className="ss-feature-icon">
//           <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M12 2c-2 0-4 1-5 3l-1 2c0 1 1 2 2 2h8c1 0 2-1 2-2l-1-2c-1-2-3-3-5-3z" stroke="#d4af37" strokeWidth="2" fill="none"/>
//             <path d="M8 9v6c0 2 2 4 4 4s4-2 4-4V9" stroke="#d4af37" strokeWidth="2"/>
//             <circle cx="12" cy="12" r="2" fill="#d4af37" opacity="0.7"/>
//           </svg>
//         </div>
//       ),
//       title: "Saatvik food throughout the journey",
//       subtitle: "Nourishing and energizing meals"
//     },
//     {
//       icon: (
//         <div className="ss-feature-icon ss-bonus-icon">
//           <div className="ss-bonus-text">KIT</div>
//         </div>
//       ),
//       title: "Complete spiritual kit included:",
//       subtitle: "Copper Diya, pendant, Sindoor, manual & Devi idol"
//     }
//   ];

//   const peeths = [
//     "Kamakhya Devi Temple, Assam",
//     "Vaishno Devi, Jammu & Kashmir", 
//     "Kali Ghat, West Bengal",
//     "Ambaji Temple, Gujarat",
//     "Jwala Devi Temple, Himachal Pradesh",
//     "Naina Devi Temple, Himachal Pradesh",
//     "Chintpurni Temple, Himachal Pradesh",
//     "Chamunda Devi Temple, Himachal Pradesh",
//     "Mansa Devi Temple, Haryana",
//     "Chandi Devi Temple, Haryana",
//     "Daksheshwar Mahadev Temple, Uttarakhand",
//     "Additional sacred locations based on Navratri timing"
//   ];

//   const sadhanas = [
//     {
//       title: "Goddess Postures",
//       description: "Special yoga asanas dedicated to different forms of Devi"
//     },
//     {
//       title: "Navarna Mantra",
//       description: "Nine-syllable mantra for divine feminine energy"
//     },
//     {
//       title: "Sri Lalita Sahasranama",
//       description: "1000 names of Divine Mother for deep spiritual connection"
//     },
//     {
//       title: "Meditation & Chanting",
//       description: "Daily practices to connect Jeevatma to Deviaatma"
//     }
//   ];

//   return (
//     <>
//       <style jsx>{`
//         .ss-container {
//           font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//           background: linear-gradient(135deg, #fef7cd 0%, #fff8e1 100%);
//         }

//         .ss-hero-section {
//           min-height: 100vh;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background: linear-gradient(135deg, #4a4a8b 0%, #6a5acd 100%);
//           color: white;
//           position: relative;
//           overflow: hidden;
//         }

//         .ss-hero-section::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: url('https://images.unsplash.com/photo-1603201667230-bd5430e84a40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80') center/cover;
//           opacity: 0.3;
//           z-index: 1;
//         }

//         .ss-hero-content {
//           position: relative;
//           z-index: 2;
//           text-align: center;
//         }

//         .ss-main-heading {
//           font-size: clamp(2.5rem, 5vw, 4rem);
//           font-weight: 300;
//           line-height: 1.2;
//           margin-bottom: 2rem;
//         }

//         .ss-highlight {
//           color: #d4af37;
//           font-weight: 400;
//         }

//         .ss-pricing-section {
//           margin: 3rem 0;
//         }

//         .ss-price-card {
//           background: rgba(255, 255, 255, 0.1);
//           backdrop-filter: blur(10px);
//           border-radius: 20px;
//           padding: 2rem;
//           margin: 1rem;
//           border: 1px solid rgba(255, 255, 255, 0.2);
//         }

//         .ss-about-section {
//           padding: 5rem 1rem;
//           background: white;
//         }

//         .ss-diamond-logo {
//           width: 40px;
//           height: 40px;
//           background: #d4af37;
//           transform: rotate(45deg);
//           margin-bottom: 2rem;
//           display: inline-block;
//           animation: ss-rotate 4s linear infinite;
//           position: relative;
//         }

//         .ss-diamond-logo::before {
//           content: '';
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%) rotate(-45deg);
//           width: 20px;
//           height: 20px;
//           background: white;
//           clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
//         }

//         @keyframes ss-rotate {
//           from { transform: rotate(45deg); }
//           to { transform: rotate(405deg); }
//         }

//         .ss-section-title {
//           font-size: 0.9rem;
//           font-weight: 600;
//           color: #d4af37;
//           letter-spacing: 3px;
//           text-transform: uppercase;
//           margin-bottom: 1.5rem;
//         }

//         .ss-feature-item {
//           display: flex;
//           align-items: center;
//           margin-bottom: 2.5rem;
//           transform: translateX(-30px);
//           opacity: 0;
//           transition: all 0.6s ease;
//         }

//         .ss-feature-item.ss-animated {
//           transform: translateX(0);
//           opacity: 1;
//         }

//         .ss-feature-item:hover {
//           transform: translateX(10px);
//         }

//         .ss-feature-icon {
//           width: 70px;
//           height: 70px;
//           border: 2px solid #e2e8f0;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin-right: 1.5rem;
//           flex-shrink: 0;
//           transition: all 0.3s ease;
//           background: white;
//         }

//         .ss-feature-item:hover .ss-feature-icon {
//           border-color: #d4af37;
//           transform: scale(1.1);
//           box-shadow: 0 5px 20px rgba(212, 175, 55, 0.2);
//         }

//         .ss-bonus-icon {
//           border-color: #d4af37;
//           background: #d4af37;
//         }

//         .ss-bonus-text {
//           color: white;
//           font-weight: bold;
//           font-size: 12px;
//           text-align: center;
//         }

//         .ss-feature-text h5 {
//           color: #2d3748;
//           font-weight: 400;
//           margin-bottom: 0.2rem;
//           font-size: 1.1rem;
//           line-height: 1.4;
//         }

//         .ss-feature-text p {
//           color: #d4af37;
//           margin: 0;
//           font-weight: 400;
//         }

//         .ss-curriculum-section {
//           padding: 5rem 1rem;
//           background: linear-gradient(135deg, #fef7cd 0%, #fff8e1 100%);
//         }

//         .ss-sadhana-card {
//           background: white;
//           border-radius: 15px;
//           padding: 2rem;
//           margin-bottom: 2rem;
//           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
//           transition: transform 0.3s ease;
//         }

//         .ss-sadhana-card:hover {
//           transform: translateY(-5px);
//         }

//         .ss-peeths-section {
//           padding: 5rem 1rem;
//           background: white;
//         }

//         .ss-peeth-item {
//           padding: 1rem;
//           margin: 0.5rem 0;
//           background: linear-gradient(45deg, #fef7cd, #fff8e1);
//           border-radius: 10px;
//           border-left: 4px solid #d4af37;
//         }

//         .ss-transformation-section {
//           padding: 5rem 1rem;
//           background: linear-gradient(135deg, #4a4a8b 0%, #6a5acd 100%);
//           color: white;
//           text-align: center;
//         }

//         @media (max-width: 768px) {
//           .ss-main-heading {
//             font-size: 2.2rem;
//           }
          
//           .ss-price-card {
//             margin: 0.5rem 0;
//           }
//         }
//       `}</style>

//       <div className="ss-container">
//         {/* Hero Section */}
//         <div className="ss-hero-section">
//           <div className="container">
//             <div className="ss-hero-content">
//               <h6 className="text-uppercase mb-3" 
//                   style={{ 
//                     color: '#d4af37', 
//                     fontWeight: '600',
//                     letterSpacing: '2px',
//                     fontSize: 'clamp(0.8rem, 2vw, 1rem)'
//                   }}>
//                 SHAKTI SADHANA MEMBERSHIP PROGRAM<br />
//                 Temple Yoga with Divine Feminine Energy
//               </h6>

//               <h1 className="ss-main-heading mb-4">
//                 Connect Your <span className="ss-highlight">Jeevatma to Deviaatma</span><br />
//                 Through Sacred Shakti Peeths Journey
//               </h1>
              
//               <p className="lead mb-5" 
//                  style={{ 
//                    fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
//                    fontWeight: '300',
//                    maxWidth: '800px',
//                    margin: '0 auto 3rem'
//                  }}>
//                 Experience transformative spiritual journey visiting 12 sacred Shakti/Siddha Peeths during Navratri, 
//                 practicing Goddess postures and ancient Devi sadhanas
//               </p>

//               {/* Pricing Cards */}
//               <div className="ss-pricing-section">
//                 <div className="row justify-content-center">
//                   <div className="col-md-5">
//                     <div className="ss-price-card">
//                       <h4 style={{ color: '#d4af37' }}>NRI Pricing</h4>
//                       <div className="h1 mb-2" style={{ color: 'white' }}>$2,400</div>
//                       <p style={{ color: 'rgba(255,255,255,0.8)' }}>+ $100 Registration Fee</p>
//                     </div>
//                   </div>
//                   <div className="col-md-5">
//                     <div className="ss-price-card">
//                       <h4 style={{ color: '#d4af37' }}>Bharatvaasi Pricing</h4>
//                       <div className="h1 mb-2" style={{ color: 'white' }}>₹1,90,000</div>
//                       <p style={{ color: 'rgba(255,255,255,0.8)' }}>+ ₹5,000 Registration Fee</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <button 
//                 className="btn btn-lg px-5 py-3 text-white text-uppercase fw-semibold" 
//                 style={{ 
//                   backgroundColor: '#d4af37',
//                   border: 'none',
//                   borderRadius: '50px',
//                   fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
//                   letterSpacing: '1px',
//                   boxShadow: '0 8px 25px rgba(212, 175, 55, 0.3)',
//                   transition: 'all 0.3s ease'
//                 }}
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 Begin Your Sacred Journey
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* About Section */}
//         <div className="ss-about-section">
//           <div className="container">
//             <div className="row g-5">
//               <div className="col-lg-6">
//                 <div className="ss-diamond-logo"></div>
                
//                 <h6 className="ss-section-title">ABOUT SHAKTI SADHANA</h6>
                
//                 <h1 style={{
//                   fontSize: '3.2rem',
//                   fontWeight: '300',
//                   color: '#2d3748',
//                   lineHeight: '1.2',
//                   marginBottom: '3rem'
//                 }}>
//                   Experience the <span style={{ color: '#d4af37', fontWeight: '400' }}>Divine Feminine Energy</span><br />
//                   through sacred pilgrimage and practice
//                 </h1>

//                 <div>
//                   {features.map((feature, index) => (
//                     <div 
//                       key={index} 
//                       className={`ss-feature-item ${animatedItems[index] ? 'ss-animated' : ''}`}
//                     >
//                       {feature.icon}
//                       <div className="ss-feature-text">
//                         <h5>{feature.title}</h5>
//                         <p>{feature.subtitle}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="col-lg-6">
//                 <div style={{ position: 'relative' }}>
//                   <div style={{
//                     width: '100%',
//                     height: '500px',
//                     borderRadius: '20px',
//                     overflow: 'hidden',
//                     marginBottom: '1rem',
//                     boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)'
//                   }}>
//                     <img 
//                       src="https://images.unsplash.com/photo-1596450514811-22e0d4bf4d3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
//                       alt="Divine goddess statue in temple"
//                       style={{
//                         width: '100%',
//                         height: '100%',
//                         objectFit: 'cover'
//                       }}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Sadhana Practices Section */}
//         <div className="ss-curriculum-section">
//           <div className="container">
//             <div className="text-center mb-5">
//               <h2 className="display-5 fw-bold mb-4" style={{ color: '#4a4a8b' }}>
//                 Sacred Practices & Sadhanas
//               </h2>
//               <p className="lead" style={{ color: '#6c757d', maxWidth: '800px', margin: '0 auto' }}>
//                 Deepen your connection with the divine feminine through traditional practices and goddess worship
//               </p>
//             </div>

//             <div className="row g-4">
//               {sadhanas.map((sadhana, index) => (
//                 <div key={index} className="col-md-6 col-lg-3">
//                   <div className="ss-sadhana-card text-center">
//                     <div style={{
//                       width: '80px',
//                       height: '80px',
//                       background: 'linear-gradient(45deg, #d4af37, #f4e76e)',
//                       borderRadius: '50%',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       margin: '0 auto 1.5rem',
//                       fontSize: '2rem'
//                     }}>
//                       🕉️
//                     </div>
//                     <h4 style={{ color: '#4a4a8b', marginBottom: '1rem' }}>
//                       {sadhana.title}
//                     </h4>
//                     <p style={{ color: '#6c757d' }}>
//                       {sadhana.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Sacred Peeths Section */}
//         <div className="ss-peeths-section">
//           <div className="container">
//             <div className="text-center mb-5">
//               <h2 className="display-5 fw-bold mb-4" style={{ color: '#4a4a8b' }}>
//                 12 Sacred Shakti/Siddha Peeths
//               </h2>
//               <p className="lead" style={{ color: '#6c757d' }}>
//                 Visit the most powerful centers of divine feminine energy across India
//               </p>
//             </div>

//             <div className="row">
//               {peeths.map((peeth, index) => (
//                 <div key={index} className="col-md-6 col-lg-4">
//                   <div className="ss-peeth-item">
//                     <h6 style={{ color: '#4a4a8b', margin: 0 }}>
//                       {peeth}
//                     </h6>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="text-center mt-4">
//               <p style={{ color: '#d4af37', fontStyle: 'italic' }}>
//                 *Specific locations may vary based on the chosen Navratri period
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Transformation Section */}
//         <div className="ss-transformation-section">
//           <div className="container">
//             <h2 className="display-5 fw-bold mb-4">
//               Transform Your Spiritual Journey
//             </h2>
//             <p className="lead mb-5" style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
//               At Yogalayaa Yoga Academy, we prioritize your safety, security, and transformative spiritual experience. 
//               Join the Shakti Sadhana program and connect with the divine feminine energy while taking your spiritual journey to the next level.
//             </p>
            
//             <div className="row g-4 mt-5">
//               <div className="col-md-4">
//                 <h5 style={{ color: '#d4af37' }}>Divine Connection</h5>
//                 <p>Connect with the divine feminine energy and receive blessings of the Devi</p>
//               </div>
//               <div className="col-md-4">
//                 <h5 style={{ color: '#d4af37' }}>Cultural Heritage</h5>
//                 <p>Learn about the rich cultural heritage of India through sacred traditions</p>
//               </div>
//               <div className="col-md-4">
//                 <h5 style={{ color: '#d4af37' }}>Spiritual Growth</h5>
//                 <p>Deepen your spiritual practice and gain understanding of divine energies</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ShaktiSadhanaMembership;



// import React, { useState, useEffect, useCallback } from 'react';
// import './ShaktiSadhana.css';

// const ShaktiSadhanaMembership = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [animatedItems, setAnimatedItems] = useState({});
//   const [imagesVisible, setImagesVisible] = useState({});

//   useEffect(() => {
//     setIsVisible(true);
    
//     // Stagger animations for feature items
//     const timeouts = [];
//     [0, 1, 2, 3, 4, 5].forEach((index) => {
//       timeouts.push(
//         setTimeout(() => {
//           setAnimatedItems(prev => ({ ...prev, [index]: true }));
//         }, 300 + index * 200)
//       );
//     });

//     // Stagger image animations
//     [0, 1, 2].forEach((index) => {
//       timeouts.push(
//         setTimeout(() => {
//           setImagesVisible(prev => ({ ...prev, [index]: true }));
//         }, 500 + index * 300)
//       );
//     });

//     return () => timeouts.forEach(clearTimeout);
//   }, []);

//   // Memoized button hover handlers
//   const handleMouseEnter = useCallback((e) => {
//     e.target.style.transform = 'translateY(-2px)';
//     e.target.style.boxShadow = '0 12px 35px rgba(212, 175, 55, 0.4)';
//   }, []);

//   const handleMouseLeave = useCallback((e) => {
//     e.target.style.transform = 'translateY(0)';
//     e.target.style.boxShadow = '0 8px 25px rgba(212, 175, 55, 0.3)';
//   }, []);

//   const features = [
//     {
//       icon: (
//         <div className="ss-feature-icon">
//           <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#d4af37" stroke="#d4af37" strokeWidth="2"/>
//           </svg>
//         </div>
//       ),
//       title: "Visit 12 Sacred Shakti/Siddha Peeths",
//       subtitle: "During any one of the four Navratris"
//     },
//     {
//       icon: (
//         <div className="ss-feature-icon">
//           <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <circle cx="12" cy="12" r="3" stroke="#d4af37" strokeWidth="2"/>
//             <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" stroke="#d4af37" strokeWidth="2"/>
//           </svg>
//         </div>
//       ),
//       title: "Practice Goddess postures and",
//       subtitle: "Devi Sadhanas (Navarna Mantra, Sri Lalita Sahasranama)"
//     },
//     {
//       icon: (
//         <div className="ss-feature-icon">
//           <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M20 6L9 17l-5-5" stroke="#d4af37" strokeWidth="2"/>
//             <circle cx="12" cy="12" r="10" stroke="#d4af37" strokeWidth="1" opacity="0.3"/>
//           </svg>
//         </div>
//       ),
//       title: "200 Hours Temple Yoga",
//       subtitle: "Certification upon completion"
//     },
//     {
//       icon: (
//         <div className="ss-feature-icon">
//           <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M12 2c-2 0-4 1-5 3l-1 2c0 1 1 2 2 2h8c1 0 2-1 2-2l-1-2c-1-2-3-3-5-3z" stroke="#d4af37" strokeWidth="2" fill="none"/>
//             <path d="M8 9v6c0 2 2 4 4 4s4-2 4-4V9" stroke="#d4af37" strokeWidth="2"/>
//             <circle cx="12" cy="12" r="2" fill="#d4af37" opacity="0.7"/>
//           </svg>
//         </div>
//       ),
//       title: "Saatvik food throughout the journey",
//       subtitle: "Nourishing and energizing meals"
//     },
//     {
//       icon: (
//         <div className="ss-feature-icon">
//           <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M20 6L9 17l-5-5" stroke="#d4af37" strokeWidth="2"/>
//             <circle cx="12" cy="12" r="10" stroke="#d4af37" strokeWidth="1" opacity="0.3"/>
//           </svg>
//         </div>
//       ),
//       title: "Free airport transfers throughout journey",
//       subtitle: "Safe and comfortable transportation"
//     },
//     {
//       icon: (
//         <div className="ss-feature-icon ss-bonus-icon">
//           <div className="ss-bonus-text">KIT</div>
//         </div>
//       ),
//       title: "Complete spiritual kit included:",
//       subtitle: "Copper Diya, pendant, Sindoor, manual & Devi idol"
//     }
//   ];

//   const peeths = [
//     { name: "Kamakhya Devi Temple", location: "Assam", description: "Most powerful Shakti Peeth for tantric worship" },
//     { name: "Vaishno Devi", location: "Jammu & Kashmir", description: "Sacred cave temple of Mother Goddess" },
//     { name: "Kali Ghat", location: "West Bengal", description: "Ancient temple of Goddess Kali in Kolkata" },
//     { name: "Ambaji Temple", location: "Gujarat", description: "Eternal flame temple of Amba Mata" },
//     { name: "Jwala Devi Temple", location: "Himachal Pradesh", description: "Natural flame temple without idol" },
//     { name: "Naina Devi Temple", location: "Himachal Pradesh", description: "Temple where Devi's eyes fell" },
//     { name: "Chintpurni Temple", location: "Himachal Pradesh", description: "Fulfiller of wishes temple" },
//     { name: "Chamunda Devi Temple", location: "Himachal Pradesh", description: "Fierce form of Divine Mother" },
//     { name: "Mansa Devi Temple", location: "Haryana", description: "Wish-fulfilling goddess temple" },
//     { name: "Chandi Devi Temple", location: "Haryana", description: "Temple atop Chandi Hill" },
//     { name: "Daksheshwar Mahadev", location: "Uttarakhand", description: "Site of Daksha's sacrifice" },
//     { name: "Additional Sacred Sites", location: "Various", description: "Based on Navratri timing and season" }
//   ];

//   const curriculum = [
//     {
//       title: "Devi Yoga Asanas",
//       icon: "🧘‍♀️",
//       content: [
//         "Durga Asana (Warrior Goddess Pose)",
//         "Kali Asana (Fierce Goddess Pose)",
//         "Lakshmi Asana (Prosperity Goddess Pose)",
//         "Saraswati Asana (Wisdom Goddess Pose)",
//         "Parvati Asana (Mountain Goddess Pose)",
//         "Tara Asana (Star Goddess Pose)",
//         "Chinnamasta Asana (Self-sacrifice Pose)",
//         "Goddess Mandala Flow Sequences",
//         "Sacred Mudras for each Devi form"
//       ]
//     },
//     {
//       title: "Navarna Mantra Sadhana",
//       icon: "🕉️",
//       content: [
//         "Om Aim Hreem Kleem Chamundaye Viche",
//         "9-syllable powerful Devi mantra",
//         "108 times daily chanting practice",
//         "Beej mantra meanings and significance",
//         "Proper pronunciation and rhythm",
//         "Yantra meditation with mantra",
//         "Mantra japa with mala",
//         "Group chanting at temples",
//         "Integration with breath work"
//       ]
//     },
//     {
//       title: "Sri Lalita Sahasranama",
//       icon: "📿",
//       content: [
//         "1000 names of Divine Mother Lalita",
//         "Daily recitation practice",
//         "Meaning and significance study",
//         "Bhakti yoga through names",
//         "Sanskrit pronunciation training",
//         "Temple chanting participation",
//         "Personal devotion development",
//         "Inner transformation through names",
//         "Connection with divine feminine"
//       ]
//     },
//     {
//       title: "Temple Yoga Philosophy",
//       icon: "🏛️",
//       content: [
//         "Shakti philosophy and principles",
//         "Divine feminine energy concepts",
//         "Tantra and Shakti worship",
//         "History of Shakti Peeths",
//         "Sacred geography of India",
//         "Ritual and ceremony understanding",
//         "Bhakti yoga practices",
//         "Meditation in sacred spaces",
//         "Energy work at power spots"
//       ]
//     },
//     {
//       title: "Chakra & Energy Work",
//       icon: "⚡",
//       content: [
//         "7 chakras and goddess connection",
//         "Kundalini Shakti awakening",
//         "Energy channels (nadis) purification",
//         "Sacred site energy absorption",
//         "Auric field strengthening",
//         "Divine feminine energy channeling",
//         "Healing with goddess energy",
//         "Protection practices",
//         "Energy sensitivity development"
//       ]
//     },
//     {
//       title: "Sacred Rituals & Ceremonies",
//       icon: "🕯️",
//       content: [
//         "Devi Puja (Goddess worship)",
//         "Aarti and offering ceremonies",
//         "Fire ceremony (Havan) participation",
//         "Sacred water rituals",
//         "Flower offering practices",
//         "Temple etiquette and protocols",
//         "Personal altar creation",
//         "Daily worship routine",
//         "Ceremonial clothing and preparation"
//       ]
//     },
//     {
//       title: "Meditation & Contemplation",
//       icon: "🧘‍♀️",
//       content: [
//         "Goddess visualization meditation",
//         "Third eye activation practices",
//         "Temple meditation sessions",
//         "Silent contemplation periods",
//         "Walking meditation at sites",
//         "Group meditation circles",
//         "Personal reflection time",
//         "Dream work and symbolism",
//         "Intuitive development practices"
//       ]
//     },
//     {
//       title: "Spiritual Journal & Integration",
//       icon: "📖",
//       content: [
//         "Daily spiritual journaling",
//         "Experience documentation",
//         "Dream recording and analysis",
//         "Personal insights tracking",
//         "Spiritual progress monitoring",
//         "Integration exercises",
//         "Life application practices",
//         "Community sharing sessions",
//         "Post-journey continuation plan"
//       ]
//     }
//   ];

//   const schedule = {
//     morning: [
//       { time: "05:00 AM", activity: "Awakening & Personal Prayers" },
//       { time: "05:30 AM", activity: "Devi Yoga Asanas Practice" },
//       { time: "06:30 AM", activity: "Navarna Mantra Chanting (108x)" },
//       { time: "07:30 AM", activity: "Temple Visit & Morning Puja" },
//       { time: "09:00 AM", activity: "Saatvik Breakfast" },
//       { time: "10:00 AM", activity: "Sri Lalita Sahasranama Study" }
//     ],
//     afternoon: [
//       { time: "12:00 PM", activity: "Temple Philosophy & History" },
//       { time: "01:00 PM", activity: "Saatvik Lunch & Rest" },
//       { time: "03:00 PM", activity: "Travel to Next Sacred Site" },
//       { time: "05:00 PM", activity: "Evening Temple Darshan" },
//       { time: "06:30 PM", activity: "Group Aarti Participation" },
//       { time: "08:00 PM", activity: "Dinner & Community Sharing" },
//       { time: "09:30 PM", activity: "Personal Reflection & Rest" }
//     ]
//   };

//   const navratriOptions = [
//     {
//       season: "Chaitra Navratri",
//       timing: "March-April",
//       description: "Spring season journey with temple festivals and flower offerings",
//       highlights: ["Pleasant weather", "Spring festivals", "Flower blooming season"]
//     },
//     {
//       season: "Sharad Navratri", 
//       timing: "September-October",
//       description: "Most popular Navratri with grand celebrations across all temples",
//       highlights: ["Major celebrations", "Perfect weather", "Festive atmosphere"]
//     },
//     {
//       season: "Magha Navratri",
//       timing: "January-February", 
//       description: "Winter journey with spiritual focus and deep contemplation",
//       highlights: ["Cool weather", "Deep spiritual practice", "Fewer crowds"]
//     },
//     {
//       season: "Ashadha Navratri",
//       timing: "June-July",
//       description: "Monsoon season journey with powerful energy and natural beauty",
//       highlights: ["Lush landscapes", "Powerful energies", "Unique experience"]
//     }
//   ];

//   return (
//     <>
//       <div>
//         {/* Hero Section - Training200 style */}
//         <div className="ss-hero-section">
//           <div className="container">
//             <div className="row justify-content-center">
//               <div className="col-12 col-lg-10 col-xl-8">
//                 <div className="text-center">
                  
//                   <div className="mb-4 mb-md-5">
//                     <h6 className="ss-header-subtitle">
//                       SHAKTI SADHANA MEMBERSHIP PROGRAM<br />
//                       Temple Yoga with Divine Feminine Energy<br />
//                       200 Hours Certification with Yogalayaa
//                     </h6>
//                   </div>

//                   <div className="mb-4 mb-md-5">
//                     <h1 className="ss-main-title">
//                       Connect Your Jeevatma to Deviaatma Through Sacred Shakti Peeths Journey
//                     </h1>
                    
//                     <p className="ss-subtitle">
//                       Experience transformative spiritual pilgrimage visiting 12 sacred temples during Navratri with ancient practices
//                     </p>
//                   </div>

//                   <div className="ss-pricing-section">
//                     <div className="d-flex align-items-center justify-content-center flex-wrap gap-4 mb-3">
//                       <div className="ss-price-card">
//                         <h6>NRI Pricing</h6>
//                         <span className="ss-price">$2,400</span>
//                         <p>+ $100 Registration Fee</p>
//                       </div>
//                       <div className="ss-price-divider">OR</div>
//                       <div className="ss-price-card">
//                         <h6>Bharatvaasi Pricing</h6>
//                         <span className="ss-price">₹1,90,000</span>
//                         <p>+ ₹5,000 Registration Fee</p>
//                       </div>
//                     </div>
                    
//                     <p className="ss-pricing-note">
//                       *Inclusive of accommodation, meals, transportation, temple entries & certification
//                     </p>
//                   </div>

//                   <div className="mb-4">
//                     <button 
//                       className="ss-cta-button" 
//                       onMouseEnter={handleMouseEnter}
//                       onMouseLeave={handleMouseLeave}
//                     >
//                       Begin Your Sacred Journey
//                     </button>
//                   </div>

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Main Image Section */}
//         <section className="ss-image-section">
//           <div className="container">
//             <div className="row">
//               <div className="col-12 mb-4 d-flex justify-content-center">
//                 <img 
//                   src="https://images.unsplash.com/photo-1596450514811-22e0d4bf4d3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
//                   alt="Sacred Goddess temple with devotees" 
//                   className="ss-main-image"
//                 />
//               </div>

//               <div className="col-12">
//                 <div className="row align-items-start">
//                   <div className="col-12 col-lg-6 mb-4 mb-lg-0">
//                     <h2 className="ss-section-heading">
//                       After completing the<br />
//                       sacred journey...
//                     </h2>
                    
//                     <div className="mb-3">
//                       <h5 className="ss-benefits-title">What you'll gain:</h5>
//                       <ul className="ss-benefits-list">
//                         <li>Deep connection with Divine Feminine Energy (Shakti)</li>
//                         <li>200-hour Temple Yoga certification</li>
//                         <li>Mastery of Goddess postures and sacred practices</li>
//                         <li>Spiritual transformation through pilgrimage</li>
//                         <li>Understanding of sacred geography and energy spots</li>
//                         <li>Personal spiritual practice development</li>
//                       </ul>
//                     </div>
//                   </div>

//                   <div className="col-12 col-lg-6">
//                     <div className="ss-certification-section">
//                       <div className="ss-cert-badges">
//                         <div className="ss-cert-circle">
//                           <img 
//                             src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
//                             alt="Temple Yoga Certification" 
//                             className="ss-cert-image"
//                           />
//                         </div>
//                         <div className="ss-cert-circle">
//                           <img 
//                             src="https://images.unsplash.com/photo-1494790108755-2616c95ae3d4?w=100&h=100&fit=crop&crop=face"
//                             alt="Shakti Sadhana Certification" 
//                             className="ss-cert-image"
//                           />
//                         </div>
//                         <div className="ss-cert-circle">
//                           <img 
//                             src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
//                             alt="Yogalayaa Academy Certification" 
//                             className="ss-cert-image"
//                           />
//                         </div>
//                       </div>

//                       <div className="ss-cert-text">
//                         <p>You will receive Temple Yoga certification.</p>
//                         <p>Recognized by spiritual communities worldwide.</p>
//                         <p className="ss-tagline">Connecting Jeevatmaa To Deviaatmaa</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* About Section - YogaTrainingPromo style */}
//         <div className="ss-about-section">
//           <div className="container-fluid">
//             <div className={`ss-about-content ${isVisible ? 'ss-visible' : ''}`}>
//               <div className="row g-5">
//                 <div className="col-lg-6">
//                   <div className="ss-diamond-logo"></div>
                  
//                   <h6 className="ss-section-title">ABOUT SHAKTI SADHANA</h6>
                  
//                   <h1 className="ss-about-heading">
//                     Join us for a life-changing<br />
//                     <span className="ss-highlight">Sacred Pilgrimage</span> to 12 Shakti<br />
//                     Peeths during Navratri
//                   </h1>

//                   <div className="ss-features-container">
//                     {features.map((feature, index) => (
//                       <div 
//                         key={index} 
//                         className={`ss-feature-item ${animatedItems[index] ? 'ss-animated' : ''}`}
//                       >
//                         {feature.icon}
//                         <div className="ss-feature-text">
//                           <h5>{feature.title}</h5>
//                           <p>{feature.subtitle}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="col-lg-6">
//                   <div className="ss-images-container">
//                     <div className={`ss-main-about-image ${isVisible ? 'ss-visible' : ''}`}>
//                       <img 
//                         src="https://images.unsplash.com/photo-1603201667230-bd5430e84a40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
//                         alt="Devotees at sacred Shakti temple"
//                       />
//                     </div>
                    
//                     <div className="ss-secondary-images">
//                       <div className={`ss-secondary-image ${isVisible ? 'ss-visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
//                         <img 
//                           src="https://images.unsplash.com/photo-1574936913940-5b9f6b30b4c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//                           alt="Traditional saatvik meal"
//                         />
//                       </div>
//                       <div className={`ss-secondary-image ${isVisible ? 'ss-visible' : ''}`} style={{ transitionDelay: '0.6s' }}>
//                         <img 
//                           src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
//                           alt="Sacred temple accommodation"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Transformation Section */}
//         <div className="ss-transformation-section">
//           <div className="ss-transformation-overlay">
//             <div>
//               <p className="ss-transformation-text">
//                 Embarking on a <span className="ss-transformation-highlight">Shakti Sadhana pilgrimage</span> is a transformative journey connecting you with the divine feminine energy across India's most powerful temples
//               </p>
//               <p className="ss-transformation-subtitle">
//                 At Yogalayaa, our sacred program is designed to awaken your inner goddess through temple visits, 
//                 ancient practices, and spiritual communion with the Divine Mother
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Teaching/Practices Section - TransTeach style */}
//         <div className="ss-practices-section">
//           <div className="container">
//             <div className="row">
//               <div className="col-12">
//                 <h1 className={`ss-practices-heading ${isVisible ? 'ss-visible' : ''}`}>
//                   Comprehensive practices of <span className="ss-practices-highlight">Devi Yoga, Navarna Mantra Sadhana, and Sri Lalita Sahasranama</span> exploring<br />
//                   Divine Feminine energies - a fusion of Temple Yoga and Bhakti
//                 </h1>

//                 <p className={`ss-practices-subtitle ${isVisible ? 'ss-visible' : ''}`}>
//                   Our Shakti Sadhana program dives deep into traditional goddess worship practices, helping you understand the sacred feminine principles, temple protocols, and ancient sadhanas. Beyond physical practice, explore the divine feminine energy, chakra systems, and practical applications of Shakti philosophy.
//                 </p>
//               </div>
//             </div>

//             <div className="row g-4">
//               {[
//                 {
//                   src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//                   alt: "Goddess yoga postures practice",
//                   title: "Devi Yoga Asanas",
//                   description: "Sacred yoga postures dedicated to different forms of the Divine Mother, channeling goddess energies"
//                 },
//                 {
//                   src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//                   alt: "Mantra chanting practice",
//                   title: "Navarna Mantra Sadhana", 
//                   description: "Daily practice of the powerful 9-syllable Devi mantra for spiritual transformation and protection"
//                 },
//                 {
//                   src: "https://images.unsplash.com/photo-1574936913940-5b9f6b30b4c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//                   alt: "Temple meditation and prayer",
//                   title: "Sri Lalita Sahasranama",
//                   description: "Recitation of 1000 names of Divine Mother Lalita for deep devotion and spiritual connection"
//                 }
//               ].map((image, index) => (
//                 <div key={index} className="col-lg-4 col-md-6 col-12">
//                   <div 
//                     className={`ss-practice-card ${imagesVisible[index] ? 'ss-visible' : ''}`}
//                     style={{ transitionDelay: `${index * 0.1}s` }}
//                   >
//                     <img src={image.src} alt={image.alt} />
//                     <div className="ss-practice-overlay"></div>
//                     <div className="ss-practice-content">
//                       <h3 className="ss-practice-title">{image.title}</h3>
//                       <p className="ss-practice-description">{image.description}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="row mt-5">
//               <div className="col-12">
//                 <div className="text-center">
//                   <h3 className="mb-4 ss-unique-title">What Makes Our Shakti Sadhana Unique</h3>
//                   <div className="row g-4">
//                     <div className="col-md-4">
//                       <div className="ss-unique-card">
//                         <h5 className="ss-unique-card-title">Sacred Geography</h5>
//                         <p className="ss-unique-card-text">
//                           Visit the most powerful Shakti Peeths where parts of Sati's body fell, each with unique divine energy
//                         </p>
//                       </div>
//                     </div>
//                     <div className="col-md-4">
//                       <div className="ss-unique-card">
//                         <h5 className="ss-unique-card-title">Personalized Sadhana</h5>
//                         <p className="ss-unique-card-text">
//                           Develop your personal relationship with the Divine Mother through guided practices and meditation
//                         </p>
//                       </div>
//                     </div>
//                     <div className="col-md-4">
//                       <div className="ss-unique-card">
//                         <h5 className="ss-unique-card-title">Spiritual Awakening</h5>
//                         <p className="ss-unique-card-text">
//                           Awaken dormant spiritual energies and connect with the divine feminine aspect within yourself
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Curriculum Section - YogaCoursesPage style */}
//         <div className="ss-curriculum-section">
//           <div className="container mb-5">
//             <div className="text-center">
//               <h1 className="ss-curriculum-heading">
//                 Shakti Sadhana Training Program
//               </h1>
//               <h2 className="ss-curriculum-subheading">
//                 Comprehensive Sacred Curriculum
//               </h2>
//               <div className="row justify-content-center">
//                 <div className="col-lg-10">
//                   <p className="ss-curriculum-description">
//                     Our comprehensive program provides deep immersion into divine feminine energy practices through temple visits, 
//                     ancient sadhanas, and transformative spiritual experiences
//                   </p>
//                   <p className="ss-curriculum-description">
//                     Learn from experienced spiritual guides with decades of temple yoga and goddess worship practice
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="container">
//             <div className="row g-4">
//               {curriculum.map((course, index) => (
//                 <div key={index} className="col-lg-3 col-md-6 col-sm-12">
//                   <div className="ss-curriculum-card">
//                     <div className="ss-curriculum-card-body">
//                       <div className="text-center mb-3">
//                         <div className="ss-curriculum-icon">
//                           {course.icon}
//                         </div>
//                       </div>
                      
//                       <h4 className="ss-curriculum-title">
//                         {course.title}
//                       </h4>
                      
//                       <ul className="ss-curriculum-content">
//                         {course.content.map((item, itemIndex) => (
//                           <li key={itemIndex}>
//                             <span className="ss-curriculum-bullet">•</span>
//                             {item}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Navratri Options */}
//             <div className="row mt-5">
//               <div className="col-12">
//                 <h3 className="text-center mb-4 ss-navratri-title">Choose Your Navratri Season</h3>
//                 <div className="row g-4">
//                   {navratriOptions.map((option, index) => (
//                     <div key={index} className="col-md-6 col-lg-3">
//                       <div className="ss-navratri-card">
//                         <div className="ss-navratri-card-body">
//                           <h5 className="ss-navratri-season">{option.season}</h5>
//                           <p className="ss-navratri-timing">{option.timing}</p>
//                           <p className="ss-navratri-description">{option.description}</p>
//                           <ul className="ss-navratri-highlights">
//                             {option.highlights.map((highlight, hIndex) => (
//                               <li key={hIndex}>{highlight}</li>
//                             ))}
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Daily Schedule Section - DailySchedulePage style */}
//         <div className="ss-schedule-section">
//           <div className="container">
//             <div className="row align-items-center mb-5">
//               <div className="col-lg-6 mb-4 mb-lg-0">
//                 <h1 className="ss-schedule-heading">
//                   Daily Schedule - Shakti Sadhana
//                 </h1>
//                 <p className="ss-schedule-description">
//                   Our daily schedule is designed to provide a perfect balance of spiritual practices, temple visits, 
//                   sacred ceremonies, and deep contemplation. Each day brings new opportunities for divine connection 
//                   and personal transformation guided by experienced spiritual teachers.
//                 </p>
//                 <div className="mt-4">
//                   <p className="ss-schedule-note">
//                     *Please note: The timing and sequence may vary depending on temple schedules and seasonal factors.
//                   </p>
//                 </div>
//               </div>
//               <div className="col-lg-6">
//                 <div className="position-relative">
//                   <img 
//                     src="https://images.unsplash.com/photo-1604013924300-d1b5c4e5eba1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
//                     alt="Sacred temple during Navratri celebration"
//                     className="ss-schedule-image"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="row mb-5">
//               <div className="col-lg-6">
//                 <hr className="ss-schedule-divider" />
//               </div>
//             </div>

//             <div className="row">
//               <div className="col-lg-6 mb-4 mb-lg-0">
//                 <div className="pe-lg-4">
//                   <h3 className="ss-schedule-session-title">
//                     Morning Session
//                   </h3>
//                   {schedule.morning.map((item, index) => (
//                     <div key={index} className="ss-schedule-item">
//                       <span className="ss-schedule-time">
//                         {item.time}
//                       </span>
//                       <span className="ss-schedule-activity">
//                         - {item.activity}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="col-lg-6">
//                 <div className="ps-lg-4">
//                   <h3 className="ss-schedule-session-title">
//                     Afternoon & Evening Session
//                   </h3>
//                   {schedule.afternoon.map((item, index) => (
//                     <div key={index} className="ss-schedule-item">
//                       <span className="ss-schedule-time">
//                         {item.time}
//                       </span>
//                       <span className="ss-schedule-activity">
//                         - {item.activity}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="row mt-5">
//               <div className="col-12">
//                 <div className="ss-schedule-info-card">
//                   <div className="ss-schedule-info-body">
//                     <h4 className="ss-schedule-info-title">About the Sacred Journey</h4>
//                     <p className="ss-schedule-info-text">
//                       Our daily schedule provides a perfect balance of spiritual practices, temple visits, 
//                       sacred ceremonies, and personal reflection time. Each day is structured to deepen your 
//                       connection with the Divine Mother while respecting traditional temple protocols and timing.
//                     </p>
//                     <p className="ss-schedule-info-text">
//                       The program helps you align your spiritual energy with sacred sites, establish devotional practices, 
//                       improve spiritual sensitivity, and build lasting connection with divine feminine energy.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Sacred Peeths Section */}
//         <div className="ss-peeths-section">
//           <div className="container">
//             <div className="text-center mb-5">
//               <h2 className="ss-peeths-heading">
//                 12 Sacred Shakti/Siddha Peeths
//               </h2>
//               <p className="ss-peeths-description">
//                 Visit the most powerful centers of divine feminine energy across India, each carrying unique spiritual significance
//               </p>
//             </div>

//             <div className="row g-4">
//               {peeths.map((peeth, index) => (
//                 <div key={index} className="col-md-6 col-lg-4">
//                   <div className="ss-peeth-card">
//                     <div className="ss-peeth-header">
//                       <h5 className="ss-peeth-name">{peeth.name}</h5>
//                       <span className="ss-peeth-location">{peeth.location}</span>
//                     </div>
//                     <p className="ss-peeth-description">{peeth.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="text-center mt-4">
//               <p className="ss-peeths-note">
//                 *Specific temple visits may vary based on the chosen Navratri period and seasonal accessibility
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Final Transformation Section */}
//         <div className="ss-final-section">
//           <div className="container">
//             <div className="text-center">
//               <h2 className="ss-final-heading">
//                 Transform Your Spiritual Journey
//               </h2>
//               <p className="ss-final-description">
//                 At Yogalayaa Academy, we prioritize your spiritual growth, safety, and transformative experience. 
//                 Join the Shakti Sadhana program and connect with the divine feminine energy while taking your spiritual journey to the next level.
//               </p>
              
//               <div className="row g-4 mt-5">
//                 <div className="col-md-4">
//                   <div className="ss-final-benefit">
//                     <h5 className="ss-final-benefit-title">Divine Connection</h5>
//                     <p className="ss-final-benefit-text">Connect with the divine feminine energy and receive blessings of the Devi at sacred sites</p>
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="ss-final-benefit">
//                     <h5 className="ss-final-benefit-title">Cultural Heritage</h5>
//                     <p className="ss-final-benefit-text">Learn about India's rich spiritual heritage through authentic temple traditions and ceremonies</p>
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="ss-final-benefit">
//                     <h5 className="ss-final-benefit-title">Spiritual Growth</h5>
//                     <p className="ss-final-benefit-text">Deepen your spiritual practice and gain understanding of divine feminine energies within yourself</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-5">
//                 <button 
//                   className="ss-final-cta-button" 
//                   onMouseEnter={handleMouseEnter}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   Start Your Sacred Journey Today
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ShaktiSadhanaMembership;



// src/pages/ShaktiSadhanaPage.jsx
import React from 'react';
import MembershipProgram from '../MembershipProgram.jsx';
import { shaktiSadhanaData } from '../data/index.js'; // Using index.js

const ShaktiSadhanaPage = () => {
  return <MembershipProgram data={shaktiSadhanaData} />;
};

export default ShaktiSadhanaPage;