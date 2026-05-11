// Layout.jsx

import React, { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Components/Header/Navbar";
import ScrollToTop from "./Components/useFullComponent/ScrollToTop";

import logo from "./images/omBreatheLogo.png";

// Lazy loaded components
const Footer = lazy(() => import("./Components/Footer/Footer"));
const WhatsAppButton = lazy(() => import("./Components/WhatsAppButton"));
const DiscountPopup = lazy(() =>
  import("./Components/useFullComponent/DiscountPopup")
);

function Layout() {
  return (
    <div className="layout-wrapper">
      {/* Background Logo */}
      <img
        src={logo}
        alt="Ombreathe Background Logo"
        className="background-logo"
        loading="lazy"
        decoding="async"
        width="500"
        height="320"
      />

      <ScrollToTop />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="main-layout">
        <Outlet />
      </main>

      {/* Lazy Loaded Components */}
      <Suspense fallback={null}>
        <Footer />

        <WhatsAppButton
          phone="917483987568"
          message="Hello! I'd like to know more about your yoga programs."
        />

        <DiscountPopup />
      </Suspense>

      {/* CSS */}
      <style jsx="true">{`
        .layout-wrapper {
          position: relative;
          overflow-x: hidden;
          background: #fff;
        }

        .main-layout {
          padding-top: 96px;
          position: relative;
          z-index: 2;
        }

        .background-logo {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: min(500px, 60vw);
          height: auto;
          opacity: 0.06;
          z-index: -1;
          pointer-events: none;
          user-select: none;
          will-change: transform;
        }

        @media (max-width: 991px) {
          .main-layout {
            padding-top: 0;
          }

          .background-logo {
            width: 70vw;
            opacity: 0.04;
          }
        }

        @media (max-width: 576px) {
          .background-logo {
            width: 85vw;
          }
        }
      `}</style>
    </div>
  );
}

export default Layout;