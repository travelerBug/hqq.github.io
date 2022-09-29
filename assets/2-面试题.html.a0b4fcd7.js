import{_ as n,o as a,c as s,e as t}from"./app.ad4da1a1.js";const p={},o=t(`<h3 id="_1-2-1-\u6307\u9488\u5C0F\u7EC3\u4E60" tabindex="-1"><a class="header-anchor" href="#_1-2-1-\u6307\u9488\u5C0F\u7EC3\u4E60" aria-hidden="true">#</a> 1.2.1. \u6307\u9488\u5C0F\u7EC3\u4E60</h3><ul><li>\u7A0B\u5E8F\u5B9A\u4E49\u4E00\u4E2Aint\u53D8\u91CFnum\u7684\u5730\u5740\u5E76\u6253\u5370</li><li>\u5C06num\u7684\u5730\u5740\u8D4B\u7ED9\u6307\u9488ptr\uFF0C\u5E76\u901A\u8FC7ptr\u53BB\u4FEE\u6539num\u7684\u503C</li></ul><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> a <span class="token builtin">int</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>a<span class="token punctuation">)</span>
    <span class="token keyword">var</span> p <span class="token operator">*</span><span class="token builtin">int</span>
    p <span class="token operator">=</span> <span class="token operator">&amp;</span>a
    <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token number">20</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3),e=[o];function c(l,r){return a(),s("div",null,e)}var u=n(p,[["render",c],["__file","2-\u9762\u8BD5\u9898.html.vue"]]);export{u as default};
