export const data = {
  "key": "v-7f60f4e6",
  "path": "/post/2021/08/31/attention-conv/",
  "title": "Attention / Conv 大锅烩",
  "lang": "en-US",
  "frontmatter": {
    "layout": "Post",
    "title": "Attention / Conv 大锅烩",
    "subtitle": "Self-Attentions and Convolutions",
    "author": "Renovamen",
    "date": "2021-08-31T00:00:00.000Z",
    "headerImage": "/img/in-post/2021-08-31/header.jpg",
    "permalinkPattern": "/post/:year/:month/:day/:slug/",
    "tags": [
      "Deep Learning"
    ]
  },
  "excerpt": "<p>长期记录和实现看过的各种论文里的自注意力和卷积机制，咕咕咕，实现地址在：<a href=\"https://github.com/Renovamen/torchop\" target=\"_blank\" rel=\"noopener noreferrer\"><v-icon name=\"ri-link-m\" scale=\"0.9\"/> Github</a></p>\n",
  "headers": [
    {
      "level": 2,
      "title": "Attention",
      "slug": "attention",
      "children": [
        {
          "level": 3,
          "title": "Self-Attenion",
          "slug": "self-attenion",
          "children": []
        },
        {
          "level": 3,
          "title": "SAGAN",
          "slug": "sagan",
          "children": []
        },
        {
          "level": 3,
          "title": "External Attention",
          "slug": "external-attention",
          "children": []
        },
        {
          "level": 3,
          "title": "Fastformer",
          "slug": "fastformer",
          "children": []
        },
        {
          "level": 3,
          "title": "HaloNets",
          "slug": "halonets",
          "children": []
        },
        {
          "level": 3,
          "title": "Linformer",
          "slug": "linformer",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Convolution",
      "slug": "convolution",
      "children": [
        {
          "level": 3,
          "title": "Selective Kernel",
          "slug": "selective-kernel",
          "children": []
        },
        {
          "level": 3,
          "title": "Squeeze-and-Excitation",
          "slug": "squeeze-and-excitation",
          "children": []
        },
        {
          "level": 3,
          "title": "Involution",
          "slug": "involution",
          "children": []
        }
      ]
    }
  ],
  "readingTime": {
    "minutes": 15,
    "words": 3288
  },
  "filePathRelative": "posts/2021-08-31-attention-conv.md"
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
