<template><div><h1 id="_1-变量和常量" tabindex="-1"><a class="header-anchor" href="#_1-变量和常量" aria-hidden="true">#</a> 1. 变量和常量</h1>
<h2 id="_1-1-变量" tabindex="-1"><a class="header-anchor" href="#_1-1-变量" aria-hidden="true">#</a> 1.1. 变量</h2>
<h3 id="_1-1-1-变量的来历" tabindex="-1"><a class="header-anchor" href="#_1-1-1-变量的来历" aria-hidden="true">#</a> 1.1.1. 变量的来历</h3>
<p>程序运行过程中的数据都是保存在内存中，我们想要在代码中操作某个数据时就需要去内存上找到这个变量，但是如果我们直接在代码中通过内存地址去操作变量的话，代码的可读性会非常差而且还容易出错，所以我们就利用变量将这个数据的内存地址保存起来，以后直接通过这个变量就能找到内存上对应的数据了。</p>
<h3 id="_1-1-2-变量类型" tabindex="-1"><a class="header-anchor" href="#_1-1-2-变量类型" aria-hidden="true">#</a> 1.1.2. 变量类型</h3>
<p>变量（Variable）的功能是存储数据。不同的变量保存的数据类型可能会不一样。经过半个多世纪的发展，编程语言已经基本形成了一套固定的类型，常见变量的数据类型有：整型、浮点型、布尔型等。</p>
<p>Go语言中的每一个变量都有自己的类型，并且变量必须经过声明才能开始使用。</p>
<h3 id="_1-1-3-变量声明" tabindex="-1"><a class="header-anchor" href="#_1-1-3-变量声明" aria-hidden="true">#</a> 1.1.3. 变量声明</h3>
<p>Go语言中的变量需要声明后才能使用，同一作用域内不支持重复声明。并且Go语言的变量声明后必须使用。</p>
<h3 id="_1-1-4-标准声明" tabindex="-1"><a class="header-anchor" href="#_1-1-4-标准声明" aria-hidden="true">#</a> 1.1.4. 标准声明</h3>
<p>Go语言的变量声明格式为：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    var 变量名 变量类型
</code></pre></div><p>变量声明以关键字<code v-pre>var</code>开头，变量类型放在变量的后面，行尾无需分号。 举个例子：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    var name string
    var age int
    var isOk bool
</code></pre></div><h3 id="_1-1-5-批量声明" tabindex="-1"><a class="header-anchor" href="#_1-1-5-批量声明" aria-hidden="true">#</a> 1.1.5. 批量声明</h3>
<p>每声明一个变量就需要写<code v-pre>var</code>关键字会比较繁琐，go语言中还支持批量变量声明：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    var (
        a string
        b int
        c bool
        d float32
    )
</code></pre></div><h3 id="_1-1-6-变量的初始化" tabindex="-1"><a class="header-anchor" href="#_1-1-6-变量的初始化" aria-hidden="true">#</a> 1.1.6. 变量的初始化</h3>
<p>Go语言在声明变量的时候，会自动对变量对应的内存区域进行初始化操作。每个变量会被初始化成其类型的默认值，例如： 整型和浮点型变量的默认值为0。 字符串变量的默认值为空字符串。 布尔型变量默认为<code v-pre>false</code>。 切片、函数、指针变量的默认为<code v-pre>nil</code>。</p>
<p>当然我们也可在声明变量的时候为其指定初始值。变量初始化的标准格式如下：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    var 变量名 类型 = 表达式
</code></pre></div><p>举个例子：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    var name string = "pprof.cn"
    var sex int = 1
</code></pre></div><p>或者一次初始化多个变量</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    var name, sex = "pprof.cn", 1
</code></pre></div><h4 id="类型推导" tabindex="-1"><a class="header-anchor" href="#类型推导" aria-hidden="true">#</a> 类型推导</h4>
<p>有时候我们会将变量的类型省略，这个时候编译器会根据等号右边的值来推导变量的类型完成初始化。</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    var name = "pprof.cn"
    var sex = 1
</code></pre></div><h4 id="短变量声明" tabindex="-1"><a class="header-anchor" href="#短变量声明" aria-hidden="true">#</a> 短变量声明</h4>
<p>在函数内部，可以使用更简略的 := 方式声明并初始化变量。</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>
<span class="token comment">// 全局变量m</span>
<span class="token keyword">var</span> m <span class="token operator">=</span> <span class="token number">100</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    n <span class="token operator">:=</span> <span class="token number">10</span>
    m <span class="token operator">:=</span> <span class="token number">200</span> <span class="token comment">// 此处声明局部变量m</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>m<span class="token punctuation">,</span> n<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="匿名变量" tabindex="-1"><a class="header-anchor" href="#匿名变量" aria-hidden="true">#</a> 匿名变量</h4>
<p>在使用多重赋值时，如果想要忽略某个值，可以使用<code v-pre>匿名变量（anonymous variable）</code>。 匿名变量用一个下划线_表示，例如：</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">"Q1mi"</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    x<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token boolean">_</span><span class="token punctuation">,</span> y <span class="token operator">:=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"x="</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"y="</span><span class="token punctuation">,</span> y<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>匿名变量不占用命名空间，不会分配内存，所以匿名变量之间不存在重复声明。 (在Lua等编程语言里，匿名变量也被叫做哑元变量。)</p>
<p>注意事项：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    函数外的每个语句都必须以关键字开始（var、const、func等）

    :=不能使用在函数外。

    _多用于占位，表示忽略值。
</code></pre></div><h2 id="_1-2-常量" tabindex="-1"><a class="header-anchor" href="#_1-2-常量" aria-hidden="true">#</a> 1.2. 常量</h2>
<p>相对于变量，常量是恒定不变的值，多用于定义程序运行期间不会改变的那些值。 常量的声明和变量声明非常类似，只是把<code v-pre>var</code>换成了<code v-pre>const</code>，常量在定义的时候必须赋值。</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    const pi = 3.1415
    const e = 2.7182
</code></pre></div><p>声明了<code v-pre>pi</code>和<code v-pre>e</code>这两个常量之后，在整个程序运行期间它们的值都不能再发生变化了。</p>
<p>多个常量也可以一起声明：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    const (
        pi = 3.1415
        e = 2.7182
    )
</code></pre></div><p><code v-pre>const</code>同时声明多个常量时，如果省略了值则表示和上面一行的值相同。 例如：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    const (
        n1 = 100
        n2
        n3
    )
</code></pre></div><p>上面示例中，常量<code v-pre>n1、n2、n3</code>的值都是<code v-pre>100</code>。</p>
<h3 id="_1-2-1-iota" tabindex="-1"><a class="header-anchor" href="#_1-2-1-iota" aria-hidden="true">#</a> 1.2.1. iota</h3>
<p><code v-pre>iota</code>是<code v-pre>go</code>语言的常量计数器，只能在常量的表达式中使用。 <code v-pre>iota</code>在<code v-pre>const</code>关键字出现时将被重置为<code v-pre>0</code>。<code v-pre>const</code>中每新增一行常量声明将使<code v-pre>iota</code>计数一次(<code v-pre>iota</code>可理解为<code v-pre>const</code>语句块中的行索引)。 使用<code v-pre>iota</code>能简化定义，在定义枚举时很有用。</p>
<p>举个例子：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    const (
            n1 = iota //0
            n2        //1
            n3        //2
            n4        //3
        )
</code></pre></div><h3 id="_1-2-2-几个常见的iota示例" tabindex="-1"><a class="header-anchor" href="#_1-2-2-几个常见的iota示例" aria-hidden="true">#</a> 1.2.2. 几个常见的iota示例:</h3>
<p>使用_跳过某些值</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    const (
            n1 = iota //0
            n2        //1
            _
            n4        //3
        )
</code></pre></div><p><code v-pre>iota</code>声明中间插队</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    const (
            n1 = iota //0
            n2 = 100  //100
            n3 = iota //2
            n4        //3
        )
    const n5 = iota //0
</code></pre></div><p>定义数量级 （这里的<code v-pre>&lt;&lt;</code>表示左移操作，<code v-pre>1&lt;&lt;10</code>表示将<code v-pre>1</code>的二进制表示向左移<code v-pre>10</code>位，也就是由<code v-pre>1</code>变成了<code v-pre>10000000000</code>，也就是十进制的<code v-pre>1024</code>。同理<code v-pre>2&lt;&lt;2</code>表示将<code v-pre>2</code>的二进制表示向左移<code v-pre>2</code>位，也就是由<code v-pre>10</code>变成了<code v-pre>1000</code>，也就是十进制的<code v-pre>8</code>。）</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    const (
            _  = iota
            KB = 1 &lt;&lt; (10 * iota)
            MB = 1 &lt;&lt; (10 * iota)
            GB = 1 &lt;&lt; (10 * iota)
            TB = 1 &lt;&lt; (10 * iota)
            PB = 1 &lt;&lt; (10 * iota)
        )
</code></pre></div><p>多个<code v-pre>iota</code>定义在一行</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    const (
            a, b = iota + 1, iota + 2 //1,2
            c, d                      //2,3
            e, f                      //3,4
        )
</code></pre></div></div></template>
