<template><div><h1 id="条件语句select" tabindex="-1"><a class="header-anchor" href="#条件语句select" aria-hidden="true">#</a> 条件语句select</h1>
<h3 id="_1-1-1-select-语句" tabindex="-1"><a class="header-anchor" href="#_1-1-1-select-语句" aria-hidden="true">#</a> 1.1.1. select 语句</h3>
<p>select 语句类似于 switch 语句，但是select会随机执行一个可运行的case。如果没有case可运行，它将阻塞，直到有case可运行。</p>
<p>select 是Go中的一个控制结构，类似于用于通信的switch语句。每个case必须是一个通信操作，要么是发送要么是接收。 select 随机执行一个可运行的case。如果没有case可运行，它将阻塞，直到有case可运行。一个默认的子句应该总是可运行的。</p>
<h4 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h4>
<p>Go 编程语言中 select 语句的语法如下：</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">select</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> communication clause  <span class="token punctuation">:</span>
       <span class="token function">statement</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>      
    <span class="token keyword">case</span> communication clause  <span class="token punctuation">:</span>
       <span class="token function">statement</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/* 你可以定义任意数量的 case */</span>
    <span class="token keyword">default</span> <span class="token punctuation">:</span> <span class="token comment">/* 可选 */</span>
       <span class="token function">statement</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>以下描述了 select 语句的语法：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    每个case都必须是一个通信
    所有channel表达式都会被求值
    所有被发送的表达式都会被求值
    如果任意某个通信可以进行，它就执行；其他被忽略。
    如果有多个case都可以运行，Select会随机公平地选出一个执行。其他不会执行。
    否则：
    如果有default子句，则执行该语句。
    如果没有default字句，select将阻塞，直到某个通信可以运行；Go不会重新对channel或值进行求值。
</code></pre></div><h4 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例：</h4>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> c1<span class="token punctuation">,</span> c2<span class="token punctuation">,</span> c3 <span class="token keyword">chan</span> <span class="token builtin">int</span>
   <span class="token keyword">var</span> i1<span class="token punctuation">,</span> i2 <span class="token builtin">int</span>
   <span class="token keyword">select</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> i1 <span class="token operator">=</span> <span class="token operator">&lt;-</span>c1<span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"received "</span><span class="token punctuation">,</span> i1<span class="token punctuation">,</span> <span class="token string">" from c1\n"</span><span class="token punctuation">)</span>
      <span class="token keyword">case</span> c2 <span class="token operator">&lt;-</span> i2<span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"sent "</span><span class="token punctuation">,</span> i2<span class="token punctuation">,</span> <span class="token string">" to c2\n"</span><span class="token punctuation">)</span>
      <span class="token keyword">case</span> i3<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token punctuation">(</span><span class="token operator">&lt;-</span>c3<span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment">// same as: i3, ok := &lt;-c3</span>
         <span class="token keyword">if</span> ok <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"received "</span><span class="token punctuation">,</span> i3<span class="token punctuation">,</span> <span class="token string">" from c3\n"</span><span class="token punctuation">)</span>
         <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"c3 is closed\n"</span><span class="token punctuation">)</span>
         <span class="token punctuation">}</span>
      <span class="token keyword">default</span><span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"no communication\n"</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>    
<span class="token punctuation">}</span>
</code></pre></div><p>以上代码执行结果为：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    no communication
</code></pre></div></div></template>
