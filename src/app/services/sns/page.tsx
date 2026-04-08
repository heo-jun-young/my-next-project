"use client";

import { useEffect } from "react";

export default function SnsPage() {
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

    const animatedElements = document.querySelectorAll<HTMLElement>(
      ".fade-up, .platform-card, .metric-card, .process-step"
    );
    animatedElements.forEach((el, index) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(40px)";
      el.style.transition = `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
      observer.observe(el);
    });

    // cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="sns-page">
      {/* ========== SECTION 1: 히어로 - 문제 제기 ========== */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-label">PERFORMANCE MARKETING</p>
          <h1 className="hero-title">
            광고비만 태우고 있다면,
            <br />
            <span className="highlight">방법이 틀린 겁니다.</span>
          </h1>
          <p className="hero-desc">
            "이번 달도 광고비 100만원 썼는데 문의가 3건..."
            <br />
            익숙한 이야기입니다. 우리는 이 문제를 해결합니다.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">327%</span>
              <span className="stat-label">평균 ROAS 달성</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2.3배</span>
              <span className="stat-label">전환율 개선</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">94%</span>
              <span className="stat-label">클라이언트 재계약</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 2: 문제 심화 ========== */}
      <section className="problem-section">
        <div className="container">
          <h2 className="section-title fade-up">
            대부분의 광고가 실패하는 이유
          </h2>
          <div className="problem-grid">
            <div className="problem-card fade-up">
              <div className="problem-number">01</div>
              <h3>타겟팅 없는 광고</h3>
              <p>
                "20-50대 전체"를 타겟으로 잡으면 아무도 반응하지 않습니다.
                광고비의 80%가 관심 없는 사람에게 낭비됩니다.
              </p>
            </div>
            <div className="problem-card fade-up">
              <div className="problem-number">02</div>
              <h3>데이터 분석 부재</h3>
              <p>
                어떤 광고가 효과 있는지 모른 채 같은 실수를 반복합니다.
                CTR, CPC, ROAS... 숫자를 모르면 개선도 없습니다.
              </p>
            </div>
            <div className="problem-card fade-up">
              <div className="problem-number">03</div>
              <h3>일회성 세팅</h3>
              <p>
                광고 세팅 후 방치. 알고리즘은 매일 변하는데 광고는 그대로입니다.
                경쟁사는 이미 최적화를 마쳤습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 3: 해결책 제시 ========== */}
      <section className="solution-section">
        <div className="container">
          <p className="section-label fade-up">OUR APPROACH</p>
          <h2 className="section-title-white fade-up">
            우리는 다르게 접근합니다
          </h2>
          <p className="section-desc fade-up">
            감이 아닌 데이터, 경험이 아닌 시스템으로 성과를 만듭니다.
          </p>

          <div className="solution-grid">
            <div className="solution-card fade-up">
              <div className="solution-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h3>실시간 최적화</h3>
              <p>
                24시간 성과 모니터링. CTR 0.1% 변화에도 즉시 대응합니다.
                방치되는 광고는 없습니다.
              </p>
            </div>

            <div className="solution-card fade-up">
              <div className="solution-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20V10"/>
                  <path d="M18 20V4"/>
                  <path d="M6 20v-4"/>
                </svg>
              </div>
              <h3>데이터 기반 의사결정</h3>
              <p>
                모든 결정에 근거가 있습니다. A/B 테스트, 코호트 분석,
                전환 퍼널 추적까지. 추측은 하지 않습니다.
              </p>
            </div>

            <div className="solution-card fade-up">
              <div className="solution-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>정밀 타겟팅</h3>
              <p>
                관심사, 행동 패턴, 구매 이력까지 분석합니다.
                우리 제품을 살 사람에게만 광고를 보여줍니다.
              </p>
            </div>

            <div className="solution-card fade-up">
              <div className="solution-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3>크로스 플랫폼 전략</h3>
              <p>
                네이버, 메타, 구글, 카카오. 각 플랫폼의 특성을 이해하고
                최적의 조합을 설계합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 4: 플랫폼별 전문성 ========== */}
      <section className="platform-section">
        <div className="container">
          <p className="section-label fade-up">PLATFORMS</p>
          <h2 className="section-title fade-up">
            주요 플랫폼 운영 역량
          </h2>

          <div className="platforms-grid">
            <div className="platform-card naver">
              <div className="platform-header">
                <div className="platform-logo">N</div>
                <div className="platform-info">
                  <h3>Naver Ads</h3>
                  <span className="platform-tag">검색광고 · 쇼핑검색 · GFA</span>
                </div>
              </div>
              <p className="platform-desc">
                국내 검색 점유율 1위. 구매 의도가 명확한 유저에게 직접 도달합니다.
              </p>
              <ul className="platform-features">
                <li>검색광고 품질지수 최적화</li>
                <li>스마트스토어 연동 광고</li>
                <li>파워링크 / 브랜드검색</li>
              </ul>
              <div className="platform-metric">
                <span className="metric-value">avg. 280%</span>
                <span className="metric-label">ROAS</span>
              </div>
            </div>

            <div className="platform-card meta">
              <div className="platform-header">
                <div className="platform-logo">M</div>
                <div className="platform-info">
                  <h3>Meta Ads</h3>
                  <span className="platform-tag">Instagram · Facebook</span>
                </div>
              </div>
              <p className="platform-desc">
                30억 유저 데이터 기반 정밀 타겟팅. 브랜드 인지도부터 전환까지.
              </p>
              <ul className="platform-features">
                <li>Advantage+ 캠페인 운영</li>
                <li>리타겟팅 / 유사타겟</li>
                <li>Conversion API 연동</li>
              </ul>
              <div className="platform-metric">
                <span className="metric-value">avg. 2.1x</span>
                <span className="metric-label">전환율</span>
              </div>
            </div>

            <div className="platform-card google">
              <div className="platform-header">
                <div className="platform-logo">G</div>
                <div className="platform-info">
                  <h3>Google Ads</h3>
                  <span className="platform-tag">검색 · YouTube · Display</span>
                </div>
              </div>
              <p className="platform-desc">
                글로벌 최대 광고 네트워크. YouTube 광고로 영상 마케팅까지.
              </p>
              <ul className="platform-features">
                <li>Performance Max 캠페인</li>
                <li>YouTube 인스트림 광고</li>
                <li>GA4 연동 전환 추적</li>
              </ul>
              <div className="platform-metric">
                <span className="metric-value">avg. 45%</span>
                <span className="metric-label">CPA 절감</span>
              </div>
            </div>

            <div className="platform-card kakao">
              <div className="platform-header">
                <div className="platform-logo">K</div>
                <div className="platform-info">
                  <h3>Kakao Ads</h3>
                  <span className="platform-tag">카카오톡 · 다음 · 카카오맵</span>
                </div>
              </div>
              <p className="platform-desc">
                국민 메신저 카카오톡. 친밀한 접점에서 자연스러운 광고 노출.
              </p>
              <ul className="platform-features">
                <li>비즈보드 / 카카오톡 채널</li>
                <li>알림톡 마케팅</li>
                <li>카카오맵 로컬 광고</li>
              </ul>
              <div className="platform-metric">
                <span className="metric-value">avg. 3.2x</span>
                <span className="metric-label">참여율</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 5: 프로세스 ========== */}
      <section className="process-section">
        <div className="container">
          <p className="section-label fade-up">PROCESS</p>
          <h2 className="section-title-white fade-up">
            체계적인 운영 프로세스
          </h2>

          <div className="process-timeline">
            <div className="process-step fade-up">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>현황 분석</h3>
                <p>기존 광고 데이터 분석, 경쟁사 리서치, 타겟 오디언스 정의</p>
                <span className="step-duration">Day 1-3</span>
              </div>
            </div>

            <div className="process-step fade-up">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>전략 수립</h3>
                <p>플랫폼 선정, 예산 배분, KPI 설정, 크리에이티브 방향 기획</p>
                <span className="step-duration">Day 4-7</span>
              </div>
            </div>

            <div className="process-step fade-up">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>캠페인 세팅</h3>
                <p>픽셀/전환 추적 설치, 오디언스 세그먼트, 광고 소재 제작</p>
                <span className="step-duration">Day 8-14</span>
              </div>
            </div>

            <div className="process-step fade-up">
              <div className="step-number">04</div>
              <div className="step-content">
                <h3>런칭 & 최적화</h3>
                <p>A/B 테스트 실행, 실시간 모니터링, 데이터 기반 개선</p>
                <span className="step-duration">Ongoing</span>
              </div>
            </div>

            <div className="process-step fade-up">
              <div className="step-number">05</div>
              <div className="step-content">
                <h3>리포팅</h3>
                <p>주간/월간 성과 보고, 인사이트 도출, 다음 액션 플랜 제안</p>
                <span className="step-duration">Weekly</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 6: 성과 지표 ========== */}
      <section className="metrics-section">
        <div className="container">
          <p className="section-label fade-up">RESULTS</p>
          <h2 className="section-title fade-up">
            숫자로 증명합니다
          </h2>

          <div className="metrics-grid">
            <div className="metric-card fade-up">
              <div className="metric-icon">📈</div>
              <div className="metric-value">₩2.3B+</div>
              <div className="metric-label">누적 광고비 운영</div>
            </div>
            <div className="metric-card fade-up">
              <div className="metric-icon">🎯</div>
              <div className="metric-value">327%</div>
              <div className="metric-label">평균 ROAS</div>
            </div>
            <div className="metric-card fade-up">
              <div className="metric-icon">📊</div>
              <div className="metric-value">-38%</div>
              <div className="metric-label">평균 CPA 절감</div>
            </div>
            <div className="metric-card fade-up">
              <div className="metric-icon">🔄</div>
              <div className="metric-value">94%</div>
              <div className="metric-label">클라이언트 재계약률</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 7: 이미지 섹션 (placeholder) ========== */}
      <section className="image-section">
        <div className="container">
          <div className="image-placeholder fade-up">
            <p>광고 성과 대시보드 이미지</p>
            <span>이미지를 넣어주세요</span>
          </div>
        </div>
      </section>

      {/* ========== SECTION 8: CTA ========== */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content fade-up">
            <h2>광고비, 제대로 쓰고 계신가요?</h2>
            <p>
              현재 운영 중인 광고가 있다면 무료로 진단해드립니다.
              <br />
              개선 포인트를 찾지 못하면 비용을 청구하지 않습니다.
            </p>
            <div className="cta-buttons">
              <button className="cta-button primary">문의하기</button>
              <button className="cta-button secondary">포트폴리오 보기</button>
            </div>
            <p className="cta-note">
              * 상담은 부담 없이, 계약은 신중하게.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .sns-page {
          font-family: "Pretendard", "Noto Sans KR", -apple-system, sans-serif;
          line-height: 1.6;
          color: #1a1a1a;
          background: #fafafa;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ========== Hero Section ========== */
        .hero-section {
          min-height: 90vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 100%);
          padding: 120px 24px 80px;
        }

        .hero-content {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .hero-label {
          color: #6366f1;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 2px;
          margin-bottom: 24px;
        }

        .hero-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 32px;
        }

        .hero-title .highlight {
          background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-desc {
          font-size: 1.25rem;
          color: #9ca3af;
          max-width: 600px;
          margin-bottom: 48px;
          line-height: 1.8;
        }

        .hero-stats {
          display: flex;
          gap: 48px;
          flex-wrap: wrap;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: #ffffff;
        }

        .stat-label {
          font-size: 0.875rem;
          color: #6b7280;
          margin-top: 4px;
        }

        /* ========== Problem Section ========== */
        .problem-section {
          padding: 120px 24px;
          background: #ffffff;
        }

        .section-title {
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 700;
          text-align: center;
          margin-bottom: 64px;
          color: #1a1a1a;
        }

        .problem-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
        }

        .problem-card {
          padding: 40px;
          background: #f9fafb;
          border-radius: 16px;
          border: 1px solid #e5e7eb;
          transition: all 0.3s ease;
        }

        .problem-card:hover {
          border-color: #6366f1;
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.1);
        }

        .problem-number {
          font-size: 0.875rem;
          font-weight: 700;
          color: #6366f1;
          margin-bottom: 16px;
        }

        .problem-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: #1a1a1a;
        }

        .problem-card p {
          color: #6b7280;
          line-height: 1.7;
        }

        /* ========== Solution Section ========== */
        .solution-section {
          padding: 120px 24px;
          background: linear-gradient(135deg, #1a1a2e 0%, #0f0f0f 100%);
        }

        .section-label {
          color: #6366f1;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-align: center;
          margin-bottom: 16px;
        }

        .section-title-white {
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 700;
          text-align: center;
          margin-bottom: 16px;
          color: #ffffff;
        }

        .section-desc {
          text-align: center;
          color: #9ca3af;
          font-size: 1.125rem;
          margin-bottom: 64px;
        }

        .solution-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .solution-card {
          padding: 32px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .solution-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: #6366f1;
          transform: translateY(-4px);
        }

        .solution-icon {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          color: white;
        }

        .solution-card h3 {
          font-size: 1.125rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .solution-card p {
          color: #9ca3af;
          line-height: 1.7;
          font-size: 0.9375rem;
        }

        /* ========== Platform Section ========== */
        .platform-section {
          padding: 120px 24px;
          background: #ffffff;
        }

        .platforms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin-top: 64px;
        }

        .platform-card {
          padding: 32px;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .platform-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--platform-color);
        }

        .platform-card:hover {
          border-color: var(--platform-color);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
          transform: translateY(-4px);
        }

        .platform-card.naver { --platform-color: #03c75a; }
        .platform-card.meta { --platform-color: #0668E1; }
        .platform-card.google { --platform-color: #4285f4; }
        .platform-card.kakao { --platform-color: #FEE500; }

        .platform-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }

        .platform-logo {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          font-weight: 800;
          color: white;
        }

        .naver .platform-logo { background: #03c75a; }
        .meta .platform-logo { background: #0668E1; }
        .google .platform-logo { background: #4285f4; }
        .kakao .platform-logo { background: #FEE500; color: #1a1a1a; }

        .platform-info h3 {
          font-size: 1.125rem;
          font-weight: 700;
          color: #1a1a1a;
        }

        .platform-tag {
          font-size: 0.75rem;
          color: #6b7280;
        }

        .platform-desc {
          color: #6b7280;
          font-size: 0.9375rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .platform-features {
          list-style: none;
          margin-bottom: 24px;
        }

        .platform-features li {
          padding: 8px 0;
          color: #4b5563;
          font-size: 0.875rem;
          border-bottom: 1px solid #f3f4f6;
          position: relative;
          padding-left: 20px;
        }

        .platform-features li::before {
          content: "→";
          position: absolute;
          left: 0;
          color: var(--platform-color);
        }

        .platform-metric {
          display: flex;
          align-items: baseline;
          gap: 8px;
        }

        .metric-value {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--platform-color);
        }

        .metric-label {
          font-size: 0.875rem;
          color: #6b7280;
        }

        /* ========== Process Section ========== */
        .process-section {
          padding: 120px 24px;
          background: linear-gradient(135deg, #1a1a2e 0%, #0f0f0f 100%);
        }

        .process-timeline {
          max-width: 800px;
          margin: 64px auto 0;
        }

        .process-step {
          display: flex;
          gap: 32px;
          padding: 32px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .process-step:last-child {
          border-bottom: none;
        }

        .step-number {
          font-size: 1.25rem;
          font-weight: 800;
          color: #6366f1;
          min-width: 48px;
        }

        .step-content h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 8px;
        }

        .step-content p {
          color: #9ca3af;
          line-height: 1.6;
          margin-bottom: 12px;
        }

        .step-duration {
          font-size: 0.75rem;
          font-weight: 600;
          color: #6366f1;
          background: rgba(99, 102, 241, 0.1);
          padding: 4px 12px;
          border-radius: 100px;
        }

        /* ========== Metrics Section ========== */
        .metrics-section {
          padding: 120px 24px;
          background: #ffffff;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 24px;
          margin-top: 64px;
        }

        .metric-card {
          padding: 40px 24px;
          background: #f9fafb;
          border-radius: 16px;
          text-align: center;
          border: 1px solid #e5e7eb;
          transition: all 0.3s ease;
        }

        .metric-card:hover {
          border-color: #6366f1;
          transform: translateY(-4px);
        }

        .metric-icon {
          font-size: 2rem;
          margin-bottom: 16px;
        }

        .metric-card .metric-value {
          font-size: 2rem;
          font-weight: 800;
          color: #1a1a1a;
          display: block;
          margin-bottom: 8px;
        }

        .metric-card .metric-label {
          color: #6b7280;
          font-size: 0.875rem;
        }

        /* ========== Image Section ========== */
        .image-section {
          padding: 80px 24px;
          background: #f9fafb;
        }

        .image-placeholder {
          max-width: 900px;
          margin: 0 auto;
          height: 400px;
          background: #e5e7eb;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #6b7280;
          border: 2px dashed #d1d5db;
        }

        .image-placeholder p {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .image-placeholder span {
          font-size: 0.875rem;
        }

        /* ========== CTA Section ========== */
        .cta-section {
          padding: 120px 24px;
          background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
        }

        .cta-content {
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
        }

        .cta-content h2 {
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 24px;
        }

        .cta-content > p {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.125rem;
          line-height: 1.7;
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
          padding: 16px 32px;
          font-size: 1rem;
          font-weight: 600;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-button.primary {
          background: #ffffff;
          color: #6366f1;
        }

        .cta-button.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .cta-button.secondary {
          background: transparent;
          color: #ffffff;
          border: 2px solid rgba(255, 255, 255, 0.5);
        }

        .cta-button.secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: #ffffff;
        }

        .cta-note {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.7);
        }

        /* ========== Responsive ========== */
        @media (max-width: 768px) {
          .hero-stats {
            gap: 32px;
          }

          .stat-number {
            font-size: 2rem;
          }

          .process-step {
            flex-direction: column;
            gap: 16px;
          }

          .step-number {
            min-width: auto;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .cta-button {
            width: 100%;
            max-width: 280px;
          }
        }
      `}</style>
    </div>
  );
}
