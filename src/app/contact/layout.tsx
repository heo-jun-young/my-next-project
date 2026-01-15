import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "문의하기",
  description:
    "그로우 마케팅에 무료 마케팅 진단을 신청하세요. 담당자가 1영업일 이내에 연락드립니다.",
  alternates: { canonical: "https://growmarketing.co.kr/contact" },
  openGraph: {
    title: "문의하기 | 그로우 마케팅",
    description: "무료 마케팅 진단 신청",
    url: "https://growmarketing.co.kr/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
