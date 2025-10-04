import type { Metadata } from "next";
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
      <body>{children}</body>
    </html>
  );
}