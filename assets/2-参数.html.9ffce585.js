import{_ as n,o as s,c as a,e as p}from"./app.6faec84d.js";const t={},o=p(`<h1 id="_1-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_1-\u53C2\u6570" aria-hidden="true">#</a> 1. \u53C2\u6570</h1><h3 id="_1-1-1-\u51FD\u6570\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_1-1-1-\u51FD\u6570\u53C2\u6570" aria-hidden="true">#</a> 1.1.1. \u51FD\u6570\u53C2\u6570</h3><p>\u51FD\u6570\u5B9A\u4E49\u65F6\u6307\u51FA\uFF0C\u51FD\u6570\u5B9A\u4E49\u65F6\u6709\u53C2\u6570\uFF0C\u8BE5\u53D8\u91CF\u53EF\u79F0\u4E3A\u51FD\u6570\u7684\u5F62\u53C2\u3002\u5F62\u53C2\u5C31\u50CF\u5B9A\u4E49\u5728\u51FD\u6570\u4F53\u5185\u7684\u5C40\u90E8\u53D8\u91CF\u3002</p><p>\u4F46\u5F53\u8C03\u7528\u51FD\u6570\uFF0C\u4F20\u9012\u8FC7\u6765\u7684\u53D8\u91CF\u5C31\u662F\u51FD\u6570\u7684\u5B9E\u53C2\uFF0C\u51FD\u6570\u53EF\u4EE5\u901A\u8FC7\u4E24\u79CD\u65B9\u5F0F\u6765\u4F20\u9012\u53C2\u6570\uFF1A</p><p>\u503C\u4F20\u9012\uFF1A\u6307\u5728\u8C03\u7528\u51FD\u6570\u65F6\u5C06\u5B9E\u9645\u53C2\u6570\u590D\u5236\u4E00\u4EFD\u4F20\u9012\u5230\u51FD\u6570\u4E2D\uFF0C\u8FD9\u6837\u5728\u51FD\u6570\u4E2D\u5982\u679C\u5BF9\u53C2\u6570\u8FDB\u884C\u4FEE\u6539\uFF0C\u5C06\u4E0D\u4F1A\u5F71\u54CD\u5230\u5B9E\u9645\u53C2\u6570\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">swap</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
       <span class="token operator">...</span> <span class="token operator">...</span>
  <span class="token punctuation">}</span>
</code></pre></div><p>\u5F15\u7528\u4F20\u9012\uFF1A\u662F\u6307\u5728\u8C03\u7528\u51FD\u6570\u65F6\u5C06\u5B9E\u9645\u53C2\u6570\u7684\u5730\u5740\u4F20\u9012\u5230\u51FD\u6570\u4E2D\uFF0C\u90A3\u4E48\u5728\u51FD\u6570\u4E2D\u5BF9\u53C2\u6570\u6240\u8FDB\u884C\u7684\u4FEE\u6539\uFF0C\u5C06\u5F71\u54CD\u5230\u5B9E\u9645\u53C2\u6570\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">/* \u5B9A\u4E49\u76F8\u4E92\u4EA4\u6362\u503C\u7684\u51FD\u6570 */</span>
<span class="token keyword">func</span> <span class="token function">swap</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token operator">*</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> temp <span class="token builtin">int</span>

    temp <span class="token operator">=</span> <span class="token operator">*</span>x <span class="token comment">/* \u4FDD\u5B58 x \u7684\u503C */</span>
    <span class="token operator">*</span>x <span class="token operator">=</span> <span class="token operator">*</span>y   <span class="token comment">/* \u5C06 y \u503C\u8D4B\u7ED9 x */</span>
    <span class="token operator">*</span>y <span class="token operator">=</span> temp <span class="token comment">/* \u5C06 temp \u503C\u8D4B\u7ED9 y*/</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> a<span class="token punctuation">,</span> b <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span>
    <span class="token comment">/*
        \u8C03\u7528 swap() \u51FD\u6570
        &amp;a \u6307\u5411 a \u6307\u9488\uFF0Ca \u53D8\u91CF\u7684\u5730\u5740
        &amp;b \u6307\u5411 b \u6307\u9488\uFF0Cb \u53D8\u91CF\u7684\u5730\u5740
    */</span>
    <span class="token function">swap</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>a<span class="token punctuation">,</span> <span class="token operator">&amp;</span>b<span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    2 1
</code></pre></div><p>\u5728\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CGo \u8BED\u8A00\u4F7F\u7528\u7684\u662F\u503C\u4F20\u9012\uFF0C\u5373\u5728\u8C03\u7528\u8FC7\u7A0B\u4E2D\u4E0D\u4F1A\u5F71\u54CD\u5230\u5B9E\u9645\u53C2\u6570\u3002</p><p>\u6CE8\u610F1\uFF1A\u65E0\u8BBA\u662F\u503C\u4F20\u9012\uFF0C\u8FD8\u662F\u5F15\u7528\u4F20\u9012\uFF0C\u4F20\u9012\u7ED9\u51FD\u6570\u7684\u90FD\u662F\u53D8\u91CF\u7684\u526F\u672C\uFF0C\u4E0D\u8FC7\uFF0C\u503C\u4F20\u9012\u662F\u503C\u7684\u62F7\u8D1D\u3002\u5F15\u7528\u4F20\u9012\u662F\u5730\u5740\u7684\u62F7\u8D1D\uFF0C\u4E00\u822C\u6765\u8BF4\uFF0C\u5730\u5740\u62F7\u8D1D\u66F4\u4E3A\u9AD8\u6548\u3002\u800C\u503C\u62F7\u8D1D\u53D6\u51B3\u4E8E\u62F7\u8D1D\u7684\u5BF9\u8C61\u5927\u5C0F\uFF0C\u5BF9\u8C61\u8D8A\u5927\uFF0C\u5219\u6027\u80FD\u8D8A\u4F4E\u3002</p><p>\u6CE8\u610F2\uFF1Amap\u3001slice\u3001chan\u3001\u6307\u9488\u3001interface\u9ED8\u8BA4\u4EE5\u5F15\u7528\u7684\u65B9\u5F0F\u4F20\u9012\u3002</p><p>\u4E0D\u5B9A\u53C2\u6570\u4F20\u503C \u5C31\u662F\u51FD\u6570\u7684\u53C2\u6570\u4E0D\u662F\u56FA\u5B9A\u7684\uFF0C\u540E\u9762\u7684\u7C7B\u578B\u662F\u56FA\u5B9A\u7684\u3002\uFF08\u53EF\u53D8\u53C2\u6570\uFF09</p><p>Golang \u53EF\u53D8\u53C2\u6570\u672C\u8D28\u4E0A\u5C31\u662F slice\u3002\u53EA\u80FD\u6709\u4E00\u4E2A\uFF0C\u4E14\u5FC5\u987B\u662F\u6700\u540E\u4E00\u4E2A\u3002</p><p>\u5728\u53C2\u6570\u8D4B\u503C\u65F6\u53EF\u4EE5\u4E0D\u7528\u7528\u4E00\u4E2A\u4E00\u4E2A\u7684\u8D4B\u503C\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F20\u9012\u4E00\u4E2A\u6570\u7EC4\u6216\u8005\u5207\u7247\uFF0C\u7279\u522B\u6CE8\u610F\u7684\u662F\u5728\u53C2\u6570\u540E\u52A0\u4E0A\u201C\u2026\u201D\u5373\u53EF\u3002</p><div class="language-go ext-go"><pre class="language-go"><code>  <span class="token keyword">func</span> <span class="token function">myfunc</span><span class="token punctuation">(</span>args <span class="token operator">...</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    <span class="token comment">//0\u4E2A\u6216\u591A\u4E2A\u53C2\u6570</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">func</span> <span class="token function">add</span><span class="token punctuation">(</span>a <span class="token builtin">int</span><span class="token punctuation">,</span> args\u2026<span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>    <span class="token comment">//1\u4E2A\u6216\u591A\u4E2A\u53C2\u6570</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">func</span> <span class="token function">add</span><span class="token punctuation">(</span>a <span class="token builtin">int</span><span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">,</span> args\u2026<span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>    <span class="token comment">//2\u4E2A\u6216\u591A\u4E2A\u53C2\u6570</span>
  <span class="token punctuation">}</span>
</code></pre></div><p>\u6CE8\u610F\uFF1A\u5176\u4E2Dargs\u662F\u4E00\u4E2Aslice\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7arg[index]\u4F9D\u6B21\u8BBF\u95EE\u6240\u6709\u53C2\u6570,\u901A\u8FC7len(arg)\u6765\u5224\u65AD\u4F20\u9012\u53C2\u6570\u7684\u4E2A\u6570.</p><p>\u4EFB\u610F\u7C7B\u578B\u7684\u4E0D\u5B9A\u53C2\u6570\uFF1A \u5C31\u662F\u51FD\u6570\u7684\u53C2\u6570\u548C\u6BCF\u4E2A\u53C2\u6570\u7684\u7C7B\u578B\u90FD\u4E0D\u662F\u56FA\u5B9A\u7684\u3002</p><p>\u7528interface{}\u4F20\u9012\u4EFB\u610F\u7C7B\u578B\u6570\u636E\u662FGo\u8BED\u8A00\u7684\u60EF\u4F8B\u7528\u6CD5\uFF0C\u800C\u4E14interface{}\u662F\u7C7B\u578B\u5B89\u5168\u7684\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">myfunc</span><span class="token punctuation">(</span>args <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
</code></pre></div><p>\u4EE3\u7801\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">,</span> n <span class="token operator">...</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> x <span class="token builtin">int</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> n <span class="token punctuation">{</span>
        x <span class="token operator">+=</span> i
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> x<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&quot;sum: %d&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    sum: 6
</code></pre></div><p>\u4F7F\u7528 slice \u5BF9\u8C61\u505A\u53D8\u53C2\u65F6\uFF0C\u5FC5\u987B\u5C55\u5F00\u3002<code>\uFF08slice...\uFF09</code></p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">,</span> n <span class="token operator">...</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> x <span class="token builtin">int</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> n <span class="token punctuation">{</span>
        x <span class="token operator">+=</span> i
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> x<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    s <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
    res <span class="token operator">:=</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&quot;sum: %d&quot;</span><span class="token punctuation">,</span> s<span class="token operator">...</span><span class="token punctuation">)</span>    <span class="token comment">// slice... \u5C55\u5F00slice</span>
    <span class="token function">println</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,27),c=[o];function e(u,l){return s(),a("div",null,c)}var k=n(t,[["render",e],["__file","2-\u53C2\u6570.html.vue"]]);export{k as default};
