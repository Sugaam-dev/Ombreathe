import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import logo from '../../images/yogalayaaLogo.png';
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


 const navigate=useNavigate()

  const contact=()=>{
    navigate('/contact')
  }

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll);
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Add Bootstrap CSS and custom styles */}
      <style jsx>{`
        /* Global Styles */
        body {
          padding-top: 80px !important;
        }

        /* Custom Navbar Styles */
        .custom-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background-color: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          min-height: 80px;
        }

        .custom-navbar.navbar-scrolled {
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        .custom-navbar .navbar-brand {
          padding: 0;
        }

        .navbar-logo {
          height: 80px;
          width: auto;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .navbar-logo:hover {
          transform: scale(1.05);
        }

        /* Desktop Navigation */
        .navbar-nav .nav-link {
          color: #374151 !important;
          font-weight: 500;
          font-size: 1.2rem;
          padding: 0.5rem 1.25rem !important;
          transition: all 0.3s ease;
          position: relative;
          border-bottom: 2px solid transparent;
          margin: 0 0.25rem;
        }

        .navbar-nav .nav-link:hover {
          color: #4F46E5 !important;
        }

        .navbar-nav .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background-color: #4F46E5;
          transition: width 0.3s ease;
        }

        .navbar-nav .nav-link:hover::after {
          width: calc(100% - 2.5rem);
        }

        .navbar-nav .nav-link.active {
          color: #4F46E5 !important;
          font-weight: 600;
        }

        .navbar-nav .nav-link.active::after {
          width: calc(100% - 2.5rem);
        }

        /* Book Appointment Button */
        .book-appointment-btn {
          background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%);
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(79, 70, 229, 0.3);
          position: relative;
          overflow: hidden;
          animation: pulse-glow 3s infinite;
        }

        .book-appointment-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s;
        }

        .book-appointment-btn:hover::before {
          left: 100%;
        }

        .book-appointment-btn:hover {
          background: linear-gradient(135deg, #4338CA 0%, #6D28D9 100%);
          box-shadow: 0 8px 25px rgba(79, 70, 229, 0.4);
          transform: translateY(-2px);
        }

        .book-appointment-btn:active {
          transform: translateY(0);
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 4px 15px rgba(79, 70, 229, 0.3), 0 0 0 0 rgba(79, 70, 229, 0.7);
          }
          50% {
            box-shadow: 0 8px 25px rgba(79, 70, 229, 0.5), 0 0 0 8px rgba(79, 70, 229, 0);
          }
        }

        /* Custom Toggler */
        .navbar-toggler {
          border: none;
          padding: 8px;
          border-radius: 6px;
          transition: all 0.2s ease;
        }

        .navbar-toggler:focus {
          box-shadow: none;
        }

        .navbar-toggler:hover {
          background-color: #EEF2FF;
        }

        .navbar-toggler .toggler-icon {
          font-size: 1.4rem;
          color: #374151;
          transition: color 0.2s ease;
        }

        .navbar-toggler:hover .toggler-icon {
          color: #4F46E5;
        }

        /* Mobile Styles */
        @media (max-width: 991.98px) {
          body {
            padding-top: 70px !important;
          }

          .custom-navbar {
            min-height: 70px;
          }

          .navbar-logo {
            height: 65px;
          }

          .navbar-collapse {
            position: fixed;
            top: 0;
            right: ${isMenuOpen ? '0' : '-100%'};
            width: 320px;
            height: 100vh;
            background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
            padding: 100px 0 40px 0;
            transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: -15px 0 40px rgba(0, 0, 0, 0.1);
            border-left: 1px solid #e2e8f0;
            overflow-y: auto;
            z-index: 1050;
          }

          .navbar-nav {
            flex-direction: column;
            width: 100%;
          }

          .navbar-nav .nav-item {
            width: 100%;
            border-bottom: 1px solid #f1f5f9;
          }

          .navbar-nav .nav-link {
            display: block;
            width: 100%;
            color: #374151 !important;
            font-size: 1.1rem;
            font-weight: 500;
            padding: 20px 30px !important;
            border-radius: 0;
            transition: all 0.3s ease;
            position: relative;
            border-bottom: none;
            border-left: 4px solid transparent;
            margin: 0;
          }

          .navbar-nav .nav-link::after {
            display: none;
          }

          .navbar-nav .nav-link:hover {
            background-color: #f8fafc;
            color: #4F46E5 !important;
            border-left-color: #4F46E5;
            padding-left: 35px !important;
          }

          .navbar-nav .nav-link.active {
            background-color: #eef2ff;
            color: #4F46E5 !important;
            font-weight: 600;
            border-left-color: #4F46E5;
          }

          .mobile-cta {
            width: 100%;
            margin-top: 30px;
            padding: 0 30px;
            border-top: 1px solid #e2e8f0;
            padding-top: 30px;
          }

          .mobile-cta .book-appointment-btn {
            width: 100%;
            padding: 15px;
            font-size: 1.1rem;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(79, 70, 229, 0.2);
          }

          .close-menu {
            position: absolute;
            top: 20px;
            right: 20px;
            z-index: 1051;
            background-color: #f3f4f6;
            border: 1px solid #d1d5db;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 1.1rem;
            color: #6b7280;
          }

          .close-menu:hover {
            background-color: #ef4444;
            color: white;
            transform: rotate(90deg);
            border-color: #ef4444;
          }
        }

        @media (max-width: 480px) {
          .navbar-collapse {
            width: 100%;
          }

          .navbar-nav .nav-link {
            padding: 18px 25px !important;
          }

          .navbar-nav .nav-link:hover {
            padding-left: 30px !important;
          }

          .mobile-cta {
            padding: 0 25px;
          }

          .close-menu {
            top: 15px;
            right: 15px;
            width: 28px;
            height: 28px;
            font-size: 1rem;
          }
        }
      `}</style>

      <nav className={`navbar navbar-expand-lg custom-navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container-fluid px-4 px-lg-5" style={{ maxWidth: '1400px' }}>
          {/* Logo */}
          <a className="navbar-brand" href="/">
            <img 
              src={logo}
              alt="Yogalayaa" 
              className="navbar-logo" 
            />
          </a>

          {/* Desktop CTA Button */}
          <div className="d-none d-lg-block order-lg-3">
            <button className="book-appointment-btn"
            onClick={contact}>
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="navbar-toggler d-lg-none"
            type="button"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon">☰</span>
          </button>

          {/* Navigation Menu */}
          <div className={`navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
            {/* Close button for mobile */}
            <div className="close-menu d-lg-none" onClick={closeMenu}>
              <span>✕</span>
            </div>

            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink 
                  to="/" 
                  className="nav-link"
                  onClick={closeMenu}
                  activeClassName="active"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/about" 
                  className="nav-link"
                  onClick={closeMenu}
                  activeClassName="active"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/service" 
                  className="nav-link"
                  onClick={closeMenu}
                  activeClassName="active"
                >
                Programs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/contact" 
                  className="nav-link"
                  onClick={closeMenu}
                  activeClassName="active"
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            {/* Mobile CTA */}
            <div className="mobile-cta d-lg-none">
              <button className="book-appointment-btn" onClick={closeMenu}>
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;