<template><div><h1 id="_1-基本类型" tabindex="-1"><a class="header-anchor" href="#_1-基本类型" aria-hidden="true">#</a> 1. 基本类型</h1>
<h2 id="_1-1-基本类型介绍" tabindex="-1"><a class="header-anchor" href="#_1-1-基本类型介绍" aria-hidden="true">#</a> 1.1. 基本类型介绍</h2>
<p>Golang 更明确的数字类型命名，支持 Unicode，支持常用数据结构。</p>
<table>
<thead>
<tr>
<th>类型</th>
<th>长度(字节)</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>bool</td>
<td>1</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>byte</td>
<td>1</td>
<td>0</td>
<td>uint8</td>
</tr>
<tr>
<td>rune</td>
<td>4</td>
<td>0</td>
<td>Unicode Code Point, int32</td>
</tr>
<tr>
<td>int, uint</td>
<td>4或8</td>
<td>0</td>
<td>32 或 64 位</td>
</tr>
<tr>
<td>int8, uint8</td>
<td>1</td>
<td>0</td>
<td>-128 ~ 127, 0 ~ 255，byte是uint8 的别名</td>
</tr>
<tr>
<td>int16, uint16</td>
<td>2</td>
<td>0</td>
<td>-32768 ~ 32767, 0 ~ 65535</td>
</tr>
<tr>
<td>int32, uint32</td>
<td>4</td>
<td>0</td>
<td>-21亿~ 21亿, 0 ~ 42亿，rune是int32 的别名</td>
</tr>
<tr>
<td>int64, uint64</td>
<td>8</td>
<td>0</td>
<td></td>
</tr>
<tr>
<td>float32</td>
<td>4</td>
<td>0.0</td>
<td></td>
</tr>
<tr>
<td>float64</td>
<td>8</td>
<td>0.0</td>
<td></td>
</tr>
<tr>
<td>complex64</td>
<td>8</td>
<td></td>
<td></td>
</tr>
<tr>
<td>complex128</td>
<td>16</td>
<td></td>
<td></td>
</tr>
<tr>
<td>uintptr</td>
<td>4或8</td>
<td></td>
<td>以存储指针的 uint32 或 uint64 整数</td>
</tr>
<tr>
<td>array</td>
<td></td>
<td></td>
<td>值类型</td>
</tr>
<tr>
<td>struct</td>
<td></td>
<td></td>
<td>值类型</td>
</tr>
<tr>
<td>string</td>
<td></td>
<td>&quot;&quot;</td>
<td>UTF-8 字符串</td>
</tr>
<tr>
<td>slice</td>
<td></td>
<td>nil</td>
<td>引用类型</td>
</tr>
<tr>
<td>map</td>
<td></td>
<td>nil</td>
<td>引用类型</td>
</tr>
<tr>
<td>channel</td>
<td></td>
<td>nil</td>
<td>引用类型</td>
</tr>
<tr>
<td>interface</td>
<td></td>
<td>nil</td>
<td>接口</td>
</tr>
<tr>
<td>function</td>
<td></td>
<td>nil</td>
<td>函数</td>
</tr>
</tbody>
</table>
<p>支持八进制、 六进制，以及科学记数法。标准库 math 定义了各数字类型取值范围。</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>     a, b, c, d := 071, 0x1F, 1e9, math.MinInt16
</code></pre></div><p>空指针值 nil，而非C/C++ NULL。</p>
<h3 id="_1-1-1-整型" tabindex="-1"><a class="header-anchor" href="#_1-1-1-整型" aria-hidden="true">#</a> 1.1.1. 整型</h3>
<p>整型分为以下两个大类： 按长度分为：<code v-pre>int8</code>、<code v-pre>int16</code>、<code v-pre>int32</code>、<code v-pre>int64</code>对应的无符号整型：<code v-pre>uint8</code>、<code v-pre>uint16</code>、<code v-pre>uint32</code>、<code v-pre>uint64</code></p>
<p>其中，<code v-pre>uint8</code>就是我们熟知的<code v-pre>byte</code>型，<code v-pre>int16</code>对应C语言中的<code v-pre>short</code>型，<code v-pre>int64</code>对应C语言中的<code v-pre>long</code>型。</p>
<h3 id="_1-1-2-浮点型" tabindex="-1"><a class="header-anchor" href="#_1-1-2-浮点型" aria-hidden="true">#</a> 1.1.2. 浮点型</h3>
<p>Go语言支持两种浮点型数：<code v-pre>float32</code>和<code v-pre>float64</code>。这两种浮点型数据格式遵循<code v-pre>IEEE 754</code>标准： <code v-pre>float32</code> 的浮点数的最大范围约为<code v-pre>3.4e38</code>，可以使用常量定义：<code v-pre>math.MaxFloat32</code>。 <code v-pre>float64</code> 的浮点数的最大范围约为 <code v-pre>1.8e308</code>，可以使用一个常量定义：<code v-pre>math.MaxFloat64</code>。</p>
<h3 id="_1-1-3-复数" tabindex="-1"><a class="header-anchor" href="#_1-1-3-复数" aria-hidden="true">#</a> 1.1.3. 复数</h3>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>complex64`和`complex128
</code></pre></div><p>复数有实部和虚部，<code v-pre>complex64</code>的实部和虚部为32位，<code v-pre>complex128</code>的实部和虚部为64位。</p>
<h3 id="_1-1-4-布尔值" tabindex="-1"><a class="header-anchor" href="#_1-1-4-布尔值" aria-hidden="true">#</a> 1.1.4. 布尔值</h3>
<p>Go语言中以<code v-pre>bool</code>类型进行声明布尔型数据，布尔型数据只有<code v-pre>true（真）</code>和<code v-pre>false（假）</code>两个值。</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    注意：

    布尔类型变量的默认值为false。

    Go 语言中不允许将整型强制转换为布尔型.

    布尔型无法参与数值运算，也无法与其他类型进行转换。
</code></pre></div><h3 id="_1-1-5-字符串" tabindex="-1"><a class="header-anchor" href="#_1-1-5-字符串" aria-hidden="true">#</a> 1.1.5. 字符串</h3>
<p>Go语言中的字符串以原生数据类型出现，使用字符串就像使用其他原生数据类型<code v-pre>（int、bool、float32、float64 等）</code>一样。 Go 语言里的字符串的内部实现使用UTF-8编码。 字符串的值为双引号(&quot;)中的内容，可以在Go语言的源码中直接添加非<code v-pre>ASCII</code>码字符，例如：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>s1 := "hello"
s2 := "你好"
</code></pre></div><h3 id="_1-1-6-字符串转义符" tabindex="-1"><a class="header-anchor" href="#_1-1-6-字符串转义符" aria-hidden="true">#</a> 1.1.6. 字符串转义符</h3>
<p>Go 语言的字符串常见转义符包含回车、换行、单双引号、制表符等，如下表所示。</p>
<table>
<thead>
<tr>
<th>转义</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>\r</td>
<td>回车符（返回行首）</td>
</tr>
<tr>
<td>\n</td>
<td>换行符（直接跳到下一行的同列位置）</td>
</tr>
<tr>
<td>\t</td>
<td>制表符</td>
</tr>
<tr>
<td>'</td>
<td>单引号</td>
</tr>
<tr>
<td>&quot;</td>
<td>双引号</td>
</tr>
<tr>
<td>\</td>
<td>反斜杠</td>
</tr>
</tbody>
</table>
<p>举个例子，我们要打印一个Windows平台下的一个文件路径：</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">"fmt"</span>
<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"str := \"c:\\pprof\\main.exe\""</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_1-1-7-多行字符串" tabindex="-1"><a class="header-anchor" href="#_1-1-7-多行字符串" aria-hidden="true">#</a> 1.1.7. 多行字符串</h3>
<p>Go语言中要定义一个多行字符串时，就必须使用<code v-pre>反引号</code>字符：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    s1 := `第一行
    第二行
    第三行
    `
    fmt.Println(s1)
</code></pre></div><p>反引号间换行将被作为字符串中的换行，但是所有的转义字符均无效，文本将会原样输出。</p>
<h3 id="_1-1-8-字符串的常用操作" tabindex="-1"><a class="header-anchor" href="#_1-1-8-字符串的常用操作" aria-hidden="true">#</a> 1.1.8. 字符串的常用操作</h3>
<table>
<thead>
<tr>
<th>方法</th>
<th>介绍</th>
</tr>
</thead>
<tbody>
<tr>
<td>len(str)</td>
<td>求长度</td>
</tr>
<tr>
<td>+或fmt.Sprintf</td>
<td>拼接字符串</td>
</tr>
<tr>
<td>strings.Split</td>
<td>分割</td>
</tr>
<tr>
<td>strings.Contains</td>
<td>判断是否包含</td>
</tr>
<tr>
<td>strings.HasPrefix,strings.HasSuffix</td>
<td>前缀/后缀判断</td>
</tr>
<tr>
<td>strings.Index(),strings.LastIndex()</td>
<td>子串出现的位置</td>
</tr>
<tr>
<td>strings.Join(a[]string, sep string)</td>
<td>join操作</td>
</tr>
</tbody>
</table>
<h3 id="_1-1-9-byte和rune类型" tabindex="-1"><a class="header-anchor" href="#_1-1-9-byte和rune类型" aria-hidden="true">#</a> 1.1.9. byte和rune类型</h3>
<p>组成每个字符串的元素叫做“字符”，可以通过遍历或者单个获取字符串元素获得字符。 字符用单引号（’）包裹起来，如：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    var a := '中'

    var b := 'x'
</code></pre></div><p>Go 语言的字符有以下两种：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    uint8类型，或者叫 byte 型，代表了ASCII码的一个字符。

    rune类型，代表一个 UTF-8字符。
</code></pre></div><p>当需要处理中文、日文或者其他复合字符时，则需要用到<code v-pre>rune</code>类型。<code v-pre>rune</code>类型实际是一个<code v-pre>int32</code>。 Go 使用了特殊的 <code v-pre>rune</code> 类型来处理 <code v-pre>Unicode</code>，让基于 <code v-pre>Unicode</code>的文本处理更为方便，也可以使用 <code v-pre>byte</code> 型进行默认字符串处理，性能和扩展性都有照顾</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    // 遍历字符串
    func traversalString() {
        s := "pprof.cn博客"
        for i := 0; i &lt; len(s); i++ { //byte
            fmt.Printf("%v(%c) ", s[i], s[i])
        }
        fmt.Println()
        for _, r := range s { //rune
            fmt.Printf("%v(%c) ", r, r)
        }
        fmt.Println()
    }
</code></pre></div><p>输出：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    112(p) 112(p) 114(r) 111(o) 102(f) 46(.) 99(c) 110(n) 229(å) 141() 154() 229(å) 174(®) 162(¢)
    112(p) 112(p) 114(r) 111(o) 102(f) 46(.) 99(c) 110(n) 21338(博) 23458(客)
</code></pre></div><p>因为UTF8编码下一个中文汉字由<code v-pre>3~4</code>个字节组成，所以我们不能简单的按照字节去遍历一个包含中文的字符串，否则就会出现上面输出中第一行的结果。</p>
<p>字符串底层是一个byte数组，所以可以和[]byte类型相互转换。字符串是不能修改的 字符串是由byte字节组成，所以字符串的长度是byte字节的长度。 rune类型用来表示utf8字符，一个rune字符由一个或多个byte组成。</p>
<h3 id="_1-1-10-修改字符串" tabindex="-1"><a class="header-anchor" href="#_1-1-10-修改字符串" aria-hidden="true">#</a> 1.1.10. 修改字符串</h3>
<p>要修改字符串，需要先将其转换成<code v-pre>[]rune或[]byte</code>，完成后再转换为<code v-pre>string</code>。无论哪种转换，都会重新分配内存，并复制字节数组。</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    func changeString() {
        s1 := "hello"
        // 强制类型转换
        byteS1 := []byte(s1)
        byteS1[0] = 'H'
        fmt.Println(string(byteS1))

        s2 := "博客"
        runeS2 := []rune(s2)
        runeS2[0] = '狗'
        fmt.Println(string(runeS2))
    }
</code></pre></div><h3 id="_1-1-11-类型转换" tabindex="-1"><a class="header-anchor" href="#_1-1-11-类型转换" aria-hidden="true">#</a> 1.1.11. 类型转换</h3>
<p>Go语言中只有强制类型转换，没有隐式类型转换。该语法只能在两个类型之间支持相互转换的时候使用。</p>
<p>强制类型转换的基本语法如下：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    T(表达式)
</code></pre></div><p>其中，T表示要转换的类型。表达式包括变量、复杂算子和函数返回值等.</p>
<p>比如计算直角三角形的斜边长时使用math包的Sqrt()函数，该函数接收的是float64类型的参数，而变量a和b都是int类型的，这个时候就需要将a和b强制类型转换为float64类型。</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    func sqrtDemo() {
        var a, b = 3, 4
        var c int
        // math.Sqrt()接收的参数是float64类型，需要强制转换
        c = int(math.Sqrt(float64(a*a + b*b)))
        fmt.Println(c)
    }
</code></pre></div></div></template>
