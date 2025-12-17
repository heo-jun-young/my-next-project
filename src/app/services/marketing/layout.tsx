import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "마케팅 대행",
  description:
    "전환 중심 퍼널 설계부터 성과 개선까지, 마케팅 대행을 제공합니다. SNS 광고부터 블로그, 업종별 맞춤 마케팅 전략을 실행합니다.",
  alternates: { canonical: "https://growmarketing.co.kr/services/marketing" },
  openGraph: {
    title: "마케팅 대행 | 그로우 마케팅",
    description: "SNS 광고부터 블로그, 업종별 맞춤 마케팅까지 체계적인 3단계 커리큘럼",
    url: "https://growmarketing.co.kr/services/marketing",
  },
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
