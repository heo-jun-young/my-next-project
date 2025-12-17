import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SNS 광고",
  description:
    "네이버, 인스타그램, 페이스북, 카카오, 구글, 당근마켓 등 주요 플랫폼에서 퍼포먼스 마케팅을 진행합니다. 광고비 대비 최고의 성과를 만들어드립니다.",
  alternates: { canonical: "https://growmarketing.co.kr/services/sns" },
  openGraph: {
    title: "SNS 광고 (퍼포먼스 마케팅) | 그로우 마케팅",
    description: "네이버, 메타, 구글, 카카오, 당근마켓 광고 전문",
    url: "https://growmarketing.co.kr/services/sns",
  },
};

export default function SnsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
