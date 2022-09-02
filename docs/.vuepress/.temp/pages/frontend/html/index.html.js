export const data = {
  "key": "v-deb89240",
  "path": "/frontend/html/",
  "title": "前端笔记",
  "lang": "en-US",
  "frontmatter": {
    "title": "前端笔记",
    "index": false,
    "icon": "creative",
    "category": [
      "使用指南"
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "目录",
      "slug": "目录",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 1,
    "words": 25
  },
  "filePathRelative": "frontend/html/README.md"
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
