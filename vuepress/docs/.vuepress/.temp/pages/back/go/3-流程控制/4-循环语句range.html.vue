<template><div><h1 id="_1-循环语句range" tabindex="-1"><a class="header-anchor" href="#_1-循环语句range" aria-hidden="true">#</a> 1. 循环语句range</h1>
<p>Golang range类似迭代器操作，返回 (索引, 值) 或 (键, 值)。</p>
<p>for 循环的 range 格式可以对 slice、map、数组、字符串等进行迭代循环。格式如下：</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">for</span> key<span class="token punctuation">,</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> oldMap <span class="token punctuation">{</span>
    newMap<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value
<span class="token punctuation">}</span>
</code></pre></div><table>
<thead>
<tr>
<th style="text-align:left"></th>
<th>1st value</th>
<th>2nd value</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">string</td>
<td>index</td>
<td>s[index]</td>
<td>unicode, rune</td>
</tr>
<tr>
<td style="text-align:left">array/slice</td>
<td>index</td>
<td>s[index]</td>
<td></td>
</tr>
<tr>
<td style="text-align:left">map</td>
<td>key</td>
<td>m[key]</td>
<td></td>
</tr>
<tr>
<td style="text-align:left">channel</td>
<td>element</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<p>可忽略不想要的返回值，或 <code v-pre>&quot;_&quot;</code> 这个特殊变量。</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    s <span class="token operator">:=</span> <span class="token string">"abc"</span>
    <span class="token comment">// 忽略 2nd value，支持 string/array/slice/map。</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> s <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 忽略 index。</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> c <span class="token operator">:=</span> <span class="token keyword">range</span> s <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 忽略全部返回值，仅迭代。</span>
    <span class="token keyword">for</span> <span class="token keyword">range</span> s <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    m <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token string">"a"</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"b"</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">}</span>
    <span class="token comment">// 返回 (key, value)。</span>
    <span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> m <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>输出结果：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    97
    98
    99
    97
    98
    99
    a 1
    b 2
</code></pre></div><p><code v-pre>*</code>注意，range 会复制对象。</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span>

    <span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> a <span class="token punctuation">{</span> <span class="token comment">// index、value 都是从复制品中取出。</span>

        <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span> <span class="token comment">// 在修改前，我们先修改原数组。</span>
            a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">999</span><span class="token punctuation">,</span> <span class="token number">999</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 确认修改有效，输出 [0, 999, 999]。</span>
        <span class="token punctuation">}</span>

        a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> v <span class="token operator">+</span> <span class="token number">100</span> <span class="token comment">// 使用复制品中取出的 value 修改原数组。</span>

    <span class="token punctuation">}</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 输出 [100, 101, 102]。</span>
<span class="token punctuation">}</span>
</code></pre></div><p>输出结果：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    [0 999 999]
    [100 101 102]
</code></pre></div><p>建议改用引用类型，其底层数据不会被复制。</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    s <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>

    <span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> s <span class="token punctuation">{</span> <span class="token comment">// 复制 struct slice { pointer, len, cap }。</span>

        <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            s <span class="token operator">=</span> s<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>  <span class="token comment">// 对 slice 的修改，不会影响 range。</span>
            s<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span> <span class="token comment">// 对底层数据的修改。</span>
        <span class="token punctuation">}</span>

        <span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>输出结果:</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    0 1
    1 2
    2 100
    3 4
    4 5
</code></pre></div><p>另外两种引用类型 map、channel 是指针包装，而不像 slice 是 struct。</p>
<p>for 和 for range有什么区别?</p>
<p>主要是使用场景不同</p>
<p>for可以</p>
<p>遍历array和slice</p>
<p>遍历key为整型递增的map</p>
<p>遍历string</p>
<p>for range可以完成所有for可以做的事情，却能做到for不能做的，包括</p>
<p>遍历key为string类型的map并同时获取key和value</p>
<p>遍历channel</p>
</div></template>
