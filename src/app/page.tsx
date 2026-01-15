"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    // 스크롤 애니메이션
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll<HTMLElement>(".fade-up");
    animatedElements.forEach((el, index) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(40px)";
      el.style.transition = `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s`;
      observer.observe(el);
    });

    // 숫자 카운터 애니메이션
    const counters = document.querySelectorAll<HTMLElement>(".counter-value");
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = parseInt(el.dataset.target || "0");
            const suffix = el.dataset.suffix || "";
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                el.textContent = target.toLocaleString() + suffix;
                clearInterval(timer);
              } else {
                el.textContent = Math.floor(current).toLocaleString() + suffix;
              }
            }, 30);
            counterObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((counter) => counterObserver.observe(counter));

    // 카드 호버 효과
    const cards = document.querySelectorAll<HTMLElement>(".hover-lift");
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px)";
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
      });
    });

    return () => {
      observer.disconnect();
      counterObserver.disconnect();
    };
  }, []);

  return (
    <div className="main-page">
      {/* 히어로 섹션 - 기존 움직이는 이미지 유지 */}
      <section className="hero-section">
        <div className="hero-content fade-up">
          <h1 className="hero-title">
            이야기의 주인공은
            <br />
            언제나 당신입니다.
          </h1>
          <p className="hero-description">
            그로우마케팅은 브랜드가 아닌
            <br />
            고객을 먼저 바라봅니다.
            <br />
            당신의 도전과 성장을 완성하는
            <br />
            든든한 파트너가 되겠습니다.
          </p>
          <div className="hero-cta">
            <Link href="/contact" className="hero-button primary">
              무료 상담 신청
            </Link>
            <Link href="/portfolio" className="hero-button secondary">
              성공 사례 보기
            </Link>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span>Scroll</span>
        </div>
      </section>

      {/* 문제 제기 섹션 */}
      <section className="problem-section">
        <div className="container">
          <span className="section-label fade-up">PROBLEM</span>
          <h2 className="section-title fade-up">
            이런 경험, 한 번쯤 있지 않습니까?
          </h2>
          <div className="problem-grid">
            <div className="problem-card hover-lift fade-up">
              <div className="problem-number">01</div>
              <h4>광고비는 나가는데 문의가 없다</h4>
              <p>
                매달 수백만 원 광고비를 쓰지만 정작 매출로 연결되지 않는다.
                어디서 새는지도 모른다.
              </p>
            </div>
            <div className="problem-card hover-lift fade-up">
              <div className="problem-number">02</div>
              <h4>대행사가 뭘 하는지 모르겠다</h4>
              <p>
                월간 리포트는 오는데 숫자만 나열되어 있다. 그래서 뭘 어떻게
                개선한다는 건지 알 수가 없다.
              </p>
            </div>
            <div className="problem-card hover-lift fade-up">
              <div className="problem-number">03</div>
              <h4>업종 이해 없이 템플릿 마케팅</h4>
              <p>
                헬스장이든 음식점이든 똑같은 방식. 우리 업종 특성은 전혀 고려되지
                않는다.
              </p>
            </div>
            <div className="problem-card hover-lift fade-up">
              <div className="problem-number">04</div>
              <h4>단기 성과에만 집착한다</h4>
              <p>
                당장 클릭수, 노출수만 보여주고 끝. 장기적인 브랜드 자산 구축은
                전혀 없다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 솔루션 섹션 */}
      <section className="solution-section">
        <div className="container">
          <span className="section-label fade-up">SOLUTION</span>
          <h2 className="section-title fade-up">
            그로우마케팅의 접근법은 다릅니다
          </h2>
          <p className="section-desc fade-up">
            단순 광고 대행이 아닌, 비즈니스 성장 파트너로서 전략을 설계합니다.
          </p>
          <div className="solution-grid">
            <div className="solution-card hover-lift fade-up">
              <div className="solution-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4>데이터 기반 의사결정</h4>
              <p>
                감이 아닌 데이터로 움직입니다. ROAS, CPA, LTV 등 핵심 지표를
                실시간 추적하고, 수치에 기반한 최적화를 진행합니다.
              </p>
            </div>
            <div className="solution-card hover-lift fade-up">
              <div className="solution-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <h4>업종 전문 마케터 배치</h4>
              <p>
                헬스장에는 헬스장 전문가, 병원에는 의료 마케팅 전문가. 각 업종의
                고객 심리와 구매 여정을 이해하는 전문 마케터가 직접 담당합니다.
              </p>
            </div>
            <div className="solution-card hover-lift fade-up">
              <div className="solution-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h4>투명한 리포팅 시스템</h4>
              <p>
                광고비 어디에 얼마 썼는지, 성과가 어땠는지. 대시보드로 실시간
                확인하고, 주간 미팅으로 개선 방향을 함께 논의합니다.
              </p>
            </div>
            <div className="solution-card hover-lift fade-up">
              <div className="solution-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h4>장기 자산 구축 전략</h4>
              <p>
                광고만 돌리다 끝나는 게 아닙니다. SEO 콘텐츠, 고객 DB, 브랜드
                인지도까지. 광고비를 끊어도 남는 자산을 만듭니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 서비스 섹션 */}
      <section className="services-section">
        <div className="container">
          <span className="section-label fade-up">SERVICES</span>
          <h2 className="section-title fade-up">제공 서비스</h2>
          <p className="section-desc fade-up">
            비즈니스 성장에 필요한 모든 마케팅 서비스를 제공합니다.
          </p>

          <div className="services-grid">
            <Link href="/services/sns" className="service-card hover-lift fade-up">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
              <h4>SNS 광고</h4>
              <p>
                네이버, 메타, 구글, 카카오 등 주요 플랫폼에서 ROAS를 극대화하는
                퍼포먼스 마케팅
              </p>
              <span className="service-link">
                자세히 보기
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <Link href="/services/website" className="service-card hover-lift fade-up">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h4>홈페이지 제작</h4>
              <p>
                단순히 예쁜 사이트가 아닌, 전환율을 높이는 홈페이지. 업종별
                맞춤 설계 및 데이터 분석 연동
              </p>
              <span className="service-link">
                자세히 보기
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 업종별 전문성 섹션 */}
      <section className="industry-section">
        <div className="container">
          <span className="section-label fade-up">EXPERTISE</span>
          <h2 className="section-title fade-up">업종별 맞춤 전략</h2>
          <p className="section-desc fade-up">
            템플릿 마케팅은 하지 않습니다. 각 업종의 고객 심리와 구매 여정에
            최적화된 전략을 설계합니다.
          </p>

          <div className="industry-grid">
            <div className="industry-card hover-lift fade-up">
              <div className="industry-emoji">🏋️</div>
              <h4>헬스장 / 필라테스</h4>
              <p>무료 체험 전환 최적화, 지역 타겟팅</p>
              <div className="industry-result">평균 신규 회원 +180%</div>
            </div>
            <div className="industry-card hover-lift fade-up">
              <div className="industry-emoji">🍽️</div>
              <h4>음식점 / 카페</h4>
              <p>인스타그램 감성 콘텐츠, 리뷰 관리</p>
              <div className="industry-result">평균 매출 +95%</div>
            </div>
            <div className="industry-card hover-lift fade-up">
              <div className="industry-emoji">🏠</div>
              <h4>부동산 / 인테리어</h4>
              <p>시공 포트폴리오, 상담 전환 최적화</p>
              <div className="industry-result">평균 문의량 +220%</div>
            </div>
            <div className="industry-card hover-lift fade-up">
              <div className="industry-emoji">💅</div>
              <h4>뷰티 / 네일샵</h4>
              <p>인스타그램 릴스, 비포/애프터 콘텐츠</p>
              <div className="industry-result">평균 예약률 +150%</div>
            </div>
            <div className="industry-card hover-lift fade-up">
              <div className="industry-emoji">📚</div>
              <h4>학원 / 교육</h4>
              <p>합격 후기 콘텐츠, 학부모 타겟 광고</p>
              <div className="industry-result">평균 등록률 +130%</div>
            </div>
            <div className="industry-card hover-lift fade-up">
              <div className="industry-emoji">🏥</div>
              <h4>병원 / 의원</h4>
              <p>의료 정보 콘텐츠, 전문의 브랜딩</p>
              <div className="industry-result">평균 예약률 +175%</div>
            </div>
          </div>
        </div>
      </section>

      {/* 성과 지표 섹션 */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item fade-up">
              <span className="counter-value" data-target="847" data-suffix="%">0%</span>
              <span className="stat-label">평균 ROAS</span>
            </div>
            <div className="stat-item fade-up">
              <span className="counter-value" data-target="156" data-suffix="+">0+</span>
              <span className="stat-label">성공 프로젝트</span>
            </div>
            <div className="stat-item fade-up">
              <span className="counter-value" data-target="94" data-suffix="%">0%</span>
              <span className="stat-label">재계약률</span>
            </div>
          </div>
        </div>
      </section>

      {/* 왜 그로우마케팅인가 섹션 */}
      <section className="why-section">
        <div className="container">
          <span className="section-label fade-up">WHY US</span>
          <h2 className="section-title fade-up">왜 그로우마케팅입니까?</h2>

          <div className="why-grid">
            <div className="why-card hover-lift fade-up">
              <div className="why-number">01</div>
              <h4>투명한 비용 구조</h4>
              <p>
                광고비와 대행비를 명확히 분리합니다. 어디에 얼마가 쓰이는지,
                대시보드로 실시간 확인할 수 있습니다.
              </p>
            </div>
            <div className="why-card hover-lift fade-up">
              <div className="why-number">02</div>
              <h4>전담 마케터 배정</h4>
              <p>
                여러 클라이언트를 돌아가며 담당하지 않습니다. 전담 마케터가
                귀사의 비즈니스를 깊이 이해합니다.
              </p>
            </div>
            <div className="why-card hover-lift fade-up">
              <div className="why-number">03</div>
              <h4>주간 성과 미팅</h4>
              <p>
                월 1회 리포트로 끝나지 않습니다. 주간 미팅으로 성과를 점검하고,
                실시간으로 전략을 조정합니다.
              </p>
            </div>
            <div className="why-card hover-lift fade-up">
              <div className="why-number">04</div>
              <h4>성과 미달 시 환불</h4>
              <p>
                약속한 KPI에 도달하지 못하면, 대행비를 환불합니다. 그만큼 결과에
                자신 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content fade-up">
            <h2 className="cta-title">
              마케팅, 제대로 시작하겠습니다.
            </h2>
            <p className="cta-desc">
              무료 진단을 통해 현재 마케팅의 문제점과 개선 방향을 먼저
              확인하세요.
              <br />
              비용 부담 없이 전문가의 인사이트를 받아보실 수 있습니다.
            </p>
            <div className="cta-buttons">
              <Link href="/contact" className="cta-button primary">
                무료 마케팅 진단 신청
              </Link>
              <Link href="/portfolio" className="cta-button secondary">
                성공 사례 보기
              </Link>
            </div>
            <p className="cta-note">
              * 진단 후 계약 강요 없습니다. 부담 없이 신청하세요.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .main-page {
          background: #ffffff;
          min-height: 100vh;
          color: #1a1a1a;
          font-family: "Pretendard", -apple-system, sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* 히어로 섹션 - 기존 이미지 유지 */
        .hero-section {
          width: 100%;
          min-height: 100vh;
          background-image: url('https://cdn.imweb.me/thumbnail/20250925/e6b9c1091f721.png');
          background-size: 120% auto;
          background-repeat: no-repeat;
          background-position: center;
          animation: moveLeftRight 20s ease-in-out infinite;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @keyframes moveLeftRight {
          0% { background-position: 50% center; }
          50% { background-position: 0% center; }
          100% { background-position: 50% center; }
        }

        .hero-content {
          text-align: center;
          z-index: 10;
          padding: 0 24px;
        }

        .hero-title {
          font-size: clamp(2.5rem, 7vw, 5.25rem);
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 30px;
          color: #ffffff;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .hero-description {
          font-size: clamp(1rem, 2.5vw, 1.95rem);
          color: rgba(255, 255, 255, 0.95);
          line-height: 1.6;
          margin-bottom: 48px;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }

        .hero-cta {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .hero-button {
          display: inline-block;
          padding: 18px 40px;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .hero-button.primary {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: #ffffff;
          box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
        }

        .hero-button.primary:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 8px 30px rgba(99, 102, 241, 0.5);
        }

        .hero-button.secondary {
          background: rgba(255, 255, 255, 0.15);
          color: #ffffff;
          border: 2px solid rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px);
        }

        .hero-button.secondary:hover {
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.6);
          transform: translateY(-3px);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.75rem;
          letter-spacing: 2px;
          animation: bounce 2s infinite;
        }

        .scroll-mouse {
          width: 24px;
          height: 40px;
          border: 2px solid rgba(255, 255, 255, 0.6);
          border-radius: 12px;
          position: relative;
        }

        .scroll-wheel {
          width: 4px;
          height: 8px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 2px;
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          animation: scrollWheel 1.5s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
          40% { transform: translateX(-50%) translateY(-10px); }
          60% { transform: translateX(-50%) translateY(-5px); }
        }

        @keyframes scrollWheel {
          0% { opacity: 1; top: 8px; }
          100% { opacity: 0; top: 20px; }
        }

        /* 공통 섹션 스타일 */
        section {
          padding: 120px 0;
        }

        .section-label {
          display: block;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 3px;
          color: #6366f1;
          margin-bottom: 16px;
          text-align: center;
        }

        .section-title {
          font-size: clamp(1.75rem, 4vw, 2.75rem);
          font-weight: 800;
          text-align: center;
          margin-bottom: 20px;
          color: #1a1a1a;
        }

        .section-desc {
          font-size: 1.1rem;
          color: #666666;
          text-align: center;
          max-width: 700px;
          margin: 0 auto 60px;
          line-height: 1.8;
        }

        /* 문제 제기 섹션 */
        .problem-section {
          background: #f8f9fc;
        }

        .problem-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .problem-card {
          background: #ffffff;
          border: 1px solid #eaeaea;
          border-radius: 20px;
          padding: 40px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: default;
        }

        .problem-card:hover {
          border-color: #6366f1;
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.1);
        }

        .problem-number {
          font-size: 0.85rem;
          font-weight: 800;
          color: #6366f1;
          margin-bottom: 16px;
        }

        .problem-card h4 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: #1a1a1a;
        }

        .problem-card p {
          font-size: 0.95rem;
          color: #666666;
          line-height: 1.7;
        }

        /* 솔루션 섹션 */
        .solution-section {
          background: #ffffff;
        }

        .solution-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .solution-card {
          background: linear-gradient(135deg, #f8f9fc 0%, #ffffff 100%);
          border: 1px solid #eaeaea;
          border-radius: 20px;
          padding: 40px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .solution-card:hover {
          border-color: #6366f1;
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.1);
        }

        .solution-icon {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .solution-icon svg {
          width: 28px;
          height: 28px;
          color: #ffffff;
        }

        .solution-card h4 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: #1a1a1a;
        }

        .solution-card p {
          font-size: 0.95rem;
          color: #666666;
          line-height: 1.7;
        }

        /* 서비스 섹션 */
        .services-section {
          background: #f8f9fc;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        .service-card {
          background: #ffffff;
          border: 1px solid #eaeaea;
          border-radius: 24px;
          padding: 48px;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: block;
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .service-card:hover::before {
          transform: scaleX(1);
        }

        .service-card:hover {
          border-color: #6366f1;
          box-shadow: 0 20px 50px rgba(99, 102, 241, 0.15);
        }

        .service-card .service-icon {
          width: 72px;
          height: 72px;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 28px;
          transition: all 0.4s ease;
        }

        .service-card:hover .service-icon {
          transform: scale(1.05) rotate(-3deg);
        }

        .service-card .service-icon svg {
          width: 36px;
          height: 36px;
          color: #ffffff;
        }

        .service-card h4 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 16px;
          color: #1a1a1a;
        }

        .service-card p {
          font-size: 1rem;
          color: #666666;
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .service-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.95rem;
          color: #6366f1;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .service-link svg {
          width: 18px;
          height: 18px;
          transition: transform 0.3s ease;
        }

        .service-card:hover .service-link svg {
          transform: translateX(5px);
        }

        /* 업종별 전문성 섹션 */
        .industry-section {
          background: #ffffff;
        }

        .industry-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .industry-card {
          background: #f8f9fc;
          border: 1px solid #eaeaea;
          border-radius: 20px;
          padding: 36px;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .industry-card:hover {
          background: #ffffff;
          border-color: #6366f1;
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.1);
        }

        .industry-emoji {
          font-size: 3rem;
          margin-bottom: 20px;
          transition: transform 0.3s ease;
        }

        .industry-card:hover .industry-emoji {
          transform: scale(1.2);
        }

        .industry-card h4 {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: #1a1a1a;
        }

        .industry-card p {
          font-size: 0.9rem;
          color: #666666;
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .industry-result {
          display: inline-block;
          padding: 10px 20px;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 700;
          color: #6366f1;
        }

        /* 성과 지표 섹션 */
        .stats-section {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          padding: 80px 0;
        }

        .stats-grid {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 80px;
          flex-wrap: wrap;
        }

        .stat-item {
          text-align: center;
        }

        .counter-value {
          display: block;
          font-size: 4rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
        }

        /* Why Us 섹션 */
        .why-section {
          background: #f8f9fc;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .why-card {
          background: #ffffff;
          border: 1px solid #eaeaea;
          border-radius: 20px;
          padding: 40px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .why-card:hover {
          border-color: #6366f1;
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.1);
        }

        .why-number {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 16px;
        }

        .why-card h4 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: #1a1a1a;
        }

        .why-card p {
          font-size: 0.95rem;
          color: #666666;
          line-height: 1.7;
        }

        /* CTA 섹션 */
        .cta-section {
          background: #ffffff;
          padding: 120px 0;
        }

        .cta-content {
          background: linear-gradient(135deg, #f8f9fc 0%, #ffffff 100%);
          border: 1px solid #eaeaea;
          border-radius: 32px;
          padding: 80px 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%);
        }

        .cta-title {
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 800;
          margin-bottom: 20px;
          color: #1a1a1a;
        }

        .cta-desc {
          font-size: 1.1rem;
          color: #666666;
          line-height: 1.8;
          margin-bottom: 40px;
        }

        .cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }

        .cta-button {
          display: inline-block;
          padding: 18px 44px;
          border-radius: 50px;
          font-size: 1.05rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .cta-button.primary {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: #ffffff;
          box-shadow: 0 4px 20px rgba(99, 102, 241, 0.3);
        }

        .cta-button.primary:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 8px 30px rgba(99, 102, 241, 0.4);
        }

        .cta-button.secondary {
          background: #ffffff;
          color: #6366f1;
          border: 2px solid #6366f1;
        }

        .cta-button.secondary:hover {
          background: #6366f1;
          color: #ffffff;
          transform: translateY(-3px);
        }

        .cta-note {
          font-size: 0.9rem;
          color: #999999;
        }

        /* hover-lift 효과 */
        .hover-lift {
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* 반응형 */
        @media (max-width: 1024px) {
          .industry-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          section {
            padding: 80px 0;
          }

          .hero-section {
            background-size: cover !important;
          }

          .hero-cta {
            flex-direction: column;
            align-items: center;
          }

          .hero-button {
            width: 100%;
            max-width: 280px;
            text-align: center;
          }

          .problem-grid,
          .solution-grid,
          .why-grid,
          .services-grid {
            grid-template-columns: 1fr;
          }

          .industry-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            flex-direction: column;
            gap: 40px;
          }

          .counter-value {
            font-size: 3rem;
          }

          .cta-content {
            padding: 60px 24px;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .cta-button {
            width: 100%;
            max-width: 280px;
            text-align: center;
          }
        }

        @media (min-width: 769px) {
          .hero-section {
            background-size: 150% auto;
          }
        }
      `}</style>
    </div>
  );
}
