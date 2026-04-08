"use client";

import { useEffect, useRef, useState } from "react";
import { submitToGoogleSheet } from "@/lib/submitForm";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "aos/dist/aos.css";

/* ================================================================
   Data constants
================================================================ */
const PAIN_POINTS = [
  { no: "01", text: "블로그·플레이스 올려도 전화 한 통 없다" },
  { no: "02", text: "광고비는 매달 나가는데 매출은 제자리" },
  { no: "03", text: "홈페이지 만들었는데 문의가 0건" },
  { no: "04", text: "대행사 3번 바꿨는데 결과는 똑같다" },
  { no: "05", text: "뭘 먼저 해야 할지 모르겠다" },
];

const SERVICES = [
  {
    icon: "📊",
    title: "Meta(인스타) · 네이버 광고 집행",
    desc: "타겟 설정부터 소재 테스트, 예산 최적화까지. 광고비 대비 최대 전환을 만듭니다.",
    tag: "AD OPERATION",
  },
  {
    icon: "🎨",
    title: "광고 소재 기획·제작",
    desc: "클릭을 부르는 카피와 크리에이티브. 업종별 전환율 높은 소재를 직접 만듭니다.",
    tag: "CREATIVE",
  },
  {
    icon: "🖥️",
    title: "전환 중심 랜딩페이지",
    desc: "예쁘기만 한 페이지 NO. 방문자를 고객으로 바꾸는 구조 설계 랜딩페이지.",
    tag: "LANDING PAGE",
  },
  {
    icon: "🌐",
    title: "홈페이지·웹사이트 구축",
    desc: "브랜드 신뢰도를 높이는 고퀄리티 웹사이트. 반응형·SEO 기본 적용.",
    tag: "WEB BUILD",
  },
  {
    icon: "⚙️",
    title: "CRM 세팅 · DB 자동화",
    desc: "문의 DB 자동 수집, 고객 분류, 리마인드 발송까지. 놓치는 고객 0명.",
    tag: "CRM",
  },
  {
    icon: "✍️",
    title: "네이버 블로그·플레이스 관리",
    desc: "검색 상위 노출 + 방문 유도. 꾸준한 콘텐츠로 자연 유입을 만듭니다.",
    tag: "CONTENT",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "현재 마케팅 구조 진단",
    desc: "지금 뭐가 되고, 뭐가 안 되는지 정확히 파악합니다. 광고 계정, 웹사이트, 검색 노출, 전환 경로를 전수 분석합니다.",
  },
  {
    num: "02",
    title: "매출 구조 설계",
    desc: "진단 결과를 기반으로 노출-유입-전환-재구매 전체 퍼널을 설계합니다. 어디서 새는지, 어디를 막아야 하는지 구조도를 그립니다.",
  },
  {
    num: "03",
    title: "광고·콘텐츠·웹 통합 실행",
    desc: "광고 소재 제작, 랜딩페이지 구축, 블로그·플레이스 세팅, CRM 연동까지 한 번에 실행합니다.",
  },
  {
    num: "04",
    title: "데이터 기반 지속 최적화",
    desc: "주간/월간 데이터를 분석하고, 전환율이 높은 방향으로 계속 개선합니다. 광고비는 줄이고 매출은 올리는 구조.",
  },
];

const INDUSTRIES = [
  "피트니스", "필라테스", "병원·의원", "뷰티·에스테틱",
  "카페·음식점", "학원·교육", "인테리어", "쇼핑몰",
  "부동산", "법률사무소", "스타트업", "프랜차이즈",
];

const STATS = [
  { count: "200", suffix: "+", label: "마케팅 프로젝트 수행", prefix: "" },
  { count: "150", suffix: "%", label: "평균 문의량 증가율", prefix: "" },
  { count: "3.2", suffix: "배", label: "광고 ROAS 평균", prefix: "", isFloat: true },
  { count: "97", suffix: "%", label: "고객 재계약율", prefix: "" },
];

const COMPARISON = [
  ["블로그만 or 광고만", "노출~재구매 풀퍼널 통합"],
  ["실행만 하고 끝", "진단 → 설계 → 실행 → 최적화"],
  ["리포트만 보내줌", "매출 구조 자체를 만들어줌"],
  ["여러 업체에 분산 의뢰", "한 팀이 전부 일관되게"],
  ["전환 추적 안 됨", "CRM·DB 자동화까지 세팅"],
  ["템플릿 홈페이지", "전환 설계된 맞춤 랜딩"],
];

const TESTIMONIALS = [
  {
    name: "김O원 원장",
    industry: "피트니스 센터",
    text: "인스타 광고 소재부터 랜딩페이지까지 한 팀에서 다 해주니까 방향성이 흔들리질 않더라고요. 3개월 지나니까 신규 등록이 눈에 띄게 늘었어요. 예전엔 광고비만 나가고 효과가 없다고 느꼈는데, 구조 자체가 바뀌니까 다르더라고요.",
  },
  {
    name: "박O진 원장",
    industry: "학원",
    text: "상담 문의가 진짜 들어오긴 하는 건지 의심했었는데 DB 자동화 세팅하고 나서 실시간으로 문자 알림이 오더라고요. 놓치는 게 확실히 줄었고, 원장 입장에서는 수업에 집중할 수 있어서 좋았습니다.",
  },
  {
    name: "이O준 대표",
    industry: "창업컨설팅",
    text: "솔직히 처음엔 반신반의했어요. 광고부터 홈페이지, CRM까지 한 곳에서 다 된다는 말이 그냥 영업 멘트처럼 들렸거든요. 근데 실제로 해보니 각 담당자한테 따로 연락 안 해도 되니까 소통 스트레스가 없었어요. 상담 인입도 이전보다 확실히 늘었고요.",
  },
  {
    name: "정O훈 대표",
    industry: "인테리어 시공",
    text: "광고 소재 기획부터 랜딩페이지 제작까지 다 맡겼는데 처음 미팅에서 저희 업종 특성을 꽤 잘 파악하더라고요. 블로그나 플레이스는 굳이 안 해도 된다고 직접 말해줬는데, 그게 오히려 신뢰가 생겼어요. 문의 퀄리티도 좋아졌습니다.",
  },
  {
    name: "최O아 대표",
    industry: "인테리어 디자인",
    text: "포트폴리오 위주라서 홈페이지가 중요했는데 전환까지 고려한 구조로 만들어줬어요. 예쁜 게 전부가 아니라는 걸 직접 설명해주더라고요. 홈페이지 오픈 후 한 달 만에 상담 문의 몇 건 들어왔고, 지금도 꾸준히 오고 있습니다.",
  },
  {
    name: "한O석 원장",
    industry: "의원",
    text: "의료 광고 규제 때문에 조심스러웠는데 처음부터 그 부분을 인지하고 접근해줘서 안심했어요. 네이버 플레이스 관리랑 인스타 광고 병행했는데 신환 수가 체감상 늘었습니다. 뭔가를 직접 챙기지 않아도 알아서 보고해주는 게 편했어요.",
  },
  {
    name: "윤O철 대표",
    industry: "가구 제작",
    text: "제작 가구 특성상 문의 하나하나가 다 중요한데 이전엔 홈페이지 들어와도 그냥 나가는 사람이 많았어요. 랜딩페이지 구조 바꾸고 나서 체류 시간도 늘고 문의 전환이 확실히 달라졌습니다. 광고비 대비 효율이 이전이랑 완전히 다른 수준이에요.",
  },
];

/* ================================================================
   Main Component
================================================================ */
export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [formLoading, setFormLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", phone2: "", industry: "", industryOther: "", bizUrl: "", services: [] as string[], message: "", agree: false,
  });

  const toggleService = (svc: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(svc)
        ? prev.services.filter((s) => s !== svc)
        : [...prev.services, svc],
    }));
  };

  const heroRef = useRef<HTMLElement>(null);

  /* ---- GSAP + AOS + Lenis + Scroll ---- */
  useEffect(() => {
    /* Scroll progress & back-to-top */
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docH > 0 ? (scrollTop / docH) * 100 : 0);
      setShowTop(scrollTop > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    /* Counter animation */
    const counters = document.querySelectorAll<HTMLElement>("[data-count]");
    const counterObs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        const target = parseFloat(el.dataset.count ?? "0");
        const suffix = el.dataset.suffix ?? "";
        const isFloat = el.dataset.float === "true";
        let current = 0;
        const step = target / 60;
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = (isFloat ? current.toFixed(1) : Math.floor(current).toLocaleString()) + suffix;
          if (current >= target) clearInterval(timer);
        }, 25);
        counterObs.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach((c) => counterObs.observe(c));

    /* GSAP hero animation */
    const initGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      /* Hero text entrance */
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-label",   { opacity: 0, y: 30, duration: 0.7, delay: 0.2 })
        .from(".hero-h1 .line1", { opacity: 0, y: 60, duration: 1 }, "-=0.3")
        .from(".hero-h1 .line2", { opacity: 0, y: 60, duration: 1 }, "-=0.7")
        .from(".hero-sub",    { opacity: 0, y: 30, duration: 0.8 }, "-=0.5")
        .from(".hero-btns",   { opacity: 0, y: 30, duration: 0.8 }, "-=0.5")
        .from(".hero-scroll-hint", { opacity: 0, duration: 0.6 }, "-=0.2");

      /* Hero parallax (배경은 CSS animation 좌우 이동 중이므로 Y축만 살짝) */
      gsap.to(".hero-overlay", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      /* Section big text zoom-in */
      gsap.from(".solution-big-text", {
        scale: 0.85,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".solution-big-text",
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
      });

      /* Process steps stagger */
      gsap.from(".process-item", {
        opacity: 0,
        x: (i) => (i % 2 === 0 ? -60 : 60),
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".process-list",
          start: "top 75%",
        },
      });
    };
    initGSAP();

    /* AOS */
    const initAOS = async () => {
      const AOS = (await import("aos")).default;
      AOS.init({ duration: 750, once: true, offset: 80, easing: "ease-out-cubic" });
    };
    initAOS();

    /* Lenis smooth scroll */
    const initLenis = async () => {
      const Lenis = (await import("lenis")).default;
      const lenis = new Lenis({ duration: 1.3 });
      const raf = (time: number) => { lenis.raf(time); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    };
    initLenis();

    return () => {
      window.removeEventListener("scroll", onScroll);
      counterObs.disconnect();
    };
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    if (!form.agree) { setFormError("개인정보 수집·이용에 동의해 주세요."); return; }

    setFormLoading(true);
    const result = await submitToGoogleSheet({
      name: form.name,
      phone: form.phone,
      phoneConfirm: form.phone2,
      industry: form.industry === "기타" && form.industryOther
        ? `기타 (${form.industryOther})`
        : form.industry,
      website: form.bizUrl,
      services: form.services,
      concern: form.message,
      privacy: form.agree,
    });
    setFormLoading(false);

    if (result.success) {
      setFormSubmitted(true);
    } else {
      setFormError(result.error || "제출 중 오류가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  /* ================================================================
     RENDER
  ================================================================ */
  return (
    <div className="page-wrap">
      {/* ── Scroll progress bar ── */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />

      {/* ══════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════ */}
      <section className="hero-section" ref={heroRef}>
        {/* 배경 레이어 (패럴랙스 타겟) */}
        <div className="hero-bg-layer" />
        {/* 오버레이 */}
        <div className="hero-overlay" />

        <div className="hero-content">
          <span className="hero-label">GROW MARKETING</span>
          <h1 className="hero-h1">
            <span className="line1">이야기의 주인공은</span>
            <span className="line2">당신입니다.</span>
          </h1>
          <p className="hero-sub">
            노출 → 유입 → 전환 → 재구매<br />
            이 구조가 없으면, 광고비는 그냥 사라집니다.<br />
            그로우마케팅이 처음부터 끝까지 설계합니다.
          </p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => scrollTo("contact")}>
              문의하기
            </button>
            <button className="btn-outline" onClick={() => scrollTo("results")}>
              성공 사례 보기
            </button>
          </div>
        </div>

        <div className="hero-scroll-hint" onClick={() => scrollTo("pain")}>
          <div className="scroll-mouse">
            <div className="scroll-wheel" />
          </div>
          <span>Scroll</span>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 2 — PAIN POINT
      ══════════════════════════════════════════════════ */}
      <section id="pain" className="pain-section">
        <div className="container">
          <span className="section-label" data-aos="fade-up">WHY NOT WORKING?</span>
          <h2 className="section-title" data-aos="fade-up" data-aos-delay="80">
            이런 고민, 계속 반복되고 있지 않나요?
          </h2>

          <div className="pain-list">
            {PAIN_POINTS.map((p, i) => (
              <div
                key={p.no}
                className="pain-item"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <span className="pain-no">{p.no}</span>
                <p className="pain-text">"{p.text}"</p>
                <span className="pain-check">✗</span>
              </div>
            ))}
          </div>

          <div className="pain-conclusion" data-aos="fade-up">
            <p>
              문제는 <em>'마케팅'</em>이 아닙니다.<br />
              매출이 만들어지는 <em>'구조'</em>가 없는 겁니다.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 3 — SOLUTION DECLARATION
      ══════════════════════════════════════════════════ */}
      <section className="solution-section">
        <div className="solution-glow" />
        <div className="container">
          <p className="solution-big-text">
            노출부터 재구매까지<br />
            한 팀이 전부 설계합니다.
          </p>
          <p className="solution-sub" data-aos="fade-up">
            그로우마케팅은 단순 대행사가 아닙니다.<br />
            고객이 브랜드를 <strong>'발견'</strong>하고, <strong>'관심'</strong>을 갖고,{" "}
            <strong>'구매'</strong>하고, <strong>'다시 찾아오는'</strong><br />
            전체 여정을 하나의 시스템으로 구축합니다.
          </p>

          {/* 퍼널 다이어그램 */}
          <div className="funnel-flow" data-aos="fade-up" data-aos-delay="100">
            {[
              { en: "Exposure", kr: "노출", desc: "검색·SNS·광고에서 브랜드를 발견" },
              { en: "Traffic", kr: "유입", desc: "관심을 갖고 랜딩페이지에 방문" },
              { en: "Conversion", kr: "전환", desc: "문의·예약·구매 행동 발생" },
            ].map((step, i) => (
              <div key={step.en} className="funnel-item">
                <div className="funnel-box">
                  <span className="funnel-en">{step.en}</span>
                  <span className="funnel-kr">{step.kr}</span>
                </div>
                <p className="funnel-desc">{step.desc}</p>
                {i < 2 && <div className="funnel-arrow">→</div>}
              </div>
            ))}
          </div>

          {/* 실제 전환 결과 포트폴리오 */}
          <div id="results" className="funnel-proof" data-aos="fade-up" data-aos-delay="200">
            <p className="funnel-proof-label">REAL RESULTS</p>
            <p className="funnel-proof-title">
              실제로 이런 문의가 들어옵니다
            </p>
            <p className="funnel-proof-sub">
              광고 → 랜딩페이지 → 문의 전환, 실제 클라이언트 결과물입니다.
            </p>
            <div className="funnel-proof-grid">
              {[
                { src: "https://cdn.imweb.me/thumbnail/20260323/8eefc3b344d8f.png", label: "가구 제작업체 문의" },
                { src: "https://cdn.imweb.me/thumbnail/20260323/fac2fe615a083.png", label: "가맹창업 문의" },
                { src: "https://cdn.imweb.me/thumbnail/20260323/4d9d72604b613.png", label: "인테리어 시공 문의" },
                { src: "https://cdn.imweb.me/thumbnail/20260323/830d9f2ef949f.png", label: "인테리어 상담 문의" },
              ].map((item, i) => (
                <div key={i} className="proof-card" data-aos="zoom-in" data-aos-delay={i * 80}>
                  <div className="proof-img-wrap">
                    <img src={item.src} alt={item.label} className="proof-img" />
                    <div className="proof-overlay">
                      <span className="proof-check">✓ 전환 완료</span>
                    </div>
                  </div>
                  <p className="proof-label">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 4 — SERVICES
      ══════════════════════════════════════════════════ */}
      <section id="services" className="services-section">
        <div className="container">
          <span className="section-label" data-aos="fade-up">FULL-STACK SERVICE</span>
          <h2 className="section-title" data-aos="fade-up" data-aos-delay="80">
            광고부터 시스템까지, 전부 한 팀이 합니다.
          </h2>
          <p className="section-desc" data-aos="fade-up" data-aos-delay="140">
            6가지 핵심 서비스를 하나의 팀에서 통합 운영합니다.
          </p>

          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                className="service-card"
                data-aos="fade-up"
                data-aos-delay={i * 70}
              >
                <div className="sc-tag">{s.tag}</div>
                <div className="sc-icon">{s.icon}</div>
                <h3 className="sc-title">{s.title}</h3>
                <p className="sc-desc">{s.desc}</p>
                <div className="sc-glow" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 5 — PROCESS
      ══════════════════════════════════════════════════ */}
      <section id="process" className="process-section">
        <div className="container">
          <span className="section-label" data-aos="fade-up">PROCESS</span>
          <h2 className="section-title" data-aos="fade-up" data-aos-delay="80">
            체계적인 4단계 프로세스
          </h2>
          <p className="section-desc" data-aos="fade-up" data-aos-delay="140">
            감이 아닌 데이터로, 구조로, 시스템으로 매출을 만듭니다.
          </p>

          <div className="process-list">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.num} className={`process-item ${i % 2 === 1 ? "reverse" : ""}`}>
                <div className="pi-number-wrap">
                  <div className="pi-circle">
                    <span className="pi-num">STEP {step.num}</span>
                  </div>
                  {i < 3 && <div className="pi-line" />}
                </div>
                <div className="pi-content">
                  <h3 className="pi-title">{step.title}</h3>
                  <p className="pi-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 6 — INDUSTRIES (MARQUEE)
      ══════════════════════════════════════════════════ */}
      <section className="industry-section">
        <div className="container">
          <span className="section-label" data-aos="fade-up">ALL INDUSTRIES</span>
          <h2 className="section-title" data-aos="fade-up" data-aos-delay="80">
            업종은 달라도, 매출의 구조는 같습니다.
          </h2>
          <p className="section-desc" data-aos="fade-up" data-aos-delay="140">
            어떤 업종이든 본질은 하나입니다 — 고객이 발견하고, 관심 갖고, 구매하는 흐름.
          </p>
        </div>

        {/* 마키 */}
        <div className="marquee-wrap" data-aos="fade-up" data-aos-delay="200">
          <div className="marquee-track">
            {[...INDUSTRIES, ...INDUSTRIES].map((ind, i) => (
              <span key={i} className="marquee-tag">{ind}</span>
            ))}
          </div>
          <div className="marquee-track marquee-track-reverse">
            {[...INDUSTRIES, ...INDUSTRIES].map((ind, i) => (
              <span key={`r2-${i}`} className="marquee-tag">{ind}</span>
            ))}
          </div>
        </div>

        <div className="container">
          <div className="industry-conclusion" data-aos="fade-up">
            결국 모든 사업의 성장 공식은 같습니다.<br />
            <strong>노출 → 유입 → 전환 → 재구매</strong><br />
            그로우마케팅이 이 구조를 만들어 드립니다.
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 7 — RESULTS & TRUST
      ══════════════════════════════════════════════════ */}
      <section id="results" className="results-section">
        <div className="results-bg-glow" />
        <div className="container">
          <span className="section-label light" data-aos="fade-up">PROVEN RESULTS</span>
          <h2 className="section-title light" data-aos="fade-up" data-aos-delay="80">
            숫자가 증명합니다.
          </h2>

          <div className="stats-grid">
            {STATS.map((s, i) => (
              <div key={s.label} className="stat-card" data-aos="zoom-in" data-aos-delay={i * 80}>
                <div className="stat-number">
                  <span
                    className="stat-count"
                    data-count={s.count}
                    data-suffix={s.suffix}
                    data-float={s.isFloat ? "true" : undefined}
                  >
                    0{s.suffix}
                  </span>
                </div>
                <p className="stat-label">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Swiper 후기 */}
          <div className="testimonials-wrap" data-aos="fade-up" data-aos-delay="200">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
              className="testi-swiper"
            >
              {TESTIMONIALS.map((t, i) => (
                <SwiperSlide key={i}>
                  <div className="testi-card">
                    <div className="testi-stars">★★★★★</div>
                    <p className="testi-text">"{t.text}"</p>
                    <div className="testi-author">
                      <div className="testi-avatar">{t.name[0]}</div>
                      <div>
                        <strong>{t.name}</strong>
                        <span>{t.industry}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 8 — COMPARISON
      ══════════════════════════════════════════════════ */}
      <section className="compare-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">기존 대행사 vs 그로우마케팅</h2>

          <div className="compare-table" data-aos="fade-up" data-aos-delay="100">
            <div className="compare-header">
              <div className="compare-col bad">기존 대행사</div>
              <div className="compare-divider" />
              <div className="compare-col good">그로우마케팅</div>
            </div>
            {COMPARISON.map(([left, right], i) => (
              <div key={i} className="compare-row" data-aos="fade-up" data-aos-delay={i * 60}>
                <div className="compare-cell bad-cell">
                  <span className="bad-icon">✗</span> {left}
                </div>
                <div className="compare-mid-dot" />
                <div className="compare-cell good-cell">
                  <span className="good-icon">✓</span> {right}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 9 — CTA BANNER
      ══════════════════════════════════════════════════ */}
      <section className="cta-banner-section">
        <div className="cta-banner-bg" />
        <div className="container cta-banner-inner">
          <h2 className="cta-banner-title" data-aos="fade-up">
            지금, 매출이 만들어지는 구조를<br />
            설계받으세요.
          </h2>
          <p className="cta-banner-sub" data-aos="fade-up" data-aos-delay="80">
            지금 바로 문의하시면 24시간 이내 연락드립니다.<br />
            현재 마케팅의 문제점과 개선 방향을 정확하게 알려드립니다.
          </p>
          <button
            className="cta-banner-btn"
            onClick={() => scrollTo("contact")}
            data-aos="fade-up"
            data-aos-delay="160"
          >
            문의하기
          </button>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 10 — CONTACT FORM
      ══════════════════════════════════════════════════ */}
      <section id="contact" className="contact-section">
        <div className="container">
          <span className="section-label" data-aos="fade-up">CONTACT</span>
          <h2 className="section-title" data-aos="fade-up" data-aos-delay="80">
            문의하기
          </h2>
          <p className="section-desc" data-aos="fade-up" data-aos-delay="140">
            아래 정보를 남겨주시면 24시간 이내 연락드립니다.
          </p>

          {formSubmitted ? (
            <div className="form-success" data-aos="zoom-in">
              <div className="success-icon">✓</div>
              <h3>신청이 완료되었습니다.</h3>
              <p>24시간 이내 연락드리겠습니다.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="200">
              <div className="form-row">
                <div className="form-group">
                  <label>이름 *</label>
                  <input
                    type="text"
                    placeholder="홍길동"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>연락처 *</label>
                  <input
                    type="tel"
                    placeholder="010-0000-0000"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>연락처 확인 *</label>
                  <input
                    type="tel"
                    placeholder="010-0000-0000 (한 번 더 입력)"
                    required
                    value={form.phone2}
                    onChange={(e) => setForm({ ...form, phone2: e.target.value })}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>업종 *</label>
                <select
                  required
                  value={form.industry}
                  onChange={(e) => setForm({ ...form, industry: e.target.value })}
                >
                  <option value="">업종을 선택해 주세요</option>
                  <option>피트니스/필라테스</option>
                  <option>병원·의원</option>
                  <option>뷰티</option>
                  <option>카페·음식점</option>
                  <option>학원</option>
                  <option>인테리어</option>
                  <option>쇼핑몰</option>
                  <option>기타</option>
                </select>
              </div>
              {form.industry === "기타" && (
                <div className="form-group" data-aos="fade-down">
                  <label>업종 직접 입력 *</label>
                  <input
                    type="text"
                    placeholder="업종을 직접 입력해 주세요"
                    required
                    value={form.industryOther}
                    onChange={(e) => setForm({ ...form, industryOther: e.target.value })}
                  />
                </div>
              )}
              <div className="form-group">
                <label>홈페이지 주소 또는 네이버지도 업체명</label>
                <input
                  type="text"
                  placeholder="예) https://example.com  또는  홍길동 필라테스 강남점"
                  value={form.bizUrl}
                  onChange={(e) => setForm({ ...form, bizUrl: e.target.value })}
                />
              </div>

              {/* ── 원하는 서비스 체크박스 ── */}
              <div className="form-group">
                <label>원하는 서비스 <span className="label-sub">(복수 선택 가능)</span></label>
                <div className="service-checks">
                  {[
                    { id: "svc1", icon: "📊", label: "Meta(인스타) · 네이버 광고 집행" },
                    { id: "svc2", icon: "🎨", label: "광고 소재 기획·제작" },
                    { id: "svc3", icon: "🖥️", label: "전환 중심 랜딩페이지" },
                    { id: "svc4", icon: "🌐", label: "홈페이지·웹사이트 구축" },
                    { id: "svc5", icon: "⚙️", label: "CRM 세팅 · DB 자동화" },
                    { id: "svc6", icon: "✍️", label: "네이버 블로그·플레이스 관리" },
                  ].map((svc) => {
                    const checked = form.services.includes(svc.label);
                    return (
                      <button
                        key={svc.id}
                        type="button"
                        className={`svc-chip${checked ? " checked" : ""}`}
                        onClick={() => toggleService(svc.label)}
                      >
                        <span className="svc-chip-icon">{svc.icon}</span>
                        {svc.label}
                        {checked && <span className="svc-chip-tick">✓</span>}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="form-group">
                <label>현재 고민</label>
                <textarea
                  rows={5}
                  placeholder="현재 마케팅에서 가장 어려운 점을 알려주세요"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <div className="form-agree">
                <input
                  type="checkbox"
                  id="agree"
                  checked={form.agree}
                  onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                />
                <label htmlFor="agree">
                  개인정보 수집·이용에 동의합니다. (이름, 연락처 — 상담 목적)
                </label>
              </div>
              {formError && (
                <p className="form-error-msg">{formError}</p>
              )}
              <button type="submit" className="form-submit-btn" disabled={formLoading}>
                {formLoading ? "전송 중..." : "문의하기"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════ */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-left">
            <div className="footer-logo">
              <span className="logo-grow">Grow</span>마케팅
            </div>
            <p className="footer-tagline">매출이 만들어지는 구조를 설계합니다.</p>
            <p className="footer-biz">사업자등록번호: 106-18-63007 | 대표: 허준영</p>
          </div>
          <div className="footer-right">
<div className="footer-sns">
              <a href="#" aria-label="인스타그램" className="sns-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              <a href="#" aria-label="블로그" className="sns-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 4h16v16H4z" rx="2" />
                  <path d="M8 9h8M8 12h8M8 15h5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 그로우마케팅. All Rights Reserved.</p>
        </div>
      </footer>

      {/* ── 맨위로 버튼 ── */}
      {showTop && (
        <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          ↑
        </button>
      )}

      {/* ── 모바일 하단 고정 CTA ── */}
      <div className="mobile-sticky-cta">
        <button onClick={() => scrollTo("contact")}>
          문의하기 →
        </button>
      </div>

      {/* ================================================================
          STYLES
      ================================================================ */}
      <style jsx>{`
        /* ---- Page wrap ---- */
        .page-wrap {
          background: #0a0a0a;
          color: #ffffff;
          font-family: 'Pretendard', -apple-system, sans-serif;
          overflow-x: hidden;
        }

        /* ---- Scroll progress ---- */
        .scroll-progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          height: 3px;
          background: linear-gradient(90deg, #FF6B35, #FF8C42, #00C9A7);
          z-index: 9999;
          transition: width 0.1s linear;
          background-size: 200% 100%;
        }

        /* ---- Container ---- */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
        }

        /* ---- Section labels / titles ---- */
        .section-label {
          display: block;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 4px;
          color: #FF6B35;
          margin-bottom: 16px;
          text-align: center;
        }
        .section-label.light {
          color: rgba(255,107,53,0.9);
        }
        .section-title {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 800;
          text-align: center;
          line-height: 1.3;
          margin-bottom: 20px;
          color: #ffffff;
          word-break: keep-all;
        }
        .section-title.light {
          color: #ffffff;
        }
        .section-desc {
          font-size: 1.05rem;
          color: #999;
          text-align: center;
          max-width: 640px;
          margin: 0 auto 64px;
          line-height: 1.8;
        }

        /* ══════════════════════════════
           SECTION 1 — HERO
        ══════════════════════════════ */
        .hero-section {
          position: relative;
          height: 100vh;
          min-height: 700px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .hero-bg-layer {
          position: absolute;
          /* 좌우 움직임을 위해 가로를 넉넉하게 */
          top: -20%;
          bottom: -20%;
          left: -10%;
          right: -10%;
          /* 기본: /images/hero-bg.jpg (public/images/ 폴더에 이미지를 추가해주세요) */
          background-image: url('/images/hero-bg.jpg'),
            url('https://cdn.imweb.me/thumbnail/20250925/e6b9c1091f721.png');
          background-size: 120% auto;
          background-repeat: no-repeat;
          background-position: center center;
          animation: heroPan 20s ease-in-out infinite;
          will-change: background-position;
        }
        @keyframes heroPan {
          0%   { background-position: 50% center; }
          50%  { background-position: 20% center; }
          100% { background-position: 50% center; }
        }
        @media (max-width: 768px) {
          .hero-bg-layer {
            background-size: cover;
            animation: heroPanMobile 20s ease-in-out infinite;
          }
          @keyframes heroPanMobile {
            0%   { background-position: center center; }
            50%  { background-position: 30% center; }
            100% { background-position: center center; }
          }
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.32) 0%,
            rgba(0,0,0,0.25) 55%,
            rgba(10,10,10,0.65) 100%
          );
        }
        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 0 24px;
          max-width: 860px;
        }
        .hero-label {
          display: inline-block;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 5px;
          color: #FF6B35;
          margin-bottom: 24px;
          padding: 6px 16px;
          border: 1px solid rgba(255,107,53,0.4);
          border-radius: 50px;
          background: rgba(255,107,53,0.08);
        }
        .hero-h1 {
          font-size: clamp(2.6rem, 6.5vw, 5rem);
          font-weight: 900;
          line-height: 1.18;
          margin-bottom: 32px;
          word-break: keep-all;
        }
        .hero-h1 .line1,
        .hero-h1 .line2 {
          display: block;
        }
        .hero-h1 .line2 {
          background: linear-gradient(135deg, #FF6B35, #FF8C42);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-sub {
          font-size: clamp(1rem, 2.2vw, 1.2rem);
          color: rgba(255,255,255,0.82);
          line-height: 1.9;
          margin-bottom: 48px;
          word-break: keep-all;
        }
        .hero-btns {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .btn-primary {
          background: linear-gradient(135deg, #FF6B35, #FF8C42);
          color: #ffffff;
          border: none;
          padding: 18px 40px;
          border-radius: 50px;
          font-size: 1.05rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 6px 30px rgba(255,107,53,0.4);
          font-family: inherit;
        }
        .btn-primary:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 40px rgba(255,107,53,0.55);
        }
        .btn-outline {
          background: transparent;
          color: #ffffff;
          border: 2px solid rgba(255,255,255,0.5);
          padding: 18px 40px;
          border-radius: 50px;
          font-size: 1.05rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(8px);
          font-family: inherit;
        }
        .btn-outline:hover {
          border-color: #FF6B35;
          color: #FF6B35;
          transform: translateY(-4px);
        }
        .hero-scroll-hint {
          position: absolute;
          bottom: 36px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          color: rgba(255,255,255,0.6);
          font-size: 0.72rem;
          font-family: 'Montserrat', sans-serif;
          letter-spacing: 2px;
          animation: floatY 2s ease-in-out infinite;
          z-index: 2;
        }
        .scroll-mouse {
          width: 22px;
          height: 36px;
          border: 2px solid rgba(255,255,255,0.5);
          border-radius: 11px;
          position: relative;
        }
        .scroll-wheel {
          width: 3px;
          height: 7px;
          background: rgba(255,255,255,0.7);
          border-radius: 2px;
          position: absolute;
          top: 5px;
          left: 50%;
          transform: translateX(-50%);
          animation: scrollWheel 1.6s ease-in-out infinite;
        }

        /* ══════════════════════════════
           SECTION 2 — PAIN POINT
        ══════════════════════════════ */
        .pain-section {
          padding: 120px 0;
          background: #0a0a0a;
        }
        .pain-list {
          max-width: 820px;
          margin: 56px auto 0;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .pain-item {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 24px 32px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          transition: background 0.3s ease;
          border-radius: 12px;
        }
        .pain-item:hover {
          background: rgba(255,107,53,0.05);
        }
        .pain-no {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          color: #FF6B35;
          letter-spacing: 1px;
          min-width: 28px;
        }
        .pain-text {
          font-size: 1.1rem;
          color: #dddddd;
          font-weight: 500;
          flex: 1;
          word-break: keep-all;
        }
        .pain-check {
          color: rgba(255,80,80,0.7);
          font-size: 1.2rem;
          font-weight: 700;
        }
        .pain-conclusion {
          max-width: 700px;
          margin: 72px auto 0;
          text-align: center;
        }
        .pain-conclusion p {
          font-size: clamp(1.3rem, 3vw, 1.8rem);
          font-weight: 700;
          line-height: 1.7;
          color: #ffffff;
          word-break: keep-all;
        }
        .pain-conclusion em {
          font-style: normal;
          color: #FF6B35;
        }

        /* ══════════════════════════════
           SECTION 3 — SOLUTION
        ══════════════════════════════ */
        .solution-section {
          padding: 130px 0;
          background: linear-gradient(180deg, #111 0%, #0d0d0d 100%);
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        .solution-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(255,107,53,0.12) 0%, transparent 65%);
          pointer-events: none;
        }
        .solution-big-text {
          font-size: clamp(2rem, 5.5vw, 4rem);
          font-weight: 900;
          line-height: 1.25;
          margin-bottom: 36px;
          color: #ffffff;
          word-break: keep-all;
          position: relative;
        }
        .solution-sub {
          font-size: 1.1rem;
          color: #aaa;
          line-height: 2;
          max-width: 680px;
          margin: 0 auto 80px;
          position: relative;
        }
        .solution-sub strong {
          color: #FF6B35;
        }
        .funnel-flow {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 0;
          flex-wrap: wrap;
          position: relative;
        }
        .funnel-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }
        .funnel-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px 28px;
          border: 1px solid rgba(255,107,53,0.35);
          border-radius: 16px;
          background: rgba(255,107,53,0.06);
          min-width: 130px;
          transition: all 0.3s ease;
        }
        .funnel-box:hover {
          border-color: #FF6B35;
          background: rgba(255,107,53,0.12);
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(255,107,53,0.2);
        }
        .funnel-en {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          color: #FF6B35;
          letter-spacing: 2px;
          margin-bottom: 6px;
        }
        .funnel-kr {
          font-size: 1.2rem;
          font-weight: 800;
          color: #ffffff;
        }
        .funnel-desc {
          font-size: 0.82rem;
          color: #888;
          margin-top: 12px;
          max-width: 130px;
          line-height: 1.5;
          word-break: keep-all;
        }
        .funnel-arrow {
          position: absolute;
          right: -20px;
          top: 28px;
          font-size: 1.4rem;
          color: #FF6B35;
          z-index: 2;
        }

        /* 전환 결과 포트폴리오 */
        .funnel-proof {
          margin-top: 80px;
          text-align: center;
        }
        .funnel-proof-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 4px;
          color: #00C9A7;
          margin-bottom: 14px;
        }
        .funnel-proof-title {
          font-size: 1.7rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 10px;
          word-break: keep-all;
        }
        .funnel-proof-sub {
          font-size: 0.9rem;
          color: #888;
          margin-bottom: 40px;
        }
        .funnel-proof-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }
        .proof-card {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .proof-img-wrap {
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          aspect-ratio: 9/16;
          background: #1a1a1a;
        }
        .proof-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          display: block;
          transition: transform 0.5s ease;
        }
        .proof-card:hover .proof-img {
          transform: scale(1.04);
        }
        .proof-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 16px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .proof-card:hover .proof-overlay {
          opacity: 1;
        }
        .proof-check {
          background: #00C9A7;
          color: #000;
          font-size: 0.75rem;
          font-weight: 800;
          padding: 5px 14px;
          border-radius: 20px;
          letter-spacing: 0.5px;
        }
        .proof-label {
          font-size: 0.82rem;
          color: #aaa;
          text-align: center;
          font-weight: 500;
        }

        /* ══════════════════════════════
           SECTION 4 — SERVICES
        ══════════════════════════════ */
        .services-section {
          padding: 120px 0;
          background: #111;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .service-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 24px;
          padding: 40px 36px;
          position: relative;
          overflow: hidden;
          cursor: default;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .service-card:hover {
          background: rgba(255,107,53,0.06);
          border-color: rgba(255,107,53,0.4);
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(255,107,53,0.15);
        }
        .service-card:hover .sc-glow {
          opacity: 1;
        }
        .sc-glow {
          position: absolute;
          inset: 0;
          border-radius: 24px;
          background: radial-gradient(circle at 50% 0%, rgba(255,107,53,0.12) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }
        .sc-tag {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: #FF6B35;
          margin-bottom: 16px;
        }
        .sc-icon {
          font-size: 2.4rem;
          margin-bottom: 20px;
          display: block;
        }
        .sc-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 14px;
          line-height: 1.3;
        }
        .sc-desc {
          font-size: 0.95rem;
          color: #999;
          line-height: 1.7;
          word-break: keep-all;
        }

        /* ══════════════════════════════
           SECTION 5 — PROCESS
        ══════════════════════════════ */
        .process-section {
          padding: 120px 0;
          background: linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%);
        }
        .process-list {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 0;
          position: relative;
        }
        .process-item {
          display: flex;
          gap: 40px;
          align-items: flex-start;
          padding: 32px 0;
        }
        .process-item.reverse {
          flex-direction: row-reverse;
          text-align: right;
        }
        .pi-number-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 80px;
        }
        .pi-circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 2px solid #FF6B35;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,107,53,0.08);
          flex-shrink: 0;
        }
        .pi-num {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.68rem;
          font-weight: 800;
          color: #FF6B35;
          text-align: center;
          letter-spacing: 1px;
          line-height: 1.4;
        }
        .pi-line {
          width: 2px;
          height: 56px;
          background: linear-gradient(to bottom, #FF6B35, transparent);
          margin-top: 8px;
        }
        .pi-content {
          flex: 1;
          padding-top: 16px;
        }
        .pi-title {
          font-size: 1.3rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 12px;
        }
        .pi-desc {
          font-size: 0.97rem;
          color: #999;
          line-height: 1.8;
          word-break: keep-all;
        }

        /* ══════════════════════════════
           SECTION 6 — INDUSTRIES
        ══════════════════════════════ */
        .industry-section {
          padding: 120px 0;
          background: #111;
          overflow: hidden;
        }
        .marquee-wrap {
          overflow: hidden;
          margin: 48px 0 56px;
          position: relative;
        }
        .marquee-wrap::before,
        .marquee-wrap::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80px;
          z-index: 2;
          pointer-events: none;
        }
        .marquee-wrap::before {
          left: 0;
          background: linear-gradient(to right, #111, transparent);
        }
        .marquee-wrap::after {
          right: 0;
          background: linear-gradient(to left, #111, transparent);
        }
        .marquee-track {
          display: flex;
          gap: 16px;
          white-space: nowrap;
          animation: marquee 9s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        .marquee-track-reverse {
          display: none;
          animation: marquee-reverse 9s linear infinite;
        }
        .marquee-tag {
          display: inline-block;
          padding: 12px 24px;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 50px;
          font-size: 0.95rem;
          font-weight: 600;
          color: #ccc;
          background: rgba(255,255,255,0.04);
          transition: all 0.3s ease;
          cursor: default;
          white-space: nowrap;
        }
        .marquee-tag:hover {
          border-color: #FF6B35;
          color: #FF6B35;
          background: rgba(255,107,53,0.08);
        }
        .industry-conclusion {
          text-align: center;
          font-size: clamp(1rem, 2.2vw, 1.2rem);
          color: #aaa;
          line-height: 2;
          word-break: keep-all;
        }
        .industry-conclusion strong {
          color: #FF6B35;
          font-weight: 800;
        }

        /* ══════════════════════════════
           SECTION 7 — RESULTS
        ══════════════════════════════ */
        .results-section {
          padding: 120px 0;
          background: linear-gradient(135deg, #0f0a05 0%, #1a0f06 50%, #0a0a0a 100%);
          position: relative;
          overflow: hidden;
        }
        .results-bg-glow {
          position: absolute;
          top: -20%;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(255,107,53,0.1) 0%, transparent 60%);
          pointer-events: none;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 80px;
          position: relative;
        }
        .stat-card {
          text-align: center;
          padding: 40px 24px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,107,53,0.2);
          border-radius: 20px;
          transition: all 0.3s ease;
        }
        .stat-card:hover {
          border-color: #FF6B35;
          background: rgba(255,107,53,0.07);
          transform: translateY(-6px);
          box-shadow: 0 16px 50px rgba(255,107,53,0.2);
        }
        .stat-number {
          margin-bottom: 12px;
        }
        .stat-count {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 900;
          background: linear-gradient(135deg, #FF6B35, #FF8C42);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
        }
        .stat-label {
          font-size: 0.92rem;
          color: #aaa;
          line-height: 1.5;
          word-break: keep-all;
        }

        /* Testimonials */
        .testimonials-wrap {
          position: relative;
        }
        .testi-swiper {
          padding-bottom: 48px !important;
        }
        .testi-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 32px;
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: border-color 0.3s ease;
        }
        .testi-card:hover {
          border-color: rgba(255,107,53,0.3);
        }
        .testi-stars {
          color: #FF8C42;
          font-size: 1rem;
          letter-spacing: 2px;
        }
        .testi-text {
          font-size: 0.97rem;
          color: #ccc;
          line-height: 1.8;
          flex: 1;
          word-break: keep-all;
        }
        .testi-author {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .testi-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #FF6B35, #FF8C42);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          font-weight: 800;
          color: #fff;
          flex-shrink: 0;
        }
        .testi-author strong {
          display: block;
          font-size: 0.9rem;
          color: #fff;
          font-weight: 700;
        }
        .testi-author span {
          font-size: 0.8rem;
          color: #666;
        }
        .testi-note {
          text-align: center;
          font-size: 0.8rem;
          color: #555;
          margin-top: 8px;
        }

        /* ══════════════════════════════
           SECTION 8 — COMPARISON
        ══════════════════════════════ */
        .compare-section {
          padding: 120px 0;
          background: #0a0a0a;
        }
        .compare-table {
          max-width: 900px;
          margin: 56px auto 0;
        }
        .compare-header {
          display: grid;
          grid-template-columns: 1fr 20px 1fr;
          gap: 0;
          margin-bottom: 8px;
        }
        .compare-col {
          text-align: center;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 3px;
          padding: 16px;
          border-radius: 12px 12px 0 0;
        }
        .compare-col.bad {
          background: rgba(255,255,255,0.04);
          color: #777;
        }
        .compare-col.good {
          background: rgba(255,107,53,0.1);
          color: #FF6B35;
        }
        .compare-divider {
          background: transparent;
        }
        .compare-row {
          display: grid;
          grid-template-columns: 1fr 20px 1fr;
          gap: 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .compare-cell {
          padding: 20px 24px;
          font-size: 0.97rem;
          line-height: 1.5;
          display: flex;
          align-items: center;
          gap: 10px;
          word-break: keep-all;
        }
        .bad-cell {
          background: rgba(255,255,255,0.02);
          color: #777;
          border-right: none;
        }
        .good-cell {
          background: rgba(255,107,53,0.04);
          color: #e0e0e0;
          font-weight: 600;
        }
        .compare-row:last-child .bad-cell {
          border-radius: 0 0 0 12px;
        }
        .compare-row:last-child .good-cell {
          border-radius: 0 0 12px 0;
        }
        .bad-icon {
          color: rgba(255,80,80,0.7);
          font-size: 1rem;
          flex-shrink: 0;
        }
        .good-icon {
          color: #00C9A7;
          font-size: 1rem;
          flex-shrink: 0;
        }
        .compare-mid-dot {
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          position: relative;
        }
        .compare-mid-dot::before {
          content: '';
          width: 1px;
          height: 100%;
          background: rgba(255,255,255,0.08);
          position: absolute;
          left: 50%;
        }

        /* ══════════════════════════════
           SECTION 9 — CTA BANNER
        ══════════════════════════════ */
        .cta-banner-section {
          padding: 120px 0;
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        .cta-banner-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #FF6B35 0%, #FF8C42 50%, #e05520 100%);
        }
        .cta-banner-inner {
          position: relative;
          z-index: 2;
        }
        .cta-banner-title {
          font-size: clamp(1.8rem, 4.5vw, 3rem);
          font-weight: 900;
          color: #ffffff;
          line-height: 1.3;
          margin-bottom: 24px;
          word-break: keep-all;
          text-shadow: 0 2px 20px rgba(0,0,0,0.2);
        }
        .cta-banner-sub {
          font-size: 1.1rem;
          color: rgba(255,255,255,0.88);
          line-height: 1.8;
          margin-bottom: 48px;
          word-break: keep-all;
        }
        .cta-banner-btn {
          display: inline-block;
          background: #ffffff;
          color: #FF6B35;
          border: none;
          padding: 20px 52px;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 40px rgba(0,0,0,0.2);
          font-family: inherit;
          animation: glow-pulse 2.5s ease-in-out infinite;
        }
        .cta-banner-btn:hover {
          transform: translateY(-4px) scale(1.04);
          box-shadow: 0 16px 50px rgba(0,0,0,0.3);
        }

        /* ══════════════════════════════
           SECTION 10 — CONTACT
        ══════════════════════════════ */
        .contact-section {
          padding: 120px 0;
          background: #0a0a0a;
        }
        .contact-form {
          max-width: 680px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 20px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .form-group label {
          font-size: 0.88rem;
          font-weight: 600;
          color: #aaa;
          letter-spacing: 0.5px;
        }
        .form-group input,
        .form-group select,
        .form-group textarea {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 14px 18px;
          color: #ffffff;
          font-size: 0.97rem;
          font-family: inherit;
          outline: none;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          resize: vertical;
        }
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: #FF6B35;
          box-shadow: 0 0 0 3px rgba(255,107,53,0.15);
        }
        .form-group select option {
          background: #1a1a1a;
          color: #ffffff;
        }
        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: rgba(255,255,255,0.3);
        }
        /* 서비스 선택 칩 */
        .label-sub {
          font-size: 0.78rem;
          color: #666;
          font-weight: 400;
          margin-left: 6px;
        }
        .service-checks {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }
        .svc-chip {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          color: #aaa;
          font-size: 0.9rem;
          font-weight: 500;
          font-family: inherit;
          cursor: pointer;
          transition: all 0.22s ease;
          text-align: left;
          position: relative;
        }
        .svc-chip:hover {
          border-color: rgba(255,107,53,0.4);
          color: #e0e0e0;
          background: rgba(255,107,53,0.06);
        }
        .svc-chip.checked {
          border-color: #FF6B35;
          background: rgba(255,107,53,0.12);
          color: #ffffff;
          font-weight: 700;
          box-shadow: 0 0 0 1px rgba(255,107,53,0.3);
        }
        .svc-chip-icon {
          font-size: 1.1rem;
          flex-shrink: 0;
        }
        .svc-chip-tick {
          margin-left: auto;
          color: #FF6B35;
          font-size: 0.85rem;
          font-weight: 900;
          flex-shrink: 0;
        }
        @media (max-width: 480px) {
          .service-checks { grid-template-columns: 1fr; }
        }

        .form-agree {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .form-agree input[type="checkbox"] {
          width: 18px;
          height: 18px;
          flex-shrink: 0;
          margin-top: 2px;
          accent-color: #FF6B35;
          cursor: pointer;
        }
        .form-agree label {
          font-size: 0.88rem;
          color: #777;
          line-height: 1.6;
          cursor: pointer;
        }
        .form-submit-btn {
          background: linear-gradient(135deg, #FF6B35, #FF8C42);
          color: #ffffff;
          border: none;
          padding: 18px;
          border-radius: 12px;
          font-size: 1.05rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: inherit;
          box-shadow: 0 6px 30px rgba(255,107,53,0.35);
        }
        .form-submit-btn:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(255,107,53,0.5);
        }
        .form-submit-btn:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }
        .form-error-msg {
          color: #ff5f5f;
          font-size: 0.88rem;
          text-align: center;
          padding: 10px 16px;
          background: rgba(255,95,95,0.08);
          border: 1px solid rgba(255,95,95,0.2);
          border-radius: 10px;
        }
        .form-success {
          max-width: 480px;
          margin: 0 auto;
          text-align: center;
          padding: 80px 40px;
          background: rgba(0,201,167,0.06);
          border: 1px solid rgba(0,201,167,0.3);
          border-radius: 24px;
        }
        .success-icon {
          font-size: 3rem;
          color: #00C9A7;
          margin-bottom: 24px;
          display: block;
        }
        .form-success h3 {
          font-size: 1.5rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 12px;
        }
        .form-success p {
          font-size: 1rem;
          color: #aaa;
        }

        /* ══════════════════════════════
           FOOTER
        ══════════════════════════════ */
        .footer {
          background: #0a0a0a;
          border-top: 1px solid rgba(255,255,255,0.07);
          padding: 60px 0 0;
        }
        .footer-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          padding-bottom: 48px;
        }
        .footer-logo {
          font-family: 'Montserrat', 'Pretendard', sans-serif;
          font-size: 1.4rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 12px;
        }
        .footer-logo .logo-grow {
          color: #FF6B35;
        }
        .footer-tagline {
          font-size: 0.95rem;
          color: #666;
          margin-bottom: 16px;
        }
        .footer-biz {
          font-size: 0.82rem;
          color: #555;
          line-height: 1.8;
        }
        .footer-right {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: flex-end;
        }
        .footer-contact-item {
          font-size: 0.9rem;
          color: #666;
        }
        .footer-sns {
          display: flex;
          gap: 12px;
          margin-top: 12px;
        }
        .sns-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
          transition: all 0.3s ease;
        }
        .sns-icon:hover {
          border-color: #FF6B35;
          color: #FF6B35;
          background: rgba(255,107,53,0.08);
        }
        .sns-icon svg {
          width: 18px;
          height: 18px;
        }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.05);
          padding: 20px 32px;
          text-align: center;
        }
        .footer-bottom p {
          font-size: 0.82rem;
          color: #444;
        }

        /* ══════════════════════════════
           FLOATING UI
        ══════════════════════════════ */
        .back-to-top {
          position: fixed;
          bottom: 88px;
          right: 28px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #FF6B35, #FF8C42);
          color: #fff;
          border: none;
          font-size: 1.2rem;
          font-weight: 700;
          cursor: pointer;
          z-index: 8000;
          box-shadow: 0 6px 24px rgba(255,107,53,0.4);
          transition: all 0.3s ease;
        }
        .back-to-top:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 36px rgba(255,107,53,0.55);
        }
        .mobile-sticky-cta {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 8500;
          padding: 12px 20px;
          background: rgba(10,10,10,0.95);
          backdrop-filter: blur(16px);
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        .mobile-sticky-cta button {
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, #FF6B35, #FF8C42);
          color: #ffffff;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          font-family: inherit;
        }

        /* ══════════════════════════════
           RESPONSIVE
        ══════════════════════════════ */
        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .container { padding: 0 20px; }

          /* Hero */
          .hero-btns { flex-direction: column; align-items: center; }
          .btn-primary, .btn-outline { width: 100%; max-width: 300px; }

          /* Pain */
          .pain-section { padding: 80px 0; }
          .pain-item { padding: 20px 16px; gap: 14px; }
          .pain-text { font-size: 1rem; }

          /* Solution */
          .solution-section { padding: 90px 0; }
          .funnel-flow { flex-direction: column; align-items: center; gap: 16px; }
          .funnel-arrow { display: none; }
          .funnel-item { width: 100%; max-width: 280px; }
          .funnel-proof-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
          .funnel-proof-title { font-size: 1.3rem; }
          .funnel-box { width: 100%; }

          /* Services */
          .services-grid { grid-template-columns: 1fr; }
          .services-section { padding: 80px 0; }

          /* Process */
          .process-item, .process-item.reverse { flex-direction: column; align-items: flex-start; }
          .pi-number-wrap { flex-direction: row; align-items: center; gap: 16px; min-width: auto; }
          .pi-line { width: 40px; height: 2px; margin: 0; }

          /* Industry */
          .industry-section { padding: 80px 0; }
          .marquee-track-reverse { display: flex; }
          .marquee-wrap { display: flex; flex-direction: column; gap: 12px; }

          /* Results */
          .results-section { padding: 80px 0; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }

          /* Comparison */
          .compare-section { padding: 80px 0; }
          .compare-table { overflow-x: auto; }
          .compare-header, .compare-row { grid-template-columns: 1fr 12px 1fr; }
          .compare-cell { padding: 14px 12px; font-size: 0.88rem; }

          /* Form */
          .form-row { grid-template-columns: 1fr; }

          /* Footer */
          .footer-inner { grid-template-columns: 1fr; }
          .footer-right { align-items: flex-start; }

          /* Sticky CTA */
          .mobile-sticky-cta { display: block; }
          .back-to-top { bottom: 78px; }

          /* Sections */
          .pain-section,
          .solution-section,
          .services-section,
          .process-section,
          .industry-section,
          .results-section,
          .compare-section,
          .cta-banner-section,
          .contact-section {
            padding: 80px 0;
          }
        }

        @media (max-width: 480px) {
          .hero-h1 { font-size: clamp(2rem, 8vw, 2.8rem); }
          .stats-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
          .stat-card { padding: 28px 16px; }
          .compare-cell { font-size: 0.82rem; padding: 12px 8px; }
        }
      `}</style>
    </div>
  );
}
