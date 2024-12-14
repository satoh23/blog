import TwitterShareButton from "./Twitter/TwitterButton";

const ShareButtons = () => {
  return (
    <div className="mt-40">
      <p className="opacity-50 text-xl w-full rounded bg-amber-700 text-white p-2">
        共有する
      </p>
      <div className="flex p-3">
        <TwitterShareButton />
      </div>
    </div>
  );
};

export default ShareButtons;
