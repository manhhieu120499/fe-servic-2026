export type POSTS = {
  id: number;
  postImage: string;
  userAvatar: string;
  userName: string;
  postContent: string;
}[];

export const post: POSTS = [
  {
    id: 1,
    postImage: "/images/review-1.png",
    userAvatar: "/images/avatar-1.png",
    userName: "Thuỳ Đỗ",
    postContent:
      "Mỗi lần ghé The OM Longue là một lần mình tự thưởng cho bản thân. Mình rất thích không gian ở đây, vừa sang trọng, vừa ấm cúng. Bộ nail thì khỏi chê luôn",
  },
  {
    id: 2,
    postImage: "/images/review-2.png",
    userAvatar: "/images/avatar-2.png",
    userName: "Thuỳ Đỗ",
    postContent:
      "Mỗi lần ghé The OM Longue là một lần mình tự thưởng cho bản thân. Mình rất thích không gian ở đây, vừa sang trọng, vừa ấm cúng. Bộ nail thì khỏi chê luôn",
  },
  {
    id: 3,
    postImage: "/images/review-4.png",
    userAvatar: "/images/avatar-3.png",
    userName: "John Doe",
    postContent:
      "Mỗi lần ghé The OM Longue là một lần mình tự thưởng cho bản thân. Mình rất thích không gian ở đây, vừa sang trọng, vừa ấm cúng. Bộ nail thì khỏi chê luôn",
  },
  {
    id: 1,
    postImage: "/images/review-1.png",
    userAvatar: "/images/avatar-1.png",
    userName: "Thuỳ Đỗ",
    postContent:
      "Mỗi lần ghé The OM Longue là một lần mình tự thưởng cho bản thân. Mình rất thích không gian ở đây, vừa sang trọng, vừa ấm cúng. Bộ nail thì khỏi chê luôn",
  },
  {
    id: 2,
    postImage: "/images/review-2.png",
    userAvatar: "/images/avatar-2.png",
    userName: "Thuỳ Đỗ",
    postContent:
      "Mỗi lần ghé The OM Longue là một lần mình tự thưởng cho bản thân. Mình rất thích không gian ở đây, vừa sang trọng, vừa ấm cúng. Bộ nail thì khỏi chê luôn",
  },
  {
    id: 3,
    postImage: "/images/review-4.png",
    userAvatar: "/images/avatar-3.png",
    userName: "John Doe",
    postContent:
      "Mỗi lần ghé The OM Longue là một lần mình tự thưởng cho bản thân. Mình rất thích không gian ở đây, vừa sang trọng, vừa ấm cúng. Bộ nail thì khỏi chê luôn",
  },
];

export const postFull = [
  ...post,
  ...post.map((p, idx) => ({ ...p, id: idx + 3 })),
  ...post.map((p, idx) => ({ ...p, id: idx + 6 })),
];
