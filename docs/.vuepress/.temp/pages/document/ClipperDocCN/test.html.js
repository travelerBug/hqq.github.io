export const data = {
  "key": "v-942d5bee",
  "path": "/document/ClipperDocCN/test.html",
  "title": "我是测试",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "readingTime": {
    "minutes": 1,
    "words": 4
  },
  "filePathRelative": "document/ClipperDocCN/test.md"
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
