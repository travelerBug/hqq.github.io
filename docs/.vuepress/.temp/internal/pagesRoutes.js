import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-145598cf","/back/",{"title":"后端笔记"},["/back/index.html","/back/README.md"]],
  ["v-06198984","/frontend/",{"title":"前端笔记"},["/frontend/index.html","/frontend/README.md"]],
  ["v-6acef3fe","/post/2020/10/07/my-blog/",{"title":"关于博客的碎碎念","subtitle":"部署、优化以及乱七八糟的事","date":"2020-10-07T00:00:00.000Z","tags":["摸鱼"],"headerImage":"/img/in-post/2020-10-07/header.jpg","excerpt":"<p>“虽然研究进度堪忧，但鱼还是要摸的”，在这样的理念的驱动下，菜鸡最终折腾出了一个目前看上去还算可以的方案。</p>\n"},["/post/2020/10/07/my-blog/index.html","/posts/2020-10-07-my-blog.html","/posts/2020-10-07-my-blog.md"]],
  ["v-4b441409","/post/2021/01/01/new-year/",{"title":"新年快乐","subtitle":"Happy New Year 2021","date":"2021-01-01T00:00:00.000Z","tags":["摸鱼"],"headerImage":"/img/in-post/2021-01-01/header.jpg","excerpt":"<p>太长不看版：顺位第一的新年愿望是能成为一个温暖的人类，如果这个愿望今年无法实现，那就先当一个正常一些的人类吧。</p>\n"},["/post/2021/01/01/new-year/index.html","/posts/2021-01-01-new-year.html","/posts/2021-01-01-new-year.md"]],
  ["v-52e160df","/post/2021/01/28/lets-talk-about-pytorch/",{"title":"凌乱的 PyTorch 笔记","subtitle":"PyTorch 能有什么坏心思呢","date":"2021-01-28T00:00:00.000Z","tags":["Deep Learning"],"headerImage":"/img/in-post/2021-01-28/header.jpg","excerpt":"<p>记录一些 PyTorch 的细节。</p>\n"},["/post/2021/01/28/lets-talk-about-pytorch/index.html","/posts/2021-01-28-lets-talk-about-pytorch.html","/posts/2021-01-28-lets-talk-about-pytorch.md"]],
  ["v-ef15f804","/post/2021/04/26/pc-algorithm/",{"title":"PC 算法","subtitle":"贝叶斯网络与其结构学习算法","date":"2021-04-26T00:00:00.000Z","tags":["Machine Learning","Bayesian"],"headerImage":"/img/in-post/2021-04-26/header.jpg","excerpt":"<p>把大三的时候在实验室摸鱼看贝叶斯网络和 PC 算法时写的笔记整理到这里来，免得哪天我换电脑时把笔记搞没了。</p>\n"},["/post/2021/04/26/pc-algorithm/index.html","/posts/2021-04-26-pc-algorithm.html","/posts/2021-04-26-pc-algorithm.md"]],
  ["v-0abd0086","/post/2021/06/12/svm/",{"title":"支持向量机","subtitle":"Support Vector Machine (SVM)","date":"2021-06-12T00:00:00.000Z","tags":["Machine Learning"],"headerImage":"/img/in-post/2021-06-12/header.jpg","excerpt":"<p>SVM（Support Vector Machine，支持向量机）是一种二类分类模型，目标是在特征空间上找到间隔最大化的超平面。</p>\n"},["/post/2021/06/12/svm/index.html","/posts/2021-06-12-svm.html","/posts/2021-06-12-svm.md"]],
  ["v-72b9d083","/post/2021/07/27/fisher-information-matrix/",{"title":"Fisher 信息矩阵","subtitle":"Fisher Information Matrix","date":"2021-07-27T00:00:00.000Z","tags":["Machine Learning","Math"],"headerImage":"/img/in-post/2021-07-27/header.jpeg","excerpt":"<p>Fisher 信息矩阵的数学意义和直观上的理解。</p>\n"},["/post/2021/07/27/fisher-information-matrix/index.html","/posts/2021-07-27-fisher-information-matrix.html","/posts/2021-07-27-fisher-information-matrix.md"]],
  ["v-35b0adfe","/post/2021/07/28/natural-gradient/",{"title":"自然梯度下降","subtitle":"Natural Gradient Decent","date":"2021-07-28T00:00:00.000Z","tags":["Machine Learning"],"headerImage":"/img/in-post/2021-07-28/header.jpeg","excerpt":"<p>自然梯度下降（Natural Gradient Decent）把参数看成一种概率分布，然后使用 KL 散度而不是欧氏距离来作为距离的度量，从而更好地描述更新后的分布和原分布有多大的不同。</p>\n"},["/post/2021/07/28/natural-gradient/index.html","/posts/2021-07-28-natural-gradient.html","/posts/2021-07-28-natural-gradient.md"]],
  ["v-7f60f4e6","/post/2021/08/31/attention-conv/",{"title":"Attention / Conv 大锅烩","subtitle":"Self-Attentions and Convolutions","date":"2021-08-31T00:00:00.000Z","tags":["Deep Learning"],"headerImage":"/img/in-post/2021-08-31/header.jpg","excerpt":"<p>长期记录和实现看过的各种论文里的自注意力和卷积机制，咕咕咕，实现地址在：<a href=\"https://github.com/Renovamen/torchop\" target=\"_blank\" rel=\"noopener noreferrer\"><v-icon name=\"ri-link-m\" scale=\"0.9\"/> Github</a></p>\n"},["/post/2021/08/31/attention-conv/index.html","/posts/2021-08-31-attention-conv.html","/posts/2021-08-31-attention-conv.md"]],
  ["v-9728b424","/post/2022/01/29/travel-to-boston/",{"title":"波士顿漫游指南","subtitle":"How to Travel to Boston","date":"2022-01-29T00:00:00.000Z","tags":["摸鱼"],"headerImage":"/img/in-post/2022-01-29/header.jpeg","excerpt":"<p>在 gap 了一年，又上了一学期网课以后，我终于来了波士顿。</p>\n"},["/post/2022/01/29/travel-to-boston/index.html","/posts/2022-01-29-travel-to-boston.html","/posts/2022-01-29-travel-to-boston.md"]],
  ["v-44755bac","/post/2022/02/21/new-year-2022/",{"title":"2022 新年快乐","subtitle":"Gap Year 的结束，摸鱼与快乐","date":"2022-02-21T00:00:00.000Z","tags":["摸鱼"],"headerImage":"/img/in-post/2022-02-21/header.jpeg","excerpt":"<p>不管是按公历新年，还是按中国新年，在这个点说新年快乐都显得格格不入，<s>但反正也没人看也就无所谓了</s>。</p>\n"},["/post/2022/02/21/new-year-2022/index.html","/posts/2022-02-21-new-year-2022.html","/posts/2022-02-21-new-year-2022.md"]],
  ["v-5c15bc23","/post/2022/03/21/modular-arithmetic/",{"title":"同余运算"},["/post/2022/03/21/modular-arithmetic/index.html","/posts/2022-03-21-modular-arithmetic.html","/posts/2022-03-21-modular-arithmetic.md"]],
  ["v-1cd6e036","/posts/%E6%B5%8B%E8%AF%95%E4%B8%BB%E9%A1%B5%E6%91%98%E8%A6%81.html",{"title":"测试"},["/posts/测试主页摘要.html","/posts/%E6%B5%8B%E8%AF%95%E4%B8%BB%E9%A1%B5%E6%91%98%E8%A6%81","/posts/测试主页摘要.md","/posts/%E6%B5%8B%E8%AF%95%E4%B8%BB%E9%A1%B5%E6%91%98%E8%A6%81.md"]],
  ["v-d440f426","/tools/",{"title":"开发工具"},["/tools/index.html","/tools/README.md"]],
  ["v-55031118","/back/go/",{"title":"后端笔记"},["/back/go/index.html","/back/go/README.md"]],
  ["v-20e6a2fe","/back/node/",{"title":"node笔记"},["/back/node/index.html","/back/node/README.md"]],
  ["v-5979ce30","/frontend/vue/1-vue3%E7%AE%80%E4%BB%8B.html",{"title":""},["/frontend/vue/1-vue3简介.html","/frontend/vue/1-vue3%E7%AE%80%E4%BB%8B","/frontend/vue/1-vue3简介.md","/frontend/vue/1-vue3%E7%AE%80%E4%BB%8B.md"]],
  ["v-38aee226","/frontend/vue/",{"title":"Vue"},["/frontend/vue/index.html","/frontend/vue/README.md"]],
  ["v-4c3a4f6e","/back/go/1-%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83/Git%E5%AE%89%E8%A3%85.html",{"title":"1. Git安装"},["/back/go/1-开发环境/Git安装.html","/back/go/1-%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83/Git%E5%AE%89%E8%A3%85","/back/go/1-开发环境/Git安装.md","/back/go/1-%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83/Git%E5%AE%89%E8%A3%85.md"]],
  ["v-246057f2","/back/go/1-%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83/GoLand%E7%BC%96%E8%BE%91%E5%99%A8.html",{"title":""},["/back/go/1-开发环境/GoLand编辑器.html","/back/go/1-%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83/GoLand%E7%BC%96%E8%BE%91%E5%99%A8","/back/go/1-开发环境/GoLand编辑器.md","/back/go/1-%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83/GoLand%E7%BC%96%E8%BE%91%E5%99%A8.md"]],
  ["v-637bfdc6","/back/go/1-%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83/Go%E7%9A%84%E5%AE%89%E8%A3%85.html",{"title":"1. Go的安装"},["/back/go/1-开发环境/Go的安装.html","/back/go/1-%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83/Go%E7%9A%84%E5%AE%89%E8%A3%85","/back/go/1-开发环境/Go的安装.md","/back/go/1-%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83/Go%E7%9A%84%E5%AE%89%E8%A3%85.md"]],
  ["v-7801e2df","/back/go/1-%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83/%E7%BC%96%E8%BE%91%E5%99%A8.html",{"title":"1. 编辑器"},["/back/go/1-开发环境/编辑器.html","/back/go/1-%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83/%E7%BC%96%E8%BE%91%E5%99%A8","/back/go/1-开发环境/编辑器.md","/back/go/1-%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83/%E7%BC%96%E8%BE%91%E5%99%A8.md"]],
  ["v-4e2214e3","/back/go/1-%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83/%E9%85%8D%E7%BD%AEGOPATH.html",{"title":"1. 配置GOPATH"},["/back/go/1-开发环境/配置GOPATH.html","/back/go/1-%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83/%E9%85%8D%E7%BD%AEGOPATH","/back/go/1-开发环境/配置GOPATH.md","/back/go/1-%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83/%E9%85%8D%E7%BD%AEGOPATH.md"]],
  ["v-5fd7deed","/back/go/2-go%E5%9F%BA%E7%A1%80/1-%E8%AF%AD%E8%A8%80%E7%9A%84%E4%B8%BB%E8%A6%81%E7%89%B9%E5%BE%81.html",{"title":"1. Go语言的主要特征"},["/back/go/2-go基础/1-语言的主要特征.html","/back/go/2-go%E5%9F%BA%E7%A1%80/1-%E8%AF%AD%E8%A8%80%E7%9A%84%E4%B8%BB%E8%A6%81%E7%89%B9%E5%BE%81","/back/go/2-go基础/1-语言的主要特征.md","/back/go/2-go%E5%9F%BA%E7%A1%80/1-%E8%AF%AD%E8%A8%80%E7%9A%84%E4%B8%BB%E8%A6%81%E7%89%B9%E5%BE%81.md"]],
  ["v-c7290f9e","/back/go/2-go%E5%9F%BA%E7%A1%80/10-%E6%8C%87%E9%92%88.html",{"title":"1. 指针"},["/back/go/2-go基础/10-指针.html","/back/go/2-go%E5%9F%BA%E7%A1%80/10-%E6%8C%87%E9%92%88","/back/go/2-go基础/10-指针.md","/back/go/2-go%E5%9F%BA%E7%A1%80/10-%E6%8C%87%E9%92%88.md"]],
  ["v-7eb39313","/back/go/2-go%E5%9F%BA%E7%A1%80/11-%E7%BB%93%E6%9E%84%E4%BD%93.html",{"title":"1. 结构体"},["/back/go/2-go基础/11-结构体.html","/back/go/2-go%E5%9F%BA%E7%A1%80/11-%E7%BB%93%E6%9E%84%E4%BD%93","/back/go/2-go基础/11-结构体.md","/back/go/2-go%E5%9F%BA%E7%A1%80/11-%E7%BB%93%E6%9E%84%E4%BD%93.md"]],
  ["v-2e6bd9e8","/back/go/2-go%E5%9F%BA%E7%A1%80/12-%E5%88%87%E7%89%87.html",{"title":""},["/back/go/2-go基础/12-切片.html","/back/go/2-go%E5%9F%BA%E7%A1%80/12-%E5%88%87%E7%89%87","/back/go/2-go基础/12-切片.md","/back/go/2-go%E5%9F%BA%E7%A1%80/12-%E5%88%87%E7%89%87.md"]],
  ["v-3af42e6c","/back/go/2-go%E5%9F%BA%E7%A1%80/13-Map.html",{"title":""},["/back/go/2-go基础/13-Map.html","/back/go/2-go%E5%9F%BA%E7%A1%80/13-Map","/back/go/2-go基础/13-Map.md","/back/go/2-go%E5%9F%BA%E7%A1%80/13-Map.md"]],
  ["v-72da2f22","/back/go/2-go%E5%9F%BA%E7%A1%80/14-%E6%8E%A5%E5%8F%A3.html",{"title":""},["/back/go/2-go基础/14-接口.html","/back/go/2-go%E5%9F%BA%E7%A1%80/14-%E6%8E%A5%E5%8F%A3","/back/go/2-go基础/14-接口.md","/back/go/2-go%E5%9F%BA%E7%A1%80/14-%E6%8E%A5%E5%8F%A3.md"]],
  ["v-0fc973a4","/back/go/2-go%E5%9F%BA%E7%A1%80/2-%E5%86%85%E7%BD%AE%E7%B1%BB%E5%9E%8B%E5%92%8C%E5%86%85%E7%BD%AE%E5%87%BD%E6%95%B0.html",{"title":"1. Golang内置类型和函数"},["/back/go/2-go基础/2-内置类型和内置函数.html","/back/go/2-go%E5%9F%BA%E7%A1%80/2-%E5%86%85%E7%BD%AE%E7%B1%BB%E5%9E%8B%E5%92%8C%E5%86%85%E7%BD%AE%E5%87%BD%E6%95%B0","/back/go/2-go基础/2-内置类型和内置函数.md","/back/go/2-go%E5%9F%BA%E7%A1%80/2-%E5%86%85%E7%BD%AE%E7%B1%BB%E5%9E%8B%E5%92%8C%E5%86%85%E7%BD%AE%E5%87%BD%E6%95%B0.md"]],
  ["v-832d4182","/back/go/2-go%E5%9F%BA%E7%A1%80/3-Init%E5%87%BD%E6%95%B0%E5%92%8Cmain%E5%87%BD%E6%95%B0.html",{"title":"1. Init函数和main函数"},["/back/go/2-go基础/3-Init函数和main函数.html","/back/go/2-go%E5%9F%BA%E7%A1%80/3-Init%E5%87%BD%E6%95%B0%E5%92%8Cmain%E5%87%BD%E6%95%B0","/back/go/2-go基础/3-Init函数和main函数.md","/back/go/2-go%E5%9F%BA%E7%A1%80/3-Init%E5%87%BD%E6%95%B0%E5%92%8Cmain%E5%87%BD%E6%95%B0.md"]],
  ["v-2031f6d6","/back/go/2-go%E5%9F%BA%E7%A1%80/4-go%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html",{"title":"1. 命令"},["/back/go/2-go基础/4-go常用命令.html","/back/go/2-go%E5%9F%BA%E7%A1%80/4-go%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4","/back/go/2-go基础/4-go常用命令.md","/back/go/2-go%E5%9F%BA%E7%A1%80/4-go%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.md"]],
  ["v-3308a929","/back/go/2-go%E5%9F%BA%E7%A1%80/5-%E8%BF%90%E7%AE%97%E7%AC%A6.html",{"title":"1. 运算符"},["/back/go/2-go基础/5-运算符.html","/back/go/2-go%E5%9F%BA%E7%A1%80/5-%E8%BF%90%E7%AE%97%E7%AC%A6","/back/go/2-go基础/5-运算符.md","/back/go/2-go%E5%9F%BA%E7%A1%80/5-%E8%BF%90%E7%AE%97%E7%AC%A6.md"]],
  ["v-ebf3fcd4","/back/go/2-go%E5%9F%BA%E7%A1%80/6-%E4%B8%8B%E5%88%92%E7%BA%BF.html",{"title":"1. 下划线"},["/back/go/2-go基础/6-下划线.html","/back/go/2-go%E5%9F%BA%E7%A1%80/6-%E4%B8%8B%E5%88%92%E7%BA%BF","/back/go/2-go基础/6-下划线.md","/back/go/2-go%E5%9F%BA%E7%A1%80/6-%E4%B8%8B%E5%88%92%E7%BA%BF.md"]],
  ["v-0eb373d3","/back/go/2-go%E5%9F%BA%E7%A1%80/7-%E5%8F%98%E9%87%8F%E5%92%8C%E5%B8%B8%E9%87%8F.html",{"title":"1. 变量和常量"},["/back/go/2-go基础/7-变量和常量.html","/back/go/2-go%E5%9F%BA%E7%A1%80/7-%E5%8F%98%E9%87%8F%E5%92%8C%E5%B8%B8%E9%87%8F","/back/go/2-go基础/7-变量和常量.md","/back/go/2-go%E5%9F%BA%E7%A1%80/7-%E5%8F%98%E9%87%8F%E5%92%8C%E5%B8%B8%E9%87%8F.md"]],
  ["v-f5ef6114","/back/go/2-go%E5%9F%BA%E7%A1%80/8-%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B.html",{"title":"1. 基本类型"},["/back/go/2-go基础/8-基本类型.html","/back/go/2-go%E5%9F%BA%E7%A1%80/8-%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B","/back/go/2-go基础/8-基本类型.md","/back/go/2-go%E5%9F%BA%E7%A1%80/8-%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B.md"]],
  ["v-14cba47b","/back/go/2-go%E5%9F%BA%E7%A1%80/9-%E6%95%B0%E7%BB%84Array.html",{"title":"1. 数组Array"},["/back/go/2-go基础/9-数组Array.html","/back/go/2-go%E5%9F%BA%E7%A1%80/9-%E6%95%B0%E7%BB%84Array","/back/go/2-go基础/9-数组Array.md","/back/go/2-go%E5%9F%BA%E7%A1%80/9-%E6%95%B0%E7%BB%84Array.md"]],
  ["v-1f5c8fee","/back/go/3-%E6%B5%81%E7%A8%8B%E6%8E%A7%E5%88%B6/1-%E6%9D%A1%E4%BB%B6%E8%AF%AD%E5%8F%A5if.html",{"title":""},["/back/go/3-流程控制/1-条件语句if.html","/back/go/3-%E6%B5%81%E7%A8%8B%E6%8E%A7%E5%88%B6/1-%E6%9D%A1%E4%BB%B6%E8%AF%AD%E5%8F%A5if","/back/go/3-流程控制/1-条件语句if.md","/back/go/3-%E6%B5%81%E7%A8%8B%E6%8E%A7%E5%88%B6/1-%E6%9D%A1%E4%BB%B6%E8%AF%AD%E5%8F%A5if.md"]],
  ["v-05d67fd3","/back/go/3-%E6%B5%81%E7%A8%8B%E6%8E%A7%E5%88%B6/2-%E6%9D%A1%E4%BB%B6%E8%AF%AD%E5%8F%A5switch.html",{"title":"1. 条件语句switch"},["/back/go/3-流程控制/2-条件语句switch.html","/back/go/3-%E6%B5%81%E7%A8%8B%E6%8E%A7%E5%88%B6/2-%E6%9D%A1%E4%BB%B6%E8%AF%AD%E5%8F%A5switch","/back/go/3-流程控制/2-条件语句switch.md","/back/go/3-%E6%B5%81%E7%A8%8B%E6%8E%A7%E5%88%B6/2-%E6%9D%A1%E4%BB%B6%E8%AF%AD%E5%8F%A5switch.md"]],
  ["v-d9680de8","/back/go/3-%E6%B5%81%E7%A8%8B%E6%8E%A7%E5%88%B6/3-%E6%9D%A1%E4%BB%B6%E8%AF%AD%E5%8F%A5select.html",{"title":"条件语句select"},["/back/go/3-流程控制/3-条件语句select.html","/back/go/3-%E6%B5%81%E7%A8%8B%E6%8E%A7%E5%88%B6/3-%E6%9D%A1%E4%BB%B6%E8%AF%AD%E5%8F%A5select","/back/go/3-流程控制/3-条件语句select.md","/back/go/3-%E6%B5%81%E7%A8%8B%E6%8E%A7%E5%88%B6/3-%E6%9D%A1%E4%BB%B6%E8%AF%AD%E5%8F%A5select.md"]],
  ["v-59d39a08","/back/go/3-%E6%B5%81%E7%A8%8B%E6%8E%A7%E5%88%B6/4-%E5%BE%AA%E7%8E%AF%E8%AF%AD%E5%8F%A5range.html",{"title":"1. 循环语句range"},["/back/go/3-流程控制/4-循环语句range.html","/back/go/3-%E6%B5%81%E7%A8%8B%E6%8E%A7%E5%88%B6/4-%E5%BE%AA%E7%8E%AF%E8%AF%AD%E5%8F%A5range","/back/go/3-流程控制/4-循环语句range.md","/back/go/3-%E6%B5%81%E7%A8%8B%E6%8E%A7%E5%88%B6/4-%E5%BE%AA%E7%8E%AF%E8%AF%AD%E5%8F%A5range.md"]],
  ["v-12af25da","/back/go/4-%E5%87%BD%E6%95%B0/1-%E5%87%BD%E6%95%B0%E5%AE%9A%E4%B9%89.html",{"title":"1. 函数定义"},["/back/go/4-函数/1-函数定义.html","/back/go/4-%E5%87%BD%E6%95%B0/1-%E5%87%BD%E6%95%B0%E5%AE%9A%E4%B9%89","/back/go/4-函数/1-函数定义.md","/back/go/4-%E5%87%BD%E6%95%B0/1-%E5%87%BD%E6%95%B0%E5%AE%9A%E4%B9%89.md"]],
  ["v-34d96d89","/back/go/4-%E5%87%BD%E6%95%B0/2-%E5%8F%82%E6%95%B0.html",{"title":"1. 参数"},["/back/go/4-函数/2-参数.html","/back/go/4-%E5%87%BD%E6%95%B0/2-%E5%8F%82%E6%95%B0","/back/go/4-函数/2-参数.md","/back/go/4-%E5%87%BD%E6%95%B0/2-%E5%8F%82%E6%95%B0.md"]],
  ["v-a9e17de8","/back/go/4-%E5%87%BD%E6%95%B0/3-%E8%BF%94%E5%9B%9E%E5%80%BC.html",{"title":""},["/back/go/4-函数/3-返回值.html","/back/go/4-%E5%87%BD%E6%95%B0/3-%E8%BF%94%E5%9B%9E%E5%80%BC","/back/go/4-函数/3-返回值.md","/back/go/4-%E5%87%BD%E6%95%B0/3-%E8%BF%94%E5%9B%9E%E5%80%BC.md"]],
  ["v-7ba38774","/back/go/4-%E5%87%BD%E6%95%B0/4-%E5%8C%BF%E5%90%8D%E5%87%BD%E6%95%B0.html",{"title":"1. 匿名函数"},["/back/go/4-函数/4-匿名函数.html","/back/go/4-%E5%87%BD%E6%95%B0/4-%E5%8C%BF%E5%90%8D%E5%87%BD%E6%95%B0","/back/go/4-函数/4-匿名函数.md","/back/go/4-%E5%87%BD%E6%95%B0/4-%E5%8C%BF%E5%90%8D%E5%87%BD%E6%95%B0.md"]],
  ["v-09d4f8ea","/back/go/4-%E5%87%BD%E6%95%B0/5-%E9%97%AD%E5%8C%85,%E9%80%92%E5%BD%92.html",{"title":"1. 闭包、递归"},["/back/go/4-函数/5-闭包,递归.html","/back/go/4-%E5%87%BD%E6%95%B0/5-%E9%97%AD%E5%8C%85,%E9%80%92%E5%BD%92","/back/go/4-函数/5-闭包,递归.md","/back/go/4-%E5%87%BD%E6%95%B0/5-%E9%97%AD%E5%8C%85,%E9%80%92%E5%BD%92.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
  ["v-15534fdd","/tags/",{"title":"Tags"},["/tags/index.html"]],
  ["v-8daa1a0e","/",{"title":"Home"},["/index.html"]],
  ["v-4975443b","/tags/%E6%91%B8%E9%B1%BC/",{"title":"摸鱼 | Tags"},["/tags/摸鱼/","/tags/%E6%91%B8%E9%B1%BC/index.html"]],
  ["v-41393b66","/tags/deep-learning/",{"title":"Deep Learning | Tags"},["/tags/deep-learning/index.html"]],
  ["v-1241708e","/tags/machine-learning/",{"title":"Machine Learning | Tags"},["/tags/machine-learning/index.html"]],
  ["v-d0dc18b8","/tags/bayesian/",{"title":"Bayesian | Tags"},["/tags/bayesian/index.html"]],
  ["v-d69a272c","/tags/math/",{"title":"Math | Tags"},["/tags/math/index.html"]],
  ["v-3a1f8885","/page/1/",{"title":"Home"},["/page/1/index.html"]],
  ["v-3a1f88a4","/page/2/",{"title":"Home"},["/page/2/index.html"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: '404',
      path: '/:catchAll(.*)',
      component: Vuepress,
    }
  ]
)