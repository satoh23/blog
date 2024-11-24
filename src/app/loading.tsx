import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/piyopiyo.gif"
        alt="歩くひよこのGIF"
        width={100}
        height={100}
      />
      <div>読み込み中...</div>
    </div>
  );
};

export default Loading;
