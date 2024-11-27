import ArticleList from "@/app/components/ArticleList";
import SideBar from "@/app/components/SideBar";
import { Category } from "@/types";

async function fetchAllArticles(id: string) {
  const res = await fetch(
    process.env.ORIGIN + `/api/articles?categoryId=${id}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data.articles;
}

async function fetchAllCategories() {
  const res = await fetch(process.env.ORIGIN + `/api/categories`, {
    next: { revalidate: 60 * 60 },
  });
  const data = await res.json();
  return data.categories;
}

const CategoryArticles = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await props.params).slug;
  const articles = await fetchAllArticles(slug);
  const categories: Category[] = await fetchAllCategories();
  const categoryName = categories.filter((category) => category.id == slug)[0]
    .name;

  return (
    <div className="md:flex">
      <section className="w-full md:w-2/3 flex-col items-center px-3">
        <h1 className="text-lg md:text-2xl mb-6 pb-2 border-b-2 border-dashed border-amber-950">
          {categoryName}に関する記事
        </h1>
        <ArticleList articles={articles} />
      </section>
      <SideBar categories={categories} />
    </div>
  );
};

export default CategoryArticles;
