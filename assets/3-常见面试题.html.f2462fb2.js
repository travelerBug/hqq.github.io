import{_ as n,o as s,c as a,e as t}from"./app.ad4da1a1.js";const p={},o=t(`<h3 id="_1-3-7-\u9762\u8BD5\u9898" tabindex="-1"><a class="header-anchor" href="#_1-3-7-\u9762\u8BD5\u9898" aria-hidden="true">#</a> 1.3.7. \u9762\u8BD5\u9898</h3><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">type</span> student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
    age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    m <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">*</span>student<span class="token punctuation">)</span>
    stus <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>student<span class="token punctuation">{</span>
        <span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">&quot;pprof.cn&quot;</span><span class="token punctuation">,</span> age<span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">&quot;\u6D4B\u8BD5&quot;</span><span class="token punctuation">,</span> age<span class="token punctuation">:</span> <span class="token number">23</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">&quot;\u535A\u5BA2&quot;</span><span class="token punctuation">,</span> age<span class="token punctuation">:</span> <span class="token number">28</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> stu <span class="token operator">:=</span> <span class="token keyword">range</span> stus <span class="token punctuation">{</span>
        m<span class="token punctuation">[</span>stu<span class="token punctuation">.</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">&amp;</span>stu
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> m <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> <span class="token string">&quot;=&gt;&quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_1-3-22-\u5C0F\u7EC3\u4E60" tabindex="-1"><a class="header-anchor" href="#_1-3-22-\u5C0F\u7EC3\u4E60" aria-hidden="true">#</a> 1.3.22. \u5C0F\u7EC3\u4E60\uFF1A</h3><p>\u731C\u4E00\u4E0B\u4E0B\u5217\u4EE3\u7801\u8FD0\u884C\u7684\u7ED3\u679C\u662F\u4EC0\u4E48</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    id   <span class="token builtin">int</span>
    name <span class="token builtin">string</span>
    age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">demo</span><span class="token punctuation">(</span>ce <span class="token punctuation">[</span><span class="token punctuation">]</span>student<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u5207\u7247\u662F\u5F15\u7528\u4F20\u9012\uFF0C\u662F\u53EF\u4EE5\u6539\u53D8\u503C\u7684</span>
    ce<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">999</span>
    <span class="token comment">// ce = append(ce, student{3, &quot;xiaowang&quot;, 56})</span>
    <span class="token comment">// return ce</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> ce <span class="token punctuation">[</span><span class="token punctuation">]</span>student  <span class="token comment">//\u5B9A\u4E49\u4E00\u4E2A\u5207\u7247\u7C7B\u578B\u7684\u7ED3\u6784\u4F53</span>
    ce <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>student<span class="token punctuation">{</span>
        student<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;xiaoming&quot;</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        student<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;xiaozhang&quot;</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>ce<span class="token punctuation">)</span>
    <span class="token function">demo</span><span class="token punctuation">(</span>ce<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>ce<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_1-3-23-\u5220\u9664map\u7C7B\u578B\u7684\u7ED3\u6784\u4F53" tabindex="-1"><a class="header-anchor" href="#_1-3-23-\u5220\u9664map\u7C7B\u578B\u7684\u7ED3\u6784\u4F53" aria-hidden="true">#</a> 1.3.23. \u5220\u9664map\u7C7B\u578B\u7684\u7ED3\u6784\u4F53</h3><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    id   <span class="token builtin">int</span>
    name <span class="token builtin">string</span>
    age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ce <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span>student<span class="token punctuation">)</span>
    ce<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> student<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;xiaolizi&quot;</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">}</span>
    ce<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> student<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;wang&quot;</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>ce<span class="token punctuation">)</span>
    <span class="token function">delete</span><span class="token punctuation">(</span>ce<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>ce<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_1-3-24-\u5B9E\u73B0map\u6709\u5E8F\u8F93\u51FA-\u9762\u8BD5\u7ECF\u5E38\u95EE\u5230" tabindex="-1"><a class="header-anchor" href="#_1-3-24-\u5B9E\u73B0map\u6709\u5E8F\u8F93\u51FA-\u9762\u8BD5\u7ECF\u5E38\u95EE\u5230" aria-hidden="true">#</a> 1.3.24. \u5B9E\u73B0map\u6709\u5E8F\u8F93\u51FA(\u9762\u8BD5\u7ECF\u5E38\u95EE\u5230)</h3><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;sort&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    map1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
    map1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;www.topgoer.com&quot;</span>
    map1<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;rpc.topgoer.com&quot;</span>
    map1<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;ceshi&quot;</span>
    map1<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;xiaohong&quot;</span>
    map1<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;xiaohuang&quot;</span>
    sli <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span> k<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> <span class="token keyword">range</span> map1 <span class="token punctuation">{</span>
        sli <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>sli<span class="token punctuation">,</span> k<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    sort<span class="token punctuation">.</span><span class="token function">Ints</span><span class="token punctuation">(</span>sli<span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>map1<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>map1<span class="token punctuation">[</span>sli<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_1-3-25-\u5C0F\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#_1-3-25-\u5C0F\u6848\u4F8B" aria-hidden="true">#</a> 1.3.25. \u5C0F\u6848\u4F8B</h3><p>\u91C7\u7528\u5207\u7247\u7C7B\u578B\u7684\u7ED3\u6784\u4F53\u63A5\u53D7\u67E5\u8BE2\u6570\u636E\u5E93\u4FE1\u606F\u8FD4\u56DE\u7684\u53C2\u6570</p><p>\u5730\u5740\uFF1Ahttps://github.com/lu569368/struct</p>`,12),c=[o];function e(u,l){return s(),a("div",null,c)}var i=n(p,[["render",e],["__file","3-\u5E38\u89C1\u9762\u8BD5\u9898.html.vue"]]);export{i as default};
