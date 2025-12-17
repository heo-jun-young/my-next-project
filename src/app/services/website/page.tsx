"use client";

import { useEffect } from "react";

export default function WebsitePage() {
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
      ".feature-card, .industry-card, .tech-card, .process-step"
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
        alert("포트폴리오 페이지로 연결됩니다!");
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
    <div className="website-page">
      <div className="container">
        {/* 히어로 섹션 */}
        <div className="hero">
          <h1>💻 홈페이지 제작</h1>
          <p className="subtitle">
            단순히 예쁜 사이트가 아니라,<br />
            고객 신청이 늘어나는 홈페이지를 만듭니다
          </p>
        </div>

        {/* 쉬운 설명 섹션 */}
        <div className="easy-explanation">
          <h2>
            <span className="emoji">💡</span>
            왜 그냥 예쁘기만 한 홈페이지는 의미가 없을까요?
          </h2>
          <div className="simple-text">
            많은 업체들이 <strong>디자인만 예쁜 홈페이지</strong>를 만들어줍니다.
            <br />
            하지만 정작 중요한 건 <strong>"방문자가 고객이 되는가"</strong>예요!
            <br />
            <br />
            그로우마케팅의 홈페이지는 다릅니다:
            <br />
            ✅ <strong>업종별 맞춤 디자인</strong>으로 브랜딩과 차별화
            <br />
            ✅ <strong>메타 광고 픽셀 연동</strong>으로 방문자 추적
            <br />
            ✅ <strong>전환율 최적화</strong>된 레이아웃 설계
            <br />
            ✅ <strong>데이터 분석</strong>으로 지속적인 개선
            <br />
            <br />
            쉽게 말해,{" "}
            <strong>
              "보기만 좋은 홈페이지가 아니라, 돈 버는 홈페이지"
            </strong>
            를 만들어드려요! 💰
          </div>
        </div>

        {/* 핵심 특징 섹션 */}
        <div className="features-section">
          <h2 className="section-title">🎯 우리 홈페이지의 특별함</h2>
          <p className="section-description">
            단순 제작을 넘어, 비즈니스 성장의 핵심 도구로 만들어드립니다
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>업종별 맞춤 디자인</h3>
              <p>
                헬스장, 카페, 학원, 병원... 각 업종의 특성을 반영한 전문적인
                디자인으로 경쟁사와 확실히 차별화됩니다.
              </p>
              <ul className="feature-list">
                <li>업종 특화 레이아웃</li>
                <li>브랜드 아이덴티티 구축</li>
                <li>시각적 차별화 전략</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>메타 광고 픽셀 연동</h3>
              <p>
                페이스북/인스타그램 광고 픽셀을 삽입하여 방문자의 행동을 추적하고,
                재타겟팅 광고로 전환율을 극대화합니다.
              </p>
              <ul className="feature-list">
                <li>페이스북 픽셀 설치</li>
                <li>전환 이벤트 추적</li>
                <li>맞춤 타겟 오디언스 생성</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>데이터 분석 & 최적화</h3>
              <p>
                구글 애널리틱스와 히트맵 분석을 통해 방문자가 어디를 클릭하는지,
                어디서 이탈하는지 파악하고 개선합니다.
              </p>
              <ul className="feature-list">
                <li>구글 애널리틱스 4 연동</li>
                <li>히트맵 분석</li>
                <li>A/B 테스트 및 개선</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>빠른 로딩 & SEO 최적화</h3>
              <p>
                검색 엔진 최적화(SEO)로 네이버/구글 검색 시 상위 노출되고, 빠른
                로딩 속도로 이탈률을 낮춥니다.
              </p>
              <ul className="feature-list">
                <li>검색 엔진 최적화(SEO)</li>
                <li>모바일 최적화</li>
                <li>페이지 속도 최적화</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3>실시간 상담 시스템</h3>
              <p>
                카카오톡 채널, 채팅 상담, 전화 연결 등 다양한 문의 채널을
                배치하여 고객이 바로 연락할 수 있게 만듭니다.
              </p>
              <ul className="feature-list">
                <li>카카오톡 채널 연동</li>
                <li>채팅 상담 위젯</li>
                <li>원클릭 전화 연결</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>관리자 페이지 제공</h3>
              <p>
                직접 콘텐츠를 수정하고, 문의 내역을 확인하며, 통계를 볼 수 있는
                관리자 페이지를 제공합니다.
              </p>
              <ul className="feature-list">
                <li>쉬운 콘텐츠 수정</li>
                <li>문의 관리 시스템</li>
                <li>실시간 통계 대시보드</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 업종별 맞춤 홈페이지 */}
        <div className="industry-section">
          <h2 className="section-title">🏢 업종별 맞춤 홈페이지</h2>
          <p className="section-description">
            각 업종의 특성과 고객 니즈를 완벽히 반영한 전문 홈페이지
          </p>

          <div className="industry-grid">
            <div className="industry-card">
              <div className="industry-icon">🏋️</div>
              <h3>헬스장 / 필라테스</h3>
              <div className="industry-features">
                <div className="feature-tag">회원권 안내</div>
                <div className="feature-tag">트레이너 소개</div>
                <div className="feature-tag">시설 갤러리</div>
                <div className="feature-tag">무료 체험 신청</div>
              </div>
              <p className="industry-desc">
                회원 모집에 최적화된 레이아웃과 전/후 사진, 시설 영상으로 신뢰도
                UP!
              </p>
            </div>

            <div className="industry-card">
              <div className="industry-icon">🍕</div>
              <h3>음식점 / 카페</h3>
              <div className="industry-features">
                <div className="feature-tag">메뉴판</div>
                <div className="feature-tag">인테리어 갤러리</div>
                <div className="feature-tag">예약 시스템</div>
                <div className="feature-tag">배달 연동</div>
              </div>
              <p className="industry-desc">
                감성적인 비주얼과 메뉴 자동 업데이트, SNS 공유 최적화
              </p>
            </div>

            <div className="industry-card">
              <div className="industry-icon">🏠</div>
              <h3>부동산 / 인테리어</h3>
              <div className="industry-features">
                <div className="feature-tag">매물 검색</div>
                <div className="feature-tag">시공 포트폴리오</div>
                <div className="feature-tag">견적 문의</div>
                <div className="feature-tag">전/후 비교</div>
              </div>
              <p className="industry-desc">
                지역별 매물 검색, 시공 사례 갤러리로 신뢰감 전달
              </p>
            </div>

            <div className="industry-card">
              <div className="industry-icon">💅</div>
              <h3>뷰티 / 네일샵</h3>
              <div className="industry-features">
                <div className="feature-tag">시술 포트폴리오</div>
                <div className="feature-tag">가격표</div>
                <div className="feature-tag">실시간 예약</div>
                <div className="feature-tag">이벤트 공지</div>
              </div>
              <p className="industry-desc">
                인스타 감성 디자인과 예약 시스템 연동으로 편리함 제공
              </p>
            </div>

            <div className="industry-card">
              <div className="industry-icon">📚</div>
              <h3>학원 / 교육</h3>
              <div className="industry-features">
                <div className="feature-tag">강의 안내</div>
                <div className="feature-tag">합격 후기</div>
                <div className="feature-tag">수강 신청</div>
                <div className="feature-tag">성적 관리</div>
              </div>
              <p className="industry-desc">
                커리큘럼 소개, 합격생 후기로 학부모 신뢰도 확보
              </p>
            </div>

            <div className="industry-card">
              <div className="industry-icon">🏥</div>
              <h3>병원 / 의원</h3>
              <div className="industry-features">
                <div className="feature-tag">진료 과목</div>
                <div className="feature-tag">의료진 소개</div>
                <div className="feature-tag">온라인 예약</div>
                <div className="feature-tag">건강 정보</div>
              </div>
              <p className="industry-desc">
                전문성과 신뢰를 강조하는 깔끔한 디자인과 예약 시스템
              </p>
            </div>
          </div>
        </div>

        {/* 기술 스택 & 연동 */}
        <div className="tech-section">
          <h2 className="section-title">🛠️ 최신 기술과 다양한 연동</h2>
          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-icon">📱</div>
              <h4>반응형 디자인</h4>
              <p>PC, 태블릿, 모바일 모든 기기에서 완벽하게 작동</p>
            </div>

            <div className="tech-card">
              <div className="tech-icon">🔗</div>
              <h4>메타 픽셀 연동</h4>
              <p>페이스북/인스타 광고 추적 및 재타겟팅</p>
            </div>

            <div className="tech-card">
              <div className="tech-icon">📈</div>
              <h4>구글 애널리틱스</h4>
              <p>방문자 행동 분석 및 전환율 추적</p>
            </div>

            <div className="tech-card">
              <div className="tech-icon">💳</div>
              <h4>결제 시스템</h4>
              <p>아임포트, 토스페이먼츠 등 다양한 PG 연동</p>
            </div>

            <div className="tech-card">
              <div className="tech-icon">📧</div>
              <h4>이메일 마케팅</h4>
              <p>뉴스레터 발송 및 자동 응답 시스템</p>
            </div>

            <div className="tech-card">
              <div className="tech-icon">🗺️</div>
              <h4>지도 / 위치 서비스</h4>
              <p>네이버/카카오 지도 연동 및 길찾기</p>
            </div>
          </div>
        </div>

        {/* 제작 프로세스 */}
        <div className="process-section">
          <h2 className="section-title">📋 제작 프로세스</h2>
          <p className="section-description">
            체계적인 4단계 프로세스로 2-3주 안에 완성!
          </p>

          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">1주차</div>
              <h3 className="step-title">기획 & 디자인</h3>
              <ul className="step-list">
                <li>업종 분석 및 경쟁사 리서치</li>
                <li>브랜드 아이덴티티 설정</li>
                <li>와이어프레임 및 디자인 시안</li>
                <li>고객 피드백 반영</li>
              </ul>
            </div>

            <div className="process-step">
              <div className="step-number">2주차</div>
              <h3 className="step-title">개발 & 연동</h3>
              <ul className="step-list">
                <li>반응형 웹 개발</li>
                <li>메타 픽셀 / 구글 애널리틱스 연동</li>
                <li>관리자 페이지 구축</li>
                <li>결제/예약 시스템 연동</li>
              </ul>
            </div>

            <div className="process-step">
              <div className="step-number">3주차</div>
              <h3 className="step-title">테스트 & 최적화</h3>
              <ul className="step-list">
                <li>크로스 브라우저 테스트</li>
                <li>모바일 최적화</li>
                <li>속도 최적화 (PageSpeed 90+ 목표)</li>
                <li>SEO 최적화</li>
              </ul>
            </div>

            <div className="process-step">
              <div className="step-number">런칭</div>
              <h3 className="step-title">오픈 & 사후관리</h3>
              <ul className="step-list">
                <li>도메인 연결 및 호스팅</li>
                <li>검색엔진 등록 (네이버/구글)</li>
                <li>운영 교육</li>
                <li>3개월 무상 유지보수</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 왜 우리를 선택해야 하나요? */}
        <div className="why-us-section">
          <h2 className="section-title">🤔 왜 그로우마케팅 홈페이지인가요?</h2>
          <div className="comparison-table">
            <div className="comparison-header">
              <div className="compare-item">일반 업체</div>
              <div className="compare-item highlight">그로우마케팅</div>
            </div>

            <div className="comparison-row">
              <div className="compare-label">제작 기간</div>
              <div className="compare-item">4-8주 이상</div>
              <div className="compare-item highlight">2-3주 완성 ⚡</div>
            </div>

            <div className="comparison-row">
              <div className="compare-label">디자인</div>
              <div className="compare-item">템플릿 재활용</div>
              <div className="compare-item highlight">
                업종별 맞춤 디자인 🎨
              </div>
            </div>

            <div className="comparison-row">
              <div className="compare-label">광고 연동</div>
              <div className="compare-item">별도 비용</div>
              <div className="compare-item highlight">
                메타 픽셀 기본 포함 📊
              </div>
            </div>

            <div className="comparison-row">
              <div className="compare-label">데이터 분석</div>
              <div className="compare-item">제공 안 함</div>
              <div className="compare-item highlight">
                구글 애널리틱스 + 월간 리포트 📈
              </div>
            </div>

            <div className="comparison-row">
              <div className="compare-label">사후관리</div>
              <div className="compare-item">유료 전환</div>
              <div className="compare-item highlight">
                3개월 무상 유지보수 🔧
              </div>
            </div>

            <div className="comparison-row">
              <div className="compare-label">SEO 최적화</div>
              <div className="compare-item">기본만 제공</div>
              <div className="compare-item highlight">
                검색 상위 노출 전략 포함 🔍
              </div>
            </div>
          </div>
        </div>

        {/* 실제 성과 */}
        <div className="results-section">
          <h2 className="section-title">📈 실제 성과 사례</h2>
          <div className="results-grid">
            <div className="result-card">
              <div className="result-number">3.5배</div>
              <div className="result-label">문의 증가</div>
              <p className="result-desc">A 헬스장 (강남점)</p>
            </div>

            <div className="result-card">
              <div className="result-number">2.1배</div>
              <div className="result-label">예약 전환율</div>
              <p className="result-desc">B 네일샵 (홍대점)</p>
            </div>

            <div className="result-card">
              <div className="result-number">4배</div>
              <div className="result-label">방문자 증가</div>
              <p className="result-desc">C 학원 (대치점)</p>
            </div>
          </div>
        </div>

        {/* CTA 섹션 */}
        <div className="cta-section">
          <h2 className="cta-title">💡 우리 업체에 딱 맞는 홈페이지, 지금 시작하세요!</h2>
          <p className="cta-description">
            무료 상담으로 업종 분석부터 견적까지 제공해드립니다.
            <br />
            경쟁사는 이미 시작했습니다. 지금 바로 차별화하세요! 🚀
          </p>
          <div className="cta-buttons">
            <button className="cta-button primary">무료 상담 & 견적 받기</button>
            <button className="cta-button secondary">포트폴리오 보기</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .website-page {
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
          line-height: 1.6;
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

        /* 섹션 공통 스타일 */
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

        /* 특징 섹션 */
        .features-section {
          margin: 60px 0;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
        }

        .feature-card {
          background: white;
          padding: 35px;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .feature-icon {
          font-size: 3em;
          margin-bottom: 20px;
        }

        .feature-card h3 {
          font-size: 1.5em;
          color: #333;
          margin-bottom: 15px;
          font-weight: 700;
        }

        .feature-card p {
          color: #666;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .feature-list {
          list-style: none;
          padding: 0;
        }

        .feature-list li {
          padding: 8px 0;
          color: #667eea;
          font-weight: 500;
          position: relative;
          padding-left: 25px;
        }

        .feature-list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          font-weight: bold;
        }

        /* 업종별 섹션 */
        .industry-section {
          margin: 80px 0;
        }

        .industry-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .industry-card {
          background: white;
          padding: 35px;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .industry-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .industry-icon {
          font-size: 3.5em;
          text-align: center;
          margin-bottom: 20px;
        }

        .industry-card h3 {
          font-size: 1.4em;
          color: #333;
          margin-bottom: 20px;
          font-weight: 700;
          text-align: center;
        }

        .industry-features {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 20px;
          justify-content: center;
        }

        .feature-tag {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 6px 15px;
          border-radius: 20px;
          font-size: 0.85em;
          font-weight: 600;
        }

        .industry-desc {
          color: #666;
          text-align: center;
          line-height: 1.6;
        }

        /* 기술 스택 섹션 */
        .tech-section {
          margin: 80px 0;
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
        }

        .tech-card {
          background: white;
          padding: 30px;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .tech-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
        }

        .tech-icon {
          font-size: 2.5em;
          margin-bottom: 15px;
        }

        .tech-card h4 {
          font-size: 1.2em;
          color: #333;
          margin-bottom: 10px;
          font-weight: 700;
        }

        .tech-card p {
          color: #666;
          font-size: 0.95em;
        }

        /* 프로세스 섹션 */
        .process-section {
          margin: 80px 0;
        }

        .process-timeline {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .process-step {
          background: white;
          padding: 35px;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }

        .step-number {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          display: inline-block;
          padding: 8px 20px;
          border-radius: 50px;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .step-title {
          font-size: 1.4em;
          color: #333;
          margin-bottom: 20px;
          font-weight: 700;
        }

        .step-list {
          list-style: none;
          padding: 0;
        }

        .step-list li {
          padding: 10px 0;
          color: #666;
          position: relative;
          padding-left: 25px;
        }

        .step-list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #667eea;
          font-weight: bold;
        }

        /* 비교 테이블 */
        .why-us-section {
          margin: 80px 0;
        }

        .comparison-table {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          max-width: 800px;
          margin: 0 auto;
        }

        .comparison-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          font-weight: 700;
          font-size: 1.2em;
        }

        .comparison-header .compare-item {
          padding: 25px;
          text-align: center;
        }

        .comparison-row {
          display: grid;
          grid-template-columns: 150px 1fr 1fr;
          border-bottom: 1px solid #f0f0f0;
        }

        .comparison-row:last-child {
          border-bottom: none;
        }

        .compare-label {
          padding: 20px;
          background: #f8f9fa;
          font-weight: 600;
          color: #333;
          display: flex;
          align-items: center;
        }

        .compare-item {
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #666;
        }

        .compare-item.highlight {
          background: #f0f7ff;
          color: #667eea;
          font-weight: 600;
        }

        /* 실제 성과 */
        .results-section {
          margin: 80px 0;
        }

        .results-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .result-card {
          background: white;
          padding: 40px;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .result-card:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .result-number {
          font-size: 3em;
          font-weight: 900;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 10px;
        }

        .result-label {
          font-size: 1.3em;
          color: #333;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .result-desc {
          color: #999;
          font-size: 0.95em;
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

          .features-grid,
          .industry-grid,
          .tech-grid,
          .process-timeline {
            grid-template-columns: 1fr;
          }

          .comparison-row {
            grid-template-columns: 1fr;
          }

          .compare-label {
            background: #667eea;
            color: white;
            font-weight: 700;
          }

          .comparison-header {
            display: none;
          }

          .compare-item:first-of-type {
            border-bottom: 1px solid #e0e0e0;
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
