export const data = {
  "key": "v-5399d0e2",
  "path": "/tools/typora/",
  "title": "cocos笔记",
  "lang": "en-US",
  "frontmatter": {
    "title": "cocos笔记",
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
    "words": 6
  },
  "filePathRelative": "tools/typora/README.md"
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
