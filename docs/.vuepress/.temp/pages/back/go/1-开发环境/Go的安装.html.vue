<template><div><h1 id="_1-go的安装" tabindex="-1"><a class="header-anchor" href="#_1-go的安装" aria-hidden="true">#</a> 1. Go的安装</h1>
<h2 id="_1-1-下载地址" tabindex="-1"><a class="header-anchor" href="#_1-1-下载地址" aria-hidden="true">#</a> 1.1. 下载地址</h2>
<p>Go官网下载地址：https://golang.org/dl/ (打开有点慢)</p>
<h2 id="_1-2-windows安装" tabindex="-1"><a class="header-anchor" href="#_1-2-windows安装" aria-hidden="true">#</a> 1.2. Windows安装</h2>
<p><img src="https://downloadflies.com//blog-img/fileName/1.png" alt="Windows安装包"></p>
<p>双击文件</p>
<p><img src="https://downloadflies.com//blog-img/fileName/2.png" alt="Windows安装包"></p>
<p>一定要记住这个文件的位置后面还有用</p>
<p><img src="https://downloadflies.com//blog-img/fileName/3.png" alt="Windows安装包"></p>
<h2 id="_1-3-linux下安装" tabindex="-1"><a class="header-anchor" href="#_1-3-linux下安装" aria-hidden="true">#</a> 1.3. Linux下安装</h2>
<p>1.SSH远程登录你的linux服务器</p>
<p>2.安装 mercurial包</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>[root@localhost ~]# yum install mercurial
</code></pre></div><p>3.安装git包</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>[root@localhost ~]# yum install git
</code></pre></div><p>4.安装gcc</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>[root@localhost ~]# yum install gcc
</code></pre></div><p>5.下载Go的压缩包:(可选择最新的Go版本)</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>[root@localhost ~]# cd /usr/local/

[root@localhost local]# wget https://go.googlecode.com/files/go1.13.linux-amd64.tar.gz
</code></pre></div><p>注意：如果不能翻墙，去go语言资源站 下载相应的包。然后通过ftp上传到此目录。</p>
<p>6.下载完成 or ftp上传完成，用tar 命令来解压压缩包。</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>[root@localhost local]# tar -zxvf go1.13.linux-amd64.tar.gz
</code></pre></div><p>7.建立Go的工作空间（workspace，也就是GOPATH环境变量指向的目录）</p>
<p>GO代码必须在工作空间内。工作空间是一个目录，其中包含三个子目录：</p>
<p>src ---- 里面每一个子目录，就是一个包。包内是Go的源码文件</p>
<p>pkg ---- 编译后生成的，包的目标文件</p>
<p>bin ---- 生成的可执行文件</p>
<p>这里，我们在/home目录下, 建立一个名为go(可以不是go, 任意名字都可以)的文件夹， 然后再建立三个子文件夹(子文件夹名必须为src、pkg、bin)。</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>[root@localhost local]# cd /home/
[root@localhost home]# mkdir go
[root@localhost home]# cd go/
[root@localhost go]# mkdir bin
[root@localhost go]# mkdir src
[root@localhost go]# mkdir pkg
</code></pre></div><p>8.添加PATH环境变量and设置GOPATH环境变量</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>[root@localhost go]# vi /etc/profile
</code></pre></div><p>加入下面这三行:</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>export GOROOT=/usr/local/go        ##Golang安装目录
export PATH=$GOROOT/bin:$PATH
export GOPATH=/home/go  ##Golang项目目录
</code></pre></div><p>保存后，执行以下命令，使环境变量立即生效:</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>[root@localhost go]# source /etc/profile ##刷新环境变量
</code></pre></div><p>至此，Go语言的环境已经安装完毕。</p>
<p>9.验证一下是否安装成功，如果出现下面的信息说明安装成功了</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>[root@localhost go]# go version        ##查看go版本
go version go1.13 linux/amd64
</code></pre></div><p>10.查看Go语言的环境信息</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>[root@localhost go]# go env
</code></pre></div><h2 id="_1-4-mac下安装" tabindex="-1"><a class="header-anchor" href="#_1-4-mac下安装" aria-hidden="true">#</a> 1.4. Mac下安装</h2>
<p>没有Mac没有试过不知道怎么安装</p>
<h2 id="_1-5-检查" tabindex="-1"><a class="header-anchor" href="#_1-5-检查" aria-hidden="true">#</a> 1.5. 检查</h2>
<p>上一步安装过程执行完毕后，可以打开终端窗口，输入<code v-pre>go version</code>命令，查看安装的Go版本。</p>
</div></template>
