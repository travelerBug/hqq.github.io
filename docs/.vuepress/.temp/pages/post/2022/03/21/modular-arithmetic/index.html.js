export const data = {
  "key": "v-5c15bc23",
  "path": "/post/2022/03/21/modular-arithmetic/",
  "title": "同余运算",
  "lang": "en-US",
  "frontmatter": {
    "layout": "Post",
    "title": "同余运算",
    "subtitle": "Modular Arithmetic",
    "author": "Renovamen",
    "date": "2022-03-21T00:00:00.000Z",
    "headerImage": "/img/in-post/2022-03-21/header.jpeg",
    "permalinkPattern": "/post/:year/:month/:day/:slug/",
    "catalog": true,
    "hide": true,
    "tags": [
      "Math",
      "Cryptography"
    ]
  },
  "excerpt": "<p>在 CS 538 密码学彻底躺平之后的一次记录。</p>\n",
  "headers": [
    {
      "level": 2,
      "title": "基础",
      "slug": "基础",
      "children": [
        {
          "level": 3,
          "title": "整除",
          "slug": "整除",
          "children": []
        },
        {
          "level": 3,
          "title": "余数",
          "slug": "余数",
          "children": []
        },
        {
          "level": 3,
          "title": "同余",
          "slug": "同余",
          "children": []
        }
      ]
    }
  ],
  "readingTime": {
    "minutes": 3,
    "words": 486
  },
  "filePathRelative": "posts/2022-03-21-modular-arithmetic.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
