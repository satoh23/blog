import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import "zenn-content-css";
import { yuseiMagic } from "@/utils/fonts";
import Contents from "./Contents";
import { Article, Category } from "@/types";
import TwitterShareButton from "./TwitterShareButton";

type Props = {
  detailArticle: Article;
  belongCategories: Category[];
  html: string;
};

const DetailArticle = ({ detailArticle, belongCategories, html }: Props) => {
  const updatedDate: string = new Date(
    detailArticle.updated_at
  ).toLocaleDateString("ja-JP");
  return (
    <>
      <Head>
        <title>dfasd</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="eragg" />
        <meta name="twitter:description" content="dafsdsfs" />
        <meta
          name="twitter:image"
          content="https://bcmhhfkokrwvzbacftmx.supabase.co/storage/v1/object/public/article/useState.png"
        />
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
