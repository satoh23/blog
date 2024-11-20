import DeleteButton from "@/app/components/DeleteButton";
import { getDetailArticle } from "@/blogAPI";
import Image from "next/image";
import React from "react";

const Article = async ({ params }: { params: { id: string } }) => {
  params = await params;
  const detailArticle = await getDetailArticle(params.id);

  return (
    <div className="max-w-3xl mx-auto p-5">
      <Image
        src="https://picsum.photos/1280"
        alt=""
        width={640}
        height={320}
        style={{ height: "320px" }} // TODO:heightの設定でautoが優先されてしまうためこうしている。それが解決したら削除する。
        className="w-screen"
      />
      <h1 className="text-4xl text-center mb-10 mt-10 text-amber-950">
        {detailArticle.title}
      </h1>
      <div className="text-lg leading-relaxed text-justify">
        <p>{detailArticle.content}</p>
      </div>
      <div className="text-right mt-3">
        <DeleteButton id={detailArticle.id} />
      </div>
    </div>
  );
};

export default Article;
