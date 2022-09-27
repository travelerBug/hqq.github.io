
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
      },
      {
        text: "Cocos ceator",
        link: "/frontend/cocos",
      }
      ,
      {
        text: "Html",
        link: "/frontend/html",
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
      {
        text: "Typora",
        link: "/tools/typora",
      }
      , {
        text: "vscode",
        link: "/tools/vscode",
      }
    ]
  },
  {
    text: "图形学",
    prefix: "/graphics/",
    children: [
      {
        text: "多边形计算相关",
        link: "/graphics/polygon",
      },
      {
        text: "向量相关",
        link: "/graphics/vector",
      }

    ]
  },
  {
    text: "第三方文档",
    prefix: "/document/",
    children: [
      {
        text: "ClipperDocCN",
        link: "/document/ClipperDocCN",
      }

    ]
  },
]
