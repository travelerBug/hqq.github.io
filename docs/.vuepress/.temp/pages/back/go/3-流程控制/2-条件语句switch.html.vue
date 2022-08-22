<template><div><h1 id="_1-条件语句switch" tabindex="-1"><a class="header-anchor" href="#_1-条件语句switch" aria-hidden="true">#</a> 1. 条件语句switch</h1>
<h3 id="_1-1-1-switch-语句" tabindex="-1"><a class="header-anchor" href="#_1-1-1-switch-语句" aria-hidden="true">#</a> 1.1.1. switch 语句</h3>
<p>switch 语句用于基于不同条件执行不同动作，每一个 case 分支都是唯一的，从上直下逐一测试，直到匹配为止。 Golang switch 分支表达式可以是任意类型，不限于常量。可省略 break，默认自动终止。</p>
<h4 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h4>
<p>Go 编程语言中 switch 语句的语法如下：</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">switch</span> var1 <span class="token punctuation">{</span>
    <span class="token keyword">case</span> val1<span class="token punctuation">:</span>
        <span class="token operator">...</span>
    <span class="token keyword">case</span> val2<span class="token punctuation">:</span>
        <span class="token operator">...</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
        <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre></div><p>变量 var1 可以是任何类型，而 val1 和 val2 则可以是同类型的任意值。类型不被局限于常量或整数，但必须是相同的类型；或者最终结果为相同类型的表达式。 您可以同时测试多个可能符合条件的值，使用逗号分割它们，例如：case val1, val2, val3。</p>
<h4 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例:</h4>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">/* 定义局部变量 */</span>
   <span class="token keyword">var</span> grade <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">"B"</span>
   <span class="token keyword">var</span> marks <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">90</span>

   <span class="token keyword">switch</span> marks <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token number">90</span><span class="token punctuation">:</span> grade <span class="token operator">=</span> <span class="token string">"A"</span>
      <span class="token keyword">case</span> <span class="token number">80</span><span class="token punctuation">:</span> grade <span class="token operator">=</span> <span class="token string">"B"</span>
      <span class="token keyword">case</span> <span class="token number">50</span><span class="token punctuation">,</span><span class="token number">60</span><span class="token punctuation">,</span><span class="token number">70</span> <span class="token punctuation">:</span> grade <span class="token operator">=</span> <span class="token string">"C"</span>
      <span class="token keyword">default</span><span class="token punctuation">:</span> grade <span class="token operator">=</span> <span class="token string">"D"</span>  
   <span class="token punctuation">}</span>

   <span class="token keyword">switch</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> grade <span class="token operator">==</span> <span class="token string">"A"</span> <span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"优秀!\n"</span> <span class="token punctuation">)</span>     
      <span class="token keyword">case</span> grade <span class="token operator">==</span> <span class="token string">"B"</span><span class="token punctuation">,</span> grade <span class="token operator">==</span> <span class="token string">"C"</span> <span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"良好\n"</span> <span class="token punctuation">)</span>      
      <span class="token keyword">case</span> grade <span class="token operator">==</span> <span class="token string">"D"</span> <span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"及格\n"</span> <span class="token punctuation">)</span>      
      <span class="token keyword">case</span> grade <span class="token operator">==</span> <span class="token string">"F"</span><span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"不及格\n"</span> <span class="token punctuation">)</span>
      <span class="token keyword">default</span><span class="token punctuation">:</span>
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"差\n"</span> <span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
   fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"你的等级是 %s\n"</span><span class="token punctuation">,</span> grade <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>以上代码执行结果为：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    优秀!
    你的等级是 A
</code></pre></div><h3 id="_1-1-2-type-switch" tabindex="-1"><a class="header-anchor" href="#_1-1-2-type-switch" aria-hidden="true">#</a> 1.1.2. Type Switch</h3>
<p>switch 语句还可以被用于 type-switch 来判断某个 interface 变量中实际存储的变量类型。</p>
<h4 id="type-switch-语法格式如下" tabindex="-1"><a class="header-anchor" href="#type-switch-语法格式如下" aria-hidden="true">#</a> Type Switch 语法格式如下：</h4>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>switch x.(type){
    case type:
       statement(s)      
    case type:
       statement(s)
    /* 你可以定义任意个数的case */
    default: /* 可选 */
       statement(s)
}
</code></pre></div><h4 id="实例-1" tabindex="-1"><a class="header-anchor" href="#实例-1" aria-hidden="true">#</a> 实例：</h4>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> x <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">//写法一：</span>
    <span class="token keyword">switch</span> i <span class="token operator">:=</span> x<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 带初始化语句</span>
    <span class="token keyword">case</span> <span class="token boolean">nil</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">" x 的类型 :%T\r\n"</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"x 是 int 型"</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token builtin">float64</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"x 是 float64 型"</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">float64</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"x 是 func(int) 型"</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token builtin">bool</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"x 是 bool 或 string 型"</span><span class="token punctuation">)</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"未知型"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//写法二</span>
    <span class="token keyword">var</span> j <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">switch</span> j <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"1"</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"2"</span><span class="token punctuation">)</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"def"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//写法三</span>
    <span class="token keyword">var</span> k <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">switch</span> k <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"fallthrough"</span><span class="token punctuation">)</span>
        <span class="token keyword">fallthrough</span>
        <span class="token comment">/*
            Go的switch非常灵活，表达式不必是常量或整数，执行的过程从上至下，直到找到匹配项；
            而如果switch没有表达式，它会匹配true。
            Go里面switch默认相当于每个case最后带有break，
            匹配成功后不会自动向下执行其他case，而是跳出整个switch,
            但是可以使用fallthrough强制执行后面的case代码。
        */</span>
    <span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"1"</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"2"</span><span class="token punctuation">)</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"def"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//写法三</span>
    <span class="token keyword">var</span> m <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">switch</span> m <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"1"</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"2"</span><span class="token punctuation">)</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"def"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//写法四</span>
    <span class="token keyword">var</span> n <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">switch</span> <span class="token punctuation">{</span> <span class="token comment">//省略条件表达式，可当 if...else if...else</span>
    <span class="token keyword">case</span> n <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> n <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"i > 0 and i &lt; 10"</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> n <span class="token operator">></span> <span class="token number">10</span> <span class="token operator">&amp;&amp;</span> n <span class="token operator">&lt;</span> <span class="token number">20</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"i > 10 and i &lt; 20"</span><span class="token punctuation">)</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"def"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>以上代码执行结果为：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    x 的类型 :&lt;nil>
    fallthrough
    1
    1
    def
</code></pre></div></div></template>
