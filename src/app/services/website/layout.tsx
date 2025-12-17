import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "홈페이지 제작",
  description:
    "단순히 예쁜 사이트가 아니라 고객 신청이 늘어나는 홈페이지를 제작합니다. 반응형 웹사이트 디자인 및 개발, SEO 최적화까지 제공합니다.",
  alternates: { canonical: "https://growmarketing.co.kr/services/website" },
  openGraph: {
    title: "홈페이지 제작 | 그로우 마케팅",
    description: "고객 신청이 늘어나는 홈페이지 제작",
    url: "https://growmarketing.co.kr/services/website",
  },
};

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
