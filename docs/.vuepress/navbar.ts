
export default [
  {
    text: "主页",
    link: "/",
    icon: "fa-fort-awesome"
  },
  {
    text: "前端",
    children: [
      {
        text: "Vue",
        link: "/frontend/vue",
      }
    ]
  },
  {
    text: "后端",
    children: [
      {
        text: "Go",
        link: "/back/go",
      }, {
        text: "Node",
        link: "/back/node",
      }
    ]
  },
  {
    text: "开发工具",
    prefix: "/tools/",
    children: [
      // {
      //   text: "Go",
      //   link: "/tools/go",
      // }, {
      //   text: "Node",
      //   link: "/tools/node",
      // }
    ]
  },

]
