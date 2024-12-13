import Image from "next/image";
import Link from "next/link";

import { yuseiMagic } from "@/utils/fonts";
import markdownHtml from "zenn-markdown-html";
import "zenn-content-css";

import { Article, Category } from "@/types";
import { fetchDetailArticle } from "@/utils/articles";
import Contents from "@/app/components/Contents";
import TwitterShareButton from "@/app/components/TwitterShareButton";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const slug: string = (await props.params).slug;
  const pageUrl = `articles/${slug}/`;
  const detailArticle: Article = await fetchDetailArticle(slug);

  const metadata = {
    title: detailArticle.title,
    description: detailArticle.content.slice(0, 30),
    openGraph: {
      title: detailArticle.title,
      description: detailArticle.content.slice(0, 30),
      url: `${process.env.ORIGIN}${pageUrl}`,
      siteName: detailArticle.title,
      locale: "ja_JP",
      type: "website",
      images: detailArticle.thumbnail_url,
    },
    twitter: {
      card: "summary_large_image",
      images: detailArticle.thumbnail_url,
      title: detailArticle.title,
      description: detailArticle.content.slice(0, 30),
    },
  };

  return metadata;
}

const DetailArticle = async (props: { params: Promise<{ slug: string }> }) => {
  const slug: string = (await props.params).slug;
  const detailArticle: Article = await fetchDetailArticle(slug);
  const belongCategories: Category[] = detailArticle.belong_categories;
  const updatedDate: string = new Date(
    detailArticle.updated_at
  ).toLocaleDateString("ja-JP");

  const html = markdownHtml(detailArticle.content);

  return (
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
  );
};

export default DetailArticle;
