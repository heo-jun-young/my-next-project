import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "성공사례",
  description:
    "그로우 마케팅과 함께한 클라이언트의 실제 성과입니다. 인테리어, 컨설팅, 기업, 광고성과, 네이버 상위노출, 문의율 상승 등 다양한 성공 사례를 확인하세요.",
  alternates: { canonical: "https://growmarketing.co.kr/portfolio" },
  openGraph: {
    title: "성공사례 | 그로우 마케팅",
    description: "데이터로 증명하는 마케팅 성공 스토리",
    url: "https://growmarketing.co.kr/portfolio",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
