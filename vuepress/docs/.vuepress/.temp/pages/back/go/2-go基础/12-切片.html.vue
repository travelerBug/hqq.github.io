<template><div><h2 id="切片slice" tabindex="-1"><a class="header-anchor" href="#切片slice" aria-hidden="true">#</a> 切片Slice</h2>
<p>需要说明，slice 并不是数组或数组指针。它通过内部指针和相关属性引用数组片段，以实现变长方案。</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    1. 切片：切片是数组的一个引用，因此切片是引用类型。但自身是结构体，值拷贝传递。
    2. 切片的长度可以改变，因此，切片是一个可变的数组。
    3. 切片遍历方式和数组一样，可以用len()求长度。表示可用元素数量，读写操作不能超过该限制。 
    4. cap可以求出slice最大扩张容量，不能超出数组限制。0 &lt;= len(slice) &lt;= len(array)，其中array是slice引用的数组。
    5. 切片的定义：var 变量名 []类型，比如 var str []string  var arr []int。
    6. 如果 slice == nil，那么 len、cap 结果都等于 0。
</code></pre></div><h3 id="_1-1-1-创建切片的各种方式" tabindex="-1"><a class="header-anchor" href="#_1-1-1-创建切片的各种方式" aria-hidden="true">#</a> 1.1.1. 创建切片的各种方式</h3>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">//1.声明切片</span>
   <span class="token keyword">var</span> s1 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
   <span class="token keyword">if</span> s1 <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
      fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"是空"</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"不是空"</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
   <span class="token comment">// 2.:=</span>
   s2 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
   <span class="token comment">// 3.make()</span>
   <span class="token keyword">var</span> s3 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">,</span> s3<span class="token punctuation">)</span>
   <span class="token comment">// 4.初始化赋值</span>
   <span class="token keyword">var</span> s4 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s4<span class="token punctuation">)</span>
   s5 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s5<span class="token punctuation">)</span>
   <span class="token comment">// 5.从数组切片</span>
   arr <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
   <span class="token keyword">var</span> s6 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
   <span class="token comment">// 前包后不包</span>
   s6 <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">]</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s6<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_1-1-2-切片初始化" tabindex="-1"><a class="header-anchor" href="#_1-1-2-切片初始化" aria-hidden="true">#</a> 1.1.2. 切片初始化</h3>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>全局：
var arr = [...]int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
var slice0 []int = arr[start:end] 
var slice1 []int = arr[:end]        
var slice2 []int = arr[start:]        
var slice3 []int = arr[:] 
var slice4 = arr[:len(arr)-1]      //去掉切片的最后一个元素
局部：
arr2 := [...]int{9, 8, 7, 6, 5, 4, 3, 2, 1, 0}
slice5 := arr[start:end]
slice6 := arr[:end]        
slice7 := arr[start:]     
slice8 := arr[:]  
slice9 := arr[:len(arr)-1] //去掉切片的最后一个元素
</code></pre></div><p><img src="https://downloadflies.com//blog-img/fileName/image-20220718135810976.png" alt="切片">代码：</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> slice0 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">8</span><span class="token punctuation">]</span>
<span class="token keyword">var</span> slice1 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">6</span><span class="token punctuation">]</span>        <span class="token comment">//可以简写为 var slice []int = arr[:end]</span>
<span class="token keyword">var</span> slice2 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">:</span><span class="token number">10</span><span class="token punctuation">]</span>       <span class="token comment">//可以简写为 var slice[]int = arr[start:]</span>
<span class="token keyword">var</span> slice3 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token comment">//var slice []int = arr[:]</span>
<span class="token keyword">var</span> slice4 <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>      <span class="token comment">//去掉切片的最后一个元素</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"全局变量：arr %v\n"</span><span class="token punctuation">,</span> arr<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"全局变量：slice0 %v\n"</span><span class="token punctuation">,</span> slice0<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"全局变量：slice1 %v\n"</span><span class="token punctuation">,</span> slice1<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"全局变量：slice2 %v\n"</span><span class="token punctuation">,</span> slice2<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"全局变量：slice3 %v\n"</span><span class="token punctuation">,</span> slice3<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"全局变量：slice4 %v\n"</span><span class="token punctuation">,</span> slice4<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"-----------------------------------\n"</span><span class="token punctuation">)</span>
    arr2 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">}</span>
    slice5 <span class="token operator">:=</span> arr<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">8</span><span class="token punctuation">]</span>
    slice6 <span class="token operator">:=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">6</span><span class="token punctuation">]</span>         <span class="token comment">//可以简写为 slice := arr[:end]</span>
    slice7 <span class="token operator">:=</span> arr<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">:</span><span class="token number">10</span><span class="token punctuation">]</span>        <span class="token comment">//可以简写为 slice := arr[start:]</span>
    slice8 <span class="token operator">:=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">]</span>  <span class="token comment">//slice := arr[:]</span>
    slice9 <span class="token operator">:=</span> arr<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment">//去掉切片的最后一个元素</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"局部变量： arr2 %v\n"</span><span class="token punctuation">,</span> arr2<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"局部变量： slice5 %v\n"</span><span class="token punctuation">,</span> slice5<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"局部变量： slice6 %v\n"</span><span class="token punctuation">,</span> slice6<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"局部变量： slice7 %v\n"</span><span class="token punctuation">,</span> slice7<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"局部变量： slice8 %v\n"</span><span class="token punctuation">,</span> slice8<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"局部变量： slice9 %v\n"</span><span class="token punctuation">,</span> slice9<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>输出结果：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    全局变量：arr [0 1 2 3 4 5 6 7 8 9]
    全局变量：slice0 [2 3 4 5 6 7]
    全局变量：slice1 [0 1 2 3 4 5]
    全局变量：slice2 [5 6 7 8 9]
    全局变量：slice3 [0 1 2 3 4 5 6 7 8 9]
    全局变量：slice4 [0 1 2 3 4 5 6 7 8]
    -----------------------------------
    局部变量： arr2 [9 8 7 6 5 4 3 2 1 0]
    局部变量： slice5 [2 3 4 5 6 7]
    局部变量： slice6 [0 1 2 3 4 5]
    局部变量： slice7 [5 6 7 8 9]
    局部变量： slice8 [0 1 2 3 4 5 6 7 8 9]
    局部变量： slice9 [0 1 2 3 4 5 6 7 8]
</code></pre></div><h3 id="_1-1-3-通过make来创建切片" tabindex="-1"><a class="header-anchor" href="#_1-1-3-通过make来创建切片" aria-hidden="true">#</a> 1.1.3. 通过make来创建切片</h3>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    var slice []type = make([]type, len)
    slice  := make([]type, len)
    slice  := make([]type, len, cap)
</code></pre></div><p>代码：</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> slice0 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> slice1 <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> slice2 <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"make全局slice0 ：%v\n"</span><span class="token punctuation">,</span> slice0<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"make全局slice1 ：%v\n"</span><span class="token punctuation">,</span> slice1<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"make全局slice2 ：%v\n"</span><span class="token punctuation">,</span> slice2<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"--------------------------------------"</span><span class="token punctuation">)</span>
    slice3 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    slice4 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    slice5 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"make局部slice3 ：%v\n"</span><span class="token punctuation">,</span> slice3<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"make局部slice4 ：%v\n"</span><span class="token punctuation">,</span> slice4<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"make局部slice5 ：%v\n"</span><span class="token punctuation">,</span> slice5<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>输出结果：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    make全局slice0 ：[0 0 0 0 0 0 0 0 0 0]
    make全局slice1 ：[0 0 0 0 0 0 0 0 0 0]
    make全局slice2 ：[0 0 0 0 0 0 0 0 0 0]
    --------------------------------------
    make局部slice3 ：[0 0 0 0 0 0 0 0 0 0]
    make局部slice4 ：[0 0 0 0 0 0 0 0 0 0]
    make局部slice5 ：[0 0 0 0 0 0 0 0 0 0]
</code></pre></div><p>切片的内存布局</p>
<p>读写操作实际目标是底层数组，只需注意索引号的差别。</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>

    s <span class="token operator">:=</span> data<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">]</span>
    s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">100</span>
    s<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">200</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>输出:</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    [102 203]
    [0 1 102 203 4 5]
</code></pre></div><p>可直接创建 slice 对象，自动分配底层数组。</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    s1 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">}</span> <span class="token comment">// 通过初始化表达式构造，可使用索引号。</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">)</span>

    s2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token comment">// 使用 make 创建，指定 len 和 cap 值。</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s2<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">)</span>

    s3 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token comment">// 省略 cap，相当于 cap = len。</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s3<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>s3<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>s3<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>输出结果:</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    [0 1 2 3 0 0 0 0 100] 9 9
    [0 0 0 0 0 0] 6 8
    [0 0 0 0 0 0] 6 6
</code></pre></div><p>使用 make 动态创建slice，避免了数组必须用常量做长度的麻烦。还可用指针直接访问底层数组，退化成普通数组操作。</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    s <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
    p <span class="token operator">:=</span> <span class="token operator">&amp;</span>s<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token comment">// *int, 获取底层数组元素指针。</span>
    <span class="token operator">*</span>p <span class="token operator">+=</span> <span class="token number">100</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>输出结果:</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    [0 1 102 3]
</code></pre></div><p>至于 [][]T，是指元素类型为 []T 。</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span>
        <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>输出结果：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    [[1 2 3] [100 200] [11 22 33 44]]
</code></pre></div><p>可直接修改 struct array/slice 成员。</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    d <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token keyword">struct</span> <span class="token punctuation">{</span>
        x <span class="token builtin">int</span>
    <span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

    s <span class="token operator">:=</span> d<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span>

    d<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">10</span>
    s<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">20</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%p, %p\n"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>d<span class="token punctuation">,</span> <span class="token operator">&amp;</span>d<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre></div><p>输出结果:</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    [{0} {10} {20} {0} {0}]
    0xc4200160f0, 0xc4200160f0
</code></pre></div><h3 id="_1-1-4-用append内置函数操作切片-切片追加" tabindex="-1"><a class="header-anchor" href="#_1-1-4-用append内置函数操作切片-切片追加" aria-hidden="true">#</a> 1.1.4. 用append内置函数操作切片（切片追加）</h3>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"slice a : %v\n"</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
    <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"slice b : %v\n"</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span>
    c <span class="token operator">:=</span> <span class="token function">append</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token operator">...</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"slice c : %v\n"</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span>
    d <span class="token operator">:=</span> <span class="token function">append</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"slice d : %v\n"</span><span class="token punctuation">,</span> d<span class="token punctuation">)</span>
    e <span class="token operator">:=</span> <span class="token function">append</span><span class="token punctuation">(</span>d<span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"slice e : %v\n"</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre></div><p>输出结果：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    slice a : [1 2 3]
    slice b : [4 5 6]
    slice c : [1 2 3 4 5 6]
    slice d : [1 2 3 4 5 6 7]
    slice e : [1 2 3 4 5 6 7 8 9 10]
</code></pre></div><p>append ：向 slice 尾部添加数据，返回新的 slice 对象。</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    s1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%p\n"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>s1<span class="token punctuation">)</span>

    s2 <span class="token operator">:=</span> <span class="token function">append</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"%p\n"</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>s2<span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre></div><p>输出结果：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    0xc42000a060
    0xc42000a080
    [] [1]
</code></pre></div><h3 id="_1-1-5-超出原-slice-cap-限就会重新分配底层数组-即便原数组并未填满。" tabindex="-1"><a class="header-anchor" href="#_1-1-5-超出原-slice-cap-限就会重新分配底层数组-即便原数组并未填满。" aria-hidden="true">#</a> 1.1.5. 超出原 slice.cap 限就会重新分配底层数组，即便原数组并未填满。</h3>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>注意：这里需要思考append 后的新slice.cap是否超出原 slice.cap 限制？
1.如果扩容的长度大于切片容量，就会重新分配底层数组，即便原数组并未填满。 
2.如果扩容的长度小于等于切片容量，那么数组不会重新分配底层数组
例如：
   切片s添加一个元素和s2添加两个元素 比对底层数组起始指针。
</code></pre></div><div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	
    
    data <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">}</span>
    s <span class="token operator">:=</span> data<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token comment">//s 切片[0,1] 容量3</span>
    s <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token comment">// 一次 append 一个值，未超出 s.cap 限制。</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> data<span class="token punctuation">)</span>         <span class="token comment">// 重新分配底层数组，与原数组无关。</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 比对底层数组起始指针。</span>
    
    s2 <span class="token operator">:=</span> data<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token comment">//s2 切片[0,1] 容量3</span>
    s2 <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s2<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token comment">// 一次 append 两个值，超出 s.cap 限制。</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s2<span class="token punctuation">,</span> data<span class="token punctuation">)</span>         <span class="token comment">// 重新分配底层数组，与原数组无关。</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>s2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 比对底层数组起始指针。</span>

<span class="token punctuation">}</span>
</code></pre></div><p>输出结果:</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    [0 1 100 200] [0 1 2 3 4 0 0 0 0 0 0]
    0xc4200160f0 0xc420070060
</code></pre></div><p><strong>从输出结果可以看出，append 后的 s 重新分配了底层数组，并复制数据。如果只追加一个值，则不会超过 s.cap 限制，也就不会重新分配</strong>。 通常以 2 倍容量重新分配底层数组。在大批量添加数据时，建议一次性分配足够大的空间，以减少内存分配和数据复制开销。或初始化足够长的 len 属性，改用索引号进行操作。及时释放不再使用的 slice 对象，避免持有过期数组，造成 GC 无法回收。</p>
<h3 id="_1-1-6-slice中cap重新分配规律" tabindex="-1"><a class="header-anchor" href="#_1-1-6-slice中cap重新分配规律" aria-hidden="true">#</a> 1.1.6. slice中cap重新分配规律：</h3>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    s <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    c <span class="token operator">:=</span> <span class="token function">cap</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>

    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">50</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        s <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> i<span class="token punctuation">)</span>
        <span class="token keyword">if</span> n <span class="token operator">:=</span> <span class="token function">cap</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span> n <span class="token operator">></span> c <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"cap: %d -> %d\n"</span><span class="token punctuation">,</span> c<span class="token punctuation">,</span> n<span class="token punctuation">)</span>
            c <span class="token operator">=</span> n
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div><p>输出结果:</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    cap: 1 -> 2
    cap: 2 -> 4
    cap: 4 -> 8
    cap: 8 -> 16
    cap: 16 -> 32
    cap: 32 -> 64
</code></pre></div><h3 id="_1-1-7-切片拷贝" tabindex="-1"><a class="header-anchor" href="#_1-1-7-切片拷贝" aria-hidden="true">#</a> 1.1.7. 切片拷贝</h3>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    s1 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"slice s1 : %v\n"</span><span class="token punctuation">,</span> s1<span class="token punctuation">)</span>
    s2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"slice s2 : %v\n"</span><span class="token punctuation">,</span> s2<span class="token punctuation">)</span>
    <span class="token function">copy</span><span class="token punctuation">(</span>s2<span class="token punctuation">,</span> s1<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"copied slice s1 : %v\n"</span><span class="token punctuation">,</span> s1<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"copied slice s2 : %v\n"</span><span class="token punctuation">,</span> s2<span class="token punctuation">)</span>
    s3 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"slice s3 : %v\n"</span><span class="token punctuation">,</span> s3<span class="token punctuation">)</span>
    s3 <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s3<span class="token punctuation">,</span> s2<span class="token operator">...</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"appended slice s3 : %v\n"</span><span class="token punctuation">,</span> s3<span class="token punctuation">)</span>
    s3 <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s3<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"last slice s3 : %v\n"</span><span class="token punctuation">,</span> s3<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre></div><p>输出结果：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    slice s1 : [1 2 3 4 5]
    slice s2 : [0 0 0 0 0 0 0 0 0 0]
    copied slice s1 : [1 2 3 4 5]
    copied slice s2 : [1 2 3 4 5 0 0 0 0 0]
    slice s3 : [1 2 3]
    appended slice s3 : [1 2 3 1 2 3 4 5 0 0 0 0 0]
    last slice s3 : [1 2 3 1 2 3 4 5 0 0 0 0 0 4 5 6]
</code></pre></div><p>copy ：函数 copy 在两个 slice 间复制数据，复制长度以 len 小的为准。两个 slice 可指向同一底层数组，允许元素区间重叠。</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    data <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"array data : "</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
    s1 <span class="token operator">:=</span> data<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
    s2 <span class="token operator">:=</span> data<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">]</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"slice s1 : %v\n"</span><span class="token punctuation">,</span> s1<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"slice s2 : %v\n"</span><span class="token punctuation">,</span> s2<span class="token punctuation">)</span>
    <span class="token function">copy</span><span class="token punctuation">(</span>s2<span class="token punctuation">,</span> s1<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"copied slice s1 : %v\n"</span><span class="token punctuation">,</span> s1<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"copied slice s2 : %v\n"</span><span class="token punctuation">,</span> s2<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"last array data : "</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre></div><p>输出结果:</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    array data :  [0 1 2 3 4 5 6 7 8 9]
    slice s1 : [8 9]
    slice s2 : [0 1 2 3 4]
    copied slice s1 : [8 9]
    copied slice s2 : [8 9 2 3 4]
    last array data :  [8 9 2 3 4 5 6 7 8 9]
</code></pre></div><p>应及时将所需数据 copy 到较小的 slice，以便释放超大号底层数组内存。</p>
<h3 id="_1-1-8-slice遍历" tabindex="-1"><a class="header-anchor" href="#_1-1-8-slice遍历" aria-hidden="true">#</a> 1.1.8. slice遍历：</h3>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    data <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">}</span>
    slice <span class="token operator">:=</span> data<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> index<span class="token punctuation">,</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> slice <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"inde : %v , value : %v\n"</span><span class="token punctuation">,</span> index<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div><p>输出结果：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    inde : 0 , value : 0
    inde : 1 , value : 1
    inde : 2 , value : 2
    inde : 3 , value : 3
    inde : 4 , value : 4
    inde : 5 , value : 5
    inde : 6 , value : 6
    inde : 7 , value : 7
    inde : 8 , value : 8
    inde : 9 , value : 9
</code></pre></div><h3 id="_1-1-9-切片resize-调整大小" tabindex="-1"><a class="header-anchor" href="#_1-1-9-切片resize-调整大小" aria-hidden="true">#</a> 1.1.9. 切片resize（调整大小）</h3>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"slice a : %v , len(a) : %v\n"</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>
    b <span class="token operator">:=</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"slice b : %v , len(b) : %v\n"</span><span class="token punctuation">,</span> b<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span>
    c <span class="token operator">:=</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"slice c : %v , len(c) : %v\n"</span><span class="token punctuation">,</span> c<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>输出结果：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    slice a : [1 3 4 5] , len(a) : 4
    slice b : [3] , len(b) : 1
    slice c : [3 4 5] , len(c) : 3
</code></pre></div><h3 id="_1-1-10-数组和切片的内存布局" tabindex="-1"><a class="header-anchor" href="#_1-1-10-数组和切片的内存布局" aria-hidden="true">#</a> 1.1.10. 数组和切片的内存布局</h3>
<h3 id="_1-1-11-字符串和切片-string-and-slice" tabindex="-1"><a class="header-anchor" href="#_1-1-11-字符串和切片-string-and-slice" aria-hidden="true">#</a> 1.1.11. 字符串和切片（string and slice）</h3>
<p>string底层就是一个byte的数组，因此，也可以进行切片操作。</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    str <span class="token operator">:=</span> <span class="token string">"hello world"</span>
    s1 <span class="token operator">:=</span> str<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">]</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span>

    s2 <span class="token operator">:=</span> str<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>输出结果：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    hello
    world
</code></pre></div><p>string本身是不可变的，因此要改变string中字符。需要如下操作： 英文字符串：</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    str <span class="token operator">:=</span> <span class="token string">"Hello world"</span>
    s <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token comment">//中文字符需要用[]rune(str)</span>
    s<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'G'</span>
    s <span class="token operator">=</span> s<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">8</span><span class="token punctuation">]</span>
    s <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token char">'!'</span><span class="token punctuation">)</span>
    str <span class="token operator">=</span> <span class="token function">string</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>输出结果：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    Hello Go!
</code></pre></div><h3 id="_1-1-12-含有中文字符串" tabindex="-1"><a class="header-anchor" href="#_1-1-12-含有中文字符串" aria-hidden="true">#</a> 1.1.12. 含有中文字符串：</h3>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    str <span class="token operator">:=</span> <span class="token string">"你好，世界！hello world！"</span>
    s <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">rune</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> 
    s<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'够'</span>
    s<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'浪'</span>
    s<span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'g'</span>
    s <span class="token operator">=</span> s<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">14</span><span class="token punctuation">]</span>
    str <span class="token operator">=</span> <span class="token function">string</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>输出结果：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>你好，够浪！hello go
</code></pre></div><p>golang slice data[:6:8] 两个冒号的理解</p>
<p>常规slice , data[6:8]，从第6位到第8位（返回6， 7），长度len为2， 最大可扩充长度cap为4（6-9）</p>
<p>另一种写法： data[:6:8] 每个数字前都有个冒号， slice内容为data从0到第6位，长度len为6，最大扩充项cap设置为8</p>
<p>a[x:y:z] 切片内容 [x:y] 切片长度: y-x 切片容量:z-x</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    slice <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">}</span>
    d1 <span class="token operator">:=</span> slice<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">:</span><span class="token number">8</span><span class="token punctuation">]</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>d1<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>d1<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>d1<span class="token punctuation">)</span><span class="token punctuation">)</span>
    d2 <span class="token operator">:=</span> slice<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">6</span><span class="token punctuation">:</span><span class="token number">8</span><span class="token punctuation">]</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>d2<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>d2<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>d2<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>数组or切片转字符串：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    strings.Replace(strings.Trim(fmt.Sprint(array_or_slice), "[]"), " ", ",", -1)
</code></pre></div></div></template>
