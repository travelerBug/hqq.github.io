<template><div><h1 id="_1-参数" tabindex="-1"><a class="header-anchor" href="#_1-参数" aria-hidden="true">#</a> 1. 参数</h1>
<h3 id="_1-1-1-函数参数" tabindex="-1"><a class="header-anchor" href="#_1-1-1-函数参数" aria-hidden="true">#</a> 1.1.1. 函数参数</h3>
<p>函数定义时指出，函数定义时有参数，该变量可称为函数的形参。形参就像定义在函数体内的局部变量。</p>
<p>但当调用函数，传递过来的变量就是函数的实参，函数可以通过两种方式来传递参数：</p>
<p>值传递：指在调用函数时将实际参数复制一份传递到函数中，这样在函数中如果对参数进行修改，将不会影响到实际参数。</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">swap</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
       <span class="token operator">...</span> <span class="token operator">...</span>
  <span class="token punctuation">}</span>
</code></pre></div><p>引用传递：是指在调用函数时将实际参数的地址传递到函数中，那么在函数中对参数所进行的修改，将影响到实际参数。</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token comment">/* 定义相互交换值的函数 */</span>
<span class="token keyword">func</span> <span class="token function">swap</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token operator">*</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> temp <span class="token builtin">int</span>

    temp <span class="token operator">=</span> <span class="token operator">*</span>x <span class="token comment">/* 保存 x 的值 */</span>
    <span class="token operator">*</span>x <span class="token operator">=</span> <span class="token operator">*</span>y   <span class="token comment">/* 将 y 值赋给 x */</span>
    <span class="token operator">*</span>y <span class="token operator">=</span> temp <span class="token comment">/* 将 temp 值赋给 y*/</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> a<span class="token punctuation">,</span> b <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span>
    <span class="token comment">/*
        调用 swap() 函数
        &amp;a 指向 a 指针，a 变量的地址
        &amp;b 指向 b 指针，b 变量的地址
    */</span>
    <span class="token function">swap</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>a<span class="token punctuation">,</span> <span class="token operator">&amp;</span>b<span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>输出结果：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    2 1
</code></pre></div><p>在默认情况下，Go 语言使用的是值传递，即在调用过程中不会影响到实际参数。</p>
<p>注意1：无论是值传递，还是引用传递，传递给函数的都是变量的副本，不过，值传递是值的拷贝。引用传递是地址的拷贝，一般来说，地址拷贝更为高效。而值拷贝取决于拷贝的对象大小，对象越大，则性能越低。</p>
<p>注意2：map、slice、chan、指针、interface默认以引用的方式传递。</p>
<p>不定参数传值 就是函数的参数不是固定的，后面的类型是固定的。（可变参数）</p>
<p>Golang 可变参数本质上就是 slice。只能有一个，且必须是最后一个。</p>
<p>在参数赋值时可以不用用一个一个的赋值，可以直接传递一个数组或者切片，特别注意的是在参数后加上“…”即可。</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code>  <span class="token keyword">func</span> <span class="token function">myfunc</span><span class="token punctuation">(</span>args <span class="token operator">...</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    <span class="token comment">//0个或多个参数</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">func</span> <span class="token function">add</span><span class="token punctuation">(</span>a <span class="token builtin">int</span><span class="token punctuation">,</span> args…<span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>    <span class="token comment">//1个或多个参数</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">func</span> <span class="token function">add</span><span class="token punctuation">(</span>a <span class="token builtin">int</span><span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">,</span> args…<span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>    <span class="token comment">//2个或多个参数</span>
  <span class="token punctuation">}</span>
</code></pre></div><p>注意：其中args是一个slice，我们可以通过arg[index]依次访问所有参数,通过len(arg)来判断传递参数的个数.</p>
<p>任意类型的不定参数： 就是函数的参数和每个参数的类型都不是固定的。</p>
<p>用interface{}传递任意类型数据是Go语言的惯例用法，而且interface{}是类型安全的。</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">myfunc</span><span class="token punctuation">(</span>args <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
</code></pre></div><p>代码：</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">,</span> n <span class="token operator">...</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> x <span class="token builtin">int</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> n <span class="token punctuation">{</span>
        x <span class="token operator">+=</span> i
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> x<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"sum: %d"</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>输出结果：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    sum: 6
</code></pre></div><p>使用 slice 对象做变参时，必须展开。<code v-pre>（slice...）</code></p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span>s <span class="token builtin">string</span><span class="token punctuation">,</span> n <span class="token operator">...</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> x <span class="token builtin">int</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> n <span class="token punctuation">{</span>
        x <span class="token operator">+=</span> i
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> x<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    s <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
    res <span class="token operator">:=</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"sum: %d"</span><span class="token punctuation">,</span> s<span class="token operator">...</span><span class="token punctuation">)</span>    <span class="token comment">// slice... 展开slice</span>
    <span class="token function">println</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div></div></template>
