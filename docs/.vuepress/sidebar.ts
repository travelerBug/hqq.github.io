import getContent from "./utls/gen-side";
export default {

  "/back/go": [
    {
      text: "Go语言",
      icon: "note",
      // prefix: "/back/go/",
      children: getContent("/back/go/")
    }
  ],
  "/frontend/vue": [
    {
      text: "Vue3",
      icon: "note",
      // prefix: "/frontend/vue/",
      children: getContent("/frontend/vue/")
    }
  ],
  "/frontend/cocos": [
    {
      text: "cocos ceator",
      icon: "note",
      // prefix: "/frontend/vue/",
      children: getContent("/frontend/cocos/")
    }
  ],

  "/tools/typora": [
    {
      text: "typora",
      icon: "note",
      // prefix: "/frontend/vue/",
      children: getContent("/tools/typora/")
    }
  ],
}

// export default sidebar([

//   {
//     text: "Go语言",
//     icon: "note",
//     prefix: "/go/",
//     children: getContent("/back/go/")
//   },
//   {
//     text: "Vue3",
//     icon: "note",
//     prefix: "/vue/",
//     children: getContent("/frontend/vue/")
//   },
//   // "/",
//   // "/home",
//   // "/slide",
//   // {
//   //   text: "如何使用",
//   //   icon: "creative",
//   //   prefix: "/guide/",
//   //   link: "/guide/",
//   //   children: "structure",
//   // },
//   // {
//   //   text: "文章",
//   //   icon: "note",
//   //   prefix: "/posts/",
//   //   children: [
//   //     {
//   //       text: "文章 1-4",
//   //       icon: "note",
//   //       collapsable: true,
//   //       prefix: "article/",
//   //       children: ["article1", "article2", "article3", "article4"],
//   //     },
//   //     {
//   //       text: "文章 5-12",
//   //       icon: "note",
//   //       children: [
//   //         {
//   //           text: "文章 5-8",
//   //           icon: "note",
//   //           collapsable: true,
//   //           prefix: "article/",
//   //           children: ["article5", "article6", "article7", "article8"],
//   //         },
//   //         {
//   //           text: "文章 9-12",
//   //           icon: "note",
//   //           children: ["article9", "article10", "article11", "article12"],
//   //         },
//   //       ],
//   //     },
//   //   ],
//   // },
// ]);
