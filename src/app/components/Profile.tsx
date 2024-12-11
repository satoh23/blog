import Image from "next/image";
import Link from "next/link";

const Profile = () => {
  return (
    <div className="rounded p-4 mt-4">
      <div className="text-amber-950 font-bold mb-2 pb-2 border-b border-dashed border-amber-950">
        プロフィール
      </div>
      <div className="px-1">
        <div className="flex">
          <div className="w-1/3">
            <div className="flex justify-center">
              <Image
                src="/publicdomainq-0047579dercre.png"
                alt="ひよこSEのアイコン"
                width={80}
                height={80}
                className="rounded-full pt-3"
              />
            </div>
            <div className="flex justify-center mt-5">
              <Link href="https://github.com/satoh23" target="_blank">
                <Image
                  src="/github.svg"
                  alt="githubのアイコン"
                  width={30}
                  height={30}
                  className="m-1"
                />
              </Link>
              <Link href="https://x.com/hiyoko_frontend" target="_blank">
                <Image
                  src="/x.svg"
                  alt="xのアイコン"
                  width={30}
                  height={30}
                  className="m-1"
                />
              </Link>
            </div>
          </div>
          <div className="w-2/3 pl-1">
            <div className="pt-3 font-extrabold">ひよこSE</div>
            <div>
              <p className="opacity-75 mt-1">
                1999年6月生まれ。2023年にIT系の専門スクールを卒業してSESに就職。その後SIerに転職。エンジニアとして成長するために日々奮闘中！
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
