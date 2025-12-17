import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CRM 세팅",
  description:
    "고객 관리 시스템 구축 및 자동화로 재방문율을 높입니다. 고객 데이터 분석부터 자동화 마케팅까지 CRM 솔루션을 제공합니다.",
  alternates: { canonical: "https://growmarketing.co.kr/services/crm" },
  openGraph: {
    title: "CRM 세팅 | 그로우 마케팅",
    description: "고객 관리 시스템 구축 및 자동화",
    url: "https://growmarketing.co.kr/services/crm",
  },
};

export default function CrmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
