import { getAllArticles } from "@/blogAPI";
import ArticleList from "./components/ArticleList";

export default async function Home() {
  const articles = await getAllArticles();

  return (
    <div className="md:flex">
      <section className="w-full md:w-2/3 flex-col items-center px-3">
        <ArticleList articles={articles} />
      </section>

      <aside className="w-full md:w-1/3 flex flex-col items-center px-3 md:pl-6">
        <div className="rounded p-4 mt-4">
          <h3 className="text-amber-950 font-bold mb-2 pb-2 border-b border-dashed border-amber-950">
            プロフィール
          </h3>
          <p className="mt-2 pl-2">
            1999年6月生まれ。2023年にIT系の専門学校を卒業してSESに就職。1年半で退職して現在二社目です。エンジニアとして成長するために日々奮闘中。
          </p>
        </div>
        <div className="rounded p-4 mt-4 w-full">
          <h3 className="text-amber-950 font-bold mb-2 pb-2 border-b border-dashed border-amber-950">
            カテゴリー
          </h3>
          <ul className="mt-2 pl-2">
            <li>
              <a href="#">フロントエンド</a>
            </li>
            <li>
              <a href="#">バックエンド</a>
            </li>
            <li>
              <a href="#">ネットワーク</a>
            </li>
            <li>
              <a href="#">DB</a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
