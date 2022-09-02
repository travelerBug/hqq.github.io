import{_ as n,o as s,c as a,e as t}from"./app.660fcbcc.js";const p={},o=t(`<h1 id="_1-\u6761\u4EF6\u8BED\u53E5switch" tabindex="-1"><a class="header-anchor" href="#_1-\u6761\u4EF6\u8BED\u53E5switch" aria-hidden="true">#</a> 1. \u6761\u4EF6\u8BED\u53E5switch</h1><h3 id="_1-1-1-switch-\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#_1-1-1-switch-\u8BED\u53E5" aria-hidden="true">#</a> 1.1.1. switch \u8BED\u53E5</h3><p>switch \u8BED\u53E5\u7528\u4E8E\u57FA\u4E8E\u4E0D\u540C\u6761\u4EF6\u6267\u884C\u4E0D\u540C\u52A8\u4F5C\uFF0C\u6BCF\u4E00\u4E2A case \u5206\u652F\u90FD\u662F\u552F\u4E00\u7684\uFF0C\u4ECE\u4E0A\u76F4\u4E0B\u9010\u4E00\u6D4B\u8BD5\uFF0C\u76F4\u5230\u5339\u914D\u4E3A\u6B62\u3002 Golang switch \u5206\u652F\u8868\u8FBE\u5F0F\u53EF\u4EE5\u662F\u4EFB\u610F\u7C7B\u578B\uFF0C\u4E0D\u9650\u4E8E\u5E38\u91CF\u3002\u53EF\u7701\u7565 break\uFF0C\u9ED8\u8BA4\u81EA\u52A8\u7EC8\u6B62\u3002</p><h4 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h4><p>Go \u7F16\u7A0B\u8BED\u8A00\u4E2D switch \u8BED\u53E5\u7684\u8BED\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">switch</span> var1 <span class="token punctuation">{</span>
    <span class="token keyword">case</span> val1<span class="token punctuation">:</span>
        <span class="token operator">...</span>
    <span class="token keyword">case</span> val2<span class="token punctuation">:</span>
        <span class="token operator">...</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
        <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u53D8\u91CF var1 \u53EF\u4EE5\u662F\u4EFB\u4F55\u7C7B\u578B\uFF0C\u800C val1 \u548C val2 \u5219\u53EF\u4EE5\u662F\u540C\u7C7B\u578B\u7684\u4EFB\u610F\u503C\u3002\u7C7B\u578B\u4E0D\u88AB\u5C40\u9650\u4E8E\u5E38\u91CF\u6216\u6574\u6570\uFF0C\u4F46\u5FC5\u987B\u662F\u76F8\u540C\u7684\u7C7B\u578B\uFF1B\u6216\u8005\u6700\u7EC8\u7ED3\u679C\u4E3A\u76F8\u540C\u7C7B\u578B\u7684\u8868\u8FBE\u5F0F\u3002 \u60A8\u53EF\u4EE5\u540C\u65F6\u6D4B\u8BD5\u591A\u4E2A\u53EF\u80FD\u7B26\u5408\u6761\u4EF6\u7684\u503C\uFF0C\u4F7F\u7528\u9017\u53F7\u5206\u5272\u5B83\u4EEC\uFF0C\u4F8B\u5982\uFF1Acase val1, val2, val3\u3002</p><h4 id="\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a> \u5B9E\u4F8B:</h4><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">/* \u5B9A\u4E49\u5C40\u90E8\u53D8\u91CF */</span>
   <span class="token keyword">var</span> grade <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;B&quot;</span>
   <span class="token keyword">var</span> marks <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">90</span>

   <span class="token keyword">switch</span> marks <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token number">90</span><span class="token punctuation">:</span> grade <span class="token operator">=</span> <span class="token string">&quot;A&quot;</span>
      <span class="token keyword">case</span> <span class="token number">80</span><span class="token punctuation">:</span> grade <span class="token operator">=</span> <span class="token string">&quot;B&quot;</span>
      <span class="token keyword">case</span> <span class="token number">50</span><span class="token punctuation">,</span><span class="token number">60</span><span class="token punctuation">,</span><span class="token number">70</span> <span class="token punctuation">:</span> grade <span class="token operator">=</span> <span class="token string">&quot;C&quot;</span>
      <span class="token keyword">default</span><span class="token punctuation">:</span> grade <span class="token operator">=</span> <span class="token string">&quot;D&quot;</span>  
   <span class="token punctuation">}</span>

   <span class="token keyword">switch</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> grade <span class="token operator">==</span> <span class="token string">&quot;A&quot;</span> <span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F18\u79C0!\\n&quot;</span> <span class="token punctuation">)</span>     
      <span class="token keyword">case</span> grade <span class="token operator">==</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span> grade <span class="token operator">==</span> <span class="token string">&quot;C&quot;</span> <span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u826F\u597D\\n&quot;</span> <span class="token punctuation">)</span>      
      <span class="token keyword">case</span> grade <span class="token operator">==</span> <span class="token string">&quot;D&quot;</span> <span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u53CA\u683C\\n&quot;</span> <span class="token punctuation">)</span>      
      <span class="token keyword">case</span> grade <span class="token operator">==</span> <span class="token string">&quot;F&quot;</span><span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u4E0D\u53CA\u683C\\n&quot;</span> <span class="token punctuation">)</span>
      <span class="token keyword">default</span><span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u5DEE\\n&quot;</span> <span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F60\u7684\u7B49\u7EA7\u662F %s\\n&quot;</span><span class="token punctuation">,</span> grade <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4EE5\u4E0A\u4EE3\u7801\u6267\u884C\u7ED3\u679C\u4E3A\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    \u4F18\u79C0!
    \u4F60\u7684\u7B49\u7EA7\u662F A
</code></pre></div><h3 id="_1-1-2-type-switch" tabindex="-1"><a class="header-anchor" href="#_1-1-2-type-switch" aria-hidden="true">#</a> 1.1.2. Type Switch</h3><p>switch \u8BED\u53E5\u8FD8\u53EF\u4EE5\u88AB\u7528\u4E8E type-switch \u6765\u5224\u65AD\u67D0\u4E2A interface \u53D8\u91CF\u4E2D\u5B9E\u9645\u5B58\u50A8\u7684\u53D8\u91CF\u7C7B\u578B\u3002</p><h4 id="type-switch-\u8BED\u6CD5\u683C\u5F0F\u5982\u4E0B" tabindex="-1"><a class="header-anchor" href="#type-switch-\u8BED\u6CD5\u683C\u5F0F\u5982\u4E0B" aria-hidden="true">#</a> Type Switch \u8BED\u6CD5\u683C\u5F0F\u5982\u4E0B\uFF1A</h4><div class="language-text ext-text"><pre class="language-text"><code>switch x.(type){
    case type:
       statement(s)      
    case type:
       statement(s)
    /* \u4F60\u53EF\u4EE5\u5B9A\u4E49\u4EFB\u610F\u4E2A\u6570\u7684case */
    default: /* \u53EF\u9009 */
       statement(s)
}
</code></pre></div><h4 id="\u5B9E\u4F8B-1" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B-1" aria-hidden="true">#</a> \u5B9E\u4F8B\uFF1A</h4><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> x <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">//\u5199\u6CD5\u4E00\uFF1A</span>
    <span class="token keyword">switch</span> i <span class="token operator">:=</span> x<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u5E26\u521D\u59CB\u5316\u8BED\u53E5</span>
    <span class="token keyword">case</span> <span class="token boolean">nil</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot; x \u7684\u7C7B\u578B :%T\\r\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;x \u662F int \u578B&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token builtin">float64</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;x \u662F float64 \u578B&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">float64</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;x \u662F func(int) \u578B&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token builtin">bool</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;x \u662F bool \u6216 string \u578B&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u672A\u77E5\u578B&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//\u5199\u6CD5\u4E8C</span>
    <span class="token keyword">var</span> j <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">switch</span> j <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;def&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//\u5199\u6CD5\u4E09</span>
    <span class="token keyword">var</span> k <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">switch</span> k <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;fallthrough&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">fallthrough</span>
        <span class="token comment">/*
            Go\u7684switch\u975E\u5E38\u7075\u6D3B\uFF0C\u8868\u8FBE\u5F0F\u4E0D\u5FC5\u662F\u5E38\u91CF\u6216\u6574\u6570\uFF0C\u6267\u884C\u7684\u8FC7\u7A0B\u4ECE\u4E0A\u81F3\u4E0B\uFF0C\u76F4\u5230\u627E\u5230\u5339\u914D\u9879\uFF1B
            \u800C\u5982\u679Cswitch\u6CA1\u6709\u8868\u8FBE\u5F0F\uFF0C\u5B83\u4F1A\u5339\u914Dtrue\u3002
            Go\u91CC\u9762switch\u9ED8\u8BA4\u76F8\u5F53\u4E8E\u6BCF\u4E2Acase\u6700\u540E\u5E26\u6709break\uFF0C
            \u5339\u914D\u6210\u529F\u540E\u4E0D\u4F1A\u81EA\u52A8\u5411\u4E0B\u6267\u884C\u5176\u4ED6case\uFF0C\u800C\u662F\u8DF3\u51FA\u6574\u4E2Aswitch,
            \u4F46\u662F\u53EF\u4EE5\u4F7F\u7528fallthrough\u5F3A\u5236\u6267\u884C\u540E\u9762\u7684case\u4EE3\u7801\u3002
        */</span>
    <span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;def&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//\u5199\u6CD5\u4E09</span>
    <span class="token keyword">var</span> m <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">switch</span> m <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;def&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//\u5199\u6CD5\u56DB</span>
    <span class="token keyword">var</span> n <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">switch</span> <span class="token punctuation">{</span> <span class="token comment">//\u7701\u7565\u6761\u4EF6\u8868\u8FBE\u5F0F\uFF0C\u53EF\u5F53 if...else if...else</span>
    <span class="token keyword">case</span> n <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> n <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;i &gt; 0 and i &lt; 10&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> n <span class="token operator">&gt;</span> <span class="token number">10</span> <span class="token operator">&amp;&amp;</span> n <span class="token operator">&lt;</span> <span class="token number">20</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;i &gt; 10 and i &lt; 20&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;def&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4EE5\u4E0A\u4EE3\u7801\u6267\u884C\u7ED3\u679C\u4E3A\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    x \u7684\u7C7B\u578B :&lt;nil&gt;
    fallthrough
    1
    1
    def
</code></pre></div>`,19),e=[o];function c(u,l){return s(),a("div",null,e)}var i=n(p,[["render",c],["__file","2-\u6761\u4EF6\u8BED\u53E5switch.html.vue"]]);export{i as default};
