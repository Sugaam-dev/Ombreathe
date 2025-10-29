import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/omBreatheLogo.png'
import './Navbar.css'

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [activeLink, setActiveLink] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);
  const location = useLocation();

  // Handle screen size changes
  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 992;
      setIsDesktop(desktop);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Set active link based on current URL on component mount
  useEffect(() => {
    // For HashRouter, use location.hash if available, otherwise use pathname
    const hashPath = location.hash.replace('#', '');
    const pathToCheck = hashPath || location.pathname;
    
    if (pathToCheck === '/' || pathToCheck === '') {
      setActiveLink('home');
    } else if (pathToCheck === '/about') {
      setActiveLink('about');
    } else if (pathToCheck === '/contact') {
      setActiveLink('contact');
    } else if (pathToCheck.includes('/programs/') || 
               pathToCheck.includes('/programs')) {
      setActiveLink('programs');
    } else {
      setActiveLink('');
    }
  }, [location]);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setDropdownOpen({}); // Close all dropdowns when clicking regular links
    if (window.innerWidth < 992) {
      setIsNavCollapsed(true); // Close mobile menu for regular links
    }
  };

  const toggleDropdown = (dropdownName, event) => {
    event.preventDefault();
    event.stopPropagation();
    
    setDropdownOpen(prev => {
      const newState = {};
      // Close all other dropdowns
      Object.keys(prev).forEach(key => {
        newState[key] = false;
      });
      // Toggle the clicked dropdown
      newState[dropdownName] = !prev[dropdownName];
      return newState;
    });
    
    setActiveLink(dropdownName);
  };

  const handleDropdownHover = (dropdownName, isHovering) => {
    // Only handle hover on larger screens
    if (window.innerWidth >= 992) {
      if (isHovering) {
        setDropdownOpen(prev => ({
          ...prev,
          [dropdownName]: true
        }));
      } else {
        // Small delay before closing to allow moving to dropdown
        setTimeout(() => {
          setDropdownOpen(prev => ({
            ...prev,
            [dropdownName]: false
          }));
        }, 300);
      }
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        setDropdownOpen({});
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
   <nav className={`navbar navbar-expand-lg navbar-light premium-navbar shadow-lg ${isDesktop ? 'fixed-top' : ''}`}>

        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand logo-brand" to="/" onClick={() => handleLinkClick('home')}>
            <div className="logo-container">
              <img 
                src={logo}
                alt="Logo" 
                className="logo-image"
              />
            </div>
          </Link>

          {/* Mobile toggle button */}
          <button 
            className="navbar-toggler custom-toggler" 
            type="button" 
            onClick={handleNavCollapse}
            aria-controls="navbarNav" 
            aria-expanded={!isNavCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation menu */}
          <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              {/* Home */}
              <li className="nav-item">
                <Link 
                  className={`nav-link premium-link ${activeLink === 'home' ? 'active' : ''}`} 
                  to="/"
                  onClick={() => handleLinkClick('home')}
                >
                  Home
                </Link>
              </li>

              {/* About */}
              <li className="nav-item">
                <Link 
                  className={`nav-link premium-link ${activeLink === 'about' ? 'active' : ''}`} 
                  to="/about"
                  onClick={() => handleLinkClick('about')}
                >
                  About
                </Link>
              </li>

              {/* Programs Dropdown */}
              <li className="nav-item dropdown dropdown-hover-container"
                  onMouseEnter={() => handleDropdownHover('programs', true)}
                  onMouseLeave={() => handleDropdownHover('programs', false)}>
                <Link 
                  className={`nav-link premium-link dropdown-toggle-custom ${activeLink === 'programs' ? 'active' : ''}`}
                  href="#" 
                  role="button" 
                  onClick={(e) => toggleDropdown('programs', e)}
                >
                  Programs
                  <span className={`dropdown-arrow ${dropdownOpen.programs ? 'rotated' : ''}`}>▼</span>
                </Link>
                
                {/* Invisible bridge for smooth hover transition */}
                <div className="dropdown-bridge"></div>
                
                {dropdownOpen.programs && (
                  <div className="dropdown-menu-custom premium-dropdown show">
                    <Link className="dropdown-item-custom premium-dropdown-item" to="/programs/Membership-Temple-Yoga-Program" 
                    onClick={() => handleLinkClick('programs/Membership-Temple-Yoga-Program')}>
                      Membership Programs
                    </Link>
                   
                    <hr className="dropdown-divider-custom" />
                    <Link className="dropdown-item-custom premium-dropdown-item" to="/programs"
                     onClick={() => handleLinkClick('programs')}>
                      View All Programs
                    </Link>
                  </div>
                )}
              </li>

              {/* Contact */}
              <li className="nav-item">
                <Link 
                  className={`nav-link premium-link ${activeLink === 'contact' ? 'active' : ''}`} 
                  to="/contact"
                  onClick={() => handleLinkClick('contact')}
                >
                  Contact
                </Link>
              </li>

              {/* Book Appointment Button */}
              <li className="nav-item">
                <Link className="btn book-appointment-btn" to="/contact">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <style jsx>{`
        /* Premium Navbar Styles - Reduced Height */
        .premium-navbar {
          background: white !important;
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          padding: 0.25rem 0 !important;
        }

        .premium-navbar .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* Logo Styles - Bigger Logo */
        .logo-brand {
          text-decoration: none !important;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          padding: 0 !important;
          margin: 0 !important;
        }

        .logo-container {
          display: flex;
          align-items: center;
          height: 100%;
        }

        .logo-image {
          height: 90px;
          width: auto;
          transition: all 0.3s ease;
          object-fit: contain;
        }

        .logo-brand:hover .logo-image {
          transform: scale(1.05);
        }

        /* Align navbar items properly */
        .navbar-nav {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        /* Premium Navigation Links - Reduced Padding */
        .premium-link {
          position: relative;
          padding: 0.4rem 0.9rem !important;
          color: #2c3e50 !important;
          font-weight: 500;
          transition: all 0.3s ease;
          text-decoration: none;
          font-size: 16px;
          display: inline-block;
        }

        /* Modern Hover Effect - Simple Color Change with Bottom Border */
        .premium-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0%;
          height: 2px;
          background: #007bff;
          transition: width 0.3s ease;
        }

        .premium-link:hover {
          color: #007bff !important;
        }

        .premium-link:hover::after {
          width: 80%;
        }

        /* Active Link State - Clean Design */
        .premium-link.active {
          color: #007bff !important;
        
        }

        .premium-link.active::after {
          width: 80%;
        }

        /* Dropdown Positioning and Hover Container */
        .dropdown {
          position: relative;
        }

        .dropdown-hover-container {
          position: relative;
        }

        /* Invisible bridge between dropdown trigger and menu */
        .dropdown-bridge {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          height: 10px;
          background: transparent;
          z-index: 999;
        }

        /* Dropdown Arrow Animation */
        .dropdown-arrow {
          transition: transform 0.3s ease;
          font-size: 0.7rem;
          margin-left: 0.4rem;
          display: inline-block;
          color: #2c3e50;
        }

        .premium-link:hover .dropdown-arrow {
          color: #007bff;
        }

        .premium-link.active .dropdown-arrow {
          color: #007bff;
        }

        .dropdown-arrow.rotated {
          transform: rotate(180deg);
        }

        /* Custom Dropdown Menu */
        .dropdown-menu-custom {
          position: absolute;
          top: calc(100% + 10px);
          left: 0;
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          padding: 0.5rem 0;
          min-width: 220px;
          z-index: 1000;
          animation: dropdownFadeIn 0.2s ease;
        }

        @keyframes dropdownFadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Custom Dropdown Items - Clean Hover */
        .dropdown-item-custom {
          display: block;
          padding: 0.7rem 1.5rem;
          color: #2c3e50;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s ease;
          position: relative;
        }

        .dropdown-item-custom:hover {
          color: #007bff;
          background: rgba(0, 123, 255, 0.05);
          padding-left: 1.8rem;
          text-decoration: none;
        }

        /* Custom Dropdown Divider */
        .dropdown-divider-custom {
          height: 1px;
          margin: 0.5rem 1rem;
          background: rgba(0, 0, 0, 0.08);
          border: 0;
        }

        /* Book Appointment Button - Reduced Size */
        .book-appointment-btn {
          background: linear-gradient(135deg, #ff6b6b, #ff8e8e) !important;
          color: white !important;
          border: none !important;
          padding: 0.45rem 1.2rem !important;
          border-radius: 20px !important;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(255, 107, 107, 0.3);
          text-decoration: none;
          white-space: nowrap;
          margin-left: 0.5rem;
        }

        .book-appointment-btn:hover {
          background: linear-gradient(135deg, #ff5252, #ff6b6b) !important;
          color: white !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 107, 107, 0.4);
          text-decoration: none;
        }

        .custom-toggler {
          border: 2px solid rgba(0, 0, 0, 0.1);
          border-radius: 6px;
          padding: 0.4rem 0.6rem;
          transition: all 0.3s ease;
        }

        .custom-toggler:hover {
          border-color: #007bff;
          background: rgba(0, 123, 255, 0.05);
        }

        .custom-toggler:focus {
          box-shadow: 0 0 0 0.15rem rgba(0, 123, 255, 0.15);
        }

        /* Ensure navbar appears above other content */
        .navbar {
          z-index: 1030;
        }

        .dropdown-menu-custom {
          z-index: 1031;
        }

        /* Tablet and smaller devices */
        @media (max-width: 991.98px) {
          .logo-image {
            height: 70px;
          }

          .navbar-nav {
            gap: 0;
            align-items: stretch;
          }

          .navbar-nav .nav-item {
            text-align: center;
            margin: 0;
          }
          
          .premium-link {
            padding: 0.8rem 1rem !important;
            border-radius: 6px;
            margin: 0.2rem 0;
          }

          .premium-link::after {
            display: none;
          }

          .premium-link:hover {
            background: rgba(0, 123, 255, 0.05);
          }

          .premium-link.active {
            background: rgba(0, 123, 255, 0.08);
          }

          .book-appointment-btn {
            margin: 0.8rem auto 0.5rem;
            display: inline-block;
          }

          /* Hide bridge on mobile */
          .dropdown-bridge {
            display: none;
          }

          /* Mobile Dropdown Styles */
          .dropdown-menu-custom {
            position: static !important;
            border: none;
            border-radius: 0;
            box-shadow: none;
            margin: 0.3rem 0;
            padding: 0.3rem 0;
            width: 100%;
            animation: none;
            top: auto !important;
            background: rgba(0, 123, 255, 0.03);
          }

          .dropdown-menu-custom.show {
            display: block !important;
          }

          .dropdown-item-custom {
            color: #2c3e50;
            margin: 0;
            border-radius: 0;
            padding: 0.7rem 2rem;
          }

          .dropdown-item-custom:hover {
            background: rgba(0, 123, 255, 0.08);
            padding-left: 2.3rem;
            color: #007bff;
          }
        }

        /* Mobile phones */
        @media (max-width: 576px) {
          .logo-image {
            height: 60px;
          }

          .premium-link {
            font-size: 15px;
          }

          .book-appointment-btn {
            font-size: 13px;
            padding: 0.4rem 1rem !important;
          }
        }

        /* Extra small devices */
        @media (max-width: 375px) {
          .logo-image {
            height: 55px;
          }

          .premium-link {
            font-size: 14px;
            padding: 0.7rem 0.9rem !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
