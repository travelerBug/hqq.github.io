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
      "children": []
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