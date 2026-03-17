"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <header className={`gnb${scrolled ? " scrolled" : ""}`}>
        <nav className="gnb-inner">
          {/* 로고 */}
          <a href="/" className="gnb-logo">
            <span className="logo-grow">Grow</span>마케팅
          </a>

          {/* 데스크탑 링크 */}
          <div className={`gnb-links${menuOpen ? " open" : ""}`}>
            <button onClick={() => scrollTo("services")} className="gnb-link">서비스</button>
            <button onClick={() => scrollTo("process")} className="gnb-link">프로세스</button>
            <button onClick={() => scrollTo("results")} className="gnb-link">성과</button>
            <button onClick={() => scrollTo("contact")} className="gnb-cta-btn">
              무료 진단 신청
            </button>
          </div>

          {/* 햄버거 */}
          <button
            className={`hamburger${menuOpen ? " active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴"
          >
            <span /><span /><span />
          </button>
        </nav>

        {/* 모바일 드롭다운 */}
        {menuOpen && (
          <div className="mobile-menu">
            <button onClick={() => scrollTo("services")}>서비스</button>
            <button onClick={() => scrollTo("process")}>프로세스</button>
            <button onClick={() => scrollTo("results")}>성과</button>
            <button onClick={() => scrollTo("contact")} className="mobile-cta">무료 진단 신청</button>
          </div>
        )}
      </header>

      <style jsx>{`
        .gnb {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 9000;
          padding: 22px 0;
          transition: background 0.4s ease, padding 0.4s ease, box-shadow 0.4s ease;
        }
        .gnb.scrolled {
          background: rgba(8, 8, 8, 0.88);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          padding: 14px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          box-shadow: 0 8px 40px rgba(0,0,0,0.4);
        }
        .gnb-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .gnb-logo {
          font-size: 1.3rem;
          font-weight: 800;
          text-decoration: none;
          color: #ffffff;
          letter-spacing: -0.5px;
          font-family: 'Montserrat', 'Pretendard', sans-serif;
        }
        .logo-grow {
          color: #FF6B35;
          margin-right: 2px;
        }
        .gnb-links {
          display: flex;
          align-items: center;
          gap: 36px;
        }
        .gnb-link {
          background: none;
          border: none;
          color: rgba(255,255,255,0.72);
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          padding: 0;
          transition: color 0.3s ease;
          font-family: inherit;
          position: relative;
        }
        .gnb-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #FF6B35;
          transition: width 0.3s ease;
        }
        .gnb-link:hover {
          color: #ffffff;
        }
        .gnb-link:hover::after {
          width: 100%;
        }
        .gnb-cta-btn {
          background: linear-gradient(135deg, #FF6B35, #FF8C42);
          color: #ffffff;
          border: none;
          padding: 10px 24px;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: inherit;
          box-shadow: 0 4px 20px rgba(255,107,53,0.35);
        }
        .gnb-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(255,107,53,0.5);
        }
        .hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          flex-direction: column;
          gap: 5px;
        }
        .hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: #ffffff;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        .hamburger.active span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }
        .hamburger.active span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }
        .mobile-menu {
          background: rgba(10,10,10,0.97);
          backdrop-filter: blur(24px);
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 20px 32px 28px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .mobile-menu button {
          background: none;
          border: none;
          color: rgba(255,255,255,0.8);
          font-size: 1.05rem;
          font-weight: 500;
          cursor: pointer;
          padding: 14px 0;
          text-align: left;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          font-family: inherit;
          transition: color 0.2s ease;
        }
        .mobile-menu button:hover {
          color: #FF6B35;
        }
        .mobile-menu .mobile-cta {
          margin-top: 8px;
          background: linear-gradient(135deg, #FF6B35, #FF8C42);
          color: #ffffff;
          border-radius: 50px;
          padding: 16px;
          text-align: center;
          font-weight: 700;
          border: none;
          font-size: 1rem;
        }
        @media (max-width: 768px) {
          .gnb-links { display: none; }
          .hamburger { display: flex; }
          .gnb-inner { padding: 0 20px; }
        }
      `}</style>
    </>
  );
}
