import{_ as n,o as s,c as a,e as p}from"./app.a047c15b.js";const t={},o=p(`<h1 id="_1-\u6570\u7EC4array" tabindex="-1"><a class="header-anchor" href="#_1-\u6570\u7EC4array" aria-hidden="true">#</a> 1. \u6570\u7EC4Array</h1><p>Golang Array\u548C\u4EE5\u5F80\u8BA4\u77E5\u7684\u6570\u7EC4\u6709\u5F88\u5927\u4E0D\u540C\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>    1. \u6570\u7EC4\uFF1A\u662F\u540C\u4E00\u79CD\u6570\u636E\u7C7B\u578B\u7684\u56FA\u5B9A\u957F\u5EA6\u7684\u5E8F\u5217\u3002
    2. \u6570\u7EC4\u5B9A\u4E49\uFF1Avar a [len]int\uFF0C\u6BD4\u5982\uFF1Avar a [5]int\uFF0C\u6570\u7EC4\u957F\u5EA6\u5FC5\u987B\u662F\u5E38\u91CF\uFF0C\u4E14\u662F\u7C7B\u578B\u7684\u7EC4\u6210\u90E8\u5206\u3002\u4E00\u65E6\u5B9A\u4E49\uFF0C\u957F\u5EA6\u4E0D\u80FD\u53D8\u3002
    3. \u957F\u5EA6\u662F\u6570\u7EC4\u7C7B\u578B\u7684\u4E00\u90E8\u5206\uFF0C\u56E0\u6B64\uFF0Cvar a[5] int\u548Cvar a[10]int\u662F\u4E0D\u540C\u7684\u7C7B\u578B\u3002
    4. \u6570\u7EC4\u53EF\u4EE5\u901A\u8FC7\u4E0B\u6807\u8FDB\u884C\u8BBF\u95EE\uFF0C\u4E0B\u6807\u662F\u4ECE0\u5F00\u59CB\uFF0C\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u4E0B\u6807\u662F\uFF1Alen-1
    for i := 0; i &lt; len(a); i++ {
    }
    for index, v := range a {
    }
    5. \u8BBF\u95EE\u8D8A\u754C\uFF0C\u5982\u679C\u4E0B\u6807\u5728\u6570\u7EC4\u5408\u6CD5\u8303\u56F4\u4E4B\u5916\uFF0C\u5219\u89E6\u53D1\u8BBF\u95EE\u8D8A\u754C\uFF0C\u4F1Apanic
    6. \u6570\u7EC4\u662F\u503C\u7C7B\u578B\uFF0C\u8D4B\u503C\u548C\u4F20\u53C2\u4F1A\u590D\u5236\u6574\u4E2A\u6570\u7EC4\uFF0C\u800C\u4E0D\u662F\u6307\u9488\u3002\u56E0\u6B64\u6539\u53D8\u526F\u672C\u7684\u503C\uFF0C\u4E0D\u4F1A\u6539\u53D8\u672C\u8EAB\u7684\u503C\u3002
    7.\u652F\u6301 &quot;==&quot;\u3001&quot;!=&quot; \u64CD\u4F5C\u7B26\uFF0C\u56E0\u4E3A\u5185\u5B58\u603B\u662F\u88AB\u521D\u59CB\u5316\u8FC7\u7684\u3002
    8.\u6307\u9488\u6570\u7EC4 [n]*T\uFF0C\u6570\u7EC4\u6307\u9488 *[n]T\u3002
</code></pre></div><h3 id="_1-1-1-\u6570\u7EC4\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#_1-1-1-\u6570\u7EC4\u521D\u59CB\u5316" aria-hidden="true">#</a> 1.1.1. \u6570\u7EC4\u521D\u59CB\u5316\uFF1A</h3><h4 id="\u4E00\u7EF4\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u4E00\u7EF4\u6570\u7EC4" aria-hidden="true">#</a> \u4E00\u7EF4\u6570\u7EC4\uFF1A</h4><div class="language-text ext-text"><pre class="language-text"><code>    \u5168\u5C40\uFF1A
    var arr0 [5]int = [5]int{1, 2, 3}
    var arr1 = [5]int{1, 2, 3, 4, 5}
    var arr2 = [...]int{1, 2, 3, 4, 5, 6}
    var str = [5]string{3: &quot;hello world&quot;, 4: &quot;tom&quot;}
    \u5C40\u90E8\uFF1A
    a := [3]int{1, 2}           // \u672A\u521D\u59CB\u5316\u5143\u7D20\u503C\u4E3A 0\u3002
    b := [...]int{1, 2, 3, 4}   // \u901A\u8FC7\u521D\u59CB\u5316\u503C\u786E\u5B9A\u6570\u7EC4\u957F\u5EA6\u3002
    c := [5]int{2: 100, 4: 200} // \u4F7F\u7528\u7D22\u5F15\u53F7\u521D\u59CB\u5316\u5143\u7D20\u3002
    d := [...]struct {
        name string
        age  uint8
    }{
        {&quot;user1&quot;, 10}, // \u53EF\u7701\u7565\u5143\u7D20\u7C7B\u578B\u3002
        {&quot;user2&quot;, 20}, // \u522B\u5FD8\u4E86\u6700\u540E\u4E00\u884C\u7684\u9017\u53F7\u3002
    }
</code></pre></div><p>\u4EE3\u7801\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> arr0 <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">:</span> <span class="token string">&quot;hello world&quot;</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">:</span> <span class="token string">&quot;tom&quot;</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span>           <span class="token comment">// \u672A\u521D\u59CB\u5316\u5143\u7D20\u503C\u4E3A 0\u3002</span>
    b <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>   <span class="token comment">// \u901A\u8FC7\u521D\u59CB\u5316\u503C\u786E\u5B9A\u6570\u7EC4\u957F\u5EA6\u3002</span>
    c <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">}</span> <span class="token comment">// \u4F7F\u7528\u5F15\u53F7\u521D\u59CB\u5316\u5143\u7D20\u3002</span>
    d <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token keyword">struct</span> <span class="token punctuation">{</span>
        name <span class="token builtin">string</span>
        age  <span class="token builtin">uint8</span>
    <span class="token punctuation">}</span><span class="token punctuation">{</span>
        <span class="token punctuation">{</span><span class="token string">&quot;user1&quot;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u53EF\u7701\u7565\u5143\u7D20\u7C7B\u578B\u3002</span>
        <span class="token punctuation">{</span><span class="token string">&quot;user2&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u522B\u5FD8\u4E86\u6700\u540E\u4E00\u884C\u7684\u9017\u53F7\u3002</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>arr0<span class="token punctuation">,</span> arr1<span class="token punctuation">,</span> arr2<span class="token punctuation">,</span> str<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C:</p><div class="language-text ext-text"><pre class="language-text"><code>[1 2 3 0 0] [1 2 3 4 5] [1 2 3 4 5 6] [   hello world tom]
[1 2 0] [1 2 3 4] [0 0 100 0 200] [{user1 10} {user2 20}]
</code></pre></div><h4 id="\u591A\u7EF4\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u591A\u7EF4\u6570\u7EC4" aria-hidden="true">#</a> \u591A\u7EF4\u6570\u7EC4</h4><div class="language-text ext-text"><pre class="language-text"><code>    \u5168\u5C40
    var arr0 [5][3]int
    var arr1 [2][3]int = [...][3]int{{1, 2, 3}, {7, 8, 9}}
    \u5C40\u90E8\uFF1A
    a := [2][3]int{{1, 2, 3}, {4, 5, 6}}
    b := [...][2]int{{1, 1}, {2, 2}, {3, 3}} // \u7B2C 2 \u7EAC\u5EA6\u4E0D\u80FD\u7528 &quot;...&quot;\u3002
</code></pre></div><p>\u4EE3\u7801\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> arr0 <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span>
<span class="token keyword">var</span> arr1 <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
    b <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token comment">// \u7B2C 2 \u7EAC\u5EA6\u4E0D\u80FD\u7528 &quot;...&quot;\u3002</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>arr0<span class="token punctuation">,</span> arr1<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    [[0 0 0] [0 0 0] [0 0 0] [0 0 0] [0 0 0]] [[1 2 3] [7 8 9]]
    [[1 2 3] [4 5 6]] [[1 1] [2 2] [3 3]]
</code></pre></div><p>\u503C\u62F7\u8D1D\u884C\u4E3A\u4F1A\u9020\u6210\u6027\u80FD\u95EE\u9898\uFF0C\u901A\u5E38\u4F1A\u5EFA\u8BAE\u4F7F\u7528 slice\uFF0C\u6216\u6570\u7EC4\u6307\u9488\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span>x <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;x: %p\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>x<span class="token punctuation">)</span>
    x<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1000</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;a: %p\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>a<span class="token punctuation">)</span>

    <span class="token function">test</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C:</p><div class="language-text ext-text"><pre class="language-text"><code>    a: 0xc42007c010
    x: 0xc42007c030
    [0 0]
</code></pre></div><p>\u5185\u7F6E\u51FD\u6570 len \u548C cap \u90FD\u8FD4\u56DE\u6570\u7EC4\u957F\u5EA6 (\u5143\u7D20\u6570\u91CF)\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span> 
<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>2 2
</code></pre></div><h4 id="\u591A\u7EF4\u6570\u7EC4\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u591A\u7EF4\u6570\u7EC4\u904D\u5386" aria-hidden="true">#</a> \u591A\u7EF4\u6570\u7EC4\u904D\u5386\uFF1A</h4><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">var</span> f <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">}</span><span class="token punctuation">}</span>

    <span class="token keyword">for</span> k1<span class="token punctuation">,</span> v1 <span class="token operator">:=</span> <span class="token keyword">range</span> f <span class="token punctuation">{</span>
        <span class="token keyword">for</span> k2<span class="token punctuation">,</span> v2 <span class="token operator">:=</span> <span class="token keyword">range</span> v1 <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;(%d,%d)=%d &quot;</span><span class="token punctuation">,</span> k1<span class="token punctuation">,</span> k2<span class="token punctuation">,</span> v2<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    (0,0)=1 (0,1)=2 (0,2)=3 
    (1,0)=7 (1,1)=8 (1,2)=9
</code></pre></div><h3 id="_1-1-2-\u6570\u7EC4\u62F7\u8D1D\u548C\u4F20\u53C2" tabindex="-1"><a class="header-anchor" href="#_1-1-2-\u6570\u7EC4\u62F7\u8D1D\u548C\u4F20\u53C2" aria-hidden="true">#</a> 1.1.2. \u6570\u7EC4\u62F7\u8D1D\u548C\u4F20\u53C2</h3><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">printArr</span><span class="token punctuation">(</span>arr <span class="token operator">*</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">10</span>
    <span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> arr <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> arr1 <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span>
    <span class="token function">printArr</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>arr1<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span>
    arr2 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">}</span>
    <span class="token function">printArr</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>arr2<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_1-1-3-\u6570\u7EC4\u7EC3\u4E60" tabindex="-1"><a class="header-anchor" href="#_1-1-3-\u6570\u7EC4\u7EC3\u4E60" aria-hidden="true">#</a> 1.1.3. \u6570\u7EC4\u7EC3\u4E60</h3><h4 id="\u6C42\u6570\u7EC4\u6240\u6709\u5143\u7D20\u4E4B\u548C" tabindex="-1"><a class="header-anchor" href="#\u6C42\u6570\u7EC4\u6240\u6709\u5143\u7D20\u4E4B\u548C" aria-hidden="true">#</a> \u6C42\u6570\u7EC4\u6240\u6709\u5143\u7D20\u4E4B\u548C</h4><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;math/rand&quot;</span>
    <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// \u6C42\u5143\u7D20\u548C</span>
<span class="token keyword">func</span> <span class="token function">sumArr</span><span class="token punctuation">(</span>a <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> sum <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        sum <span class="token operator">+=</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> sum
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u82E5\u60F3\u505A\u4E00\u4E2A\u771F\u6B63\u7684\u968F\u673A\u6570\uFF0C\u8981\u79CD\u5B50</span>
    <span class="token comment">// seed()\u79CD\u5B50\u9ED8\u8BA4\u662F1</span>
    <span class="token comment">//rand.Seed(1)</span>
    rand<span class="token punctuation">.</span><span class="token function">Seed</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Unix</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">var</span> b <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token builtin">int</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u4EA7\u751F\u4E00\u4E2A0\u52301000\u968F\u673A\u6570</span>
        b<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    sum <span class="token operator">:=</span> <span class="token function">sumArr</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;sum=%d\\n&quot;</span><span class="token punctuation">,</span> sum<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u627E\u51FA\u6570\u7EC4\u4E2D\u548C\u4E3A\u7ED9\u5B9A\u503C\u7684\u4E24\u4E2A\u5143\u7D20\u7684\u4E0B\u6807-\u4F8B\u5982\u6570\u7EC4-1-3-5-8-7-\u627E\u51FA\u4E24\u4E2A\u5143\u7D20\u4E4B\u548C\u7B49\u4E8E8\u7684\u4E0B\u6807\u5206\u522B\u662F-0-4-\u548C-1-2" tabindex="-1"><a class="header-anchor" href="#\u627E\u51FA\u6570\u7EC4\u4E2D\u548C\u4E3A\u7ED9\u5B9A\u503C\u7684\u4E24\u4E2A\u5143\u7D20\u7684\u4E0B\u6807-\u4F8B\u5982\u6570\u7EC4-1-3-5-8-7-\u627E\u51FA\u4E24\u4E2A\u5143\u7D20\u4E4B\u548C\u7B49\u4E8E8\u7684\u4E0B\u6807\u5206\u522B\u662F-0-4-\u548C-1-2" aria-hidden="true">#</a> \u627E\u51FA\u6570\u7EC4\u4E2D\u548C\u4E3A\u7ED9\u5B9A\u503C\u7684\u4E24\u4E2A\u5143\u7D20\u7684\u4E0B\u6807\uFF0C\u4F8B\u5982\u6570\u7EC4[1,3,5,8,7]\uFF0C\u627E\u51FA\u4E24\u4E2A\u5143\u7D20\u4E4B\u548C\u7B49\u4E8E8\u7684\u4E0B\u6807\u5206\u522B\u662F\uFF080\uFF0C4\uFF09\u548C\uFF081\uFF0C2\uFF09</h4><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token comment">//\uF06C    \u627E\u51FA\u6570\u7EC4\u4E2D\u548C\u4E3A\u7ED9\u5B9A\u503C\u7684\u4E24\u4E2A\u5143\u7D20\u7684\u4E0B\u6807\uFF0C\u4F8B\u5982\u6570\u7EC4[1,3,5,8,7]\uFF0C</span>
<span class="token comment">// \u627E\u51FA\u4E24\u4E2A\u5143\u7D20\u4E4B\u548C\u7B49\u4E8E8\u7684\u4E0B\u6807\u5206\u522B\u662F\uFF080\uFF0C4\uFF09\u548C\uFF081\uFF0C2\uFF09</span>

<span class="token comment">// \u6C42\u5143\u7D20\u548C\uFF0C\u662F\u7ED9\u5B9A\u7684\u503C</span>
<span class="token keyword">func</span> <span class="token function">myTest</span><span class="token punctuation">(</span>a <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> target <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u904D\u5386\u6570\u7EC4</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        other <span class="token operator">:=</span> target <span class="token operator">-</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token comment">// \u7EE7\u7EED\u904D\u5386</span>
        <span class="token keyword">for</span> j <span class="token operator">:=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> a<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> other <span class="token punctuation">{</span>
                fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;(%d,%d)\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    b <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">}</span>
    <span class="token function">myTest</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,35),c=[o];function e(u,l){return s(),a("div",null,c)}var i=n(t,[["render",e],["__file","9-\u6570\u7EC4Array.html.vue"]]);export{i as default};
