import{_ as n,o as s,c as a,e as t}from"./app.430d00b9.js";const p={},e=t(`<h2 id="\u6761\u4EF6\u8BED\u53E5if" tabindex="-1"><a class="header-anchor" href="#\u6761\u4EF6\u8BED\u53E5if" aria-hidden="true">#</a> \u6761\u4EF6\u8BED\u53E5if</h2><h3 id="_1-1-1-go-\u8BED\u8A00\u6761\u4EF6\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#_1-1-1-go-\u8BED\u8A00\u6761\u4EF6\u8BED\u53E5" aria-hidden="true">#</a> 1.1.1. Go \u8BED\u8A00\u6761\u4EF6\u8BED\u53E5\uFF1A</h3><p>\u6761\u4EF6\u8BED\u53E5\u9700\u8981\u5F00\u53D1\u8005\u901A\u8FC7\u6307\u5B9A\u4E00\u4E2A\u6216\u591A\u4E2A\u6761\u4EF6\uFF0C\u5E76\u901A\u8FC7\u6D4B\u8BD5\u6761\u4EF6\u662F\u5426\u4E3A true \u6765\u51B3\u5B9A\u662F\u5426\u6267\u884C\u6307\u5B9A\u8BED\u53E5\uFF0C\u5E76\u5728\u6761\u4EF6\u4E3A false \u7684\u60C5\u51B5\u5728\u6267\u884C\u53E6\u5916\u7684\u8BED\u53E5\u3002</p><p>Go \u8BED\u8A00\u63D0\u4F9B\u4E86\u4EE5\u4E0B\u51E0\u79CD\u6761\u4EF6\u5224\u65AD\u8BED\u53E5\uFF1A</p><h3 id="_1-1-2-if-\u8BED\u53E5-\u7531\u4E00\u4E2A\u5E03\u5C14\u8868\u8FBE\u5F0F\u540E\u7D27\u8DDF\u4E00\u4E2A\u6216\u591A\u4E2A\u8BED\u53E5\u7EC4\u6210\u3002" tabindex="-1"><a class="header-anchor" href="#_1-1-2-if-\u8BED\u53E5-\u7531\u4E00\u4E2A\u5E03\u5C14\u8868\u8FBE\u5F0F\u540E\u7D27\u8DDF\u4E00\u4E2A\u6216\u591A\u4E2A\u8BED\u53E5\u7EC4\u6210\u3002" aria-hidden="true">#</a> 1.1.2. if \u8BED\u53E5 \u7531\u4E00\u4E2A\u5E03\u5C14\u8868\u8FBE\u5F0F\u540E\u7D27\u8DDF\u4E00\u4E2A\u6216\u591A\u4E2A\u8BED\u53E5\u7EC4\u6210\u3002</h3><p>Go \u7F16\u7A0B\u8BED\u8A00\u4E2D if \u8BED\u53E5\u7684\u8BED\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code>    \u2022 \u53EF\u7701\u7565\u6761\u4EF6\u8868\u8FBE\u5F0F\u62EC\u53F7\u3002
    \u2022 \u6301\u521D\u59CB\u5316\u8BED\u53E5\uFF0C\u53EF\u5B9A\u4E49\u4EE3\u7801\u5757\u5C40\u90E8\u53D8\u91CF\u3002 
    \u2022 \u4EE3\u7801\u5757\u5DE6 \u62EC\u53F7\u5FC5\u987B\u5728\u6761\u4EF6\u8868\u8FBE\u5F0F\u5C3E\u90E8\u3002

    <span class="token keyword">if</span> \u5E03\u5C14\u8868\u8FBE\u5F0F <span class="token punctuation">{</span>
    <span class="token comment">/* \u5728\u5E03\u5C14\u8868\u8FBE\u5F0F\u4E3A true \u65F6\u6267\u884C */</span>
    <span class="token punctuation">}</span>
</code></pre></div><p>if \u5728\u5E03\u5C14\u8868\u8FBE\u5F0F\u4E3A true \u65F6\uFF0C\u5176\u540E\u7D27\u8DDF\u7684\u8BED\u53E5\u5757\u6267\u884C\uFF0C\u5982\u679C\u4E3A false \u5219\u4E0D\u6267\u884C\u3002</p><div class="language-go ext-go"><pre class="language-go"><code> x <span class="token operator">:=</span> <span class="token number">0</span>

<span class="token comment">// if x &gt; 10        // Error: missing condition in if statement</span>
<span class="token comment">// {</span>
<span class="token comment">// }</span>

<span class="token keyword">if</span> n <span class="token operator">:=</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">;</span> x <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>     <span class="token comment">// \u521D\u59CB\u5316\u8BED\u53E5\u672A\u5FC5\u5C31\u662F\u5B9A\u4E49\u53D8\u91CF\uFF0C \u5982 println(&quot;init&quot;) \u4E5F\u662F\u53EF\u4EE5\u7684\u3002</span>
    <span class="token function">println</span><span class="token punctuation">(</span>n<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> x <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>    <span class="token comment">// \u6CE8\u610F else if \u548C else \u5DE6\u5927\u62EC\u53F7\u4F4D\u7F6E\u3002</span>
    <span class="token function">println</span><span class="token punctuation">(</span>n<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">println</span><span class="token punctuation">(</span>n<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
    <span class="token operator">*</span>\u4E0D\u652F\u6301\u4E09\u5143\u64CD\u4F5C\u7B26<span class="token punctuation">(</span>\u4E09\u76EE\u8FD0\u7B97\u7B26<span class="token punctuation">)</span> <span class="token string">&quot;a &gt; b ? a : b&quot;</span>\u3002
</code></pre></div><p>\u5B9E\u4F8B\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">/* \u5B9A\u4E49\u5C40\u90E8\u53D8\u91CF */</span>
   <span class="token keyword">var</span> a <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">10</span>
   <span class="token comment">/* \u4F7F\u7528 if \u8BED\u53E5\u5224\u65AD\u5E03\u5C14\u8868\u8FBE\u5F0F */</span>
   <span class="token keyword">if</span> a <span class="token operator">&lt;</span> <span class="token number">20</span> <span class="token punctuation">{</span>
       <span class="token comment">/* \u5982\u679C\u6761\u4EF6\u4E3A true \u5219\u6267\u884C\u4EE5\u4E0B\u8BED\u53E5 */</span>
       fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;a \u5C0F\u4E8E 20\\n&quot;</span> <span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;a \u7684\u503C\u4E3A : %d\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4EE5\u4E0A\u4EE3\u7801\u6267\u884C\u7ED3\u679C\u4E3A\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code>    a \u5C0F\u4E8E <span class="token number">20</span>
    a \u7684\u503C\u4E3A <span class="token punctuation">:</span> <span class="token number">10</span>
</code></pre></div><h3 id="_1-1-3-if-else-\u8BED\u53E5-if-\u8BED\u53E5-\u540E\u53EF\u4EE5\u4F7F\u7528\u53EF\u9009\u7684-else-\u8BED\u53E5-else-\u8BED\u53E5\u4E2D\u7684\u8868\u8FBE\u5F0F\u5728\u5E03\u5C14\u8868\u8FBE\u5F0F\u4E3A-false-\u65F6\u6267\u884C\u3002" tabindex="-1"><a class="header-anchor" href="#_1-1-3-if-else-\u8BED\u53E5-if-\u8BED\u53E5-\u540E\u53EF\u4EE5\u4F7F\u7528\u53EF\u9009\u7684-else-\u8BED\u53E5-else-\u8BED\u53E5\u4E2D\u7684\u8868\u8FBE\u5F0F\u5728\u5E03\u5C14\u8868\u8FBE\u5F0F\u4E3A-false-\u65F6\u6267\u884C\u3002" aria-hidden="true">#</a> 1.1.3. if...else \u8BED\u53E5 if \u8BED\u53E5 \u540E\u53EF\u4EE5\u4F7F\u7528\u53EF\u9009\u7684 else \u8BED\u53E5, else \u8BED\u53E5\u4E2D\u7684\u8868\u8FBE\u5F0F\u5728\u5E03\u5C14\u8868\u8FBE\u5F0F\u4E3A false \u65F6\u6267\u884C\u3002</h3><h4 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h4><p>Go \u7F16\u7A0B\u8BED\u8A00\u4E2D if...else \u8BED\u53E5\u7684\u8BED\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>if \u5E03\u5C14\u8868\u8FBE\u5F0F {
   /* \u5728\u5E03\u5C14\u8868\u8FBE\u5F0F\u4E3A true \u65F6\u6267\u884C */
} else {
  /* \u5728\u5E03\u5C14\u8868\u8FBE\u5F0F\u4E3A false \u65F6\u6267\u884C */
}
</code></pre></div><p>if \u5728\u5E03\u5C14\u8868\u8FBE\u5F0F\u4E3A true \u65F6\uFF0C\u5176\u540E\u7D27\u8DDF\u7684\u8BED\u53E5\u5757\u6267\u884C\uFF0C\u5982\u679C\u4E3A false \u5219\u6267\u884C else \u8BED\u53E5\u5757\u3002</p><h4 id="\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a> \u5B9E\u4F8B:</h4><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">/* \u5C40\u90E8\u53D8\u91CF\u5B9A\u4E49 */</span>
   <span class="token keyword">var</span> a <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">100</span>
   <span class="token comment">/* \u5224\u65AD\u5E03\u5C14\u8868\u8FBE\u5F0F */</span>
   <span class="token keyword">if</span> a <span class="token operator">&lt;</span> <span class="token number">20</span> <span class="token punctuation">{</span>
       <span class="token comment">/* \u5982\u679C\u6761\u4EF6\u4E3A true \u5219\u6267\u884C\u4EE5\u4E0B\u8BED\u53E5 */</span>
       fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;a \u5C0F\u4E8E 20\\n&quot;</span> <span class="token punctuation">)</span>
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
       <span class="token comment">/* \u5982\u679C\u6761\u4EF6\u4E3A false \u5219\u6267\u884C\u4EE5\u4E0B\u8BED\u53E5 */</span>
       fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;a \u4E0D\u5C0F\u4E8E 20\\n&quot;</span> <span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;a \u7684\u503C\u4E3A : %d\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre></div><p>\u4EE5\u4E0A\u4EE3\u7801\u6267\u884C\u7ED3\u679C\u4E3A\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    a \u4E0D\u5C0F\u4E8E 20
    a \u7684\u503C\u4E3A : 100
</code></pre></div><h3 id="_1-1-4-if-\u5D4C\u5957\u8BED\u53E5-\u4F60\u53EF\u4EE5\u5728-if-\u6216-else-if-\u8BED\u53E5\u4E2D\u5D4C\u5165\u4E00\u4E2A\u6216\u591A\u4E2A-if-\u6216-else-if-\u8BED\u53E5\u3002" tabindex="-1"><a class="header-anchor" href="#_1-1-4-if-\u5D4C\u5957\u8BED\u53E5-\u4F60\u53EF\u4EE5\u5728-if-\u6216-else-if-\u8BED\u53E5\u4E2D\u5D4C\u5165\u4E00\u4E2A\u6216\u591A\u4E2A-if-\u6216-else-if-\u8BED\u53E5\u3002" aria-hidden="true">#</a> 1.1.4. if \u5D4C\u5957\u8BED\u53E5 \u4F60\u53EF\u4EE5\u5728 if \u6216 else if \u8BED\u53E5\u4E2D\u5D4C\u5165\u4E00\u4E2A\u6216\u591A\u4E2A if \u6216 else if \u8BED\u53E5\u3002</h3><h4 id="\u8BED\u6CD5-1" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5-1" aria-hidden="true">#</a> \u8BED\u6CD5</h4><p>Go \u7F16\u7A0B\u8BED\u8A00\u4E2D if...else \u8BED\u53E5\u7684\u8BED\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>if \u5E03\u5C14\u8868\u8FBE\u5F0F 1 {
   /* \u5728\u5E03\u5C14\u8868\u8FBE\u5F0F 1 \u4E3A true \u65F6\u6267\u884C */
   if \u5E03\u5C14\u8868\u8FBE\u5F0F 2 {
      /* \u5728\u5E03\u5C14\u8868\u8FBE\u5F0F 2 \u4E3A true \u65F6\u6267\u884C */
   }
}
</code></pre></div><p>\u4F60\u53EF\u4EE5\u4EE5\u540C\u6837\u7684\u65B9\u5F0F\u5728 if \u8BED\u53E5\u4E2D\u5D4C\u5957 else if...else \u8BED\u53E5</p><h4 id="\u5B9E\u4F8B-1" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B-1" aria-hidden="true">#</a> \u5B9E\u4F8B</h4><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">/* \u5B9A\u4E49\u5C40\u90E8\u53D8\u91CF */</span>
   <span class="token keyword">var</span> a <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">100</span>
   <span class="token keyword">var</span> b <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">200</span>
   <span class="token comment">/* \u5224\u65AD\u6761\u4EF6 */</span>
   <span class="token keyword">if</span> a <span class="token operator">==</span> <span class="token number">100</span> <span class="token punctuation">{</span>
       <span class="token comment">/* if \u6761\u4EF6\u8BED\u53E5\u4E3A true \u6267\u884C */</span>
       <span class="token keyword">if</span> b <span class="token operator">==</span> <span class="token number">200</span> <span class="token punctuation">{</span>
          <span class="token comment">/* if \u6761\u4EF6\u8BED\u53E5\u4E3A true \u6267\u884C */</span>
          fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;a \u7684\u503C\u4E3A 100 \uFF0C b \u7684\u503C\u4E3A 200\\n&quot;</span> <span class="token punctuation">)</span>
       <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;a \u503C\u4E3A : %d\\n&quot;</span><span class="token punctuation">,</span> a <span class="token punctuation">)</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;b \u503C\u4E3A : %d\\n&quot;</span><span class="token punctuation">,</span> b <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4EE5\u4E0A\u4EE3\u7801\u6267\u884C\u7ED3\u679C\u4E3A</p><div class="language-text ext-text"><pre class="language-text"><code>    a \u7684\u503C\u4E3A 100 \uFF0C b \u7684\u503C\u4E3A 200
    a \u503C\u4E3A : 100
    b \u503C\u4E3A : 200
</code></pre></div>`,31),o=[e];function c(l,u){return s(),a("div",null,o)}var k=n(p,[["render",c],["__file","1-\u6761\u4EF6\u8BED\u53E5if.html.vue"]]);export{k as default};
