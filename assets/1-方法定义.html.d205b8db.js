import{_ as n,o as s,c as a,e as t}from"./app.cef7465c.js";const p={},o=t(`<h1 id="\u65B9\u6CD5\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u5B9A\u4E49" aria-hidden="true">#</a> \u65B9\u6CD5\u5B9A\u4E49</h1><hr><p>Golang \u65B9\u6CD5\u603B\u662F\u7ED1\u5B9A\u5BF9\u8C61\u5B9E\u4F8B\uFF0C\u5E76\u9690\u5F0F\u5C06\u5B9E\u4F8B\u4F5C\u4E3A\u7B2C\u4E00\u5B9E\u53C2 (receiver)\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>\u2022 \u53EA\u80FD\u4E3A\u5F53\u524D\u5305\u5185\u547D\u540D\u7C7B\u578B\u5B9A\u4E49\u65B9\u6CD5\u3002
\u2022 \u53C2\u6570 receiver \u53EF\u4EFB\u610F\u547D\u540D\u3002\u5982\u65B9\u6CD5\u4E2D\u672A\u66FE\u4F7F\u7528 \uFF0C\u53EF\u7701\u7565\u53C2\u6570\u540D\u3002
\u2022 \u53C2\u6570 receiver \u7C7B\u578B\u53EF\u4EE5\u662F T \u6216 *T\u3002\u57FA\u7C7B\u578B T \u4E0D\u80FD\u662F\u63A5\u53E3\u6216\u6307\u9488\u3002 
\u2022 \u4E0D\u652F\u6301\u65B9\u6CD5\u91CD\u8F7D\uFF0Creceiver \u53EA\u662F\u53C2\u6570\u7B7E\u540D\u7684\u7EC4\u6210\u90E8\u5206\u3002
\u2022 \u53EF\u7528\u5B9E\u4F8B value \u6216 pointer \u8C03\u7528\u5168\u90E8\u65B9\u6CD5\uFF0C\u7F16\u8BD1\u5668\u81EA\u52A8\u8F6C\u6362\u3002
</code></pre></div><p>\u4E00\u4E2A\u65B9\u6CD5\u5C31\u662F\u4E00\u4E2A\u5305\u542B\u4E86\u63A5\u53D7\u8005\u7684\u51FD\u6570\uFF0C\u63A5\u53D7\u8005\u53EF\u4EE5\u662F\u547D\u540D\u7C7B\u578B\u6216\u8005\u7ED3\u6784\u4F53\u7C7B\u578B\u7684\u4E00\u4E2A\u503C\u6216\u8005\u662F\u4E00\u4E2A\u6307\u9488\u3002</p><p>\u6240\u6709\u7ED9\u5B9A\u7C7B\u578B\u7684\u65B9\u6CD5\u5C5E\u4E8E\u8BE5\u7C7B\u578B\u7684\u65B9\u6CD5\u96C6\u3002</p><h3 id="_1-1-1-\u65B9\u6CD5\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#_1-1-1-\u65B9\u6CD5\u5B9A\u4E49" aria-hidden="true">#</a> 1.1.1. \u65B9\u6CD5\u5B9A\u4E49\uFF1A</h3><div class="language-go ext-go"><pre class="language-go"><code>    <span class="token keyword">func</span> <span class="token punctuation">(</span>recevier <span class="token keyword">type</span><span class="token punctuation">)</span> <span class="token function">methodName</span><span class="token punctuation">(</span>\u53C2\u6570\u5217\u8868<span class="token punctuation">)</span><span class="token punctuation">(</span>\u8FD4\u56DE\u503C\u5217\u8868<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

    \u53C2\u6570\u548C\u8FD4\u56DE\u503C\u53EF\u4EE5\u7701\u7565
<span class="token keyword">package</span> main

<span class="token keyword">type</span> Test <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// \u65E0\u53C2\u6570\u3001\u65E0\u8FD4\u56DE\u503C</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>t Test<span class="token punctuation">)</span> <span class="token function">method0</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">// \u5355\u53C2\u6570\u3001\u65E0\u8FD4\u56DE\u503C</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>t Test<span class="token punctuation">)</span> <span class="token function">method1</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">// \u591A\u53C2\u6570\u3001\u65E0\u8FD4\u56DE\u503C</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>t Test<span class="token punctuation">)</span> <span class="token function">method2</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">// \u65E0\u53C2\u6570\u3001\u5355\u8FD4\u56DE\u503C</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>t Test<span class="token punctuation">)</span> <span class="token function">method3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u591A\u53C2\u6570\u3001\u591A\u8FD4\u56DE\u503C</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>t Test<span class="token punctuation">)</span> <span class="token function">method4</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>z <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u65E0\u53C2\u6570\u3001\u65E0\u8FD4\u56DE\u503C</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>t <span class="token operator">*</span>Test<span class="token punctuation">)</span> <span class="token function">method5</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">// \u5355\u53C2\u6570\u3001\u65E0\u8FD4\u56DE\u503C</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>t <span class="token operator">*</span>Test<span class="token punctuation">)</span> <span class="token function">method6</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">// \u591A\u53C2\u6570\u3001\u65E0\u8FD4\u56DE\u503C</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>t <span class="token operator">*</span>Test<span class="token punctuation">)</span> <span class="token function">method7</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token comment">// \u65E0\u53C2\u6570\u3001\u5355\u8FD4\u56DE\u503C</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>t <span class="token operator">*</span>Test<span class="token punctuation">)</span> <span class="token function">method8</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u591A\u53C2\u6570\u3001\u591A\u8FD4\u56DE\u503C</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>t <span class="token operator">*</span>Test<span class="token punctuation">)</span> <span class="token function">method9</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>z <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><p>\u4E0B\u9762\u5B9A\u4E49\u4E00\u4E2A\u7ED3\u6784\u4F53\u7C7B\u578B\u548C\u8BE5\u7C7B\u578B\u7684\u4E00\u4E2A\u65B9\u6CD5\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">//\u7ED3\u6784\u4F53</span>
<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name  <span class="token builtin">string</span>
    Email <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u65B9\u6CD5</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>u User<span class="token punctuation">)</span> <span class="token function">Notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%v : %v \\n&quot;</span><span class="token punctuation">,</span> u<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> u<span class="token punctuation">.</span>Email<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u503C\u7C7B\u578B\u8C03\u7528\u65B9\u6CD5</span>
    u1 <span class="token operator">:=</span> User<span class="token punctuation">{</span><span class="token string">&quot;golang&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;golang@golang.com&quot;</span><span class="token punctuation">}</span>
    u1<span class="token punctuation">.</span><span class="token function">Notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// \u6307\u9488\u7C7B\u578B\u8C03\u7528\u65B9\u6CD5</span>
    u2 <span class="token operator">:=</span> User<span class="token punctuation">{</span><span class="token string">&quot;go&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;go@go.com&quot;</span><span class="token punctuation">}</span>
    u3 <span class="token operator">:=</span> <span class="token operator">&amp;</span>u2
    u3<span class="token punctuation">.</span><span class="token function">Notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    golang : golang@golang.com 
    go : go@go.com
</code></pre></div><p>\u89E3\u91CA\uFF1A \u9996\u5148\u6211\u4EEC\u5B9A\u4E49\u4E86\u4E00\u4E2A\u53EB\u505A User \u7684\u7ED3\u6784\u4F53\u7C7B\u578B\uFF0C\u7136\u540E\u5B9A\u4E49\u4E86\u4E00\u4E2A\u8BE5\u7C7B\u578B\u7684\u65B9\u6CD5\u53EB\u505A Notify\uFF0C\u8BE5\u65B9\u6CD5\u7684\u63A5\u53D7\u8005\u662F\u4E00\u4E2A User \u7C7B\u578B\u7684\u503C\u3002\u8981\u8C03\u7528 Notify \u65B9\u6CD5\u6211\u4EEC\u9700\u8981\u4E00\u4E2A User \u7C7B\u578B\u7684\u503C\u6216\u8005\u6307\u9488\u3002</p><p>\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\u5F53\u6211\u4EEC\u4F7F\u7528\u6307\u9488\u65F6\uFF0CGo \u8C03\u6574\u548C\u89E3\u5F15\u7528\u6307\u9488\u4F7F\u5F97\u8C03\u7528\u53EF\u4EE5\u88AB\u6267\u884C\u3002\u6CE8\u610F\uFF0C\u5F53\u63A5\u53D7\u8005\u4E0D\u662F\u4E00\u4E2A\u6307\u9488\u65F6\uFF0C\u8BE5\u65B9\u6CD5\u64CD\u4F5C\u5BF9\u5E94\u63A5\u53D7\u8005\u7684\u503C\u7684\u526F\u672C(\u610F\u601D\u5C31\u662F\u5373\u4F7F\u4F60\u4F7F\u7528\u4E86\u6307\u9488\u8C03\u7528\u51FD\u6570\uFF0C\u4F46\u662F\u51FD\u6570\u7684\u63A5\u53D7\u8005\u662F\u503C\u7C7B\u578B\uFF0C\u6240\u4EE5\u51FD\u6570\u5185\u90E8\u64CD\u4F5C\u8FD8\u662F\u5BF9\u526F\u672C\u7684\u64CD\u4F5C\uFF0C\u800C\u4E0D\u662F\u6307\u9488\u64CD\u4F5C\u3002</p><p>\u6211\u4EEC\u4FEE\u6539 Notify \u65B9\u6CD5\uFF0C\u8BA9\u5B83\u7684\u63A5\u53D7\u8005\u4F7F\u7528\u6307\u9488\u7C7B\u578B\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">//\u7ED3\u6784\u4F53</span>
<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name  <span class="token builtin">string</span>
    Email <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u65B9\u6CD5</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>u <span class="token operator">*</span>User<span class="token punctuation">)</span> <span class="token function">Notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%v : %v \\n&quot;</span><span class="token punctuation">,</span> u<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> u<span class="token punctuation">.</span>Email<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u503C\u7C7B\u578B\u8C03\u7528\u65B9\u6CD5</span>
    u1 <span class="token operator">:=</span> User<span class="token punctuation">{</span><span class="token string">&quot;golang&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;golang@golang.com&quot;</span><span class="token punctuation">}</span>
    u1<span class="token punctuation">.</span><span class="token function">Notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// \u6307\u9488\u7C7B\u578B\u8C03\u7528\u65B9\u6CD5</span>
    u2 <span class="token operator">:=</span> User<span class="token punctuation">{</span><span class="token string">&quot;go&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;go@go.com&quot;</span><span class="token punctuation">}</span>
    u3 <span class="token operator">:=</span> <span class="token operator">&amp;</span>u2
    u3<span class="token punctuation">.</span><span class="token function">Notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    golang : golang@golang.com 
    go : go@go.com
</code></pre></div><p>\u6CE8\u610F\uFF1A\u5F53\u63A5\u53D7\u8005\u662F\u6307\u9488\u65F6\uFF0C\u5373\u4F7F\u7528\u503C\u7C7B\u578B\u8C03\u7528\u90A3\u4E48\u51FD\u6570\u5185\u90E8\u4E5F\u662F\u5BF9\u6307\u9488\u7684\u64CD\u4F5C\u3002</p><p>\u65B9\u6CD5\u4E0D\u8FC7\u662F\u4E00\u79CD\u7279\u6B8A\u7684\u51FD\u6570\uFF0C\u53EA\u9700\u5C06\u5176\u8FD8\u539F\uFF0C\u5C31\u77E5\u9053 receiver T \u548C <code>*T</code> \u7684\u5DEE\u522B\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Data <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    x <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>self Data<span class="token punctuation">)</span> <span class="token function">ValueTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// func ValueTest(self Data);</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Value: %p\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>self<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>self <span class="token operator">*</span>Data<span class="token punctuation">)</span> <span class="token function">PointerTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// func PointerTest(self *Data);</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Pointer: %p\\n&quot;</span><span class="token punctuation">,</span> self<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    d <span class="token operator">:=</span> Data<span class="token punctuation">{</span><span class="token punctuation">}</span>
    p <span class="token operator">:=</span> <span class="token operator">&amp;</span>d
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Data: %p\\n&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">)</span>

    d<span class="token punctuation">.</span><span class="token function">ValueTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">// ValueTest(d)</span>
    d<span class="token punctuation">.</span><span class="token function">PointerTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// PointerTest(&amp;d)</span>

    p<span class="token punctuation">.</span><span class="token function">ValueTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">// ValueTest(*p)</span>
    p<span class="token punctuation">.</span><span class="token function">PointerTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// PointerTest(p)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA:</p><div class="language-text ext-text"><pre class="language-text"><code>    Data: 0xc42007c008
    Value: 0xc42007c018
    Pointer: 0xc42007c008
    Value: 0xc42007c020
    Pointer: 0xc42007c008
</code></pre></div><h3 id="_1-1-2-\u666E\u901A\u51FD\u6570\u4E0E\u65B9\u6CD5\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_1-1-2-\u666E\u901A\u51FD\u6570\u4E0E\u65B9\u6CD5\u7684\u533A\u522B" aria-hidden="true">#</a> 1.1.2. \u666E\u901A\u51FD\u6570\u4E0E\u65B9\u6CD5\u7684\u533A\u522B</h3><p>1.\u5BF9\u4E8E\u666E\u901A\u51FD\u6570\uFF0C\u63A5\u6536\u8005\u4E3A\u503C\u7C7B\u578B\u65F6\uFF0C\u4E0D\u80FD\u5C06\u6307\u9488\u7C7B\u578B\u7684\u6570\u636E\u76F4\u63A5\u4F20\u9012\uFF0C\u53CD\u4E4B\u4EA6\u7136\u3002</p><p>2.\u5BF9\u4E8E\u65B9\u6CD5\uFF08\u5982struct\u7684\u65B9\u6CD5\uFF09\uFF0C\u63A5\u6536\u8005\u4E3A\u503C\u7C7B\u578B\u65F6\uFF0C\u53EF\u4EE5\u76F4\u63A5\u7528\u6307\u9488\u7C7B\u578B\u7684\u53D8\u91CF\u8C03\u7528\u65B9\u6CD5\uFF0C\u53CD\u8FC7\u6765\u540C\u6837\u4E5F\u53EF\u4EE5\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token comment">//\u666E\u901A\u51FD\u6570\u4E0E\u65B9\u6CD5\u7684\u533A\u522B\uFF08\u5728\u63A5\u6536\u8005\u5206\u522B\u4E3A\u503C\u7C7B\u578B\u548C\u6307\u9488\u7C7B\u578B\u7684\u65F6\u5019\uFF09</span>

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">//1.\u666E\u901A\u51FD\u6570</span>
<span class="token comment">//\u63A5\u6536\u503C\u7C7B\u578B\u53C2\u6570\u7684\u51FD\u6570</span>
<span class="token keyword">func</span> <span class="token function">valueIntTest</span><span class="token punctuation">(</span>a <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> <span class="token number">10</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u63A5\u6536\u6307\u9488\u7C7B\u578B\u53C2\u6570\u7684\u51FD\u6570</span>
<span class="token keyword">func</span> <span class="token function">pointerIntTest</span><span class="token punctuation">(</span>a <span class="token operator">*</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">*</span>a <span class="token operator">+</span> <span class="token number">10</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">structTestValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a <span class="token operator">:=</span> <span class="token number">2</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;valueIntTest:&quot;</span><span class="token punctuation">,</span> <span class="token function">valueIntTest</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">//\u51FD\u6570\u7684\u53C2\u6570\u4E3A\u503C\u7C7B\u578B\uFF0C\u5219\u4E0D\u80FD\u76F4\u63A5\u5C06\u6307\u9488\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012</span>
    <span class="token comment">//fmt.Println(&quot;valueIntTest:&quot;, valueIntTest(&amp;a))</span>
    <span class="token comment">//compile error: cannot use &amp;a (type *int) as type int in function argument</span>

    b <span class="token operator">:=</span> <span class="token number">5</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;pointerIntTest:&quot;</span><span class="token punctuation">,</span> <span class="token function">pointerIntTest</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">//\u540C\u6837\uFF0C\u5F53\u51FD\u6570\u7684\u53C2\u6570\u4E3A\u6307\u9488\u7C7B\u578B\u65F6\uFF0C\u4E5F\u4E0D\u80FD\u76F4\u63A5\u5C06\u503C\u7C7B\u578B\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012</span>
    <span class="token comment">//fmt.Println(&quot;pointerIntTest:&quot;, pointerIntTest(b))</span>
    <span class="token comment">//compile error:cannot use b (type int) as type *int in function argument</span>
<span class="token punctuation">}</span>

<span class="token comment">//2.\u65B9\u6CD5</span>
<span class="token keyword">type</span> PersonD <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    id   <span class="token builtin">int</span>
    name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u63A5\u6536\u8005\u4E3A\u503C\u7C7B\u578B</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p PersonD<span class="token punctuation">)</span> <span class="token function">valueShowName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u63A5\u6536\u8005\u4E3A\u6307\u9488\u7C7B\u578B</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>PersonD<span class="token punctuation">)</span> <span class="token function">pointShowName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">structTestFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u503C\u7C7B\u578B\u8C03\u7528\u65B9\u6CD5</span>
    personValue <span class="token operator">:=</span> PersonD<span class="token punctuation">{</span><span class="token number">101</span><span class="token punctuation">,</span> <span class="token string">&quot;hello world&quot;</span><span class="token punctuation">}</span>
    personValue<span class="token punctuation">.</span><span class="token function">valueShowName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    personValue<span class="token punctuation">.</span><span class="token function">pointShowName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">//\u6307\u9488\u7C7B\u578B\u8C03\u7528\u65B9\u6CD5</span>
    personPointer <span class="token operator">:=</span> <span class="token operator">&amp;</span>PersonD<span class="token punctuation">{</span><span class="token number">102</span><span class="token punctuation">,</span> <span class="token string">&quot;hello golang&quot;</span><span class="token punctuation">}</span>
    personPointer<span class="token punctuation">.</span><span class="token function">valueShowName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    personPointer<span class="token punctuation">.</span><span class="token function">pointShowName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">//\u4E0E\u666E\u901A\u51FD\u6570\u4E0D\u540C\uFF0C\u63A5\u6536\u8005\u4E3A\u6307\u9488\u7C7B\u578B\u548C\u503C\u7C7B\u578B\u7684\u65B9\u6CD5\uFF0C\u6307\u9488\u7C7B\u578B\u548C\u503C\u7C7B\u578B\u7684\u53D8\u91CF\u5747\u53EF\u76F8\u4E92\u8C03\u7528</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">structTestValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">structTestFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    valueIntTest: 12
    pointerIntTest: 15
    hello world
    hello world
    hello golang
    hello golang
</code></pre></div>`,29),c=[o];function e(u,l){return s(),a("div",null,c)}var i=n(p,[["render",e],["__file","1-\u65B9\u6CD5\u5B9A\u4E49.html.vue"]]);export{i as default};
