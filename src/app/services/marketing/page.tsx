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
      ".curriculum-step, .industry-card, .process-card"
    );
    animatedElements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "all 0.6s ease-out";
      observer.observe(el);
    });

    // 버튼 클릭 이벤트
    const buttons = document.querySelectorAll<HTMLButtonElement>(".cta-button");
    const clickHandler = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      if (target.classList.contains("primary")) {
        alert("무료 상담 신청 페이지로 연결됩니다!");
      } else {
        alert("성공 사례 페이지로 연결됩니다!");
      }
    };

    buttons.forEach((btn) => btn.addEventListener("click", clickHandler));

    // cleanup
    return () => {
      observer.disconnect();
      buttons.forEach((btn) =>
        btn.removeEventListener("click", clickHandler)
      );
    };
  }, []);

  return (
    <div className="marketing-page">
      <div className="container">
        {/* 히어로 섹션 */}
        <div className="hero">
          <h1>📊 마케팅 대행 서비스</h1>
          <p className="subtitle">
            우리 업종에 딱 맞는 전략부터 실행까지, A부터 Z까지 책임집니다!
          </p>
        </div>

        {/* 쉬운 설명 섹션 */}
        <div className="easy-explanation">
          <h2>
            <span className="emoji">💡</span>
            마케팅 대행이 뭔가요?
          </h2>
          <div className="simple-text">
            <strong>마케팅 대행</strong>은 여러분의 비즈니스를 성장시키기 위한
            <strong> 모든 마케팅 활동을 대신 해드리는 서비스</strong>예요!
            <br />
            <br />
            SNS 광고만 돌리는 게 아니라, 블로그에 글도 올리고, 검색하면 우리
            가게가 먼저 나오게 하고, 손님들이 계속 돌아오게 만드는{" "}
            <strong>전체적인 전략</strong>을 세워드려요.
            <br />
            <br />
            쉽게 말해,{" "}
            <strong>
              "여러분은 장사만 하세요. 손님 데려오는 건 저희가 할게요!"
            </strong>
            라는 거예요. ✨
          </div>
        </div>

        {/* 3단계 커리큘럼 섹션 */}
        <div className="curriculum-section">
          <h2 className="section-title">
            📚 우리의 3단계 마케팅 커리큘럼
          </h2>
          <p className="section-description">
            단순히 광고만 돌리는 게 아니라, 체계적인 프로세스로 성장시킵니다!
          </p>

          {/* Step 1: SNS 광고 */}
          <div className="curriculum-step step-1">
            <div className="step-header">
              <div className="step-number">STEP 1</div>
              <h3 className="step-title">🚀 SNS 광고로 빠르게 시작</h3>
            </div>
            <div className="step-content">
              <div className="step-description">
                먼저 <strong>즉각적인 효과</strong>를 보여드려야죠! SNS 광고로
                첫 손님을 데려옵니다.
              </div>
              <div className="step-details">
                <div className="detail-card">
                  <div className="detail-icon">🎯</div>
                  <h4>타겟 설정</h4>
                  <p>
                    우리 상품/서비스를 찾는 사람들의 나이, 지역, 관심사를
                    분석해요
                  </p>
                </div>
                <div className="detail-card">
                  <div className="detail-icon">📱</div>
                  <h4>플랫폼 선택</h4>
                  <p>
                    네이버, 인스타그램, 카카오 등 우리 고객이 가장 많은 곳을
                    찾아요
                  </p>
                </div>
                <div className="detail-card">
                  <div className="detail-icon">💰</div>
                  <h4>광고 집행</h4>
                  <p>예산에 맞춰 효율적으로 광고를 돌리고 실시간으로 조정해요</p>
                </div>
                <div className="detail-card">
                  <div className="detail-icon">📊</div>
                  <h4>성과 분석</h4>
                  <p>
                    얼마나 많은 사람이 봤고, 몇 명이 문의했는지 숫자로
                    보여드려요
                  </p>
                </div>
              </div>
              <div className="step-result">
                <strong>예상 기간:</strong> 1-2주 / <strong>기대 효과:</strong>{" "}
                즉각적인 문의 증가 🔥
              </div>
            </div>
          </div>

          {/* Step 2: 블로그 마케팅 */}
          <div className="curriculum-step step-2">
            <div className="step-header">
              <div className="step-number">STEP 2</div>
              <h3 className="step-title">✍️ 블로그로 신뢰 쌓기</h3>
            </div>
            <div className="step-content">
              <div className="step-description">
                광고는 돈이 들지만, <strong>블로그는 자산</strong>이에요! 검색하면
                계속 나오니까요.
              </div>
              <div className="step-details">
                <div className="detail-card">
                  <div className="detail-icon">🔍</div>
                  <h4>키워드 연구</h4>
                  <p>
                    손님들이 검색하는 단어를 찾아요 (예: "강남 헬스장 추천")
                  </p>
                </div>
                <div className="detail-card">
                  <div className="detail-icon">✏️</div>
                  <h4>전문 콘텐츠 작성</h4>
                  <p>검색 상위에 노출되도록 SEO 최적화된 글을 작성해요</p>
                </div>
                <div className="detail-card">
                  <div className="detail-icon">📸</div>
                  <h4>이미지/영상 삽입</h4>
                  <p>시선을 끄는 비주얼 콘텐츠로 체류 시간을 늘려요</p>
                </div>
                <div className="detail-card">
                  <div className="detail-icon">🔗</div>
                  <h4>유입 경로 분석</h4>
                  <p>어떤 글에서 손님이 많이 오는지 추적하고 개선해요</p>
                </div>
              </div>
              <div className="step-result">
                <strong>예상 기간:</strong> 1-3개월 / <strong>기대 효과:</strong>{" "}
                검색 1페이지 노출, 자연 유입 증가 🌱
              </div>
            </div>
          </div>

          {/* Step 3: 업종별 맞춤 전략 */}
          <div className="curriculum-step step-3">
            <div className="step-header">
              <div className="step-number">STEP 3</div>
              <h3 className="step-title">🎯 업종별 맞춤 전략 실행</h3>
            </div>
            <div className="step-content">
              <div className="step-description">
                모든 업종이 같을 순 없죠! <strong>우리 업종만의 특별한 전략</strong>
                을 짭니다.
              </div>
              <div className="step-details">
                <div className="detail-card">
                  <div className="detail-icon">🏋️</div>
                  <h4>헬스장/필라테스</h4>
                  <p>
                    • 무료 체험 쿠폰 광고
                    <br />
                    • "OO동 헬스장" 지역 검색 최적화
                    <br />• 회원 후기 영상 콘텐츠
                  </p>
                </div>
                <div className="detail-card">
                  <div className="detail-icon">🍕</div>
                  <h4>음식점/카페</h4>
                  <p>
                    • 인스타그램 감성 사진 광고
                    <br />
                    • 배달앱 리뷰 관리
                    <br />• 시그니처 메뉴 홍보 영상
                  </p>
                </div>
                <div className="detail-card">
                  <div className="detail-icon">🏠</div>
                  <h4>부동산/인테리어</h4>
                  <p>
                    • 네이버 부동산 광고
                    <br />
                    • 시공 전/후 블로그 포스팅
                    <br />• 고객 후기 영상 제작
                  </p>
                </div>
                <div className="detail-card">
                  <div className="detail-icon">💅</div>
                  <h4>뷰티/네일샵</h4>
                  <p>
                    • 인스타그램 릴스 숏폼 영상
                    <br />
                    • 시술 전/후 포트폴리오
                    <br />• 할인 이벤트 카카오톡 광고
                  </p>
                </div>
                <div className="detail-card">
                  <div className="detail-icon">📚</div>
                  <h4>학원/교육</h4>
                  <p>
                    • 합격 후기/성적 향상 사례
                    <br />
                    • "OO 학원 추천" 블로그 상위 노출
                    <br />• 학부모 대상 페이스북 광고
                  </p>
                </div>
                <div className="detail-card">
                  <div className="detail-icon">🏥</div>
                  <h4>병원/의원</h4>
                  <p>
                    • 의료 정보 블로그 콘텐츠
                    <br />
                    • 전문의 소개 영상
                    <br />• 건강검진 시즌 타겟 광고
                  </p>
                </div>
              </div>
              <div className="step-result">
                <strong>예상 기간:</strong> 지속적 / <strong>기대 효과:</strong>{" "}
                업종 특화 전략으로 경쟁사 대비 우위 확보 👑
              </div>
            </div>
          </div>
        </div>

        {/* 전체 프로세스 타임라인 */}
        <div className="timeline-section">
          <h2 className="section-title">⏰ 전체 진행 프로세스</h2>
          <div className="timeline">
            <div className="process-card">
              <div className="process-week">Week 1-2</div>
              <div className="process-title">🔍 초기 진단 & 전략 수립</div>
              <ul className="process-list">
                <li>업종 분석 및 경쟁사 조사</li>
                <li>타겟 고객 정의</li>
                <li>광고 플랫폼 및 예산 계획</li>
              </ul>
            </div>

            <div className="process-card">
              <div className="process-week">Week 3-4</div>
              <div className="process-title">🚀 SNS 광고 집행</div>
              <ul className="process-list">
                <li>광고 소재 제작 (이미지/영상/카피)</li>
                <li>캠페인 런칭 및 A/B 테스트</li>
                <li>실시간 성과 모니터링 및 최적화</li>
              </ul>
            </div>

            <div className="process-card">
              <div className="process-week">Month 2-3</div>
              <div className="process-title">✍️ 블로그 콘텐츠 구축</div>
              <ul className="process-list">
                <li>주 2-3회 블로그 포스팅</li>
                <li>SEO 키워드 최적화</li>
                <li>검색 순위 트래킹</li>
              </ul>
            </div>

            <div className="process-card">
              <div className="process-week">Month 3+</div>
              <div className="process-title">🎯 업종별 심화 전략</div>
              <ul className="process-list">
                <li>맞춤형 캠페인 기획</li>
                <li>고객 데이터 분석 및 재타겟팅</li>
                <li>월간 성과 보고 및 전략 수정</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 왜 우리를 선택해야 하나요? */}
        <div className="why-us-section">
          <h2 className="section-title">🤔 왜 그로우마케팅을 선택해야 하나요?</h2>
          <div className="why-us-grid">
            <div className="why-card">
              <div className="why-icon">🎓</div>
              <h4>업종별 전문 지식</h4>
              <p>
                헬스장, 음식점, 학원 등 각 업종의 특성을 이해하고 최적화된
                전략을 제시합니다
              </p>
            </div>
            <div className="why-card">
              <div className="why-icon">💰</div>
              <h4>투명한 비용 구조</h4>
              <p>
                광고비와 대행비를 명확히 구분하고, 월간 리포트로 어디에 돈을
                썼는지 보여드립니다
              </p>
            </div>
            <div className="why-card">
              <div className="why-icon">📞</div>
              <h4>빠른 소통</h4>
              <p>
                카카오톡으로 실시간 소통하고, 궁금한 건 언제든 물어보실 수
                있어요
              </p>
            </div>
            <div className="why-card">
              <div className="why-icon">📊</div>
              <h4>데이터 기반 의사결정</h4>
              <p>
                감이 아닌 숫자로 증명합니다. 클릭률, 전환율, ROI를 추적하며
                개선합니다
              </p>
            </div>
          </div>
        </div>

        {/* CTA 섹션 */}
        <div className="cta-section">
          <h2 className="cta-title">💡 지금 바로 시작해보세요!</h2>
          <p className="cta-description">
            마케팅이 처음이라 걱정되시나요?
            <br />
            무료 상담으로 우리 가게에 딱 맞는 전략을 먼저 들어보세요! 😊
          </p>
          <div className="cta-buttons">
            <button className="cta-button primary">무료 상담 신청하기</button>
            <button className="cta-button secondary">성공 사례 보기</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .marketing-page {
          font-family: "Pretendard", "Noto Sans KR", -apple-system, sans-serif;
          line-height: 1.6;
          color: #333;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          padding: 20px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* 히어로 섹션 */
        .hero {
          text-align: center;
          padding: 60px 20px;
          background: white;
          border-radius: 30px;
          margin: 20px 0 40px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        }

        h1 {
          font-size: 2.5em;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
        }

        .subtitle {
          font-size: 1.3em;
          color: #666;
          margin-bottom: 30px;
          font-weight: 500;
        }

        /* 쉬운 설명 박스 */
        .easy-explanation {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
          padding: 40px;
          border-radius: 25px;
          margin: 30px 0;
          box-shadow: 0 15px 35px rgba(240, 147, 251, 0.3);
        }

        .easy-explanation h2 {
          font-size: 1.8em;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .emoji {
          font-size: 1.5em;
        }

        .simple-text {
          font-size: 1.2em;
          line-height: 1.8;
          background: rgba(255, 255, 255, 0.1);
          padding: 20px;
          border-radius: 15px;
          backdrop-filter: blur(5px);
        }

        /* 커리큘럼 섹션 */
        .curriculum-section {
          margin: 60px 0;
        }

        .section-title {
          font-size: 2.2em;
          text-align: center;
          color: white;
          margin-bottom: 15px;
          font-weight: 800;
        }

        .section-description {
          text-align: center;
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.2em;
          margin-bottom: 50px;
        }

        .curriculum-step {
          background: white;
          border-radius: 25px;
          padding: 40px;
          margin-bottom: 40px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: hidden;
        }

        .curriculum-step::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 8px;
          background: var(--step-color);
        }

        .curriculum-step.step-1 {
          --step-color: linear-gradient(90deg, #ff6b6b, #ff8e53);
        }

        .curriculum-step.step-2 {
          --step-color: linear-gradient(90deg, #4facfe, #00f2fe);
        }

        .curriculum-step.step-3 {
          --step-color: linear-gradient(90deg, #43e97b, #38f9d7);
        }

        .step-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 30px;
        }

        .step-number {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 10px 20px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.9em;
          letter-spacing: 1px;
        }

        .step-title {
          font-size: 1.8em;
          color: #333;
          font-weight: 700;
        }

        .step-description {
          font-size: 1.2em;
          color: #666;
          margin-bottom: 30px;
          padding: 20px;
          background: #f8f9fa;
          border-radius: 15px;
          border-left: 4px solid #667eea;
        }

        .step-details {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }

        .detail-card {
          background: #f8f9fa;
          padding: 25px;
          border-radius: 15px;
          transition: all 0.3s ease;
        }

        .detail-card:hover {
          background: #e9ecef;
          transform: translateY(-5px);
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        }

        .detail-icon {
          font-size: 2.5em;
          margin-bottom: 15px;
        }

        .detail-card h4 {
          font-size: 1.2em;
          color: #333;
          margin-bottom: 10px;
        }

        .detail-card p {
          color: #666;
          line-height: 1.6;
          font-size: 0.95em;
        }

        .step-result {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 20px;
          border-radius: 15px;
          text-align: center;
          font-size: 1.1em;
        }

        /* 타임라인 섹션 */
        .timeline-section {
          margin: 80px 0;
        }

        .timeline {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .process-card {
          background: white;
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          position: relative;
        }

        .process-week {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          display: inline-block;
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 0.9em;
          font-weight: 700;
          margin-bottom: 15px;
        }

        .process-title {
          font-size: 1.3em;
          color: #333;
          margin-bottom: 15px;
          font-weight: 700;
        }

        .process-list {
          list-style: none;
          padding-left: 0;
        }

        .process-list li {
          padding: 8px 0;
          color: #666;
          position: relative;
          padding-left: 25px;
        }

        .process-list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #667eea;
          font-weight: bold;
        }

        /* Why Us 섹션 */
        .why-us-section {
          margin: 80px 0;
        }

        .why-us-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .why-card {
          background: white;
          padding: 35px;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .why-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .why-icon {
          font-size: 3em;
          margin-bottom: 20px;
        }

        .why-card h4 {
          font-size: 1.4em;
          color: #333;
          margin-bottom: 15px;
          font-weight: 700;
        }

        .why-card p {
          color: #666;
          line-height: 1.7;
        }

        /* CTA 섹션 */
        .cta-section {
          background: white;
          padding: 60px 40px;
          border-radius: 30px;
          text-align: center;
          margin: 60px 0;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        }

        .cta-title {
          font-size: 2.2em;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .cta-description {
          font-size: 1.2em;
          color: #666;
          margin-bottom: 40px;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-button {
          padding: 15px 40px;
          font-size: 1.1em;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          font-weight: 600;
        }

        .cta-button.primary {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
        }

        .cta-button.primary:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
        }

        .cta-button.secondary {
          background: white;
          color: #667eea;
          border: 2px solid #667eea;
        }

        .cta-button.secondary:hover {
          background: #667eea;
          color: white;
        }

        /* 반응형 */
        @media (max-width: 768px) {
          h1 {
            font-size: 1.8em;
          }

          .subtitle {
            font-size: 1.1em;
          }

          .section-title {
            font-size: 1.6em;
          }

          .step-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .step-details {
            grid-template-columns: 1fr;
          }

          .timeline {
            grid-template-columns: 1fr;
          }

          .why-us-grid {
            grid-template-columns: 1fr;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .cta-button {
            width: 100%;
            max-width: 300px;
          }
        }

        /* 애니메이션 */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
