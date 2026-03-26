import type { Metadata } from "next";
import Script from "next/script";
import Header from "./components/Header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://growmarketing.co.kr"),
  title: "그로우마케팅 | 광고부터 CRM까지, 매출 구조를 설계합니다",
  description:
    "광고 집행, 소재 제작, 랜딩페이지, 홈페이지 구축, CRM 자동화까지. 노출-유입-전환-재구매 풀퍼널 마케팅.",
  keywords: ["마케팅 대행사", "메타광고", "구글광고", "랜딩페이지", "CRM", "홈페이지 제작", "그로우마케팅"],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  alternates: {
    canonical: "https://growmarketing.co.kr",
  },
  openGraph: {
    type: "website",
    url: "https://growmarketing.co.kr",
    siteName: "그로우마케팅",
    locale: "ko_KR",
    title: "그로우마케팅 | 광고부터 CRM까지, 매출 구조를 설계합니다",
    description:
      "광고 집행, 소재 제작, 랜딩페이지, 홈페이지 구축, CRM 자동화까지. 노출-유입-전환-재구매 풀퍼널 마케팅.",
    images: [
      {
        url: "https://cdn.imweb.me/thumbnail/20251217/836b4ef0e58ac.png",
        width: 1200,
        height: 630,
        alt: "그로우마케팅 — 매출 구조를 설계합니다",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "그로우마케팅 | 광고부터 CRM까지, 매출 구조를 설계합니다",
    description: "노출-유입-전환-재구매 풀퍼널 마케팅 대행사",
    images: ["https://cdn.imweb.me/thumbnail/20251217/836b4ef0e58ac.png"],
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "그로우마케팅",
  url: "https://growmarketing.co.kr",
  description: "광고 집행, 소재 제작, 랜딩페이지, 홈페이지 구축, CRM 자동화까지 풀퍼널 마케팅 대행사",
  logo: "https://cdn.imweb.me/thumbnail/20251217/836b4ef0e58ac.png",
  address: {
    "@type": "PostalAddress",
    addressCountry: "KR",
  },
  founder: {
    "@type": "Person",
    name: "허준영",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body>
<Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
