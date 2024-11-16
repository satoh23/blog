import Image from "next/image";
import Link from "next/link";
import React from "react";

const ArticleList = () => {
  return (
    <div>
      <article className="shadow my-4 flex-col">
        <Link href="#" className="hover:opacity-75">
          <Image
            src="https://picsum.photos/1280"
            alt=""
            width={1280}
            height={300}
            style={{ height: "300px" }} // TODO:heightの設定でautoが優先されてしまうためこうしている。それが解決したら削除する。
          />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="#" className="text-blue-700 pb-4 font-bold">
            Technology
          </Link>
          <Link
            href="#"
            className="text-slate-900 text-3xl font-bold pb-4 hover:text-gray-700"
          >
            Next.jsの勉強中
          </Link>
          <p className="text-sm pb-3 text-slate-900">Published on 2024/11/15</p>
          <Link href="#" className="text-slate-900 pb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            commodi animi aliquid facilis optio earum dolorum quisquam?
            Doloribus, non officiis possimus qui aperiam ullam. Debitis corporis
            blanditiis adipisci nihil ex!
          </Link>
          <Link href="#" className="text-pink-800 hover:text-black">
            続きを読む
          </Link>
        </div>
      </article>
      <article className="shadow my-4 flex-col">
        <Link href="#" className="hover:opacity-75">
          <Image
            src="https://picsum.photos/1280"
            alt=""
            width={1280}
            height={300}
            style={{ height: "300px" }} // TODO:heightの設定でautoが優先されてしまうためこうしている。それが解決したら削除する。
          />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="#" className="text-blue-700 pb-4 font-bold">
            Technology
          </Link>
          <Link
            href="#"
            className="text-slate-900 text-3xl font-bold pb-4 hover:text-gray-700"
          >
            Next.jsの勉強中
          </Link>
          <p className="text-sm pb-3 text-slate-900">Published on 2024/11/15</p>
          <Link href="#" className="text-slate-900 pb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            commodi animi aliquid facilis optio earum dolorum quisquam?
            Doloribus, non officiis possimus qui aperiam ullam. Debitis corporis
            blanditiis adipisci nihil ex!
          </Link>
          <Link href="#" className="text-blue-800 hover:text-black">
            続きを読む
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleList;
