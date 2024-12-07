import type { Metadata } from "next";
import "./globals.css";

import Header from "./Header";
import Footer from "./Footer";
import { Suspense } from "react";
import Loading from "./loading";
import { zenMaruGothic } from "@/utils/fonts";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ひよこエンジニアの成長日記",
  description:
    "フロントエンドエンジニア。新卒でSESに就職し、1年半で転職。コンピューターサイエンスや、Next.js、TypeScript等、勉強したことを記事にします。",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <Script src="https://embed.zenn.studio/js/listen-embed-event.js"></Script>
      </head>
      <body
        className={`container mx-auto bg-amber-100 text-amber-900 ${zenMaruGothic.className}`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow lg:px-14 py-7">
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
