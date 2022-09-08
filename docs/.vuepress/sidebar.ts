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
  "/frontend/html": [
    {
      text: "html",
      icon: "note",
      // prefix: "/frontend/vue/",
      children: getContent("/frontend/html/")
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
  "/tools/vscode": [
    {
      text: "vscode",
      icon: "note",
      // prefix: "/frontend/vue/",
      children: getContent("/tools/vscode/")
    },
  ],
  "/graphics/polygon": [
    {
      text: "多边形",
      icon: "note",
      // prefix: "/frontend/vue/",
      children: getContent("/graphics/polygon/")
    },
  ],
  "/graphics/vector": [
    {
      text: "向量",
      icon: "note",
      // prefix: "/frontend/vue/",
      children: getContent("/graphics/vector/")
    },
  ],
  "/document/ClipperDocCN": [
    {
      text: "ClipperDocCN",
      icon: "note",
      // prefix: "/frontend/vue/",
      children: getContent("/document/ClipperDocCN/")
    },
  ],
}
console.log(getContent("/graphics/polygon/"));

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
