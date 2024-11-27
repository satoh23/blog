import Link from "next/link";

import { hachiMaruPop } from "@/utils/fonts";

const Header = () => {
  return (
    <header className="py-5 px-5 flex justify-between items-center">
      <div>
        <h1 className="text-amber-950 text-2xl font-extrabold">
          <Link href="/" className={`${hachiMaruPop.className}`}>
            ひよこエンジニアの成長日記
          </Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
