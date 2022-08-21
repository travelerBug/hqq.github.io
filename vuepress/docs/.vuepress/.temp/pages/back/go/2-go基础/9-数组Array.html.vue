<template><div><h1 id="_1-数组array" tabindex="-1"><a class="header-anchor" href="#_1-数组array" aria-hidden="true">#</a> 1. 数组Array</h1>
<p>Golang Array和以往认知的数组有很大不同。</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    1. 数组：是同一种数据类型的固定长度的序列。
    2. 数组定义：var a [len]int，比如：var a [5]int，数组长度必须是常量，且是类型的组成部分。一旦定义，长度不能变。
    3. 长度是数组类型的一部分，因此，var a[5] int和var a[10]int是不同的类型。
    4. 数组可以通过下标进行访问，下标是从0开始，最后一个元素下标是：len-1
    for i := 0; i &lt; len(a); i++ {
    }
    for index, v := range a {
    }
    5. 访问越界，如果下标在数组合法范围之外，则触发访问越界，会panic
    6. 数组是值类型，赋值和传参会复制整个数组，而不是指针。因此改变副本的值，不会改变本身的值。
    7.支持 "=="、"!=" 操作符，因为内存总是被初始化过的。
    8.指针数组 [n]*T，数组指针 *[n]T。
</code></pre></div><h3 id="_1-1-1-数组初始化" tabindex="-1"><a class="header-anchor" href="#_1-1-1-数组初始化" aria-hidden="true">#</a> 1.1.1. 数组初始化：</h3>
<h4 id="一维数组" tabindex="-1"><a class="header-anchor" href="#一维数组" aria-hidden="true">#</a> 一维数组：</h4>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    全局：
    var arr0 [5]int = [5]int{1, 2, 3}
    var arr1 = [5]int{1, 2, 3, 4, 5}
    var arr2 = [...]int{1, 2, 3, 4, 5, 6}
    var str = [5]string{3: "hello world", 4: "tom"}
    局部：
    a := [3]int{1, 2}           // 未初始化元素值为 0。
    b := [...]int{1, 2, 3, 4}   // 通过初始化值确定数组长度。
    c := [5]int{2: 100, 4: 200} // 使用索引号初始化元素。
    d := [...]struct {
        name string
        age  uint8
    }{
        {"user1", 10}, // 可省略元素类型。
        {"user2", 20}, // 别忘了最后一行的逗号。
    }
</code></pre></div><p>代码：</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> arr0 <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">:</span> <span class="token string">"hello world"</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">:</span> <span class="token string">"tom"</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span>           <span class="token comment">// 未初始化元素值为 0。</span>
    b <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>   <span class="token comment">// 通过初始化值确定数组长度。</span>
    c <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">}</span> <span class="token comment">// 使用引号初始化元素。</span>
    d <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token keyword">struct</span> <span class="token punctuation">{</span>
        name <span class="token builtin">string</span>
        age  <span class="token builtin">uint8</span>
    <span class="token punctuation">}</span><span class="token punctuation">{</span>
        <span class="token punctuation">{</span><span class="token string">"user1"</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 可省略元素类型。</span>
        <span class="token punctuation">{</span><span class="token string">"user2"</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 别忘了最后一行的逗号。</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>arr0<span class="token punctuation">,</span> arr1<span class="token punctuation">,</span> arr2<span class="token punctuation">,</span> str<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>输出结果:</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>[1 2 3 0 0] [1 2 3 4 5] [1 2 3 4 5 6] [   hello world tom]
[1 2 0] [1 2 3 4] [0 0 100 0 200] [{user1 10} {user2 20}]
</code></pre></div><h4 id="多维数组" tabindex="-1"><a class="header-anchor" href="#多维数组" aria-hidden="true">#</a> 多维数组</h4>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    全局
    var arr0 [5][3]int
    var arr1 [2][3]int = [...][3]int{{1, 2, 3}, {7, 8, 9}}
    局部：
    a := [2][3]int{{1, 2, 3}, {4, 5, 6}}
    b := [...][2]int{{1, 1}, {2, 2}, {3, 3}} // 第 2 纬度不能用 "..."。
</code></pre></div><p>代码：</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> arr0 <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span>
<span class="token keyword">var</span> arr1 <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
    b <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token comment">// 第 2 纬度不能用 "..."。</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>arr0<span class="token punctuation">,</span> arr1<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>输出结果：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    [[0 0 0] [0 0 0] [0 0 0] [0 0 0] [0 0 0]] [[1 2 3] [7 8 9]]
    [[1 2 3] [4 5 6]] [[1 1] [2 2] [3 3]]
</code></pre></div><p>值拷贝行为会造成性能问题，通常会建议使用 slice，或数组指针。</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span>x <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"x: %p\n"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>x<span class="token punctuation">)</span>
    x<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1000</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"a: %p\n"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>a<span class="token punctuation">)</span>

    <span class="token function">test</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>输出结果:</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    a: 0xc42007c010
    x: 0xc42007c030
    [0 0]
</code></pre></div><p>内置函数 len 和 cap 都返回数组长度 (元素数量)。</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span> 
<span class="token punctuation">}</span>
</code></pre></div><p>输出结果：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>2 2
</code></pre></div><h4 id="多维数组遍历" tabindex="-1"><a class="header-anchor" href="#多维数组遍历" aria-hidden="true">#</a> 多维数组遍历：</h4>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">var</span> f <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">}</span><span class="token punctuation">}</span>

    <span class="token keyword">for</span> k1<span class="token punctuation">,</span> v1 <span class="token operator">:=</span> <span class="token keyword">range</span> f <span class="token punctuation">{</span>
        <span class="token keyword">for</span> k2<span class="token punctuation">,</span> v2 <span class="token operator">:=</span> <span class="token keyword">range</span> v1 <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"(%d,%d)=%d "</span><span class="token punctuation">,</span> k1<span class="token punctuation">,</span> k2<span class="token punctuation">,</span> v2<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>输出结果：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    (0,0)=1 (0,1)=2 (0,2)=3 
    (1,0)=7 (1,1)=8 (1,2)=9
</code></pre></div><h3 id="_1-1-2-数组拷贝和传参" tabindex="-1"><a class="header-anchor" href="#_1-1-2-数组拷贝和传参" aria-hidden="true">#</a> 1.1.2. 数组拷贝和传参</h3>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">printArr</span><span class="token punctuation">(</span>arr <span class="token operator">*</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">10</span>
    <span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> arr <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> arr1 <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span>
    <span class="token function">printArr</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>arr1<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span>
    arr2 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">}</span>
    <span class="token function">printArr</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>arr2<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_1-1-3-数组练习" tabindex="-1"><a class="header-anchor" href="#_1-1-3-数组练习" aria-hidden="true">#</a> 1.1.3. 数组练习</h3>
<h4 id="求数组所有元素之和" tabindex="-1"><a class="header-anchor" href="#求数组所有元素之和" aria-hidden="true">#</a> 求数组所有元素之和</h4>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
    <span class="token string">"math/rand"</span>
    <span class="token string">"time"</span>
<span class="token punctuation">)</span>

<span class="token comment">// 求元素和</span>
<span class="token keyword">func</span> <span class="token function">sumArr</span><span class="token punctuation">(</span>a <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> sum <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        sum <span class="token operator">+=</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> sum
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 若想做一个真正的随机数，要种子</span>
    <span class="token comment">// seed()种子默认是1</span>
    <span class="token comment">//rand.Seed(1)</span>
    rand<span class="token punctuation">.</span><span class="token function">Seed</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Unix</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">var</span> b <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token builtin">int</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token comment">// 产生一个0到1000随机数</span>
        b<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    sum <span class="token operator">:=</span> <span class="token function">sumArr</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"sum=%d\n"</span><span class="token punctuation">,</span> sum<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="找出数组中和为给定值的两个元素的下标-例如数组-1-3-5-8-7-找出两个元素之和等于8的下标分别是-0-4-和-1-2" tabindex="-1"><a class="header-anchor" href="#找出数组中和为给定值的两个元素的下标-例如数组-1-3-5-8-7-找出两个元素之和等于8的下标分别是-0-4-和-1-2" aria-hidden="true">#</a> 找出数组中和为给定值的两个元素的下标，例如数组[1,3,5,8,7]，找出两个元素之和等于8的下标分别是（0，4）和（1，2）</h4>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token comment">//    找出数组中和为给定值的两个元素的下标，例如数组[1,3,5,8,7]，</span>
<span class="token comment">// 找出两个元素之和等于8的下标分别是（0，4）和（1，2）</span>

<span class="token comment">// 求元素和，是给定的值</span>
<span class="token keyword">func</span> <span class="token function">myTest</span><span class="token punctuation">(</span>a <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> target <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 遍历数组</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        other <span class="token operator">:=</span> target <span class="token operator">-</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token comment">// 继续遍历</span>
        <span class="token keyword">for</span> j <span class="token operator">:=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> a<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> other <span class="token punctuation">{</span>
                fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"(%d,%d)\n"</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    b <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">}</span>
    <span class="token function">myTest</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div></div></template>
