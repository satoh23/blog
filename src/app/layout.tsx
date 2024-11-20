import type { Metadata } from "next";
import "./globals.css";

import Header from "./Header";
import Footer from "./Footer";
import { Suspense } from "react";
import Loading from "./loading";
import { zenMaruGothic } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "ひよこエンジニアの成長日記",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`container mx-auto bg-yellow-50 text-amber-900 ${zenMaruGothic.className}`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow lg:pl-28 lg:pr-28 pt-7 pb-7">
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
