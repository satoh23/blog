import { getDetailArticle } from "@/blogAPI";
import Image from "next/image";
import React from "react";

const Article = async ({ params }: { params: { id: string } }) => {
  params = await params;
  const detailArticle = await getDetailArticle(params.id);
  console.log(detailArticle);
  return (
    <div className="max-w-3xl mx-auto p-5">
      <Image
        src="https://picsum.photos/1280"
        alt=""
        width={1280}
        height={300}
        style={{ height: "300px" }} // TODO:heightの設定でautoが優先されてしまうためこうしている。それが解決したら削除する。
      />
      <h1 className="text-4xl text-center mb-10 mt-10">タイトル</h1>
      <div className="text-lg leading-relaxed text-justify">
        <p>本文</p>
      </div>
    </div>
  );
};

export default Article;
