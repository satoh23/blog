import Link from "next/link";
import React from "react";

import { hachiMaruPop } from "@/utils/fonts";

const Header = () => {
  return (
    <header className="py-5 px-10 flex justify-between items-center">
      <div>
        <h1 className="text-amber-950 text-2xl font-extrabold">
          <Link href="/" className={`${hachiMaruPop.className}`}>
            ひよこエンジニアの成長日記🐣
          </Link>
        </h1>
      </div>
      <div>
        <nav className="text-sm font-medium">
          <Link
            href="/articles/new"
            className="bg-orange-300 px-3 py-3 rounded-md"
          >
            記事を書く
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
