import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './Components/Header/Navbar';
import logo from './images/omBreatheLogo.png';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/useFullComponent/ScrollToTop';
import FloatingDonateButton from './Components/useFullComponent/FloatingDonateButton';

function Layout() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 992);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const logoStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: -1,
    opacity: 0.15,
    maxWidth: '60vw',
    maxHeight: '60vh',
    width: 'auto',
    height: 'auto'
  };

  // Add padding-top for desktop screens so content is not hidden by navbar
  const mainStyle = isDesktop
    ? { paddingTop: '96px' } // Match your desktop navbar height
    : {};

  return (
    <div>
      {/* Background Logo */}
      <img 
        src={logo} 
        alt="Yogalayaa Background Logo" 
        style={logoStyle}
      />
      <ScrollToTop />
      <Navbar />
      <main style={mainStyle}>
        <Outlet />
      </main>
      <FloatingDonateButton />
      <Footer />
    </div>
  );
}

export default Layout;
