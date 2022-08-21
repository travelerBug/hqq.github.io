


博客是 [VuePress 2](https://v2.vuepress.vuejs.org/) 和主题 [Gungnir](https://github.com/Renovamen/vuepress-theme-gungnir). 

[主题的官方文档](https://v2-vuepress-theme-gungnir.vercel.app/zh/docs)

## Usage

Clone the repo and install dependencies:

```bash
pnpm i
```

Start developing the site:

```bash
pnpm dev
```

Build for production with minification:

```bash
pnpm build
```

&nbsp;

### 简单配置一下

>  **具体配置参考[主题的官方文档](https://v2-vuepress-theme-gungnir.vercel.app/zh/docs)**

### 导航栏

- 注：这里参数没有“prefix” 所以“link”的路径要写全一些

```ts
export default [  {
    text: "主页",
    link: "/",
    icon: "fa-fort-awesome"
  },
  {
    text: "前端",
    children: [
      {
        text: "Vue",
        link: "/frontend/vue",
      }
    ]
  },
  ]
```

### 侧边栏

> 注：动态生成好操作

```
import getContent from "./utls/gen-side";
export default {

  "/back/go": [
    {
      text: "Go语言",
      icon: "note",
      // prefix: "/back/go/",
      children: getContent("/back/go/")
    }
  ],
  "/frontend/vue": [
    {
      text: "Vue3",
      icon: "note",
      // prefix: "/frontend/vue/",
      children: getContent("/frontend/vue/")
    }
  ],
}
```



### 关闭评论功能

```
//.vuepress下主题里面的
themePlugins: {
//注释掉
// giscus： {}

}
```



### 主页 下面的文章替换

### Front Matter

>1. `title` 会作为一级标题在博客中显示，所以**不需要在博客正文中写一级标题**。
>
>2. `front-matter` 中有 `tags` 项的博客会在[标签页](https://v2-vuepress-theme-gungnir.vercel.app/tags/)显示。

```yaml
---
layout: Post  # 必须
title: 时间简史  # 博客标题（必须）
subtitle: 从大爆炸到黑洞  # 博客副标题（可选）
date: 2020-03-31  # 博客发表日期（可选）
author: 斯蒂芬·霍金  # 博客作者（可选，不填的话会使用 `themeConfig.personalInfo.name`）
useHeaderImage: true  # 是否在博客中显示封面图（可选，默认：false）
headerImage: /img/test.jpg  # 博客封面图（必须，即使上一项选了 false，因为图片也需要在首页显示）
headerMask: rgba(40, 57, 101, .4)  # 封面图遮罩（可选）
headerImageCredit: Jeremy Fenske  # 图片来源，比如图片作者的名字（可选，只在 "useHeaderImage: true" 时有效）
headerImageCreditLink: https://www.artstation.com/artwork/nLY0K  # 图片来源的链接（可选，只在 "useHeaderImage: true" 时有效）
catalog: true  # 启用/禁用当前页的右侧目录，会覆写 `themeConfig.catalog`（可选，默认：true）
giscus: false  # 启用/禁用当前页的 Giscus 评论（可选，默认：true）
hide: true  # 是否在首页和标签页博客列表中隐藏这篇博客（可选，默认：false）
tags:  # 博客标签（可选）
  - 宇宙
  - 物理
---
```

### 个人信息替换

```
//.vuepress下主题里面的
personalInfo: {
	
        // 必须：名称，将在首页、移动端侧边栏和文章作者信息处显示
        name: "travelerBug",
        // 必须：头像，将在首页和移动端侧边栏显示
        avatar: "/img/avatar.jpg",
        // 必须：个人简介，将在首页显示
        description: "所有的内心忧虑都源于知识储备不足",
        sns: {
            github: "travelerBug",
            // 添加其他的社交平台
            bilibili: {  // 随便什么名字
                icon: "ri-bilibili-fill",  // 社交平台的图标
                link: "https://www.bilibili.com/"  // 主页链接
            }
            ,
            // 添加其他的社交平台
            wechat: {  // 随便什么名字
                icon: "ri-wechat-fill",  // 社交平台的图标
                link: "img/wechat.jpg"  // 
            }
        }
}
```



