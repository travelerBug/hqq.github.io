export const data = {
  "key": "v-0f9d8622",
  "path": "/graphics/%E5%A4%9A%E8%BE%B9%E5%BD%A2/test.html",
  "title": "我是测试",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "readingTime": {
    "minutes": 1,
    "words": 4
  },
  "filePathRelative": "graphics/多边形/test.md"
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
