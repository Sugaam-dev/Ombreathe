import React, { useState, useEffect, useRef } from "react";
import img1 from "../images/Gallery/1.jpeg";
const DiscountPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTrigger, setShowTrigger] = useState(false);
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const particlesRef = useRef([]);

  const WHATSAPP_NUMBER = "917483987568";
  const MESSAGE =
    "Hi! I'd like to claim the 20% discount for the Rishikesh 2026 retreat.";

  useEffect(() => {
    const seen = sessionStorage.getItem("popupSeen");
    if (!seen) {
      // FIRST TIME: Open automatically after 2 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("popupSeen", "true");
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      // RETURNING (Same Session): Just show the small floating badge
      setShowTrigger(true);
    }
  }, []);

  // Confetti Logic
  useEffect(() => {
    if (!isOpen) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;
    canvas.width = W;
    canvas.height = H;
    const COLORS = ["#084d46", "#D4AF37", "#fdfdfd"];
    const makeParticle = () => ({
      x: Math.random() * W,
      y: Math.random() * H * 0.1 - 20,
      vx: (Math.random() - 0.5) * 2,
      vy: Math.random() * 2 + 1,
      size: Math.random() * 4 + 1,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: 1,
    });
    particlesRef.current = Array.from({ length: 30 }, makeParticle);
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particlesRef.current.forEach((p) => {
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.y > H * 0.4) p.alpha -= 0.01;
      });
      animFrameRef.current = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setShowTrigger(true);
  };

  const handleClaimClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <style>{`
        @keyframes shine { 0% { left: -100%; } 100% { left: 100%; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

        .trigger-badge {
          position: fixed; bottom: 20px; right: 20px; z-index: 9999;
          background: #084d46; color: #D4AF37; width: 50px; height: 50px;
          border-radius: 50%; display: flex; flex-direction: column;
          align-items: center; justify-content: center; cursor: pointer;
          border: 1.5px solid #D4AF37; box-shadow: 0 5px 15px rgba(0,0,0,0.3);
          transition: transform 0.3s ease;
        }

        .luxury-card {
          background: #fff; border-radius: 20px; overflow: hidden;
          width: 90%; max-width: 700px; display: flex; position: relative;
          box-shadow: 0 30px 60px rgba(0,0,0,0.4);
          animation: slideUp 0.4s ease-out forwards;
        }

        .btn-premium {
          position: relative; background: #084d46; color: white;
          border: none; padding: 14px; border-radius: 10px;
          font-size: 14px; font-weight: 800; cursor: pointer;
          overflow: hidden; width: 100%; display: flex;
          align-items: center; justify-content: center; gap: 8px;
        }
        .btn-premium::after {
          content: ""; position: absolute; top: 0; left: -100%;
          width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: shine 3s infinite;
        }

        @media (max-width: 768px) {
          .luxury-card { flex-direction: column; width: 85%; max-height: 85vh; }
          .img-box { height: 140px !important; width: 100% !important; }
          .content-box { width: 100% !important; padding: 20px !important; text-align: center; }
          .title-text { font-size: 22px !important; margin-bottom: 8px !important; }
          .desc-text { font-size: 13px !important; margin-bottom: 15px !important; line-height: 1.4 !important; }
          .offer-box { padding: 10px !important; margin-bottom: 15px !important; }
          .offer-text { font-size: 20px !important; }
        }
      `}</style>

      {showTrigger && !isOpen && (
        <div className="trigger-badge" onClick={() => setIsOpen(true)}>
          <span style={{ fontSize: "11px", fontWeight: "900" }}>20%</span>
          <span
            style={{
              fontSize: "6px",
              fontWeight: "700",
              textTransform: "uppercase",
            }}
          >
            Off
          </span>
        </div>
      )}

      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 18, 16, 0.8)",
          zIndex: 100000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "all" : "none",
          transition: "opacity 0.4s ease",
          backdropFilter: "blur(6px)",
        }}
        onClick={handleClose}
      >
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
          }}
        />

        {isOpen && (
          <div className="luxury-card" onClick={(e) => e.stopPropagation()}>
            <div
              onClick={handleClose}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                width: "28px",
                height: "28px",
                background: "#fff",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 20,
                color: "#084d46",
                fontSize: "14px",
                fontWeight: "bold",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              ✕
            </div>

            <div
              className="img-box"
              style={{ width: "60%", position: "relative" }}
            >
              <img
                src={img1}
                alt="Retreat"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>

            <div
              className="content-box"
              style={{
                width: "60%",
                padding: "30px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h3
                style={{
                  color: "#D4AF37",
                  fontSize: "11px",
                  fontWeight: "800",
                  letterSpacing: "2px",
                  marginBottom: "5px",
                }}
              >
                GIFT VOUCHER
              </h3>
              <h2
                className="title-text"
                style={{
                  color: "#1a2a28",
                  fontSize: "28px",
                  fontWeight: "900",
                  lineHeight: "1.1",
                  marginBottom: "10px",
                }}
              >
                Pure <span style={{ color: "#084d46" }}>Serenity</span>
              </h2>
              <p
                className="desc-text"
                style={{
                  color: "#666",
                  fontSize: "14px",
                  lineHeight: "1.5",
                  marginBottom: "20px",
                }}
              >
                Claim your exclusive 20% discount for the 2026 Rishikesh
                retreat.
              </p>

              <div
                className="offer-box"
                style={{
                  background: "#f4f9f8",
                  padding: "15px",
                  borderRadius: "10px",
                  marginBottom: "20px",
                  border: "1px solid rgba(8, 77, 70, 0.1)",
                }}
              >
                <div
                  style={{
                    fontSize: "10px",
                    color: "#084d46",
                    fontWeight: "700",
                  }}
                >
                  SAVINGS:
                </div>
                <div
                  className="offer-text"
                  style={{
                    fontSize: "22px",
                    color: "#1a2a28",
                    fontWeight: "900",
                  }}
                >
                  20% DISCOUNT
                </div>
              </div>

              <button className="btn-premium" onClick={handleClaimClick}>
                CLAIM VIA WHATSAPP
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.061 3.966L0 16l4.239-1.113a7.859 7.859 0 0 0 3.758.955h.001c4.367 0 7.926-3.558 7.93-7.93a7.898 7.898 0 0 0-2.322-5.586zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DiscountPopup;
