import React, { useState, useEffect, useRef } from "react";

const DiscountPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const seen = sessionStorage.getItem("popupSeen");
    if (!seen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("popupSeen", "true");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;
    canvas.width = W;
    canvas.height = H;

    const COLORS = [
      "#0f9b8e", "#f9c74f", "#f94144", "#90be6d",
      "#43aa8b", "#f8961e", "#277da1", "#e63946",
    ];

    const makeParticle = () => ({
      x: Math.random() * W,
      y: Math.random() * H * 0.3 - 20,
      vx: (Math.random() - 0.5) * 4,
      vy: Math.random() * 3 + 2,
      size: Math.random() * 8 + 4,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 8,
      shape: Math.random() > 0.5 ? "rect" : "circle",
      alpha: 1,
    });

    particlesRef.current = Array.from({ length: 120 }, makeParticle);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particlesRef.current = particlesRef.current.filter((p) => p.alpha > 0.01);
      particlesRef.current.forEach((p) => {
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        if (p.shape === "rect") {
          ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.08;
        p.rotation += p.rotSpeed;
        if (p.y > H * 0.7) p.alpha -= 0.02;
      });
      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [isOpen]);

  if (!isOpen) return null;

  const vw = window.innerWidth;
  const size = vw < 480 ? 300 : vw < 768 ? 360 : 420;

  return (
    <>
      <style>{`
        @keyframes spinRing {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(0,0,0,0.6)",
          zIndex: 99999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Confetti canvas */}
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        />

        {/* Popup — stop overlay click from closing when clicking inside */}
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            position: "relative",
            width: size,
            height: size,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {/* Spinning dashed ring */}
          <div
            style={{
              position: "absolute",
              top: 0, left: 0, right: 0, bottom: 0,
              borderRadius: "50%",
              border: "3px dashed #0f9b8e",
              animation: "spinRing 6s linear infinite",
            }}
          />

          {/* Static subtle inner ring */}
          <div
            style={{
              position: "absolute",
              top: 8, left: 8, right: 8, bottom: 8,
              borderRadius: "50%",
              border: "1.5px solid rgba(15,155,142,0.25)",
            }}
          />

          {/* 20% OFF badge */}
          <div
            style={{
              position: "absolute",
              top: -28,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              zIndex: 10,
            }}
          >
            <span style={{ color: "#0f9b8e", fontSize: 42, fontWeight: 900, lineHeight: 1 }}>
              20<span style={{ fontSize: 20, verticalAlign: "super" }}>%</span>
            </span>
            <span
              style={{
                background: "#0f9b8e",
                color: "#fff",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.15em",
                padding: "2px 10px",
                borderRadius: 4,
                marginTop: 2,
              }}
            >
              OFF DISCOUNT
            </span>
          </div>

          {/* White circle card */}
          <div
            style={{
              position: "relative",
              width: "calc(100% - 28px)",
              height: "calc(100% - 28px)",
              borderRadius: "50%",
              background: "#fff",
              boxShadow: "0 4px 32px rgba(15,155,142,0.2)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "0 36px",
              overflow: "hidden",
              boxSizing: "border-box",
            }}
          >
            {/* Close ✕ */}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: "absolute",
                top: 20,
                right: 24,
                background: "none",
                border: "none",
                fontSize: 18,
                fontWeight: 700,
                color: "#aaa",
                cursor: "pointer",
                padding: 0,
                lineHeight: 1,
              }}
            >
              ✕
            </button>

            <h2 style={{ color: "#1a1a2e", fontSize: 17, fontWeight: 700, margin: "0 0 8px", lineHeight: 1.3 }}>
              Special Yoga Course<br />Discount!
            </h2>

            <p style={{ color: "#777", fontSize: 12, margin: "0 0 10px", lineHeight: 1.5 }}>
              Start your wellness journey today. Get{" "}
              <strong style={{ color: "#1a1a2e" }}>20% OFF</strong> on all Yoga Courses for a limited time.
            </p>

            {/* Image */}
            <div style={{ width: "100%", height: 70, borderRadius: 10, overflow: "hidden", marginBottom: 8, position: "relative" }}>
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80"
                alt="Yoga course"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <span
                style={{
                  position: "absolute",
                  bottom: 5,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "rgba(0,0,0,0.45)",
                  color: "#fff",
                  fontSize: 11,
                  fontWeight: 600,
                  padding: "2px 10px",
                  borderRadius: 4,
                  whiteSpace: "nowrap",
                }}
              >
                Join Now
              </span>
            </div>

            <p style={{ fontSize: 11, fontWeight: 600, color: "#444", margin: "0 0 10px" }}>
              Experience the benefits of yoga!
            </p>

            <button
              onClick={() => setIsOpen(false)}
              style={{
                width: "100%",
                padding: "9px 0",
                borderRadius: 999,
                background: "#0f9b8e",
                color: "#fff",
                fontWeight: 600,
                fontSize: 13,
                border: "none",
                cursor: "pointer",
              }}
            >
              Book Course Now
            </button>
          </div>

          {/* Bottom pill */}
          <div
            style={{
              position: "absolute",
              bottom: -20,
              left: "50%",
              transform: "translateX(-50%)",
              background: "#0f9b8e",
              color: "#fff",
              fontSize: 11,
              fontWeight: 600,
              padding: "6px 20px",
              borderRadius: 999,
              whiteSpace: "nowrap",
            }}
          >
            Only applicable for courses in Rishikesh
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscountPopup;