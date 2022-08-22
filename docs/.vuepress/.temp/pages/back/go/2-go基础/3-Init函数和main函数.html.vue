<template><div><h1 id="_1-init函数和main函数" tabindex="-1"><a class="header-anchor" href="#_1-init函数和main函数" aria-hidden="true">#</a> 1. Init函数和main函数</h1>
<h2 id="_1-1-init函数" tabindex="-1"><a class="header-anchor" href="#_1-1-init函数" aria-hidden="true">#</a> 1.1. init函数</h2>
<p>go语言中<code v-pre>init</code>函数用于包<code v-pre>(package)</code>的初始化，该函数是go语言的一个重要特性。</p>
<p>有下面的特征：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    1 init函数是用于程序执行前做包的初始化的函数，比如初始化包里的变量等

    2 每个包可以拥有多个init函数

    3 包的每个源文件也可以拥有多个init函数

    4 同一个包中多个init函数的执行顺序go语言没有明确的定义(说明)

    5 不同包的init函数按照包导入的依赖关系决定该初始化函数的执行顺序

    6 init函数不能被其他函数调用，而是在main函数执行之前，自动被调用
</code></pre></div><h2 id="_1-2-main函数" tabindex="-1"><a class="header-anchor" href="#_1-2-main函数" aria-hidden="true">#</a> 1.2. main函数</h2>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    Go语言程序的默认入口函数(主函数)：func main()
    函数体用｛｝一对括号包裹。

    func main(){
        //函数体
    }
</code></pre></div><h2 id="_1-3-init函数和main函数的异同" tabindex="-1"><a class="header-anchor" href="#_1-3-init函数和main函数的异同" aria-hidden="true">#</a> 1.3. init函数和main函数的异同</h2>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    相同点：
        两个函数在定义时不能有任何的参数和返回值，且Go程序自动调用。
    不同点：
        init可以应用于任意包中，且可以重复定义多个。
        main函数只能用于main包中，且只能定义一个。
</code></pre></div><p>两个函数的执行顺序：</p>
<p>对同一个go文件的<code v-pre>init()</code>调用顺序是从上到下的。</p>
<p>对同一个package中不同文件是按文件名字符串比较“从小到大”顺序调用各文件中的<code v-pre>init()</code>函数。</p>
<p>对于不同的<code v-pre>package</code>，如果不相互依赖的话，按照main包中&quot;先<code v-pre>import</code>的后调用&quot;的顺序调用其包中的<code v-pre>init()</code>，如果<code v-pre>package</code>存在依赖，则先调用最早被依赖的<code v-pre>package</code>中的<code v-pre>init()</code>，最后调用<code v-pre>main</code>函数。</p>
<p>如果<code v-pre>init</code>函数中使用了<code v-pre>println()</code>或者<code v-pre>print()</code>你会发现在执行过程中这两个不会按照你想象中的顺序执行。这两个函数官方只推荐在测试环境中使用，对于正式环境不要使用。</p>
</div></template>
