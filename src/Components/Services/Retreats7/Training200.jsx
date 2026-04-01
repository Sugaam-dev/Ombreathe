import React, { useState, useEffect, useCallback } from "react";

const Training200 = ({
  // ── All props have defaults = Retreats7 page stays exactly the same ──
  location,
  tagline = "7 Day Adventure and Yoga Retreat\nIn Lovely Ubud, Bali, Indonesia\nWith Ombreathe",
  title = "Combine the thrill of adventure with the serenity of yoga",
  subtitle = "7 days of transformative experiences in Bali's most spiritual destination",
  price = "$1399 USD",
  priceNote = "*All-inclusive: accommodation, meals, activities & yoga sessions",
  buttonText = "Book Your Retreat",
  heroImage = null,
  includedTitle = "Your adventure includes:",
  includedItems = [
    "• 6 nights luxury accommodation with A/C & pool",
    "• Free airport pickup from Ngurah Rai (DPS)",
    "• Daily yoga sessions and meditation",
    "• Adventure activities: rafting, trekking, temple visits",
    "• Traditional Kecak dance performance",
    "• Certificate of completion & yoga kit",
  ],
  ratings = [
    { label: "FOOD", value: "4.75" },
    { label: "TEACHERS", value: "4.5" },
  ],
  infoLines = [
    "Highly rated retreat experience with excellent food and teachers.",
    "Located 8 minutes from Ubud Palace and Market.",
  ],
  closingLine = "Transform your mind, body and spirit in Bali",
}) => {
  const [adventureImage, setAdventureImage] = useState(heroImage || null);

  // Only load default image if no heroImage prop passed (Retreats7 behaviour)
  useEffect(() => {
    if (heroImage) {
      setAdventureImage(heroImage);
      return;
    }
    const loadImage = async () => {
      try {
        const img = await import(
          "../../../images/services/7-Day Adventure Retreat.jpg"
        );
        setAdventureImage(img.default);
      } catch (error) {
        console.error("Error loading adventure image:", error);
      }
    };
    loadImage();
  }, [heroImage]);

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
        {/* First Section - Hero */}
        <div className="min-vh-100 d-flex align-items-center justify-content-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10 col-xl-8">
                <div className="text-center">

                  {/* Tagline - supports \n line breaks */}
                  <div className="mb-4 mb-md-5">
                    <h6
                      className="text-uppercase mb-2 mb-md-3"
                      style={{
                        color: "#2E3A87",
                        fontWeight: "600",
                        letterSpacing: "2px",
                        fontSize: "clamp(0.8rem, 2vw, 1rem)",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {tagline}
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
                      {title}
                    </h1>

                    <p
                      className="lead mb-0"
                      style={{
                        color: "#2E3A87",
                        fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
                        fontWeight: "300",
                      }}
                    >
                      {subtitle}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="mb-4 mb-md-5">
                    <div className="d-flex align-items-center justify-content-center flex-wrap gap-3 mb-3">
                      <span
                        className="h1"
                        style={{
                          color: "#2E3A87",
                          fontWeight: "600",
                          fontSize: "clamp(2rem, 5vw, 3rem)",
                        }}
                      >
                        {price}
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
                      {priceNote}
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
                      {buttonText}
                    </button>
                  </div>

                  {/* Location - only shows if passed */}
                  {location && (
                    <div className="mt-2">
                      <p
                        style={{
                          color: "#2E3A87",
                          fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                          fontWeight: "500",
                          margin: 0,
                        }}
                      >
                        {location}
                      </p>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section - What's Included */}
        <section className="py-5">
          <div className="container">
            <div className="row">
              {/* Hero Image */}
              <div className="col-12 mb-4 d-flex justify-content-center">
                {adventureImage ? (
                  <img
                    src={adventureImage}
                    alt={title}
                    className="img-fluid"
                    style={{
                      maxWidth: "900px",
                      width: "100%",
                      height: "auto",
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
                    <div className="text-muted">Loading image...</div>
                  </div>
                )}
              </div>

              {/* Content Below Image */}
              <div className="col-12">
                <div className="row align-items-start">

                  {/* Left - Included items */}
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
                      What's included in
                      <br />
                      your retreat...
                    </h2>

                    <div className="mb-3">
                      <h5 style={{ color: "#2E3A87", fontWeight: "500" }}>
                        {includedTitle}
                      </h5>
                      <ul className="list-unstyled" style={{ color: "#6B7280" }}>
                        {includedItems.map((item, i) => (
                          <li key={i} className="mb-2">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right - Ratings + info */}
                  <div className="col-12 col-lg-6">
                    {/* Rating badges */}
                    <div className="d-flex gap-3 mb-3 justify-content-start justify-content-lg-end">
                      {ratings.map((r, i) => (
                        <div
                          key={i}
                          className="rounded-circle d-flex align-items-center justify-content-center"
                          style={{
                            width: "80px",
                            height: "80px",
                            border: "3px solid #2E3A87",
                            color: "#2E3A87",
                          }}
                        >
                          <div className="text-center">
                            <div style={{ fontSize: "9px", fontWeight: "bold", lineHeight: "1" }}>
                              {r.label}
                            </div>
                            <div style={{ fontSize: "20px", fontWeight: "bold", lineHeight: "1" }}>
                              {r.value}
                            </div>
                            <div style={{ fontSize: "9px", lineHeight: "1" }}>
                              RATING
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Info lines */}
                    <div className="text-start text-lg-end">
                      {infoLines.map((line, i) => (
                        <p
                          key={i}
                          className="mb-1"
                          style={{
                            color: "#6B7280",
                            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                            fontWeight: "400",
                          }}
                        >
                          {line}
                        </p>
                      ))}
                      <p
                        className="mb-0"
                        style={{
                          color: "#2E3A87",
                          fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                          fontWeight: "500",
                        }}
                      >
                        {closingLine}
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