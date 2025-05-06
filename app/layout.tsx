import type React from "react";
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import { Inter } from "next/font/google";
import "@/globals.css";
import TopNavbar from "@/components/top-navbar";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "우닐의 포트폴리오",
  description: "성장하는 프론트엔드 개발자의 포트폴리오입니다.",
};

// FONT: 프리텐다드
const pretendard = localFont({
  src: "../src/shared/assets/PretendardVariable.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.variable} font-pretendard`}>
        <TopNavbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
