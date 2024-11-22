import { Article, Category } from "@/types";
import React from "react";

import ArticleCard from "./ArticleCard";
import { getArticleCategory } from "@/blogAPI";

type ArticleListProps = {
  articles: Article[];
};

const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {articles.map((article) => (
        <ArticleCard article={article} key={article.id} />
      ))}
    </div>
  );
};

export default ArticleList;
