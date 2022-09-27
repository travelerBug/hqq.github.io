export const data = {
  "key": "v-d1926f2e",
  "path": "/docs/ClipperDocCN/test.html",
  "title": "我是测试",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "readingTime": {
    "minutes": 1,
    "words": 4
  },
  "filePathRelative": "docs/ClipperDocCN/test.md"
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
