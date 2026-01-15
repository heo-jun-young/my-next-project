"use client";

import { useEffect } from "react";

export default function MarketingPage() {
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
      ".fade-up"
    );
    animatedElements.forEach((el, index) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(40px)";
      el.style.transition = `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
      observer.observe(el);
    });

    // 숫자 카운터 애니메이션
    const counters = document.querySelectorAll<HTMLElement>(".counter-value");
    const counterObserver = new IntersectionObserver((entries) => {
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
    }, { threshold: 0.5 });

    counters.forEach((counter) => counterObserver.observe(counter));

    return () => {
      observer.disconnect();
      counterObserver.disconnect();
    };
  }, []);

  return (
    <div className="marketing-page">
      {/* 히어로 섹션 */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge fade-up">FULL-SERVICE MARKETING</div>
          <h1 className="hero-title fade-up">
            마케팅, 제대로 해본 적 있습니까?
          </h1>
          <p className="hero-subtitle fade-up">
            SNS 광고 하나 돌렸다고 마케팅이 아닙니다.<br />
            전략부터 실행, 분석까지. 비즈니스 성장의 전 과정을 설계합니다.
          </p>
          <div className="hero-stats fade-up">
            <div className="stat-item">
              <span className="counter-value" data-target="847" data-suffix="%">0%</span>
              <span className="stat-label">평균 ROAS</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="counter-value" data-target="156" data-suffix="개">0개</span>
              <span className="stat-label">성공 프로젝트</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="counter-value" data-target="94" data-suffix="%">0%</span>
              <span className="stat-label">재계약률</span>
            </div>
          </div>
        </div>
      </section>

      {/* 문제 제기 섹션 */}
      <section className="problem-section">
        <div className="container">
          <h2 className="section-label fade-up">PROBLEM</h2>
          <h3 className="section-title fade-up">
            이런 경험, 한 번쯤 있지 않습니까?
          </h3>
          <div className="problem-grid">
            <div className="problem-card fade-up">
              <div className="problem-number">01</div>
              <h4>광고비는 나가는데 문의가 없다</h4>
              <p>
                매달 수백만 원 광고비를 쓰지만 정작 매출로 연결되지 않는다.
                어디서 새는지도 모른다.
              </p>
            </div>
            <div className="problem-card fade-up">
              <div className="problem-number">02</div>
              <h4>대행사가 뭘 하는지 모르겠다</h4>
              <p>
                월간 리포트는 오는데 숫자만 나열되어 있다.
                그래서 뭘 어떻게 개선한다는 건지 알 수가 없다.
              </p>
            </div>
            <div className="problem-card fade-up">
              <div className="problem-number">03</div>
              <h4>업종 이해 없이 템플릿 마케팅</h4>
              <p>
                헬스장이든 음식점이든 똑같은 방식.
                우리 업종 특성은 전혀 고려되지 않는다.
              </p>
            </div>
            <div className="problem-card fade-up">
              <div className="problem-number">04</div>
              <h4>단기 성과에만 집착한다</h4>
              <p>
                당장 클릭수, 노출수만 보여주고 끝.
                장기적인 브랜드 자산 구축은 전혀 없다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 솔루션 섹션 */}
      <section className="solution-section">
        <div className="container">
          <h2 className="section-label fade-up">SOLUTION</h2>
          <h3 className="section-title fade-up">
            그로우마케팅의 접근법은 다릅니다
          </h3>
          <p className="section-desc fade-up">
            단순 광고 대행이 아닌, 비즈니스 성장 파트너로서 전략을 설계합니다.
          </p>
          <div className="solution-grid">
            <div className="solution-card fade-up">
              <div className="solution-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <h4>데이터 기반 의사결정</h4>
              <p>
                감이 아닌 데이터로 움직입니다.
                ROAS, CPA, LTV 등 핵심 지표를 실시간 추적하고,
                수치에 기반한 최적화를 진행합니다.
              </p>
            </div>
            <div className="solution-card fade-up">
              <div className="solution-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
                </svg>
              </div>
              <h4>업종 전문 마케터 배치</h4>
              <p>
                헬스장에는 헬스장 전문가, 병원에는 의료 마케팅 전문가.
                각 업종의 고객 심리와 구매 여정을 이해하는
                전문 마케터가 직접 담당합니다.
              </p>
            </div>
            <div className="solution-card fade-up">
              <div className="solution-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h4>투명한 리포팅 시스템</h4>
              <p>
                광고비 어디에 얼마 썼는지, 성과가 어땠는지.
                대시보드로 실시간 확인하고,
                주간 미팅으로 개선 방향을 함께 논의합니다.
              </p>
            </div>
            <div className="solution-card fade-up">
              <div className="solution-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h4>장기 자산 구축 전략</h4>
              <p>
                광고만 돌리다 끝나는 게 아닙니다.
                SEO 콘텐츠, 고객 DB, 브랜드 인지도까지.
                광고비를 끊어도 남는 자산을 만듭니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3단계 프로세스 섹션 */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-label fade-up">PROCESS</h2>
          <h3 className="section-title fade-up">
            체계적인 3단계 마케팅 시스템
          </h3>
          <p className="section-desc fade-up">
            단발성 광고가 아닌, 지속 가능한 성장 구조를 설계합니다.
          </p>

          <div className="process-timeline">
            {/* Step 1 */}
            <div className="process-step fade-up">
              <div className="step-indicator">
                <div className="step-number">01</div>
                <div className="step-line"></div>
              </div>
              <div className="step-content">
                <div className="step-badge">STEP 1 · 즉시 효과</div>
                <h4 className="step-title">퍼포먼스 광고 최적화</h4>
                <p className="step-desc">
                  네이버, 메타, 구글 등 주요 플랫폼에서 즉각적인 전환을 만들어냅니다.
                  타겟 세그먼트 분석부터 크리에이티브 A/B 테스트까지,
                  데이터 기반으로 ROAS를 극대화합니다.
                </p>
                <div className="step-details">
                  <div className="detail-item">
                    <span className="detail-label">주요 활동</span>
                    <span className="detail-value">타겟 분석 / 소재 제작 / 캠페인 운영 / 실시간 최적화</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">기대 성과</span>
                    <span className="detail-value">2주 내 문의량 증가, ROAS 300% 이상</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="process-step fade-up">
              <div className="step-indicator">
                <div className="step-number">02</div>
                <div className="step-line"></div>
              </div>
              <div className="step-content">
                <div className="step-badge">STEP 2 · 자산 구축</div>
                <h4 className="step-title">콘텐츠 & SEO 전략</h4>
                <p className="step-desc">
                  광고비를 끊으면 끝나는 마케팅은 위험합니다.
                  검색 상위 노출되는 콘텐츠, 자연 유입을 만드는 SEO 전략으로
                  지속 가능한 마케팅 자산을 구축합니다.
                </p>
                <div className="step-details">
                  <div className="detail-item">
                    <span className="detail-label">주요 활동</span>
                    <span className="detail-value">키워드 리서치 / SEO 콘텐츠 제작 / 블로그 운영 / 순위 트래킹</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">기대 성과</span>
                    <span className="detail-value">주요 키워드 검색 1페이지 노출, 자연 유입 200% 증가</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="process-step fade-up">
              <div className="step-indicator">
                <div className="step-number">03</div>
              </div>
              <div className="step-content">
                <div className="step-badge">STEP 3 · 성장 가속</div>
                <h4 className="step-title">업종 특화 전략 실행</h4>
                <p className="step-desc">
                  헬스장과 병원의 고객 여정은 완전히 다릅니다.
                  업종별 특성에 맞춘 캠페인 기획,
                  고객 데이터 기반 리타겟팅으로 전환율을 극대화합니다.
                </p>
                <div className="step-details">
                  <div className="detail-item">
                    <span className="detail-label">주요 활동</span>
                    <span className="detail-value">업종별 캠페인 / CRM 연동 / 리타겟팅 / 월간 성과 분석</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">기대 성과</span>
                    <span className="detail-value">재방문율 향상, LTV 증가, 경쟁사 대비 시장 점유율 확대</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 업종별 전문성 섹션 */}
      <section className="industry-section">
        <div className="container">
          <h2 className="section-label fade-up">EXPERTISE</h2>
          <h3 className="section-title fade-up">
            업종별 맞춤 전략을 제시합니다
          </h3>
          <p className="section-desc fade-up">
            템플릿 마케팅은 하지 않습니다. 각 업종의 고객 심리와 구매 여정에 최적화된 전략을 설계합니다.
          </p>

          <div className="industry-grid">
            <div className="industry-card fade-up">
              <div className="industry-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3"/>
                </svg>
              </div>
              <h4>헬스장 / 필라테스</h4>
              <p>무료 체험 전환 최적화, 지역 타겟팅, 회원 후기 콘텐츠</p>
              <div className="industry-result">평균 신규 회원 +180%</div>
            </div>
            <div className="industry-card fade-up">
              <div className="industry-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3h18v18H3zM12 8v8M8 12h8"/>
                </svg>
              </div>
              <h4>음식점 / 카페</h4>
              <p>인스타그램 감성 콘텐츠, 배달앱 리뷰 관리, 시즌 이벤트</p>
              <div className="industry-result">평균 매출 +95%</div>
            </div>
            <div className="industry-card fade-up">
              <div className="industry-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                  <polyline points="9,22 9,12 15,12 15,22"/>
                </svg>
              </div>
              <h4>부동산 / 인테리어</h4>
              <p>시공 포트폴리오, 네이버 부동산 광고, 상담 전환 최적화</p>
              <div className="industry-result">평균 문의량 +220%</div>
            </div>
            <div className="industry-card fade-up">
              <div className="industry-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                </svg>
              </div>
              <h4>뷰티 / 네일샵</h4>
              <p>인스타그램 릴스, 비포/애프터 콘텐츠, 시술 후기 관리</p>
              <div className="industry-result">평균 예약률 +150%</div>
            </div>
            <div className="industry-card fade-up">
              <div className="industry-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
                </svg>
              </div>
              <h4>학원 / 교육</h4>
              <p>합격 후기 콘텐츠, 학부모 타겟 광고, 상담 예약 최적화</p>
              <div className="industry-result">평균 등록률 +130%</div>
            </div>
            <div className="industry-card fade-up">
              <div className="industry-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <h4>병원 / 의원</h4>
              <p>의료 정보 콘텐츠, 전문의 브랜딩, 진료 예약 전환 최적화</p>
              <div className="industry-result">평균 예약률 +175%</div>
            </div>
          </div>
        </div>
      </section>

      {/* 왜 그로우마케팅인가 섹션 */}
      <section className="why-section">
        <div className="container">
          <h2 className="section-label fade-up">WHY US</h2>
          <h3 className="section-title fade-up">
            왜 그로우마케팅입니까?
          </h3>

          <div className="why-grid">
            <div className="why-card fade-up">
              <div className="why-number">01</div>
              <h4>투명한 비용 구조</h4>
              <p>
                광고비와 대행비를 명확히 분리합니다.
                어디에 얼마가 쓰이는지, 대시보드로 실시간 확인할 수 있습니다.
                숨기는 비용은 없습니다.
              </p>
            </div>
            <div className="why-card fade-up">
              <div className="why-number">02</div>
              <h4>전담 마케터 배정</h4>
              <p>
                여러 클라이언트를 돌아가며 담당하지 않습니다.
                전담 마케터가 귀사의 비즈니스를 깊이 이해하고,
                장기적 관점에서 전략을 수립합니다.
              </p>
            </div>
            <div className="why-card fade-up">
              <div className="why-number">03</div>
              <h4>주간 성과 미팅</h4>
              <p>
                월 1회 리포트로 끝나지 않습니다.
                주간 미팅으로 성과를 점검하고,
                실시간으로 전략을 조정합니다.
              </p>
            </div>
            <div className="why-card fade-up">
              <div className="why-number">04</div>
              <h4>성과 미달 시 환불</h4>
              <p>
                약속한 KPI에 도달하지 못하면, 대행비를 환불합니다.
                그만큼 결과에 자신 있습니다.
                리스크는 저희가 집니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 이미지 플레이스홀더 */}
      <section className="image-section">
        <div className="container">
          <div className="image-placeholder fade-up">
            <div className="placeholder-content">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21,15 16,10 5,21"/>
              </svg>
              <p>마케팅 성과 대시보드 / 성공 사례 이미지</p>
              <span>실제 클라이언트 데이터 및 성과 스크린샷 삽입</span>
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
              무료 진단을 통해 현재 마케팅의 문제점과 개선 방향을 먼저 확인하세요.<br />
              비용 부담 없이 전문가의 인사이트를 받아보실 수 있습니다.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button primary">
                무료 마케팅 진단 신청
              </a>
              <a href="/portfolio" className="cta-button secondary">
                성공 사례 보기
              </a>
            </div>
            <p className="cta-note">
              * 진단 후 계약 강요 없습니다. 부담 없이 신청하세요.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .marketing-page {
          background: linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 100%);
          min-height: 100vh;
          color: #ffffff;
          font-family: "Pretendard", -apple-system, sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* 히어로 섹션 */
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 120px 24px 80px;
          position: relative;
          background: radial-gradient(ellipse at center, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
        }

        .hero-content {
          text-align: center;
          max-width: 900px;
        }

        .hero-badge {
          display: inline-block;
          padding: 8px 20px;
          background: rgba(99, 102, 241, 0.2);
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 2px;
          color: #6366f1;
          margin-bottom: 32px;
        }

        .hero-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 24px;
          background: linear-gradient(135deg, #ffffff 0%, #a5a5a5 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.8;
          margin-bottom: 48px;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .stat-item {
          text-align: center;
        }

        .counter-value {
          display: block;
          font-size: 2.5rem;
          font-weight: 800;
          color: #6366f1;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .stat-divider {
          width: 1px;
          height: 50px;
          background: rgba(255, 255, 255, 0.2);
        }

        /* 공통 섹션 스타일 */
        section {
          padding: 120px 0;
        }

        .section-label {
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 3px;
          color: #6366f1;
          margin-bottom: 16px;
          text-align: center;
        }

        .section-title {
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 800;
          text-align: center;
          margin-bottom: 16px;
          color: #ffffff;
        }

        .section-desc {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.6);
          text-align: center;
          max-width: 700px;
          margin: 0 auto 60px;
          line-height: 1.7;
        }

        /* 문제 제기 섹션 */
        .problem-section {
          background: rgba(0, 0, 0, 0.3);
        }

        .problem-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .problem-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 40px;
          transition: all 0.3s ease;
        }

        .problem-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(99, 102, 241, 0.3);
          transform: translateY(-4px);
        }

        .problem-number {
          font-size: 0.85rem;
          font-weight: 700;
          color: #6366f1;
          margin-bottom: 16px;
        }

        .problem-card h4 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: #ffffff;
        }

        .problem-card p {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.7;
        }

        /* 솔루션 섹션 */
        .solution-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .solution-card {
          background: rgba(99, 102, 241, 0.05);
          border: 1px solid rgba(99, 102, 241, 0.15);
          border-radius: 16px;
          padding: 40px;
          transition: all 0.3s ease;
        }

        .solution-card:hover {
          background: rgba(99, 102, 241, 0.1);
          border-color: rgba(99, 102, 241, 0.3);
          transform: translateY(-4px);
        }

        .solution-icon {
          width: 48px;
          height: 48px;
          background: rgba(99, 102, 241, 0.2);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .solution-icon svg {
          width: 24px;
          height: 24px;
          color: #6366f1;
        }

        .solution-card h4 {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: #ffffff;
        }

        .solution-card p {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.7;
        }

        /* 프로세스 섹션 */
        .process-section {
          background: rgba(0, 0, 0, 0.3);
        }

        .process-timeline {
          position: relative;
        }

        .process-step {
          display: flex;
          gap: 40px;
          margin-bottom: 60px;
        }

        .process-step:last-child {
          margin-bottom: 0;
        }

        .step-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
        }

        .step-number {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          font-weight: 800;
          color: #ffffff;
        }

        .step-line {
          width: 2px;
          flex-grow: 1;
          background: linear-gradient(180deg, #6366f1 0%, transparent 100%);
          margin-top: 16px;
          min-height: 100px;
        }

        .step-content {
          flex-grow: 1;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 40px;
        }

        .step-badge {
          display: inline-block;
          padding: 6px 16px;
          background: rgba(99, 102, 241, 0.2);
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #6366f1;
          margin-bottom: 16px;
        }

        .step-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 16px;
          color: #ffffff;
        }

        .step-desc {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.8;
          margin-bottom: 24px;
        }

        .step-details {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .detail-item {
          display: flex;
          gap: 16px;
          padding: 12px 16px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 8px;
        }

        .detail-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #6366f1;
          white-space: nowrap;
          min-width: 80px;
        }

        .detail-value {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
        }

        /* 업종별 전문성 섹션 */
        .industry-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .industry-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 32px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .industry-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(99, 102, 241, 0.3);
          transform: translateY(-4px);
        }

        .industry-icon {
          width: 56px;
          height: 56px;
          background: rgba(99, 102, 241, 0.15);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }

        .industry-icon svg {
          width: 28px;
          height: 28px;
          color: #6366f1;
        }

        .industry-card h4 {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: #ffffff;
        }

        .industry-card p {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .industry-result {
          display: inline-block;
          padding: 8px 16px;
          background: rgba(99, 102, 241, 0.2);
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #6366f1;
        }

        /* Why Us 섹션 */
        .why-section {
          background: rgba(0, 0, 0, 0.3);
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .why-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 40px;
          transition: all 0.3s ease;
        }

        .why-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(99, 102, 241, 0.3);
        }

        .why-number {
          font-size: 2rem;
          font-weight: 800;
          color: #6366f1;
          margin-bottom: 16px;
        }

        .why-card h4 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: #ffffff;
        }

        .why-card p {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.7;
        }

        /* 이미지 플레이스홀더 */
        .image-section {
          padding: 80px 0;
        }

        .image-placeholder {
          background: rgba(255, 255, 255, 0.03);
          border: 2px dashed rgba(255, 255, 255, 0.15);
          border-radius: 16px;
          padding: 80px 40px;
          text-align: center;
        }

        .placeholder-content svg {
          width: 64px;
          height: 64px;
          color: rgba(255, 255, 255, 0.3);
          margin-bottom: 24px;
        }

        .placeholder-content p {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 8px;
        }

        .placeholder-content span {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.3);
        }

        /* CTA 섹션 */
        .cta-section {
          padding: 120px 0;
        }

        .cta-content {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%);
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 24px;
          padding: 80px 40px;
          text-align: center;
        }

        .cta-title {
          font-size: clamp(1.75rem, 4vw, 2.25rem);
          font-weight: 800;
          margin-bottom: 20px;
          color: #ffffff;
        }

        .cta-desc {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.7);
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
          padding: 16px 40px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .cta-button.primary {
          background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
          color: #ffffff;
        }

        .cta-button.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 40px rgba(99, 102, 241, 0.4);
        }

        .cta-button.secondary {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #ffffff;
        }

        .cta-button.secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.5);
        }

        .cta-note {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.4);
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
            padding: 100px 24px 60px;
            min-height: auto;
          }

          .hero-stats {
            flex-direction: column;
            gap: 24px;
          }

          .stat-divider {
            width: 60px;
            height: 1px;
          }

          .problem-grid,
          .solution-grid,
          .why-grid {
            grid-template-columns: 1fr;
          }

          .industry-grid {
            grid-template-columns: 1fr;
          }

          .process-step {
            flex-direction: column;
            gap: 20px;
          }

          .step-indicator {
            flex-direction: row;
            gap: 16px;
          }

          .step-line {
            width: 100px;
            height: 2px;
            min-height: auto;
            margin-top: 0;
            margin-left: 0;
          }

          .step-number {
            width: 48px;
            height: 48px;
            font-size: 0.9rem;
          }

          .step-content {
            padding: 24px;
          }

          .detail-item {
            flex-direction: column;
            gap: 4px;
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
      `}</style>
    </div>
  );
}
