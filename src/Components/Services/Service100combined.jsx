import React, { useState, useEffect, Suspense } from "react";
import {
  Award,
  MapPin,
  Clock,
  Calendar,
  Star,
  ChevronDown,
  ChevronRight,
  Leaf,
  Heart,
  Sun,
  Moon,
  Wind,
  BookOpen,
  Users,
  Shield,
  Mountain,
  Camera,
  Compass,
  Coffee,
  Utensils,
  Bed,
  Wifi,
  Music,
  Trees,
  Waves,
  Flame,
  Globe,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Dumbbell,
  Brain,
  Feather,
  Sunrise,
  Timer,
} from "lucide-react";

// ─── GLOBAL STYLES ─────────────────────────────────────────────────────────────
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --navy: #1a2456;
      --navy-mid: #2E3A87;
      --violet: #5B4FCF;
      --violet-light: #7B6FDF;
      --gold: #C8964A;
      --gold-light: #E8B86D;
      --sage: #7BAF8A;
      --cream: #FAF8F4;
      --cream-dark: #F0EDE7;
      --stone: #8A8070;
      --ink: #1C1A16;
      --white: #FFFFFF;
      --font-display: 'Cormorant Garamond', Georgia, serif;
      --font-body: 'DM Sans', system-ui, sans-serif;
      --radius-sm: 8px;
      --radius-md: 16px;
      --radius-lg: 28px;
      --radius-xl: 40px;
      --shadow-sm: 0 2px 12px rgba(26,36,86,0.08);
      --shadow-md: 0 8px 32px rgba(26,36,86,0.12);
      --shadow-lg: 0 20px 60px rgba(26,36,86,0.16);
      --shadow-xl: 0 32px 80px rgba(26,36,86,0.20);
    }

    body { font-family: var(--font-body); background: var(--cream); color: var(--ink); }

    .omb-root { font-family: var(--font-body); background: var(--cream); color: var(--ink); overflow-x: hidden; }

    /* ── SECTION LABEL ── */
    .section-eyebrow {
      display: inline-flex; align-items: center; gap: 10px;
      font-family: var(--font-body); font-size: 0.7rem; font-weight: 600;
      letter-spacing: 3px; text-transform: uppercase; color: var(--gold);
      margin-bottom: 1.25rem;
    }
    .section-eyebrow::before {
      content: ''; display: block; width: 28px; height: 1.5px; background: var(--gold);
    }

    /* ── DISPLAY HEADING ── */
    .display-heading {
      font-family: var(--font-display); font-weight: 300;
      color: var(--navy); line-height: 1.15; letter-spacing: -0.01em;
    }
    .display-heading em { font-style: italic; color: var(--violet); }
    .display-heading strong { font-weight: 600; }

    /* ── BODY TEXT ── */
    .body-text { font-family: var(--font-body); color: var(--stone); line-height: 1.75; }

    /* ── PRIMARY BUTTON ── */
    .btn-primary-omb {
      display: inline-flex; align-items: center; gap: 10px;
      padding: 16px 36px; border-radius: 50px; border: none; cursor: pointer;
      background: var(--navy); color: var(--white);
      font-family: var(--font-body); font-size: 0.88rem; font-weight: 500; letter-spacing: 0.5px;
      box-shadow: 0 8px 28px rgba(26,36,86,0.28);
      transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
      text-decoration: none;
    }
    .btn-primary-omb:hover {
      background: var(--violet); transform: translateY(-2px);
      box-shadow: 0 14px 36px rgba(91,79,207,0.35);
    }
    .btn-outline-omb {
      display: inline-flex; align-items: center; gap: 10px;
      padding: 14px 32px; border-radius: 50px; cursor: pointer;
      background: transparent; color: var(--navy);
      font-family: var(--font-body); font-size: 0.88rem; font-weight: 500;
      border: 1.5px solid rgba(26,36,86,0.25);
      transition: all 0.3s ease;
      text-decoration: none;
    }
    .btn-outline-omb:hover { border-color: var(--navy); background: var(--navy); color: white; }

    /* ── CARD BASE ── */
    .card-omb {
      background: var(--white); border-radius: var(--radius-lg);
      box-shadow: var(--shadow-sm);
      border: 1px solid rgba(26,36,86,0.06);
      transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
    }
    .card-omb:hover { box-shadow: var(--shadow-lg); transform: translateY(-6px); }

    /* ── DIVIDER ── */
    .ornamental-divider {
      display: flex; align-items: center; gap: 16px;
      margin: 2rem 0; color: var(--gold); font-size: 1rem;
    }
    .ornamental-divider::before, .ornamental-divider::after {
      content: ''; flex: 1; height: 1px; background: linear-gradient(90deg, transparent, var(--gold-light), transparent);
    }

    /* ── PLACEHOLDER IMAGE ── */
    .img-placeholder {
      background: linear-gradient(135deg, var(--cream-dark) 0%, #E8E4DC 100%);
      display: flex; align-items: center; justify-content: center;
      color: var(--stone); font-family: var(--font-body); font-size: 0.8rem;
    }

    /* ── RESPONSIVE UTILS ── */
    @media (max-width: 768px) {
      .hide-mobile { display: none !important; }
    }
    @media (min-width: 769px) {
      .hide-desktop { display: none !important; }
    }

    /* ── ANIMATIONS ── */
    @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
    @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
    @keyframes pulse-gold { 0%,100%{box-shadow:0 0 0 0 rgba(200,150,74,0.3);} 50%{box-shadow:0 0 0 12px rgba(200,150,74,0);} }
    @keyframes spin { to { transform: rotate(360deg); } }
    @keyframes float { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-10px);} }

    .animate-fade-up { animation: fadeUp 0.8s ease both; }
    .animate-fade-in { animation: fadeIn 0.6s ease both; }
  `}</style>
);

// ─── PLACEHOLDER IMG ───────────────────────────────────────────────────────────
const Img = ({ label = "", style = {}, className = "" }) => (
  <div
    className={`img-placeholder ${className}`}
    style={{ width: "100%", height: "100%", minHeight: 240, ...style }}
  >
    <span style={{ opacity: 0.5, fontSize: "0.75rem" }}>{label}</span>
  </div>
);

// ─── LOADING SPINNER ───────────────────────────────────────────────────────────
const LoadingSpinner = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "3rem",
      gap: 12,
    }}
  >
    <div
      style={{
        width: 24,
        height: 24,
        border: "2px solid #E8E4DC",
        borderTop: "2px solid var(--violet)",
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite",
      }}
    />
    <span
      style={{
        color: "var(--stone)",
        fontFamily: "var(--font-body)",
        fontSize: "0.85rem",
      }}
    >
      Loading…
    </span>
  </div>
);

// ══════════════════════════════════════════════════════════════════════════════
// 1. TRAINING200 — HERO + CERTIFICATE
// ══════════════════════════════════════════════════════════════════════════════
const Training200 = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  const gains = [
    "Foundation in authentic yoga from indigenous teachers",
    "Essential knowledge of yoga fundamentals and safety",
    "Basic teaching skills and confidence building",
    "Introduction to yoga philosophy and lifestyle",
    "Foundation certificate for continuing education",
    "Personal practice development and self-discovery",
  ];

  return (
    <section style={{ background: "var(--cream)" }}>
      
      {/* ───────── HERO ───────── */}
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1545389336-cf090694435e"
          alt="Yoga Bali"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            top: 0,
            left: 0,
          }}
        />

        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(26,36,86,0.6), rgba(26,36,86,0.85))",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            textAlign: "center",
            maxWidth: 900,
            padding: "clamp(40px,6vw,80px) 20px",
            color: "white",
          }}
        >
          <div
            className="section-eyebrow"
            style={{
              justifyContent: "center",
              color: "var(--gold-light)",
              animation: loaded ? "fadeUp 0.7s ease both" : "none",
            }}
          >
            <MapPin size={14} /> Ubud, Bali · 100-Hour Foundation
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem,6vw,4.5rem)",
              fontWeight: 300,
              lineHeight: 1.2,
              marginBottom: "1.5rem",
              animation: loaded ? "fadeUp 0.8s 0.1s ease both" : "none",
            }}
          >
            Begin Your <em style={{ color: "var(--gold-light)" }}>Yoga Journey</em>
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem,2vw,1.2rem)",
              color: "rgba(255,255,255,0.85)",
              marginBottom: "2rem",
              animation: loaded ? "fadeUp 0.8s 0.2s ease both" : "none",
            }}
          >
            Transform your life with a 100-hour immersive yoga training in Bali
          </p>

          {/* Price */}
          <div
            style={{
              fontSize: "clamp(2.5rem,5vw,4rem)",
              fontWeight: 600,
              marginBottom: "1rem",
              animation: loaded ? "fadeUp 0.8s 0.3s ease both" : "none",
            }}
          >
            $1,399
          </div>

          <p
            style={{
              fontSize: "0.9rem",
              opacity: 0.8,
              marginBottom: "2rem",
            }}
          >
            Includes stay, meals & certification
          </p>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button className="btn-primary-omb">
              Book Now <ArrowRight size={16} />
            </button>

            <button className="btn-outline-omb">
              Explore <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* ───────── CERTIFICATE SECTION ───────── */}
      <div
        style={{
          padding: "clamp(60px,8vw,100px) 20px",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* Image */}
        <div
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            marginBottom: "50px",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3"
            alt="Yoga Training"
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 40,
          }}
        >
          {/* LEFT */}
          <div>
            <h2 className="display-heading">
              What You’ll <em>Gain</em>
            </h2>

            <div style={{ marginTop: 20 }}>
              {gains.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 10,
                    marginBottom: 12,
                    alignItems: "flex-start",
                  }}
                >
                  <CheckCircle size={18} color="var(--sage)" />
                  <span className="body-text">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
              {[
                { label: "100 Hrs", icon: <Clock size={18} /> },
                { label: "Certified", icon: <Award size={18} /> },
                { label: "Global", icon: <Globe size={18} /> },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    padding: 16,
                    borderRadius: 16,
                    background: "var(--cream)",
                    textAlign: "center",
                  }}
                >
                  <div style={{ marginBottom: 6 }}>{item.icon}</div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 600 }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <p className="body-text">
              Receive a certified 100-hour foundation certificate and begin your
              transformation journey in yoga.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ══════════════════════════════════════════════════════════════════════════════
// 2. HOUSE OF YOGA
// ══════════════════════════════════════════════════════════════════════════════
const HouseOfYoga = () => {
  const stats = [
    { value: "100+", label: "Training Hours", icon: <Clock size={20} /> },
    { value: "Beginner", label: "Friendly Program", icon: <Heart size={20} /> },
    { value: "13 Days", label: "Immersive Journey", icon: <Calendar size={20} /> },
    { value: "Certified", label: "Yoga Certification", icon: <Award size={20} /> },
    { value: "Global", label: "Yoga Community", icon: <Globe size={20} /> },
  ];

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        color: "white",
      }}
    >
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1506126613408-eca07ce68773"
        alt="Yoga Bali"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          top: 0,
          left: 0,
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(26,36,86,0.75), rgba(26,36,86,0.95))",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "clamp(70px,9vw,110px) 20px",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div
            className="section-eyebrow"
            style={{ justifyContent: "center", color: "var(--gold-light)" }}
          >
            <Sparkles size={14} /> Ombreathe Experience
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem,4.5vw,3.6rem)",
              fontWeight: 300,
              lineHeight: 1.2,
              marginBottom: "1.25rem",
            }}
          >
            Join our{" "}
            <em style={{ color: "var(--gold-light)" }}>transformative</em>{" "}
            yoga community
          </h2>

          <p
            style={{
              maxWidth: 600,
              margin: "0 auto",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.7,
            }}
          >
            Experience authentic yoga in Bali with expert teachers, deep
            philosophy, and life-changing practices.
          </p>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 20,
            marginBottom: 60,
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                padding: 20,
                borderRadius: 20,
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.15)",
                textAlign: "center",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.background = "rgba(255,255,255,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
              }}
            >
              <div style={{ marginBottom: 8 }}>{s.icon}</div>

              <div
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 600,
                  color: "var(--gold-light)",
                }}
              >
                {s.value}
              </div>

              <div
                style={{
                  fontSize: "0.8rem",
                  opacity: 0.75,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
          <div className="ornamental-divider">
            <Feather size={14} />
          </div>

          <p
            style={{
              lineHeight: 1.8,
              opacity: 0.8,
              marginBottom: 16,
            }}
          >
            Our 100-hour foundation training is designed for beginners looking
            to build a strong base in yoga, including posture, breathing,
            philosophy, and teaching fundamentals.
          </p>

          <p style={{ opacity: 0.7 }}>
            Learn in a peaceful Bali environment while transforming your body,
            mind, and soul.
          </p>
        </div>
      </div>
    </section>
  );
};
// ══════════════════════════════════════════════════════════════════════════════
// 3. YOGA TRAINING PROMO
// ══════════════════════════════════════════════════════════════════════════════
const YogaTrainingPromo = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  const features = [
    {
      icon: <Award size={18} />,
      title: "Yoga Alliance Certificate",
      sub: "Globally recognized certification",
    },
    {
      icon: <Bed size={18} />,
      title: "Premium Accommodation",
      sub: "Stay in modern Balinese resort",
    },
    {
      icon: <Utensils size={18} />,
      title: "Healthy Organic Meals",
      sub: "Veg, vegan & gluten-free options",
    },
    {
      icon: <Heart size={18} />,
      title: "Wellness & Healing",
      sub: "Massage + sound healing sessions",
    },
    {
      icon: <Compass size={18} />,
      title: "Cultural Tours",
      sub: "Temples, rice fields & nature",
    },
  ];

  return (
    <section
      style={{
        background: "var(--cream)",
        padding: "clamp(70px,9vw,110px) 20px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "clamp(40px,6vw,80px)",
            alignItems: "center",
          }}
        >
          {/* LEFT CONTENT */}
          <div>
            <div className="section-eyebrow">
              <Sparkles size={14} /> Bali Yoga Experience
            </div>

            <h2
              className="display-heading"
              style={{
                fontSize: "clamp(2rem,4vw,3.2rem)",
                marginBottom: "2rem",
              }}
            >
              Join our <em>immersive</em> 13-day yoga journey in{" "}
              <strong>Ubud</strong>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {features.map((f, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 14,
                    alignItems: "flex-start",
                    padding: "12px 14px",
                    borderRadius: 14,
                    background: "var(--white)",
                    boxShadow: "var(--shadow-sm)",
                    transition: "all 0.3s ease",
                    opacity: visible ? 1 : 0,
                    transform: visible
                      ? "translateX(0)"
                      : "translateX(-20px)",
                    transitionDelay: `${i * 0.1}s`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(6px)";
                    e.currentTarget.style.boxShadow = "var(--shadow-md)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                  }}
                >
                  <div
                    style={{
                      minWidth: 40,
                      height: 40,
                      borderRadius: 10,
                      background: "var(--navy)",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {f.icon}
                  </div>

                  <div>
                    <p
                      style={{
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        marginBottom: 2,
                      }}
                    >
                      {f.title}
                    </p>
                    <p
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--violet)",
                      }}
                    >
                      {f.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {/* Main Image */}
            <div
              style={{
                borderRadius: 20,
                overflow: "hidden",
                height: "clamp(220px,30vw,350px)",
                boxShadow: "var(--shadow-lg)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773"
                alt="Yoga Practice"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.6s ease",
                }}
              />
            </div>

            {/* Small Images */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 14,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3"
                alt="Yoga Food"
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: 16,
                }}
              />

              <img
                src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba"
                alt="Yoga Stay"
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: 16,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
// ══════════════════════════════════════════════════════════════════════════════
// 4. TRANSFORMATION QUOTE
// ══════════════════════════════════════════════════════════════════════════════
const Transformation = () => (
  <section
    style={{
      position: "relative",
      overflow: "hidden",
      textAlign: "center",
      color: "white",
    }}
  >
    {/* Background Image */}
    <img
      src="https://images.unsplash.com/photo-1506126613408-eca07ce68773"
      alt="Yoga Meditation"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        top: 0,
        left: 0,
      }}
    />

    {/* Overlay */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(180deg, rgba(26,36,86,0.75), rgba(26,36,86,0.95))",
      }}
    />

    {/* Content */}
    <div
      style={{
        position: "relative",
        maxWidth: 900,
        margin: "0 auto",
        padding: "clamp(80px,10vw,130px) 20px",
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: 70,
          height: 70,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 24px",
          backdropFilter: "blur(10px)",
        }}
      >
        <Sparkles size={30} color="var(--gold)" />
      </div>

      {/* Quote */}
      <blockquote
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.8rem,4vw,3.2rem)",
          fontWeight: 300,
          lineHeight: 1.35,
          marginBottom: "2rem",
        }}
      >
        Begin your{" "}
        <em style={{ color: "var(--gold-light)" }}>
          transformative yoga journey
        </em>{" "}
        in the spiritual heart of Bali
      </blockquote>

      {/* Description */}
      <p
        style={{
          fontSize: "clamp(0.95rem,1.8vw,1.1rem)",
          opacity: 0.85,
          lineHeight: 1.8,
          maxWidth: 700,
          margin: "0 auto",
        }}
      >
        Discover a deeper connection with yourself through guided practice,
        ancient wisdom, and a supportive community designed to nurture your
        growth.
      </p>
    </div>
  </section>
);
// ══════════════════════════════════════════════════════════════════════════════
// 5. TRANS TEACH — image cards
// ══════════════════════════════════════════════════════════════════════════════
const TransTeach = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  const practices = [
    {
      label: "Foundational Hatha Yoga",
      desc: "Gentle introduction to postures, breathing & meditation",
      icon: <Sun size={20} />,
      img: "https://images.unsplash.com/photo-1518611012118-f2fbdc7a1c1b",
    },
    {
      label: "Gentle Vinyasa Flow",
      desc: "Flowing sequences connecting breath & movement",
      icon: <Wind size={20} />,
      img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    },
    {
      label: "Fundamental Pranayama",
      desc: "Breathing techniques for calmness & clarity",
      icon: <Feather size={20} />,
      img: "https://images.unsplash.com/photo-1526401281623-3594d7d97c3f",
    },
  ];

  const specials = [
    {
      title: "Beginner-Friendly",
      desc: "Step-by-step guidance for complete beginners",
      icon: <Heart size={18} />,
    },
    {
      title: "Strong Foundation",
      desc: "Learn essential yoga techniques & safety",
      icon: <Shield size={18} />,
    },
    {
      title: "Personal Growth",
      desc: "Transform your body, mind & confidence",
      icon: <Sparkles size={18} />,
    },
  ];

  return (
    <section
      style={{
        background: "var(--cream)",
        padding: "clamp(70px,9vw,110px) 20px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="section-eyebrow" style={{ justifyContent: "center" }}>
            Core Practices
          </div>

          <h2 className="display-heading">
            Foundation of <em>Yoga, Flow & Breath</em>
          </h2>

          <p className="body-text" style={{ maxWidth: 650, margin: "0 auto" }}>
            Learn essential yoga practices designed for beginners to build
            strength, flexibility, and inner balance.
          </p>
        </div>

        {/* PRACTICE CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            marginBottom: 70,
          }}
        >
          {practices.map((p, i) => (
            <div
              key={i}
              className="card-omb"
              style={{
                overflow: "hidden",
                transition: "all 0.4s ease",
                transform: visible ? "translateY(0)" : "translateY(30px)",
                opacity: visible ? 1 : 0,
                transitionDelay: `${i * 0.15}s`,
              }}
            >
              {/* Image */}
              <div style={{ height: 200, overflow: "hidden" }}>
                <img
                  src={p.img}
                  alt={p.label}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: 24 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "var(--navy)",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 12,
                  }}
                >
                  {p.icon}
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.3rem",
                    marginBottom: 8,
                  }}
                >
                  {p.label}
                </h3>

                <p className="body-text">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* SPECIAL FEATURES */}
        <div
          style={{
            background: "white",
            borderRadius: 20,
            padding: "clamp(30px,5vw,50px)",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <h3
            className="display-heading"
            style={{ textAlign: "center", marginBottom: 40 }}
          >
            Why Choose <em>This Training</em>
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 24,
            }}
          >
            {specials.map((s, i) => (
              <div
                key={i}
                style={{
                  padding: 20,
                  borderRadius: 16,
                  background: "var(--cream)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "var(--navy)",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 12,
                  }}
                >
                  {s.icon}
                </div>

                <h4 style={{ marginBottom: 6 }}>{s.title}</h4>
                <p className="body-text">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ══════════════════════════════════════════════════════════════════════════════
// 6. CURRICULUM
// ══════════════════════════════════════════════════════════════════════════════
const YogaCoursesPage = () => {
  const courses = [
    {
      title: "Basic Asana Practice",
      icon: <Dumbbell size={22} />,
      content: [
        "Fundamental standing postures",
        "Basic seated positions and forward folds",
        "Gentle backbends and twists",
        "Introduction to Sun Salutations",
        "Basic balancing poses",
        "Simple inversions (legs up wall)",
        "Relaxation poses and savasana",
        "Proper alignment principles",
        "Safe entry and exit from poses",
      ],
    },
    {
      title: "Basic Pranayama & Breathing",
      icon: <Wind size={22} />,
      content: [
        "Introduction to yogic breathing",
        "Diaphragmatic breathing technique",
        "Three-part breath (Dirga Pranayama)",
        "Basic Ujjayi breathing",
        "Simple breath awareness practices",
        "Breath counting techniques",
        "Benefits of conscious breathing",
        "Breathing for relaxation",
        "Integration with movement",
      ],
    },
    {
      title: "Yoga Philosophy Introduction",
      icon: <BookOpen size={22} />,
      content: [
        "What is Yoga? - Definition and purpose",
        "Brief history of yoga",
        "Introduction to yoga lifestyle",
        "Basic ethical principles (Yamas & Niyamas)",
        "Understanding yoga beyond physical practice",
        "Meditation and mindfulness basics",
        "Yoga and daily life integration",
        "Respect for tradition and teachers",
        "Personal practice development",
      ],
    },
    {
      title: "Basic Teaching Skills",
      icon: <Users size={22} />,
      content: [
        "How to demonstrate basic poses",
        "Clear and simple verbal instructions",
        "Creating a safe practice environment",
        "Basic class structure and timing",
        "Observing students safely",
        "Offering simple modifications",
        "Voice projection and communication",
        "Building confidence as a teacher",
        "Student-teacher boundaries",
      ],
    },
    {
      title: "Essential Anatomy",
      icon: <Heart size={22} />,
      content: [
        "Basic body awareness",
        "Major muscle groups and bones",
        "Spine health and safety",
        "Joint mobility and protection",
        "Common areas of tension",
        "Breathing muscles and mechanics",
        "Warning signs and contraindications",
        "Injury prevention basics",
        "Body alignment fundamentals",
      ],
    },
    {
      title: "Meditation & Relaxation",
      icon: <Brain size={22} />,
      content: [
        "Introduction to meditation",
        "Basic seated meditation postures",
        "Guided relaxation techniques",
        "Body scan meditation",
        "Mindfulness practices",
        "Stress reduction through yoga",
        "Creating personal meditation practice",
        "Yoga Nidra introduction",
        "Daily mindfulness integration",
      ],
    },
    {
      title: "Class Sequencing Basics",
      icon: <Sparkles size={22} />,
      content: [
        "Simple warm-up sequences",
        "Basic class structure",
        "Cool-down and relaxation",
        "Beginner-friendly flows",
        "Modification and adaptation",
        "Time management in classes",
        "Creating balanced practice",
        "Student safety priorities",
        "Building confidence in sequencing",
      ],
    },
    {
      title: "Personal Practice Development",
      icon: <Leaf size={22} />,
      content: [
        "Establishing daily practice routine",
        "Home practice guidelines",
        "Self-study and reflection",
        "Setting realistic goals",
        "Tracking progress safely",
        "Listening to your body",
        "Building consistency over intensity",
        "Journaling and self-reflection",
        "Connecting with yoga community",
      ],
    },
  ];

  const trainingPhases = [
    {
      days: "Days 1–4",
      label: "Foundation",
      desc: "Foundation of yoga practice, basic postures, breathing techniques, and introduction to philosophy",
      accent: "#2E3A87",
    },
    {
      days: "Days 5–8",
      label: "Skills",
      desc: "Basic teaching skills, gentle flows, meditation practices, and personal practice development",
      accent: "#5B4FCF",
    },
    {
      days: "Days 9–13",
      label: "Integration",
      desc: "Class sequencing, practice teaching, integration, assessment, and graduation ceremony",
      accent: "#7BAF8A",
    },
  ];

  const outcomes = [
    {
      emoji: <Leaf size={22} />,
      title: "Personal Practice",
      desc: "Establish a safe, sustainable personal yoga practice with proper alignment, breathing techniques, and basic meditation skills for daily well-being.",
    },
    {
      emoji: <Star size={22} />,
      title: "Basic Teaching Skills",
      desc: "Learn fundamental teaching skills including clear instruction, basic sequencing, and creating a safe environment for beginner students.",
    },
    {
      emoji: <BookOpen size={22} />,
      title: "Yoga Foundation",
      desc: "Understand basic yoga philosophy, ethics, and lifestyle principles that support both personal practice and teaching with authenticity and respect.",
    },
  ];

  return (
    <section
      style={{
        background: "var(--white)",
        padding: "clamp(70px,9vw,110px) clamp(20px,5vw,60px)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{ textAlign: "center", marginBottom: "clamp(48px,7vw,72px)" }}
        >
          <div className="section-eyebrow" style={{ justifyContent: "center" }}>
            Curriculum
          </div>
          <h2
            className="display-heading"
            style={{
              fontSize: "clamp(2rem,4.5vw,3.6rem)",
              marginBottom: "1rem",
            }}
          >
            100-hour Foundation Yoga
            <br />
            <em>Teacher Training</em>
          </h2>
          <p
            className="body-text"
            style={{ maxWidth: 640, margin: "0 auto", fontSize: "0.97rem" }}
          >
            Essential Foundation Curriculum — our curriculum provides essential
            resources for beginners seeking to establish a solid foundation in
            yoga practice and basic teaching skills.
          </p>
        </div>

        {/* Course cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 20,
            marginBottom: "clamp(50px,7vw,80px)",
          }}
        >
          {courses.map((course, i) => (
            <div
  key={i}
  className="card-omb"
  style={{
    padding: 24,
    transition: "all 0.3s ease",
    cursor: "pointer",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-6px)";
    e.currentTarget.style.boxShadow = "var(--shadow-lg)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "var(--shadow-sm)";
  }}
>
  <div
    style={{
      width: 50,
      height: 50,
      borderRadius: 12,
      background: "linear-gradient(135deg,var(--navy),var(--violet))",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 16,
    }}
  >
    {course.icon}
  </div>

  <h4
    style={{
      fontWeight: 600,
      color: "var(--navy)",
      marginBottom: 12,
      fontSize: "1rem",
    }}
  >
    {course.title}
  </h4>

  <ul style={{ listStyle: "none", padding: 0 }}>
    {course.content.map((item, j) => (
      <li
        key={j}
        style={{
          display: "flex",
          gap: 8,
          fontSize: "0.85rem",
          marginBottom: 6,
        }}
      >
        <CheckCircle size={14} color="var(--sage)" />
        {item}
      </li>
    ))}
  </ul>
</div>
          ))}
        </div>

        {/* Training phases */}
        <div style={{ marginBottom: "clamp(50px,7vw,80px)" }}>
          <h3
            className="display-heading"
            style={{
              fontSize: "clamp(1.5rem,3vw,2.4rem)",
              textAlign: "center",
              marginBottom: "clamp(24px,4vw,40px)",
            }}
          >
            13-Day Foundation Training <em>Structure</em>
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 20,
            }}
          >
            {trainingPhases.map((phase, i) => (
              <div
  key={i}
  style={{
    background: "white",
    borderRadius: 20,
    padding: 24,
    borderLeft: `4px solid ${phase.accent}`,
    boxShadow: "var(--shadow-sm)",
    transition: "all 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-5px)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
  }}
>
  <div style={{ fontSize: "0.75rem", color: phase.accent }}>
    {phase.days}
  </div>

  <h4 style={{ margin: "6px 0", color: "var(--navy)" }}>
    {phase.label}
  </h4>

  <p className="body-text">{phase.desc}</p>
</div>
            ))}
          </div>
        </div>

        {/* Who is this for */}
        <div
          style={{
            background: "var(--cream)",
            borderRadius: "var(--radius-xl)",
            padding: "clamp(28px,4vw,48px)",
            marginBottom: "clamp(40px,6vw,64px)",
            border: "1px solid rgba(26,36,86,0.07)",
          }}
        >
          <h3
            className="display-heading"
            style={{
              fontSize: "clamp(1.5rem,3vw,2rem)",
              marginBottom: "1.5rem",
            }}
          >
            Who This Foundation Training Is <em>For</em>
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 12,
            }}
          >
            {[
              "Complete beginners to yoga practice",
              "Those wanting to deepen personal practice",
              "People interested in basic teaching skills",
              "Students preparing for 200-hour training",
              "Those seeking stress relief and wellness",
              "Anyone curious about yoga philosophy and lifestyle",
            ].map((item, i) => (
              <div
                key={i}
                style={{ display: "flex", alignItems: "flex-start", gap: 10 }}
              >
                <CheckCircle
                  size={16}
                  style={{ color: "var(--sage)", flexShrink: 0, marginTop: 2 }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--stone)",
                    fontSize: "0.88rem",
                    lineHeight: 1.55,
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Outcomes */}
        <div>
          <h3
            className="display-heading"
            style={{
              fontSize: "clamp(1.5rem,3vw,2.4rem)",
              textAlign: "center",
              marginBottom: "clamp(24px,4vw,40px)",
            }}
          >
            Foundation Learning <em>Outcomes</em>
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 20,
            }}
          >
            {outcomes.map((o, i) => (
             <div
  key={i}
  className="card-omb"
  style={{
    padding: 26,
    transition: "all 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-6px)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
  }}
>
  <div
    style={{
      width: 50,
      height: 50,
      borderRadius: 12,
      background: "var(--navy)",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 16,
    }}
  >
    {o.emoji}
  </div>

  <h4 style={{ marginBottom: 8 }}>{o.title}</h4>
  <p className="body-text">{o.desc}</p>
</div>
            ))}
          </div>
        </div>

        {/* Upon completion */}
        <div
          style={{
            marginTop: "clamp(40px,6vw,64px)",
            background: "var(--navy)",
            borderRadius: "var(--radius-xl)",
            padding: "clamp(32px,5vw,52px)",
            color: "white",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <Award
              size={32}
              style={{
                color: "var(--gold)",
                marginBottom: 12,
                display: "inline-block",
              }}
            />
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem,3vw,2.2rem)",
                fontWeight: 400,
                color: "white",
                letterSpacing: "-0.01em",
              }}
            >
              Upon Completion &amp;{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>
                Next Steps
              </em>
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                color: "rgba(255,255,255,0.6)",
                marginTop: 10,
                fontSize: "0.97rem",
                maxWidth: 580,
                margin: "12px auto 0",
              }}
            >
              Graduates receive a{" "}
              <strong style={{ color: "white" }}>
                100-Hour Foundation Certificate
              </strong>{" "}
              that opens doors to:
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 12,
            }}
          >
            {[
              "Continuing to 200-hour teacher training",
              "Teaching basic yoga to friends and family",
              "Leading simple meditation sessions",
              "Assisting experienced teachers",
              "Deepening personal practice with confidence",
              "Building a strong foundation for advanced study",
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  background: "rgba(255,255,255,0.07)",
                  borderRadius: "var(--radius-sm)",
                  padding: "12px 14px",
                }}
              >
                <ChevronRight
                  size={15}
                  style={{ color: "var(--gold)", flexShrink: 0, marginTop: 2 }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "rgba(255,255,255,0.75)",
                    fontSize: "0.84rem",
                    lineHeight: 1.5,
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ══════════════════════════════════════════════════════════════════════════════
// 7. DAILY SCHEDULE
// ══════════════════════════════════════════════════════════════════════════════
const DailySchedulePage = () => {
  const morning = [
    {
      time: "06:00 AM",
      activity: "Morning Meditation & Breathing",
      icon: <Moon size={15} />,
    },
    {
      time: "06:30 AM",
      activity: "Basic Pranayama Practice",
      icon: <Wind size={15} />,
    },
    {
      time: "07:30 AM",
      activity: "Foundational Hatha Yoga",
      icon: <Sun size={15} />,
    },
    { time: "09:00 AM", activity: "Breakfast", icon: <Coffee size={15} /> },
    {
      time: "10:30 AM",
      activity: "Basic Yoga Anatomy",
      icon: <Brain size={15} />,
    },
    {
      time: "11:45 AM",
      activity: "Teaching Fundamentals & Alignment Basics",
      icon: <Users size={15} />,
    },
  ];
  const afternoon = [
    { time: "01:00 PM", activity: "Lunch", icon: <Utensils size={15} /> },
    {
      time: "02:30 PM",
      activity: "Self-Study & Practice",
      icon: <BookOpen size={15} />,
    },
    {
      time: "03:30 PM",
      activity: "Yoga Philosophy Introduction",
      icon: <Feather size={15} />,
    },
    {
      time: "04:45 PM",
      activity: "Gentle Vinyasa Flow",
      icon: <Leaf size={15} />,
    },
    { time: "06:30 PM", activity: "Dinner", icon: <Utensils size={15} /> },
    {
      time: "08:00 PM",
      activity: "Relaxation & Yoga Nidra",
      icon: <Moon size={15} />,
    },
  ];

  const ScheduleRow = ({ item }) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "14px 0",
        borderBottom: "1px solid var(--cream-dark)",
      }}
    >
      <div
        style={{
          width: 42,
          height: 42,
          borderRadius: "var(--radius-sm)",
          background: "var(--cream)",
          border: "1px solid rgba(26,36,86,0.09)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--navy)",
          flexShrink: 0,
        }}
      >
        {item.icon}
      </div>
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 600,
          color: "var(--navy)",
          fontSize: "0.82rem",
          minWidth: "80px",
          flexShrink: 0,
        }}
      >
        {item.time}
      </span>
      <span
        style={{
          fontFamily: "var(--font-body)",
          color: "var(--stone)",
          fontSize: "0.9rem",
        }}
      >
        {item.activity}
      </span>
    </div>
  );

  return (
    <section
      style={{
        background: "var(--cream)",
        padding: "clamp(70px,9vw,110px) clamp(20px,5vw,60px)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(40px,6vw,80px)",
            alignItems: "start",
            marginBottom: "clamp(50px,7vw,80px)",
          }}
        >
          <div>
            <div className="section-eyebrow">Daily Schedule</div>
            <h2
              className="display-heading"
              style={{
                fontSize: "clamp(2rem,4vw,3.4rem)",
                marginBottom: "1.25rem",
              }}
            >
              Daily Schedule — 100 Hours
              <br />
              <em>Foundation YTTC</em>
            </h2>
            <p
              className="body-text"
              style={{ fontSize: "0.95rem", marginBottom: "1rem" }}
            >
              Ombreathe's 100-hour foundation yoga teacher training program is
              designed for beginners and those seeking an introduction to yoga
              teaching. This comprehensive foundation program provides essential
              knowledge and skills.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.78rem",
                color: "var(--stone)",
                fontStyle: "italic",
              }}
            >
              *The timing of teaching and modules may vary depending on the
              season.
            </p>
          </div>
          <div
            style={{
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              boxShadow: "var(--shadow-lg)",
              height: "clamp(200px,28vw,320px)",
            }}
          >
            <Img label="Daily Schedule" style={{ height: "100%" }} />
          </div>
        </div>

        <div
          style={{
            background: "var(--white)",
            borderRadius: "var(--radius-xl)",
            overflow: "hidden",
            boxShadow: "var(--shadow-sm)",
            border: "1px solid rgba(26,36,86,0.06)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            {/* Morning */}
            <div
              style={{
                padding: "clamp(28px,4vw,44px)",
                borderRight: "1px solid var(--cream-dark)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "var(--radius-sm)",
                    background: "var(--navy)",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Sunrise size={18} />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    color: "var(--navy)",
                    fontSize: "1rem",
                  }}
                >
                  Morning Session
                </h3>
              </div>
              {morning.map((item, i) => (
                <ScheduleRow key={i} item={item} />
              ))}
            </div>
            {/* Afternoon */}
            <div style={{ padding: "clamp(28px,4vw,44px)" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "var(--radius-sm)",
                    background: "var(--violet)",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Moon size={18} />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    color: "var(--navy)",
                    fontSize: "1rem",
                  }}
                >
                  Afternoon & Evening Session
                </h3>
              </div>
              {afternoon.map((item, i) => (
                <ScheduleRow key={i} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* About schedule */}
        <div
          style={{
            marginTop: 24,
            padding: "clamp(20px,3vw,32px)",
            borderRadius: "var(--radius-lg)",
            background: "rgba(91,79,207,0.05)",
            border: "1px solid rgba(91,79,207,0.12)",
            borderLeft: "4px solid var(--violet)",
          }}
        >
          <p className="body-text" style={{ fontSize: "0.88rem" }}>
            Our 100-hour foundation schedule is designed for beginners and those
            new to yoga teaching. The program provides a gentle introduction to
            yoga practice, basic anatomy, fundamental philosophy, and essential
            teaching skills in a supportive and nurturing environment.
          </p>
        </div>
      </div>
    </section>
  );
};

// ══════════════════════════════════════════════════════════════════════════════
// 8. EXCURSIONS
// ══════════════════════════════════════════════════════════════════════════════
const ExcursionSection = () => {
  const [hovered, setHovered] = useState(null);

  const excursions = [
    {
      icon: <Globe size={16} />,
      title: "Tirta Empul Temple",
      tag: "Spiritual",
      tagBg: "#5B4FCF",
      duration: "Half Day",
      img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
      desc: "Sacred purification temple with holy spring pools.",
      highlights: [
        "Holy water ritual",
        "Ancient temple",
        "Spiritual cleansing",
      ],
    },
    {
      icon: <Leaf size={16} />,
      title: "Tegalalang Rice Terraces",
      tag: "Nature",
      tagBg: "#7BAF8A",
      duration: "Half Day",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      desc: "Famous UNESCO rice terraces with lush green views.",
      highlights: [
        "Rice fields",
        "Panoramic views",
        "Nature walk",
      ],
    },
    {
      icon: <Trees size={16} />,
      title: "Monkey Forest",
      tag: "Wildlife",
      tagBg: "#C8964A",
      duration: "2 Hours",
      img: "https://images.unsplash.com/photo-1546182990-dffeafbe841d",
      desc: "Explore jungle sanctuary with hundreds of monkeys.",
      highlights: [
        "Wild monkeys",
        "Temple ruins",
        "Jungle walk",
      ],
    },
    {
      icon: <Mountain size={16} />,
      title: "Mount Batur Trek",
      tag: "Adventure",
      tagBg: "#C0444A",
      duration: "Full Day",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      desc: "Sunrise trek on Bali’s iconic volcano.",
      highlights: [
        "Sunrise view",
        "Volcano hike",
        "Lake panorama",
      ],
    },
    {
      icon: <Waves size={16} />,
      title: "Tanah Lot Temple",
      tag: "Cultural",
      tagBg: "#2E3A87",
      duration: "Half Day",
      img: "https://images.unsplash.com/photo-1526481280691-7f50a1d5d6a1",
      desc: "Iconic sea temple with breathtaking sunset.",
      highlights: [
        "Ocean temple",
        "Sunset view",
        "Cultural site",
      ],
    },
    {
      icon: <Camera size={16} />,
      title: "Ubud Culture Walk",
      tag: "Culture",
      tagBg: "#9A7D2E",
      duration: "3 Hours",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      desc: "Discover Bali’s art, culture & local markets.",
      highlights: [
        "Art museum",
        "Local markets",
        "Cultural walk",
      ],
    },
  ];

  return (
    <section
      style={{
        background: "var(--white)",
        padding: "clamp(70px,9vw,110px) 20px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        
        {/* HEADER */}
        <div style={{ marginBottom: 60 }}>
          <div className="section-eyebrow">Excursions</div>

          <h2 className="display-heading">
            Explore <em>Bali Experiences</em>
          </h2>

          <p className="body-text" style={{ maxWidth: 600 }}>
            Discover culture, nature, and spirituality through guided
            excursions included in your journey.
          </p>
        </div>

        {/* CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {excursions.map((exc, i) => (
            <div
              key={i}
              className="card-omb"
              style={{ overflow: "hidden" }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* IMAGE */}
              <div style={{ height: 200, position: "relative" }}>
                <img
                  src={exc.img}
                  alt={exc.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform:
                      hovered === i ? "scale(1.08)" : "scale(1)",
                    transition: "0.6s",
                  }}
                />

                {/* Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                  }}
                />

                {/* Duration */}
                <div
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    background: "white",
                    padding: "4px 10px",
                    borderRadius: 20,
                    fontSize: "0.7rem",
                  }}
                >
                  {exc.duration}
                </div>
              </div>

              {/* CONTENT */}
              <div style={{ padding: 20 }}>
                <span
                  style={{
                    background: exc.tagBg,
                    color: "white",
                    padding: "4px 10px",
                    borderRadius: 20,
                    fontSize: "0.7rem",
                  }}
                >
                  {exc.tag}
                </span>

                <h3 style={{ margin: "10px 0" }}>{exc.title}</h3>

                <p className="body-text">{exc.desc}</p>

                <div style={{ marginTop: 10 }}>
                  {exc.highlights.map((h, j) => (
                    <div
                      key={j}
                      style={{
                        display: "flex",
                        gap: 6,
                        fontSize: "0.8rem",
                      }}
                    >
                      <CheckCircle size={14} color="var(--sage)" />
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM BANNER */}
        <div
          style={{
            marginTop: 60,
            background: "var(--navy)",
            borderRadius: 20,
            padding: 30,
            color: "white",
            textAlign: "center",
          }}
        >
          <h3>All excursions included ✨</h3>
          <p style={{ opacity: 0.7 }}>
            Transport, guides & entry fees covered
          </p>
        </div>
      </div>
    </section>
  );
};

// ══════════════════════════════════════════════════════════════════════════════
// 9. FOOD SECTION
// ══════════════════════════════════════════════════════════════════════════════
const FoodSection = () => {
  const [activeTab, setActiveTab] = useState("breakfast");

  const meals = [
    {
      time: "Breakfast",
      key: "breakfast",
      img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
      icon: <Sun size={16} />,
      timeLabel: "07:30 – 09:00",
      items: [
        "Fresh tropical fruit platter",
        "Balinese black rice porridge (bubur)",
        "Avocado toast on sourdough",
        "Freshly pressed green juices",
        "Herbal teas & Balinese coffee",
        "Overnight oats with coconut milk",
      ],
      desc: "Start your day with vibrant, energising foods sourced from our organic garden and local Balinese farms.",
    },
    {
      time: "Lunch",
      key: "lunch",
      icon: <Coffee size={16} />,
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      timeLabel: "12:30 – 01:30",
      items: [
        "Nasi campur (Balinese rice bowl)",
        "Fresh garden salads & tempeh",
        "Seasonal vegetable curries",
        "Coconut soups & broths",
        "Homemade dressings & sauces",
        "Gluten-free & vegan options",
      ],
      desc: "A nourishing midday meal to refuel between sessions — light enough to practice, satisfying enough to sustain.",
    },
    {
      time: "Dinner",
      key: "dinner",
      icon: <Moon size={16} />,
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      timeLabel: "06:30 – 08:00",
      items: [
        "Warming lentil & vegetable dhal",
        "Grilled tofu & tempeh dishes",
        "Balinese spiced jackfruit",
        "Garden fresh vegetable stir-fries",
        "Wholesome grain bowls",
        "Fresh-baked desserts",
      ],
      desc: "A peaceful communal dinner to close the day — shared around the table, deeply nourishing, lovingly prepared.",
    },
  ];

  const dietaryOptions = [
    {
      icon: <Leaf size={20} />,
      label: "Vegan",
      desc: "100% plant-based meals available every day",
    },
    {
      icon: <Feather size={20} />,
      label: "Gluten-Free",
      desc: "Full gluten-free menu on request",
    },
    {
      icon: <Sparkles size={20} />,
      label: "Dairy-Free",
      desc: "All dishes can be made dairy-free",
    },
    {
      icon: <Sun size={20} />,
      label: "Raw Food",
      desc: "Raw food options at every meal",
    },
    {
      icon: <Shield size={20} />,
      label: "Nut-Free",
      desc: "Allergy-safe kitchen on request",
    },
    {
      icon: <Heart size={20} />,
      label: "Sattvic",
      desc: "Traditional yogic diet principles followed",
    },
  ];

  const philosophy = [
    {
      icon: <Leaf size={20} />,
      title: "Organic & Local",
      desc: "Ingredients sourced from our garden and Ubud's organic farmers market",
    },
    {
      icon: <Globe size={20} />,
      title: "Zero Waste",
      desc: "Compostable packaging, no single-use plastics, farm-to-table ethos",
    },
    {
      icon: <Heart size={20} />,
      title: "Lovingly Prepared",
      desc: "Our Balinese chefs cook with intention — food is part of the practice",
    },
    {
      icon: <Feather size={20} />,
      title: "Sattvic Philosophy",
      desc: "Meals aligned with yogic principles — pure, fresh, and energising",
    },
  ];

  const activeMeal = meals.find((m) => m.key === activeTab) || meals[0];

  return (
    <section
      style={{
        background: "var(--cream)",
        padding: "clamp(70px,9vw,110px) clamp(20px,5vw,60px)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: "clamp(40px,6vw,64px)" }}>
          <div className="section-eyebrow">Nourishment</div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 32,
              alignItems: "end",
            }}
          >
            <h2
              className="display-heading"
              style={{ fontSize: "clamp(2rem,4vw,3.4rem)" }}
            >
              Food as <em>medicine</em> — fresh, organic, and lovingly prepared
            </h2>
            <p className="body-text" style={{ fontSize: "0.95rem" }}>
              Three nourishing meals a day, crafted by our Balinese chefs using
              organic produce from our garden and local farms. Eating well is
              part of the practice — every meal is a mindful, communal
              experience.
            </p>
          </div>
        </div>

        {/* Meal tabs */}
        <div
          style={{
            display: "flex",
            gap: 8,
            background: "var(--white)",
            borderRadius: "var(--radius-md)",
            padding: 6,
            width: "fit-content",
            marginBottom: "clamp(28px,4vw,44px)",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          {meals.map((m) => (
            <button
              key={m.key}
              onClick={() => setActiveTab(m.key)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 20px",
                borderRadius: "var(--radius-sm)",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-body)",
                fontSize: "0.86rem",
                fontWeight: 500,
                background: activeTab === m.key ? "var(--navy)" : "transparent",
                color: activeTab === m.key ? "white" : "var(--stone)",
                transition: "all 0.25s ease",
              }}
            >
              {m.icon} {m.time}
            </button>
          ))}
        </div>

        {/* Active meal */}
        <div
          style={{
            background: "var(--white)",
            borderRadius: "var(--radius-xl)",
            overflow: "hidden",
            boxShadow: "var(--shadow-md)",
            marginBottom: "clamp(40px,6vw,64px)",
            border: "1px solid rgba(26,36,86,0.06)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            }}
          >
            <div style={{ height: "clamp(200px,30vw,360px)" }}>
             <img
  src={activeMeal.img}
  alt={activeMeal.time}
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.6s ease",
  }}
/>

            </div>
            <div style={{ padding: "clamp(28px,4vw,48px)" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "var(--radius-sm)",
                    background: "var(--navy)",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {activeMeal.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      color: "var(--navy)",
                      fontSize: "1.05rem",
                    }}
                  >
                    {activeMeal.time}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "var(--stone)",
                      fontSize: "0.76rem",
                    }}
                  >
                    🕐 {activeMeal.timeLabel}
                  </div>
                </div>
              </div>
              <p
                className="body-text"
                style={{ fontSize: "0.9rem", marginBottom: 20 }}
              >
                {activeMeal.desc}
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 8,
                  marginBottom: 20,
                }}
              >
                {activeMeal.items.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 8,
                      fontSize: "0.83rem",
                      color: "var(--stone)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    <span style={{ color: "var(--violet)", flexShrink: 0 }}>
                      ·
                    </span>{" "}
                    {item}
                  </div>
                ))}
              </div>
              <div
                style={{
                  padding: "12px 16px",
                  borderRadius: "var(--radius-sm)",
                  background: "rgba(123,175,138,0.1)",
                  border: "1px solid rgba(123,175,138,0.25)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                }}
              >
                <Leaf
                  size={15}
                  style={{ color: "var(--sage)", flexShrink: 0, marginTop: 2 }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "#3a6b4a",
                    fontSize: "0.8rem",
                    lineHeight: 1.55,
                  }}
                >
                  All meals are vegetarian. Vegan, gluten-free, and
                  allergy-friendly options always available.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dietary */}
        <h3
          className="display-heading"
          style={{ fontSize: "clamp(1.4rem,3vw,2rem)", marginBottom: 8 }}
        >
          We cater to <em>every dietary need</em>
        </h3>
        <p
          className="body-text"
          style={{ fontSize: "0.88rem", marginBottom: 24 }}
        >
          Just let us know your requirements when booking — our kitchen handles
          it all with care.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: 14,
            marginBottom: "clamp(40px,6vw,64px)",
          }}
        >
          {dietaryOptions.map((d, i) => (
            <div
              key={i}
              className="card-omb"
              style={{
                padding: "20px",
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "var(--radius-sm)",
                  background: "var(--cream)",
                  color: "var(--navy)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {d.icon}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    color: "var(--navy)",
                    fontSize: "0.88rem",
                    marginBottom: 4,
                  }}
                >
                  {d.label}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--stone)",
                    fontSize: "0.78rem",
                    lineHeight: 1.45,
                  }}
                >
                  {d.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy */}
        <div
          style={{
            background: "var(--white)",
            borderRadius: "var(--radius-xl)",
            padding: "clamp(28px,4vw,48px)",
            border: "1px solid rgba(26,36,86,0.06)",
          }}
        >
          <h3
            className="display-heading"
            style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)", marginBottom: 28 }}
          >
            Our food <em>philosophy</em>
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: 20,
            }}
          >
            {philosophy.map((p, i) => (
              <div
                key={i}
                style={{
                  textAlign: "center",
                  padding: "20px 16px",
                  borderRadius: "var(--radius-md)",
                  background: "var(--cream)",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "var(--navy)",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 14px",
                  }}
                >
                  {p.icon}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    color: "var(--navy)",
                    fontSize: "0.88rem",
                    marginBottom: 6,
                  }}
                >
                  {p.title}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--stone)",
                    fontSize: "0.78rem",
                    lineHeight: 1.5,
                  }}
                >
                  {p.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ══════════════════════════════════════════════════════════════════════════════
// 10. ACCOMMODATION
// ══════════════════════════════════════════════════════════════════════════════
const AccommodationSection = () => {
  const [activeRoom, setActiveRoom] = useState(0);

  const rooms = [
    {
      type: "Shared Garden Room",
      tag: "Included",
      tagBg: "var(--sage)",
      price: "Included",
      img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      desc: "Comfortable shared rooms surrounded by lush tropical gardens.",
      features: [
        "Twin / triple sharing",
        "Garden access",
        "En-suite bathroom",
        "Air conditioning",
        "WiFi",
        "Daily cleaning",
      ],
    },
    {
      type: "Private Cottage",
      tag: "Upgrade",
      tagBg: "var(--violet)",
      price: "+$180",
      img: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
      desc: "Private Balinese cottage with jungle views and peaceful vibe.",
      features: [
        "Private ensuite",
        "Balcony / veranda",
        "Mini fridge",
        "Premium bedding",
        "AC & fan",
        "Quiet environment",
      ],
    },
    {
      type: "Deluxe Pool Villa",
      tag: "Luxury",
      tagBg: "var(--gold)",
      price: "+$380",
      img: "https://images.unsplash.com/photo-1501117716987-c8e1ecb210c1",
      desc: "Luxury villa with private pool and full relaxation experience.",
      features: [
        "Private pool",
        "Outdoor shower",
        "King-size bed",
        "Butler service",
        "Jungle view",
        "Premium experience",
      ],
    },
  ];

  const amenities = [
    { icon: <Waves size={18} />, label: "Pool" },
    { icon: <Heart size={18} />, label: "Spa" },
    { icon: <Leaf size={18} />, label: "Garden" },
    { icon: <Wifi size={18} />, label: "WiFi" },
    { icon: <Utensils size={18} />, label: "Kitchen" },
    { icon: <Feather size={18} />, label: "Yoga Hall" },
    { icon: <Trees size={18} />, label: "Nature" },
    { icon: <Music size={18} />, label: "Healing" },
  ];

  const room = rooms[activeRoom];

  return (
    <section
      style={{
        background: "var(--navy)",
        padding: "clamp(70px,9vw,110px) 20px",
        color: "white",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* HEADER */}
        <div style={{ marginBottom: 50 }}>
          <h2 className="display-heading">
            Your <em>Stay in Bali</em>
          </h2>
          <p style={{ opacity: 0.7, maxWidth: 600 }}>
            Experience comfort, nature, and peace during your yoga journey.
          </p>
        </div>

        {/* ROOM TABS */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 30 }}>
          {rooms.map((r, i) => (
            <button
              key={i}
              onClick={() => setActiveRoom(i)}
              style={{
                padding: "10px 18px",
                borderRadius: 30,
                border: "1px solid rgba(255,255,255,0.3)",
                background: activeRoom === i ? "white" : "transparent",
                color: activeRoom === i ? "var(--navy)" : "white",
                cursor: "pointer",
              }}
            >
              {r.type}
            </button>
          ))}
        </div>

        {/* ROOM CARD */}
        <div
          style={{
            background: "white",
            borderRadius: 20,
            overflow: "hidden",
            color: "var(--navy)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          }}
        >
          {/* IMAGE */}
          <div style={{ height: 300 }}>
            <img
              src={room.img}
              alt={room.type}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* CONTENT */}
          <div style={{ padding: 30 }}>
            <span
              style={{
                background: room.tagBg,
                color: "white",
                padding: "4px 12px",
                borderRadius: 20,
                fontSize: "0.75rem",
              }}
            >
              {room.tag}
            </span>

            <h3 style={{ margin: "10px 0" }}>{room.type}</h3>

            <p style={{ opacity: 0.7 }}>{room.desc}</p>

            <h4 style={{ marginTop: 20 }}>Features</h4>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {room.features.map((f, i) => (
                <div key={i} style={{ display: "flex", gap: 6 }}>
                  <CheckCircle size={14} color="green" />
                  {f}
                </div>
              ))}
            </div>

            <div style={{ marginTop: 20, fontWeight: 600 }}>
              Price: {room.price}
            </div>

            <button className="btn-primary-omb" style={{ marginTop: 20 }}>
              Book Room <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* AMENITIES */}
        <div style={{ marginTop: 60 }}>
          <h3 className="display-heading">Amenities</h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(120px,1fr))",
              gap: 16,
              marginTop: 20,
            }}
          >
            {amenities.map((a, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  padding: 16,
                  borderRadius: 12,
                  textAlign: "center",
                }}
              >
                <div style={{ marginBottom: 6 }}>{a.icon}</div>
                <div style={{ fontSize: "0.8rem" }}>{a.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

// ══════════════════════════════════════════════════════════════════════════════
// 11. LOCATION
// ══════════════════════════════════════════════════════════════════════════════
const LocationSection = () => {
  const [activeSpot, setActiveSpot] = useState(0);

  const spots = [
    {
      name: "Ubud Town Center",
      distance: "5 min walk",
      desc: "Heart of Bali's cultural scene — galleries, cafés, traditional markets and the famous Ubud Palace.",
      icon: <Globe size={18} />,
    },
    {
      name: "Tegalalang Rice Terraces",
      distance: "15 min drive",
      desc: "UNESCO-listed emerald rice paddies cascading down volcanic hillsides — a quintessential Bali landscape.",
      icon: <Leaf size={18} />,
    },
    {
      name: "Tirta Empul Temple",
      distance: "20 min drive",
      desc: "Sacred water temple where Balinese Hindus perform purification rituals — a deeply spiritual experience.",
      icon: <Sparkles size={18} />,
    },
    {
      name: "Monkey Forest Sanctuary",
      distance: "8 min walk",
      desc: "Ancient forest temple home to hundreds of Balinese long-tailed macaques among towering fig trees.",
      icon: <Trees size={18} />,
    },
    {
      name: "Mount Batur",
      distance: "45 min drive",
      desc: "Active volcano with sunrise trekking — witness one of the most breathtaking dawns in Southeast Asia.",
      icon: <Mountain size={18} />,
    },
  ];

  const quickStats = [
    { label: "Airport Transfer", value: "~75 min", icon: <Globe size={16} /> },
    { label: "Town Center", value: "5 min walk", icon: <MapPin size={16} /> },
    { label: "Altitude", value: "~450m", icon: <Mountain size={16} /> },
    { label: "Climate", value: "Tropical", icon: <Sun size={16} /> },
  ];

  return (
    <section
      style={{
        background: "var(--cream)",
        padding: "clamp(70px,9vw,110px) clamp(20px,5vw,60px)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(40px,6vw,80px)",
            alignItems: "start",
          }}
        >
          {/* Left */}
          <div>
            <div className="section-eyebrow">Our Location</div>
            <h2
              className="display-heading"
              style={{
                fontSize: "clamp(2rem,4vw,3.4rem)",
                marginBottom: "1.25rem",
              }}
            >
              Nestled in the <em>spiritual heart</em> of Ubud, Bali
            </h2>
            <p
              className="body-text"
              style={{ fontSize: "0.95rem", marginBottom: "2rem" }}
            >
              Our training center sits amid lush jungle and rice fields in Ubud
              — Bali's cultural and spiritual capital. Everything you need for a
              transformative stay is moments away.
            </p>

            {/* Spots */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {spots.map((spot, i) => (
                <div
                  key={i}
                  onClick={() => setActiveSpot(i)}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 16,
                    padding: "14px 16px",
                    borderRadius: "var(--radius-md)",
                    cursor: "pointer",
                    border:
                      activeSpot === i
                        ? "1.5px solid var(--violet)"
                        : "1.5px solid transparent",
                    background:
                      activeSpot === i
                        ? "rgba(91,79,207,0.05)"
                        : "var(--white)",
                    boxShadow: activeSpot === i ? "var(--shadow-sm)" : "none",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "var(--radius-sm)",
                      background:
                        activeSpot === i ? "var(--navy)" : "var(--cream)",
                      color: activeSpot === i ? "white" : "var(--navy)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "all 0.3s ease",
                    }}
                  >
                    {spot.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 600,
                        color: "var(--navy)",
                        fontSize: "0.9rem",
                        marginBottom: 2,
                      }}
                    >
                      {spot.name}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        fontSize: "0.72rem",
                        color: "var(--violet)",
                        fontWeight: 500,
                        marginBottom: activeSpot === i ? 6 : 0,
                      }}
                    >
                      <MapPin size={11} /> {spot.distance}
                    </div>
                    {activeSpot === i && (
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          color: "var(--stone)",
                          fontSize: "0.8rem",
                          lineHeight: 1.5,
                          margin: 0,
                        }}
                      >
                        {spot.desc}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Address */}
            <div
              style={{
                marginTop: 20,
                padding: "20px 24px",
                borderRadius: "var(--radius-lg)",
                background: "var(--navy)",
                color: "white",
                display: "flex",
                alignItems: "center",
                gap: 18,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  background: "rgba(255,255,255,0.12)",
                  borderRadius: "var(--radius-sm)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <MapPin size={22} style={{ color: "var(--gold-light)" }} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.68rem",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.55)",
                    marginBottom: 4,
                  }}
                >
                  Training Center Address
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 500,
                    fontSize: "0.88rem",
                    margin: 0,
                    lineHeight: 1.55,
                  }}
                >
                  Jl. Raya Ubud, Ubud, Gianyar
                  <br />
                  Bali, Indonesia 80571
                </p>
              </div>
            </div>
          </div>

          {/* Right — map */}
          <div>
            <div
              style={{
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                boxShadow: "var(--shadow-xl)",
                position: "relative",
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 14,
                  left: 14,
                  zIndex: 10,
                  background: "rgba(255,255,255,0.95)",
                  borderRadius: "50px",
                  padding: "6px 14px",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  color: "var(--navy)",
                  backdropFilter: "blur(6px)",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <MapPin size={13} style={{ color: "var(--violet)" }} /> Ubud,
                Bali
              </div>
              <iframe
                title="Ombreathe Training Center Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63248.908834584855!2d115.19955!3d-8.50695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23d1e5e6c4c7f%3A0x5030bfbca831610!2sUbud%2C%20Gianyar%2C%20Bali%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1700000000000"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                style={{
                  width: "100%",
                  height: "clamp(280px,36vw,440px)",
                  border: "none",
                  display: "block",
                }}
              />
            </div>

            {/* Quick stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 10,
              }}
            >
              {quickStats.map((s, i) => (
                <div
                  key={i}
                  className="card-omb"
                  style={{ padding: "14px 10px", textAlign: "center" }}
                >
                  <div
                    style={{
                      color: "var(--navy)",
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: 8,
                    }}
                  >
                    {s.icon}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 700,
                      color: "var(--navy)",
                      fontSize: "0.82rem",
                      marginBottom: 2,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.65rem",
                      color: "var(--stone)",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ══════════════════════════════════════════════════════════════════════════════
// ROOT
// ══════════════════════════════════════════════════════════════════════════════
export default function Service1000() {
  return (
    <>
      <GlobalStyles />
      <div className="omb-root">
        <Training200 />
        <HouseOfYoga />
        <Suspense fallback={<LoadingSpinner />}>
          <YogaTrainingPromo />
        </Suspense>
        <Transformation />
        <Suspense fallback={<LoadingSpinner />}>
          <TransTeach />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <YogaCoursesPage />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <DailySchedulePage />
        </Suspense>
        <ExcursionSection />
        <FoodSection />
        <AccommodationSection />
        <LocationSection />
      </div>
    </>
  );
}
