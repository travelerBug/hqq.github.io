import{_ as o,o as s,c as n,e as a}from"./app.ad4da1a1.js";const t={},e=a(`<h1 id="\u4EC0\u4E48\u662Fgo-modules" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662Fgo-modules" aria-hidden="true">#</a> \u4EC0\u4E48\u662FGo Modules?</h1><p>Go modules \u662F Go \u8BED\u8A00\u7684\u4F9D\u8D56\u89E3\u51B3\u65B9\u6848\uFF0C\u53D1\u5E03\u4E8E Go1.11\uFF0C\u6210\u957F\u4E8E Go1.12\uFF0C\u4E30\u5BCC\u4E8E Go1.13\uFF0C\u6B63\u5F0F\u4E8E Go1.14 \u63A8\u8350\u5728\u751F\u4EA7\u4E0A\u4F7F\u7528\u3002</p><p>Go moudles \u76EE\u524D\u96C6\u6210\u5728 Go \u7684\u5DE5\u5177\u94FE\u4E2D\uFF0C\u53EA\u8981\u5B89\u88C5\u4E86 Go\uFF0C\u81EA\u7136\u800C\u7136\u4E5F\u5C31\u53EF\u4EE5\u4F7F\u7528 Go moudles \u4E86\uFF0C\u800C Go modules \u7684\u51FA\u73B0\u4E5F\u89E3\u51B3\u4E86\u5728 Go1.11 \u524D\u7684\u51E0\u4E2A\u5E38\u89C1\u4E89\u8BAE\u95EE\u9898\uFF1A</p><ul><li>Go \u8BED\u8A00\u957F\u4E45\u4EE5\u6765\u7684\u4F9D\u8D56\u7BA1\u7406\u95EE\u9898\u3002</li><li>\u201C\u6DD8\u6C70\u201D\u73B0\u6709\u7684 GOPATH \u7684\u4F7F\u7528\u6A21\u5F0F\u3002</li><li>\u7EDF\u4E00\u793E\u533A\u4E2D\u7684\u5176\u5B83\u7684\u4F9D\u8D56\u7BA1\u7406\u5DE5\u5177\uFF08\u63D0\u4F9B\u8FC1\u79FB\u529F\u80FD\uFF09\u3002</li></ul><h1 id="gopath\u7684\u5DE5\u4F5C\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#gopath\u7684\u5DE5\u4F5C\u6A21\u5F0F" aria-hidden="true">#</a> GOPATH\u7684\u5DE5\u4F5C\u6A21\u5F0F</h1><p>Go Modoules\u7684\u76EE\u7684\u4E4B\u4E00\u5C31\u662F\u6DD8\u6C70GOPATH, \u90A3\u4E48GOPATH\u662F\u4E2A\u4EC0\u4E48?</p><p>\u4E3A\u4EC0\u4E48\u5728 Go1.11 \u524D\u5C31\u4F7F\u7528 GOPATH\uFF0C\u800C Go1.11 \u540E\u5C31\u5F00\u59CB\u9010\u6B65\u5EFA\u8BAE\u4F7F\u7528 Go modules\uFF0C\u4E0D\u518D\u63A8\u8350 GOPATH \u7684\u6A21\u5F0F\u4E86\u5462\uFF1F</p><ol><li>What is GOPATH?</li></ol><div class="language-go ext-go"><pre class="language-go"><code>\u279C  tools <span class="token keyword">go</span> env
GO111MODULE<span class="token operator">=</span><span class="token string">&quot;auto&quot;</span>
GOARCH<span class="token operator">=</span><span class="token string">&quot;amd64&quot;</span>
GOBIN<span class="token operator">=</span><span class="token string">&quot;&quot;</span>
GOCACHE<span class="token operator">=</span><span class="token string">&quot;/Users/caowg/Library/Caches/go-build&quot;</span>
GOENV<span class="token operator">=</span><span class="token string">&quot;/Users/caowg/Library/Application Support/go/env&quot;</span>
GOEXE<span class="token operator">=</span><span class="token string">&quot;&quot;</span>
GOFLAGS<span class="token operator">=</span><span class="token string">&quot;&quot;</span>
GOHOSTARCH<span class="token operator">=</span><span class="token string">&quot;amd64&quot;</span>
GOHOSTOS<span class="token operator">=</span><span class="token string">&quot;darwin&quot;</span>
GOINSECURE<span class="token operator">=</span><span class="token string">&quot;&quot;</span>
GONOPROXY<span class="token operator">=</span><span class="token string">&quot;&quot;</span>
GONOSUMDB<span class="token operator">=</span><span class="token string">&quot;&quot;</span>
GOOS<span class="token operator">=</span><span class="token string">&quot;darwin&quot;</span>
GOPATH<span class="token operator">=</span><span class="token string">&quot;/Users/caowg/Documents/workspace/go&quot;</span>
GOPRIVATE<span class="token operator">=</span><span class="token string">&quot;&quot;</span>
GOPROXY<span class="token operator">=</span><span class="token string">&quot;https://goproxy.cn,direct&quot;</span>
GOROOT<span class="token operator">=</span><span class="token string">&quot;/usr/local/Cellar/go/1.14/libexec&quot;</span>
</code></pre></div><p>\u6211\u4EEC\u8F93\u5165go env\u547D\u4EE4\u884C\u540E\u53EF\u4EE5\u67E5\u770B\u5230 GOPATH \u53D8\u91CF\u7684\u7ED3\u679C\uFF0C\u6211\u4EEC\u8FDB\u5165\u5230\u8BE5\u76EE\u5F55\u4E0B\u8FDB\u884C\u67E5\u770B\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-css ext-css"><pre class="language-css"><code>go tree -L 2
.
\u251C\u2500\u2500 bin
\u2502   \u251C\u2500\u2500 bra
\u2502   \u251C\u2500\u2500 dlv
\u2502   \u251C\u2500\u2500 go-outline
\u2502   \u251C\u2500\u2500 gocode
\u2502   \u251C\u2500\u2500 gocode-gomod
\u2502   \u251C\u2500\u2500 godef
\u2502   \u251C\u2500\u2500 golint
\u2502   \u251C\u2500\u2500 gopkgs
\u2502   \u251C\u2500\u2500 gorename
\u2502   \u251C\u2500\u2500 goreturns
\u2502   \u2514\u2500\u2500 mkwinsyscall
\u251C\u2500\u2500 pkg
\u2502   \u251C\u2500\u2500 darwin_amd64
\u2502   \u251C\u2500\u2500 mod
\u2502   \u2514\u2500\u2500 sumdb
\u2514\u2500\u2500 src
    \u251C\u2500\u2500 algorithm
    \u251C\u2500\u2500 codecomplete
    \u251C\u2500\u2500 github.com
    \u251C\u2500\u2500 go.uber.org
    \u251C\u2500\u2500 golang.org
    \u251C\u2500\u2500 gopkg.in
    \u251C\u2500\u2500 node_modules
    \u251C\u2500\u2500 package-lock.json
    \u2514\u2500\u2500 test
</code></pre></div><p>GOPATH\u76EE\u5F55\u4E0B\u4E00\u5171\u5305\u542B\u4E86\u4E09\u4E2A\u5B50\u76EE\u5F55\uFF0C\u5206\u522B\u662F\uFF1A</p><ul><li>bin\uFF1A\u5B58\u50A8\u6240\u7F16\u8BD1\u751F\u6210\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\u3002</li><li>pkg\uFF1A\u5B58\u50A8\u9884\u7F16\u8BD1\u7684\u76EE\u6807\u6587\u4EF6\uFF0C\u4EE5\u52A0\u5FEB\u7A0B\u5E8F\u7684\u540E\u7EED\u7F16\u8BD1\u901F\u5EA6\u3002</li><li>src\uFF1A\u5B58\u50A8\u6240\u6709.go\u6587\u4EF6\u6216\u6E90\u4EE3\u7801\u3002\u5728\u7F16\u5199 Go \u5E94\u7528\u7A0B\u5E8F\uFF0C\u7A0B\u5E8F\u5305\u548C\u5E93\u65F6\uFF0C\u4E00\u822C\u4F1A\u4EE5$GOPATH/src/github.com/foo/bar\u7684\u8DEF\u5F84\u8FDB\u884C\u5B58\u653E\u3002</li></ul><p>\u56E0\u6B64\u5728\u4F7F\u7528 GOPATH \u6A21\u5F0F\u4E0B\uFF0C\u6211\u4EEC\u9700\u8981\u5C06\u5E94\u7528\u4EE3\u7801\u5B58\u653E\u5728\u56FA\u5B9A\u7684<img src="https://math.jianshu.com/math?formula=GOPATH%2Fsrc\u76EE\u5F55\u4E0B\uFF0C\u5E76\u4E14\u5982\u679C\u6267\u884Cgo get\u6765\u62C9\u53D6\u5916\u90E8\u4F9D\u8D56\u4F1A\u81EA\u52A8\u4E0B\u8F7D\u5E76\u5B89\u88C5\u5230" alt="GOPATH/src\u76EE\u5F55\u4E0B\uFF0C\u5E76\u4E14\u5982\u679C\u6267\u884Cgo get\u6765\u62C9\u53D6\u5916\u90E8\u4F9D\u8D56\u4F1A\u81EA\u52A8\u4E0B\u8F7D\u5E76\u5B89\u88C5\u5230">GOPATH\u76EE\u5F55\u4E0B\u3002</p><ol><li>GOPATH\u6A21\u5F0F\u7684\u5F0A\u7AEF</li></ol><ul><li>\u5728 GOPATH \u7684 $GOPATH/src \u4E0B\u8FDB\u884C .go \u6587\u4EF6\u6216\u6E90\u4EE3\u7801\u7684\u5B58\u50A8\uFF0C\u6211\u4EEC\u53EF\u4EE5\u79F0\u5176\u4E3A GOPATH \u7684\u6A21\u5F0F\uFF0C\u8FD9\u4E2A\u6A21\u5F0F\u62E5\u6709\u4E00\u4E9B\u5F0A\u7AEF. <ol><li>\u65E0\u7248\u672C\u63A7\u5236\u6982\u5FF5. \u5728\u6267\u884Cgo get\u7684\u65F6\u5019\uFF0C\u4F60\u65E0\u6CD5\u4F20\u8FBE\u4EFB\u4F55\u7684\u7248\u672C\u4FE1\u606F\u7684\u671F\u671B\uFF0C\u4E5F\u5C31\u662F\u8BF4\u4F60\u4E5F\u65E0\u6CD5\u77E5\u9053\u81EA\u5DF1\u5F53\u524D\u66F4\u65B0\u7684\u662F\u54EA\u4E00\u4E2A\u7248\u672C\uFF0C\u4E5F\u65E0\u6CD5\u901A\u8FC7\u6307\u5B9A\u6765\u62C9\u53D6\u81EA\u5DF1\u6240\u671F\u671B\u7684\u5177\u4F53\u7248\u672C\u3002</li><li>\u65E0\u6CD5\u540C\u6B65\u4E00\u81F4\u7B2C\u4E09\u65B9\u7248\u672C\u53F7. \u5728\u8FD0\u884C Go \u5E94\u7528\u7A0B\u5E8F\u7684\u65F6\u5019\uFF0C\u4F60\u65E0\u6CD5\u4FDD\u8BC1\u5176\u5B83\u4EBA\u4E0E\u4F60\u6240\u671F\u671B\u4F9D\u8D56\u7684\u7B2C\u4E09\u65B9\u5E93\u662F\u76F8\u540C\u7684\u7248\u672C\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5728\u9879\u76EE\u4F9D\u8D56\u5E93\u7684\u7BA1\u7406\u4E0A\uFF0C\u4F60\u65E0\u6CD5\u4FDD\u8BC1\u6240\u6709\u4EBA\u7684\u4F9D\u8D56\u7248\u672C\u90FD\u4E00\u81F4\u3002</li><li>\u65E0\u6CD5\u6307\u5B9A\u5F53\u524D\u9879\u76EE\u5F15\u7528\u7684\u7B2C\u4E09\u65B9\u7248\u672C\u53F7. ** \u4F60\u6CA1\u529E\u6CD5\u5904\u7406 v1\u3001v2\u3001v3 \u7B49\u7B49\u4E0D\u540C\u7248\u672C\u7684\u5F15\u7528\u95EE\u9898\uFF0C\u56E0\u4E3A GOPATH \u6A21\u5F0F\u4E0B\u7684\u5BFC\u5165\u8DEF\u5F84\u90FD\u662F\u4E00\u6837\u7684\uFF0C\u90FD\u662Fgithub.com/foo/bar\u3002</li></ol></li></ul>`,16),p=[e];function l(r,c){return s(),n("div",null,p)}var g=o(t,[["render",l],["__file","1-\u7B80\u4ECB.html.vue"]]);export{g as default};
