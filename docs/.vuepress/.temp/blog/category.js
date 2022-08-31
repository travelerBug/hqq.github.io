export const categoryMap = {"tag":{"/":{"path":"/tags/","map":{"摸鱼":{"path":"/tags/%E6%91%B8%E9%B1%BC/","keys":["v-44755bac","v-9728b424","v-4b441409","v-6acef3fe"]},"Machine Learning":{"path":"/tags/machine-learning/","keys":["v-35b0adfe","v-72b9d083","v-0abd0086","v-ef15f804"]},"Bayesian":{"path":"/tags/bayesian/","keys":["v-ef15f804"]},"Math":{"path":"/tags/math/","keys":["v-72b9d083"]},"Deep Learning":{"path":"/tags/deep-learning/","keys":["v-7f60f4e6"]}}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}
