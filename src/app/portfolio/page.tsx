"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// 카테고리 타입
type Category =
  | "all"
  | "interior"
  | "consulting"
  | "enterprise"
  | "ads"
  | "seo"
  | "conversion";

// 포트폴리오 아이템 타입
interface PortfolioItem {
  id: number;
  category: Exclude<Category, "all">;
  title: string;
  description: string;
  result: string;
  metrics: { label: string; value: string }[];
  image: string; // 이미지 경로 (플레이스홀더)
}

// 포트폴리오 데이터 (예시 - 실제 이미지와 내용은 사용자가 교체)
const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    category: "interior",
    title: "인테리어 업체 A사",
    description: "인테리어 시공 문의 증가 캠페인",
    result: "월 평균 문의 32건 → 127건",
    metrics: [
      { label: "문의량 증가", value: "+297%" },
      { label: "CPA 절감", value: "-42%" },
    ],
    image: "/portfolio/interior-1.jpg",
  },
  {
    id: 2,
    category: "interior",
    title: "리모델링 전문 B사",
    description: "아파트 리모델링 타겟 광고",
    result: "광고 ROAS 847% 달성",
    metrics: [
      { label: "ROAS", value: "847%" },
      { label: "전환율", value: "4.2%" },
    ],
    image: "/portfolio/interior-2.jpg",
  },
  {
    id: 3,
    category: "consulting",
    title: "경영 컨설팅 C사",
    description: "B2B 리드 제네레이션 캠페인",
    result: "분기당 상담 신청 180건 확보",
    metrics: [
      { label: "리드 확보", value: "180건/분기" },
      { label: "계약 전환율", value: "23%" },
    ],
    image: "/portfolio/consulting-1.jpg",
  },
  {
    id: 4,
    category: "consulting",
    title: "세무 컨설팅 D사",
    description: "법인 대상 세무 상담 유입",
    result: "월 상담 예약 5배 증가",
    metrics: [
      { label: "상담 예약", value: "+400%" },
      { label: "광고 효율", value: "+180%" },
    ],
    image: "/portfolio/consulting-2.jpg",
  },
  {
    id: 5,
    category: "enterprise",
    title: "IT 솔루션 E사",
    description: "SaaS 제품 리드 마케팅",
    result: "데모 신청 월 200건 이상",
    metrics: [
      { label: "데모 신청", value: "200건+/월" },
      { label: "MQL 전환", value: "35%" },
    ],
    image: "/portfolio/enterprise-1.jpg",
  },
  {
    id: 6,
    category: "enterprise",
    title: "제조업 F사",
    description: "B2B 수출 문의 확대",
    result: "해외 바이어 문의 3배 증가",
    metrics: [
      { label: "해외 문의", value: "+200%" },
      { label: "거래 성사", value: "12건" },
    ],
    image: "/portfolio/enterprise-2.jpg",
  },
  {
    id: 7,
    category: "ads",
    title: "헬스장 G사",
    description: "메타 광고 신규 회원 모집",
    result: "월 신규 회원 150% 증가",
    metrics: [
      { label: "신규 회원", value: "+150%" },
      { label: "CPA", value: "12,000원" },
    ],
    image: "/portfolio/ads-1.jpg",
  },
  {
    id: 8,
    category: "ads",
    title: "카페 H사",
    description: "인스타그램 브랜딩 광고",
    result: "매장 방문 고객 80% 증가",
    metrics: [
      { label: "방문객", value: "+80%" },
      { label: "팔로워", value: "+3,200" },
    ],
    image: "/portfolio/ads-2.jpg",
  },
  {
    id: 9,
    category: "seo",
    title: "병원 I사",
    description: "네이버 검색 상위 노출 프로젝트",
    result: "주요 키워드 10개 1페이지 노출",
    metrics: [
      { label: "1페이지 키워드", value: "10개" },
      { label: "자연 유입", value: "+320%" },
    ],
    image: "/portfolio/seo-1.jpg",
  },
  {
    id: 10,
    category: "seo",
    title: "학원 J사",
    description: "블로그 SEO 최적화",
    result: "\"강남 수학학원\" 검색 1위",
    metrics: [
      { label: "검색 순위", value: "1위" },
      { label: "문의 증가", value: "+250%" },
    ],
    image: "/portfolio/seo-2.jpg",
  },
  {
    id: 11,
    category: "conversion",
    title: "부동산 K사",
    description: "네이버 플레이스 문의율 최적화",
    result: "문의 전환율 2.1% → 5.8%",
    metrics: [
      { label: "전환율", value: "+176%" },
      { label: "월 문의", value: "89건" },
    ],
    image: "/portfolio/conversion-1.jpg",
  },
  {
    id: 12,
    category: "conversion",
    title: "뷰티샵 L사",
    description: "예약 시스템 연동 및 최적화",
    result: "온라인 예약 비율 70% 달성",
    metrics: [
      { label: "온라인 예약", value: "70%" },
      { label: "노쇼 감소", value: "-45%" },
    ],
    image: "/portfolio/conversion-2.jpg",
  },
];

// 카테고리 목록
const categories: { value: Category; label: string }[] = [
  { value: "all", label: "전체" },
  { value: "interior", label: "인테리어" },
  { value: "consulting", label: "컨설팅" },
  { value: "enterprise", label: "기업/B2B" },
  { value: "ads", label: "광고 성과" },
  { value: "seo", label: "네이버 상위노출" },
  { value: "conversion", label: "문의율 상승" },
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [filteredItems, setFilteredItems] =
    useState<PortfolioItem[]>(portfolioData);

  useEffect(() => {
    // 카테고리 필터링
    if (selectedCategory === "all") {
      setFilteredItems(portfolioData);
    } else {
      setFilteredItems(
        portfolioData.filter((item) => item.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

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

    return () => observer.disconnect();
  }, [filteredItems]);

  return (
    <div className="portfolio-page">
      {/* 헤더 섹션 */}
      <section className="header-section">
        <div className="container">
          <h1 className="page-title fade-up">성공사례</h1>
          <p className="page-desc fade-up">
            그로우마케팅과 함께한 클라이언트의 실제 성과입니다.
            <br />
            데이터로 증명하는 마케팅 성공 스토리를 확인하세요.
          </p>
        </div>
      </section>

      {/* 필터 섹션 */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-buttons fade-up">
            {categories.map((cat) => (
              <button
                key={cat.value}
                className={`filter-btn ${selectedCategory === cat.value ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat.value)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 포트폴리오 그리드 */}
      <section className="portfolio-section">
        <div className="container">
          <div className="portfolio-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="portfolio-card fade-up">
                <div className="card-image">
                  {/* 이미지 플레이스홀더 */}
                  <div className="image-placeholder">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21,15 16,10 5,21" />
                    </svg>
                    <span>이미지 추가</span>
                  </div>
                </div>
                <div className="card-content">
                  <span className="card-category">
                    {
                      categories.find((c) => c.value === item.category)
                        ?.label
                    }
                  </span>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-description">{item.description}</p>
                  <div className="card-result">{item.result}</div>
                  <div className="card-metrics">
                    {item.metrics.map((metric, idx) => (
                      <div key={idx} className="metric">
                        <span className="metric-value">{metric.value}</span>
                        <span className="metric-label">{metric.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="no-results">
              <p>해당 카테고리에 등록된 사례가 없습니다.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content fade-up">
            <h2 className="cta-title">
              다음 성공 사례의 주인공이 되어보세요
            </h2>
            <p className="cta-desc">
              지금 문의하시면 귀사의 성장 가능성을 함께 확인해드립니다.
            </p>
            <Link href="/contact" className="cta-button">
              문의하기
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .portfolio-page {
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

        /* 필터 섹션 */
        .filter-section {
          padding: 0 0 60px;
        }

        .filter-buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
        }

        .filter-btn {
          padding: 10px 24px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 50px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .filter-btn.active {
          background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
          border-color: transparent;
          color: #ffffff;
        }

        /* 포트폴리오 그리드 */
        .portfolio-section {
          padding: 0 0 80px;
        }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .portfolio-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .portfolio-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(99, 102, 241, 0.3);
          transform: translateY(-8px);
        }

        .card-image {
          aspect-ratio: 16 / 10;
          background: rgba(0, 0, 0, 0.3);
        }

        .image-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: rgba(255, 255, 255, 0.3);
        }

        .image-placeholder svg {
          width: 48px;
          height: 48px;
        }

        .image-placeholder span {
          font-size: 0.85rem;
        }

        .card-content {
          padding: 28px;
        }

        .card-category {
          display: inline-block;
          padding: 4px 12px;
          background: rgba(99, 102, 241, 0.2);
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 600;
          color: #6366f1;
          margin-bottom: 16px;
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 8px;
        }

        .card-description {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 16px;
        }

        .card-result {
          font-size: 1rem;
          font-weight: 600;
          color: #22c55e;
          padding: 12px 16px;
          background: rgba(34, 197, 94, 0.1);
          border-radius: 8px;
          margin-bottom: 20px;
        }

        .card-metrics {
          display: flex;
          gap: 16px;
        }

        .metric {
          flex: 1;
          text-align: center;
          padding: 12px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 8px;
        }

        .metric-value {
          display: block;
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 4px;
        }

        .metric-label {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .no-results {
          text-align: center;
          padding: 80px 0;
          color: rgba(255, 255, 255, 0.5);
        }

        /* CTA 섹션 */
        .cta-section {
          padding: 80px 0 120px;
        }

        .cta-content {
          background: linear-gradient(
            135deg,
            rgba(99, 102, 241, 0.2) 0%,
            rgba(168, 85, 247, 0.2) 100%
          );
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 24px;
          padding: 60px 40px;
          text-align: center;
        }

        .cta-title {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 800;
          margin-bottom: 16px;
          color: #ffffff;
        }

        .cta-desc {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 32px;
        }

        .cta-button {
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

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 40px rgba(99, 102, 241, 0.4);
        }

        /* 반응형 */
        @media (max-width: 1024px) {
          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .header-section {
            padding: 100px 0 40px;
          }

          .portfolio-grid {
            grid-template-columns: 1fr;
          }

          .filter-buttons {
            gap: 8px;
          }

          .filter-btn {
            padding: 8px 16px;
            font-size: 0.85rem;
          }

          .cta-content {
            padding: 40px 24px;
          }
        }
      `}</style>
    </div>
  );
}
