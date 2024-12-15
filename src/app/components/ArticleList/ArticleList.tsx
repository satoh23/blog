import { Article } from "@/types";

import ArticleCard from "./ArticleCard/ArticleCard";

type ArticleListProps = {
  articles: Article[];
};

const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-4">
      {articles.map((article) => (
        <ArticleCard article={article} key={article.id} />
      ))}
    </div>
  );
};

export default ArticleList;
