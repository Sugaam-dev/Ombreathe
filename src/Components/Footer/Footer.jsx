




import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faChevronUp
} from "@fortawesome/free-solid-svg-icons";
import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";
import logo from '../../images/logo4.png';
import L300 from '../../images/cirtificats/300.png'
// Import certification logos (you'll need to add these to your images folder)
import yoga from '../../images/cirtificats/yoga.png';
import Two from '../../images/cirtificats/200.png';
import L500 from '../../images/cirtificats/500.webp'
// import ryt200Logo from '../../images/ryt-200-logo.png';
// import ryt300Logo from '../../images/ryt-300-logo.png';
// import ryt500Logo from '../../images/ryt-500-logo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Main Footer */}
      <footer className="text-light py-5" style={{ backgroundColor: '#16769E' }}>
        <div className="container">
          <div className="row g-4">
            {/* Brand Section */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-brand">
                <img 
                  src={logo} 
                  alt="Yogalayaa Logo" 
                  className="mb-3"
                  style={{ maxHeight: '90px', width: 'auto' }}
                />
                <p className="footer-description mb-4">
                  Transform your life through authentic yoga practices. We offer comprehensive 
                  programs designed to help you achieve wellness goals and inner peace.
                </p>
                
                {/* Social Media Links */}
                <div className="social-links">
                  <h6 className="text-uppercase fw-bold mb-3">Follow Us</h6>
                  <div className="d-flex gap-2">
                    <a 
                      href="https://facebook.com/yogalayaa" 
                      className="btn btn-outline-light btn-sm rounded-circle p-2"
                      aria-label="Facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebookF />
                    </a>
                    <a 
                      href="https://instagram.com/yogalayaa" 
                      className="btn btn-outline-light btn-sm rounded-circle p-2"
                      aria-label="Instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram />
                    </a>
                    <a 
                      href="https://youtube.com/@yogalayaa" 
                      className="btn btn-outline-light btn-sm rounded-circle p-2"
                      aria-label="YouTube"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaYoutube />
                    </a>
                    <a 
                      href="https://twitter.com/yogalayaa" 
                      className="btn btn-outline-light btn-sm rounded-circle p-2"
                      aria-label="Twitter"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaXTwitter />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6">
              <h6 className="text-uppercase fw-bold mb-3">Quick Links</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/" className="footer-link">
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/about" className="footer-link">
                    About Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/services" className="footer-link">
                    Services
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="" className="footer-link">
                    Classes
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/contact" className="footer-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Programs */}
            <div className="col-lg-2 col-md-6">
              <h6 className="text-uppercase fw-bold mb-3">Programs</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/service" className="footer-link">
                    Teacher Training
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/service" className="footer-link">
                    Workshops
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/service" className="footer-link">
                    Retreats
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/service" className="footer-link">
                    Online Classes
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/service" className="footer-link">
                    Private Sessions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-lg-4 col-md-6">
              <h6 className="text-uppercase fw-bold mb-3">Contact Info</h6>
              <ul className="list-unstyled contact-info">
                <li className="mb-3 d-flex align-items-start">
                  <FontAwesomeIcon 
                    icon={faPhone} 
                    className="me-3 mt-1 flex-shrink-0" 
                    style={{ color: '#42A5F6' }} 
                  />
                  <div>
                    <p className="mb-1">
                      <a 
                        href="tel:+917829997007" 
                        className="footer-link"
                      >
                        +91-7829997007
                      </a>
                    </p>
                    <small className="contact-hours">Mon - Sat, 6:00 AM - 8:00 PM</small>
                  </div>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <FontAwesomeIcon 
                    icon={faEnvelope} 
                    className="me-3 mt-1 flex-shrink-0" 
                    style={{ color: '#42A5F6' }} 
                  />
                  <div>
                    <a 
                      href="mailto:info@yogalayaa.com" 
                      className="footer-link"
                    >
                      info@yogalayaa.com
                    </a>
                  </div>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <FontAwesomeIcon 
                    icon={faLocationDot} 
                    className="me-3 mt-1 flex-shrink-0" 
                    style={{ color: '#42A5F6' }} 
                  />
                  <div>
                    <address className="mb-0 footer-address">
                    1972, 22nd Main Rd, Vanganahalli, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102
                    </address>
                  </div>
                </li>
              </ul>

              {/* Certification Logos */}
              <div className="certifications mt-4">
                <h6 className="text-uppercase fw-bold mb-3">Certified By</h6>
                <div className="d-flex flex-wrap gap-3 align-items-center">
                  {/* Yoga Alliance Logo */}
                  <div className="cert-logo">
                    <img 
                      src={yoga} 
                      alt="Yoga Alliance Certified" 
                      className=""
                      style={{ maxHeight: '100px' }}
                      title="Yoga Alliance Certified School"
                    />
                  </div>
                  {/* RYT 200 */}
                  <div className="cert-logo">
                    <img 
                      src={Two}
                      alt="RYT 200 Certified" 
                      className=""
                      style={{ maxHeight: '100px' }}
                      title="Registered Yoga Teacher 200 Hours"
                    />
                  </div>
                  {/* RYT 300 */}
                  <div className="cert-logo">
                    <img 
                      src={L300}
                      alt="RYT 300 Certified" 
                      className=""
                      style={{ maxHeight: '100px' }}
                      title="Registered Yoga Teacher 300 Hours"
                    />
                  </div>
                  {/* RYT 500 */}
                  <div className="cert-logo">
                    <img 
                      src={L500}
                      alt="RYT 500 Certified" 
                      className=""
                      style={{ maxHeight: '100px' }}
                      title="Registered Yoga Teacher 500 Hours"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Section */}
      <div className="py-3" style={{ backgroundColor: '#1a252f' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="mb-0 copyright-text-white">
                © {new Date().getFullYear()} Yogalayaa. All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="mb-0 copyright-text-white">
                Designed by <a href="https://sugaam.in" className="footer-link-copyright-white">Sugaam.in</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="btn position-fixed bottom-0 end-0 m-4 rounded-circle shadow-lg scroll-top-btn"
        style={{ 
          width: '50px', 
          height: '50px',
          zIndex: 1000,
          transition: 'all 0.3s ease',
          backgroundColor: '#42A5F6',
          borderColor: '#42A5F6',
          color: 'white'
        }}
        aria-label="Scroll to top"
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </button>

      {/* Custom Styles */}
      <style jsx>{`
        .footer-description {
          color: #000 !important;
          font-weight: 500;
          line-height: 1.6;
        }
        
        .footer-address {
          color: #000 !important;
          font-weight: 500;
          line-height: 1.5;
        }
        
        .contact-hours {
          color: #000 !important;
          font-weight: 500;
          opacity: 0.8;
        }
        
        .footer-link {
          color: #000 !important;
          text-decoration: none !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-weight: 500;
          position: relative;
          display: inline-block;
        }
        
        .footer-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background: linear-gradient(90deg, #42A5F6, #2E8AD4);
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .footer-link:hover {
          color: #42A5F6 !important;
          transform: translateX(5px);
        }
        
        .footer-link:hover::after {
          width: 100%;
        }
        
        .footer-link-copyright {
          color: #000 !important;
          text-decoration: none !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-weight: 500;
          position: relative;
          display: inline-block;
        }
        
        .footer-link-copyright::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background: linear-gradient(90deg, #42A5F6, #2E8AD4);
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .footer-link-copyright:hover {
          color: #42A5F6 !important;
          transform: translateX(5px);
        }
        
        .footer-link-copyright:hover::after {
          width: 100%;
        }
        
        .copyright-text-white {
          color: #ffffff !important;
          font-weight: 400;
          opacity: 0.9;
        }
        
        .footer-link-copyright-white {
          color: #42A5F6 !important;
          text-decoration: none !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          display: inline-block;
        }
        
        .footer-link-copyright-white::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background: linear-gradient(90deg, #ffffff, #f0f0f0);
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .footer-link-copyright-white:hover {
          color: #ffffff !important;
          transform: translateX(3px);
        }
        
        .footer-link-copyright-white:hover::after {
          width: 100%;
        }
        
        .bg-darker {
          background-color: #1a252f !important;
        }
        
        .social-links .btn {
          border: 2px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .social-links .btn:hover {
          background-color: #42A5F6;
          border-color: #42A5F6;
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 25px rgba(66, 165, 246, 0.3);
        }
        
        .scroll-top-btn:hover {
          transform: translateY(-5px) rotate(5deg);
          background-color: #2E8AD4 !important;
          border-color: #2E8AD4 !important;
          box-shadow: 0 10px 30px rgba(66, 165, 246, 0.4) !important;
        }
        
        .cert-logo {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .cert-logo:hover {
          transform: translateY(-5px) scale(1.1);
        }
        
        .cert-logo img {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid transparent;
        }
        
        .cert-logo:hover img {
          border-color: #42A5F6;
          box-shadow: 0 5px 15px rgba(66, 165, 246, 0.2);
        }
        
        @media (max-width: 768px) {
          .certifications .d-flex {
            justify-content: center;
          }
          
          .social-links .d-flex {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;