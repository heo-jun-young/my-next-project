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

    const cards = document.querySelectorAll<HTMLElement>(".platform-card");
    cards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(30px)";
      card.style.transition = "all 0.6s ease-out";
      observer.observe(card);
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
    <div className="sns-page">
      <div className="container">
        {/* 히어로 섹션 */}
        <div className="hero">
          <h1> SNS광고 (퍼포먼스 마케팅)</h1>
          <p className="subtitle">
            여러분의 비즈니스를 온라인에서 빛나게 만들어 드립니다!
          </p>
        </div>

        {/* 쉬운 설명 섹션 */}
        <div className="easy-explanation">
          <h2>
            <span className="emoji"></span>
            정말 쉽게 설명해드릴게요!
          </h2>
          <div className="simple-text">
            <strong>SNS광고</strong>는 여러분이 매일 사용하는{" "}
            <strong>인스타그램, 페이스북, 네이버, 카카오톡</strong> 같은 곳에
            우리 가게나 상품을 알리는 광고예요! 
            <br />
            <br />
            <strong>퍼포먼스 마케팅</strong>이라고도 하는데 "얼마나 잘 팔렸는지" 숫자로
            정확히 보여주는 똑똑한 광고예요.
            <br />
            예를 들어, <strong>1만원 광고비로 10만원 매출</strong>이 나왔다면
            성공! 
            <br />
            <br />
            쉽게 말해,{" "}
            <strong>
              "돈 쓴 만큼 확실하게 손님을 데려오는 마법 같은 광고"
            </strong>
            라고 생각하시면 돼요! ✨
          </div>
        </div>

        {/* 플랫폼 카드 그리드 */}
        <div className="platforms-grid">
          {/* 네이버 */}
          <div className="platform-card naver">
            <div className="platform-header">
              <div className="platform-logo">N</div>
              <h3 className="platform-title">네이버 광고</h3>
            </div>
            <p className="platform-description">
              한국인이 가장 많이 검색하는 네이버! 검색할 때 맨 위에 우리
              가게가 보이게 해드려요.
            </p>
            <div className="features">
              <div className="feature-item">
                <span className="check-icon">✓</span>
                <span>검색하면 바로 위에 노출!</span>
              </div>
              <div className="feature-item">
                <span className="check-icon">✓</span>
                <span>스마트플레이스 연동으로 지도 노출</span>
              </div>
              <div className="feature-item">
                <span className="check-icon">✓</span>
                <span>쇼핑검색, 블로그까지 한번에</span>
              </div>
            </div>
          </div>

          {/* 메타(인스타/페북) */}
          <div className="platform-card meta">
            <div className="platform-header">
              <div className="platform-logo">f</div>
              <h3 className="platform-title">메타 광고</h3>
            </div>
            <p className="platform-description">
              인스타그램과 페이스북에서 예쁜 사진과 영상으로 젊은 손님들의
              마음을 사로잡아요!
            </p>
            <div className="features">
              <div className="feature-item">
                <span className="check-icon">✓</span>
                <span>인스타 피드와 스토리 광고</span>
              </div>
              <div className="feature-item">
                <span className="check-icon">✓</span>
                <span>관심사별로 정확한 타겟팅</span>
              </div>
              <div className="feature-item">
                <span className="check-icon">✓</span>
                <span>DM으로 바로 문의 받기</span>
              </div>
            </div>
          </div>

          {/* 구글 */}
          <div className="platform-card google">
            <div className="platform-header">
              <div className="platform-logo">G</div>
              <h3 className="platform-title">구글 광고</h3>
            </div>
            <p className="platform-description">
              유튜브와 구글 검색에 광고를 보여드려요! 전 세계 사람들에게도 알릴
              수 있어요.
            </p>
            <div className="features">
              <div className="feature-item">
                <span className="check-icon">✓</span>
                <span>유튜브 영상 시작 전 광고</span>
              </div>
              <div className="feature-item">
                <span className="check-icon">✓</span>
                <span>구글 검색 최상단 노출</span>
              </div>
              <div className="feature-item">
                <span className="check-icon">✓</span>
                <span>앱 다운로드 유도 가능</span>
              </div>
            </div>
          </div>

          {/* 카카오 */}
          <div className="platform-card kakao">
            <div className="platform-header">
              <div className="platform-logo">K</div>
              <h3 className="platform-title">카카오 광고</h3>
            </div>
            <p className="platform-description">
              카카오톡 채팅창에서 자연스럽게 광고! 친구처럼 메시지도 보낼 수
              있어요.
            </p>
            <div className="features">
              <div className="feature-item">
                <span className="check-icon">✓</span>
                <span>카톡 채팅리스트 광고</span>
              </div>
              <div className="feature-item">
                <span className="check-icon">✓</span>
                <span>채널 친구 모으기 최적화</span>
              </div>
              <div className="feature-item">
                <span className="check-icon">✓</span>
                <span>알림톡으로 재방문 유도</span>
              </div>
            </div>
          </div>

          {/* 당근마켓 */}
          <div className="platform-card carrot">
            <div className="platform-header">
              <div className="platform-logo">🥕</div>
              <h3 className="platform-title">당근 광고</h3>
            </div>
            <p className="platform-description">
              우리 동네 이웃들에게만 집중 광고! 동네 가게라면 당근이 최고예요.
            </p>
            <div className="features">
              <div className="feature-item">
                <span className="check-icon">✓</span>
                <span>동네별 정확한 타겟팅</span>
              </div>
              <div className="feature-item">
                <span className="check-icon">✓</span>
                <span>중고거래 피드 사이 노출</span>
              </div>
              <div className="feature-item">
                <span className="check-icon">✓</span>
                <span>동네생활 탭 비즈프로필</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA 섹션 */}
        <div className="cta-section">
          <h2 className="cta-title">💡 이제 시작해볼까요?</h2>
          <p className="cta-description">
            광고가 어렵게 느껴지시나요? 걱정 마세요!
            <br />
            저희가 A부터 Z까지 다 도와드릴게요. 😊
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

        .sns-page {
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
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: "";
          position: absolute;
          top: -50%;
          right: -10%;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, #ffd89b 0%, #19547b 100%);
          opacity: 0.1;
          border-radius: 50%;
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
          position: relative;
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

        /* 플랫폼 그리드 */
        .platforms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin: 40px 0;
        }

        .platform-card {
          background: white;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          animation: fadeIn 0.6s ease-out;
          animation-fill-mode: both;
        }

        .platform-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(
            90deg,
            var(--platform-color) 0%,
            var(--platform-color-light) 100%
          );
        }

        .platform-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .platform-card.naver {
          --platform-color: #03c75a;
          --platform-color-light: #06e86c;
        }
        .platform-card.meta {
          --platform-color: #1877f2;
          --platform-color-light: #0099ff;
        }
        .platform-card.google {
          --platform-color: #4285f4;
          --platform-color-light: #34a853;
        }
        .platform-card.kakao {
          --platform-color: #fee500;
          --platform-color-light: #ffd700;
        }
        .platform-card.carrot {
          --platform-color: #ff6f0f;
          --platform-color-light: #ff9558;
        }

        .platform-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }

        .platform-logo {
          width: 60px;
          height: 60px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2em;
          font-weight: bold;
          color: white;
        }

        .naver .platform-logo {
          background: linear-gradient(135deg, #03c75a, #06e86c);
        }
        .meta .platform-logo {
          background: linear-gradient(135deg, #1877f2, #0099ff);
        }
        .google .platform-logo {
          background: linear-gradient(135deg, #4285f4, #34a853);
        }
        .kakao .platform-logo {
          background: linear-gradient(135deg, #fee500, #ffd700);
          color: #3c1e1e;
        }
        .carrot .platform-logo {
          background: linear-gradient(135deg, #ff6f0f, #ff9558);
        }

        .platform-title {
          font-size: 1.5em;
          font-weight: 700;
        }

        .platform-description {
          color: #666;
          margin-bottom: 20px;
          font-size: 1.05em;
          line-height: 1.6;
        }

        .features {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px;
          background: #f8f9fa;
          border-radius: 10px;
          transition: background 0.3s ease;
        }

        .feature-item:hover {
          background: #e9ecef;
        }

        .check-icon {
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          flex-shrink: 0;
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

          .platforms-grid {
            grid-template-columns: 1fr;
            gap: 20px;
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
