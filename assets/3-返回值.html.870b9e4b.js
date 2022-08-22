import{_ as n,o as s,c as a,e as p}from"./app.6faec84d.js";const t={},o=p(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h1 id="\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u503C" aria-hidden="true">#</a> \u8FD4\u56DE\u503C</h1><h3 id="_1-1-1-\u51FD\u6570\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#_1-1-1-\u51FD\u6570\u8FD4\u56DE\u503C" aria-hidden="true">#</a> 1.1.1. \u51FD\u6570\u8FD4\u56DE\u503C</h3><p><code>&quot;_&quot;</code>\u6807\u8BC6\u7B26\uFF0C\u7528\u6765\u5FFD\u7565\u51FD\u6570\u7684\u67D0\u4E2A\u8FD4\u56DE\u503C</p><p>Go \u7684\u8FD4\u56DE\u503C\u53EF\u4EE5\u88AB\u547D\u540D\uFF0C\u5E76\u4E14\u5C31\u50CF\u5728\u51FD\u6570\u4F53\u5F00\u5934\u58F0\u660E\u7684\u53D8\u91CF\u90A3\u6837\u4F7F\u7528\u3002</p><p>\u8FD4\u56DE\u503C\u7684\u540D\u79F0\u5E94\u5F53\u5177\u6709\u4E00\u5B9A\u7684\u610F\u4E49\uFF0C\u53EF\u4EE5\u4F5C\u4E3A\u6587\u6863\u4F7F\u7528\u3002</p><p>\u6CA1\u6709\u53C2\u6570\u7684 return \u8BED\u53E5\u8FD4\u56DE\u5404\u4E2A\u8FD4\u56DE\u53D8\u91CF\u7684\u5F53\u524D\u503C\u3002\u8FD9\u79CD\u7528\u6CD5\u88AB\u79F0\u4F5C\u201C\u88F8\u201D\u8FD4\u56DE\u3002</p><p>\u76F4\u63A5\u8FD4\u56DE\u8BED\u53E5\u4EC5\u5E94\u5F53\u7528\u5728\u50CF\u4E0B\u9762\u8FD9\u6837\u7684\u77ED\u51FD\u6570\u4E2D\u3002\u5728\u957F\u7684\u51FD\u6570\u4E2D\u5B83\u4EEC\u4F1A\u5F71\u54CD\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>c <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    c <span class="token operator">=</span> a <span class="token operator">+</span> b
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">calc</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>sum <span class="token builtin">int</span><span class="token punctuation">,</span> avg <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sum <span class="token operator">=</span> a <span class="token operator">+</span> b
    avg <span class="token operator">=</span> <span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span>

    <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> a<span class="token punctuation">,</span> b <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span>
    c <span class="token operator">:=</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
    sum<span class="token punctuation">,</span> avg <span class="token operator">:=</span> <span class="token function">calc</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> sum<span class="token punctuation">,</span> avg<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    1 2 3 3 1
</code></pre></div><p>Golang\u8FD4\u56DE\u503C\u4E0D\u80FD\u7528\u5BB9\u5668\u5BF9\u8C61\u63A5\u6536\u591A\u8FD4\u56DE\u503C\u3002\u53EA\u80FD\u7528\u591A\u4E2A\u53D8\u91CF\uFF0C\u6216 <code>&quot;_&quot;</code> \u5FFD\u7565\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// s := make([]int, 2)</span>
    <span class="token comment">// s = test()   // Error: multiple-value test() in single-value context</span>

    x<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">println</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    1
</code></pre></div><p>\u591A\u8FD4\u56DE\u503C\u53EF\u76F4\u63A5\u4F5C\u4E3A\u5176\u4ED6\u51FD\u6570\u8C03\u7528\u5B9E\u53C2\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">sum</span><span class="token punctuation">(</span>n <span class="token operator">...</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> x <span class="token builtin">int</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> n <span class="token punctuation">{</span>
        x <span class="token operator">+=</span> i
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> x
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    3
    3
</code></pre></div><p>\u547D\u540D\u8FD4\u56DE\u53C2\u6570\u53EF\u770B\u505A\u4E0E\u5F62\u53C2\u7C7B\u4F3C\u7684\u5C40\u90E8\u53D8\u91CF\uFF0C\u6700\u540E\u7531 return \u9690\u5F0F\u8FD4\u56DE\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">func</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>z <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    z <span class="token operator">=</span> x <span class="token operator">+</span> y
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    3
</code></pre></div><p>\u547D\u540D\u8FD4\u56DE\u53C2\u6570\u53EF\u88AB\u540C\u540D\u5C40\u90E8\u53D8\u91CF\u906E\u853D\uFF0C\u6B64\u65F6\u9700\u8981\u663E\u5F0F\u8FD4\u56DE\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>z <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">{</span> <span class="token comment">// \u4E0D\u80FD\u5728\u4E00\u4E2A\u7EA7\u522B\uFF0C\u5F15\u53D1 &quot;z redeclared in this block&quot; \u9519\u8BEF\u3002</span>
        <span class="token keyword">var</span> z <span class="token operator">=</span> x <span class="token operator">+</span> y
        <span class="token comment">// return   // Error: z is shadowed during return</span>
        <span class="token keyword">return</span> z <span class="token comment">// \u5FC5\u987B\u663E\u5F0F\u8FD4\u56DE\u3002</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u547D\u540D\u8FD4\u56DE\u53C2\u6570\u5141\u8BB8 defer \u5EF6\u8FDF\u8C03\u7528\u901A\u8FC7\u95ED\u5305\u8BFB\u53D6\u548C\u4FEE\u6539\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">func</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>z <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        z <span class="token operator">+=</span> <span class="token number">100</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    z <span class="token operator">=</span> x <span class="token operator">+</span> y
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    103
</code></pre></div><p>\u663E\u5F0F return \u8FD4\u56DE\u524D\uFF0C\u4F1A\u5148\u4FEE\u6539\u547D\u540D\u8FD4\u56DE\u53C2\u6570\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">func</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>z <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span> <span class="token comment">// \u8F93\u51FA: 203</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    z <span class="token operator">=</span> x <span class="token operator">+</span> y
    <span class="token keyword">return</span> z <span class="token operator">+</span> <span class="token number">200</span> <span class="token comment">// \u6267\u884C\u987A\u5E8F: (z = z + 200) -&gt; (call defer) -&gt; (return)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u8F93\u51FA: 203</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    203
    203
</code></pre></div>`,33),c=[o];function e(u,l){return s(),a("div",null,c)}var i=n(t,[["render",e],["__file","3-\u8FD4\u56DE\u503C.html.vue"]]);export{i as default};
