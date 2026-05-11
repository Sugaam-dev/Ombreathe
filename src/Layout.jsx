import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './Components/Header/Navbar';
import logo from './images/omBreatheLogo.png';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/useFullComponent/ScrollToTop';
// import FloatingDonateButton from './Components/useFullComponent/FloatingDonateButton';
import WhatsAppButton from './Components/WhatsAppButton';
// import DiscountPopup from './Components/useFullComponent/DiscountPopup';



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

  const mainStyle = isDesktop ? { paddingTop: '96px' } : {};

  return (
    <div>
      <img 
        src={logo} 
        alt="Yogalayaa Background Logo" 
        style={logoStyle}
      />
      <ScrollToTop />
      <Navbar />
      {/* <DiscountPopup/>   */}
      <main style={mainStyle}>
        <Outlet />
      </main>
      {/* <FloatingDonateButton /> */}
      <Footer />

      {/* Global floating WhatsApp button */}
      <WhatsAppButton
        phone="917483987568"
        message="Hello! I'd like to know more about your yoga programs."
      />
    </div>
  );
}

export default Layout;
