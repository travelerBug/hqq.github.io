import{_ as n,o as s,c as a,e as t}from"./app.ad4da1a1.js";const p={},o=t(`<h1 id="_1-runtime\u5305" tabindex="-1"><a class="header-anchor" href="#_1-runtime\u5305" aria-hidden="true">#</a> 1. runtime\u5305</h1><h3 id="_1-1-1-runtime-gosched" tabindex="-1"><a class="header-anchor" href="#_1-1-1-runtime-gosched" aria-hidden="true">#</a> 1.1.1. runtime.Gosched()</h3><p>\u8BA9\u51FACPU\u65F6\u95F4\u7247\uFF0C\u91CD\u65B0\u7B49\u5F85\u5B89\u6392\u4EFB\u52A1(\u5927\u6982\u610F\u601D\u5C31\u662F\u672C\u6765\u8BA1\u5212\u7684\u597D\u597D\u7684\u5468\u672B\u51FA\u53BB\u70E7\u70E4\uFF0C\u4F46\u662F\u4F60\u5988\u8BA9\u4F60\u53BB\u76F8\u4EB2,\u4E24\u79CD\u60C5\u51B5\u7B2C\u4E00\u5C31\u662F\u4F60\u76F8\u4EB2\u901F\u5EA6\u975E\u5E38\u5FEB\uFF0C\u89C1\u9762\u5C31\u9EC4\u4E0D\u803D\u8BEF\u4F60\u7EE7\u7EED\u70E7\u70E4\uFF0C\u7B2C\u4E8C\u79CD\u60C5\u51B5\u5C31\u662F\u4F60\u76F8\u4EB2\u901F\u5EA6\u7279\u522B\u6162\uFF0C\u89C1\u9762\u5C31\u662F\u4F60\u4FAC\u6211\u4FAC\u7684\uFF0C\u803D\u8BEF\u4E86\u70E7\u70E4\uFF0C\u4F46\u662F\u8FD8\u998B\u5C31\u662F\u803D\u8BEF\u4E86\u70E7\u70E4\u4F60\u8FD8\u5F97\u53BB\u70E7\u70E4)</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;runtime&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span>
    <span class="token comment">// \u4E3B\u534F\u7A0B</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5207\u4E00\u4E0B\uFF0C\u518D\u6B21\u5206\u914D\u4EFB\u52A1</span>
        runtime<span class="token punctuation">.</span><span class="token function">Gosched</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_1-1-2-runtime-goexit" tabindex="-1"><a class="header-anchor" href="#_1-1-2-runtime-goexit" aria-hidden="true">#</a> 1.1.2. runtime.Goexit()</h3><p>\u9000\u51FA\u5F53\u524D\u534F\u7A0B(\u4E00\u8FB9\u70E7\u70E4\u4E00\u8FB9\u76F8\u4EB2\uFF0C\u7A81\u7136\u53D1\u73B0\u76F8\u4EB2\u5BF9\u8C61\u592A\u4E11\u5F71\u54CD\u70E7\u70E4\uFF0C\u679C\u65AD\u8BA9\u5979\u6EDA\u86CB\uFF0C\u7136\u540E\u4E5F\u5C31\u6CA1\u6709\u7136\u540E\u4E86)</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;runtime&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;A.defer&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;B.defer&quot;</span><span class="token punctuation">)</span>
            <span class="token comment">// \u7ED3\u675F\u534F\u7A0B</span>
            runtime<span class="token punctuation">.</span><span class="token function">Goexit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">defer</span> fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;C.defer&quot;</span><span class="token punctuation">)</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_1-1-3-runtime-gomaxprocs" tabindex="-1"><a class="header-anchor" href="#_1-1-3-runtime-gomaxprocs" aria-hidden="true">#</a> 1.1.3. runtime.GOMAXPROCS</h3><p>Go\u8FD0\u884C\u65F6\u7684\u8C03\u5EA6\u5668\u4F7F\u7528GOMAXPROCS\u53C2\u6570\u6765\u786E\u5B9A\u9700\u8981\u4F7F\u7528\u591A\u5C11\u4E2AOS\u7EBF\u7A0B\u6765\u540C\u65F6\u6267\u884CGo\u4EE3\u7801\u3002\u9ED8\u8BA4\u503C\u662F\u673A\u5668\u4E0A\u7684CPU\u6838\u5FC3\u6570\u3002\u4F8B\u5982\u5728\u4E00\u4E2A8\u6838\u5FC3\u7684\u673A\u5668\u4E0A\uFF0C\u8C03\u5EA6\u5668\u4F1A\u628AGo\u4EE3\u7801\u540C\u65F6\u8C03\u5EA6\u52308\u4E2AOS\u7EBF\u7A0B\u4E0A\uFF08GOMAXPROCS\u662Fm:n\u8C03\u5EA6\u4E2D\u7684n\uFF09\u3002</p><p>Go\u8BED\u8A00\u4E2D\u53EF\u4EE5\u901A\u8FC7runtime.GOMAXPROCS()\u51FD\u6570\u8BBE\u7F6E\u5F53\u524D\u7A0B\u5E8F\u5E76\u53D1\u65F6\u5360\u7528\u7684CPU\u903B\u8F91\u6838\u5FC3\u6570\u3002</p><p>Go1.5\u7248\u672C\u4E4B\u524D\uFF0C\u9ED8\u8BA4\u4F7F\u7528\u7684\u662F\u5355\u6838\u5FC3\u6267\u884C\u3002Go1.5\u7248\u672C\u4E4B\u540E\uFF0C\u9ED8\u8BA4\u4F7F\u7528\u5168\u90E8\u7684CPU\u903B\u8F91\u6838\u5FC3\u6570\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5C06\u4EFB\u52A1\u5206\u914D\u5230\u4E0D\u540C\u7684CPU\u903B\u8F91\u6838\u5FC3\u4E0A\u5B9E\u73B0\u5E76\u884C\u7684\u6548\u679C\uFF0C\u8FD9\u91CC\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;A:&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;B:&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    runtime<span class="token punctuation">.</span><span class="token function">GOMAXPROCS</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E24\u4E2A\u4EFB\u52A1\u53EA\u6709\u4E00\u4E2A\u903B\u8F91\u6838\u5FC3\uFF0C\u6B64\u65F6\u662F\u505A\u5B8C\u4E00\u4E2A\u4EFB\u52A1\u518D\u505A\u53E6\u4E00\u4E2A\u4EFB\u52A1\u3002 \u5C06\u903B\u8F91\u6838\u5FC3\u6570\u8BBE\u4E3A2\uFF0C\u6B64\u65F6\u4E24\u4E2A\u4EFB\u52A1\u5E76\u884C\u6267\u884C\uFF0C\u4EE3\u7801\u5982\u4E0B\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;A:&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;B:&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    runtime<span class="token punctuation">.</span><span class="token function">GOMAXPROCS</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Go\u8BED\u8A00\u4E2D\u7684\u64CD\u4F5C\u7CFB\u7EDF\u7EBF\u7A0B\u548Cgoroutine\u7684\u5173\u7CFB\uFF1A</p><ul><li>1.\u4E00\u4E2A\u64CD\u4F5C\u7CFB\u7EDF\u7EBF\u7A0B\u5BF9\u5E94\u7528\u6237\u6001\u591A\u4E2Agoroutine\u3002</li><li>2.go\u7A0B\u5E8F\u53EF\u4EE5\u540C\u65F6\u4F7F\u7528\u591A\u4E2A\u64CD\u4F5C\u7CFB\u7EDF\u7EBF\u7A0B\u3002</li><li>3.goroutine\u548COS\u7EBF\u7A0B\u662F\u591A\u5BF9\u591A\u7684\u5173\u7CFB\uFF0C\u5373m:n\u3002</li></ul>`,17),c=[o];function e(u,l){return s(),a("div",null,c)}var k=n(p,[["render",e],["__file","2-runtime\u5305.html.vue"]]);export{k as default};
