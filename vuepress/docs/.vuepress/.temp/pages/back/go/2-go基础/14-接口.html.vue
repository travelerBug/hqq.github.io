<template><div><p><a href="https://so.csdn.net/so/search?q=Go%E8%AF%AD%E8%A8%80&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">Go语言</a>提供<code v-pre>interface{}</code>表示空接口类型</p>
<ul>
<li>空接口可用于保存任何数据</li>
<li>空接口作为有用的参数可使用任意类型</li>
<li>使用空接口作为参数的方法可接收任何类型</li>
</ul>
<h3 id="空接口" tabindex="-1"><a class="header-anchor" href="#空接口" aria-hidden="true">#</a> 空接口</h3>
<p>空接口是一种接口，因此是一种指针类型的数据类型，虽然并不严谨，但它确实保存了两个指针，一个是对象的类型iTable，另一个是对象的值。因此任意类型的对象都能赋值给空接口实例。</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>


<span class="token keyword">func</span> main <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> any <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	any <span class="token operator">=</span> <span class="token number">1</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"any = %v, type = %T\n"</span><span class="token punctuation">,</span> any<span class="token punctuation">,</span> any<span class="token punctuation">)</span><span class="token comment">//any = 1, type = int</span>
	any <span class="token operator">=</span> <span class="token string">"hello"</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"any = %v, type = %T\n"</span><span class="token punctuation">,</span> any<span class="token punctuation">,</span> any<span class="token punctuation">)</span><span class="token comment">//any = hello, type = string</span>
    <span class="token punctuation">}</span>
</code></pre></div><blockquote>
<p>由于空接口拥有两个指针，内存布局上两个指针会占用两个机器字长。</p>
</blockquote>
<p><strong>为什么将切片中的数据拷贝到空接口切片中时会报错？</strong></p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>
 
 
<span class="token keyword">func</span> main <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    slice <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>
 
    <span class="token keyword">var</span> newSlice <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
    newSlice <span class="token operator">=</span> slice
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"slice = %v, newSlice = %v\n"</span><span class="token punctuation">,</span> slice<span class="token punctuation">,</span> newSlice<span class="token punctuation">)</span><span class="token comment">//slice = [1 2 3 4], newSlice = [1 2 3 4]</span>
 
    <span class="token keyword">var</span> any <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    any <span class="token operator">=</span> slice<span class="token comment">//cannot use slice (type []int) as type []interface {} in assignment</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote>
<p>因为每个空接口的内存布局都会占用两个机器字长的内容，对于长度为N的空接口切片而言，它的每个元素都是以2机器字长为单位的连续空间，因此会总共会占用2N个机器字长的空间。然后普通的切片，比如[]int它的每个元素都是int类型的，由于int类型的内存布局和空接口不同。另外这些对象的内存布局在编译期就已经确定好了，所以不能直接将不同内存布局的数据结构进行拷贝。</p>
</blockquote>
<p>若想要实现拷贝则需使用for-range方式，将普通切片中的每个元素都赋值给空接口切片中的空接口元素形成一个个的空接口实例。</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>
 
 
<span class="token keyword">func</span> main <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    slice <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>
 
    <span class="token keyword">var</span> newSlice <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
    newSlice <span class="token operator">=</span> slice
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"slice = %v, newSlice = %v\n"</span><span class="token punctuation">,</span> slice<span class="token punctuation">,</span> newSlice<span class="token punctuation">)</span><span class="token comment">//slice = [1 2 3 4], newSlice = [1 2 3 4]</span>
 
    <span class="token keyword">var</span> any <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span>v <span class="token operator">:=</span> <span class="token keyword">range</span> slice<span class="token punctuation">{</span>
        any <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>any<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"any = %v, type = %T\n"</span><span class="token punctuation">,</span> any<span class="token punctuation">,</span> any<span class="token punctuation">)</span><span class="token comment">//any = [1 2 3 4], type = []interface {}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="空接口类型" tabindex="-1"><a class="header-anchor" href="#空接口类型" aria-hidden="true">#</a> 空接口类型</h2>
<p>使用空接口表示任意数据类型，类似于Java中的<code v-pre>Object</code>。因此空接口可以存储任意类型的值，类似于C语言中的<code v-pre>void *</code>类型。</p>
<p>空接口类型让Go语言像其它动态语言一样，在数据结构中存储任意类型的数据。</p>
<p>定义</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> InterfaceName <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">var</span> i <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">fn</span><span class="token punctuation">(</span>data <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 
<span class="token punctuation">}</span>
</code></pre></div><h2 id="空接口数据类型" tabindex="-1"><a class="header-anchor" href="#空接口数据类型" aria-hidden="true">#</a> 空接口数据类型</h2>
<p>可定义空接口类型的<code v-pre>array</code>、<code v-pre>slice</code>、<code v-pre>map</code>、<code v-pre>struct</code>等，用来存放任意类型的对象，因为任何类型都实现了空接口。</p>
<p>例如：创建空接口类型的切片</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>
 
 
<span class="token keyword">func</span> main <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    any <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
    any<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
    any<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"admin"</span>
    any<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
 
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span>v <span class="token operator">:=</span> <span class="token keyword">range</span> any<span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"type = %T, value = %v\n"</span><span class="token punctuation">,</span> v<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">type</span> <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">,</span> value <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">type</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token punctuation">,</span> value <span class="token operator">=</span> admin
<span class="token keyword">type</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> value <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">type</span> <span class="token operator">=</span> <span class="token punctuation">,</span> value <span class="token operator">=</span>
</code></pre></div><h2 id="转化" tabindex="-1"><a class="header-anchor" href="#转化" aria-hidden="true">#</a> 转化</h2>
<p>为了将一个接口变量转换为一个显式的类型，Go提供了<code v-pre>.(TYPE)</code></p>
<p>使用空接口与转化实现断言</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">assign</span><span class="token punctuation">(</span>arg <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"content = %s"</span><span class="token punctuation">,</span> arg<span class="token punctuation">)</span>
	<span class="token keyword">switch</span> i <span class="token operator">:=</span> arg<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 带初始化语句</span>
	<span class="token keyword">case</span> <span class="token boolean">nil</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">" arg 的类型 :%T\r\n"</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
	<span class="token keyword">case</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"arg 是 int 型"</span><span class="token punctuation">)</span>
	<span class="token keyword">case</span> <span class="token builtin">float64</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"arg 是 float64 型"</span><span class="token punctuation">)</span>
	<span class="token keyword">case</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">float64</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"arg 是 func(int) 型"</span><span class="token punctuation">)</span>
	<span class="token keyword">case</span> <span class="token builtin">bool</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"arg 是 bool 或 string 型"</span><span class="token punctuation">)</span>
	<span class="token keyword">default</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"未知型"</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> main <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">assign</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div></div></template>
