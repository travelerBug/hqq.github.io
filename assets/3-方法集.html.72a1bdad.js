import{_ as n,o as s,c as a,e as t}from"./app.ad4da1a1.js";const p={},o=t(`<h1 id="_1-\u65B9\u6CD5\u96C6" tabindex="-1"><a class="header-anchor" href="#_1-\u65B9\u6CD5\u96C6" aria-hidden="true">#</a> 1. \u65B9\u6CD5\u96C6</h1><p>Golang\u65B9\u6CD5\u96C6 \uFF1A\u6BCF\u4E2A\u7C7B\u578B\u90FD\u6709\u4E0E\u4E4B\u5173\u8054\u7684\u65B9\u6CD5\u96C6\uFF0C\u8FD9\u4F1A\u5F71\u54CD\u5230\u63A5\u53E3\u5B9E\u73B0\u89C4\u5219\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>    \u2022 \u7C7B\u578B T \u65B9\u6CD5\u96C6\u5305\u542B\u5168\u90E8 receiver T \u65B9\u6CD5\u3002
    \u2022 \u7C7B\u578B *T \u65B9\u6CD5\u96C6\u5305\u542B\u5168\u90E8 receiver T + *T \u65B9\u6CD5\u3002
    \u2022 \u5982\u7C7B\u578B S \u5305\u542B\u533F\u540D\u5B57\u6BB5 T\uFF0C\u5219 S \u548C *S \u65B9\u6CD5\u96C6\u5305\u542B T \u65B9\u6CD5\u3002 
    \u2022 \u5982\u7C7B\u578B S \u5305\u542B\u533F\u540D\u5B57\u6BB5 *T\uFF0C\u5219 S \u548C *S \u65B9\u6CD5\u96C6\u5305\u542B T + *T \u65B9\u6CD5\u3002 
    \u2022 \u4E0D\u7BA1\u5D4C\u5165 T \u6216 *T\uFF0C*S \u65B9\u6CD5\u96C6\u603B\u662F\u5305\u542B T + *T \u65B9\u6CD5\u3002
</code></pre></div><p>\u7528\u5B9E\u4F8B value \u548C pointer \u8C03\u7528\u65B9\u6CD5 (\u542B\u533F\u540D\u5B57\u6BB5) \u4E0D\u53D7\u65B9\u6CD5\u96C6\u7EA6\u675F\uFF0C\u7F16\u8BD1\u5668\u603B\u662F\u67E5\u627E\u5168\u90E8\u65B9\u6CD5\uFF0C\u5E76\u81EA\u52A8\u8F6C\u6362 receiver \u5B9E\u53C2\u3002</p><p>Go \u8BED\u8A00\u4E2D\u5185\u90E8\u7C7B\u578B\u65B9\u6CD5\u96C6\u63D0\u5347\u7684\u89C4\u5219\uFF1A</p><p>\u7C7B\u578B T \u65B9\u6CD5\u96C6\u5305\u542B\u5168\u90E8 receiver T \u65B9\u6CD5\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> T <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>t T<span class="token punctuation">)</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7C7B\u578B T \u65B9\u6CD5\u96C6\u5305\u542B\u5168\u90E8 receiver T \u65B9\u6CD5\u3002&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    t1 <span class="token operator">:=</span> T<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;t1 is : %v\\n&quot;</span><span class="token punctuation">,</span> t1<span class="token punctuation">)</span>
    t1<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    t1 is : {1}
    \u7C7B\u578B T \u65B9\u6CD5\u96C6\u5305\u542B\u5168\u90E8 receiver T \u65B9\u6CD5\u3002
</code></pre></div><p>\u7C7B\u578B <code>*T</code> \u65B9\u6CD5\u96C6\u5305\u542B\u5168\u90E8 <code>receiver T + *T</code> \u65B9\u6CD5\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> T <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>t T<span class="token punctuation">)</span> <span class="token function">testT</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7C7B\u578B *T \u65B9\u6CD5\u96C6\u5305\u542B\u5168\u90E8 receiver T \u65B9\u6CD5\u3002&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>t <span class="token operator">*</span>T<span class="token punctuation">)</span> <span class="token function">testP</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7C7B\u578B *T \u65B9\u6CD5\u96C6\u5305\u542B\u5168\u90E8 receiver *T \u65B9\u6CD5\u3002&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    t1 <span class="token operator">:=</span> T<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>
    t2 <span class="token operator">:=</span> <span class="token operator">&amp;</span>t1
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;t2 is : %v\\n&quot;</span><span class="token punctuation">,</span> t2<span class="token punctuation">)</span>
    t2<span class="token punctuation">.</span><span class="token function">testT</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    t2<span class="token punctuation">.</span><span class="token function">testP</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    t2 is : &amp;{1}
    \u7C7B\u578B *T \u65B9\u6CD5\u96C6\u5305\u542B\u5168\u90E8 receiver T \u65B9\u6CD5\u3002
    \u7C7B\u578B *T \u65B9\u6CD5\u96C6\u5305\u542B\u5168\u90E8 receiver *T \u65B9\u6CD5\u3002
</code></pre></div><p>\u7ED9\u5B9A\u4E00\u4E2A\u7ED3\u6784\u4F53\u7C7B\u578B S \u548C\u4E00\u4E2A\u547D\u540D\u4E3A T \u7684\u7C7B\u578B\uFF0C\u65B9\u6CD5\u63D0\u5347\u50CF\u4E0B\u9762\u89C4\u5B9A\u7684\u8FD9\u6837\u88AB\u5305\u542B\u5728\u7ED3\u6784\u4F53\u65B9\u6CD5\u96C6\u4E2D\uFF1A</p><p>\u5982\u7C7B\u578B S \u5305\u542B\u533F\u540D\u5B57\u6BB5 T\uFF0C\u5219 S \u548C <code>*S</code> \u65B9\u6CD5\u96C6\u5305\u542B T \u65B9\u6CD5\u3002</p><p>\u8FD9\u6761\u89C4\u5219\u8BF4\u7684\u662F\u5F53\u6211\u4EEC\u5D4C\u5165\u4E00\u4E2A\u7C7B\u578B\uFF0C\u5D4C\u5165\u7C7B\u578B\u7684\u63A5\u53D7\u8005\u4E3A\u503C\u7C7B\u578B\u7684\u65B9\u6CD5\u5C06\u88AB\u63D0\u5347\uFF0C\u53EF\u4EE5\u88AB\u5916\u90E8\u7C7B\u578B\u7684\u503C\u548C\u6307\u9488\u8C03\u7528\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> S <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    T
<span class="token punctuation">}</span>

<span class="token keyword">type</span> T <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>t T<span class="token punctuation">)</span> <span class="token function">testT</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5982\u7C7B\u578B S \u5305\u542B\u533F\u540D\u5B57\u6BB5 T\uFF0C\u5219 S \u548C *S \u65B9\u6CD5\u96C6\u5305\u542B T \u65B9\u6CD5\u3002&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    s1 <span class="token operator">:=</span> S<span class="token punctuation">{</span>T<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
    s2 <span class="token operator">:=</span> <span class="token operator">&amp;</span>s1
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;s1 is : %v\\n&quot;</span><span class="token punctuation">,</span> s1<span class="token punctuation">)</span>
    s1<span class="token punctuation">.</span><span class="token function">testT</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;s2 is : %v\\n&quot;</span><span class="token punctuation">,</span> s2<span class="token punctuation">)</span>
    s2<span class="token punctuation">.</span><span class="token function">testT</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    s1 is : {{1}}
    \u5982\u7C7B\u578B S \u5305\u542B\u533F\u540D\u5B57\u6BB5 T\uFF0C\u5219 S \u548C *S \u65B9\u6CD5\u96C6\u5305\u542B T \u65B9\u6CD5\u3002
    s2 is : &amp;{{1}}
    \u5982\u7C7B\u578B S \u5305\u542B\u533F\u540D\u5B57\u6BB5 T\uFF0C\u5219 S \u548C *S \u65B9\u6CD5\u96C6\u5305\u542B T \u65B9\u6CD5\u3002
</code></pre></div><p>\u5982\u7C7B\u578B S \u5305\u542B\u533F\u540D\u5B57\u6BB5 <code>*T</code>\uFF0C\u5219 S \u548C <code>*S</code> \u65B9\u6CD5\u96C6\u5305\u542B <code>T + *T</code> \u65B9\u6CD5\u3002</p><p>\u8FD9\u6761\u89C4\u5219\u8BF4\u7684\u662F\u5F53\u6211\u4EEC\u5D4C\u5165\u4E00\u4E2A\u7C7B\u578B\u7684\u6307\u9488\uFF0C\u5D4C\u5165\u7C7B\u578B\u7684\u63A5\u53D7\u8005\u4E3A\u503C\u7C7B\u578B\u6216\u6307\u9488\u7C7B\u578B\u7684\u65B9\u6CD5\u5C06\u88AB\u63D0\u5347\uFF0C\u53EF\u4EE5\u88AB\u5916\u90E8\u7C7B\u578B\u7684\u503C\u6216\u8005\u6307\u9488\u8C03\u7528\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> S <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    T
<span class="token punctuation">}</span>

<span class="token keyword">type</span> T <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>t T<span class="token punctuation">)</span> <span class="token function">testT</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5982\u7C7B\u578B S \u5305\u542B\u533F\u540D\u5B57\u6BB5 *T\uFF0C\u5219 S \u548C *S \u65B9\u6CD5\u96C6\u5305\u542B T \u65B9\u6CD5&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>t <span class="token operator">*</span>T<span class="token punctuation">)</span> <span class="token function">testP</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5982\u7C7B\u578B S \u5305\u542B\u533F\u540D\u5B57\u6BB5 *T\uFF0C\u5219 S \u548C *S \u65B9\u6CD5\u96C6\u5305\u542B *T \u65B9\u6CD5&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    s1 <span class="token operator">:=</span> S<span class="token punctuation">{</span>T<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
    s2 <span class="token operator">:=</span> <span class="token operator">&amp;</span>s1
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;s1 is : %v\\n&quot;</span><span class="token punctuation">,</span> s1<span class="token punctuation">)</span>
    s1<span class="token punctuation">.</span><span class="token function">testT</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    s1<span class="token punctuation">.</span><span class="token function">testP</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;s2 is : %v\\n&quot;</span><span class="token punctuation">,</span> s2<span class="token punctuation">)</span>
    s2<span class="token punctuation">.</span><span class="token function">testT</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    s2<span class="token punctuation">.</span><span class="token function">testP</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    s1 is : {{1}}
    \u5982\u7C7B\u578B S \u5305\u542B\u533F\u540D\u5B57\u6BB5 *T\uFF0C\u5219 S \u548C *S \u65B9\u6CD5\u96C6\u5305\u542B T \u65B9\u6CD5
    \u5982\u7C7B\u578B S \u5305\u542B\u533F\u540D\u5B57\u6BB5 *T\uFF0C\u5219 S \u548C *S \u65B9\u6CD5\u96C6\u5305\u542B *T \u65B9\u6CD5
    s2 is : &amp;{{1}}
    \u5982\u7C7B\u578B S \u5305\u542B\u533F\u540D\u5B57\u6BB5 *T\uFF0C\u5219 S \u548C *S \u65B9\u6CD5\u96C6\u5305\u542B T \u65B9\u6CD5
    \u5982\u7C7B\u578B S \u5305\u542B\u533F\u540D\u5B57\u6BB5 *T\uFF0C\u5219 S \u548C *S \u65B9\u6CD5\u96C6\u5305\u542B *T \u65B9\u6CD5
</code></pre></div>`,24),c=[o];function e(u,l){return s(),a("div",null,c)}var k=n(p,[["render",e],["__file","3-\u65B9\u6CD5\u96C6.html.vue"]]);export{k as default};
