import React, { useState } from "react";
import {
  Globe,
  Leaf,
  Trees,
  Mountain,
  Waves,
  Camera,
  CheckCircle,
} from "lucide-react";

const OmbExcursionSection = ({ data }) => {
  const [hovered, setHovered] = useState(null);

  const { colors, content } = data;

  const iconMap = {
    globe: <Globe size={16} />,
    leaf: <Leaf size={16} />,
    trees: <Trees size={16} />,
    mountain: <Mountain size={16} />,
    waves: <Waves size={16} />,
    camera: <Camera size={16} />,
  };

  return (
    <section
      style={{
        background: colors.white,
        padding: "clamp(30px,9vw,50px) 10px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        
        {/* HEADER */}
        <div style={{ marginBottom: 50 }}>
          <div>{content.eyebrow}</div>

          <h2>
            {content.title} <em>{content.highlight}</em>
          </h2>

          <p style={{ maxWidth: 600 }}>
            {content.subtitle}
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
          {content.excursions.map((exc, i) => (
            <div
              key={i}
              style={{
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: colors.cardShadow,
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* IMAGE */}
              <div style={{ height: 200, position: "relative" }}>
                <img
                  src={exc.img}
                  alt={exc.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform:
                      hovered === i ? "scale(1.08)" : "scale(1)",
                    transition: "transform 0.5s ease",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: colors.overlay,
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    background: colors.white,
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
                    color: colors.white,
                    padding: "4px 10px",
                    borderRadius: 20,
                    fontSize: "0.7rem",
                  }}
                >
                  {exc.tag}
                </span>

                <h3 style={{ margin: "10px 0" }}>{exc.title}</h3>

                <p>{exc.desc}</p>

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
                      <CheckCircle size={14} color={colors.sage} />
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM */}
        <div
          style={{
            marginTop: 50,
            background: colors.navy,
            borderRadius: 20,
            padding: 30,
            color: colors.white,
            textAlign: "center",
          }}
        >
          <h3>{content.bottom.title}</h3>
          <p style={{ opacity: 0.7 }}>
            {content.bottom.desc}
          </p>
        </div>
      </div>
    </section>
  );
};

export default OmbExcursionSection;