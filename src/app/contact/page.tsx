"use client";

import { useState, useEffect } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    industry: "",
    concern: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
      el.style.transition = `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 여기에 실제 폼 제출 로직 추가 (예: API 호출)
    // 현재는 시뮬레이션
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="contact-page">
        <div className="success-container">
          <div className="success-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h1>문의가 접수되었습니다</h1>
          <p>
            빠른 시간 내에 담당자가 연락드리겠습니다.
            <br />
            보통 1영업일 이내에 회신드립니다.
          </p>
          <a href="/" className="back-button">
            홈으로 돌아가기
          </a>
        </div>

        <style jsx>{`
          .contact-page {
            background: linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px 24px;
          }

          .success-container {
            text-align: center;
            max-width: 500px;
          }

          .success-icon {
            width: 80px;
            height: 80px;
            background: rgba(34, 197, 94, 0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 32px;
          }

          .success-icon svg {
            width: 40px;
            height: 40px;
            color: #22c55e;
          }

          h1 {
            font-size: 2rem;
            font-weight: 800;
            color: #ffffff;
            margin-bottom: 16px;
          }

          p {
            font-size: 1.1rem;
            color: rgba(255, 255, 255, 0.7);
            line-height: 1.8;
            margin-bottom: 40px;
          }

          .back-button {
            display: inline-block;
            padding: 16px 40px;
            background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
            color: #ffffff;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
          }

          .back-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 40px rgba(99, 102, 241, 0.4);
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="contact-page">
      {/* 헤더 섹션 */}
      <section className="header-section">
        <div className="container">
          <h1 className="page-title fade-up">문의하기</h1>
          <p className="page-desc fade-up">
            지금 바로 문의하시면 빠르게 연락드립니다.
            <br />
            담당자가 1영업일 이내에 연락드립니다.
          </p>
        </div>
      </section>

      {/* 폼 섹션 */}
      <section className="form-section">
        <div className="container">
          <div className="form-wrapper fade-up">
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                {/* 이름 */}
                <div className="form-group">
                  <label htmlFor="name">성함 *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="홍길동"
                    required
                  />
                </div>

                {/* 이메일 */}
                <div className="form-group">
                  <label htmlFor="email">이메일 *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    required
                  />
                </div>

                {/* 전화번호 */}
                <div className="form-group">
                  <label htmlFor="phone">전화번호 *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="010-1234-5678"
                    required
                  />
                </div>

                {/* 업종 */}
                <div className="form-group">
                  <label htmlFor="industry">업종 *</label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                  >
                    <option value="">업종을 선택해주세요</option>
                    <option value="fitness">헬스장 / 필라테스</option>
                    <option value="food">음식점 / 카페</option>
                    <option value="realestate">부동산 / 인테리어</option>
                    <option value="beauty">뷰티 / 네일샵</option>
                    <option value="education">학원 / 교육</option>
                    <option value="medical">병원 / 의원</option>
                    <option value="consulting">컨설팅 / 전문서비스</option>
                    <option value="ecommerce">이커머스 / 쇼핑몰</option>
                    <option value="other">기타</option>
                  </select>
                </div>
              </div>

              {/* 가장 큰 고민 */}
              <div className="form-group full-width">
                <label htmlFor="concern">가장 큰 고민 *</label>
                <textarea
                  id="concern"
                  name="concern"
                  value={formData.concern}
                  onChange={handleChange}
                  placeholder="현재 마케팅에서 가장 고민되는 부분을 자유롭게 적어주세요.&#10;예) 광고비는 많이 쓰는데 문의가 없어요 / 어떤 광고를 해야 할지 모르겠어요"
                  rows={5}
                  required
                />
              </div>

              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="loading">
                    <span className="spinner"></span>
                    제출 중...
                  </span>
                ) : (
                  "무료 상담 신청하기"
                )}
              </button>

              <p className="form-note">
                * 제출하신 정보는 상담 목적으로만 사용되며, 제3자에게 제공되지
                않습니다.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* 연락처 정보 */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            <div className="contact-info-card fade-up">
              <div className="info-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <h4>전화 상담</h4>
              <p>평일 09:00 - 18:00</p>
              <a href="tel:010-1234-5678" className="info-link">
                010-1234-5678
              </a>
            </div>

            <div className="contact-info-card fade-up">
              <div className="info-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h4>이메일 문의</h4>
              <p>24시간 접수 가능</p>
              <a href="mailto:contact@growmarketing.co.kr" className="info-link">
                contact@growmarketing.co.kr
              </a>
            </div>

            <div className="contact-info-card fade-up">
              <div className="info-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h4>오시는 길</h4>
              <p>방문 상담 예약 가능</p>
              <span className="info-link">서울시 강남구 테헤란로</span>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-page {
          background: linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 100%);
          min-height: 100vh;
          color: #ffffff;
          font-family: "Pretendard", -apple-system, sans-serif;
        }

        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* 헤더 섹션 */
        .header-section {
          padding: 120px 0 60px;
          text-align: center;
        }

        .page-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #ffffff 0%, #a5a5a5 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .page-desc {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.8;
        }

        /* 폼 섹션 */
        .form-section {
          padding: 0 0 80px;
        }

        .form-wrapper {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 48px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-bottom: 24px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group.full-width {
          grid-column: 1 / -1;
          margin-bottom: 32px;
        }

        label {
          font-size: 0.9rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
        }

        input,
        select,
        textarea {
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          padding: 14px 16px;
          font-size: 1rem;
          color: #ffffff;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        input::placeholder,
        textarea::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        input:focus,
        select:focus,
        textarea:focus {
          outline: none;
          border-color: #6366f1;
          background: rgba(99, 102, 241, 0.1);
        }

        select {
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.5)' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          padding-right: 40px;
        }

        select option {
          background: #1a1a2e;
          color: #ffffff;
        }

        textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-button {
          width: 100%;
          padding: 18px 40px;
          background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
          color: #ffffff;
          border: none;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 40px rgba(99, 102, 241, 0.4);
        }

        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .loading {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: #ffffff;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .form-note {
          margin-top: 20px;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.4);
          text-align: center;
        }

        /* 연락처 정보 섹션 */
        .contact-info-section {
          padding: 80px 0 120px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .contact-info-section .container {
          max-width: 1000px;
        }

        .contact-info-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .contact-info-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 32px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .contact-info-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(99, 102, 241, 0.3);
        }

        .info-icon {
          width: 56px;
          height: 56px;
          background: rgba(99, 102, 241, 0.15);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }

        .info-icon svg {
          width: 28px;
          height: 28px;
          color: #6366f1;
        }

        .contact-info-card h4 {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 8px;
          color: #ffffff;
        }

        .contact-info-card p {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 12px;
        }

        .info-link {
          font-size: 0.95rem;
          color: #6366f1;
          text-decoration: none;
          font-weight: 600;
        }

        a.info-link:hover {
          text-decoration: underline;
        }

        /* 반응형 */
        @media (max-width: 768px) {
          .header-section {
            padding: 100px 0 40px;
          }

          .form-wrapper {
            padding: 32px 24px;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .contact-info-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
