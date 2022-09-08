export const themeData = {
  "repo": "travelerBug/blog",
  "docsDir": "blog",
  "docsBranch": "master",
  "hitokoto": "https://v1.hitokoto.cn?c=i",
  "personalInfo": {
    "name": "travelerBug",
    "avatar": "/img/avatar.jpg",
    "description": "所有的内心忧虑都源于知识储备不足",
    "sns": {
      "github": "travelerBug",
      "bilibili": {
        "icon": "ri-bilibili-fill",
        "link": "https://www.bilibili.com/"
      },
      "wechat": {
        "icon": "ri-wechat-fill",
        "link": "img/wechat.jpg"
      }
    }
  },
  "homeHeaderImages": [
    {
      "path": "/img/home-bg/1.jpg",
      "mask": "rgba(40, 57, 101, .4)"
    },
    {
      "path": "/img/home-bg/2.jpg",
      "mask": "rgba(196, 176, 131, .1)"
    },
    {
      "path": "/img/home-bg/3.jpg",
      "mask": "rgba(68, 74, 83, .1)"
    },
    {
      "path": "/img/home-bg/4.jpg",
      "mask": "rgba(19, 75, 50, .2)"
    },
    {
      "path": "/img/home-bg/5.jpg"
    }
  ],
  "pages": {
    "tags": {
      "subtitle": "Black Sheep Wall",
      "bgImage": {
        "path": "/img/pages/tags.jpg",
        "mask": "rgba(211, 136, 37, .5)"
      }
    }
  },
  "navbar": [
    {
      "text": "主页",
      "link": "/",
      "icon": "fa-fort-awesome"
    },
    {
      "text": "前端",
      "children": [
        {
          "text": "Vue",
          "link": "/frontend/vue"
        },
        {
          "text": "Cocos ceator",
          "link": "/frontend/cocos"
        },
        {
          "text": "Html",
          "link": "/frontend/html"
        }
      ]
    },
    {
      "text": "后端",
      "children": [
        {
          "text": "Go",
          "link": "/back/go"
        },
        {
          "text": "Node",
          "link": "/back/node"
        }
      ]
    },
    {
      "text": "开发工具",
      "prefix": "/tools/",
      "children": [
        {
          "text": "Typora",
          "link": "/tools/typora"
        },
        {
          "text": "vscode",
          "link": "/tools/vscode"
        }
      ]
    },
    {
      "text": "图形学",
      "prefix": "/graphics/",
      "children": [
        {
          "text": "多边形计算相关",
          "link": "/graphics/polygon"
        },
        {
          "text": "向量相关",
          "link": "/graphics/vector"
        }
      ]
    },
    {
      "text": "第三方文档",
      "prefix": "/document/",
      "children": [
        {
          "text": "ClipperDocCN",
          "link": "/document/ClipperDocCN"
        }
      ]
    }
  ],
  "sidebar": {
    "/back/go": [
      {
        "text": "Go语言",
        "icon": "note",
        "children": [
          {
            "text": "1-开发环境",
            "icon": "note",
            "collapsible": true,
            "children": [
              {
                "text": "编辑器.md",
                "link": "/back/go/1-开发环境/编辑器.md"
              },
              {
                "text": "配置GOPATH.md",
                "link": "/back/go/1-开发环境/配置GOPATH.md"
              },
              {
                "text": "Git安装.md",
                "link": "/back/go/1-开发环境/Git安装.md"
              },
              {
                "text": "Go的安装.md",
                "link": "/back/go/1-开发环境/Go的安装.md"
              },
              {
                "text": "GoLand编辑器.md",
                "link": "/back/go/1-开发环境/GoLand编辑器.md"
              }
            ]
          },
          {
            "text": "2-go基础",
            "icon": "note",
            "collapsible": true,
            "children": [
              {
                "text": "1-语言的主要特征.md",
                "link": "/back/go/2-go基础/1-语言的主要特征.md"
              },
              {
                "text": "2-内置类型和内置函数.md",
                "link": "/back/go/2-go基础/2-内置类型和内置函数.md"
              },
              {
                "text": "3-Init函数和main函数.md",
                "link": "/back/go/2-go基础/3-Init函数和main函数.md"
              },
              {
                "text": "4-go常用命令.md",
                "link": "/back/go/2-go基础/4-go常用命令.md"
              },
              {
                "text": "5-运算符.md",
                "link": "/back/go/2-go基础/5-运算符.md"
              },
              {
                "text": "6-下划线.md",
                "link": "/back/go/2-go基础/6-下划线.md"
              },
              {
                "text": "7-变量和常量.md",
                "link": "/back/go/2-go基础/7-变量和常量.md"
              },
              {
                "text": "8-基本类型.md",
                "link": "/back/go/2-go基础/8-基本类型.md"
              },
              {
                "text": "9-数组Array.md",
                "link": "/back/go/2-go基础/9-数组Array.md"
              },
              {
                "text": "10-指针.md",
                "link": "/back/go/2-go基础/10-指针.md"
              },
              {
                "text": "11-结构体.md",
                "link": "/back/go/2-go基础/11-结构体.md"
              },
              {
                "text": "12-切片.md",
                "link": "/back/go/2-go基础/12-切片.md"
              },
              {
                "text": "13-Map.md",
                "link": "/back/go/2-go基础/13-Map.md"
              },
              {
                "text": "14-接口.md",
                "link": "/back/go/2-go基础/14-接口.md"
              }
            ]
          },
          {
            "text": "3-流程控制",
            "icon": "note",
            "collapsible": true,
            "children": [
              {
                "text": "1-条件语句if.md",
                "link": "/back/go/3-流程控制/1-条件语句if.md"
              },
              {
                "text": "2-条件语句switch.md",
                "link": "/back/go/3-流程控制/2-条件语句switch.md"
              },
              {
                "text": "3-条件语句select.md",
                "link": "/back/go/3-流程控制/3-条件语句select.md"
              },
              {
                "text": "4-循环语句range.md",
                "link": "/back/go/3-流程控制/4-循环语句range.md"
              }
            ]
          },
          {
            "text": "4-函数",
            "icon": "note",
            "collapsible": true,
            "children": [
              {
                "text": "1-函数定义.md",
                "link": "/back/go/4-函数/1-函数定义.md"
              },
              {
                "text": "2-参数.md",
                "link": "/back/go/4-函数/2-参数.md"
              },
              {
                "text": "3-返回值.md",
                "link": "/back/go/4-函数/3-返回值.md"
              },
              {
                "text": "4-匿名函数.md",
                "link": "/back/go/4-函数/4-匿名函数.md"
              },
              {
                "text": "5-闭包,递归.md",
                "link": "/back/go/4-函数/5-闭包,递归.md"
              }
            ]
          },
          {
            "text": "5-导入第三方包",
            "icon": "note",
            "collapsible": true,
            "children": [
              {
                "text": "go项目中引用第三方包或自己写的包.md",
                "link": "/back/go/5-导入第三方包/go项目中引用第三方包或自己写的包.md"
              }
            ]
          }
        ]
      }
    ],
    "/frontend/vue": [
      {
        "text": "Vue3",
        "icon": "note",
        "children": [
          {
            "text": "1-vue3简介.md",
            "link": "/frontend/vue/1-vue3简介.md"
          }
        ]
      }
    ],
    "/frontend/cocos": [
      {
        "text": "cocos ceator",
        "icon": "note",
        "children": [
          {
            "text": "2D",
            "icon": "note",
            "collapsible": true,
            "children": [
              {
                "text": "挖洞.md",
                "link": "/frontend/cocos/2D/挖洞.md"
              },
              {
                "text": "Graphics绘图.md",
                "link": "/frontend/cocos/2D/Graphics绘图.md"
              }
            ]
          }
        ]
      }
    ],
    "/frontend/html": [
      {
        "text": "html",
        "icon": "note",
        "children": [
          {
            "text": "example",
            "icon": "note",
            "collapsible": true,
            "children": [
              {
                "text": "代码雨.md",
                "link": "/frontend/html/example/代码雨.md"
              }
            ]
          }
        ]
      }
    ],
    "/tools/typora": [
      {
        "text": "typora",
        "icon": "note",
        "children": [
          {
            "text": "1-使用pic配置七牛云图床.md",
            "link": "/tools/typora/1-使用pic配置七牛云图床.md"
          },
          {
            "text": "2-添加数学公式.md",
            "link": "/tools/typora/2-添加数学公式.md"
          },
          {
            "text": "3-简单语法.md",
            "link": "/tools/typora/3-简单语法.md"
          }
        ]
      }
    ],
    "/tools/vscode": [
      {
        "text": "vscode",
        "icon": "note",
        "children": [
          "",
          {
            "text": "主题类插件.md",
            "link": "/tools/vscode/主题类插件.md"
          },
          {
            "text": "前端常用插件.md",
            "link": "/tools/vscode/前端常用插件.md"
          },
          {
            "text": "图片编辑.md",
            "link": "/tools/vscode/图片编辑.md"
          },
          {
            "text": "常用插件.md",
            "link": "/tools/vscode/常用插件.md"
          },
          {
            "text": "画图插件.md",
            "link": "/tools/vscode/画图插件.md"
          }
        ]
      }
    ],
    "/graphics/polygon": [
      {
        "text": "多边形",
        "icon": "note",
        "children": [
          {
            "text": "Clipper",
            "icon": "note",
            "collapsible": true,
            "children": [
              ""
            ]
          }
        ]
      }
    ],
    "/graphics/vector": [
      {
        "text": "向量",
        "icon": "note",
        "children": [
          "",
          {
            "text": "点乘.md",
            "link": "/graphics/vector/点乘.md"
          }
        ]
      }
    ],
    "/document/ClipperDocCN": [
      {
        "text": "ClipperDocCN",
        "icon": "note",
        "children": [
          {
            "text": "clipperlib",
            "icon": "note",
            "collapsible": true,
            "children": [
              {
                "text": "预定义宏.md",
                "link": "/document/ClipperDocCN/clipperlib/预定义宏.md"
              },
              {
                "text": "classes",
                "icon": "note",
                "collapsible": true,
                "children": [
                  {
                    "text": "Clipper",
                    "icon": "note",
                    "collapsible": true,
                    "children": [
                      {
                        "text": "Clipper.Constructor.md",
                        "link": "/document/ClipperDocCN/clipperlib/classes/Clipper/Clipper.Constructor.md"
                      },
                      {
                        "text": "Clipper.Execute.md",
                        "link": "/document/ClipperDocCN/clipperlib/classes/Clipper/Clipper.Execute.md"
                      },
                      {
                        "text": "Clipper.md",
                        "link": "/document/ClipperDocCN/clipperlib/classes/Clipper/Clipper.md"
                      },
                      {
                        "text": "Clipper.PreserveCollinear.md",
                        "link": "/document/ClipperDocCN/clipperlib/classes/Clipper/Clipper.PreserveCollinear.md"
                      },
                      {
                        "text": "Clipper.ReverseSolution.md",
                        "link": "/document/ClipperDocCN/clipperlib/classes/Clipper/Clipper.ReverseSolution.md"
                      },
                      {
                        "text": "Clipper.StrictlySimple.md",
                        "link": "/document/ClipperDocCN/clipperlib/classes/Clipper/Clipper.StrictlySimple.md"
                      },
                      {
                        "text": "Clipper.ZFillFunction.md",
                        "link": "/document/ClipperDocCN/clipperlib/classes/Clipper/Clipper.ZFillFunction.md"
                      }
                    ]
                  },
                  {
                    "text": "ClipperBase",
                    "icon": "note",
                    "collapsible": true,
                    "children": [
                      {
                        "text": "ClipperBase.AddPath.md",
                        "link": "/document/ClipperDocCN/clipperlib/classes/ClipperBase/ClipperBase.AddPath.md"
                      },
                      {
                        "text": "ClipperBase.AddPaths.md",
                        "link": "/document/ClipperDocCN/clipperlib/classes/ClipperBase/ClipperBase.AddPaths.md"
                      },
                      {
                        "text": "ClipperBase.Clear.md",
                        "link": "/document/ClipperDocCN/clipperlib/classes/ClipperBase/ClipperBase.Clear.md"
                      },
                      {
                        "text": "ClipperBase.GetBounds.md",
                        "link": "/document/ClipperDocCN/clipperlib/classes/ClipperBase/ClipperBase.GetBounds.md"
                      },
                      {
                        "text": "ClipperBase.md",
                        "link": "/document/ClipperDocCN/clipperlib/classes/ClipperBase/ClipperBase.md"
                      }
                    ]
                  },
                  {
                    "text": "ClipperOffset",
                    "icon": "note",
                    "collapsible": true,
                    "children": [
                      {
                        "text": "ClipperOffset.AddPath.md",
                        "link": "/document/ClipperDocCN/clipperlib/classes/ClipperOffset/ClipperOffset.AddPath.md"
                      },
                      {
                        "text": "ClipperOffset.AddPaths.md",
                        "link": "/document/ClipperDocCN/clipperlib/classes/ClipperOffset/ClipperOffset.AddPaths.md"
                      },
                      {
                        "text": "ClipperOffset.ArcTolerance.md",
                        "link": "/document/ClipperDocCN/clipperlib/classes/ClipperOffset/ClipperOffset.ArcTolerance.md"
                      },
                      {
                        "text": "ClipperOffset.Clear.md",
                        "link": "/document/ClipperDocCN/clipperlib/classes/ClipperOffset/ClipperOffset.Clear.md"
                      },
                      {
                        "text": "ClipperOffset.Constructor.md",
                        "link": "/document/ClipperDocCN/clipperlib/classes/ClipperOffset/ClipperOffset.Constructor.md"
                      },
                      {
                        "text": "ClipperOffset.Execute.md",
                        "link": "/document/ClipperDocCN/clipperlib/classes/ClipperOffset/ClipperOffset.Execute.md"
                      },
                      {
                        "text": "ClipperOffset.md",
                        "link": "/document/ClipperDocCN/clipperlib/classes/ClipperOffset/ClipperOffset.md"
                      },
                      {
                        "text": "ClipperOffset.MiterLimit.md",
                        "link": "/document/ClipperDocCN/clipperlib/classes/ClipperOffset/ClipperOffset.MiterLimit.md"
                      }
                    ]
                  },
                  {
                    "text": "PolyNode",
                    "icon": "note",
                    "collapsible": true,
                    "children": [
                      {
                        "text": "PolyNode.ChildCount.md",
                        "link": "/document/ClipperDocCN/clipperlib/classes/PolyNode/PolyNode.ChildCount.md"
                      },
                      {
                        "text": "PolyNode.Childs.md",
                        "link": "/document/ClipperDocCN/clipperlib/classes/PolyNode/PolyNode.Childs.md"
                      },
                      {
                        "text": "PolyNode.Contour.md",
                        "link": "/document/ClipperDocCN/clipperlib/classes/PolyNode/PolyNode.Contour.md"
                      },
                      {
                        "text": "PolyNode.GetNext.md",
                        "link": "/document/ClipperDocCN/clipperlib/classes/PolyNode/PolyNode.GetNext.md"
                      },
                      {
                        "text": "PolyNode.IsHole.md",
                        "link": "/document/ClipperDocCN/clipperlib/classes/PolyNode/PolyNode.IsHole.md"
                      },
                      {
                        "text": "PolyNode.IsOpen.md",
                        "link": "/document/ClipperDocCN/clipperlib/classes/PolyNode/PolyNode.IsOpen.md"
                      },
                      {
                        "text": "PolyNode.md",
                        "link": "/document/ClipperDocCN/clipperlib/classes/PolyNode/PolyNode.md"
                      },
                      {
                        "text": "PolyNode.Parent.md",
                        "link": "/document/ClipperDocCN/clipperlib/classes/PolyNode/PolyNode.Parent.md"
                      }
                    ]
                  },
                  {
                    "text": "PolyTree",
                    "icon": "note",
                    "collapsible": true,
                    "children": [
                      {
                        "text": "PolyTree.Clear.md",
                        "link": "/document/ClipperDocCN/clipperlib/classes/PolyTree/PolyTree.Clear.md"
                      },
                      {
                        "text": "PolyTree.GetFirst.md",
                        "link": "/document/ClipperDocCN/clipperlib/classes/PolyTree/PolyTree.GetFirst.md"
                      },
                      {
                        "text": "PolyTree.md",
                        "link": "/document/ClipperDocCN/clipperlib/classes/PolyTree/PolyTree.md"
                      },
                      {
                        "text": "PolyTree.Total.md",
                        "link": "/document/ClipperDocCN/clipperlib/classes/PolyTree/PolyTree.Total.md"
                      }
                    ]
                  }
                ]
              },
              {
                "text": "clipperlib.md",
                "link": "/document/ClipperDocCN/clipperlib/clipperlib.md"
              },
              {
                "text": "functions",
                "icon": "note",
                "collapsible": true,
                "children": [
                  {
                    "text": "Area.md",
                    "link": "/document/ClipperDocCN/clipperlib/functions/Area.md"
                  },
                  {
                    "text": "CleanPolygon.md",
                    "link": "/document/ClipperDocCN/clipperlib/functions/CleanPolygon.md"
                  },
                  {
                    "text": "CleanPolygons.md",
                    "link": "/document/ClipperDocCN/clipperlib/functions/CleanPolygons.md"
                  },
                  {
                    "text": "ClosedPathsFromPolyTree.md",
                    "link": "/document/ClipperDocCN/clipperlib/functions/ClosedPathsFromPolyTree.md"
                  },
                  {
                    "text": "MinkowskiDiff.md",
                    "link": "/document/ClipperDocCN/clipperlib/functions/MinkowskiDiff.md"
                  },
                  {
                    "text": "MinkowskiSum.md",
                    "link": "/document/ClipperDocCN/clipperlib/functions/MinkowskiSum.md"
                  },
                  {
                    "text": "OpenPathsFromPolyTree.md",
                    "link": "/document/ClipperDocCN/clipperlib/functions/OpenPathsFromPolyTree.md"
                  },
                  {
                    "text": "Orientation.md",
                    "link": "/document/ClipperDocCN/clipperlib/functions/Orientation.md"
                  },
                  {
                    "text": "PointInPolygon.md",
                    "link": "/document/ClipperDocCN/clipperlib/functions/PointInPolygon.md"
                  },
                  {
                    "text": "PolyTreeToPaths.md",
                    "link": "/document/ClipperDocCN/clipperlib/functions/PolyTreeToPaths.md"
                  },
                  {
                    "text": "ReversePath.md",
                    "link": "/document/ClipperDocCN/clipperlib/functions/ReversePath.md"
                  },
                  {
                    "text": "ReversePaths.md",
                    "link": "/document/ClipperDocCN/clipperlib/functions/ReversePaths.md"
                  },
                  {
                    "text": "SimplifyPolygon.md",
                    "link": "/document/ClipperDocCN/clipperlib/functions/SimplifyPolygon.md"
                  },
                  {
                    "text": "SimplifyPolygons.md",
                    "link": "/document/ClipperDocCN/clipperlib/functions/SimplifyPolygons.md"
                  }
                ]
              },
              {
                "text": "Rounding.md",
                "link": "/document/ClipperDocCN/clipperlib/Rounding.md"
              },
              {
                "text": "types",
                "icon": "note",
                "collapsible": true,
                "children": [
                  {
                    "text": "cInt.md",
                    "link": "/document/ClipperDocCN/clipperlib/types/cInt.md"
                  },
                  {
                    "text": "ClipType.md",
                    "link": "/document/ClipperDocCN/clipperlib/types/ClipType.md"
                  },
                  {
                    "text": "EndType.md",
                    "link": "/document/ClipperDocCN/clipperlib/types/EndType.md"
                  },
                  {
                    "text": "InitOptions.md",
                    "link": "/document/ClipperDocCN/clipperlib/types/InitOptions.md"
                  },
                  {
                    "text": "IntPoint.md",
                    "link": "/document/ClipperDocCN/clipperlib/types/IntPoint.md"
                  },
                  {
                    "text": "IntRect.md",
                    "link": "/document/ClipperDocCN/clipperlib/types/IntRect.md"
                  },
                  {
                    "text": "JoinType.md",
                    "link": "/document/ClipperDocCN/clipperlib/types/JoinType.md"
                  },
                  {
                    "text": "Path.md",
                    "link": "/document/ClipperDocCN/clipperlib/types/Path.md"
                  },
                  {
                    "text": "Paths.md",
                    "link": "/document/ClipperDocCN/clipperlib/types/Paths.md"
                  },
                  {
                    "text": "PolyFillType.md",
                    "link": "/document/ClipperDocCN/clipperlib/types/PolyFillType.md"
                  },
                  {
                    "text": "PolyType.md",
                    "link": "/document/ClipperDocCN/clipperlib/types/PolyType.md"
                  },
                  {
                    "text": "ZFillFunction.md",
                    "link": "/document/ClipperDocCN/clipperlib/types/ZFillFunction.md"
                  }
                ]
              }
            ]
          },
          {
            "text": "目录.md",
            "link": "/document/ClipperDocCN/目录.md"
          },
          {
            "text": "简介.md",
            "link": "/document/ClipperDocCN/简介.md"
          }
        ]
      }
    ]
  },
  "footer": "\n      &copy; <a href=\"https://github.com/travelerBug\" target=\"_blank\">travelerBug</a> 2018-2022\n      <br>\n      Powered by <a href=\"https://v2.vuepress.vuejs.org\" target=\"_blank\">VuePress</a> &\n      <a href=\"https://github.com/Renovamen/vuepress-theme-gungnir\" target=\"_blank\">Gungnir</a>\n    ",
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "catalog": true,
  "blogNumPerPage": 10,
  "searchIcon": "ri-search-2-line",
  "langIcon": "hi-translate",
  "sidebarDepth": 2,
  "editLink": true,
  "lastUpdated": true,
  "contributors": false,
  "navbarTitle": "$ cd /home/",
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLinkText": "Edit this page on GitHub",
  "lastUpdatedText": "Last Updated",
  "contributorsText": "Contributors",
  "searchText": "Search",
  "info": "INFO",
  "tip": "TIP",
  "warning": "WARNING",
  "danger": "DANGER",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "$ cd /home/",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar",
  "pageText": {
    "tags": "Tags",
    "links": "Links"
  },
  "showAllTagsText": "Show All",
  "postNext": "Next",
  "postPrev": "Previous",
  "homeNext": "← Newer Posts",
  "homePrev": "Older Posts →",
  "pwaPopupMessage": "New content is available.",
  "pwaPopupButtonText": "Refresh",
  "headerImageCredit": "Image by",
  "search": true
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
