import{_ as n,o as s,c as a,e as t}from"./app.cef7465c.js";const p={},o=t(`<h1 id="_1-\u81EA\u5B9A\u4E49error" tabindex="-1"><a class="header-anchor" href="#_1-\u81EA\u5B9A\u4E49error" aria-hidden="true">#</a> 1. \u81EA\u5B9A\u4E49error</h1><h2 id="_1-1-\u629B\u5F02\u5E38\u548C\u5904\u7406\u5F02\u5E38" tabindex="-1"><a class="header-anchor" href="#_1-1-\u629B\u5F02\u5E38\u548C\u5904\u7406\u5F02\u5E38" aria-hidden="true">#</a> 1.1. \u629B\u5F02\u5E38\u548C\u5904\u7406\u5F02\u5E38</h2><h3 id="_1-1-1-\u7CFB\u7EDF\u629B" tabindex="-1"><a class="header-anchor" href="#_1-1-1-\u7CFB\u7EDF\u629B" aria-hidden="true">#</a> 1.1.1. \u7CFB\u7EDF\u629B</h3><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token comment">// \u7CFB\u7EDF\u629B</span>
<span class="token keyword">func</span> <span class="token function">test01</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   a <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>
   a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">123</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
   <span class="token comment">//a[10] = 11</span>
   index <span class="token operator">:=</span> <span class="token number">10</span>
   a<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">10</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">getCircleArea</span><span class="token punctuation">(</span>radius <span class="token builtin">float32</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>area <span class="token builtin">float32</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> radius <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u81EA\u5DF1\u629B</span>
      <span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;\u534A\u5F84\u4E0D\u80FD\u4E3A\u8D1F&quot;</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">return</span> <span class="token number">3.14</span> <span class="token operator">*</span> radius <span class="token operator">*</span> radius
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">test02</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token function">getCircleArea</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//</span>
<span class="token keyword">func</span> <span class="token function">test03</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// \u5EF6\u65F6\u6267\u884C\u533F\u540D\u51FD\u6570</span>
   <span class="token comment">// \u5EF6\u65F6\u5230\u4F55\u65F6\uFF1F\uFF081\uFF09\u7A0B\u5E8F\u6B63\u5E38\u7ED3\u675F   \uFF082\uFF09\u53D1\u751F\u5F02\u5E38\u65F6</span>
   <span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// recover() \u590D\u6D3B \u6062\u590D</span>
      <span class="token comment">// \u4F1A\u8FD4\u56DE\u7A0B\u5E8F\u4E3A\u4EC0\u4E48\u6302\u4E86</span>
      <span class="token keyword">if</span> err <span class="token operator">:=</span> <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
         fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token function">getCircleArea</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">)</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8FD9\u91CC\u6709\u6CA1\u6709\u6267\u884C&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">test04</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
   <span class="token function">test03</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;test04&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token function">test04</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_1-1-2-\u8FD4\u56DE\u5F02\u5E38" tabindex="-1"><a class="header-anchor" href="#_1-1-2-\u8FD4\u56DE\u5F02\u5E38" aria-hidden="true">#</a> 1.1.2. \u8FD4\u56DE\u5F02\u5E38</h3><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
   <span class="token string">&quot;errors&quot;</span>
   <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">getCircleArea</span><span class="token punctuation">(</span>radius <span class="token builtin">float32</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>area <span class="token builtin">float32</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> radius <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u6784\u5EFA\u4E2A\u5F02\u5E38\u5BF9\u8C61</span>
      err <span class="token operator">=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;\u534A\u5F84\u4E0D\u80FD\u4E3A\u8D1F&quot;</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span>
   <span class="token punctuation">}</span>
   area <span class="token operator">=</span> <span class="token number">3.14</span> <span class="token operator">*</span> radius <span class="token operator">*</span> radius
   <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   area<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">getCircleArea</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">)</span>
   <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
      fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>area<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_1-1-3-\u81EA\u5B9A\u4E49error" tabindex="-1"><a class="header-anchor" href="#_1-1-3-\u81EA\u5B9A\u4E49error" aria-hidden="true">#</a> 1.1.3. \u81EA\u5B9A\u4E49error\uFF1A</h3><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;os&quot;</span>
    <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> PathError <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    path       <span class="token builtin">string</span>
    op         <span class="token builtin">string</span>
    createTime <span class="token builtin">string</span>
    message    <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>PathError<span class="token punctuation">)</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;path=%s \\nop=%s \\ncreateTime=%s \\npbfiles=%s&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>path<span class="token punctuation">,</span>
        p<span class="token punctuation">.</span>op<span class="token punctuation">,</span> p<span class="token punctuation">.</span>createTime<span class="token punctuation">,</span> p<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Open</span><span class="token punctuation">(</span>filename <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>

    file<span class="token punctuation">,</span> err <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">&amp;</span>PathError<span class="token punctuation">{</span>
            path<span class="token punctuation">:</span>       filename<span class="token punctuation">,</span>
            op<span class="token punctuation">:</span>         <span class="token string">&quot;read&quot;</span><span class="token punctuation">,</span>
            message<span class="token punctuation">:</span>    err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            createTime<span class="token punctuation">:</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;%v&quot;</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">defer</span> file<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    err <span class="token operator">:=</span> <span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;/Users/5lmh/Desktop/go/src/test.txt&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">switch</span> v <span class="token operator">:=</span> err<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token operator">*</span>PathError<span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;get path error,&quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    get path error, path=/Users/pprof/Desktop/go/src/test.txt 
    op=read 
    createTime=2018-04-05 11:25:17.331915 +0800 CST m=+0.000441790 
    message=open /Users/pprof/Desktop/go/src/test.txt: no such file or directory
</code></pre></div>`,10),e=[o];function c(u,l){return s(),a("div",null,e)}var i=n(p,[["render",c],["__file","5-\u81EA\u5B9A\u4E49error.html.vue"]]);export{i as default};
