import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "그로우마케팅",
  description: "당신의 도전과 성장을 완성하는 든든한 파트너",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
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