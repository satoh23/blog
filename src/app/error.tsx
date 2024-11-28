"use client";

import Image from "next/image";

const Error = ({ reset }: { reset: () => void }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pb-60">
      <Image
        src="/goukyu.png"
        alt="泣いているひよこ"
        width={150}
        height={150}
        className="mx-auto"
      />
      <div className="text-3xl">エラーが発生しました...</div>
      <button
        onClick={() => reset()}
        className="bg-amber-300 p-2 rounded shadow-md border border-amber-400 mt-3"
      >
        もう一度試す
      </button>
    </div>
  );
};

export default Error;
