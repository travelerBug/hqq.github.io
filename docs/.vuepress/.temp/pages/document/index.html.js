export const data = {
  "key": "v-36b1a79b",
  "path": "/document/",
  "title": "docs",
  "lang": "en-US",
  "frontmatter": {
    "title": "docs",
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
    "words": 2
  },
  "filePathRelative": "document/README.md"
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
