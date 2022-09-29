import{_ as n,o as s,c as a,e as t}from"./app.ad4da1a1.js";const p={},o=t(`<h1 id="_1-\u533F\u540D\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#_1-\u533F\u540D\u5B57\u6BB5" aria-hidden="true">#</a> 1. \u533F\u540D\u5B57\u6BB5</h1><p>Golang\u533F\u540D\u5B57\u6BB5 \uFF1A\u53EF\u4EE5\u50CF\u5B57\u6BB5\u6210\u5458\u90A3\u6837\u8BBF\u95EE\u533F\u540D\u5B57\u6BB5\u65B9\u6CD5\uFF0C\u7F16\u8BD1\u5668\u8D1F\u8D23\u67E5\u627E\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    id   <span class="token builtin">int</span>
    name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Manager <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    User
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>self <span class="token operator">*</span>User<span class="token punctuation">)</span> <span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span> <span class="token comment">// receiver = &amp;(Manager.User)</span>
    <span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;User: %p, %v&quot;</span><span class="token punctuation">,</span> self<span class="token punctuation">,</span> self<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    m <span class="token operator">:=</span> Manager<span class="token punctuation">{</span>User<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Manager: %p\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>m<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C:</p><div class="language-text ext-text"><pre class="language-text"><code>    Manager: 0xc42000a060
    User: 0xc42000a060, &amp;{1 Tom}
</code></pre></div><p>\u901A\u8FC7\u533F\u540D\u5B57\u6BB5\uFF0C\u53EF\u83B7\u5F97\u548C\u7EE7\u627F\u7C7B\u4F3C\u7684\u590D\u7528\u80FD\u529B\u3002\u4F9D\u636E\u7F16\u8BD1\u5668\u67E5\u627E\u6B21\u5E8F\uFF0C\u53EA\u9700\u5728\u5916\u5C42\u5B9A\u4E49\u540C\u540D\u65B9\u6CD5\uFF0C\u5C31\u53EF\u4EE5\u5B9E\u73B0 &quot;override&quot;\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    id   <span class="token builtin">int</span>
    name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Manager <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    User
    title <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>self <span class="token operator">*</span>User<span class="token punctuation">)</span> <span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;User: %p, %v&quot;</span><span class="token punctuation">,</span> self<span class="token punctuation">,</span> self<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>self <span class="token operator">*</span>Manager<span class="token punctuation">)</span> <span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;Manager: %p, %v&quot;</span><span class="token punctuation">,</span> self<span class="token punctuation">,</span> self<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    m <span class="token operator">:=</span> Manager<span class="token punctuation">{</span>User<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;Administrator&quot;</span><span class="token punctuation">}</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>User<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C:</p><div class="language-text ext-text"><pre class="language-text"><code>    Manager: 0xc420074180, &amp;{{1 Tom} Administrator}
    User: 0xc420074180, &amp;{1 Tom}
</code></pre></div>`,9),c=[o];function e(u,l){return s(),a("div",null,c)}var k=n(p,[["render",e],["__file","2-\u533F\u540D\u5B57\u6BB5.html.vue"]]);export{k as default};
