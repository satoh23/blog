import { Article } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ArticleCardProps = {
  article: Article;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <Link href={`articles/${article.id}`} className="hover:opacity-75">
      <article
        className="flex-grow p-4 rounded-xl overflow-hidden shadow-lg mb-3 h-1/4 bg-white"
        style={{ height: "100%" }}
        key={article.id}
      >
        <Image
          src="https://picsum.photos/640"
          alt=""
          width={300}
          height={150}
          style={{ height: "150px" }} // TODO:heightの設定でautoが優先されてしまうためこうしている。それが解決したら削除する。
        />
        <div className="px-6 py-4">
          <p className="text-gray-700 text-base">
            {article.title.length > 20
              ? article.title.substring(0, 20) + "..."
              : article.title}
          </p>
          <p className="text-sm text-gray-600">{article.createdAt}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            テスト
          </span>
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;
