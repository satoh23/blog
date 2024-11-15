import Image from "next/image";
import Link from "next/link";
import React from "react";

const ArticleList = () => {
  return (
    <div>
      <article>
        <Link href="#">
          <Image
            src="https://picsum.photos/1280"
            alt=""
            width={1280}
            height={300}
            style={{ height: "300px" }} // TODO:heightの設定でautoが優先されてしまうためこうしている。それが解決したら削除する。
          />
        </Link>
        <div>
          <Link href="#">Technology</Link>
          <Link href="#">Next.jsの勉強中</Link>
          <p>By HiyokoEnginner, Published on 2024/11/15</p>
          <Link href="#">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            commodi animi aliquid facilis optio earum dolorum quisquam?
            Doloribus, non officiis possimus qui aperiam ullam. Debitis corporis
            blanditiis adipisci nihil ex!
          </Link>
          <Link href="#">続きを読む</Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleList;
