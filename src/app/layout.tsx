import type { Metadata } from "next";
import "./globals.css";

import Header from "./Header";
import Footer from "./Footer";
import { Suspense } from "react";
import Loading from "./loading";
import { zenMaruGothic } from "@/utils/fonts";
import Script from "next/script";
import TwitterShareButton from "./components/TwitterShareButton";

export const metadata: Metadata = {
  title: "ひよこSEの成長日記",
  description:
    "フロントエンドエンジニア。新卒でSESに就職し、1年半で転職。コンピューターサイエンスや、Next.js、TypeScript等、勉強したことを記事にします。",
  icons: {
    icon: "/favicon.ico",
  },
  twitter: {
    card: "summary_large_image",
    title: "ひとこ",
    description: "あああああ",
    images:
      "https://bcmhhfkokrwvzbacftmx.supabase.co/storage/v1/object/public/article/useState.png",
  },
};

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <Script src="https://embed.zenn.studio/js/listen-embed-event.js"></Script>
      </head>
      <body
        className={`container mx-auto bg-amber-100 text-amber-900 ${zenMaruGothic.className}`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow lg:px-14 py-7">
            <TwitterShareButton />
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
