import { Article } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ArticleCardProps = {
  article: Article;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  const updatedDate = new Date(article.updated_at).toLocaleDateString("ja-JP");
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
            src={article.thumbnail_url}
            alt={article.title}
            width={360}
            height={360}
          />
          {article.belong_categories.map((category) => (
            <div
              className="inline-block bg-slate-100 rounded-full px-2 py-0.5 text-xs font-semibold text-slate-400 mr-1 mt-1"
              key={category.id}
            >
              <Image
                src={category.icon}
                alt={category.name}
                width={13}
                height={13}
                className="inline-block mr-1 pb-1"
              />
              {category.name}
            </div>
          ))}
          <div>
            <h1 className="text-slate-800 text-base mt-0.5 mx-1 line-clamp-3 lg:line-clamp-2">
              {article.title}
            </h1>
          </div>
        </div>
        <p className="text-xs text-gray-400 text-right mt-2">{updatedDate}</p>
      </article>
    </Link>
  );
};

export default ArticleCard;
