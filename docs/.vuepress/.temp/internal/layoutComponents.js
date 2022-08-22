import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("F:/EarnMoney/MyCompany/github/blog/vuepress/node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.24_sass-loader@13.0.0/node_modules/vuepress-theme-gungnir/lib/client/layouts/404.vue")),
  "HomePage": defineAsyncComponent(() => import("F:/EarnMoney/MyCompany/github/blog/vuepress/node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.24_sass-loader@13.0.0/node_modules/vuepress-theme-gungnir/lib/client/layouts/HomePage.vue")),
  "Layout": defineAsyncComponent(() => import("F:/EarnMoney/MyCompany/github/blog/vuepress/node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.24_sass-loader@13.0.0/node_modules/vuepress-theme-gungnir/lib/client/layouts/Layout.vue")),
  "Links": defineAsyncComponent(() => import("F:/EarnMoney/MyCompany/github/blog/vuepress/node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.24_sass-loader@13.0.0/node_modules/vuepress-theme-gungnir/lib/client/layouts/Links.vue")),
  "Post": defineAsyncComponent(() => import("F:/EarnMoney/MyCompany/github/blog/vuepress/node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.24_sass-loader@13.0.0/node_modules/vuepress-theme-gungnir/lib/client/layouts/Post.vue")),
  "Tags": defineAsyncComponent(() => import("F:/EarnMoney/MyCompany/github/blog/vuepress/node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.24_sass-loader@13.0.0/node_modules/vuepress-theme-gungnir/lib/client/layouts/Tags.vue")),
}
