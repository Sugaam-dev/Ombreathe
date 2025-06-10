import React, { useState, useEffect, useCallback } from "react";

const Training200 = () => {
  // State for dynamic image loading
  const [meditationImage, setMeditationImage] = useState(null);

  // Load image dynamically for better performance
  useEffect(() => {
    const loadImage = async () => {
      try {
        const img = await import("../../../images/Gallery/20.jpg");
        setMeditationImage(img.default);
      } catch (error) {
        console.error("Error loading meditation image:", error);
      }
    };

    loadImage();
  }, []);

  // Memoized button hover handlers
  const handleMouseEnter = useCallback((e) => {
    e.target.style.transform = "translateY(-2px)";
    e.target.style.boxShadow = "0 12px 35px rgba(46, 58, 135, 0.4)";
  }, []);

  const handleMouseLeave = useCallback((e) => {
    e.target.style.transform = "translateY(0)";
    e.target.style.boxShadow = "0 8px 25px rgba(46, 58, 135, 0.3)";
  }, []);

  return (
    <>
      <div>
        {/* First Section - Retreat Offer */}
        <div className="min-vh-100 d-flex align-items-center justify-content-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10 col-xl-8">
                <div className="text-center">
                  {/* Header section */}
                  <div className="mb-4 mb-md-5">
                    <h6
                      className="text-uppercase mb-2 mb-md-3"
                      style={{
                        color: "#2E3A87",
                        fontWeight: "600",
                        letterSpacing: "2px",
                        fontSize: "clamp(0.8rem, 2vw, 1rem)",
                      }}
                    >
                      7 Day Multi-Style & Meditation Retreat
                      <br />
                      In Magical Bali, Indonesia
                      <br />
                      With Yogalayaa
                    </h6>
                  </div>

                  {/* Main title */}
                  <div className="mb-4 mb-md-5">
                    <h1
                      className="display-4 mb-4"
                      style={{
                        color: "#2E3A87",
                        fontWeight: "400",
                        lineHeight: "1.2",
                        fontSize: "clamp(2rem, 5vw, 3.5rem)",
                      }}
                    >
                      Embrace the power of silence and discover inner peace
                    </h1>

                    <p
                      className="lead mb-0"
                      style={{
                        color: "#2E3A87",
                        fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
                        fontWeight: "300",
                      }}
                    >
                      7 days of transformative silent meditation and multi-style
                      yoga practice
                    </p>
                  </div>

                  {/* Pricing section */}
                  <div className="mb-4 mb-md-5">
                    <div className="d-flex align-items-center justify-content-center flex-wrap gap-3 mb-3">
                      <span
                        className="h2"
                        style={{
                          color: "#A8A8A8",
                          fontWeight: "300",
                          fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                          textDecoration: "line-through",
                        }}
                      >
                        $1599
                      </span>
                      <span
                        className="h1"
                        style={{
                          color: "#2E3A87",
                          fontWeight: "600",
                          fontSize: "clamp(2rem, 5vw, 3rem)",
                        }}
                      >
                        $1099
                      </span>
                    </div>

                    <p
                      className="mb-0"
                      style={{
                        color: "#2E3A87",
                        fontWeight: "500",
                        fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                      }}
                    >
                      *Early bird offer - includes accommodation, meals & all
                      sessions
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div className="mb-4">
                    <button
                      className="btn btn-lg px-5 py-3 text-white text-uppercase fw-semibold"
                      style={{
                        backgroundColor: "#2E3A87",
                        border: "none",
                        borderRadius: "50px",
                        fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                        letterSpacing: "1px",
                        boxShadow: "0 8px 25px rgba(46, 58, 135, 0.3)",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      Book Your Retreat
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section - What's Included */}
        <section className="py-5">
          <div className="container">
            <div className="row">
              {/* Image Section - Lazy loaded with loading state */}
              <div className="col-12 mb-4 d-flex justify-content-center">
                {meditationImage ? (
                  <img
                    src={meditationImage}
                    alt="Silent meditation and yoga in Bali"
                    className="img-fluid"
                    style={{
                      maxWidth: "900px",
                      width: "100%",
                      height: "400px",
                      borderRadius: "25px",
                      objectFit: "cover",
                    }}
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="d-flex align-items-center justify-content-center bg-light"
                    style={{
                      maxWidth: "900px",
                      width: "100%",
                      height: "400px",
                      borderRadius: "25px",
                    }}
                  >
                    <div className="text-muted">Loading meditation image...</div>
                  </div>
                )}
              </div>

              {/* Content Section Below Image */}
              <div className="col-12">
                <div className="row align-items-start">
                  {/* Left side - Title */}
                  <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                    <h2
                      className="mb-4"
                      style={{
                        color: "#2E3A87",
                        fontWeight: "400",
                        fontSize: "clamp(2rem, 4vw, 3rem)",
                        lineHeight: "1.2",
                      }}
                    >
                      Your silent retreat
                      <br />
                      includes...
                    </h2>

                    <div className="mb-3">
                      <h5 style={{ color: "#2E3A87", fontWeight: "500" }}>
                        Silent meditation experience:
                      </h5>
                      <ul
                        className="list-unstyled"
                        style={{ color: "#6B7280" }}
                      >
                        <li className="mb-2">
                          • 6 nights accommodation with A/C & pool
                        </li>
                        <li className="mb-2">
                          • Daily silent meditation and yoga sessions
                        </li>
                        <li className="mb-2">
                          • 5 yoga styles: Ashtanga, Hatha, Nidra, Vipassana,
                          Vinyasa
                        </li>
                        <li className="mb-2">
                          • Sound healing and inner child healing sessions
                        </li>
                        <li className="mb-2">
                          • Traditional Kecak dance performance
                        </li>
                        <li className="mb-2">
                          • Free yoga kit & certificate of completion
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Right side - Ratings */}
                  <div className="col-12 col-lg-6">
                    {/* Rating badges */}
                    <div className="d-flex gap-3 mb-3 justify-content-start justify-content-lg-end">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center"
                        style={{
                          width: "80px",
                          height: "80px",
                          border: "3px solid #2E3A87",
                          color: "#2E3A87",
                        }}
                      >
                        <div className="text-center">
                          <div
                            style={{
                              fontSize: "11px",
                              fontWeight: "bold",
                              lineHeight: "1",
                            }}
                          >
                            FOOD
                          </div>
                          <div
                            style={{
                              fontSize: "20px",
                              fontWeight: "bold",
                              lineHeight: "1",
                            }}
                          >
                            4.75
                          </div>
                          <div style={{ fontSize: "9px", lineHeight: "1" }}>
                            RATING
                          </div>
                        </div>
                      </div>
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center"
                        style={{
                          width: "80px",
                          height: "80px",
                          border: "3px solid #2E3A87",
                          color: "#2E3A87",
                        }}
                      >
                        <div className="text-center">
                          <div
                            style={{
                              fontSize: "8px",
                              fontWeight: "bold",
                              lineHeight: "1",
                            }}
                          >
                            TEACHERS
                          </div>
                          <div
                            style={{
                              fontSize: "20px",
                              fontWeight: "bold",
                              lineHeight: "1",
                            }}
                          >
                            4.5
                          </div>
                          <div style={{ fontSize: "9px", lineHeight: "1" }}>
                            RATING
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Info text */}
                    <div className="text-start text-lg-end">
                      <p
                        className="mb-1"
                        style={{
                          color: "#6B7280",
                          fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                          fontWeight: "400",
                        }}
                      >
                        Highly rated for excellent sattvic food and experienced
                        teachers.
                      </p>
                      <p
                        className="mb-1"
                        style={{
                          color: "#6B7280",
                          fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                          fontWeight: "400",
                        }}
                      >
                        Modern Balinese accommodations in lush Ubud
                        surroundings.
                      </p>
                      <p
                        className="mb-0"
                        style={{
                          color: "#2E3A87",
                          fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                          fontWeight: "500",
                        }}
                      >
                        Deepen your meditation practice and connect with your
                        inner self
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default React.memo(Training200);