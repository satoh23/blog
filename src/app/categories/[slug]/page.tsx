import ArticleList from "@/app/components/ArticleList/ArticleList";
import SideBar from "@/app/components/SideBar/SideBar";
import { Article, Category } from "@/types";
import { fetchAllArticles } from "@/utils/articles";
import { fetchAllCategories } from "@/utils/categories";

const CategoryArticles = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const slug: string = (await props.params).slug;
  const articles: Article[] = await fetchAllArticles(slug);
  const categories: Category[] = await fetchAllCategories();
  const categoryName: string = categories.filter(
    (category) => category.id == slug
  )[0].name;

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
