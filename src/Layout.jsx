// Components/Layout.js
import { Outlet } from 'react-router-dom';

import Navbar from './Components/Header/Navbar';



import logo from './images/yogalayaaLogo.png'
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/useFullComponent/ScrollToTop';

function Layout() {
  const layoutStyle = {
    minHeight: '100vh',
    position: 'relative'
   
  };

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

  return (
    <div style={layoutStyle}>
      {/* Background Logo */}
      <img 
        src={logo} 
        alt="Yogalayaa Background Logo" 
        style={logoStyle}
      />
      <ScrollToTop/>
 
      <Navbar/>
      <main>
        <Outlet />
      </main>
     
     
      <Footer/>
    </div>
  );
}


export default Layout;