import { Article, Category } from "@/types";
import ArticleList from "./components/ArticleList/ArticleList";
import SideBar from "./components/SideBar/SideBar";
import { fetchAllArticles } from "@/utils/articles";
import { fetchAllCategories } from "@/utils/categories";

export default async function Home() {
  const articles: Article[] = await fetchAllArticles();
  const categories: Category[] = await fetchAllCategories();

  return (
    <div className="md:flex">
      <section className="w-full md:w-2/3 flex-col items-center px-3">
        <ArticleList articles={articles} />
      </section>
      <SideBar categories={categories} />
    </div>
  );
}
