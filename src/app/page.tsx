"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    // ==============================
    // 💧 Ripple 효과 (화면 전체)
    // ==============================
    const handleClick = (e: MouseEvent) => {
      const ripple = document.createElement("span");
      ripple.className = "ripple";

      ripple.style.left = `${e.clientX - 50}px`;
      ripple.style.top = `${e.clientY - 50}px`;
      ripple.style.width = "100px";
      ripple.style.height = "100px";
      ripple.style.pointerEvents = "none";

      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    };

    document.addEventListener("click", handleClick);

    // ==============================
    // 🔢 숫자 카운트 애니메이션
    // ==============================
    const counters = document.querySelectorAll<HTMLDivElement>(".stat-number");

    const animateCount = (el: HTMLDivElement) => {
      const target = Number(el.getAttribute("data-target"));
      const text = el.textContent || "";
      const suffix = text.includes("%") ? "%" : text.includes("+") ? "+" : "";
      const duration = 1500;
      const startTime = performance.now();

      const update = (time: number) => {
        const progress = Math.min((time - startTime) / duration, 1);
        const value = Math.floor(progress * target);
        el.textContent = `${value}${suffix}`;
        if (progress < 1) requestAnimationFrame(update);
      };

      requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLDivElement;
            if (!el.classList.contains("counted")) {
              animateCount(el);
              el.classList.add("counted");
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((counter) => observer.observe(counter));

    return () => {
      document.removeEventListener("click", handleClick);
      observer.disconnect();
    };
  }, []);

  return (
    <main>
      {/* 🏠 HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            이야기의 주인공은<br />
            언제나 당신입니다.
          </h1>
          <p className="hero-description">
            그로우마케팅은 브랜드가 아닌<br />
            고객을 먼저 바라봅니다.<br />
            당신의 도전과 성장을 완성하는<br />
            든든한 파트너가 되겠습니다.
          </p>
        </div>
      </section>

      {/* 🔹 ABOUT SECTION */}
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">우리가 만드는 차이</h2>
          <p className="about-intro">
            그로우마케팅은 단순한 광고 대행이 아니라,<br />
            고객의 성장을 끝까지 책임지는 파트너입니다.
          </p>
          <div className="stats-container">
            <div className="stat-card">
              <div className="stat-number" data-target="92">0%</div>
              <div className="stat-label">재계약률</div>
            </div>
            <div className="stat-card">
              <div className="stat-number" data-target="120">0+</div>
              <div className="stat-label">파트너사</div>
            </div>
            <div className="stat-card">
              <div className="stat-number" data-target="98">0%</div>
              <div className="stat-label">프로젝트 성공률</div>
            </div>
          </div>
        </div>
      </section>

      {/* 📊 RESULTS SECTION */}
      <section className="results-section">
        <div className="container">
          <div className="results-header">
            <h3 className="results-question">어떤 걸 제공해주는데?</h3>
            <h2 className="results-answer">숫자로 증명하는 성과</h2>
          </div>
          <div className="results-grid">
            <div className="result-item">
              <div className="result-metric">2배</div>
              <div className="result-desc">광고 효율 향상</div>
            </div>
            <div className="result-item">
              <div className="result-metric">150%</div>
              <div className="result-desc">월 회원 모집 증가</div>
            </div>
            <div className="result-item">
              <div className="result-metric">3배</div>
              <div className="result-desc">ROI 달성</div>
            </div>
          </div>
        </div>
      </section>

      {/* 💼 SERVICES SECTION */}
      <section className="services-section" id="services">
        <div className="container">
          <h2 className="section-title">우리가 제공하는 서비스</h2>
          <div className="services-grid">
            <Link href="/services/sns" className="service-card">
              <div className="service-icon">📱</div>
              <h3 className="service-title">SNS 광고</h3>
              <p className="service-desc">
                 네이버, 페이스북(인스타그램), 유튜브 등 주요 채널 광고 운영
              </p>
            </Link>

            <Link href="/services/marketing" className="service-card">
              <div className="service-icon">📊</div>
              <h3 className="service-title">마케팅 대행</h3>
              <p className="service-desc">
                전략 수립부터 집행, 운영까지 토탈 솔루션
              </p>
            </Link>

            <Link href="/services/content" className="service-card">
              <div className="service-icon">🎨</div>
              <h3 className="service-title">콘텐츠 제작</h3>
              <p className="service-desc">
                브랜드 스토리를 담은 매력적인 콘텐츠
              </p>
            </Link>

            <Link href="/services/blog" className="service-card">
              <div className="service-icon">✍️</div>
              <h3 className="service-title">블로그 마케팅</h3>
              <p className="service-desc">
                SEO 최적화 블로그 콘텐츠 제작 및 운영
              </p>
            </Link>


            <Link href="/services/website" className="service-card">
              <div className="service-icon">💻</div>
              <h3 className="service-title">홈페이지 제작</h3>
              <p className="service-desc">
                반응형 웹사이트 디자인 및 개발
              </p>
            </Link>

            <Link href="/services/crm" className="service-card">
              <div className="service-icon">🔧</div>
              <h3 className="service-title">CRM 세팅</h3>
              <p className="service-desc">
                고객 관리 시스템 구축 및 자동화
              </p>
            </Link>

          </div>
        </div>
      </section>

      {/* 📞 CTA SECTION */}
      <section className="cta-section" id="contact">
        <div className="cta-content">
          <h2 className="cta-title">
            지금, 당신의 도전과 성장을<br />
            함께할 파트너를 만나보세요.
          </h2>
          <p className="cta-subtitle">무료 컨설팅으로 시작하는 성공의 첫걸음</p>
          <a href="#" className="cta-final-button">무료 상담 신청하기</a>
        </div>
      </section>
    </main>
  );
}