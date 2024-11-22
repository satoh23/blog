import { getAllArticles, getAllCategories } from "@/blogAPI";
import ArticleList from "./components/ArticleList";
import SideBar from "./components/SideBar";

export default async function Home() {
  const articles = await getAllArticles();
  const categories = await getAllCategories();

  return (
    <div className="md:flex">
      <section className="w-full md:w-2/3 flex-col items-center px-3">
        <ArticleList articles={articles} />
      </section>
      <SideBar categories={categories} />
    </div>
  );
}
