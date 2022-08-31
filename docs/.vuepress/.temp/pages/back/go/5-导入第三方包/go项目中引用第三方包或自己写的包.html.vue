<template><div><h3 id="引入第三方包" tabindex="-1"><a class="header-anchor" href="#引入第三方包" aria-hidden="true">#</a> 引入第三方包</h3>
<p>1.打开gomod方式，和设置下载点，在终端输入go env，查看是否更改成功。</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>go env -w GO111MODULE=on
go env -w GOPROXY=https://goproxy.io,direct
</code></pre></div><p>2.goget第三方包</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>go get github.com/rs/zerolog/log
</code></pre></div><p>可以看到在GoPath/pkg/mod/目录下会自动下载了文件</p>
<p><img src="https://downloadflies.com//blog-img/7bc403bdf75e4e32900d4e8e5c693196.png" alt="Gopath："></p>
</div></template>
