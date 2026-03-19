type POSTPROPS = {
  postImage: string;
  userAvatar: string;
  userName: string;
  postContent: string;
  classNames?: string;
};

function Post({
  postImage,
  userAvatar,
  userName,
  postContent,
  classNames,
}: POSTPROPS) {
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <div className="relative w-full h-full aspect-3/4">
        <img
          src={postImage || "/images/service-bg.png"}
          alt="post-image"
          className="w-full h-full object-cover shadow-xl"
        />
        <div className="absolute -bottom-5 right-2 text-[#E1C084]">
          <img src="/images/Union.png" alt="" className="w-full h-full" />
        </div>
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-4 mt-6">
          <img
            src={userAvatar || "/images/rating.png"}
            alt="user-avatar"
            className="w-[60px] h-[60px] rounded-full object-cover"
          />
          <span className="text-white text-3xl font-semibold">{userName}</span>
        </div>

        <p
          className={`text-[#E8E8E8] text-lg leading-relaxed mt-2 ${classNames}`}
        >
          {postContent}...
        </p>

        <button className="text-[#B19879] underline text-left hover:text-[#E1C084] transition-colors w-fit text-lg">
          Xem thêm
        </button>
      </div>
    </div>
  );
}

export default Post;
