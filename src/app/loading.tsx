import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pb-60">
      <Image
        src="/piyopiyo.gif"
        alt="歩くひよこのGIF"
        width={150}
        height={150}
        className="mx-auto"
      />
      <div className="text-3xl mt-5">読み込み中...</div>
    </div>
  );
};

export default Loading;
