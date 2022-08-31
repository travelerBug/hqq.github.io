export const data = {
  "key": "v-72b9d083",
  "path": "/post/2021/07/27/fisher-information-matrix/",
  "title": "Fisher 信息矩阵",
  "lang": "en-US",
  "frontmatter": {
    "layout": "Post",
    "title": "Fisher 信息矩阵",
    "subtitle": "Fisher Information Matrix",
    "author": "Renovamen",
    "date": "2021-07-27T00:00:00.000Z",
    "headerImage": "/img/in-post/2021-07-27/header.jpeg",
    "permalinkPattern": "/post/:year/:month/:day/:slug/",
    "tags": [
      "Machine Learning",
      "Math"
    ]
  },
  "excerpt": "<p>Fisher 信息矩阵的数学意义和直观上的理解。</p>\n",
  "headers": [
    {
      "level": 2,
      "title": "定义",
      "slug": "定义",
      "children": []
    },
    {
      "level": 2,
      "title": "数学意义",
      "slug": "数学意义",
      "children": [
        {
          "level": 3,
          "title": "Score Function 的方差",
          "slug": "score-function-的方差",
          "children": []
        },
        {
          "level": 3,
          "title": "海森矩阵的期望",
          "slug": "海森矩阵的期望",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "参考",
      "slug": "参考",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 5,
    "words": 934
  },
  "filePathRelative": "posts/2021-07-27-fisher-information-matrix.md"
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
