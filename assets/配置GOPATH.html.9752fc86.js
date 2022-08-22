import{_ as o,o as e,c,e as d}from"./app.6faec84d.js";const a={},s=d(`<h1 id="_1-\u914D\u7F6Egopath" tabindex="-1"><a class="header-anchor" href="#_1-\u914D\u7F6Egopath" aria-hidden="true">#</a> 1. \u914D\u7F6EGOPATH</h1><p><code>GOPATH</code>\u662F\u4E00\u4E2A\u73AF\u5883\u53D8\u91CF\uFF0C\u7528\u6765\u8868\u660E\u4F60\u5199\u7684<code>go</code>\u9879\u76EE\u7684\u5B58\u653E\u8DEF\u5F84</p><p><code>GOPATH</code>\u8DEF\u5F84\u6700\u597D\u53EA\u8BBE\u7F6E\u4E00\u4E2A\uFF0C\u6240\u6709\u7684\u9879\u76EE\u4EE3\u7801\u90FD\u653E\u5230<code>GOPATH</code>\u7684<code>src</code>\u76EE\u5F55\u4E0B\u3002</p><p>Linux\u548CMac\u5E73\u53F0\u5C31\u53C2\u7167\u4E0A\u9762\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\u7684\u65B9\u5F0F\u5C06\u81EA\u5DF1\u7684\u5DE5\u4F5C\u76EE\u5F55\u6DFB\u52A0\u5230\u73AF\u5883\u53D8\u91CF\u4E2D\u5373\u53EF\u3002 Windows\u5E73\u53F0\u6309\u4E0B\u9762\u7684\u6B65\u9AA4\u5C06\uFF08\u4F60\u7684\u5B89\u88C5\u76EE\u5F55\uFF0C\u4F8B\u5982\uFF1A<code>D:\\go</code>\uFF09\u6DFB\u52A0\u5230\u73AF\u5883\u53D8\u91CF\uFF1A</p><p>1.\u6211\u7684\u7535\u8111-&gt;\u5C5E\u6027-&gt;\u9AD8\u7EA7\u7CFB\u7EDF\u8BBE\u7F6E</p><p><img src="https://downloadflies.com//blog-img/fileName/1.png" alt="\u914D\u7F6EGOPATH"></p><p>\u68C0\u67E5\u4E00\u4E0B\u4F60\u7684\u7535\u8111\u91CC\u9762\u662F\u5426\u5B58\u5728<code>GOPATH</code>\u5E76\u4E14\u8BBE\u7F6E\u503C\u4E3A\u4F60\u8981\u5B58<code>go</code>\u4EE3\u7801\u7684\u76EE\u5F55</p><p><img src="https://downloadflies.com//blog-img/fileName/2.png" alt="\u914D\u7F6EGOPATH"></p><p>\u540C\u65F6\u5728<code>path</code>\u91CC\u9762\u6DFB\u52A0<code>go</code>\u7684\u5B89\u88C5\u76EE\u5F55\u548C<code>GOPATH</code>\u76EE\u5F55</p><p><img src="https://downloadflies.com//blog-img/fileName/3.png" alt="\u914D\u7F6EGOPATH"></p><p><img src="https://downloadflies.com//blog-img/fileName/4.png" alt="\u65B0\u5EFA\u5DE5\u4F5C\u76EE\u5F55"></p><h2 id="_1-1-go\u7684\u9879\u76EE\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#_1-1-go\u7684\u9879\u76EE\u76EE\u5F55" aria-hidden="true">#</a> 1.1. go\u7684\u9879\u76EE\u76EE\u5F55</h2><p>\u5728\u8FDB\u884C<code>Go</code>\u8BED\u8A00\u5F00\u53D1\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u7684\u4EE3\u7801\u603B\u662F\u4F1A\u4FDD\u5B58\u5728<code>$GOPATH/src</code>\u76EE\u5F55\u4E0B\u3002\u5728\u5DE5\u7A0B\u7ECF\u8FC7<code>go build</code>\u3001<code>go install</code>\u6216<code>go get</code>\u7B49\u6307\u4EE4\u540E\uFF0C\u4F1A\u5C06\u4E0B\u8F7D\u7684\u7B2C\u4E09\u65B9\u5305\u6E90\u4EE3\u7801\u6587\u4EF6\u653E\u5728<code>$GOPATH/src</code>\u76EE\u5F55\u4E0B\uFF0C \u4EA7\u751F\u7684\u4E8C\u8FDB\u5236\u53EF\u6267\u884C\u6587\u4EF6\u653E\u5728 <code>$GOPATH/bin</code>\u76EE\u5F55\u4E0B\uFF0C\u751F\u6210\u7684\u4E2D\u95F4\u7F13\u5B58\u6587\u4EF6\u4F1A\u88AB\u4FDD\u5B58\u5728 <code>$GOPATH/pkg</code> \u4E0B\u3002</p><p>\u5982\u679C\u6211\u4EEC\u4F7F\u7528\u7248\u672C\u7BA1\u7406\u5DE5\u5177\uFF08<code>Version Control System</code>\uFF0C<code>VCS</code>\u3002\u5E38\u7528\u5982<code>Git</code>\uFF09\u6765\u7BA1\u7406\u6211\u4EEC\u7684\u9879\u76EE\u4EE3\u7801\u65F6\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u6DFB\u52A0<code>$GOPATH/src</code>\u76EE\u5F55\u7684\u6E90\u4EE3\u7801\u5373\u53EF\u3002<code>bin</code> \u548C <code>pkg</code> \u76EE\u5F55\u7684\u5185\u5BB9\u65E0\u9700\u7248\u672C\u63A7\u5236\u3002</p><h2 id="_1-2-\u9002\u5408\u4E2A\u4EBA\u5F00\u53D1\u8005" tabindex="-1"><a class="header-anchor" href="#_1-2-\u9002\u5408\u4E2A\u4EBA\u5F00\u53D1\u8005" aria-hidden="true">#</a> 1.2. \u9002\u5408\u4E2A\u4EBA\u5F00\u53D1\u8005</h2><p>\u6211\u4EEC\u77E5\u9053\u6E90\u4EE3\u7801\u90FD\u662F\u5B58\u653E\u5728<code>GOPATH</code>\u7684<code>src</code>\u76EE\u5F55\u4E0B\uFF0C\u90A3\u6211\u4EEC\u53EF\u4EE5\u6309\u7167\u4E0B\u56FE\u6765\u7EC4\u7EC7\u6211\u4EEC\u7684\u4EE3\u7801\u3002</p><p><img src="https://downloadflies.com//blog-img/fileName/5.png" alt="GO\u76EE\u5F55\u7ED3\u6784"></p><h2 id="_1-3-\u76EE\u524D\u6D41\u884C\u7684\u9879\u76EE\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_1-3-\u76EE\u524D\u6D41\u884C\u7684\u9879\u76EE\u7ED3\u6784" aria-hidden="true">#</a> 1.3. \u76EE\u524D\u6D41\u884C\u7684\u9879\u76EE\u7ED3\u6784</h2><p>Go\u8BED\u8A00\u4E2D\u4E5F\u662F\u901A\u8FC7\u5305\u6765\u7EC4\u7EC7\u4EE3\u7801\u6587\u4EF6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5F15\u7528\u522B\u4EBA\u7684\u5305\u4E5F\u53EF\u4EE5\u53D1\u5E03\u81EA\u5DF1\u7684\u5305\uFF0C\u4F46\u662F\u4E3A\u4E86\u9632\u6B62\u4E0D\u540C\u5305\u7684\u9879\u76EE\u540D\u51B2\u7A81\uFF0C\u6211\u4EEC\u901A\u5E38\u4F7F\u7528\u9876\u7EA7\u57DF\u540D\u6765\u4F5C\u4E3A\u5305\u540D\u7684\u524D\u7F00\uFF0C\u8FD9\u6837\u5C31\u4E0D\u62C5\u5FC3\u9879\u76EE\u540D\u51B2\u7A81\u7684\u95EE\u9898\u4E86\u3002</p><p>\u56E0\u4E3A\u4E0D\u662F\u6BCF\u4E2A\u4E2A\u4EBA\u5F00\u53D1\u8005\u90FD\u62E5\u6709\u81EA\u5DF1\u7684\u9876\u7EA7\u57DF\u540D\uFF0C\u6240\u4EE5\u76EE\u524D\u6D41\u884C\u7684\u65B9\u5F0F\u662F\u4F7F\u7528\u4E2A\u4EBA\u7684github\u7528\u6237\u540D\u6765\u533A\u5206\u4E0D\u540C\u7684\u5305\u3002</p><p><img src="https://downloadflies.com//blog-img/fileName/6.png" alt="GO\u76EE\u5F55\u7ED3\u6784"></p><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF1A\u5F20\u4E09\u548C\u674E\u56DB\u90FD\u6709\u4E00\u4E2A\u540D\u53EBstudygo\u7684\u9879\u76EE\uFF0C\u90A3\u4E48\u8FD9\u4E24\u4E2A\u5305\u7684\u8DEF\u5F84\u5C31\u4F1A\u662F\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;github.com/zhangsan/studygo&quot;</span>
</code></pre></div><p>\u548C</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;github.com/lisi/studygo&quot;</span>
</code></pre></div><p>\u4EE5\u540E\u6211\u4EEC\u4ECE<code>github</code>\u4E0A\u4E0B\u8F7D\u522B\u4EBA\u5305\u7684\u65F6\u5019\uFF0C\u5982\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">go</span> get github<span class="token punctuation">.</span>com<span class="token operator">/</span>jmoiron<span class="token operator">/</span>sqlx
</code></pre></div><p>\u90A3\u4E48\uFF0C\u8FD9\u4E2A\u5305\u4F1A\u4E0B\u8F7D\u5230\u6211\u4EEC\u672C\u5730<code>GOPATH</code>\u76EE\u5F55\u4E0B\u7684<code>src/github.com/jmoiron/sqlx</code>\u3002</p><h2 id="_1-4-\u9002\u5408\u4F01\u4E1A\u5F00\u53D1\u8005" tabindex="-1"><a class="header-anchor" href="#_1-4-\u9002\u5408\u4F01\u4E1A\u5F00\u53D1\u8005" aria-hidden="true">#</a> 1.4. \u9002\u5408\u4F01\u4E1A\u5F00\u53D1\u8005</h2><p><img src="https://downloadflies.com//blog-img/fileName/7.png" alt="GO\u76EE\u5F55\u7ED3\u6784"></p>`,30),p=[s];function t(n,i){return e(),c("div",null,p)}var l=o(a,[["render",t],["__file","\u914D\u7F6EGOPATH.html.vue"]]);export{l as default};
