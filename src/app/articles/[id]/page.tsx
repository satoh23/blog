import Image from "next/image";
import React from "react";

import { getArticleCategory, getDetailArticle } from "@/blogAPI";
import { yuseiMagic } from "@/utils/fonts";
import Link from "next/link";

const Article = async ({ params }: { params: { id: string } }) => {
  params = await params;
  const detailArticle = await getDetailArticle(params.id);
  const categories = await getArticleCategory(params.id);

  return (
    <div className="lg:flex">
      <div className="max-w-6xl lg:mx-auto bg-white rounded-xl px-6 py-8 lg:px-14 lg:py-12 lg:w-3/4">
        <h1
          className={`text-2xl lg:text-3xl text-left text-gray-800 font-extrabold ${yuseiMagic.className}`}
        >
          {detailArticle.title}
        </h1>
        {categories.map((category) => (
          <Link
            href="#"
            className="inline-block transition-all bg-slate-100 hover:bg-slate-200 text-slate-400 hover:text-slate-500 rounded-full px-3 py-1 text-sm font-semibold mr-2 mt-4"
            key={category.id}
          >
            <Image
              src={category.icon}
              alt=""
              width={13}
              height={13}
              className="inline-block mr-2 pb-1"
            />
            {category.name}
          </Link>
        ))}
        <p className="text-base text-gray-400 text-right mt-5">
          最終更新：{detailArticle.createdAt}
        </p>
        <Image
          src="https://picsum.photos/1280"
          alt=""
          width={320}
          height={100}
          className="mx-auto my-6 lg:my-12"
        />
        <div className="text-base leading-relaxed mx-auto pt-5 text-gray-950">
          <p dangerouslySetInnerHTML={{ __html: detailArticle.content }} />
        </div>
      </div>
      <aside className="w-full md:w-1/4 lg:flex flex-col items-center hidden">
        <div className="mt-10 fixed w-1/4 pl-16">
          <h3 className="text-amber-950 font-bold mb-2 pb-2 border-b border-dashed border-amber-950 px-1">
            目次
          </h3>
          <ul className="mt-2 pl-3 text-sm">
            <li className="my-0.5 line-clamp-1 hover:bg-amber-200 hover:text-amber-950">
              <Link href="#">
                フロントエンドああああああああああああああああああああああああああ
              </Link>
            </li>
            <li className="my-0.5 line-clamp-1 hover:bg-amber-200 hover:text-amber-950">
              <Link href="#">バックエンド</Link>
            </li>
            <li className="my-0.5 line-clamp-1 hover:bg-amber-200 hover:text-amber-950">
              <Link href="#">ネットワーク</Link>
            </li>
            <li className="my-0.5 line-clamp-1 hover:bg-amber-200 hover:text-amber-950">
              <Link href="#">DB</Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Article;
