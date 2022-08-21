<template><div><h1 id="_1-配置gopath" tabindex="-1"><a class="header-anchor" href="#_1-配置gopath" aria-hidden="true">#</a> 1. 配置GOPATH</h1>
<p><code v-pre>GOPATH</code>是一个环境变量，用来表明你写的<code v-pre>go</code>项目的存放路径</p>
<p><code v-pre>GOPATH</code>路径最好只设置一个，所有的项目代码都放到<code v-pre>GOPATH</code>的<code v-pre>src</code>目录下。</p>
<p>Linux和Mac平台就参照上面配置环境变量的方式将自己的工作目录添加到环境变量中即可。 Windows平台按下面的步骤将（你的安装目录，例如：<code v-pre>D:\go</code>）添加到环境变量：</p>
<p>1.我的电脑-&gt;属性-&gt;高级系统设置</p>
<p><img src="https://downloadflies.com//blog-img/fileName/1.png" alt="配置GOPATH"></p>
<p>检查一下你的电脑里面是否存在<code v-pre>GOPATH</code>并且设置值为你要存<code v-pre>go</code>代码的目录</p>
<p><img src="https://downloadflies.com//blog-img/fileName/2.png" alt="配置GOPATH"></p>
<p>同时在<code v-pre>path</code>里面添加<code v-pre>go</code>的安装目录和<code v-pre>GOPATH</code>目录</p>
<p><img src="https://downloadflies.com//blog-img/fileName/3.png" alt="配置GOPATH"></p>
<p><img src="https://downloadflies.com//blog-img/fileName/4.png" alt="新建工作目录"></p>
<h2 id="_1-1-go的项目目录" tabindex="-1"><a class="header-anchor" href="#_1-1-go的项目目录" aria-hidden="true">#</a> 1.1. go的项目目录</h2>
<p>在进行<code v-pre>Go</code>语言开发的时候，我们的代码总是会保存在<code v-pre>$GOPATH/src</code>目录下。在工程经过<code v-pre>go build</code>、<code v-pre>go install</code>或<code v-pre>go get</code>等指令后，会将下载的第三方包源代码文件放在<code v-pre>$GOPATH/src</code>目录下， 产生的二进制可执行文件放在 <code v-pre>$GOPATH/bin</code>目录下，生成的中间缓存文件会被保存在 <code v-pre>$GOPATH/pkg</code> 下。</p>
<p>如果我们使用版本管理工具（<code v-pre>Version Control System</code>，<code v-pre>VCS</code>。常用如<code v-pre>Git</code>）来管理我们的项目代码时，我们只需要添加<code v-pre>$GOPATH/src</code>目录的源代码即可。<code v-pre>bin</code> 和 <code v-pre>pkg</code> 目录的内容无需版本控制。</p>
<h2 id="_1-2-适合个人开发者" tabindex="-1"><a class="header-anchor" href="#_1-2-适合个人开发者" aria-hidden="true">#</a> 1.2. 适合个人开发者</h2>
<p>我们知道源代码都是存放在<code v-pre>GOPATH</code>的<code v-pre>src</code>目录下，那我们可以按照下图来组织我们的代码。</p>
<p><img src="https://downloadflies.com//blog-img/fileName/5.png" alt="GO目录结构"></p>
<h2 id="_1-3-目前流行的项目结构" tabindex="-1"><a class="header-anchor" href="#_1-3-目前流行的项目结构" aria-hidden="true">#</a> 1.3. 目前流行的项目结构</h2>
<p>Go语言中也是通过包来组织代码文件，我们可以引用别人的包也可以发布自己的包，但是为了防止不同包的项目名冲突，我们通常使用顶级域名来作为包名的前缀，这样就不担心项目名冲突的问题了。</p>
<p>因为不是每个个人开发者都拥有自己的顶级域名，所以目前流行的方式是使用个人的github用户名来区分不同的包。</p>
<p><img src="https://downloadflies.com//blog-img/fileName/6.png" alt="GO目录结构"></p>
<p>举个例子：张三和李四都有一个名叫studygo的项目，那么这两个包的路径就会是：</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">"github.com/zhangsan/studygo"</span>
</code></pre></div><p>和</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">"github.com/lisi/studygo"</span>
</code></pre></div><p>以后我们从<code v-pre>github</code>上下载别人包的时候，如：</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">go</span> get github<span class="token punctuation">.</span>com<span class="token operator">/</span>jmoiron<span class="token operator">/</span>sqlx
</code></pre></div><p>那么，这个包会下载到我们本地<code v-pre>GOPATH</code>目录下的<code v-pre>src/github.com/jmoiron/sqlx</code>。</p>
<h2 id="_1-4-适合企业开发者" tabindex="-1"><a class="header-anchor" href="#_1-4-适合企业开发者" aria-hidden="true">#</a> 1.4. 适合企业开发者</h2>
<p><img src="https://downloadflies.com//blog-img/fileName/7.png" alt="GO目录结构"></p>
</div></template>
