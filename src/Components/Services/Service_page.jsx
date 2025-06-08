// import React from 'react';
import React, { useState, useEffect, useRef } from 'react';



const YogaTrainingSection = () => {
    return (

    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        xintegrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />
        {/* Font Awesome for carousel arrows (optional, but makes them look better) */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
  
        {/* Custom CSS for the carousel */}
        <style>
          {`
            .carousel-item-custom {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              text-align: center;
              padding: 1rem;
            }
  
            .carousel-item-custom img {
              max-width: 100%;
              height: auto;
              border-radius: 0.5rem;
              margin-bottom: 1rem;
            }
  
            .carousel-container-custom {
              max-width: 900px;
              margin: 2rem auto;
              padding: 1rem;
              background-color: #f8f9fa;
              border-radius: 0.75rem;
              box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
              overflow: hidden; /* Hide overflowing items */
              position: relative; /* For positioning arrows and dots */
            }
  
            .carousel-slides-wrapper {
              display: flex;
              transition: transform 0.5s ease-in-out; /* Smooth transition */
            }
  
            .carousel-slide-inner {
              min-width: 100%; /* Each slide takes full width of its parent */
              box-sizing: border-box; /* Include padding/border in width */
            }
  
            .carousel-control-prev-custom,
            .carousel-control-next-custom {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              width: 40px;
              height: 40px;
              background-color: rgba(0, 0, 0, 0.5);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #fff;
              font-size: 20px;
              cursor: pointer;
              z-index: 2; /* Ensure arrows are above slides */
              transition: background-color 0.3s ease;
              text-decoration: none; /* Remove underline for anchor tag */
            }
  
            .carousel-control-prev-custom:hover,
            .carousel-control-next-custom:hover {
              background-color: rgba(0, 0, 0, 0.7);
            }
  
            .carousel-control-prev-custom {
              left: 10px;
            }
  
            .carousel-control-next-custom {
              right: 10px;
            }
  
            .carousel-indicators-custom {
              position: absolute;
              bottom: 10px;
              left: 50%;
              transform: translateX(-50%);
              display: flex;
              list-style: none;
              padding: 0;
              margin: 0;
            }
  
            .carousel-indicators-custom li {
              width: 10px;
              height: 10px;
              margin: 0 5px;
              background-color: #6c757d;
              border-radius: 50%;
              cursor: pointer;
              transition: background-color 0.3s ease;
            }
  
            .carousel-indicators-custom li.active {
              background-color: #0d6efd;
            }
          `}
        </style>
       
        <div className="container-fluid d-flex flex-column align-items-center justify-content-center min-vh-100 py-5" style={{ backgroundColor: '#f8f9fa' }}>
          {/* Container for the main content, with maximum width */}
          <div className="row justify-content-center text-center w-100">
            <div className="col-12 col-md-10 col-lg-8 px-3">
              {/* Main title */}
              <h2 className="mb-3" style={{ fontSize: '1.2rem', fontWeight: 600, color: '#343a40', letterSpacing: '0.1em' }}>
                200-HOUR ACCREDITED
                <br />
                YOGA TEACHER TRAINING
                <br />
                IN AMERTHAM, BALI
              </h2>
    
              {/* Subtitle/Main message */}
              <h1 className="mb-4" style={{ fontSize: '2.3rem', fontWeight: 700, color: '#003366', fontFamily: 'serif' }}>
                Become a certified yoga teacher by Yoga Alliance
              </h1>
              <p className="lead mb-4" style={{ fontSize: '1.2rem', color: '#6c757d' }}>
                and take part in an exciting journey of 20 days in Bali
              </p>
    
              {/* Pricing Section */}
              <div className="d-flex flex-column flex-md-row align-items-center justify-content-center mb-4">
                <span className="text-muted text-decoration-line-through me-md-3 mb-2 mb-md-0" style={{ fontSize: '2.3rem', fontWeight: 500, color: '#ced4da' }}>
                  USD 2350
                </span>
                <span className="fw-bold" style={{ fontSize: '2.4rem', color: '#003366' }}>
                  USD 2000
                </span>
              </div>
              <p className="text-small mb-4" style={{ fontSize: '0.9rem', color: '#6c757d' }}>
                *early bird offer -15%
              </p>
    
              {/* Call to Action Button */}
              <button className="btn btn-lg mb-5 px-5 py-3" style={{ backgroundColor: '#003366', color: '#ffffff', borderRadius: '30px', fontWeight: 'bold', border: 'none', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                BOOK YOUR SPOT
              </button>
    
              {/* Remaining spots and dates */}
              <p className="mb-5" style={{ fontSize: '1rem', color: '#6c757d', textDecoration: 'underline' }}>
                5 spots left on the next training:
                <br />
                June 16th - July 5th, 2025
              </p>
            </div>
          </div>

           {/* New Section: After completing the course... */}
      <div className="row justify-content-center w-100 mt-1 pt-2"> {/* Added margin top for separation */}
        <div className="col-12 col-md-10 col-lg-8 px-3">
          {/* Image Container with rounded corners and shadow */}
          <div className="mb-5 rounded shadow" style={{ overflow: 'hidden' }}>
            {/* Replace 'https://placehold.co/800x450/cccccc/000000?text=Your+Image+Here' with your actual image URL */}
            <img
              src="../images/service_img1.jpg"
              alt="Yoga Course Completion"
              className="img-fluid w-200"
              style={{ borderRadius: '8px' }} // Apply border-radius to the image itself if needed
            />
          </div>

          <div className="d-flex flex-column flex-md-row align-items-center justify-content-between mb-5">
            {/* Left side text */}
            <h2 className="mb-4 mb-md-0 text-md-start text-center" style={{ fontSize: '2.2rem', fontWeight: 700, color: '#003366', fontFamily: 'serif' }}>
              After completing the
              <br />
              course...
            </h2>

            {/* Right side content: Certificates and text */}
            <div className="text-center text-md-end">
              {/* RYS Icons - Using placeholders/placeholders for now */}
              <div className="d-flex justify-content-center justify-content-md-end mb-3">
                <img src="https://placehold.co/60x60/d4edda/28a745?text=RYS" alt="RYS 200" className="mx-1 rounded-circle" style={{ border: '2px solid #28a745' }} />
                <img src="https://placehold.co/60x60/d4edda/28a745?text=RYS" alt="RYS 300" className="mx-1 rounded-circle" style={{ border: '2px solid #28a745' }} />
                <img src="https://placehold.co/60x60/d4edda/28a745?text=RYS" alt="RYS 500" className="mx-1 rounded-circle" style={{ border: '2px solid #28a745' }} />
              </div>
              <p className="lead mb-1" style={{ fontSize: '1.2rem', color: '#6c757d', fontWeight: 'bold' }}>
                You will receive a Yoga Alliance certificate.
              </p>
              <p className="text-small" style={{ fontSize: '0.9rem', color: '#6c757d' }}>
                Recognised and accepted worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>

       {/* NEW SECTION: yogalaya - Fixed Background Image with Scrollable Text */}
      {/* This div will act as the fixed background container */}
      <div
        className="position-relative w-100 d-flex flex-column justify-content-center align-items-center text-white text-center py-1"
        style={{
          backgroundImage: 'url("../images/yogaback.jpg")', // IMPORTANT: Replace with your actual background image path
          backgroundAttachment: 'fixed', // This makes the background image fixed while content scrolls
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          minHeight: '60vh', // Minimum height for the section
          // Overlay to make text readable on top of the image
          backgroundBlendMode: 'multiply', // Blends with background-color
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay color
          borderRadius: '12px', // Rounded corners for the section
          margin: '5rem 0', // Margin above and below this section
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
        }}
      >
        {/* Content container inside the parallax section */}
        <div className="container px-3 py-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <h2 className="mb-2" style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'serif' }}>
                YOGALAYA
              </h2>
              <p className="lead mb-4" style={{ fontSize: '1.2rem' }}>
                Join our life-changing community of over 34,000 students.
                <br />
                Become part of our family at one of the leading accredited schools in Bali and India!
              </p>

              {/* Statistics Grid */}
              <div className="row justify-content-center text-center mt-5">
                <div className="col-6 col-md-4 mb-3">
                  <h3 className="h1 mb-1" style={{ fontWeight: 700 }}>33%</h3>
                  <p className="text-small">graduates return to sign up for new programs</p>
                </div>
                <div className="col-6 col-md-4 mb-4">
                  <h3 className="h1 mb-1" style={{ fontWeight: 700 }}>10.000 +</h3>
                  <p className="text-small">graduated online</p>
                </div>
                <div className="col-6 col-md-4 mb-4">
                  <h3 className="h1 mb-1" style={{ fontWeight: 700 }}>6.000 +</h3>
                  <p className="text-small">graduated in Bali</p>
                </div>
                <div className="col-6 col-md-4 mb-4">
                  <h3 className="h1 mb-1" style={{ fontWeight: 700 }}>18.000 +</h3>
                  <p className="text-small">graduated in India</p>
                </div>
                <div className="col-6 col-md-4 mb-4">
                  <h3 className="h1 mb-1" style={{ fontWeight: 700 }}>5 *</h3>
                  <p className="text-small">Google and Facebook</p>
                </div>
                <div className="col-6 col-md-4 mb-4">
                  <h3 className="h1 mb-1" style={{ fontWeight: 700 }}>200k +</h3>
                  <p className="text-small">Instagram & Facebook community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* NEW SECTION: ABOUT THE TRAINING - with Features and Images */}
       <div className="row justify-content-center w-100 mt-5 pt-5 mb-5">
        <div className="col-12 col-md-10 col-lg-8 px-3">
          <div className="row">
            {/* Left Column: All Text Content */}
            <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
              {/* Title and main heading for ABOUT THE TRAINING */}
              <div className="mb-5 text-center text-md-start"> {/* Adjusted text alignment for larger screens */}
                <h2 className="mb-3" style={{ fontSize: '1rem', fontWeight: 600, color: '#343a40', letterSpacing: '0.1em' }}>
                  ABOUT THE TRAINING
                </h2>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#003366', fontFamily: 'serif' }}>
                  Educational yoga retreat for
                  <br />
                  beginner to intermediate-level
                  <br />
                  in Balinese waterfalls symphony
                </h1>
              </div>

              {/* Feature 1 */}
              <div className="d-flex align-items-center mb-4">
                <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{ backgroundColor: '#e9ecef', width: '40px', height: '40px' }}>
                  {/* Icon for Yoga Alliance certificate */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#003366" className="bi bi-award-fill" viewBox="0 0 16 16">
                    <path d="M8 0L3 4 0 8l3 4 5 4 5-4 3-4-3-4zM4 6h8v1H4zM4 9h8v1H4z"/>
                  </svg>
                </div>
                <div>
                  <p className="mb-0" style={{ fontSize: '0.9rem', color: '#343a40', fontWeight: 'bold' }}>
                    Yoga Alliance accredited certificate.
                  </p>
                  <p className="mb-0" style={{ fontSize: '0.7rem', color: '#6c757d' }}>
                    (worldwide)
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="d-flex align-items-center mb-4">
                <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{ backgroundColor: '#e9ecef', width: '40px', height: '40px' }}>
                  {/* Icon for location/stay */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#003366" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                  </svg>
                </div>
                <div>
                  <p className="mb-0" style={{ fontSize: '0.9rem', color: '#343a40', fontWeight: 'bold' }}>
                    20 days/19 nights at a boutique resort among
                  </p>
                  <p className="mb-0" style={{ fontSize: '0.7rem', color: '#6c757d' }}>
                    jungles and waterfalls (ac | hot water | wi-fi)
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="d-flex align-items-center mb-4">
                <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{ backgroundColor: '#e9ecef', width: '40px', height: '40px' }}>
                  {/* Icon for food */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#003366" className="bi bi-egg-fill" viewBox="0 0 16 16">
                    <path d="M14 10a6 6 0 0 1-12 0C2 5.61 5.068 0 8 0s6 5.61 6 10z"/>
                  </svg>
                </div>
                <div>
                  <p className="mb-0" style={{ fontSize: '0.9rem', color: '#343a40', fontWeight: 'bold' }}>
                    Daily delicious ayurvedic vegan/vegetarian
                  </p>
                  <p className="mb-0" style={{ fontSize: '0.7rem', color: '#6c757d' }}>
                    meals a day (buffet style)
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="d-flex align-items-center mb-4">
                <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{ backgroundColor: '#e9ecef', width: '40px', height: '40px' }}>
                  {/* Icon for online access */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#003366" className="bi bi-laptop-fill" viewBox="0 0 16 16">
                    <path d="M2.5 11h11C14.32 11 15 11.68 15 12.5V15h.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H1V12.5C1 11.68 1.68 11 2.5 11zM2 13h12v1H2z"/>
                  </svg>
                </div>
                <div>
                  <p className="mb-0" style={{ fontSize: '0.9rem', color: '#343a40', fontWeight: 'bold' }}>
                    Lifetime access to our online educational
                  </p>
                  <p className="mb-0" style={{ fontSize: '0.7rem', color: '#6c757d' }}>
                    platform
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Images */}
            <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center mt-4 mt-md-0">
              {/* Top Image */}
              <div className="mb-3 rounded shadow" style={{ overflow: 'hidden' }}>
                {/* IMPORTANT: Replace with actual image path if available */}
                <img
                  src="../images/yoga-retreats.webp" // Placeholder for top image
                  alt="Yoga students"
                  className="img-fluid w-100"
                  style={{ borderRadius: '8px' }}
                />
              </div>
              {/* Bottom Images (side-by-side) */}
              <div className="d-flex justify-content-center w-100">
                <div className="me-2 rounded shadow" style={{ overflow: 'hidden', flex: 1 }}>
                  {/* IMPORTANT: Replace with actual image path if available */}
                  <img
                    src="../images/yoga-school.webp" // Placeholder for bottom left image
                    alt="Ayurvedic meal"
                    className="img-fluid w-100"
                    style={{ borderRadius: '8px' }}
                  />
                </div>
                <div className="ms-2 rounded shadow" style={{ overflow: 'hidden', flex: 1 }}>
                  {/* IMPORTANT: Replace with actual image path if available */}
                  <img
                    src="../images/yoga-school.webp" // Placeholder for bottom right image
                    alt="Resort room"
                    className="img-fluid w-100"
                    style={{ borderRadius: '8px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NEW SECTION: Transformational Journey with Image Background and Overlay Text */}
      <div
        className="position-relative w-100 d-flex flex-column justify-content-center align-items-center text-white text-center py-5 my-5"
        style={{
          backgroundImage: 'url("../images/lys-about-our-school.webp")', // IMPORTANT: Replace with your actual background image path
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          minHeight: '80vh', // Adjust height as needed
          backgroundBlendMode: 'multiply', // Blends with background-color
          backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark overlay for text readability
          borderRadius: '12px', // Rounded corners for the section
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
        }}
      >
        <div className="container px-3 py-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <h1 style={{ fontSize: '2.3rem', fontWeight: 700, fontFamily: 'serif', lineHeight: '1.3' }}>
                We take you on a transformational journey
                <br />
                connecting the mind, body and spirit
                <br />
                amidst of cascading waterfalls
              </h1>
            </div>
          </div>
        </div>
      </div>

       {/* NEW SECTION: Transformational Teachings */}
       <div className="row justify-content-center w-100 my-5">
        <div className="col-12 col-md-10 col-lg-8 px-3 text-center">
          <h1 className="mb-3" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#003366', fontFamily: 'serif' }}>
            Transformational teachings of Hatha Yoga, Vinyasa Yoga and Ashtanga yoga
            to give our students an extensive and comprehensive teaching experience
          </h1>
          <p className="lead mb-5" style={{ fontSize: '1rem', color: '#6c757d' }}>
            Education experience covering all key aspects of the ancient practice and philosophy of yoga
          </p>

          {/* Image Grid */}
          <div className="row justify-content-center g-3"> {/* g-3 for gap between columns/rows */}
            <div className="col-12 col-sm-6 col-md-4">
              <div className="rounded shadow" style={{ overflow: 'hidden' }}>
                <img
                  src="../images/yoga-school.webp" // Placeholder for first image - Adjusted to square
                  alt="Yoga teaching"
                  className="img-fluid w-100"
                  style={{ borderRadius: '8px', height: '250px', objectFit: 'cover' }} // Set fixed height and object-fit
                />
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div className="rounded shadow" style={{ overflow: 'hidden' }}>
                <img
                  src="../images/yoga-retreat-environment.jpg" // Placeholder for second image - Adjusted to square
                  alt="Yoga practice"
                  className="img-fluid w-100"
                  style={{ borderRadius: '8px', height: '250px', objectFit: 'cover' }} // Set fixed height and object-fit
                />
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div className="rounded shadow" style={{ overflow: 'hidden' }}>
                <img
                  src="../images/yoga-retreats.webp" // Placeholder for third image - Adjusted to square
                  alt="Yoga experience"
                  className="img-fluid w-100"
                  style={{ borderRadius: '8px', height: '250px', objectFit: 'cover' }} // Set fixed height and object-fit
                />
              </div>
            </div>
          </div>
        </div>
      </div>
          {/* NEW SECTION: 200-h Yoga Teacher Training Studying program */}
      <div className="row justify-content-center w-100 my-5">
        <div className="col-12 col-md-10 col-lg-8 px-3 text-center">
          <h2 className="mb-3" style={{ fontSize: '1.2rem', fontWeight: 600, color: '#343a40', letterSpacing: '0.1em' }}>
            200-h Yoga Teacher Training
            <br />
            Studying program
          </h2>
          <p className="lead mb-4" style={{ fontSize: '1.2rem', color: '#6c757d' }}>
            Multi style YTT covers all key aspects of the ancient practice and philosophy of yoga
            <br />
            Learn from globally recognized gurus with decennial teaching experience
          </p>

          {/* Program Modules Grid */}
          <div className="row justify-content-center g-2"> {/* g-4 for gap between modules */}
            {/* Module: Asana */}
            <div className="col-12 col-sm-6 col-md-3">
              <div className="card h-100 rounded shadow border-0" style={{ backgroundColor: '#ffffff' }}>
                <div className="card-body d-flex flex-column align-items-center text-center p-4">
                  {/* Icon/Image Placeholder for Asana */}
                  <img
                    src="https://placehold.co/80x80/e9ecef/003366?text=🧘" // Placeholder for Asana icon
                    alt="Asana Icon"
                    className="mb-3 rounded-circle"
                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                  />
                  <h3 className="card-title mb-2" style={{ fontSize: '1.3rem', fontWeight: 700, color: '#003366' }}>
                    Asana
                  </h3>
                  <ul className="list-unstyled text-start mb-0" style={{ fontSize: '0.85rem', color: '#6c757d' }}>
                    <li>Variations in standing and seated postures</li>
                    <li>Forward bends and inversions</li>
                    <li>Arm balances</li>
                    <li>Backbends</li>
                    <li>Twisting</li>
                    <li>Seated</li>
                    <li>Spine</li>
                    <li>Supine</li>
                    <li>Hatha, Vinyasa, and Ashtanga Primary Series</li>
                    <li>Sanskrit and English names</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module: Teaching Methodology */}
            <div className="col-12 col-sm-6 col-md-3">
              <div className="card h-100 rounded shadow border-0" style={{ backgroundColor: '#ffffff' }}>
                <div className="card-body d-flex flex-column align-items-center text-center p-4">
                  {/* Icon/Image Placeholder for Teaching Methodology */}
                  <img
                    src="https://placehold.co/80x80/e9ecef/003366?text=📚" // Placeholder for Teaching icon
                    alt="Teaching Methodology Icon"
                    className="mb-3 rounded-circle"
                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                  />
                  <h3 className="card-title mb-2" style={{ fontSize: '1.3rem', fontWeight: 700, color: '#003366' }}>
                    Teaching Methodology
                  </h3>
                  <ul className="list-unstyled text-start mb-0" style={{ fontSize: '0.85rem', color: '#6c757d' }}>
                    <li>How to design and sequence a class</li>
                    <li>Adjustment Techniques</li>
                    <li>Dos and Don'ts and Verbal cues to support students</li>
                    <li>Posture Alignment and Potential Risks of Yoga Postures</li>
                    <li>Teaching Practice</li>
                    <li>Workshops</li>
                    <li>Pose Families</li>
                    <li>Practicum with Feedback</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module: Yoga Anatomy */}
            <div className="col-12 col-sm-6 col-md-3">
              <div className="card h-100 rounded shadow border-0" style={{ backgroundColor: '#ffffff' }}>
                <div className="card-body d-flex flex-column align-items-center text-center p-4">
                  {/* Icon/Image Placeholder for Yoga Anatomy */}
                  <img
                    src="https://placehold.co/80x80/e9ecef/003366?text=🦴" // Placeholder for Anatomy icon
                    alt="Yoga Anatomy Icon"
                    className="mb-3 rounded-circle"
                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                  />
                  <h3 className="card-title mb-2" style={{ fontSize: '1.3rem', fontWeight: 700, color: '#003366' }}>
                    Yoga Anatomy
                  </h3>
                  <ul className="list-unstyled text-start mb-0" style={{ fontSize: '0.85rem', color: '#6c757d' }}>
                    <li>Structure of the body through organs and muscle</li>
                    <li>How to find Anatomy to support poses</li>
                    <li>Yoga effects on the body</li>
                    <li>Injuries</li>
                    <li>Contraindications</li>
                    <li>Adjusting for Injury</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module: Pranayama */}
            <div className="col-12 col-sm-6 col-md-3">
              <div className="card h-100 rounded shadow border-0" style={{ backgroundColor: '#ffffff' }}>
                <div className="card-body d-flex flex-column align-items-center text-center p-4">
                  {/* Icon/Image Placeholder for Pranayama */}
                  <img
                    src="https://placehold.co/80x80/e9ecef/003366?text=🌬️" // Placeholder for Pranayama icon
                    alt="Pranayama Icon"
                    className="mb-3 rounded-circle"
                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                  />
                  <h3 className="card-title mb-2" style={{ fontSize: '1.3rem', fontWeight: 700, color: '#003366' }}>
                    Pranayama
                  </h3>
                  <ul className="list-unstyled text-start mb-0" style={{ fontSize: '0.85rem', color: '#6c757d' }}>
                    <li>Adding Pranayama into a class</li>
                    <li>Yoga Breathing steps</li>
                    <li>Ujjayi Bandha</li>
                    <li>Bhastrika</li>
                    <li>Kapalabhati</li>
                    <li>Nadi Shodhana</li>
                    <li>Surya Bheda</li>
                    <li>Chandra Bheda</li>
                    <li>Sheetali</li>
                    <li>Sheetkari</li>
                    <li>Benefits and Contraindications of Pranayama</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Row for Meditation, Philosophy, Shatkarma, Additional Topic */}
            <div className="col-12 mt-4"> {/* Add margin top to separate rows */}
              <div className="row justify-content-center g-2">
                {/* Module: Meditation */}
                <div className="col-12 col-sm-6 col-md-3">
                  <div className="card h-100 rounded shadow border-0" style={{ backgroundColor: '#ffffff' }}>
                    <div className="card-body d-flex flex-column align-items-center text-center p-4">
                      {/* Icon/Image Placeholder for Meditation */}
                      <img
                        src="https://placehold.co/80x80/e9ecef/003366?text=🧘‍♀️" // Placeholder for Meditation icon
                        alt="Meditation Icon"
                        className="mb-3 rounded-circle"
                        style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                      />
                      <h3 className="card-title mb-2" style={{ fontSize: '1.3rem', fontWeight: 700, color: '#003366' }}>
                        Meditation
                      </h3>
                      <ul className="list-unstyled text-start mb-0" style={{ fontSize: '0.85rem', color: '#6c757d' }}>
                        <li>Introduction to Meditation</li>
                        <li>Types of Meditation</li>
                        <li>Mindfulness</li>
                        <li>Breathing techniques</li>
                        <li>Walking Meditation</li>
                        <li>Sattva Nada Board</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Module: Philosophy */}
                <div className="col-12 col-sm-6 col-md-3">
                  <div className="card h-100 rounded shadow border-0" style={{ backgroundColor: '#ffffff' }}>
                    <div className="card-body d-flex flex-column align-items-center text-center p-4">
                      {/* Icon/Image Placeholder for Philosophy */}
                      <img
                        src="https://placehold.co/80x80/e9ecef/003366?text=💭" // Placeholder for Philosophy icon
                        alt="Philosophy Icon"
                        className="mb-3 rounded-circle"
                        style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                      />
                      <h3 className="card-title mb-2" style={{ fontSize: '1.3rem', fontWeight: 700, color: '#003366' }}>
                        Philosophy
                      </h3>
                      <ul className="list-unstyled text-start mb-0" style={{ fontSize: '0.85rem', color: '#6c757d' }}>
                        <li>Patanjali's Yoga Sutras</li>
                        <li>Chakras and Energy Systems</li>
                        <li>Jala Neti</li>
                        <li>Sutra Neti</li>
                        <li>Trataka</li>
                        <li>Agnisar</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Module: Shatkarma */}
                <div className="col-12 col-sm-6 col-md-3">
                  <div className="card h-100 rounded shadow border-0" style={{ backgroundColor: '#ffffff' }}>
                    <div className="card-body d-flex flex-column align-items-center text-center p-4">
                      {/* Icon/Image Placeholder for Shatkarma */}
                      <img
                        src="https://placehold.co/80x80/e9ecef/003366?text=💧" // Placeholder for Shatkarma icon
                        alt="Shatkarma Icon"
                        className="mb-3 rounded-circle"
                        style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                      />
                      <h3 className="card-title mb-2" style={{ fontSize: '1.3rem', fontWeight: 700, color: '#003366' }}>
                        Shatkarma
                      </h3>
                      <ul className="list-unstyled text-start mb-0" style={{ fontSize: '0.85rem', color: '#6c757d' }}>
                        <li>Jala Neti</li>
                        <li>Sutra Neti</li>
                        <li>Trataka</li>
                        <li>Agnisar</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Module: Additional Topic */}
                <div className="col-12 col-sm-6 col-md-3">
                  <div className="card h-100 rounded shadow border-0" style={{ backgroundColor: '#ffffff' }}>
                    <div className="card-body d-flex flex-column align-items-center text-center p-4">
                      {/* Icon/Image Placeholder for Additional Topic */}
                      <img
                        src="https://placehold.co/80x80/e9ecef/003366?text=➕" // Placeholder for Additional Topic icon
                        alt="Additional Topic Icon"
                        className="mb-3 rounded-circle"
                        style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                      />
                      <h3 className="card-title mb-2" style={{ fontSize: '1.3rem', fontWeight: 700, color: '#003366' }}>
                        Additional topic
                      </h3>
                      <ul className="list-unstyled text-start mb-0" style={{ fontSize: '0.85rem', color: '#6c757d' }}>
                        <li>Yoga Philosophy / Yoga Lifestyle</li>
                        <li>Yoga Nidra (Psychic Sleep)</li>
                        <li>Yoga Bandhas (Energy Locks)</li>
                        <li>Mudra (Yogic Gestures)</li>
                        <li>Chantation of Sacred Sound (Mantra Chanting)</li>
                        <li>English and Sanskrit names</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    

      {/* NEW SECTION: One More Free Online Course */}
      <div className="row justify-content-center w-100 my-5">
        <div className="col-12 col-md-10 col-lg-8 px-3">
          <div className="text-center mb-5">
            <h3 className="mb-2" style={{ fontSize: '1rem', fontWeight: 600, color: '#343a40', letterSpacing: '0.1em' }}>
              ONE MORE FREE ONLINE COURSE
            </h3>
            <h1 className="mb-4" style={{ fontSize: '2.5rem', fontWeight: 700, color: '#003366', fontFamily: 'serif' }}>
              200-hour Online YTT
            </h1>
            <p className="lead" style={{ fontSize: '1.2rem', color: '#6c757d' }}>
              Lifetime access to our own online educational platform
              <br />
              Start preparing for your trip today and revisit topics post-course!
            </p>
          </div>

          <div className="row align-items-center">
            {/* Left Column: Features */}
            <div className="col-12 col-md-6 d-flex flex-column align-items-center align-items-md-start">
              {/* Feature 1 */}
              <div className="d-flex align-items-center mb-4">
                <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{ backgroundColor: '#e9ecef', width: '40px', height: '40px' }}>
                  {/* Play icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#003366" className="bi bi-play-fill" viewBox="0 0 16 16">
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                  </svg>
                </div>
                <p className="mb-0 text-start" style={{ fontSize: '0.95rem', color: '#343a40' }}>
                  <strong style={{ color: '#003366' }}>200-hour Online YTT - 153 videos</strong> - recorded lessons from Bali on our e-platform. Education anytime, anywhere.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="d-flex align-items-center mb-4">
                <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{ backgroundColor: '#e9ecef', width: '40px', height: '40px' }}>
                  {/* Document icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#003366" className="bi bi-journal-text" viewBox="0 0 16 16">
                    <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3z"/>
                  </svg>
                </div>
                <p className="mb-0 text-start" style={{ fontSize: '0.95rem', color: '#343a40' }}>
                  Educational materials, additional practice literature
                </p>
              </div>

              {/* Feature 3 */}
              <div className="d-flex align-items-center mb-4">
                <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{ backgroundColor: '#e9ecef', width: '40px', height: '40px' }}>
                  {/* Checklist icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#003366" className="bi bi-list-check" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zM3.854 6.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zM3.854 10.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 11.293l1.146-1.147a.5.5 0 0 1 .708 0z"/>
                  </svg>
                </div>
                <p className="mb-0 text-start" style={{ fontSize: '0.95rem', color: '#343a40' }}>
                  Hometasks, checklists, quizzes to check and strengthen knowledge
                </p>
              </div>
            </div>

            {/* Right Column: Image/Video Placeholder */}
            <div className="col-12 col-md-6 d-flex align-items-center justify-content-center mt-4 mt-md-0">
              <div className="rounded shadow" style={{ overflow: 'hidden' }}>
                <img
                  src="../images/yogaback.jpg" // IMPORTANT: Replace with your actual image path
                  alt="Online Yoga Course"
                  className="img-fluid w-100"
                  style={{ borderRadius: '8px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* NEW SECTION: Transformational Journey with Image Background and Overlay Text */}
      <div
        className="position-relative w-100 d-flex flex-column justify-content-center align-items-center text-white text-center py-5 my-5"
        style={{
          backgroundImage: 'url("../images/Guide-kumbh-Mela.jpg")', // IMPORTANT: Replace with your actual background image path
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          minHeight: '80vh', // Adjust height as needed
          backgroundBlendMode: 'multiply', // Blends with background-color
          backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark overlay for text readability
          borderRadius: '12px', // Rounded corners for the section
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
        }}
      >
        <div className="container px-3 py-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <h4 style={{ fontSize: '2rem', fontWeight: 700, fontFamily: 'serif', lineHeight: '1.6' }}>
              AMERTHAM
                <br />
                ACCOMMODATION
                <br />
                Yogalaya amidst jungle paradise in Bali
              </h4>
            </div>
          </div>
        </div>
      </div>

      <section className="relative py-12 bg-gray-50 overflow-hidden lg:pb-28">
      {/* Container for content, centered with auto margins and relative positioning for z-index. */}
      <div className="container mx-auto text-center relative z-10 px-4">
        {/* Badges container: uses flexbox for horizontal layout, centering, and spacing. */}
        <div className="flex justify-center mb-8 space-x-6">
          {/* Each badge image: set width, height, rounded corners, object-fit for scaling, and shadow. */}
          <img src="https://placehold.co/80x80/D1E7DD/0F5132?text=RYS+200" alt="RYS 200 Badge" className="w-20 h-20 rounded-full object-cover shadow-md" />
          <img src="https://placehold.co/80x80/D1E7DD/0F5132?text=RYS+300" alt="RYS 300 Badge" className="w-20 h-20 rounded-full object-cover shadow-md" />
          <img src="https://placehold.co/80x80/D1E7DD/0F5132?text=RYS+500" alt="RYS 500 Badge" className="w-20 h-20 rounded-full object-cover shadow-md" />
        </div>

        {/* Main Text: defines font size, weight, color, line height, max width, and auto margins for centering. */}
        <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800 leading-tight mb-10 max-w-3xl mx-auto px-3">
          After completing the course and passing the exam, you will receive Yoga Alliance International accreditation
        </h2>

        {/* Group Photo Container: provides padding, white background, rounded corners, shadow, and centers the image. */}
        <div className="relative p-5 bg-white rounded-xl shadow-xl max-w-4xl mx-auto overflow-hidden">
          {/* Group Photo: full width, auto height, and rounded corners. */}
          <img src="../images/yoga-wear.jpg" alt="Group of people holding certificates" className="w-full h-auto rounded-lg" />
        </div>

        {/* Brand Logos/Text at bottom right: positioned absolutely on larger screens, static and centered on smaller screens. */}
        <div className="absolute bottom-5 right-5 text-gray-600 text-sm font-medium tracking-wide z-20
                        md:static md:mt-8 md:text-center md:right-auto md:bottom-auto">
          {/* Individual brand text spans, block on small screens, inline with margin on medium screens and up. */}
          <span className="block md:inline">YOGALLAYA</span>
          <span className="block md:inline md:ml-2">YOGALLAYA</span>
        </div>

      </div>
    </section>
       {/* Chat bubble placeholder */}
          <div className="position-fixed bottom-0 end-0 m-4">
            <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ backgroundColor: '#003366', width: '60px', height: '60px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-chat-dots-fill" viewBox="0 0 16 16">
                <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.186.838-1.777 1.254a2 2 0 0 1-2.542.064c-.583-.433-1.285-.817-1.956-1.217a10.022 10.022 0 0 1-.41-.244A8.998 8.998 0 0 1 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m2 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m2 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0"/>
              </svg>
            </div>
          </div>
        </div>
         <div className="container text-center my-4">
        <h1 className="mb-4 text-primary">Explore Our Features</h1>
        <CustomCarousel>
          <div className="carousel-item-custom">
            <img src="../images/Guide-kumbh-Mela.jpg" className="img-fluid" alt="Feature One" />
            <h3 className="mt-3 text-secondary">Our Gallary</h3>
            <p className="text-muted">Learn from globally recognized gurus with decennial teaching experience.</p>
          </div>
          <div className="carousel-item-custom">
            <img src="../images/yogaback.jpg" className="img-fluid" alt="Feature Two" />
            <h3 className="mt-3 text-secondary">Our Gallary</h3>
            <p className="text-muted">Learn from globally recognized gurus with decennial teaching experience.</p>
          </div>
          <div className="carousel-item-custom">
            <img src="../images/service_img1.jpg" className="img-fluid" alt="Feature Three" />
            <h3 className="mt-3 text-secondary">Our Gallary</h3>
            <p className="text-muted">Learn from globally recognized gurus with decennial teaching experience.</p>
          </div>
          <div className="carousel-item-custom">
            <img src="../images/yogaback.jpg" className="img-fluid" alt="Feature Four" />
            <h3 className="mt-3 text-secondary">Our Gallary</h3>
            <p className="text-muted">Learn from globally recognized gurus with decennial teaching experience</p>
          </div>
        </CustomCarousel>
      </div>
    </>
  );
}

// CustomCarousel component for handling carousel logic
const CustomCarousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = React.Children.count(children);
  const carouselRef = useRef(null); // Ref for the carousel slides wrapper

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000); // Autoplay speed in milliseconds (e.g., 3000ms = 3 seconds)
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [totalSlides]);

  // Handle previous slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  // Handle next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  // Handle dot click
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container-custom">
      <div
        className="carousel-slides-wrapper"
        ref={carouselRef}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {/* Render each child wrapped in a slide div */}
        {React.Children.map(children, (child, index) => (
          <div key={index} className="carousel-slide-inner">
            {child}
          </div>
        ))}
      </div>

      {/* Previous button */}
      <a className="carousel-control-prev-custom" onClick={handlePrev}>
        <span className="fas fa-chevron-left"></span>
      </a>

      {/* Next button */}
      <a className="carousel-control-next-custom" onClick={handleNext}>
        <span className="fas fa-chevron-right"></span>
      </a>

      {/* Navigation dots */}
      <ol className="carousel-indicators-custom">
        {[...Array(totalSlides)].map((_, index) => (
          <li
            key={index}
            className={index === currentIndex ? 'active' : ''}
            onClick={() => handleDotClick(index)}
          ></li>
        ))}
      </ol>
    </div>
      );
    }

export default YogaTrainingSection;