import{_ as n,o as s,c as a,e as t}from"./app.ad4da1a1.js";const p={},o=t(`<h1 id="_1-\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1-\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> 1. \u8868\u8FBE\u5F0F</h1><p>Golang \u8868\u8FBE\u5F0F \uFF1A\u6839\u636E\u8C03\u7528\u8005\u4E0D\u540C\uFF0C\u65B9\u6CD5\u5206\u4E3A\u4E24\u79CD\u8868\u73B0\u5F62\u5F0F:</p><div class="language-text ext-text"><pre class="language-text"><code>    instance.method(args...) ---&gt; &lt;type&gt;.func(instance, args...)
</code></pre></div><p>\u524D\u8005\u79F0\u4E3A method value\uFF0C\u540E\u8005 method expression\u3002</p><p>\u4E24\u8005\u90FD\u53EF\u50CF\u666E\u901A\u51FD\u6570\u90A3\u6837\u8D4B\u503C\u548C\u4F20\u53C2\uFF0C\u533A\u522B\u5728\u4E8E method value \u7ED1\u5B9A\u5B9E\u4F8B\uFF0C\u800C method expression \u5219\u987B\u663E\u5F0F\u4F20\u53C2\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    id   <span class="token builtin">int</span>
    name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>self <span class="token operator">*</span>User<span class="token punctuation">)</span> <span class="token function">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%p, %v\\n&quot;</span><span class="token punctuation">,</span> self<span class="token punctuation">,</span> self<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    u <span class="token operator">:=</span> User<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">}</span>
    u<span class="token punctuation">.</span><span class="token function">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    mValue <span class="token operator">:=</span> u<span class="token punctuation">.</span>Test
    <span class="token function">mValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u9690\u5F0F\u4F20\u9012 receiver</span>

    mExpression <span class="token operator">:=</span> <span class="token punctuation">(</span><span class="token operator">*</span>User<span class="token punctuation">)</span><span class="token punctuation">.</span>Test
    <span class="token function">mExpression</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>u<span class="token punctuation">)</span> <span class="token comment">// \u663E\u5F0F\u4F20\u9012 receiver</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C:</p><div class="language-text ext-text"><pre class="language-text"><code>    0xc42000a060, &amp;{1 Tom}
    0xc42000a060, &amp;{1 Tom}
    0xc42000a060, &amp;{1 Tom}
</code></pre></div><p>\u9700\u8981\u6CE8\u610F\uFF0Cmethod value \u4F1A\u590D\u5236 receiver\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    id   <span class="token builtin">int</span>
    name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>self User<span class="token punctuation">)</span> <span class="token function">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    u <span class="token operator">:=</span> User<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">}</span>
    mValue <span class="token operator">:=</span> u<span class="token punctuation">.</span>Test <span class="token comment">// \u7ACB\u5373\u590D\u5236 receiver\uFF0C\u56E0\u4E3A\u4E0D\u662F\u6307\u9488\u7C7B\u578B\uFF0C\u4E0D\u53D7\u540E\u7EED\u4FEE\u6539\u5F71\u54CD\u3002</span>

    u<span class="token punctuation">.</span>id<span class="token punctuation">,</span> u<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;Jack&quot;</span>
    u<span class="token punctuation">.</span><span class="token function">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token function">mValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C</p><div class="language-text ext-text"><pre class="language-text"><code>    {2 Jack}
    {1 Tom}
</code></pre></div><p>\u5728\u6C47\u7F16\u5C42\u9762\uFF0Cmethod value \u548C\u95ED\u5305\u7684\u5B9E\u73B0\u65B9\u5F0F\u76F8\u540C\uFF0C\u5B9E\u9645\u8FD4\u56DE FuncVal \u7C7B\u578B\u5BF9\u8C61\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>    FuncVal { method_address, receiver_copy }
</code></pre></div><p>\u53EF\u4F9D\u636E\u65B9\u6CD5\u96C6\u8F6C\u6362 method expression\uFF0C\u6CE8\u610F receiver \u7C7B\u578B\u7684\u5DEE\u5F02\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    id   <span class="token builtin">int</span>
    name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>self <span class="token operator">*</span>User<span class="token punctuation">)</span> <span class="token function">TestPointer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;TestPointer: %p, %v\\n&quot;</span><span class="token punctuation">,</span> self<span class="token punctuation">,</span> self<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>self User<span class="token punctuation">)</span> <span class="token function">TestValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;TestValue: %p, %v\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>self<span class="token punctuation">,</span> self<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    u <span class="token operator">:=</span> User<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;User: %p, %v\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>u<span class="token punctuation">,</span> u<span class="token punctuation">)</span>

    mv <span class="token operator">:=</span> User<span class="token punctuation">.</span>TestValue
    <span class="token function">mv</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span>

    mp <span class="token operator">:=</span> <span class="token punctuation">(</span><span class="token operator">*</span>User<span class="token punctuation">)</span><span class="token punctuation">.</span>TestPointer
    <span class="token function">mp</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>u<span class="token punctuation">)</span>

    mp2 <span class="token operator">:=</span> <span class="token punctuation">(</span><span class="token operator">*</span>User<span class="token punctuation">)</span><span class="token punctuation">.</span>TestValue <span class="token comment">// *User \u65B9\u6CD5\u96C6\u5305\u542B TestValue\u3002\u7B7E\u540D\u53D8\u4E3A func TestValue(self *User)\u3002\u5B9E\u9645\u4F9D\u7136\u662F receiver value copy\u3002</span>
    <span class="token function">mp2</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>u<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA:</p><div class="language-text ext-text"><pre class="language-text"><code>    User: 0xc42000a060, {1 Tom}
    TestValue: 0xc42000a0a0, {1 Tom}
    TestPointer: 0xc42000a060, &amp;{1 Tom}
    TestValue: 0xc42000a100, {1 Tom}
</code></pre></div><p>\u5C06\u65B9\u6CD5 &quot;\u8FD8\u539F&quot; \u6210\u51FD\u6570\uFF0C\u5C31\u5BB9\u6613\u7406\u89E3\u4E0B\u9762\u7684\u4EE3\u7801\u4E86\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">type</span> Data <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>Data<span class="token punctuation">)</span> <span class="token function">TestValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token operator">*</span>Data<span class="token punctuation">)</span> <span class="token function">TestPointer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> p <span class="token operator">*</span>Data <span class="token operator">=</span> <span class="token boolean">nil</span>
    p<span class="token punctuation">.</span><span class="token function">TestPointer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token punctuation">(</span><span class="token operator">*</span>Data<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">TestPointer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// method value</span>
    <span class="token punctuation">(</span><span class="token operator">*</span>Data<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">TestPointer</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">)</span>   <span class="token comment">// method expression</span>

    <span class="token comment">// p.TestValue()            // invalid memory address or nil pointer dereference</span>

    <span class="token comment">// (Data)(nil).TestValue()  // cannot convert nil to type Data</span>
    <span class="token comment">// Data.TestValue(nil)      // cannot use nil as type Data in function argument</span>
<span class="token punctuation">}</span>
</code></pre></div>`,20),e=[o];function c(u,l){return s(),a("div",null,e)}var i=n(p,[["render",c],["__file","4-\u8868\u8FBE\u5F0F.html.vue"]]);export{i as default};
