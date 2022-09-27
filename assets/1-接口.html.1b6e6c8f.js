import{_ as n,o as s,c as a,e as t}from"./app.cef7465c.js";const p={},o=t(`<p><a href="https://so.csdn.net/so/search?q=Go%E8%AF%AD%E8%A8%80&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">Go\u8BED\u8A00</a>\u63D0\u4F9B<code>interface{}</code>\u8868\u793A\u7A7A\u63A5\u53E3\u7C7B\u578B</p><ul><li>\u7A7A\u63A5\u53E3\u53EF\u7528\u4E8E\u4FDD\u5B58\u4EFB\u4F55\u6570\u636E</li><li>\u7A7A\u63A5\u53E3\u4F5C\u4E3A\u6709\u7528\u7684\u53C2\u6570\u53EF\u4F7F\u7528\u4EFB\u610F\u7C7B\u578B</li><li>\u4F7F\u7528\u7A7A\u63A5\u53E3\u4F5C\u4E3A\u53C2\u6570\u7684\u65B9\u6CD5\u53EF\u63A5\u6536\u4EFB\u4F55\u7C7B\u578B</li></ul><h3 id="\u7A7A\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u7A7A\u63A5\u53E3" aria-hidden="true">#</a> \u7A7A\u63A5\u53E3</h3><p>\u7A7A\u63A5\u53E3\u662F\u4E00\u79CD\u63A5\u53E3\uFF0C\u56E0\u6B64\u662F\u4E00\u79CD\u6307\u9488\u7C7B\u578B\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u867D\u7136\u5E76\u4E0D\u4E25\u8C28\uFF0C\u4F46\u5B83\u786E\u5B9E\u4FDD\u5B58\u4E86\u4E24\u4E2A\u6307\u9488\uFF0C\u4E00\u4E2A\u662F\u5BF9\u8C61\u7684\u7C7B\u578BiTable\uFF0C\u53E6\u4E00\u4E2A\u662F\u5BF9\u8C61\u7684\u503C\u3002\u56E0\u6B64\u4EFB\u610F\u7C7B\u578B\u7684\u5BF9\u8C61\u90FD\u80FD\u8D4B\u503C\u7ED9\u7A7A\u63A5\u53E3\u5B9E\u4F8B\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>


<span class="token keyword">func</span> main <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> any <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	any <span class="token operator">=</span> <span class="token number">1</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;any = %v, type = %T\\n&quot;</span><span class="token punctuation">,</span> any<span class="token punctuation">,</span> any<span class="token punctuation">)</span><span class="token comment">//any = 1, type = int</span>
	any <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;any = %v, type = %T\\n&quot;</span><span class="token punctuation">,</span> any<span class="token punctuation">,</span> any<span class="token punctuation">)</span><span class="token comment">//any = hello, type = string</span>
    <span class="token punctuation">}</span>
</code></pre></div><blockquote><p>\u7531\u4E8E\u7A7A\u63A5\u53E3\u62E5\u6709\u4E24\u4E2A\u6307\u9488\uFF0C\u5185\u5B58\u5E03\u5C40\u4E0A\u4E24\u4E2A\u6307\u9488\u4F1A\u5360\u7528\u4E24\u4E2A\u673A\u5668\u5B57\u957F\u3002</p></blockquote><p><strong>\u4E3A\u4EC0\u4E48\u5C06\u5207\u7247\u4E2D\u7684\u6570\u636E\u62F7\u8D1D\u5230\u7A7A\u63A5\u53E3\u5207\u7247\u4E2D\u65F6\u4F1A\u62A5\u9519\uFF1F</strong></p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>
 
 
<span class="token keyword">func</span> main <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    slice <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>
 
    <span class="token keyword">var</span> newSlice <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
    newSlice <span class="token operator">=</span> slice
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;slice = %v, newSlice = %v\\n&quot;</span><span class="token punctuation">,</span> slice<span class="token punctuation">,</span> newSlice<span class="token punctuation">)</span><span class="token comment">//slice = [1 2 3 4], newSlice = [1 2 3 4]</span>
 
    <span class="token keyword">var</span> any <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    any <span class="token operator">=</span> slice<span class="token comment">//cannot use slice (type []int) as type []interface {} in assignment</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>\u56E0\u4E3A\u6BCF\u4E2A\u7A7A\u63A5\u53E3\u7684\u5185\u5B58\u5E03\u5C40\u90FD\u4F1A\u5360\u7528\u4E24\u4E2A\u673A\u5668\u5B57\u957F\u7684\u5185\u5BB9\uFF0C\u5BF9\u4E8E\u957F\u5EA6\u4E3AN\u7684\u7A7A\u63A5\u53E3\u5207\u7247\u800C\u8A00\uFF0C\u5B83\u7684\u6BCF\u4E2A\u5143\u7D20\u90FD\u662F\u4EE52\u673A\u5668\u5B57\u957F\u4E3A\u5355\u4F4D\u7684\u8FDE\u7EED\u7A7A\u95F4\uFF0C\u56E0\u6B64\u4F1A\u603B\u5171\u4F1A\u5360\u75282N\u4E2A\u673A\u5668\u5B57\u957F\u7684\u7A7A\u95F4\u3002\u7136\u540E\u666E\u901A\u7684\u5207\u7247\uFF0C\u6BD4\u5982[]int\u5B83\u7684\u6BCF\u4E2A\u5143\u7D20\u90FD\u662Fint\u7C7B\u578B\u7684\uFF0C\u7531\u4E8Eint\u7C7B\u578B\u7684\u5185\u5B58\u5E03\u5C40\u548C\u7A7A\u63A5\u53E3\u4E0D\u540C\u3002\u53E6\u5916\u8FD9\u4E9B\u5BF9\u8C61\u7684\u5185\u5B58\u5E03\u5C40\u5728\u7F16\u8BD1\u671F\u5C31\u5DF2\u7ECF\u786E\u5B9A\u597D\u4E86\uFF0C\u6240\u4EE5\u4E0D\u80FD\u76F4\u63A5\u5C06\u4E0D\u540C\u5185\u5B58\u5E03\u5C40\u7684\u6570\u636E\u7ED3\u6784\u8FDB\u884C\u62F7\u8D1D\u3002</p></blockquote><p>\u82E5\u60F3\u8981\u5B9E\u73B0\u62F7\u8D1D\u5219\u9700\u4F7F\u7528for-range\u65B9\u5F0F\uFF0C\u5C06\u666E\u901A\u5207\u7247\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u90FD\u8D4B\u503C\u7ED9\u7A7A\u63A5\u53E3\u5207\u7247\u4E2D\u7684\u7A7A\u63A5\u53E3\u5143\u7D20\u5F62\u6210\u4E00\u4E2A\u4E2A\u7684\u7A7A\u63A5\u53E3\u5B9E\u4F8B\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>
 
 
<span class="token keyword">func</span> main <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    slice <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>
 
    <span class="token keyword">var</span> newSlice <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
    newSlice <span class="token operator">=</span> slice
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;slice = %v, newSlice = %v\\n&quot;</span><span class="token punctuation">,</span> slice<span class="token punctuation">,</span> newSlice<span class="token punctuation">)</span><span class="token comment">//slice = [1 2 3 4], newSlice = [1 2 3 4]</span>
 
    <span class="token keyword">var</span> any <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span>v <span class="token operator">:=</span> <span class="token keyword">range</span> slice<span class="token punctuation">{</span>
        any <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>any<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;any = %v, type = %T\\n&quot;</span><span class="token punctuation">,</span> any<span class="token punctuation">,</span> any<span class="token punctuation">)</span><span class="token comment">//any = [1 2 3 4], type = []interface {}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u7A7A\u63A5\u53E3\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u7A7A\u63A5\u53E3\u7C7B\u578B" aria-hidden="true">#</a> \u7A7A\u63A5\u53E3\u7C7B\u578B</h2><p>\u4F7F\u7528\u7A7A\u63A5\u53E3\u8868\u793A\u4EFB\u610F\u6570\u636E\u7C7B\u578B\uFF0C\u7C7B\u4F3C\u4E8EJava\u4E2D\u7684<code>Object</code>\u3002\u56E0\u6B64\u7A7A\u63A5\u53E3\u53EF\u4EE5\u5B58\u50A8\u4EFB\u610F\u7C7B\u578B\u7684\u503C\uFF0C\u7C7B\u4F3C\u4E8EC\u8BED\u8A00\u4E2D\u7684<code>void *</code>\u7C7B\u578B\u3002</p><p>\u7A7A\u63A5\u53E3\u7C7B\u578B\u8BA9Go\u8BED\u8A00\u50CF\u5176\u5B83\u52A8\u6001\u8BED\u8A00\u4E00\u6837\uFF0C\u5728\u6570\u636E\u7ED3\u6784\u4E2D\u5B58\u50A8\u4EFB\u610F\u7C7B\u578B\u7684\u6570\u636E\u3002</p><p>\u5B9A\u4E49</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">type</span> InterfaceName <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">var</span> i <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">fn</span><span class="token punctuation">(</span>data <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u7A7A\u63A5\u53E3\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u7A7A\u63A5\u53E3\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> \u7A7A\u63A5\u53E3\u6570\u636E\u7C7B\u578B</h2><p>\u53EF\u5B9A\u4E49\u7A7A\u63A5\u53E3\u7C7B\u578B\u7684<code>array</code>\u3001<code>slice</code>\u3001<code>map</code>\u3001<code>struct</code>\u7B49\uFF0C\u7528\u6765\u5B58\u653E\u4EFB\u610F\u7C7B\u578B\u7684\u5BF9\u8C61\uFF0C\u56E0\u4E3A\u4EFB\u4F55\u7C7B\u578B\u90FD\u5B9E\u73B0\u4E86\u7A7A\u63A5\u53E3\u3002</p><p>\u4F8B\u5982\uFF1A\u521B\u5EFA\u7A7A\u63A5\u53E3\u7C7B\u578B\u7684\u5207\u7247</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>
 
 
<span class="token keyword">func</span> main <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    any <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
    any<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
    any<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;admin&quot;</span>
    any<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
 
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span>v <span class="token operator">:=</span> <span class="token keyword">range</span> any<span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;type = %T, value = %v\\n&quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">type</span> <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">,</span> value <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">type</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token punctuation">,</span> value <span class="token operator">=</span> admin
<span class="token keyword">type</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> value <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">type</span> <span class="token operator">=</span> <span class="token punctuation">,</span> value <span class="token operator">=</span>
</code></pre></div><h2 id="\u8F6C\u5316" tabindex="-1"><a class="header-anchor" href="#\u8F6C\u5316" aria-hidden="true">#</a> \u8F6C\u5316</h2><p>\u4E3A\u4E86\u5C06\u4E00\u4E2A\u63A5\u53E3\u53D8\u91CF\u8F6C\u6362\u4E3A\u4E00\u4E2A\u663E\u5F0F\u7684\u7C7B\u578B\uFF0CGo\u63D0\u4F9B\u4E86<code>.(TYPE)</code></p><p>\u4F7F\u7528\u7A7A\u63A5\u53E3\u4E0E\u8F6C\u5316\u5B9E\u73B0\u65AD\u8A00</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">assign</span><span class="token punctuation">(</span>arg <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;content = %s&quot;</span><span class="token punctuation">,</span> arg<span class="token punctuation">)</span>
	<span class="token keyword">switch</span> i <span class="token operator">:=</span> arg<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u5E26\u521D\u59CB\u5316\u8BED\u53E5</span>
	<span class="token keyword">case</span> <span class="token boolean">nil</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot; arg \u7684\u7C7B\u578B :%T\\r\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
	<span class="token keyword">case</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;arg \u662F int \u578B&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">case</span> <span class="token builtin">float64</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;arg \u662F float64 \u578B&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">case</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">float64</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;arg \u662F func(int) \u578B&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">case</span> <span class="token builtin">bool</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;arg \u662F bool \u6216 string \u578B&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">default</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u672A\u77E5\u578B&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> main <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">assign</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,25),c=[o];function e(u,l){return s(),a("div",null,c)}var i=n(p,[["render",e],["__file","1-\u63A5\u53E3.html.vue"]]);export{i as default};
