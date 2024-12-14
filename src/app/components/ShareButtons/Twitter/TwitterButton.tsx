"use client";

import Link from "next/link";
import { useEffect } from "react";
import { FaXTwitter } from "react-icons/fa6";

function TwitterShareButton() {
  useEffect(() => {
    // Twitterのスクリプトを動的にロード
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.charset = "utf-8";
    script.async = true;
    document.body.appendChild(script);

    // コンポーネントのアンマウント時にスクリプトを削除することで、リソースをクリーンアップ
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Link
      href="https://twitter.com/share?ref_src=twsrc%5Etfw"
      data-show-count="false"
      className="inline-block text-2xl bg-black text-white p-2 rounded-lg hover:bg-white hover:text-black hover:border hover:border-black duration-500"
    >
      <FaXTwitter />
    </Link>
  );
}

export default TwitterShareButton;
