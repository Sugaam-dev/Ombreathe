import React, { useEffect, useState } from "react";
import { MapPin, ArrowRight, CheckCircle } from "lucide-react";

const OmbHeroSection = ({ data }) => {
  const [loaded, setLoaded] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(t);
  }, []);

  const { colors, hero, gains, certificates, content } = data;

  return (
    <section style={{ background: colors.cream }}>
      
      {/* HERO */}
      <div
        style={{
          padding: "clamp(80px,10vw,140px) 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* BACKGROUND */}
        <img
          src={hero.bgImage}
          alt="Yoga"
          loading="lazy"
          decoding="async"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: loaded ? "scale(1)" : "scale(1.1)",
            transition: "transform 1.2s ease",
          }}
        />

        {/* OVERLAY */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: colors.overlay,
          }}
        />

        {/* CONTENT */}
        <div
          style={{
            position: "relative",
            textAlign: "center",
            maxWidth: 900,
            padding: "clamp(40px,6vw,80px) 20px",
            color: colors.white,
          }}
        >
          {/* LOCATION */}
          <div
            style={{
              color: colors.goldLight,
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease",
            }}
          >
            <MapPin size={14} /> {hero.location}
          </div>

          {/* TITLE */}
          <h1
            style={{
              fontSize: "clamp(2.8rem,6vw,4.8rem)",
              fontWeight: 300,
              marginBottom: "1.5rem",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s ease 0.1s",
            }}
          >
            {hero.title}{" "}
            <em style={{ color: colors.goldLight }}>
              {hero.highlight}
            </em>
          </h1>

          {/* SUBTEXT */}
          <p
            style={{
              fontSize: "clamp(1rem,2vw,1.2rem)",
              color: colors.textLight,
              marginBottom: "2rem",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s ease 0.2s",
            }}
          >
            {hero.subtitle}
          </p>

          {/* PRICE */}
          <div
            style={{
              fontSize: "clamp(2.5rem,5vw,4rem)",
              fontWeight: 600,
              marginBottom: "1rem",
            }}
          >
            {hero.price}
          </div>

          <p style={{ opacity: 0.8, marginBottom: "2rem" }}>
            {hero.priceNote}
          </p>

          {/* BUTTON */}
          <button
            style={{
              background: colors.navy,
              color: colors.white,
              border: "none",
              padding: "12px 24px",
              borderRadius: 30,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              transition: "all 0.3s ease",
            }}
          >
            {hero.buttonText} <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* SECOND SECTION */}
      <div
        style={{
          padding: "clamp(60px,8vw,100px) 20px",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >

        {/* 🔥 BIG IMAGE (CLEAN FIX) */}
        <div
          style={{
            borderRadius: 24,
            overflow: "hidden",
            marginBottom: 50,
            boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
            aspectRatio: "16/10",
          }}
        >
          <img
            src={hero.certificateImage}
            alt=""
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 40%", // 🔥 adjust if needed
            }}
          />
        </div>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 40,
          }}
        >
          {/* LEFT */}
          <div>
            <h2>
              What You’ll <em style={{ color: colors.goldLight }}>Gain</em>
            </h2>

            {gains.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 10 }}>
                <CheckCircle size={18} color={colors.sage} />
                {item}
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              
              {/* 🔥 CERTIFICATES FIXED */}
              {certificates.map((item, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoverIndex(i)}
                  onMouseLeave={() => setHoverIndex(null)}
                  style={{ textAlign: "center" }}
                >
                  <div
                    style={{
                      width: 80,
                      height: 80,
                      margin: "0 auto 10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transform:
                        hoverIndex === i ? "scale(1.1)" : "scale(1)",
                      transition: "transform 0.4s ease",
                    }}
                  >
                    <img
                      src={item.img}
                      alt={item.label}
                      loading="lazy"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>

                  <div style={{ color: colors.navy }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <p style={{ marginTop: 20 }}>
              {content.bottomText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OmbHeroSection;