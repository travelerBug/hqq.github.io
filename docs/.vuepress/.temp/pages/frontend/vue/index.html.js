export const data = {
  "key": "v-38aee226",
  "path": "/frontend/vue/",
  "title": "Vue",
  "lang": "en-US",
  "frontmatter": {
    "title": "Vue",
    "icon": "creative",
    "category": [
      "使用指南"
    ]
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "frontend/vue/README.md"
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
