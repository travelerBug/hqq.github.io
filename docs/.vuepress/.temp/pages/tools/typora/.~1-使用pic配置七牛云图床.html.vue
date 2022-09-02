<template><div><h1 id="使用picgo配置七牛云图床" tabindex="-1"><a class="header-anchor" href="#使用picgo配置七牛云图床" aria-hidden="true">#</a> 使用PicGo配置七牛云图床</h1>
<h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h2>
<h4 id="_1-1-下载picgo安装" tabindex="-1"><a class="header-anchor" href="#_1-1-下载picgo安装" aria-hidden="true">#</a> 1. 1 下载PicGo安装</h4>
<ul>
<li>链接：https://pan.baidu.com/s/1kP-TTvBamHKBpmDSung4cw
提取码：tfvd</li>
</ul>
<h4 id="_1-2-七牛云配置图床" tabindex="-1"><a class="header-anchor" href="#_1-2-七牛云配置图床" aria-hidden="true">#</a> 1.2 七牛云配置图床</h4>
<ul>
<li>注：需要准备一个自己的域名</li>
</ul>
<p><img src="https://downloadflies.com/blog-img/blog-imgimage-20220721212339949-16621319129383.png" alt="image-20220721212339949"></p>
<h4 id="_1-3-注册账号" tabindex="-1"><a class="header-anchor" href="#_1-3-注册账号" aria-hidden="true">#</a> 1.3 注册账号</h4>
<p>登录<a href="https://www.qiniu.com/" target="_blank" rel="noopener noreferrer">七牛官网</a>先注册一个账号</p>
<p>这里注意，用户类型选择个人账号，然后进行实名认证。</p>
<h4 id="_1-4-创建云存储空间" tabindex="-1"><a class="header-anchor" href="#_1-4-创建云存储空间" aria-hidden="true">#</a> 1.4 创建云存储空间</h4>
<p><img src="http://downloadflies.com/blog-img/6c4fcf368c805a142c67076eef32a3e1.png" alt="6c4fcf368c805a142c67076eef32a3e1"></p>
<h4 id="_1-5-给自己的域名添加二级域名" tabindex="-1"><a class="header-anchor" href="#_1-5-给自己的域名添加二级域名" aria-hidden="true">#</a> 1.5 给自己的域名添加二级域名</h4>
<blockquote>
<p>因为我的域名是阿里云的，所以这里用阿里云的举例</p>
</blockquote>
<p>进入<a href="https://dc.console.aliyun.com/next/index?#/domain-list/all" target="_blank" rel="noopener noreferrer">阿里云域名列表</a></p>
<p>选择解析</p>
<p><img src="http://downloadflies.com/blog-img/0747689e1cdc2205b238140aa93e8416.png" alt="image-20220330003123314"></p>
<p>然后添加一个二级域名，这个完了先不要关，等下还要改</p>
<p><img src="http://downloadflies.com/blog-img/8de4e1820d58da359b6b48fada2b63ce.png" alt="image-20220330003356467"></p>
<ol start="4">
<li>绑定二级域名
进入七牛云域名绑定页面，点击添加域名，然后下图只需要把刚刚配置的域名写上，然后其余默认就行，点击创建</li>
</ol>
<img src="http://downloadflies.com/blog-img/66cd88be1aa780a8fda147c1faea7b51.png" alt="image-20220330003544871" style="zoom:80%;" />
<p>然后回到上一个页面，跟着下图操作</p>
<p><img src="http://downloadflies.com/blog-img/61f324a844768635a01bb06b50866447.png" alt="image-20220330003733736"></p>
<p><img src="http://downloadflies.com/blog-img/4699773498babd6a54a6016f80e908e1.png" alt="image-20220330003847097"></p>
<p>然后回到刚刚添加域名的页面，点击刚刚添加的域名，把www.baidu.com改成刚刚复制的东西</p>
<p>配置完了之后等一会，系统审核完成后会发邮件，等状态变成成功说明配置完成了</p>
<p><img src="http://downloadflies.com/blog-img/61f324a844768635a01bb06b50866447.png" alt="image-20220330003733736"></p>
<p><img src="http://downloadflies.com/blog-img/4699773498babd6a54a6016f80e908e1.png" alt="image-20220330003847097"></p>
<ol start="5">
<li>配置PicGO
进入七牛云页面，右上角头像-&gt;密钥管理-&gt;复制 AccessKey和SecretKey到PicGo中，</li>
</ol>
<p>存储空间名是你第二步建立的空间的名字
网址是刚刚绑定的那个二级域名
存储区域：七牛云的存储区域（华东 z0，华北 z1，华南 z2，北美 na0，东南亚 as0 ），根据你空间所在的区域，填对应的代码</p>
<p><img src="https://downloadflies.com/blog-img/image-20220902162801655.png" alt="image-20220902162801655"></p>
<p>然后打开Typora粘贴一张照片测试一下，就可以发现能成功上传了，速度也很快（这里要等第四步成功了才可以上传成功）</p>
</div></template>
