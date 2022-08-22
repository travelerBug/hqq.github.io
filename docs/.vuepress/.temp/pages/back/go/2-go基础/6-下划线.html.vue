<template><div><h1 id="_1-下划线" tabindex="-1"><a class="header-anchor" href="#_1-下划线" aria-hidden="true">#</a> 1. 下划线</h1>
<p>“_”是特殊标识符，用来忽略结果。</p>
<h3 id="_1-1-1-下划线在import中" tabindex="-1"><a class="header-anchor" href="#_1-1-1-下划线在import中" aria-hidden="true">#</a> 1.1.1. 下划线在import中</h3>
<div class="language-text ext-text"><pre v-pre class="language-text"><code> 在Golang里，import的作用是导入其他package。
</code></pre></div><p>import 下划线（如：import <em>hello/imp）的作用：当导入一个包时，该包下的文件里所有init()函数都会被执行，然而，有些时候我们并不需要把整个包都导入进来，仅仅是是希望它执行init()函数而已。这个时候就可以使用 import</em> 引用该包。即使用【import _ 包路径】只是引用该包，仅仅是为了调用init()函数，所以无法通过包名来调用包中的其他函数。 示例：</p>
<p>代码结构</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    src 
    |
    +--- main.go            
    |
    +--- hello
           |
            +--- hello.go
package main

import _ "./hello"

func main() {
    // hello.Print() 
    //编译报错：./main.go:6:5: undefined: hello
}
</code></pre></div><p>hello.go</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> hello

<span class="token keyword">import</span> <span class="token string">"fmt"</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"imp-init() come here."</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"Hello!"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>输出结果：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    imp-init() come here.
</code></pre></div><h3 id="_1-1-2-下划线在代码中" tabindex="-1"><a class="header-anchor" href="#_1-1-2-下划线在代码中" aria-hidden="true">#</a> 1.1.2. 下划线在代码中</h3>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"os"</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    buf <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">)</span>
    f<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">"/Users/***/Desktop/text.txt"</span><span class="token punctuation">)</span>
    <span class="token keyword">defer</span> f<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        n<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> f<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
        <span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
            <span class="token keyword">break</span>    

        <span class="token punctuation">}</span>
        os<span class="token punctuation">.</span>Stdout<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>解释1：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    下划线意思是忽略这个变量.

    比如os.Open，返回值为*os.File，error

    普通写法是f,err := os.Open("xxxxxxx")

    如果此时不需要知道返回的错误值

    就可以用f, _ := os.Open("xxxxxx")

    如此则忽略了error变量
</code></pre></div><p>解释2：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    占位符，意思是那个位置本应赋给某个值，但是咱们不需要这个值。
    所以就把该值赋给下划线，意思是丢掉不要。
    这样编译器可以更好的优化，任何类型的单个值都可以丢给下划线。
    这种情况是占位用的，方法返回两个结果，而你只想要一个结果。
    那另一个就用 "_" 占位，而如果用变量的话，不使用，编译器是会报错的。
</code></pre></div><p>补充：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    import "database/sql"
    import _ "github.com/go-sql-driver/mysql"
</code></pre></div><p>第二个import就是不直接使用mysql包，只是执行一下这个包的init函数，把mysql的驱动注册到sql包里，然后程序里就可以使用sql包来访问mysql数据库了。</p>
</div></template>
