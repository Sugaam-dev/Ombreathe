import React, { useState, useEffect } from 'react';
import logo from '../../images/logo4.png'
const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [activeLink, setActiveLink] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState({});

  // Set active link based on current URL on component mount
  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === '/') {
      setActiveLink('home');
    } else if (currentPath === '/about') {
      setActiveLink('about');
    } else if (currentPath === '/contact') {
      setActiveLink('contact');
    } else if (currentPath.includes('/web-development') || 
               currentPath.includes('/mobile-development') || 
               currentPath.includes('/data-science') || 
               currentPath.includes('/cybersecurity') || 
               currentPath.includes('/cloud-computing') || 
               currentPath.includes('/all-programs')) {
      setActiveLink('programs');
    } else {
      setActiveLink('');
    }
  }, []);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setDropdownOpen({}); // Close all dropdowns when clicking regular links
    if (window.innerWidth < 992) {
      setIsNavCollapsed(true); // Close mobile menu for regular links
    }
    // Let the browser handle navigation naturally - don't prevent default
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
        }, 300); // Increased delay for better UX
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
      {/* Bootstrap CSS */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      
      <nav className="navbar navbar-expand-lg navbar-light premium-navbar shadow-lg fixed-top">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand logo-brand" href="/" onClick={() => handleLinkClick('home')}>
            <div className="logo-container">
              <img 
                src={logo}
                alt="Logo" 
                className="logo-image"
              />
            </div>
          </a>

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
            <ul className="navbar-nav ms-auto">
              {/* Home */}
              <li className="nav-item">
                <a 
                  className={`nav-link premium-link ${activeLink === 'home' ? 'active' : ''}`} 
                  href="/"
                  onClick={() => handleLinkClick('home')}
                >
                  Home
                  <span className="link-underline"></span>
                </a>
              </li>

              {/* About */}
              <li className="nav-item">
                <a 
                  className={`nav-link premium-link ${activeLink === 'about' ? 'active' : ''}`} 
                  href="/about"
                  onClick={() => handleLinkClick('about')}
                >
                  About
                  <span className="link-underline"></span>
                </a>
              </li>

              {/* Programs Dropdown */}
              <li className="nav-item dropdown dropdown-hover-container"
                  onMouseEnter={() => handleDropdownHover('programs', true)}
                  onMouseLeave={() => handleDropdownHover('programs', false)}>
                <a 
                  className={`nav-link premium-link dropdown-toggle-custom ${activeLink === 'programs' ? 'active' : ''}`}
                  href="#" 
                  role="button" 
                  onClick={(e) => toggleDropdown('programs', e)}
                >
                  Programs
                  <span className={`dropdown-arrow ${dropdownOpen.programs ? 'rotated' : ''}`}>▼</span>
                  <span className="link-underline"></span>
                </a>
                
                {/* Invisible bridge for smooth hover transition */}
                <div className="dropdown-bridge"></div>
                
                {dropdownOpen.programs && (
                  <div className="dropdown-menu-custom premium-dropdown show">
                    <a className="dropdown-item-custom premium-dropdown-item" href="/programs/Membership-Temple-Yoga-Program">
                      Membership Programs
                    </a>
                   
                    <hr className="dropdown-divider-custom" />
                    <a className="dropdown-item-custom premium-dropdown-item" href="/service">
                      View All Programs
                    </a>
                  </div>
                )}
              </li>

              {/* Contact */}
              <li className="nav-item">
                <a 
                  className={`nav-link premium-link ${activeLink === 'contact' ? 'active' : ''}`} 
                  href="/contact"
                  onClick={() => handleLinkClick('contact')}
                >
                  Contact
                  <span className="link-underline"></span>
                </a>
              </li>

              {/* Book Appointment Button */}
              <li className="nav-item ms-3">
                <a className="btn book-appointment-btn" href="/contact">
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <style jsx>{`
        /* Premium Navbar Styles */
        .premium-navbar {
          background: white !important;
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        /* Body padding to account for fixed navbar */
        body {
          padding-top: 80px;
        }

        /* Logo Styles */
        .logo-brand {
          text-decoration: none !important;
          transition: all 0.3s ease;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .logo-image {
          height: 75px;
          width: auto;
          transition: all 0.3s ease;
        }

        .logo-brand:hover .logo-image {
          transform: scale(1.05);
          filter: brightness(1.1);
        }

        /* Premium Navigation Links */
        .premium-link {
          position: relative;
          padding: 0.8rem 1.2rem !important;
          color: #000 !important;
          font-weight: 500;
          transition: all 0.3s ease;
          overflow: hidden;
          text-decoration: none;
          font-size:18px;
        }

        .premium-link:hover {
          color: #007bff !important;
          transform: translateY(-2px);
          text-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
          filter: drop-shadow(0 0 5px rgba(0, 123, 255, 0.3));
        }

        /* Active Link State */
        .premium-link.active {
          color: #007bff !important;
          text-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
          filter: drop-shadow(0 0 5px rgba(0, 123, 255, 0.3));
        }

        .premium-link.active .link-underline {
          width: 100%;
        }

        /* Animated Underline Effect */
        .link-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #007bff, #0056b3);
          transition: width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border-radius: 2px;
          box-shadow: 0 0 8px rgba(0, 123, 255, 0.4);
        }

        .premium-link:hover .link-underline {
          width: 100%;
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
          font-size: 0.8rem;
          margin-left: 0.5rem;
          display: inline-block;
          color: #000;
        }

        .premium-link:hover .dropdown-arrow {
          color: #007bff;
          text-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
        }

        .premium-link.active .dropdown-arrow {
          color: #007bff;
          text-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
        }

        .dropdown-arrow.rotated {
          transform: rotate(180deg);
        }

        /* Custom Dropdown Menu */
        .dropdown-menu-custom {
          position: absolute;
          top: calc(100% + 10px); /* Account for bridge height */
          left: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          padding: 0.5rem 0;
          min-width: 220px;
          z-index: 1000;
          animation: dropdownFadeIn 0.3s ease;
        }

        @keyframes dropdownFadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Custom Dropdown Items - Removed hover background */
        .dropdown-item-custom {
          display: block;
          padding: 0.75rem 1.5rem;
          color: #333;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s ease;
          border-radius: 8px;
          margin: 0 0.5rem;
          position: relative;
          overflow: hidden;
        }

        .dropdown-item-custom:hover {
          color: #007bff; /* Only change color, no background */
          transform: translateX(5px);
          text-decoration: none;
          text-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
        }

        .dropdown-item-custom::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 0;
          height: 100%;
          background: linear-gradient(90deg, #007bff, #0056b3);
          transition: width 0.3s ease;
          z-index: -1;
          box-shadow: 0 0 10px rgba(0, 123, 255, 0.4);
        }

        .dropdown-item-custom:hover::before {
          width: 4px;
        }

        /* Custom Dropdown Divider */
        .dropdown-divider-custom {
          height: 1px;
          margin: 0.5rem 1rem;
          background: rgba(0, 0, 0, 0.1);
          border: 0;
        }

        /* Book Appointment Button */
        .book-appointment-btn {
          background: linear-gradient(135deg, #ff6b6b, #ff8e8e) !important;
          color: white !important;
          border: none !important;
          padding: 0.6rem 1.5rem !important;
          border-radius: 25px !important;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
          text-decoration: none;
          animation: blinkButton 2s infinite;
        }

        .book-appointment-btn:hover {
          background: linear-gradient(135deg, #ff5252, #ff6b6b) !important;
          color: white !important;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(255, 107, 107, 0.5);
          text-decoration: none;
          animation: none; /* Stop blinking on hover */
        }

        @keyframes blinkButton {
          0%, 50% {
            opacity: 1;
          }
          25%, 75% {
            opacity: 0.7;
          }
        }

        .custom-toggler {
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 8px;
          padding: 0.5rem;
          transition: all 0.3s ease;
        }

        .custom-toggler:hover {
          border-color: #ffd700;
          background: rgba(255, 215, 0, 0.1);
        }

        .custom-toggler:focus {
          box-shadow: 0 0 0 0.2rem rgba(255, 215, 0, 0.25);
        }

        /* Mobile Responsive */
        @media (max-width: 991.98px) {
          body {
            padding-top: 70px;
          }

          .navbar-nav .nav-item {
            text-align: center;
            margin: 0.25rem 0;
          }
          
          .premium-link {
            padding: 1rem !important;
            border-radius: 8px;
            margin: 0.25rem 0;
          }

          .book-appointment-btn {
            margin-top: 1rem;
            margin-bottom: 0.5rem;
            width: auto;
          }

          /* Hide bridge on mobile */
          .dropdown-bridge {
            display: none;
          }

          /* Mobile Dropdown Styles */
          .dropdown-menu-custom {
            position: static !important;
            background: rgba(0, 123, 255, 0.95);
            border: none;
            border-radius: 0;
            box-shadow: none;
            margin: 0.5rem 0;
            padding: 0.5rem 0;
            width: 100%;
            animation: none;
            top: auto !important;
          }

          /* Ensure dropdown shows when open on mobile */
          .dropdown-menu-custom.show {
            display: block !important;
          }

          .dropdown-item-custom {
            color: white;
            margin: 0;
            border-radius: 0;
            padding: 0.75rem 2rem;
          }

          .dropdown-item-custom:hover {
            background: rgba(255, 255, 255, 0.1);
            transform: none;
            color: white;
            text-shadow: none;
          }

          .dropdown-item-custom::before {
            display: none;
          }

          .link-underline {
            display: none;
          }
        }

        /* Ensure dropdown appears above other content */
        .navbar {
          z-index: 1030;
        }

        .dropdown-menu-custom {
          z-index: 1031;
        }
      `}</style>
    </>
  );
};

export default Navbar;