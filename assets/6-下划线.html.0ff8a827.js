import{_ as n,o as s,c as a,e as t}from"./app.a047c15b.js";const p={},o=t(`<h1 id="_1-\u4E0B\u5212\u7EBF" tabindex="-1"><a class="header-anchor" href="#_1-\u4E0B\u5212\u7EBF" aria-hidden="true">#</a> 1. \u4E0B\u5212\u7EBF</h1><p>\u201C_\u201D\u662F\u7279\u6B8A\u6807\u8BC6\u7B26\uFF0C\u7528\u6765\u5FFD\u7565\u7ED3\u679C\u3002</p><h3 id="_1-1-1-\u4E0B\u5212\u7EBF\u5728import\u4E2D" tabindex="-1"><a class="header-anchor" href="#_1-1-1-\u4E0B\u5212\u7EBF\u5728import\u4E2D" aria-hidden="true">#</a> 1.1.1. \u4E0B\u5212\u7EBF\u5728import\u4E2D</h3><div class="language-text ext-text"><pre class="language-text"><code> \u5728Golang\u91CC\uFF0Cimport\u7684\u4F5C\u7528\u662F\u5BFC\u5165\u5176\u4ED6package\u3002
</code></pre></div><p>import \u4E0B\u5212\u7EBF\uFF08\u5982\uFF1Aimport <em>hello/imp\uFF09\u7684\u4F5C\u7528\uFF1A\u5F53\u5BFC\u5165\u4E00\u4E2A\u5305\u65F6\uFF0C\u8BE5\u5305\u4E0B\u7684\u6587\u4EF6\u91CC\u6240\u6709init()\u51FD\u6570\u90FD\u4F1A\u88AB\u6267\u884C\uFF0C\u7136\u800C\uFF0C\u6709\u4E9B\u65F6\u5019\u6211\u4EEC\u5E76\u4E0D\u9700\u8981\u628A\u6574\u4E2A\u5305\u90FD\u5BFC\u5165\u8FDB\u6765\uFF0C\u4EC5\u4EC5\u662F\u662F\u5E0C\u671B\u5B83\u6267\u884Cinit()\u51FD\u6570\u800C\u5DF2\u3002\u8FD9\u4E2A\u65F6\u5019\u5C31\u53EF\u4EE5\u4F7F\u7528 import</em> \u5F15\u7528\u8BE5\u5305\u3002\u5373\u4F7F\u7528\u3010import _ \u5305\u8DEF\u5F84\u3011\u53EA\u662F\u5F15\u7528\u8BE5\u5305\uFF0C\u4EC5\u4EC5\u662F\u4E3A\u4E86\u8C03\u7528init()\u51FD\u6570\uFF0C\u6240\u4EE5\u65E0\u6CD5\u901A\u8FC7\u5305\u540D\u6765\u8C03\u7528\u5305\u4E2D\u7684\u5176\u4ED6\u51FD\u6570\u3002 \u793A\u4F8B\uFF1A</p><p>\u4EE3\u7801\u7ED3\u6784</p><div class="language-text ext-text"><pre class="language-text"><code>    src 
    |
    +--- main.go            
    |
    +--- hello
           |
            +--- hello.go
package main

import _ &quot;./hello&quot;

func main() {
    // hello.Print() 
    //\u7F16\u8BD1\u62A5\u9519\uFF1A./main.go:6:5: undefined: hello
}
</code></pre></div><p>hello.go</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> hello

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;imp-init() come here.&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello!&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    imp-init() come here.
</code></pre></div><h3 id="_1-1-2-\u4E0B\u5212\u7EBF\u5728\u4EE3\u7801\u4E2D" tabindex="-1"><a class="header-anchor" href="#_1-1-2-\u4E0B\u5212\u7EBF\u5728\u4EE3\u7801\u4E2D" aria-hidden="true">#</a> 1.1.2. \u4E0B\u5212\u7EBF\u5728\u4EE3\u7801\u4E2D</h3><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    buf <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">)</span>
    f<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;/Users/***/Desktop/text.txt&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">defer</span> f<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        n<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> f<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
        <span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            <span class="token keyword">break</span>    

        <span class="token punctuation">}</span>
        os<span class="token punctuation">.</span>Stdout<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u89E3\u91CA1\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    \u4E0B\u5212\u7EBF\u610F\u601D\u662F\u5FFD\u7565\u8FD9\u4E2A\u53D8\u91CF.

    \u6BD4\u5982os.Open\uFF0C\u8FD4\u56DE\u503C\u4E3A*os.File\uFF0Cerror

    \u666E\u901A\u5199\u6CD5\u662Ff,err := os.Open(&quot;xxxxxxx&quot;)

    \u5982\u679C\u6B64\u65F6\u4E0D\u9700\u8981\u77E5\u9053\u8FD4\u56DE\u7684\u9519\u8BEF\u503C

    \u5C31\u53EF\u4EE5\u7528f, _ := os.Open(&quot;xxxxxx&quot;)

    \u5982\u6B64\u5219\u5FFD\u7565\u4E86error\u53D8\u91CF
</code></pre></div><p>\u89E3\u91CA2\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    \u5360\u4F4D\u7B26\uFF0C\u610F\u601D\u662F\u90A3\u4E2A\u4F4D\u7F6E\u672C\u5E94\u8D4B\u7ED9\u67D0\u4E2A\u503C\uFF0C\u4F46\u662F\u54B1\u4EEC\u4E0D\u9700\u8981\u8FD9\u4E2A\u503C\u3002
    \u6240\u4EE5\u5C31\u628A\u8BE5\u503C\u8D4B\u7ED9\u4E0B\u5212\u7EBF\uFF0C\u610F\u601D\u662F\u4E22\u6389\u4E0D\u8981\u3002
    \u8FD9\u6837\u7F16\u8BD1\u5668\u53EF\u4EE5\u66F4\u597D\u7684\u4F18\u5316\uFF0C\u4EFB\u4F55\u7C7B\u578B\u7684\u5355\u4E2A\u503C\u90FD\u53EF\u4EE5\u4E22\u7ED9\u4E0B\u5212\u7EBF\u3002
    \u8FD9\u79CD\u60C5\u51B5\u662F\u5360\u4F4D\u7528\u7684\uFF0C\u65B9\u6CD5\u8FD4\u56DE\u4E24\u4E2A\u7ED3\u679C\uFF0C\u800C\u4F60\u53EA\u60F3\u8981\u4E00\u4E2A\u7ED3\u679C\u3002
    \u90A3\u53E6\u4E00\u4E2A\u5C31\u7528 &quot;_&quot; \u5360\u4F4D\uFF0C\u800C\u5982\u679C\u7528\u53D8\u91CF\u7684\u8BDD\uFF0C\u4E0D\u4F7F\u7528\uFF0C\u7F16\u8BD1\u5668\u662F\u4F1A\u62A5\u9519\u7684\u3002
</code></pre></div><p>\u8865\u5145\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    import &quot;database/sql&quot;
    import _ &quot;github.com/go-sql-driver/mysql&quot;
</code></pre></div><p>\u7B2C\u4E8C\u4E2Aimport\u5C31\u662F\u4E0D\u76F4\u63A5\u4F7F\u7528mysql\u5305\uFF0C\u53EA\u662F\u6267\u884C\u4E00\u4E0B\u8FD9\u4E2A\u5305\u7684init\u51FD\u6570\uFF0C\u628Amysql\u7684\u9A71\u52A8\u6CE8\u518C\u5230sql\u5305\u91CC\uFF0C\u7136\u540E\u7A0B\u5E8F\u91CC\u5C31\u53EF\u4EE5\u4F7F\u7528sql\u5305\u6765\u8BBF\u95EEmysql\u6570\u636E\u5E93\u4E86\u3002</p>`,20),e=[o];function c(u,l){return s(),a("div",null,e)}var r=n(p,[["render",c],["__file","6-\u4E0B\u5212\u7EBF.html.vue"]]);export{r as default};
