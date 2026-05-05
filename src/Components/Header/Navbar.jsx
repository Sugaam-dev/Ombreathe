import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/omBreatheLogo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [activeLocation, setActiveLocation] = useState(null);
  const [activeMobileCategory, setActiveMobileCategory] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);

  const [ttcView, setTtcView] = useState("main");
  const [selectedTtcLoc, setSelectedTtcLoc] = useState("");

  const location = useLocation();
  const timeoutRef = useRef(null);

  // Helper to check if a specific sub-link is active
  const isSubActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 992;
      setIsDesktop(desktop);
      if (desktop) setIsDrawerOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const path = location.pathname;
    if (path === "/" || path === "") setActiveLink("home");
    else if (path === "/about") setActiveLink("about");
    else if (path === "/contact") setActiveLink("contact");
    else if (path.includes("/programs") || path.includes("/online"))
      setActiveLink("programs");
  }, [location]);

  const openProgramsMenu = () => {
    if (isDesktop) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setDropdownOpen({ programs: true });
    }
  };

  const closeProgramsMenu = () => {
    if (isDesktop) {
      timeoutRef.current = setTimeout(() => {
        // Only close the dropdown panel — do NOT reset activeLocation, ttcView,
        // selectedTtcLoc, or activeMobileCategory so they are restored on next hover.
        setDropdownOpen({ programs: false });
      }, 300);
    }
  };

  const handleToggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setDropdownOpen({});
    // Do NOT reset activeLocation, ttcView, or selectedTtcLoc here —
    // we want Programs to reopen at the same sub-section the user was in.
    setIsDrawerOpen(false);
  };

  const toggleLocation = (e, loc) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveLocation(activeLocation === loc ? null : loc);
  };

  const toggleMobileCategory = (cat) => {
    setActiveMobileCategory(activeMobileCategory === cat ? null : cat);
  };

  const handleTtcLocationSelection = (loc) => {
    setSelectedTtcLoc(loc);
    setTtcView("detail");
  };

  const renderRetreatLinks = (city) => {
    return Array.from({ length: 3 }).map((_, i) => {
      const path = `/programs/retreat-${city.toLowerCase()}-${i + 1}`;
      return (
        <Link
          key={i}
          to={path}
          className={isSubActive(path) ? "sub-link-active" : ""}
          onClick={() => handleLinkClick("programs")}
        >
          {city} Session {i + 1}
        </Link>
      );
    });
  };

  return (
    <>
      <nav
        className={`navbar premium-navbar ${isDesktop ? "fixed-top shadow-sm" : "sticky-top shadow-sm"}`}
      >
        <div className="container-fluid px-lg-5 d-flex align-items-center justify-content-between">
          <Link
            className="navbar-brand logo-link"
            to="/"
            onClick={() => handleLinkClick("home")}
          >
            <img src={logo} alt="Logo" className="logo-image" />
          </Link>

          {isDesktop && (
            <ul className="navbar-nav mx-auto d-flex flex-row align-items-center nav-spacing">
              <li className="nav-item">
                <Link
                  className={`nav-link premium-link ${activeLink === "home" ? "active" : ""}`}
                  to="/"
                  onClick={() => handleLinkClick("home")}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link premium-link ${activeLink === "about" ? "active" : ""}`}
                  to="/about"
                  onClick={() => handleLinkClick("about")}
                >
                  About
                </Link>
              </li>

              <li
                className="nav-item mega-static"
                onMouseEnter={openProgramsMenu}
                onMouseLeave={closeProgramsMenu}
              >
                <Link
                  className={`nav-link premium-link ${activeLink === "programs" ? "active" : ""}`}
                  to="#"
                >
                  Programs{" "}
                  <span
                    className={`arrow-icon ${dropdownOpen.programs ? "rotated" : ""}`}
                  >
                    ▼
                  </span>
                </Link>

                {dropdownOpen.programs && (
                  <div
                    className="bridge-area"
                    onMouseEnter={openProgramsMenu}
                  ></div>
                )}

                <div
                  className={`mega-panel shadow-lg ${dropdownOpen.programs ? "show" : ""}`}
                  onMouseEnter={openProgramsMenu}
                  onMouseLeave={closeProgramsMenu}
                >
                  <div className="container-fluid px-lg-5">
                    {ttcView === "main" ? (
                      <div className="row py-4 fade-in">
                        <div className="col-lg-3 mega-column">
                          <h6 className="column-title">MEMBERSHIP PROGRAMS</h6>
                          <Link
                            className={
                              isSubActive("/programs/shiv-shakti-sadhana")
                                ? "sub-link-active"
                                : ""
                            }
                            to="/programs/shiv-shakti-sadhana"
                            onClick={() => handleLinkClick("programs")}
                          >
                            Shiv Shakti Sadhana
                          </Link>
                          <Link
                            className={
                              isSubActive("/programs/shakti-sadhana")
                                ? "sub-link-active"
                                : ""
                            }
                            to="/programs/shakti-sadhana"
                            onClick={() => handleLinkClick("programs")}
                          >
                            Shakti Sadhana
                          </Link>
                          <Link
                            className={
                              isSubActive("/programs/sapta-rishi-sadhana")
                                ? "sub-link-active"
                                : ""
                            }
                            to="/programs/sapta-rishi-sadhana"
                            onClick={() => handleLinkClick("programs")}
                          >
                            Sapta Rishi Sadhana
                          </Link>
                          <Link
                            className={
                              isSubActive("/programs/pashu-patayaa-sadhana")
                                ? "sub-link-active"
                                : ""
                            }
                            to="/programs/pashu-patayaa-sadhana"
                            onClick={() => handleLinkClick("programs")}
                          >
                            Pashu-Patayaa Sadhana
                          </Link>
                        </div>

                        <div className="col-lg-3 mega-column">
                          <h6 className="column-title">ONLINE COURSES</h6>
                          <Link
                            className={
                              isSubActive("/online/live")
                                ? "sub-link-active"
                                : ""
                            }
                            to="/online/live"
                            onClick={() => handleLinkClick("programs")}
                          >
                            Live Sessions
                          </Link>
                          <Link
                            className={
                              isSubActive("/online/recorded")
                                ? "sub-link-active"
                                : ""
                            }
                            to="/online/recorded"
                            onClick={() => handleLinkClick("programs")}
                          >
                            Recorded Classes
                          </Link>
                          <Link
                            className={
                              isSubActive("/online/workshops")
                                ? "sub-link-active"
                                : ""
                            }
                            to="/online/workshops"
                            onClick={() => handleLinkClick("programs")}
                          >
                            Special Workshops
                          </Link>
                        </div>

                        <div className="col-lg-3 mega-column">
                          <h6 className="column-title">
                            TTC (TEACHER TRAINING)
                          </h6>
                          {["Mysuru", "Bali", "Rishikesh", "Chiang Mai","Dharamshala"].map(
                            (loc) => (
                              <div
                                key={loc}
                                className={`loc-toggle ${location.pathname.toLowerCase().includes(loc.toLowerCase()) ? "active-loc-text" : ""}`}
                                onClick={() => handleTtcLocationSelection(loc)}
                              >
                                <span>{loc} TTC</span>{" "}
                                <span className="symbol">→</span>
                              </div>
                            ),
                          )}
                        </div>

                        <div className="col-lg-3 mega-column no-border">
                          <h6 className="column-title">RETREATS</h6>
                          {["Mysuru", "Bali", "Rishikesh", "Chiang Mai","Dharamshala"].map(
                            (loc) => (
                              <div key={loc} className="mb-1">
                                <div
                                  className={`loc-toggle ${activeLocation === loc || location.pathname.includes(loc.toLowerCase()) ? "active-loc-text" : ""}`}
                                  onClick={(e) => toggleLocation(e, loc)}
                                >
                                  <span>{loc} Retreat</span>{" "}
                                  <span className="symbol">
                                    {activeLocation === loc ? "−" : "+"}
                                  </span>
                                </div>
                                <div
                                  className={`loc-content scrollable-loc ${activeLocation === loc ? "open" : ""}`}
                                >
                                  {renderRetreatLinks(loc)}
                                </div>
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="row py-4 fade-in">
                        <div className="col-12 mb-3 d-flex align-items-center">
                          <button
                            className="back-btn"
                            onClick={() => setTtcView("main")}
                          >
                            ← Back to Programs
                          </button>
                          <h5 className="ms-4 mb-0 ttc-selected-title">
                            {selectedTtcLoc} Teacher Training
                          </h5>
                        </div>
                        <div className="col-lg-3 mega-column">
                          <h6 className="column-title">Multi-Style YTTC</h6>
                             <Link
                            className={
                              isSubActive(`/programs/${selectedTtcLoc}/100hr`)
                                ? "sub-link-active"
                                : ""
                            }
                            to={`/programs/${selectedTtcLoc}/100hr`}
                            onClick={() => handleLinkClick("programs")}
                          >
                            100 Hour Foundation
                          </Link>
                          <Link
                            className={
                              isSubActive(`/programs/${selectedTtcLoc}/200hr`)
                                ? "sub-link-active"
                                : ""
                            }
                            to={`/programs/${selectedTtcLoc}/200hr`}
                            onClick={() => handleLinkClick("programs")}
                          >
                            200 Hour Foundation
                          </Link>
                          <Link
                            className={
                              isSubActive(`/programs/${selectedTtcLoc}/300hr`)
                                ? "sub-link-active"
                                : ""
                            }
                            to={`/programs/${selectedTtcLoc}/300hr`}
                            onClick={() => handleLinkClick("programs")}
                          >
                            300 Hour Advanced
                          </Link>
                          <Link
                            className={
                              isSubActive(`/programs/${selectedTtcLoc}/500hr`)
                                ? "sub-link-active"
                                : ""
                            }
                            to={`/programs/${selectedTtcLoc}/500hr`}
                            onClick={() => handleLinkClick("programs")}
                          >
                            500 Hour Master
                          </Link>
                        </div>
                        <div className="col-lg-3 mega-column">
                          <h6 className="column-title">Kundalini YTTC</h6>
                          <Link
                            className={
                              isSubActive(`/programs/${selectedTtcLoc}/k1`)
                                ? "sub-link-active"
                                : ""
                            }
                            to={`/programs/${selectedTtcLoc}/k1`}
                            onClick={() => handleLinkClick("programs")}
                          >
                            Level 1 Foundation
                          </Link>
                          <Link
                            className={
                              isSubActive(`/programs/${selectedTtcLoc}/k2`)
                                ? "sub-link-active"
                                : ""
                            }
                            to={`/programs/${selectedTtcLoc}/k2`}
                            onClick={() => handleLinkClick("programs")}
                          >
                            Level 2 Advanced
                          </Link>
                        </div>
                        <div className="col-lg-3 mega-column">
                          <h6 className="column-title">Short Courses</h6>
                          <Link
                            className={
                              isSubActive(`/programs/${selectedTtcLoc}/nidra`)
                                ? "sub-link-active"
                                : ""
                            }
                            to={`/programs/${selectedTtcLoc}/nidra`}
                            onClick={() => handleLinkClick("programs")}
                          >
                            Yoga Nidra Course
                          </Link>
                          <Link
                            className={
                              isSubActive(
                                `/programs/${selectedTtcLoc}/pranayama`,
                              )
                                ? "sub-link-active"
                                : ""
                            }
                            to={`/programs/${selectedTtcLoc}/pranayama`}
                            onClick={() => handleLinkClick("programs")}
                          >
                            Pranayama Intensive
                          </Link>
                        </div>
                        <div className="col-lg-3 mega-column no-border">
                          <h6 className="column-title">Specialization</h6>
                          <Link
                            className={
                              isSubActive(
                                `/programs/${selectedTtcLoc}/prenatal`,
                              )
                                ? "sub-link-active"
                                : ""
                            }
                            to={`/programs/${selectedTtcLoc}/prenatal`}
                            onClick={() => handleLinkClick("programs")}
                          >
                            Prenatal Specialist
                          </Link>
                          <Link
                            className={
                              isSubActive(`/programs/${selectedTtcLoc}/therapy`)
                                ? "sub-link-active"
                                : ""
                            }
                            to={`/programs/${selectedTtcLoc}/therapy`}
                            onClick={() => handleLinkClick("programs")}
                          >
                            Yoga Therapy
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link premium-link ${activeLink === "contact" ? "active" : ""}`}
                  to="/contact"
                  onClick={() => handleLinkClick("contact")}
                >
                  Contact
                </Link>
              </li>
            </ul>
          )}

          <div className="d-flex align-items-center">
            {isDesktop && (
              <Link className="btn book-blue-btn" to="/contact">
                Book Appointment
              </Link>
            )}
            {!isDesktop && (
              <div
                className={`mobile-toggle-btn ${isDrawerOpen ? "open" : ""}`}
                onClick={handleToggleDrawer}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
          </div>
        </div>

        {/* MOBILE SIDE DRAWER */}
        <div className={`mobile-side-drawer ${isDrawerOpen ? "open" : ""}`}>
          <div className="drawer-header">
            <img src={logo} alt="Logo" className="drawer-logo" />
          </div>
          <div className="drawer-body">
            <Link
              className={`drawer-link ${activeLink === "home" ? "mobile-active-text" : ""}`}
              to="/"
              onClick={() => handleLinkClick("home")}
            >
              Home
            </Link>
            <Link
              className={`drawer-link ${activeLink === "about" ? "mobile-active-text" : ""}`}
              to="/about"
              onClick={() => handleLinkClick("about")}
            >
              About
            </Link>

            <div className="drawer-accordion">
              <div
                className={`drawer-link d-flex justify-content-between align-items-center ${activeLink === "programs" ? "mobile-active-text" : ""}`}
                onClick={() =>
                  setDropdownOpen({ programs: !dropdownOpen.programs })
                }
              >
                Programs{" "}
                <span
                  className={`arrow-icon ${dropdownOpen.programs ? "rotated" : ""}`}
                >
                  ▼
                </span>
              </div>

              {dropdownOpen.programs && (
                <div className="drawer-sub-menu">
                  <div className="drawer-loc-item">
                    <div
                      className="drawer-loc-header"
                      onClick={() => toggleMobileCategory("MEMBERSHIP")}
                    >
                      MEMBERSHIP PROGRAMS{" "}
                      <span>
                        {activeMobileCategory === "MEMBERSHIP" ? "−" : "+"}
                      </span>
                    </div>
                    <div
                      className={`drawer-loc-body ${activeMobileCategory === "MEMBERSHIP" ? "open" : ""}`}
                    >
                      <Link
                        className={
                          isSubActive("/programs/shiv-shakti-sadhana")
                            ? "m-sub-active-text"
                            : ""
                        }
                        to="/programs/shiv-shakti-sadhana"
                        onClick={() => handleLinkClick("programs")}
                      >
                        Shiv Shakti Sadhana
                      </Link>
                      <Link
                        className={
                          isSubActive("/programs/shakti-sadhana")
                            ? "m-sub-active-text"
                            : ""
                        }
                        to="/programs/shakti-sadhana"
                        onClick={() => handleLinkClick("programs")}
                      >
                        Shakti Sadhana
                      </Link>
                      <Link
                        className={
                          isSubActive("/programs/sapta-rishi-sadhana")
                            ? "m-sub-active-text"
                            : ""
                        }
                        to="/programs/sapta-rishi-sadhana"
                        onClick={() => handleLinkClick("programs")}
                      >
                        Sapta Rishi Sadhana
                      </Link>
                      <Link
                        className={
                          isSubActive("/programs/pashu-patayaa-sadhana")
                            ? "m-sub-active-text"
                            : ""
                        }
                        to="/programs/pashu-patayaa-sadhana"
                        onClick={() => handleLinkClick("programs")}
                      >
                        Pashu-Patayaa Sadhana
                      </Link>
                    </div>
                  </div>

                  <div className="drawer-loc-item">
                    <div
                      className="drawer-loc-header"
                      onClick={() => toggleMobileCategory("ONLINE")}
                    >
                      ONLINE COURSES{" "}
                      <span>
                        {activeMobileCategory === "ONLINE" ? "−" : "+"}
                      </span>
                    </div>
                    <div
                      className={`drawer-loc-body ${activeMobileCategory === "ONLINE" ? "open" : ""}`}
                    >
                      <Link
                        className={
                          isSubActive("/online/live") ? "m-sub-active-text" : ""
                        }
                        to="/online/live"
                        onClick={() => handleLinkClick("programs")}
                      >
                        Live Sessions
                      </Link>
                      <Link
                        className={
                          isSubActive("/online/recorded")
                            ? "m-sub-active-text"
                            : ""
                        }
                        to="/online/recorded"
                        onClick={() => handleLinkClick("programs")}
                      >
                        Recorded Classes
                      </Link>
                      <Link
                        className={
                          isSubActive("/online/workshops")
                            ? "m-sub-active-text"
                            : ""
                        }
                        to="/online/workshops"
                        onClick={() => handleLinkClick("programs")}
                      >
                        Special Workshops
                      </Link>
                    </div>
                  </div>

                  <div className="drawer-loc-item">
                    <div
                      className="drawer-loc-header"
                      onClick={() => toggleMobileCategory("TTC")}
                    >
                      TTC TRAINING{" "}
                      <span>{activeMobileCategory === "TTC" ? "−" : "+"}</span>
                    </div>
                    <div
                      className={`drawer-loc-body ${activeMobileCategory === "TTC" ? "open" : ""}`}
                    >
                      {["Mysuru", "Bali", "Rishikesh", "Gokarna"].map((loc) => (
                        <div key={loc} className="drawer-nested-loc mb-2">
                          <div
                            className={`drawer-loc-header nested ${location.pathname.toLowerCase().includes(loc.toLowerCase()) ? "m-active-path-text" : ""}`}
                            onClick={(e) => toggleLocation(e, `m-ttc-${loc}`)}
                          >
                            {loc} TTC{" "}
                            <span>
                              {activeLocation === `m-ttc-${loc}` ? "−" : "+"}
                            </span>
                          </div>
                          <div
                            className={`drawer-loc-body ${activeLocation === `m-ttc-${loc}` ? "open" : ""}`}
                          >
                             <Link
                              className={
                                isSubActive(
                                  `/programs/${loc.toLowerCase()}/100hr`,
                                )
                                  ? "m-sub-active-text"
                                  : ""
                              }
                              to={`/programs/${loc.toLowerCase()}/100hr`}
                              onClick={() => handleLinkClick("programs")}
                            >
                              100 Hour Foundation
                            </Link>
                            <Link
                              className={
                                isSubActive(
                                  `/programs/${loc.toLowerCase()}/200hr`,
                                )
                                  ? "m-sub-active-text"
                                  : ""
                              }
                              to={`/programs/${loc.toLowerCase()}/200hr`}
                              onClick={() => handleLinkClick("programs")}
                            >
                              200 Hour Foundation
                            </Link>
                            <Link
                              className={
                                isSubActive(
                                  `/programs/${loc.toLowerCase()}/300hr`,
                                )
                                  ? "m-sub-active-text"
                                  : ""
                              }
                              to={`/programs/${loc.toLowerCase()}/300hr`}
                              onClick={() => handleLinkClick("programs")}
                            >
                              300 Hour Advanced
                            </Link>
                            <Link
                              className={
                                isSubActive(
                                  `/programs/${loc.toLowerCase()}/500hr`,
                                )
                                  ? "m-sub-active-text"
                                  : ""
                              }
                              to={`/programs/${loc.toLowerCase()}/500hr`}
                              onClick={() => handleLinkClick("programs")}
                            >
                              500 Hour Master
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="drawer-loc-item">
                    <div
                      className="drawer-loc-header"
                      onClick={() => toggleMobileCategory("RETREATS")}
                    >
                      RETREATS{" "}
                      <span>
                        {activeMobileCategory === "RETREATS" ? "−" : "+"}
                      </span>
                    </div>
                    <div
                      className={`drawer-loc-body ${activeMobileCategory === "RETREATS" ? "open" : ""}`}
                    >
                      {["Mysuru", "Bali", "Rishikesh", "Gokarna"].map((loc) => (
                        <div key={loc} className="drawer-nested-loc mb-2">
                          <div
                            className={`drawer-loc-header nested ${location.pathname.toLowerCase().includes(loc.toLowerCase()) ? "m-active-path-text" : ""}`}
                            onClick={(e) => toggleLocation(e, `m-ret-${loc}`)}
                          >
                            {loc} Retreat{" "}
                            <span>
                              {activeLocation === `m-ret-${loc}` ? "−" : "+"}
                            </span>
                          </div>
                          <div
                            className={`drawer-loc-body ${activeLocation === `m-ret-${loc}` ? "open" : ""}`}
                          >
                            {renderRetreatLinks(loc)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link
              className={`drawer-link ${activeLink === "contact" ? "mobile-active-text" : ""}`}
              to="/contact"
              onClick={() => handleLinkClick("contact")}
            >
              Contact
            </Link>
            <div className="mt-5 mb-4">
              <Link
                className="btn book-blue-btn w-100"
                to="/contact"
                onClick={() => handleLinkClick("contact")}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
        {isDrawerOpen && (
          <div
            className="drawer-overlay"
            onClick={() => setIsDrawerOpen(false)}
          ></div>
        )}
      </nav>

      <style>{`
        .premium-navbar,
        .premium-link,
        .column-title,
        .book-blue-btn,
        .drawer-link,
        .loc-toggle,
        .drawer-loc-header,
        .back-btn,
        .ttc-selected-title {
          font-family: Caudex, serif !important;
        }
        .premium-navbar {
          background: #fff !important;
          padding: 0 !important;
          z-index: 2000;
        }
        .logo-image {
          height: 85px;
        }

        /* TEXT-ONLY ACTIVE STATES */
        .sub-link-active {
          color: #007bff !important;
          font-weight: 700 !important;
        }
        .active-loc-text {
          color: #007bff !important;
          font-weight: 700 !important;
        }
        .mobile-active-text {
          color: #007bff !important;
          font-weight: 700 !important;
        }
        .m-sub-active-text {
          color: #007bff !important;
          font-weight: 700 !important;
        }
        .m-active-path-text {
          color: #007bff !important;
          font-weight: 700 !important;
        }

        @media (min-width: 992px) {
          .nav-spacing {
            gap: 3.8rem;
          }
          .premium-link {
            color: #444 !important;
            font-weight: 500;
            font-size: 17.5px;
            position: relative;
            padding: 12px 0;
            transition: 0.3s;
          }
          .premium-link::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0;
            height: 2.5px;
            background: #007bff;
            transition: 0.4s ease;
          }
          .premium-link:hover::after,
          .premium-link.active::after {
            width: 100%;
            left: 0;
          }
          .premium-link:hover {
            color: #007bff !important;
          }
          .mega-static {
            position: static !important;
          }
          .mega-panel {
            position: absolute;
            top: calc(100% + 5px);
            left: 0;
            width: 100%;
            background: #fff;
            border-top: 1px solid #eee;
            padding: 40px 80px;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
            display: none;
            z-index: 3000;
            border-radius: 0 0 8px 8px;
          }
          .mega-panel.show {
            display: block;
            animation: slideUpFade 0.3s ease;
          }
          .mega-column {
            border-right: 1px solid #f0f0f0;
            padding: 0 30px;
            min-height: 250px;
          }
          .mega-column.no-border {
            border-right: none;
          }
          .column-title {
            color: #007bff;
            font-weight: 700;
            font-size: 14px;
            margin-bottom: 18px;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          .mega-column a,
          .loc-toggle {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #555;
            text-decoration: none;
            padding: 8px 0;
            font-size: 15px;
            transition: 0.3s;
            cursor: pointer;
          }
          .mega-column a:hover,
          .loc-toggle:hover {
            color: #007bff;
          }
          .back-btn {
            background: #f8f9fa;
            border: 1px solid #007bff;
            color: #007bff;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 13px;
            cursor: pointer;
            transition: 0.3s;
          }
          .bridge-area {
            position: absolute;
            bottom: -15px;
            left: 0;
            width: 100%;
            height: 25px;
            background: transparent;
            z-index: 10;
          }
        }

        .fade-in {
          animation: fadeIn 0.4s ease;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .arrow-icon {
          display: inline-block;
          transition: 0.3s;
          font-size: 10px;
          margin-left: 6px;
        }
        .rotated {
          transform: rotate(180deg);
        }
        .scrollable-loc {
          max-height: 0;
          overflow: hidden;
          transition: 0.4s ease;
        }
        .scrollable-loc.open {
          max-height: 200px;
          padding: 5px 15px;
        }
        .symbol {
          font-size: 16px;
          font-weight: 300;
          opacity: 0.7;
        }

        .book-blue-btn {
          background: linear-gradient(
            135deg,
            #ff9933 0%,
            #000080 100%
          ) !important;
          color: #fff !important;
          padding: 12px 32px !important;
          border-radius: 50px !important;
          font-weight: 600;
          font-size: 15px;
          animation: floatingGlow 3.5s infinite ease-in-out;
          transition: 0.4s;
          display: inline-block;
          text-decoration: none;
        }
        .book-blue-btn:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 25px rgba(0, 0, 128, 0.5);
        }
        @keyframes floatingGlow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        .mobile-side-drawer {
          position: fixed;
          top: 0;
          left: -100%;
          width: 85%;
          max-width: 320px;
          height: 100vh;
          background: #fff;
          z-index: 4000;
          transition: 0.4s cubic-bezier(0.7, 0, 0.3, 1);
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }
        .mobile-side-drawer.open {
          left: 0;
          box-shadow: 10px 0 30px rgba(0, 0, 0, 0.1);
        }
        .drawer-header {
          padding: 25px;
          border-bottom: 1px solid #eee;
          text-align: center;
        }
        .drawer-logo {
          height: 60px;
        }
        .drawer-body {
          padding: 20px;
        }
        .drawer-link {
          display: block;
          padding: 15px 0;
          font-size: 18px;
          color: #333;
          text-decoration: none;
          border-bottom: 1px solid #f9f9f9;
        }
        .drawer-loc-header {
          display: flex;
          justify-content: space-between;
          padding: 15px 0;
          border-bottom: 1px solid #f0f0f0;
          cursor: pointer;
          font-size: 13px;
          font-weight: 700;
          color: #007bff;
          text-transform: uppercase;
        }
        .drawer-loc-header.nested {
          color: #555;
          font-weight: 500;
          font-size: 14px;
          text-transform: none;
          border-bottom: 1px dashed #eee;
        }
        .drawer-loc-body {
          max-height: 0;
          overflow: hidden;
          transition: 0.4s ease;
          padding-left: 10px;
          display: flex;
          flex-direction: column;
        }
        .drawer-loc-body.open {
          max-height: 1200px;
          padding-top: 10px;
        }
        .drawer-loc-body a {
          display: block;
          padding: 8px 0;
          color: #666;
          font-size: 14.5px;
          text-decoration: none;
        }
        .drawer-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          z-index: 3500;
          backdrop-filter: blur(2px);
        }
        .mobile-toggle-btn {
          width: 30px;
          height: 20px;
          position: relative;
          cursor: pointer;
          z-index: 5000;
        }
        .mobile-toggle-btn span {
          display: block;
          position: absolute;
          height: 2.5px;
          width: 100%;
          background: #333;
          border-radius: 2px;
          transition: 0.25s;
        }
        .mobile-toggle-btn span:nth-child(1) {
          top: 0;
        }
        .mobile-toggle-btn span:nth-child(2) {
          top: 9px;
        }
        .mobile-toggle-btn span:nth-child(3) {
          top: 18px;
        }
        .mobile-toggle-btn.open span:nth-child(1) {
          transform: rotate(45deg);
          top: 9px;
        }
        .mobile-toggle-btn.open span:nth-child(2) {
          opacity: 0;
        }
        .mobile-toggle-btn.open span:nth-child(3) {
          transform: rotate(-45deg);
          top: 9px;
        }
        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;