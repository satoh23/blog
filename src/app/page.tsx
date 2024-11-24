import ArticleList from "./components/ArticleList";
import SideBar from "./components/SideBar";

async function fetchAllArticles() {
  const res = await fetch(process.env.ORIGIN + `/api/articles`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.articles;
}

async function fetchAllCategories() {
  const res = await fetch(process.env.ORIGIN + `/api/categories`, {
    next: { revalidate: 60 * 60 },
  });
  const data = await res.json();
  return data.articles;
}

export default async function Home() {
  const articles = await fetchAllArticles();
  const categories = await fetchAllCategories();

  return (
    <div className="md:flex">
      <section className="w-full md:w-2/3 flex-col items-center px-3">
        <ArticleList articles={articles} />
      </section>
      <SideBar categories={categories} />
    </div>
  );
}
