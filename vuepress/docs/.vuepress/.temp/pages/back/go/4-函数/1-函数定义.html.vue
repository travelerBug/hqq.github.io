<template><div><h1 id="_1-函数定义" tabindex="-1"><a class="header-anchor" href="#_1-函数定义" aria-hidden="true">#</a> 1. 函数定义</h1>
<h3 id="_1-1-1-golang函数特点" tabindex="-1"><a class="header-anchor" href="#_1-1-1-golang函数特点" aria-hidden="true">#</a> 1.1.1. golang函数特点：</h3>
<div class="language-markdown ext-md"><pre v-pre class="language-markdown"><code>    • 无需声明原型。
    • 支持不定 变参。
    • 支持多返回值。
    • 支持命名返回参数。 
    • 支持匿名函数和闭包。
    • 函数也是一种类型，一个函数可以赋值给变量。

<span class="token code keyword">    • 不支持 嵌套 (nested) 一个包不能有两个名字一样的函数。
    • 不支持 重载 (overload) 
    • 不支持 默认参数 (default parameter)。</span>
</code></pre></div><h3 id="_1-1-2-函数声明" tabindex="-1"><a class="header-anchor" href="#_1-1-2-函数声明" aria-hidden="true">#</a> 1.1.2. 函数声明：</h3>
<p>函数声明包含一个函数名，参数列表， 返回值列表和函数体。如果函数没有返回值，则返回列表可以省略。函数从第一条语句开始执行，直到执行return语句或者执行函数的最后一条语句。</p>
<p>函数可以没有参数或接受多个参数。</p>
<p>注意类型在变量名之后 。</p>
<p>当两个或多个连续的函数命名参数是同一类型，则除了最后一个类型之外，其他都可以省略。</p>
<p>函数可以返回任意数量的返回值。</p>
<p>使用关键字 func 定义函数，左大括号依旧不能另起一行。</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">,</span> s <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 类型相同的相邻参数，参数类型可合并。 多返回值必须用括号。</span>
    n <span class="token operator">:=</span> x <span class="token operator">+</span> y          
    <span class="token keyword">return</span> n<span class="token punctuation">,</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> n<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>函数是第一类对象，可作为参数传递。建议将复杂签名定义为函数类型，以便于阅读。</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span>fn <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 定义函数类型。</span>
<span class="token keyword">type</span> FormatFunc <span class="token keyword">func</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">string</span> 

<span class="token keyword">func</span> <span class="token function">format</span><span class="token punctuation">(</span>fn FormatFunc<span class="token punctuation">,</span> s <span class="token builtin">string</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    s1 <span class="token operator">:=</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 直接将匿名函数当参数。</span>

    s2 <span class="token operator">:=</span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">"%d, %d"</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>

    <span class="token function">println</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>输出结果：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    100 10, 20
</code></pre></div><p>有返回值的函数，必须有明确的终止语句，否则会引发编译错误。</p>
<p>你可能会偶尔遇到没有函数体的函数声明，这表示该函数不是以Go实现的。这样的声明定义了函数标识符。</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    package math

    func Sin(x float64) float //implemented in assembly language
</code></pre></div></div></template>
