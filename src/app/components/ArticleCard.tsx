import { Article } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ArticleCardProps = {
  article: Article;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <Link
      href={`articles/${article.id}`}
      className="duration-1000 ease-out shadow-md hover:shadow-lg hover:-translate-y-1 hover:transition-all"
    >
      <article
        className="p-2 rounded-lg overflow-hidden h-1/4 bg-white flex flex-col"
        style={{ height: "100%" }}
        key={article.id}
      >
        <div className="flex-grow">
          <Image
            src="https://picsum.photos/640"
            alt=""
            width={100}
            height={100}
            layout="responsive"
          />
          <div className="inline-block bg-slate-100 rounded-full px-2 py-0.5 text-xs font-semibold text-slate-400 mr-2 mt-4">
            Next.js
          </div>
          <div className="inline-block bg-slate-100 rounded-full px-2 py-0.5 text-xs font-semibold text-slate-400 mr-2 mt-4">
            フロントエンド
          </div>
          <div>
            <p className="text-slate-800 text-base mt-0.5 mx-1 line-clamp-3 lg:line-clamp-2">
              {article.title}
            </p>
          </div>
        </div>
        <h1 className="text-xs text-gray-400 text-right mt-2">
          {article.createdAt}
        </h1>
      </article>
    </Link>
  );
};

export default ArticleCard;
