import Image from "next/image";
import Link from "next/link";

import { yuseiMagic } from "@/utils/fonts";
import markdownHtml from "zenn-markdown-html";
import "zenn-content-css";

import { Article, Category } from "@/types";
import { fetchDetailArticle } from "@/utils/articles";
import Contents from "@/app/components/Contents";
import TwitterShareButton from "@/app/components/TwitterShareButton";
import Head from "next/head";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "ひよこSEの成長日記",
//   description:
//     "フロントエンドエンジニア。新卒でSESに就職し、1年半で転職。コンピューターサイエンスや、Next.js、TypeScript等、勉強したことを記事にします。",
//   icons: {
//     icon: "/favicon.ico",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "detailArticle.title,",
//     description: "fdsfsfsafas",
//     images:
//       "https://bcmhhfkokrwvzbacftmx.supabase.co/storage/v1/object/public/article/useState.png",
//   },
// };

const DetailArticle = async (props: { params: Promise<{ slug: string }> }) => {
  const slug: string = (await props.params).slug;
  const detailArticle: Article = await fetchDetailArticle(slug);
  const belongCategories: Category[] = detailArticle.belong_categories;
  const updatedDate: string = new Date(
    detailArticle.updated_at
  ).toLocaleDateString("ja-JP");

  const html = markdownHtml(detailArticle.content);

  return (
    <>
      <Head>
        <title>{detailArticle.title}</title>
        <meta property="og:title" content={detailArticle.title} />
        <meta
          property="og:description"
          content={detailArticle.content.slice(0, 30)}
        />
        <meta property="og:image" content={detailArticle.thumbnail_url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={detailArticle.title} />
        <meta
          name="twitter:description"
          content={detailArticle.content.slice(0, 30)}
        />
        <meta name="twitter:image" content={detailArticle.thumbnail_url} />
      </Head>
      <div className="lg:flex">
        <div className="max-w-6xl lg:mx-auto bg-white rounded-xl px-6 py-8 lg:px-14 lg:py-12 lg:w-3/4">
          <h1
            className={`text-2xl lg:text-3xl text-left text-gray-800 font-extrabold ${yuseiMagic.className} mb-2`}
          >
            {detailArticle.title}
          </h1>
          {belongCategories.map((category) => (
            <Link
              href={`/categories/${category.id}`}
              className="inline-block transition-all bg-slate-100 hover:bg-slate-200 text-slate-400 hover:text-slate-500 rounded-full px-3 py-1 text-sm font-semibold mr-2 mt-2"
              key={category.id}
            >
              <Image
                src={category.icon}
                alt={category.name}
                width={13}
                height={13}
                className="inline-block mr-2 pb-1"
              />
              {category.name}
            </Link>
          ))}
          <p className="text-base text-gray-400 text-right mt-2">
            最終更新：{updatedDate}
          </p>
          <TwitterShareButton />
          <Image
            src={detailArticle.thumbnail_url}
            alt={detailArticle.title}
            width={320}
            height={100}
            className="mx-auto my-6 lg:my-10 border w-full"
          />
          <div className="text-base leading-relaxed mx-auto pt-5 text-gray-950">
            <div
              className="znc"
              dangerouslySetInnerHTML={{
                __html: html,
              }}
            />
          </div>
        </div>
        <Contents html={html} />
      </div>
    </>
  );
};

export default DetailArticle;
