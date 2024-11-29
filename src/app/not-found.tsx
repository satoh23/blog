import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pb-60">
      <Image
        src="/sappariwakaran-hiyoko.png"
        alt="困ったひよこ"
        width={150}
        height={150}
        className="mx-auto"
      />
      <div className="text-3xl font-extrabold">404</div>
      <div className="text-3xl font-extrabold">
        ページが見つかりませんでした
      </div>
      <Link
        href={"/"}
        className="bg-amber-300 p-2 rounded shadow-md border border-amber-400 mt-5"
      >
        TOPページへ移動する
      </Link>
    </div>
  );
};

export default NotFound;
