import { link } from "fs";
import { gungnirTheme } from "vuepress-theme-gungnir";
import navbar from "./navbar";
import sidebar from "./sidebar";

const isProd = process.env.NODE_ENV === "production";

export default gungnirTheme({
    //项目仓库的 URL。
    repo: "travelerBug/blog",
    //文档源文件存放在仓库中的目录名。它将会用于生成 编辑此页 的链接
    docsDir: "blog",
    //文档源文件的仓库分支。它将会用于生成 编辑此页 的链接
    docsBranch: "master",

    //主页上的头像将鼠标悬浮在头像上气泡就会显示出来
    hitokoto: "https://v1.hitokoto.cn?c=i", // enable hitokoto (一言) or not?
    // hitokoto: true, // enable hitokoto (一言) or not?

    // personal information
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
            // linkedin: "xiaohan-zou",
            // facebook: "renovamen.zou",
            // twitter: "renovamen_zxh",
            // zhihu: "chao-neng-gui-su",
            // email: "renovamenzxh@gmail.com",
            // rss: "/rss.xml"
        }
    },

    // header images on home page
    homeHeaderImages: [
        {
            path: "/img/home-bg/1.jpg",
            mask: "rgba(40, 57, 101, .4)"
        },
        {
            path: "/img/home-bg/2.jpg",
            mask: "rgba(196, 176, 131, .1)"
        },
        {
            path: "/img/home-bg/3.jpg",
            mask: "rgba(68, 74, 83, .1)"
        },
        {
            path: "/img/home-bg/4.jpg",
            mask: "rgba(19, 75, 50, .2)"
        },
        {
            path: "/img/home-bg/5.jpg"
        }
    ],

    // other pages
    pages: {
        // 标签页配置
        tags: {
            subtitle: "Black Sheep Wall",
            bgImage: {
                path: "/img/pages/tags.jpg",
                mask: "rgba(211, 136, 37, .5)"
            }
        },
        // links: {
        //     subtitle:
        //         "When you are looking at the stars, please put the brightest star shining night sky as my soul.",
        //     bgImage: {
        //         path: "/img/pages/links.jpg",
        //         mask: "rgba(64, 118, 190, 0.5)"
        //     }
        // }
    },

    themePlugins: {
        // only enable git plugin in production mode
        git: isProd,
        katex: true,
        //关闭评论
        // giscus: {
        //     repo: "This-is-an-Apple/blog-giscus-comments",
        //     repoId: "R_kgDOGl2SjQ",
        //     category: "Announcements",
        //     categoryId: "DIC_kwDOGl2Sjc4CAcxK",
        //     darkTheme: "https://blog.zxh.io/styles/giscus-dark.css"
        // },
        mdPlus: {
            all: true
        },
        ga: "G-HCQSX53XFG",
        ba: "75381d210789d3eaf855fa16246860cc",
        rss: {
            siteURL: "https://blog.zxh.io",
            copyright: "travelerBug 2018-2022"
        }
    },

    navbar,
    sidebar,
    // catalog: true,

    footer: `
      &copy; <a href="https://github.com/travelerBug" target="_blank">travelerBug</a> 2018-2022
      <br>
      Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `
})