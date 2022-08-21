<template><div><h1 id="_1-编辑器" tabindex="-1"><a class="header-anchor" href="#_1-编辑器" aria-hidden="true">#</a> 1. 编辑器</h1>
<h2 id="_1-1-windows-安装vs-code-mac版咱也没有电脑咱也不敢试" tabindex="-1"><a class="header-anchor" href="#_1-1-windows-安装vs-code-mac版咱也没有电脑咱也不敢试" aria-hidden="true">#</a> 1.1. Windows 安装vs code(mac版咱也没有电脑咱也不敢试)</h2>
<p><code v-pre>Visual Studio Code</code>，简称<code v-pre>VS Code</code>，它是目前使用人数最多的编辑器。尽管它由微软发布于2015年，与其他热门编辑器相比显得有些年轻，但它在过去几年中一直在不停的更新，它在最新的<code v-pre>Stack Overflow</code>调查中被选为<code v-pre>Web</code>开发人员中最受欢迎的文本编辑器。</p>
<p><code v-pre>VS Code</code>不仅仅是一个基本的代码编辑器。有人说它更像是<code v-pre>IDE</code>而不是代码编辑器，因为它提供了许多通常只在<code v-pre>IDE</code>中才有的功能。主要功能包括内置调试工具，智能代码提示，集成终端以及对简易的<code v-pre>Git</code>操作（微软刚收购了<code v-pre>GitHub</code>）。作为初学者，您可以利用这些功能大大提高编程效率。</p>
<p>在 <code v-pre>VS Code</code>中找到的每个功能都完成一项出色的工作，构建了一些简单的功能集，包括语法高亮、智能补全、集成 <code v-pre>git</code> 和编辑器内置调试工具等，将使你开发更高效。</p>
<p>下载地址：https://code.visualstudio.com/</p>
<p>选择windows版本下载，vscode有新版本时候会自动更新，重启即可更新。</p>
<p>傻瓜式安装一直下一步就好了！</p>
<h2 id="_1-2-配置" tabindex="-1"><a class="header-anchor" href="#_1-2-配置" aria-hidden="true">#</a> 1.2. 配置</h2>
<h3 id="_1-2-1-安装中文简体插件" tabindex="-1"><a class="header-anchor" href="#_1-2-1-安装中文简体插件" aria-hidden="true">#</a> 1.2.1. 安装中文简体插件</h3>
<p>点击左侧菜单栏最后一项<code v-pre>管理扩展</code>，在搜索框中输入<code v-pre>chinese</code>，选中结果列表第一项，点击<code v-pre>install</code>安装。</p>
<p>安装完毕后右下角会提示重启<code v-pre>VS Code</code>，重启之后你的<code v-pre>VS Code</code>就显示中文啦！</p>
<p><img src="https://downloadflies.com//blog-img/fileName/vscode.gif" alt="vscode"></p>
<h3 id="_1-2-2-安装go插件" tabindex="-1"><a class="header-anchor" href="#_1-2-2-安装go插件" aria-hidden="true">#</a> 1.2.2. 安装go插件</h3>
<p>启动<code v-pre>vscode</code>选择插件-&gt;搜<code v-pre>go</code>选择<code v-pre>Go for Visual Studio Code</code>插件点击安装即可。如图：</p>
<p><img src="https://downloadflies.com//blog-img/fileName/8.png" alt="vscode"></p>
<h2 id="_1-3-安装go语言开发工具包" tabindex="-1"><a class="header-anchor" href="#_1-3-安装go语言开发工具包" aria-hidden="true">#</a> 1.3. 安装Go语言开发工具包</h2>
<p>在Go语言开发的时候为我们提供诸如代码提示、代码自动补全等功能。</p>
<p>Windows平台按下<code v-pre>Ctrl+Shift+P</code>，Mac平台按<code v-pre>Command+Shift+P</code>，这个时候<code v-pre>VS Code</code>界面会弹出一个输入框，如下图：</p>
<p><img src="https://downloadflies.com//blog-img/fileName/23.png" alt="vscode"></p>
<p>我们在这个输入框中输入&gt;<code v-pre>go:install</code>，下面会自动搜索相关命令，我们选择<code v-pre>Go:Install/Update Tools</code>这个命令</p>
<p><img src="https://downloadflies.com//blog-img/fileName/25.png" alt="vscode"></p>
<p>选中并会回车执行该命令（或者使用鼠标点击该命令）</p>
<p><img src="https://downloadflies.com//blog-img/fileName/26.png" alt="vscode"></p>
<p>VS Code此时会下载并安装上图列出来的16个工具，但是由于国内的网络环境基本上都会出现安装失败</p>
<h3 id="_1-3-1-有两种方法解决这个问题" tabindex="-1"><a class="header-anchor" href="#_1-3-1-有两种方法解决这个问题" aria-hidden="true">#</a> 1.3.1. 有两种方法解决这个问题：</h3>
<h4 id="方法一-使用git下载源代码再安装" tabindex="-1"><a class="header-anchor" href="#方法一-使用git下载源代码再安装" aria-hidden="true">#</a> 方法一：使用git下载源代码再安装</h4>
<p>我们可以手动从<code v-pre>github</code>上下载工具，(执行此步骤前提需要你的电脑上已经安装了<code v-pre>git</code>)</p>
<p>第一步：现在自己的<code v-pre>GOPATH</code>的<code v-pre>src</code>目录下创建<code v-pre>golang.org/x</code>目录</p>
<p>第二步：在终端<code v-pre>/cmd中cd</code>到<code v-pre>GOPATH/src/golang.org/x</code>目录下</p>
<p>第三步：执行<code v-pre>git clone https://github.com/golang/tools.git tools</code>命令</p>
<p>第四步：执行<code v-pre>git clone https://github.com/golang/lint.git</code>命令</p>
<p>第五步：按下<code v-pre>Ctrl/Command+Shift+P</code>再次执行<code v-pre>Go:Install/Update Tools</code>命令，在弹出的窗口全选并点击确定，这一次的安装都会SUCCESSED了。</p>
<p>经过上面的步骤就可以安装成功了。 这个时候创建一个Go文件，就能正常使用代码提示、代码格式化等工具了。</p>
<p>方法二：下载已经编译好的可执行文件 如果上面的步骤执行失败了或者懒得一步一步执行，可以直接下载我已经编译好的可执行文件，拷贝到自己电脑上的 <code v-pre>go/bin</code>(GO的安装包目录不是代码包啊) 目录下。 <code v-pre>https://pan.baidu.com/s/180J5j0n5Kt6wANjQyGdWDA</code>，密码:dxti。</p>
<p>注意：特别是Mac下需要给拷贝的这些文件赋予可执行的权限。</p>
<h3 id="_1-3-2-修改vscode终端cmd启动" tabindex="-1"><a class="header-anchor" href="#_1-3-2-修改vscode终端cmd启动" aria-hidden="true">#</a> 1.3.2. 修改vscode终端cmd启动</h3>
<p>在运行代码的时候需要终端运行，有的小伙伴终端默认的是powershell，有的直接默认是cmd，如果你的是powershell需要修改为cmd，如果默认的就是cmd直接放弃这块就好了</p>
<p><img src="https://downloadflies.com//blog-img/fileName/27.png" alt="vscode"></p>
<p>1.在文件 -&gt; 首选项 -&gt; 设置中打开settings页面, 搜索shell或则找到Terminal&gt;Integrated&gt;Shell:Windows,</p>
<p><img src="https://downloadflies.com//blog-img/fileName/28.png" alt="vscode"></p>
<p><img src="https://downloadflies.com//blog-img/fileName/29.png" alt="vscode"></p>
<p>添加<code v-pre>&quot;terminal.integrated.shell.windows&quot;: &quot;C:\\WINDOWS\\System32\\cmd.exe&quot;,</code> 后面的地址是你的cmd地址</p>
</div></template>
