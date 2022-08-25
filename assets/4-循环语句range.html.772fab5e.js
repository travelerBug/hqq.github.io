import{_ as n,o as s,c as a,e as t}from"./app.b23c8c09.js";const p={},o=t(`<h1 id="_1-\u5FAA\u73AF\u8BED\u53E5range" tabindex="-1"><a class="header-anchor" href="#_1-\u5FAA\u73AF\u8BED\u53E5range" aria-hidden="true">#</a> 1. \u5FAA\u73AF\u8BED\u53E5range</h1><p>Golang range\u7C7B\u4F3C\u8FED\u4EE3\u5668\u64CD\u4F5C\uFF0C\u8FD4\u56DE (\u7D22\u5F15, \u503C) \u6216 (\u952E, \u503C)\u3002</p><p>for \u5FAA\u73AF\u7684 range \u683C\u5F0F\u53EF\u4EE5\u5BF9 slice\u3001map\u3001\u6570\u7EC4\u3001\u5B57\u7B26\u4E32\u7B49\u8FDB\u884C\u8FED\u4EE3\u5FAA\u73AF\u3002\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">for</span> key<span class="token punctuation">,</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> oldMap <span class="token punctuation">{</span>
    newMap<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value
<span class="token punctuation">}</span>
</code></pre></div><table><thead><tr><th style="text-align:left;"></th><th>1st value</th><th>2nd value</th><th></th></tr></thead><tbody><tr><td style="text-align:left;">string</td><td>index</td><td>s[index]</td><td>unicode, rune</td></tr><tr><td style="text-align:left;">array/slice</td><td>index</td><td>s[index]</td><td></td></tr><tr><td style="text-align:left;">map</td><td>key</td><td>m[key]</td><td></td></tr><tr><td style="text-align:left;">channel</td><td>element</td><td></td><td></td></tr></tbody></table><p>\u53EF\u5FFD\u7565\u4E0D\u60F3\u8981\u7684\u8FD4\u56DE\u503C\uFF0C\u6216 <code>&quot;_&quot;</code> \u8FD9\u4E2A\u7279\u6B8A\u53D8\u91CF\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    s <span class="token operator">:=</span> <span class="token string">&quot;abc&quot;</span>
    <span class="token comment">// \u5FFD\u7565 2nd value\uFF0C\u652F\u6301 string/array/slice/map\u3002</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> s <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u5FFD\u7565 index\u3002</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> c <span class="token operator">:=</span> <span class="token keyword">range</span> s <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u5FFD\u7565\u5168\u90E8\u8FD4\u56DE\u503C\uFF0C\u4EC5\u8FED\u4EE3\u3002</span>
    <span class="token keyword">for</span> <span class="token keyword">range</span> s <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    m <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">}</span>
    <span class="token comment">// \u8FD4\u56DE (key, value)\u3002</span>
    <span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> m <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    97
    98
    99
    97
    98
    99
    a 1
    b 2
</code></pre></div><p><code>*</code>\u6CE8\u610F\uFF0Crange \u4F1A\u590D\u5236\u5BF9\u8C61\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span>

    <span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> a <span class="token punctuation">{</span> <span class="token comment">// index\u3001value \u90FD\u662F\u4ECE\u590D\u5236\u54C1\u4E2D\u53D6\u51FA\u3002</span>

        <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span> <span class="token comment">// \u5728\u4FEE\u6539\u524D\uFF0C\u6211\u4EEC\u5148\u4FEE\u6539\u539F\u6570\u7EC4\u3002</span>
            a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">999</span><span class="token punctuation">,</span> <span class="token number">999</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// \u786E\u8BA4\u4FEE\u6539\u6709\u6548\uFF0C\u8F93\u51FA [0, 999, 999]\u3002</span>
        <span class="token punctuation">}</span>

        a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> v <span class="token operator">+</span> <span class="token number">100</span> <span class="token comment">// \u4F7F\u7528\u590D\u5236\u54C1\u4E2D\u53D6\u51FA\u7684 value \u4FEE\u6539\u539F\u6570\u7EC4\u3002</span>

    <span class="token punctuation">}</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// \u8F93\u51FA [100, 101, 102]\u3002</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    [0 999 999]
    [100 101 102]
</code></pre></div><p>\u5EFA\u8BAE\u6539\u7528\u5F15\u7528\u7C7B\u578B\uFF0C\u5176\u5E95\u5C42\u6570\u636E\u4E0D\u4F1A\u88AB\u590D\u5236\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    s <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>

    <span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> s <span class="token punctuation">{</span> <span class="token comment">// \u590D\u5236 struct slice { pointer, len, cap }\u3002</span>

        <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            s <span class="token operator">=</span> s<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>  <span class="token comment">// \u5BF9 slice \u7684\u4FEE\u6539\uFF0C\u4E0D\u4F1A\u5F71\u54CD range\u3002</span>
            s<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span> <span class="token comment">// \u5BF9\u5E95\u5C42\u6570\u636E\u7684\u4FEE\u6539\u3002</span>
        <span class="token punctuation">}</span>

        <span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C:</p><div class="language-text ext-text"><pre class="language-text"><code>    0 1
    1 2
    2 100
    3 4
    4 5
</code></pre></div><p>\u53E6\u5916\u4E24\u79CD\u5F15\u7528\u7C7B\u578B map\u3001channel \u662F\u6307\u9488\u5305\u88C5\uFF0C\u800C\u4E0D\u50CF slice \u662F struct\u3002</p><p>for \u548C for range\u6709\u4EC0\u4E48\u533A\u522B?</p><p>\u4E3B\u8981\u662F\u4F7F\u7528\u573A\u666F\u4E0D\u540C</p><p>for\u53EF\u4EE5</p><p>\u904D\u5386array\u548Cslice</p><p>\u904D\u5386key\u4E3A\u6574\u578B\u9012\u589E\u7684map</p><p>\u904D\u5386string</p><p>for range\u53EF\u4EE5\u5B8C\u6210\u6240\u6709for\u53EF\u4EE5\u505A\u7684\u4E8B\u60C5\uFF0C\u5374\u80FD\u505A\u5230for\u4E0D\u80FD\u505A\u7684\uFF0C\u5305\u62EC</p><p>\u904D\u5386key\u4E3Astring\u7C7B\u578B\u7684map\u5E76\u540C\u65F6\u83B7\u53D6key\u548Cvalue</p><p>\u904D\u5386channel</p>`,27),e=[o];function c(l,u){return s(),a("div",null,e)}var i=n(p,[["render",c],["__file","4-\u5FAA\u73AF\u8BED\u53E5range.html.vue"]]);export{i as default};
