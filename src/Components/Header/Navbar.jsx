import React, { 
  useState, 
  useEffect, 
  useCallback, 
  useMemo, 
  memo,
  useRef
} from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import logo from '../../images/yogalayaaLogo.png';

// Memoized Navigation Item Component
const NavigationItem = memo(({ to, label, onClick, className = "nav-link" }) => (
  <li className="nav-item">
    <NavLink 
      to={to}
      className={className}
      onClick={onClick}
      end={to === '/'}
    >
      {label}
    </NavLink>
  </li>
));

// Memoized Book Appointment Button
const BookAppointmentButton = memo(({ onClick, className = "book-appointment-btn", children = "Book Appointment" }) => (
  <button 
    className={className} 
    onClick={onClick}
    type="button"
    aria-label="Book yoga appointment"
  >
    {children}
  </button>
));

// Optimized Logo Component
const NavbarLogo = memo(() => (
  <a className="navbar-brand" href="/">
    <img 
      src={logo}
      alt="Yogalayaa Yoga School" 
      className="navbar-logo"
      loading="eager"
      width="auto"
      height="80"
    />
  </a>
));

// Mobile Menu Toggle Button
const MobileToggle = memo(({ isMenuOpen, onToggle }) => (
  <button 
    className="navbar-toggler d-lg-none"
    type="button"
    onClick={onToggle}
    aria-expanded={isMenuOpen}
    aria-label="Toggle navigation menu"
  >
    <span className="toggler-icon">☰</span>
  </button>
));

// Mobile Close Button
const MobileCloseButton = memo(({ onClose }) => (
  <div className="close-menu d-lg-none" onClick={onClose}>
    <span>✕</span>
  </div>
));

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const scrollTimeoutRef = useRef(null);

  // Memoized navigation items
  const navigationItems = useMemo(() => [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/service", label: "Programs" },
    { to: "/contact", label: "Contact" }
  ], []);

  // Optimized scroll handler with RAF and throttling
  const handleScroll = useCallback(() => {
    if (scrollTimeoutRef.current) {
      cancelAnimationFrame(scrollTimeoutRef.current);
    }
    
    scrollTimeoutRef.current = requestAnimationFrame(() => {
      const isScrolled = window.scrollY > 10;
      setScrolled(prevScrolled => {
        return prevScrolled !== isScrolled ? isScrolled : prevScrolled;
      });
    });
  }, []);

  // Optimized scroll effect
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        cancelAnimationFrame(scrollTimeoutRef.current);
      }
    };
  }, [handleScroll]);

  // Memoized navigation handler
  const contact = useCallback(() => {
    navigate('/contact');
  }, [navigate]);

  // Memoized mobile booking handler
  const handleMobileBooking = useCallback(() => {
    contact();
    setIsMenuOpen(false);
  }, [contact]);

  // Memoized menu toggle
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  // Memoized close menu handler
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Memoized navbar classes
  const navbarClasses = useMemo(() => 
    `navbar navbar-expand-lg custom-navbar ${scrolled ? 'navbar-scrolled' : ''}`,
    [scrolled]
  );

  // Memoized collapse classes
  const collapseClasses = useMemo(() => 
    `navbar-collapse ${isMenuOpen ? 'show' : ''}`,
    [isMenuOpen]
  );

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Performance monitoring
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Navbar: Component optimized with memoization and RAF scroll handling');
    }
  }, []);

  return (
    <>
      {/* Optimized Styles with CSS-in-JS */}
      <style jsx>{`
        /* Global Styles */
        body {
          padding-top: 80px !important;
          transition: padding-top 0.3s ease;
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
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          min-height: 80px;
          will-change: background-color, box-shadow;
          backface-visibility: hidden;
          transform: translateZ(0);
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
          transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }

        .navbar-logo:hover {
          transform: scale(1.05) translateZ(0);
        }

        /* Desktop Navigation */
        .navbar-nav .nav-link {
          color: #374151 !important;
          font-weight: 500;
          font-size: 1.2rem;
          padding: 0.5rem 1.25rem !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          border-bottom: 2px solid transparent;
          margin: 0 0.25rem;
          will-change: color, transform;
        }

        .navbar-nav .nav-link:hover {
          color: #4F46E5 !important;
          transform: translateY(-1px);
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
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 15px rgba(79, 70, 229, 0.3);
          position: relative;
          overflow: hidden;
          animation: pulse-glow 3s infinite;
          will-change: transform, box-shadow;
          backface-visibility: hidden;
        }

        .book-appointment-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .book-appointment-btn:hover::before {
          left: 100%;
        }

        .book-appointment-btn:hover {
          background: linear-gradient(135deg, #4338CA 0%, #6D28D9 100%);
          box-shadow: 0 8px 25px rgba(79, 70, 229, 0.4);
          transform: translateY(-2px) translateZ(0);
        }

        .book-appointment-btn:active {
          transform: translateY(0) translateZ(0);
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
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: background-color;
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
          transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
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
            will-change: right;
            backface-visibility: hidden;
            transform: translateZ(0);
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
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            border-bottom: none;
            border-left: 4px solid transparent;
            margin: 0;
            will-change: background-color, padding-left, border-left-color;
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
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            font-size: 1.1rem;
            color: #6b7280;
            will-change: background-color, transform, border-color;
          }

          .close-menu:hover {
            background-color: #ef4444;
            color: white;
            transform: rotate(90deg) translateZ(0);
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

        /* Performance optimizations */
        * {
          box-sizing: border-box;
        }

        .navbar-nav .nav-link,
        .book-appointment-btn,
        .navbar-toggler,
        .close-menu {
          transform: translateZ(0);
        }

        /* Reduced motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .custom-navbar,
          .navbar-logo,
          .navbar-nav .nav-link,
          .book-appointment-btn,
          .navbar-toggler,
          .close-menu,
          .navbar-collapse {
            transition: none;
            animation: none;
          }
        }
      `}</style>

      <nav className={navbarClasses}>
        <div className="container-fluid px-4 px-lg-5" style={{ maxWidth: '1400px' }}>
          {/* Logo */}
          <NavbarLogo />

          {/* Desktop CTA Button */}
          <div className="d-none d-lg-block order-lg-3">
            <BookAppointmentButton onClick={contact} />
          </div>

          {/* Mobile Menu Toggle */}
          <MobileToggle isMenuOpen={isMenuOpen} onToggle={toggleMenu} />

          {/* Navigation Menu */}
          <div className={collapseClasses}>
            {/* Close button for mobile */}
            <MobileCloseButton onClose={closeMenu} />

            <ul className="navbar-nav mx-auto">
              {navigationItems.map(({ to, label }) => (
                <NavigationItem
                  key={to}
                  to={to}
                  label={label}
                  onClick={closeMenu}
                />
              ))}
            </ul>

            {/* Mobile CTA */}
            <div className="mobile-cta d-lg-none">
              <BookAppointmentButton 
                onClick={handleMobileBooking}
                className="book-appointment-btn"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default memo(Navbar);