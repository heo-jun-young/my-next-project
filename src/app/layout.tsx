import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://growmarketing.co.kr"),
  title: {
    default: "그로우 마케팅 | 종합 광고대행 (마케팅·SNS광고·홈페이지·CRM)",
    template: "%s | 그로우 마케팅",
  },
  description:
    "그로우 마케팅은 마케팅, SNS광고, 홈페이지, CRM까지 한 번에 설계·실행하는 성과 중심 종합 광고대행사입니다.",
  alternates: {
    canonical: "https://growmarketing.co.kr",
  },
  openGraph: {
    type: "website",
    url: "https://growmarketing.co.kr",
    siteName: "그로우 마케팅",
    locale: "ko_KR",
    title: "그로우 마케팅",
    description:
      "마케팅, SNS광고, 홈페이지, CRM까지 올인원으로 성과를 만드는 종합 광고대행사",
    images: [
      {
        url: "https://cdn.imweb.me/thumbnail/20251217/836b4ef0e58ac.png",
        width: 800,
        height: 800,
        alt: "그로우 마케팅 로고",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "그로우 마케팅",
    description: "마케팅·SNS광고·홈페이지·CRM 올인원",
    images: ["https://cdn.imweb.me/thumbnail/20251217/836b4ef0e58ac.png"],
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "그로우 마케팅",
  url: "https://growmarketing.co.kr",
  logo: "https://cdn.imweb.me/thumbnail/20251217/836b4ef0e58ac.png",
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {/* ============================== */}
        {/* 🧭 상단 헤더 영역 */}
        {/* ============================== */}
        <header className="main-header">
          <nav className="nav">
            <Link href="/">홈</Link>

            {/* 제공 서비스 드롭다운 */}
            <div className="dropdown">
              <button className="dropbtn">제공 서비스 ▾</button>
              <div className="dropdown-content">
                <Link href="/services/sns">SNS 광고</Link>
                <Link href="/services/marketing">마케팅 대행</Link>
                <Link href="/services/website">홈페이지 제작</Link>
                <Link href="/services/crm">CRM 세팅</Link>
              </div>
            </div>
          </nav>
        </header>

        {/* ============================== */}
        {/* 본문 콘텐츠 영역 */}
        {/* ============================== */}
        <main style={{ marginTop: "90px" }}>{children}</main>
      </body>
    </html>
  );
}