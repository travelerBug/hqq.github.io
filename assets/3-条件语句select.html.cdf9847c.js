import{_ as n,o as s,c as a,e as t}from"./app.cef7465c.js";const p={},e=t(`<h1 id="\u6761\u4EF6\u8BED\u53E5select" tabindex="-1"><a class="header-anchor" href="#\u6761\u4EF6\u8BED\u53E5select" aria-hidden="true">#</a> \u6761\u4EF6\u8BED\u53E5select</h1><h3 id="_1-1-1-select-\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#_1-1-1-select-\u8BED\u53E5" aria-hidden="true">#</a> 1.1.1. select \u8BED\u53E5</h3><p>select \u8BED\u53E5\u7C7B\u4F3C\u4E8E switch \u8BED\u53E5\uFF0C\u4F46\u662Fselect\u4F1A\u968F\u673A\u6267\u884C\u4E00\u4E2A\u53EF\u8FD0\u884C\u7684case\u3002\u5982\u679C\u6CA1\u6709case\u53EF\u8FD0\u884C\uFF0C\u5B83\u5C06\u963B\u585E\uFF0C\u76F4\u5230\u6709case\u53EF\u8FD0\u884C\u3002</p><p>select \u662FGo\u4E2D\u7684\u4E00\u4E2A\u63A7\u5236\u7ED3\u6784\uFF0C\u7C7B\u4F3C\u4E8E\u7528\u4E8E\u901A\u4FE1\u7684switch\u8BED\u53E5\u3002\u6BCF\u4E2Acase\u5FC5\u987B\u662F\u4E00\u4E2A\u901A\u4FE1\u64CD\u4F5C\uFF0C\u8981\u4E48\u662F\u53D1\u9001\u8981\u4E48\u662F\u63A5\u6536\u3002 select \u968F\u673A\u6267\u884C\u4E00\u4E2A\u53EF\u8FD0\u884C\u7684case\u3002\u5982\u679C\u6CA1\u6709case\u53EF\u8FD0\u884C\uFF0C\u5B83\u5C06\u963B\u585E\uFF0C\u76F4\u5230\u6709case\u53EF\u8FD0\u884C\u3002\u4E00\u4E2A\u9ED8\u8BA4\u7684\u5B50\u53E5\u5E94\u8BE5\u603B\u662F\u53EF\u8FD0\u884C\u7684\u3002</p><h4 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h4><p>Go \u7F16\u7A0B\u8BED\u8A00\u4E2D select \u8BED\u53E5\u7684\u8BED\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">select</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> communication clause  <span class="token punctuation">:</span>
       <span class="token function">statement</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>      
    <span class="token keyword">case</span> communication clause  <span class="token punctuation">:</span>
       <span class="token function">statement</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/* \u4F60\u53EF\u4EE5\u5B9A\u4E49\u4EFB\u610F\u6570\u91CF\u7684 case */</span>
    <span class="token keyword">default</span> <span class="token punctuation">:</span> <span class="token comment">/* \u53EF\u9009 */</span>
       <span class="token function">statement</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4EE5\u4E0B\u63CF\u8FF0\u4E86 select \u8BED\u53E5\u7684\u8BED\u6CD5\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    \u6BCF\u4E2Acase\u90FD\u5FC5\u987B\u662F\u4E00\u4E2A\u901A\u4FE1
    \u6240\u6709channel\u8868\u8FBE\u5F0F\u90FD\u4F1A\u88AB\u6C42\u503C
    \u6240\u6709\u88AB\u53D1\u9001\u7684\u8868\u8FBE\u5F0F\u90FD\u4F1A\u88AB\u6C42\u503C
    \u5982\u679C\u4EFB\u610F\u67D0\u4E2A\u901A\u4FE1\u53EF\u4EE5\u8FDB\u884C\uFF0C\u5B83\u5C31\u6267\u884C\uFF1B\u5176\u4ED6\u88AB\u5FFD\u7565\u3002
    \u5982\u679C\u6709\u591A\u4E2Acase\u90FD\u53EF\u4EE5\u8FD0\u884C\uFF0CSelect\u4F1A\u968F\u673A\u516C\u5E73\u5730\u9009\u51FA\u4E00\u4E2A\u6267\u884C\u3002\u5176\u4ED6\u4E0D\u4F1A\u6267\u884C\u3002
    \u5426\u5219\uFF1A
    \u5982\u679C\u6709default\u5B50\u53E5\uFF0C\u5219\u6267\u884C\u8BE5\u8BED\u53E5\u3002
    \u5982\u679C\u6CA1\u6709default\u5B57\u53E5\uFF0Cselect\u5C06\u963B\u585E\uFF0C\u76F4\u5230\u67D0\u4E2A\u901A\u4FE1\u53EF\u4EE5\u8FD0\u884C\uFF1BGo\u4E0D\u4F1A\u91CD\u65B0\u5BF9channel\u6216\u503C\u8FDB\u884C\u6C42\u503C\u3002
</code></pre></div><h4 id="\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a> \u5B9E\u4F8B\uFF1A</h4><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> c1<span class="token punctuation">,</span> c2<span class="token punctuation">,</span> c3 <span class="token keyword">chan</span> <span class="token builtin">int</span>
   <span class="token keyword">var</span> i1<span class="token punctuation">,</span> i2 <span class="token builtin">int</span>
   <span class="token keyword">select</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> i1 <span class="token operator">=</span> <span class="token operator">&lt;-</span>c1<span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;received &quot;</span><span class="token punctuation">,</span> i1<span class="token punctuation">,</span> <span class="token string">&quot; from c1\\n&quot;</span><span class="token punctuation">)</span>
      <span class="token keyword">case</span> c2 <span class="token operator">&lt;-</span> i2<span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;sent &quot;</span><span class="token punctuation">,</span> i2<span class="token punctuation">,</span> <span class="token string">&quot; to c2\\n&quot;</span><span class="token punctuation">)</span>
      <span class="token keyword">case</span> i3<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token punctuation">(</span><span class="token operator">&lt;-</span>c3<span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment">// same as: i3, ok := &lt;-c3</span>
         <span class="token keyword">if</span> ok <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;received &quot;</span><span class="token punctuation">,</span> i3<span class="token punctuation">,</span> <span class="token string">&quot; from c3\\n&quot;</span><span class="token punctuation">)</span>
         <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;c3 is closed\\n&quot;</span><span class="token punctuation">)</span>
         <span class="token punctuation">}</span>
      <span class="token keyword">default</span><span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;no communication\\n&quot;</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>    
<span class="token punctuation">}</span>
</code></pre></div><p>\u4EE5\u4E0A\u4EE3\u7801\u6267\u884C\u7ED3\u679C\u4E3A\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    no communication
</code></pre></div>`,13),c=[e];function o(u,l){return s(),a("div",null,c)}var k=n(p,[["render",o],["__file","3-\u6761\u4EF6\u8BED\u53E5select.html.vue"]]);export{k as default};
