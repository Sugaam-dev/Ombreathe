import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  memo,
} from "react";

import img1 from "../../images/Gallery/1.jpeg";

const WHATSAPP_NUMBER = "917483987568";

const MESSAGE =
  "Hi! I'd like to claim the 20% discount for the Rishikesh 2026 retreat.";

const DiscountPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTrigger, setShowTrigger] = useState(false);

  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  // =========================
  // FIRST TIME POPUP LOGIC
  // =========================
  useEffect(() => {
    let timer;

    const hasSeenPopup = sessionStorage.getItem("popupSeen");

    if (!hasSeenPopup) {
      timer = setTimeout(() => {
        setIsOpen(true);
        setShowTrigger(false);

        sessionStorage.setItem("popupSeen", "true");
      }, 2000);
    } else {
      setShowTrigger(true);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  // =========================
  // LIGHTWEIGHT CONFETTI
  // =========================
  useEffect(() => {
    if (!isOpen) return;

    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const particles = Array.from({ length: 25 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * -100,
      size: Math.random() * 5 + 2,
      speedY: Math.random() * 3 + 1,
      speedX: Math.random() * 2 - 1,
      color: ["#084d46", "#D4AF37", "#ffffff"][
        Math.floor(Math.random() * 3)
      ],
    }));

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Stop animation after 2.5 sec
    const timeout = setTimeout(() => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      ctx.clearRect(0, 0, width, height);
    }, 2500);

    return () => {
      clearTimeout(timeout);

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isOpen]);

  // =========================
  // CLOSE POPUP
  // =========================
  const handleClose = useCallback(() => {
    setIsOpen(false);

    setTimeout(() => {
      setShowTrigger(true);
    }, 100);
  }, []);

  // =========================
  // WHATSAPP BUTTON
  // =========================
  const handleClaimClick = useCallback(() => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`,
      "_blank"
    );
  }, []);

  return (
    <>
  

      <style>{`
      .popup-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.78);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px;
  animation: fadeIn 0.3s ease;
}

.luxury-card {
  width: min(92vw, 680px);
  min-height: 320px;
  background: #ffffff;
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  position: relative;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.35);
  animation: popupUp 0.45s ease;
}

/* IMAGE SIDE */

.img-box {
  flex: 1;
  background: #f6f6f6;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px;
}

.img-box img {
  width: 100%;
  height: auto;
  max-height: 460px;
  object-fit: contain;
  display: block;
  border-radius: 18px;
}

/* CONTENT SIDE */

.content-box {
  flex: 1;
  padding: clamp(20px, 2vw, 34px);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.content-box h3 {
  color: #D4AF37;
  font-size: clamp(10px, 1vw, 12px);
  font-weight: 800;
  letter-spacing: 3px;
  margin-bottom: 10px;
}

.content-box h2 {
  font-size: clamp(28px, 3vw, 42px);
  line-height: 1.1;
  color: #1d2a28;
  margin-bottom: 14px;
  font-weight: 900;
}

.content-box h2 span {
  color: #084d46;
}

.content-box p {
  color: #666;
  line-height: 1.7;
  font-size: clamp(13px, 1vw, 15px);
  margin-bottom: 22px;
}

.offer-box {
  background: #f5f8f7;
  border-radius: 14px;
  padding: 16px;
  margin-bottom: 22px;
  border: 1px solid rgba(8, 77, 70, 0.08);
}

.offer-box small {
  display: block;
  color: #084d46;
  font-size: 11px;
  font-weight: 700;
  margin-bottom: 4px;
}

.offer-box strong {
  font-size: clamp(22px, 2vw, 28px);
  color: #1a2a28;
  font-weight: 900;
}

/* BUTTON */

.btn-premium {
  position: relative;
  background: #084d46;
  color: #fff;
  border: none;
  border-radius: 14px;
  padding: 15px 18px;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
  width: 100%;
}

.btn-premium:hover {
  transform: translateY(-2px);
}

.btn-premium::after {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255,255,255,0.2),
    transparent
  );
  animation: shine 3s infinite;
}

/* CLOSE BUTTON */

.close-btn {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: #fff;
  color: #084d46;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 5px 15px rgba(0,0,0,0.12);
}

/* FLOATING BADGE */

.trigger-badge {
  position: fixed;
  bottom: 22px;
  right: 22px;
  width: clamp(38px, 3vw, 42px);
  height: clamp(38px, 3vw, 42px);
  border-radius: 50%;
  background: #084d46;
  color: #D4AF37;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(13px, 1vw, 16px);
  font-weight: 900;
  cursor: pointer;
  z-index: 9999;
  border: 2px solid #D4AF37;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  transition: all 0.3s ease;
  animation: pulseBadge 2s infinite;
}

.trigger-badge:hover {
  transform: scale(1.08);
}

/* CONFETTI */

.confetti-canvas {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

/* ANIMATIONS */

@keyframes popupUp {
  from {
    opacity: 0;
    transform: translateY(40px) scale(0.96);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes shine {
  0% {
    left: -100%;
  }

  100% {
    left: 200%;
  }
}

@keyframes pulseBadge {
  0% {
    box-shadow: 0 0 0 0 rgba(212,175,55,0.5);
  }

  70% {
    box-shadow: 0 0 0 14px rgba(212,175,55,0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(212,175,55,0);
  }
}

/* ========================= */
/* LARGE TABLETS */
/* ========================= */

@media (max-width: 992px) {
  .luxury-card {
    width: min(94vw, 620px);
  }
}

/* ========================= */
/* TABLET */
/* ========================= */

@media (max-width: 768px) {
  .luxury-card {
    flex-direction: column;
    width: min(94vw, 420px);
    min-height: auto;
  }

  .img-box {
    width: 100%;
    padding: 14px 14px 0;
  }

  .img-box img {
    max-height: 260px;
  }

  .content-box {
    width: 100%;
    padding: 24px 20px 28px;
    text-align: center;
  }
}

/* ========================= */
/* MOBILE */
/* ========================= */

@media (max-width: 480px) {
  .popup-overlay {
    padding: 14px;
  }

  .luxury-card {
    width: 100%;
    border-radius: 22px;
  }

  .content-box {
    padding: 22px 18px 24px;
  }

  .btn-premium {
    font-size: 13px;
    padding: 14px;
  }

  .close-btn {
    width: 30px;
    height: 30px;
    font-size: 14px;
  }
}

/* ========================= */
/* 2K & 4K SCREEN FIX */
/* ========================= */

@media (min-width: 1800px) {
  .luxury-card {
    max-width: 760px;
  }
}
      `}</style>

      {/* FLOATING BUTTON */}
      {showTrigger && !isOpen && (
        <div
          className="trigger-badge"
          onClick={() => {
            setIsOpen(true);
            setShowTrigger(false);
          }}
        >
          20%
        </div>
      )}

      {/* POPUP */}
      {isOpen && (
        <div className="popup-overlay" onClick={handleClose}>
          <canvas ref={canvasRef} className="confetti-canvas" />

          <div
            className="luxury-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE */}
            <button className="close-btn" onClick={handleClose}>
              ✕
            </button>

            {/* IMAGE */}
            <div className="img-box">
              <img
                src={img1}
                alt="Retreat"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* CONTENT */}
            <div className="content-box">
              <h3>GIFT VOUCHER</h3>

              <h2>
                Pure <span>Serenity</span>
              </h2>

              <p>
                Claim your exclusive 20% discount for the
                2026 Rishikesh retreat.
              </p>

              <div className="offer-box">
                <small>SAVINGS:</small>

                <strong>20% DISCOUNT</strong>
              </div>

              <button
                className="btn-premium"
                onClick={handleClaimClick}
              >
                CLAIM VIA WHATSAPP
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(DiscountPopup);