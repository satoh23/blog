import ArticleList from "./components/ArticleList";
// import SideBar from "./components/SideBar";

async function fetchAllArticles() {
  const res = await fetch(process.env.ORIGIN + `/api/articles`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.articles;
}

export default async function Home() {
  // const categories = await getAllCategories();
  const articles = await fetchAllArticles();

  return (
    <div className="md:flex">
      <section className="w-full md:w-2/3 flex-col items-center px-3">
        <ArticleList articles={articles} />
      </section>
      {/* <SideBar categories={categories} /> */}
    </div>
  );
}
