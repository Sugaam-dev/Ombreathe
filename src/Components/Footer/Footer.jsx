import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faChevronUp
} from "@fortawesome/free-solid-svg-icons";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa6";
import logo from '../../images/logo4.png';
import yoga from '../../images/cirtificats/yoga.png';
import Two from '../../images/cirtificats/200.png';
import L500 from '../../images/cirtificats/500.webp'
import L300 from '../../images/cirtificats/300yy.png'
import y from '../../images/cirtificats/YACEP.png'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const openWhatsApp = () => {
    const phoneNumber = "917483987568"; // Your WhatsApp number (without + and spaces)
    const message = "Hello! I'm interested in learning more about your yoga programs.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Main Footer */}
      <footer className="text-light py-5" style={{ backgroundColor: '#16769E' }}>
        <div className="container">
          <div className="row g-4">
            {/* Brand Section */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-brand pe-lg-4" style={{borderRight: '1px solid rgba(255,255,255,0.2)', minHeight: '300px'}}>
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
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6">
              <div className="px-lg-3" style={{borderRight: '1px solid rgba(255,255,255,0.2)', minHeight: '300px'}}>
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
                      Programs
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/contact" className="footer-link">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-lg-6 col-md-12">
              <div className="ps-lg-4">
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
                          href="tel:+917483987568" 
                          className="footer-link"
                        >
                          +91-7483987568
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
                        href="mailto:yogalayaaofficial@gmail.com" 
                        className="footer-link"
                      >
                        yogalayaaofficial@gmail.com
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
                    <div className="cert-logo">
                      <img 
                        src={yoga} 
                        alt="Yoga Alliance Certified" 
                        style={{ maxHeight: '100px' }}
                        title="Yoga Alliance Certified School"
                      />
                    </div>
                    <div className="cert-logo">
                      <img 
                        src={Two}
                        alt="RYT 200 Certified" 
                        style={{ maxHeight: '100px' }}
                        title="Registered Yoga Teacher 200 Hours"
                      />
                    </div>
                    <div className="cert-logo">
                      <img 
                        src={L300}
                        alt="RYT 300 Certified" 
                        style={{ maxHeight: '100px' }}
                        title="Registered Yoga Teacher 300 Hours"
                      />
                    </div>
                    <div className="cert-logo">
                      <img 
                        src={L500}
                        alt="RYT 500 Certified" 
                        style={{ maxHeight: '100px' }}
                        title="Registered Yoga Teacher 500 Hours"
                      />
                    </div>
                    <div className="cert-logo">
                      <img 
                        src={y}
                        alt="YACEP Certified" 
                        style={{ maxHeight: '100px' }}
                        title="Yoga Alliance Continuing Education Provider"
                      />
                    </div>
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
                Designed by <a href="https://www.pmrgsolution.com/" className="footer-link-copyright-white">PMRG Solution</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <button
        onClick={openWhatsApp}
        className="btn position-fixed whatsapp-btn rounded-circle shadow-lg"
        style={{ 
          width: '60px', 
          height: '60px',
          bottom: '20px',
          left: '20px',
          zIndex: 1000,
          transition: 'all 0.3s ease',
          backgroundColor: '#25D366',
          borderColor: '#25D366',
          color: 'white',
          fontSize: '24px'
        }}
        aria-label="Contact us on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <FaWhatsapp />
      </button>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="btn position-fixed scroll-top-btn rounded-circle shadow-lg"
        style={{ 
          width: '50px', 
          height: '50px',
          bottom: '20px',
          right: '20px',
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
        
        .whatsapp-btn:hover {
          transform: translateY(-5px) scale(1.1);
          background-color: #128C7E !important;
          border-color: #128C7E !important;
          box-shadow: 0 10px 30px rgba(37, 211, 102, 0.6) !important;
          animation: whatsapp-hover 0.6s ease-in-out infinite alternate;
        }
        
        @keyframes whatsapp-hover {
          0% {
            transform: translateY(-5px) scale(1.1) rotate(-2deg);
          }
          100% {
            transform: translateY(-5px) scale(1.1) rotate(2deg);
          }
        }
        
        .whatsapp-btn {
          animation: whatsapp-blink 1.5s infinite ease-in-out, pulse 3s infinite;
          position: relative;
          overflow: hidden;
        }
        
        .whatsapp-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: shimmer 2s infinite;
        }
        
        @keyframes whatsapp-blink {
          0%, 50% { 
            opacity: 1; 
            transform: scale(1);
          }
          25% { 
            opacity: 0.7; 
            transform: scale(1.05);
          }
        }
        
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }
        
        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
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
          border-radius: 8px;
        }
        
        .cert-logo:hover img {
          border-color: #42A5F6;
          box-shadow: 0 5px 15px rgba(66, 165, 246, 0.2);
        }
        
        @media (max-width: 991px) {
          .footer-brand, .px-lg-3 {
            border-right: none !important;
            margin-right: 0 !important;
            margin-bottom: 30px;
          }
        }
        
        @media (max-width: 768px) {
          .certifications .d-flex {
            justify-content: center;
          }
          
          .social-links .d-flex {
            justify-content: center;
          }
          
          .whatsapp-btn {
            width: 50px !important;
            height: 50px !important;
            font-size: 20px !important;
            bottom: 15px !important;
            left: 15px !important;
          }
          
          .scroll-top-btn {
            bottom: 15px !important;
            right: 15px !important;
          }
        }
        
        @media (max-width: 480px) {
          .whatsapp-btn {
            bottom: 80px !important;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;