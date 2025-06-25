// Components/Layout.js
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './Components/Header/Navbar';
import logo from './images/yogalayaaLogo.png'
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/useFullComponent/ScrollToTop';
import FloatingDonateButton from './Components/useFullComponent/FloatingDonateButton';

function Layout() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);

  // Handle screen size changes
  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 992;
      setIsDesktop(desktop);
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
    maxWidth: '40vw',
    maxHeight: '40vh',
    width: 'auto',
    height: 'auto'
  };

  // Dynamic padding based on screen size and navbar height
  const mainStyle = {
    paddingTop: isDesktop ? '100px' : '0', // Adjust 100px based on your navbar height
  };

  return (
    <div>
      {/* Background Logo */}
      <img 
        src={logo} 
        alt="Yogalayaa Background Logo" 
        style={logoStyle}
      />
      <ScrollToTop/>
      <Navbar/>
      <main style={mainStyle}>
        <Outlet />
      </main>
<FloatingDonateButton/>

      <Footer/>
    </div>
  );
}

export default Layout;