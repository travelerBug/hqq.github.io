import{_ as n,o as e,c as a,e as s}from"./app.cef7465c.js";const c={},o=s(`<p>\u5185\u7F6E\u51FD\u6570 <code>new</code> \u5206\u914D\u5185\u5B58\u3002\u8BE5\u51FD\u6570\u53EA\u63A5\u53D7\u4E00\u4E2A\u53C2\u6570\uFF0C\u8BE5\u53C2\u6570\u662F\u4E00\u4E2A\u4EFB\u610F\u7C7B\u578B(\u5305\u62EC\u81EA\u5B9A\u4E49\u7C7B\u578B)\uFF0C\u800C\u4E0D\u662F\u503C\uFF0C\u8FD4\u56DE\u6307\u5411\u8BE5\u7C7B\u578B\u65B0\u5206\u914D\u96F6\u503C\u7684\u6307\u9488\u3002</p><div class="language-GO ext-GO"><pre class="language-GO"><code>
// The new built-in function allocates memory. The first argument is a type,
// not a value, and the value returned is a pointer to a newly
// allocated zero value of that type.
func new(Type) *Type
</code></pre></div><p>\u4F7F\u7528 <code>new</code> \u51FD\u6570\u9996\u5148\u4F1A\u5206\u914D\u5185\u5B58\uFF0C\u5E76\u8BBE\u7F6E\u7C7B\u578B\u96F6\u503C\uFF0C\u6700\u540E\u8FD4\u56DE\u6307\u5411\u8BE5\u7C7B\u578B\u65B0\u5206\u914D\u96F6\u503C\u7684\u6307\u9488\u3002</p><div class="language-go ext-go"><pre class="language-go"><code>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	num <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span>
	<span class="token comment">// \u6253\u5370\u51FA\u7C7B\u578B\u7684\u503C</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">*</span>num<span class="token punctuation">)</span>  <span class="token comment">// 0</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_1-1-make-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_1-1-make-\u51FD\u6570" aria-hidden="true">#</a> 1.1 make \u51FD\u6570</h2><p>\u5185\u7F6E\u51FD\u6570 <code>make</code> \u53EA\u80FD\u5206\u914D\u548C\u521D\u59CB\u5316\u7C7B\u578B\u4E3A <code>slice</code> \u3001 <code>map</code> \u6216 <code>chan</code> \u7684\u5BF9\u8C61\u3002\u4E0E <code>new</code> \u4E00\u6837\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u7C7B\u578B\uFF0C\u800C\u4E0D\u662F\u503C\u3002\u4E0E <code>new</code> \u4E0D\u540C\uFF0C <code>make</code> \u7684\u8FD4\u56DE\u7C7B\u578B\u4E0E\u5176\u53C2\u6570\u7684\u7C7B\u578B\u76F8\u540C\uFF0C\u800C\u4E0D\u662F\u6307\u5411\u5B83\u7684\u6307\u9488\u3002\u7ED3\u679C\u53D6\u51B3\u4E8E\u7C7B\u578B\uFF1A</p><ul><li><code>slice</code>\uFF1Asize \u6307\u5B9A\u957F\u5EA6\u3002\u5207\u7247\u7684\u5BB9\u91CF\u7B49\u4E8E\u5176\u957F\u5EA6\u3002\u53EF\u63D0\u4F9B\u7B2C\u4E09\u4E2A\u53C2\u6570\u4EE5\u6307\u5B9A\u4E0D\u540C\u7684\u5BB9\u91CF\uFF1B\u5B83\u4E0D\u80FD\u5C0F\u4E8E\u957F\u5EA6\u3002</li><li><code>map</code>\uFF1A\u4E3A\u7A7A\u6620\u5C04\u5206\u914D\u8DB3\u591F\u7684\u7A7A\u95F4\u6765\u5BB9\u7EB3\u6307\u5B9A\u6570\u91CF\u7684\u5143\u7D20\u3002\u53EF\u4EE5\u7701\u7565\u5927\u5C0F\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u5206\u914D\u4E00\u4E2A\u5C0F\u7684\u8D77\u59CB\u5927\u5C0F\u3002</li><li><code>chan</code>\uFF1A\u4F7F\u7528\u6307\u5B9A\u7684\u7F13\u51B2\u533A\u5BB9\u91CF\u521D\u59CB\u5316\u901A\u9053\u7684\u7F13\u51B2\u533A\u3002\u5982\u679C\u4E3A\u96F6\uFF0C\u6216\u8005\u5FFD\u7565\u4E86\u5927\u5C0F\uFF0C\u5219\u901A\u9053\u662F\u65E0\u7F13\u51B2\u7684\u3002</li></ul><div class="language-GO ext-GO"><pre class="language-GO"><code>
func make(t Type, size ...IntegerType) Type
</code></pre></div><p>\u6CE8\u610F\uFF0C\u4F7F\u7528 make \u51FD\u6570\u5FC5\u987B\u521D\u59CB\u5316\u3002\u4F8B\u5982\uFF1A</p><div class="language-GO ext-GO"><pre class="language-GO"><code>
// slice
a := make([]int, 2, 10)

// map
b := make(map[string]int)

// chan
c := make(chan int, 10)
</code></pre></div><h2 id="_1-2-new-\u548C-make-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_1-2-new-\u548C-make-\u7684\u533A\u522B" aria-hidden="true">#</a> 1.2 new \u548C make \u7684\u533A\u522B</h2><p><code>new</code>\uFF1A\u4E3A\u6240\u6709\u7684\u7C7B\u578B\u5206\u914D\u5185\u5B58\uFF0C\u5E76\u521D\u59CB\u5316\u4E3A\u96F6\u503C\uFF0C\u8FD4\u56DE\u6307\u9488\u3002</p><p><code>make</code>\uFF1A\u53EA\u80FD\u4E3A <code>slice</code> \u3001 <code>map</code> \u3001 <code>chan</code> \u5206\u914D\u5185\u5B58\uFF0C\u5E76\u521D\u59CB\u5316\uFF0C\u8FD4\u56DE\u7684\u662F\u7C7B\u578B\u3002</p>`,13),t=[o];function p(d,l){return e(),a("div",null,t)}var u=n(c,[["render",p],["__file","15-new \u548C make.html.vue"]]);export{u as default};
