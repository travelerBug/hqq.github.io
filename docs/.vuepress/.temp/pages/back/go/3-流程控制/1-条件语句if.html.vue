<template><div><h2 id="条件语句if" tabindex="-1"><a class="header-anchor" href="#条件语句if" aria-hidden="true">#</a> 条件语句if</h2>
<h3 id="_1-1-1-go-语言条件语句" tabindex="-1"><a class="header-anchor" href="#_1-1-1-go-语言条件语句" aria-hidden="true">#</a> 1.1.1. Go 语言条件语句：</h3>
<p>条件语句需要开发者通过指定一个或多个条件，并通过测试条件是否为 true 来决定是否执行指定语句，并在条件为 false 的情况在执行另外的语句。</p>
<p>Go 语言提供了以下几种条件判断语句：</p>
<h3 id="_1-1-2-if-语句-由一个布尔表达式后紧跟一个或多个语句组成。" tabindex="-1"><a class="header-anchor" href="#_1-1-2-if-语句-由一个布尔表达式后紧跟一个或多个语句组成。" aria-hidden="true">#</a> 1.1.2. if 语句  由一个布尔表达式后紧跟一个或多个语句组成。</h3>
<p>Go 编程语言中 if 语句的语法如下：</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code>    • 可省略条件表达式括号。
    • 持初始化语句，可定义代码块局部变量。 
    • 代码块左 括号必须在条件表达式尾部。

    <span class="token keyword">if</span> 布尔表达式 <span class="token punctuation">{</span>
    <span class="token comment">/* 在布尔表达式为 true 时执行 */</span>
    <span class="token punctuation">}</span>
</code></pre></div><p>if 在布尔表达式为 true 时，其后紧跟的语句块执行，如果为 false 则不执行。</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code> x <span class="token operator">:=</span> <span class="token number">0</span>

<span class="token comment">// if x > 10        // Error: missing condition in if statement</span>
<span class="token comment">// {</span>
<span class="token comment">// }</span>

<span class="token keyword">if</span> n <span class="token operator">:=</span> <span class="token string">"abc"</span><span class="token punctuation">;</span> x <span class="token operator">></span> <span class="token number">0</span> <span class="token punctuation">{</span>     <span class="token comment">// 初始化语句未必就是定义变量， 如 println("init") 也是可以的。</span>
    <span class="token function">println</span><span class="token punctuation">(</span>n<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> x <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>    <span class="token comment">// 注意 else if 和 else 左大括号位置。</span>
    <span class="token function">println</span><span class="token punctuation">(</span>n<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">println</span><span class="token punctuation">(</span>n<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
    <span class="token operator">*</span>不支持三元操作符<span class="token punctuation">(</span>三目运算符<span class="token punctuation">)</span> <span class="token string">"a > b ? a : b"</span>。
</code></pre></div><p>实例：</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">/* 定义局部变量 */</span>
   <span class="token keyword">var</span> a <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">10</span>
   <span class="token comment">/* 使用 if 语句判断布尔表达式 */</span>
   <span class="token keyword">if</span> a <span class="token operator">&lt;</span> <span class="token number">20</span> <span class="token punctuation">{</span>
       <span class="token comment">/* 如果条件为 true 则执行以下语句 */</span>
       fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"a 小于 20\n"</span> <span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"a 的值为 : %d\n"</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>以上代码执行结果为：</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code>    a 小于 <span class="token number">20</span>
    a 的值为 <span class="token punctuation">:</span> <span class="token number">10</span>
</code></pre></div><h3 id="_1-1-3-if-else-语句-if-语句-后可以使用可选的-else-语句-else-语句中的表达式在布尔表达式为-false-时执行。" tabindex="-1"><a class="header-anchor" href="#_1-1-3-if-else-语句-if-语句-后可以使用可选的-else-语句-else-语句中的表达式在布尔表达式为-false-时执行。" aria-hidden="true">#</a> 1.1.3. if...else 语句 if 语句 后可以使用可选的 else 语句, else 语句中的表达式在布尔表达式为 false 时执行。</h3>
<h4 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h4>
<p>Go 编程语言中 if...else 语句的语法如下：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>if 布尔表达式 {
   /* 在布尔表达式为 true 时执行 */
} else {
  /* 在布尔表达式为 false 时执行 */
}
</code></pre></div><p>if 在布尔表达式为 true 时，其后紧跟的语句块执行，如果为 false 则执行 else 语句块。</p>
<h4 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例:</h4>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">/* 局部变量定义 */</span>
   <span class="token keyword">var</span> a <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">100</span>
   <span class="token comment">/* 判断布尔表达式 */</span>
   <span class="token keyword">if</span> a <span class="token operator">&lt;</span> <span class="token number">20</span> <span class="token punctuation">{</span>
       <span class="token comment">/* 如果条件为 true 则执行以下语句 */</span>
       fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"a 小于 20\n"</span> <span class="token punctuation">)</span>
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
       <span class="token comment">/* 如果条件为 false 则执行以下语句 */</span>
       fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"a 不小于 20\n"</span> <span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"a 的值为 : %d\n"</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre></div><p>以上代码执行结果为：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    a 不小于 20
    a 的值为 : 100
</code></pre></div><h3 id="_1-1-4-if-嵌套语句-你可以在-if-或-else-if-语句中嵌入一个或多个-if-或-else-if-语句。" tabindex="-1"><a class="header-anchor" href="#_1-1-4-if-嵌套语句-你可以在-if-或-else-if-语句中嵌入一个或多个-if-或-else-if-语句。" aria-hidden="true">#</a> 1.1.4. if 嵌套语句 你可以在 if 或 else if 语句中嵌入一个或多个 if 或 else if 语句。</h3>
<h4 id="语法-1" tabindex="-1"><a class="header-anchor" href="#语法-1" aria-hidden="true">#</a> 语法</h4>
<p>Go 编程语言中 if...else 语句的语法如下：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>if 布尔表达式 1 {
   /* 在布尔表达式 1 为 true 时执行 */
   if 布尔表达式 2 {
      /* 在布尔表达式 2 为 true 时执行 */
   }
}
</code></pre></div><p>你可以以同样的方式在 if 语句中嵌套 else if...else 语句</p>
<h4 id="实例-1" tabindex="-1"><a class="header-anchor" href="#实例-1" aria-hidden="true">#</a> 实例</h4>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">/* 定义局部变量 */</span>
   <span class="token keyword">var</span> a <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">100</span>
   <span class="token keyword">var</span> b <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">200</span>
   <span class="token comment">/* 判断条件 */</span>
   <span class="token keyword">if</span> a <span class="token operator">==</span> <span class="token number">100</span> <span class="token punctuation">{</span>
       <span class="token comment">/* if 条件语句为 true 执行 */</span>
       <span class="token keyword">if</span> b <span class="token operator">==</span> <span class="token number">200</span> <span class="token punctuation">{</span>
          <span class="token comment">/* if 条件语句为 true 执行 */</span>
          fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"a 的值为 100 ， b 的值为 200\n"</span> <span class="token punctuation">)</span>
       <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"a 值为 : %d\n"</span><span class="token punctuation">,</span> a <span class="token punctuation">)</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"b 值为 : %d\n"</span><span class="token punctuation">,</span> b <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>以上代码执行结果为</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    a 的值为 100 ， b 的值为 200
    a 值为 : 100
    b 值为 : 200
</code></pre></div></div></template>
