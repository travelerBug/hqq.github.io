<template><div><h1 id="_1-匿名函数" tabindex="-1"><a class="header-anchor" href="#_1-匿名函数" aria-hidden="true">#</a> 1. 匿名函数</h1>
<h3 id="_1-1-1-匿名函数" tabindex="-1"><a class="header-anchor" href="#_1-1-1-匿名函数" aria-hidden="true">#</a> 1.1.1. 匿名函数</h3>
<p>匿名函数是指不需要定义函数名的一种函数实现方式。1958年LISP首先采用匿名函数。</p>
<p>在Go里面，函数可以像普通变量一样被传递或使用，Go语言支持随时在代码里定义匿名函数。</p>
<p>匿名函数由一个不带函数名的函数声明和函数体组成。匿名函数的优越性在于可以直接使用函数内的变量，不必申明。</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"math"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    getSqrt <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>a <span class="token builtin">float64</span><span class="token punctuation">)</span> <span class="token builtin">float64</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> math<span class="token punctuation">.</span><span class="token function">Sqrt</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">getSqrt</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>输出结果：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    2
</code></pre></div><p>上面先定义了一个名为getSqrt 的变量，初始化该变量时和之前的变量初始化有些不同，使用了func，func是定义函数的，可是这个函数和上面说的函数最大不同就是没有函数名，也就是匿名函数。这里将一个函数当做一个变量一样的操作。</p>
<p>Golang匿名函数可赋值给变量，做为结构字段，或者在 channel 里传送。</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// --- function variable ---</span>
    fn <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello, World!"</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
    <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// --- function collection ---</span>
    fns <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span>x <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">func</span><span class="token punctuation">(</span>x <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> x <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token keyword">func</span><span class="token punctuation">(</span>x <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> x <span class="token operator">+</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token function">println</span><span class="token punctuation">(</span>fns<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment">// --- function as field ---</span>
    d <span class="token operator">:=</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
        fn <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
    <span class="token punctuation">}</span><span class="token punctuation">{</span>
        fn<span class="token punctuation">:</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token string">"Hello, World!"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token function">println</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment">// --- channel of function ---</span>
    fc <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
    fc <span class="token operator">&lt;-</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token string">"Hello, World!"</span> <span class="token punctuation">}</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span>fc<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>输出结果：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    Hello, World!
    101
    Hello, World!
    Hello, World!
</code></pre></div></div></template>
