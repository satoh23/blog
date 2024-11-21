import Image from "next/image";
import React from "react";

import DeleteButton from "@/app/components/DeleteButton";
import { getDetailArticle } from "@/blogAPI";
import { yuseiMagic } from "@/utils/fonts";

const Article = async ({ params }: { params: { id: string } }) => {
  params = await params;
  const detailArticle = await getDetailArticle(params.id);

  return (
    <div className="lg:flex">
      <div className="max-w-6xl lg:mx-auto bg-white rounded-xl px-6 py-8 lg:px-14 lg:py-12 lg:w-3/4">
        <h1
          className={`text-2xl lg:text-3xl text-left text-gray-800 font-extrabold ${yuseiMagic.className}`}
        >
          {detailArticle.title}
        </h1>
        <Image
          src="https://picsum.photos/1280"
          alt=""
          width={320}
          height={100}
          className="mx-auto my-6 lg:my-12"
        />
        <div className="text-base leading-relaxed text-left text-gray-950 font-bold">
          <p dangerouslySetInnerHTML={{ __html: detailArticle.content }} />
        </div>
        <div className="text-right mt-3">
          <DeleteButton id={detailArticle.id} />
        </div>
      </div>
      <aside className="w-full md:w-1/4 lg:flex flex-col items-center px-3 md:pl-6 hidden">
        <div className="rounded p-4 mt-4 w-full">
          <h3 className="text-amber-950 font-bold mb-2 pb-2 border-b border-dashed border-amber-950">
            目次
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
};

export default Article;
