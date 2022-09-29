import{_ as e,o as n,c as t,e as a}from"./app.ad4da1a1.js";const c={},o=a(`<h1 id="\u53CD\u5C04" tabindex="-1"><a class="header-anchor" href="#\u53CD\u5C04" aria-hidden="true">#</a> \u53CD\u5C04</h1><h2 id="_1-1-reflect-\u5305" tabindex="-1"><a class="header-anchor" href="#_1-1-reflect-\u5305" aria-hidden="true">#</a> 1.1 reflect \u5305</h2><p>Go \u8BED\u8A00\u63D0\u4F9B\u4E86\u4E00\u79CD\u673A\u5236\uFF0C\u80FD\u591F\u5728\u8FD0\u884C\u65F6\u66F4\u65B0\u53D8\u91CF\u548C\u68C0\u67E5\u5B83\u4EEC\u7684\u503C\u3001\u8C03\u7528\u5B83\u4EEC\u7684\u65B9\u6CD5\uFF0C\u800C\u4E0D\u9700\u8981\u5728\u7F16\u8BD1\u65F6\u5C31\u77E5\u9053\u8FD9\u4E9B\u53D8\u91CF\u7684\u5177\u4F53\u7C7B\u578B\u3002\u8FD9\u79CD\u673A\u5236\u88AB\u79F0\u4E3A <strong>\u53CD\u5C04</strong> \u3002</p><p>\u53CD\u5C04\u662F\u628A\u53CC\u5203\u5251\uFF0C\u529F\u80FD\u5F3A\u5927\u4F46\u4EE3\u7801\u53EF\u8BFB\u6027\u5E76\u4E0D\u7406\u60F3\uFF0C\u82E5\u975E\u5FC5\u8981\u5E76\u4E0D\u63A8\u8350\u4F7F\u7528\u53CD\u5C04\u3002</p><p>\u5728 Go \u4E2D <code>reflect</code> \u5305\u5B9E\u73B0\u4E86\u8FD0\u884C\u65F6\u53CD\u5C04\u3002<code>reflect</code> \u5305\u4F1A\u5E2E\u52A9\u8BC6\u522B <code>interface{}</code> \u53D8\u91CF\u7684\u5E95\u5C42\u5177\u4F53\u7C7B\u578B\u548C\u5177\u4F53\u503C\u3002</p><h3 id="_1-1-1-reflect-type" tabindex="-1"><a class="header-anchor" href="#_1-1-1-reflect-type" aria-hidden="true">#</a> 1.1.1 reflect.Type</h3><p><code>reflect.Type</code> \u8868\u793A <code>interface{}</code> \u7684\u5177\u4F53\u7C7B\u578B\u3002<code>reflect.TypeOf()</code> \u65B9\u6CD5\u8FD4\u56DE <code>reflect.Type</code> \u3002</p><p>\u50CF\u6211\u4EEC\u4E4B\u524D\u8BB2\u8FC7\u7684\u7A7A\u63A5\u53E3\u53C2\u6570\u7684\u51FD\u6570\uFF0C\u53EF\u4EE5\u901A\u8FC7\u7C7B\u578B\u65AD\u8A00\u6765\u5224\u65AD\u4F20\u5165\u53D8\u91CF\u7684\u7C7B\u578B\uFF0C\u4E5F\u53EF\u4EE5\u501F\u52A9\u53CD\u5C04\u6765\u786E\u5B9A\u4F20\u5165\u53D8\u91CF\u7684\u7C7B\u578B\u3002</p><div class="language-Go ext-Go"><pre class="language-Go"><code>
package main

import (
    &quot;fmt&quot;
    &quot;reflect&quot;
)

func reflectType(x interface{}) {
    obj := reflect.TypeOf(x)
    fmt.Println(obj)
}

func main() {
    var a int64 = 123
    reflectType(a)
    var b string = &quot;\u4ECE0\u5230Go\u8BED\u8A00\u5FAE\u670D\u52A1\u67B6\u6784\u5E08&quot;
    reflectType(b)
}
</code></pre></div><h3 id="_1-1-2-reflect-value" tabindex="-1"><a class="header-anchor" href="#_1-1-2-reflect-value" aria-hidden="true">#</a> 1.1.2 reflect.Value</h3><p><code>reflect.Value</code> \u8868\u793A <code>interface{}</code> \u7684\u5177\u4F53\u503C\u3002<code>reflect.ValueOf()</code> \u65B9\u6CD5\u8FD4\u56DE <code>reflect.Value</code> \u3002</p><div class="language-GO ext-GO"><pre class="language-GO"><code>
package main

import (
    &quot;fmt&quot;
    &quot;reflect&quot;
)

func reflectType(x interface{}) {
    typeX := reflect.TypeOf(x)
    valueX := reflect.ValueOf(x)
    fmt.Println(typeX)
    fmt.Println(valueX)
}

func main() {
    var a int64 = 123
    reflectType(a)
    var b string = &quot;\u4ECE0\u5230Go\u8BED\u8A00\u5FAE\u670D\u52A1\u67B6\u6784\u5E08&quot;
    reflectType(b)
}
</code></pre></div><h3 id="_1-1-3-relfect-kind" tabindex="-1"><a class="header-anchor" href="#_1-1-3-relfect-kind" aria-hidden="true">#</a> 1.1.3 relfect.Kind</h3><p><code>relfect.Kind</code> \u8868\u793A\u7684\u662F\u79CD\u7C7B\u3002\u5728\u4F7F\u7528\u53CD\u5C04\u65F6\uFF0C\u9700\u8981\u7406\u89E3\u7C7B\u578B\uFF08Type\uFF09\u548C\u79CD\u7C7B\uFF08Kind\uFF09\u7684\u533A\u522B\u3002\u7F16\u7A0B\u4E2D\uFF0C\u4F7F\u7528\u6700\u591A\u7684\u662F\u7C7B\u578B\uFF0C\u4F46\u5728\u53CD\u5C04\u4E2D\uFF0C\u5F53\u9700\u8981\u533A\u5206\u4E00\u4E2A\u5927\u54C1\u79CD\u7684\u7C7B\u578B\u65F6\uFF0C\u5C31\u4F1A\u7528\u5230\u79CD\u7C7B\uFF08Kind\uFF09\u3002</p><p>Go \u8BED\u8A00\u7A0B\u5E8F\u4E2D\u7684\u7C7B\u578B\uFF08Type\uFF09\u6307\u7684\u662F\u7CFB\u7EDF\u539F\u751F\u6570\u636E\u7C7B\u578B\uFF0C\u5982 <code>int</code> \u3001 <code>string</code> \u3001 <code>bool</code> \u3001 <code>float32</code> \u7B49\u7C7B\u578B\uFF0C\u4EE5\u53CA\u4F7F\u7528 <code>type</code> \u5173\u952E\u5B57\u5B9A\u4E49\u7684\u7C7B\u578B\uFF0C\u8FD9\u4E9B\u7C7B\u578B\u7684\u540D\u79F0\u5C31\u662F\u5176\u7C7B\u578B\u672C\u8EAB\u7684\u540D\u79F0\u3002\u4F8B\u5982\u4F7F\u7528 <code>type A struct{}</code> \u5B9A\u4E49\u7ED3\u6784\u4F53\u65F6\uFF0C<code>A</code> \u5C31\u662F <code>struct{}</code> \u7684\u7C7B\u578B\u3002</p><p>\u79CD\u7C7B\uFF08Kind\uFF09\u6307\u7684\u662F\u5BF9\u8C61\u5F52\u5C5E\u7684\u54C1\u79CD\uFF0C\u5728 <code>reflect</code> \u5305\u4E2D\u6709\u5982\u4E0B\u5B9A\u4E49\uFF1A</p><div class="language-GO ext-GO"><pre class="language-GO"><code>
// A Kind represents the specific kind of type that a Type represents.
// The zero Kind is not a valid kind.
type Kind uint

const (
    Invalid Kind = iota
    Bool
    Int
    Int8
    Int16
    Int32
    Int64
    Uint
    Uint8
    Uint16
    Uint32
    Uint64
    Uintptr
    Float32
    Float64
    Complex64
    Complex128
    Array
    Chan
    Func
    Interface
    Map
    Ptr
    Slice
    String
    Struct
    UnsafePointer
)
</code></pre></div><p>\u901A\u8FC7\u4E0B\u9762\u8FD9\u4E2A\u7A0B\u5E8F\uFF0C\u76F8\u4FE1\u4F60\u4F1A\u5F88\u5BB9\u6613\u660E\u767D\u8FD9\u4E24\u8005\u7684\u533A\u522B\uFF1A</p><div class="language-GO ext-GO"><pre class="language-GO"><code>
package main

import (
    &quot;fmt&quot;
    &quot;reflect&quot;
)

func reflectType(x interface{}) {
    typeX := reflect.TypeOf(x)
    fmt.Println(typeX.Kind()) // struct
    fmt.Println(typeX)        // main.book
}

type book struct {
}

func main() {
    var b book
    reflectType(b)
}
</code></pre></div><h3 id="_1-1-4-relfect-numfield" tabindex="-1"><a class="header-anchor" href="#_1-1-4-relfect-numfield" aria-hidden="true">#</a> 1.1.4 relfect.NumField()</h3><p><code>relfect.NumField()</code> \u65B9\u6CD5\u8FD4\u56DE\u7ED3\u6784\u4F53\u4E2D\u5B57\u6BB5\u7684\u6570\u91CF\u3002</p><div class="language-GO ext-GO"><pre class="language-GO"><code>
package main

import (
    &quot;fmt&quot;
    &quot;reflect&quot;
)

func reflectNumField(x interface{}) {
    // \u68C0\u67E5 x \u7684\u7C7B\u522B\u662F struct
    if reflect.ValueOf(x).Kind() == reflect.Struct {
        v := reflect.ValueOf(x)
        fmt.Println(&quot;Number of fields&quot;, v.NumField())
    }
}

type book struct {
    name string
    spend  int
}

func main() {
    var b book
    reflectNumField(b)
}
</code></pre></div><h3 id="_1-1-5-relfect-field" tabindex="-1"><a class="header-anchor" href="#_1-1-5-relfect-field" aria-hidden="true">#</a> 1.1.5 relfect.Field()</h3><p><code>relfect.Field(i int)</code> \u65B9\u6CD5\u8FD4\u56DE\u5B57\u6BB5 <code>i</code> \u7684 <code>reflect.Value</code> \u3002</p><div class="language-GO ext-GO"><pre class="language-GO"><code>
package main

import (
    &quot;fmt&quot;
    &quot;reflect&quot;
)

func reflectNumField(x interface{}) {
    // \u68C0\u67E5 x \u7684\u7C7B\u522B\u662F struct
    if reflect.ValueOf(x).Kind() == reflect.Struct {
        v := reflect.ValueOf(x)
        fmt.Println(&quot;Number of fields&quot;, v.NumField())
        for i := 0; i &lt; v.NumField(); i++ {
            fmt.Printf(&quot;Field:%d type:%T value:%v\\n&quot;, i, v.Field(i), v.Field(i))
        }
    }
}

type book struct {
    name string
    spend  int
}

func main() {
    var b = book{&quot;\u300AGo\u8BED\u8A00\u6781\u7B80\u4E00\u672C\u901A\u300B&quot;, 8}
    reflectNumField(a)
}
</code></pre></div><h2 id="_1-2-\u53CD\u5C04\u7684\u4E09\u5927\u5B9A\u5F8B" tabindex="-1"><a class="header-anchor" href="#_1-2-\u53CD\u5C04\u7684\u4E09\u5927\u5B9A\u5F8B" aria-hidden="true">#</a> 1.2 \u53CD\u5C04\u7684\u4E09\u5927\u5B9A\u5F8B</h2><p>\u4E4B\u524D\u5728 <code>\u9759\u6001\u7C7B\u578B\u4E0E\u52A8\u6001\u7C7B\u578B</code>\u7AE0\u8282\u4E2D\u8BB2\u8FC7\uFF0C\u4E00\u4E2A\u63A5\u53E3\u53D8\u91CF\uFF0C\u5B9E\u9645\u4E0A\u90FD\u662F\u7531\u4E00 <code>pair</code> \u5BF9\uFF08type \u548C data\uFF09\u7EC4\u5408\u800C\u6210\uFF0Cpair \u5BF9\u4E2D\u8BB0\u5F55\u7740\u5B9E\u9645\u53D8\u91CF\u7684\u503C\u548C\u7C7B\u578B\u3002\u4E5F\u5C31\u662F\u8BF4\u5728\u771F\u5B9E\u4E16\u754C\uFF08\u53CD\u5C04\u524D\u73AF\u5883\uFF09\u91CC\uFF0Ctype \u548C value \u662F\u5408\u5E76\u5728\u4E00\u8D77\u7EC4\u6210\u63A5\u53E3\u53D8\u91CF\u7684\u3002</p><p>\u800C\u5728\u53CD\u5C04\u7684\u4E16\u754C\uFF08\u53CD\u5C04\u540E\u7684\u73AF\u5883\uFF09\u91CC\uFF0Ctype \u548C data \u5374\u662F\u5206\u5F00\u7684\uFF0C\u4ED6\u4EEC\u5206\u522B\u7531 <code>reflect.Type</code> \u548C <code>reflect.Value</code> \u6765\u8868\u73B0\u3002</p><p>Go \u8BED\u8A00\u91CC\u6709\u53CD\u5C04\u4E09\u5B9A\u5F8B\uFF0C\u662F\u4F60\u5728\u5B66\u4E60\u53CD\u5C04\u65F6\uFF0C\u5F88\u91CD\u8981\u7684\u53C2\u8003\uFF1A</p><ol><li>Reflection goes from interface value to reflection object.</li><li>Reflection goes from reflection object to interface value.</li><li>To modify a reflection object, the value must be settable.</li></ol><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u5C31\u6765\u8BB2\u4E00\u8BB2\u53CD\u5C04\u4E09\u5927\u5B9A\u5F8B\u3002</p><h3 id="_1-2-1-\u53CD\u5C04\u7B2C\u4E00\u5B9A\u5F8B" tabindex="-1"><a class="header-anchor" href="#_1-2-1-\u53CD\u5C04\u7B2C\u4E00\u5B9A\u5F8B" aria-hidden="true">#</a> 1.2.1 \u53CD\u5C04\u7B2C\u4E00\u5B9A\u5F8B</h3><blockquote><p>Reflection goes from interface value to reflection object.</p></blockquote><p>\u53CD\u5C04\u7B2C\u4E00\u5B9A\u5F8B\uFF1A\u53CD\u5C04\u53EF\u4EE5\u5C06\u201C\u63A5\u53E3\u7C7B\u578B\u53D8\u91CF\u201D\u8F6C\u6362\u4E3A\u201C\u53CD\u5C04\u7C7B\u578B\u5BF9\u8C61\u201D\u3002</p><p>\u8FD9\u91CC\u53CD\u5C04\u7C7B\u578B\u6307 <code>reflect.Type</code> \u548C <code>reflect.Value</code> \u3002</p><p>\u901A\u8FC7\u4E4B\u524D\u6211\u4EEC\u8BB2\u8FC7\u7684 <code>reflect.TypeOf()</code> \u65B9\u6CD5\u548C <code>reflect.ValueOf()</code> \u65B9\u6CD5\u53EF\u4EE5\u5206\u522B\u83B7\u5F97\u63A5\u53E3\u503C\u7684\u7C7B\u578B\u548C\u63A5\u53E3\u503C\u7684\u503C\u3002\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u8FD4\u56DE\u7684\u5BF9\u8C61\uFF0C\u6211\u4EEC\u79F0\u4E4B\u4E3A\u53CD\u5C04\u5BF9\u8C61\u3002</p><div class="language-GO ext-GO"><pre class="language-GO"><code>
package main

import (
    &quot;fmt&quot;
    &quot;reflect&quot;
)

func main() {
    var a interface{} = 3.14
    fmt.Printf(&quot;\u63A5\u53E3\u53D8\u91CF\u7684\u7C7B\u578B\u4E3A %T \uFF0C\u503C\u4E3A %v\\n&quot;, a, a)
    t := reflect.TypeOf(a)
    v := reflect.ValueOf(a)
    fmt.Printf(&quot;\u4ECE\u63A5\u53E3\u53D8\u91CF\u5230\u53CD\u5C04\u5BF9\u8C61\uFF1AType\u5BF9\u8C61\u7C7B\u578B\u4E3A %T\\n&quot;, t)
    fmt.Printf(&quot;\u4ECE\u63A5\u53E3\u53D8\u91CF\u5230\u53CD\u5C04\u5BF9\u8C61\uFF1AValue\u5BF9\u8C61\u7C7B\u578B\u4E3A %T\\n&quot;, v)
}
</code></pre></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u4F7F\u7528 <code>reflect.TypeOf()</code> \u548C <code>reflect.ValueOf()</code> \u65B9\u6CD5\u5B8C\u6210\u4E86\u4ECE\u63A5\u53E3\u7C7B\u578B\u53D8\u91CF\u5230\u53CD\u5C04\u5BF9\u8C61\u7684\u8F6C\u6362\u3002\u5728\u8FD9\u91CC\u8BF4\u63A5\u53E3\u7C7B\u578B\u662F\u56E0\u4E3A <code>TypeOf</code> \u548C <code>ValueOf</code> \u4E24\u4E2A\u51FD\u6570\u63A5\u6536\u7684\u662F <code>interface{}</code> \u7A7A\u63A5\u53E3\u7C7B\u578B\uFF0C Go \u8BED\u8A00\u51FD\u6570\u90FD\u662F\u503C\u4F20\u9012\uFF0C\u4F1A\u5C06\u7C7B\u578B\u9690\u5F0F\u8F6C\u6362\u6210\u63A5\u53E3\u7C7B\u578B\u3002</p><h3 id="_1-2-2-\u53CD\u5C04\u7B2C\u4E8C\u5B9A\u5F8B" tabindex="-1"><a class="header-anchor" href="#_1-2-2-\u53CD\u5C04\u7B2C\u4E8C\u5B9A\u5F8B" aria-hidden="true">#</a> 1.2.2 \u53CD\u5C04\u7B2C\u4E8C\u5B9A\u5F8B</h3><blockquote><p>Reflection goes from reflection object to interface value.</p></blockquote><p>\u53CD\u5C04\u7B2C\u4E8C\u5B9A\u5F8B\uFF1A\u53CD\u5C04\u53EF\u4EE5\u5C06\u201C\u53CD\u5C04\u7C7B\u578B\u5BF9\u8C61\u201D\u8F6C\u6362\u4E3A\u201C\u63A5\u53E3\u7C7B\u578B\u53D8\u91CF\u201D</p><p>\u7B2C\u4E8C\u5B9A\u5F8B\u521A\u597D\u548C\u7B2C\u4E00\u5B9A\u5F8B\u76F8\u53CD\uFF0C\u7B2C\u4E00\u5B9A\u5F8B\u8BB2\u7684\u662F\u4ECE\u63A5\u53E3\u53D8\u91CF\u5230\u53CD\u5C04\u5BF9\u8C61\u7684\u8F6C\u6362\uFF0C\u800C\u7B2C\u4E8C\u5B9A\u5F8B\u8BB2\u7684\u662F\u4ECE\u53CD\u5C04\u5BF9\u8C61\u5230\u63A5\u53E3\u53D8\u91CF\u7684\u8F6C\u6362\u3002</p><p>\u4E00\u4E2A <code>reflect.Value</code> \u7C7B\u578B\u7684\u53D8\u91CF\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 <code>Interface</code> \u65B9\u6CD5\u6062\u590D\u5176\u63A5\u53E3\u7C7B\u578B\u7684\u503C\u3002\u4E8B\u5B9E\u4E0A\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u4F1A\u628A <code>type</code> \u548C <code>value</code> \u4FE1\u606F\u6253\u5305\u5E76\u586B\u5145\u5230\u4E00\u4E2A\u63A5\u53E3\u53D8\u91CF\u4E2D\uFF0C\u7136\u540E\u8FD4\u56DE\u3002</p><p>\u5176\u51FD\u6570\u58F0\u660E\u5982\u4E0B\uFF1A</p><div class="language-GO ext-GO"><pre class="language-GO"><code>
// Interface returns v&#39;s current value as an interface{}.
// It is equivalent to:
//    var i interface{} = (v&#39;s underlying value)
// It panics if the Value was obtained by accessing
// unexported struct fields.
func (v Value) Interface() (i interface{}) {
    return valueInterface(v, true)
}
</code></pre></div><p>\u6700\u540E\u8F6C\u6362\u540E\u7684\u5BF9\u8C61\u9759\u6001\u7C7B\u578B\u4E3A <code>interface{}</code>\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u7C7B\u578B\u65AD\u8A00\u8F6C\u6362\u4E3A\u539F\u59CB\u7C7B\u578B\u3002</p><div class="language-GO ext-GO"><pre class="language-GO"><code>
package main

import (
    &quot;fmt&quot;
    &quot;reflect&quot;
)

func main() {
    var a interface{} = 3.14

    fmt.Printf(&quot;\u63A5\u53E3\u53D8\u91CF\u7684\u7C7B\u578B\u4E3A %T \uFF0C\u503C\u4E3A %v\\n&quot;, a, a)

    t := reflect.TypeOf(a)
    v := reflect.ValueOf(a)

    // \u53CD\u5C04\u7B2C\u4E00\u5B9A\u5F8B
    fmt.Printf(&quot;\u4ECE\u63A5\u53E3\u53D8\u91CF\u5230\u53CD\u5C04\u5BF9\u8C61\uFF1AType\u5BF9\u8C61\u7C7B\u578B\u4E3A %T\\n&quot;, t)
    fmt.Printf(&quot;\u4ECE\u63A5\u53E3\u53D8\u91CF\u5230\u53CD\u5C04\u5BF9\u8C61\uFF1AValue\u5BF9\u8C61\u7C7B\u578B\u4E3A %T\\n&quot;, v)

    // \u53CD\u5C04\u7B2C\u4E8C\u5B9A\u5F8B
    i := v.Interface()
    fmt.Printf(&quot;\u4ECE\u53CD\u5C04\u5BF9\u8C61\u5230\u63A5\u53E3\u53D8\u91CF\uFF1A\u5BF9\u8C61\u7C7B\u578B\u4E3A %T\uFF0C\u503C\u4E3A %v\\n&quot;, i, i)
    // \u4F7F\u7528\u7C7B\u578B\u65AD\u8A00\u8FDB\u884C\u8F6C\u6362
    x := v.Interface().(float64)
    fmt.Printf(&quot;x \u7C7B\u578B\u4E3A %T\uFF0C\u503C\u4E3A %v\\n&quot;, x, x)
}
</code></pre></div><h3 id="_1-2-3-\u53CD\u5C04\u7B2C\u4E09\u5B9A\u5F8B" tabindex="-1"><a class="header-anchor" href="#_1-2-3-\u53CD\u5C04\u7B2C\u4E09\u5B9A\u5F8B" aria-hidden="true">#</a> 1.2.3 \u53CD\u5C04\u7B2C\u4E09\u5B9A\u5F8B</h3><blockquote><p>To modify a reflection object, the value must be settable.</p></blockquote><p>\u53CD\u5C04\u7B2C\u4E09\u5B9A\u5F8B\uFF1A\u5982\u679C\u8981\u4FEE\u6539\u201C\u53CD\u5C04\u7C7B\u578B\u5BF9\u8C61\u201D\u5176\u503C\u5FC5\u987B\u662F\u201C\u53EF\u5199\u7684\u201D</p><p>\u6211\u4EEC\u9996\u5148\u6765\u770B\u4E00\u770B\u4E0B\u9762\u8FD9\u6BB5\u4EE3\u7801\uFF1A</p><div class="language-GO ext-GO"><pre class="language-GO"><code>
package main

import &quot;reflect&quot;

func main() {
    var a float64 = 3.14
    v := reflect.ValueOf(a)
    v.SetFloat(2.1)
}
</code></pre></div><p>\u8FD0\u884C\u8BE5\u4EE3\u7801\u6BB5\u5C06\u4F1A\u629B\u51FA\u5F02\u5E38\uFF1A</p><div class="language-GO ext-GO"><pre class="language-GO"><code>
panic: reflect: reflect.Value.SetFloat using unaddressable value
</code></pre></div><p>\u8FD9\u91CC\u4F60\u53EF\u80FD\u4F1A\u7591\u60D1\uFF0C\u4E3A\u4EC0\u4E48\u8FD9\u91CC\u4F1A\u629B\u51FA\u5BFB\u5740\u7684\u5F02\u5E38\uFF0C\u5176\u5B9E\u662F\u56E0\u4E3A\u8FD9\u91CC\u7684\u53D8\u91CF <code>v</code> \u662F\u201C\u4E0D\u53EF\u5199\u7684\u201D\u3002<code>settable</code>\uFF08\u201C\u53EF\u5199\u6027\u201D\uFF09\u662F\u53CD\u5C04\u7C7B\u578B\u53D8\u91CF\u7684\u4E00\u4E2A\u5C5E\u6027\uFF0C\u4F46\u4E5F\u4E0D\u662F\u8BF4\u6240\u6709\u7684\u53CD\u5C04\u7C7B\u578B\u53D8\u91CF\u90FD\u6709\u8FD9\u4E2A\u5C5E\u6027\u3002</p><p>\u8981\u60F3\u77E5\u9053\u4E00\u4E2A <code>reflect.Value</code> \u7C7B\u578B\u53D8\u91CF\u7684\u201C\u53EF\u5199\u6027\u201D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 <code>CanSet</code> \u65B9\u6CD5\u6765\u8FDB\u884C\u68C0\u67E5\uFF1A</p><div class="language-GO ext-GO"><pre class="language-GO"><code>
package main

import (
    &quot;fmt&quot;
    &quot;reflect&quot;
)

func main() {
    var a float64 = 3.14
    v := reflect.ValueOf(a)
    fmt.Println(&quot;\u662F\u5426\u53EF\u5199:&quot;, v.CanSet())
}
</code></pre></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u6211\u4EEC\u8FD9\u4E2A\u53D8\u91CF <code>v</code> \u662F\u4E0D\u53EF\u5199\u7684\u3002\u5BF9\u4E8E\u4E00\u4E2A\u4E0D\u53EF\u5199\u7684\u53D8\u91CF\uFF0C\u4F7F\u7528 <code>Set</code> \u65B9\u6CD5\u4F1A\u62A5\u9519\u3002\u8FD9\u91CC\u5B9E\u8D28\u4E0A\u8FD8\u662F Go \u8BED\u8A00\u91CC\u7684\u51FD\u6570\u90FD\u662F\u503C\u4F20\u9012\u95EE\u9898\uFF0C\u60F3\u8C61\u4E00\u4E0B\u8FD9\u91CC\u4F20\u9012\u7ED9 <code>reflect.ValueOf</code> \u51FD\u6570\u7684\u662F\u53D8\u91CF <code>a</code> \u7684\u4E00\u4E2A\u62F7\u8D1D\uFF0C\u800C\u975E <code>a</code> \u672C\u8EAB\uFF0C\u6240\u4EE5\u5982\u679C\u5BF9\u53CD\u5C04\u5BF9\u8C61\u8FDB\u884C\u66F4\u65B0\uFF0C\u5176\u539F\u59CB\u53D8\u91CF <code>a</code> \u6839\u672C\u4E0D\u4F1A\u53D7\u5230\u5F71\u54CD\uFF0C\u6240\u4EE5\u662F\u4E0D\u5408\u6CD5\u7684\uFF0C\u201C\u53EF\u5199\u6027\u201D\u5C31\u662F\u4E3A\u4E86\u907F\u514D\u8FD9\u4E2A\u95EE\u9898\u800C\u8BBE\u8BA1\u51FA\u6765\u7684\u3002</p><p>\u6240\u4EE5\uFF0C\u8981\u8BA9\u53CD\u5C04\u5BF9\u8C61\u5177\u5907\u201C\u53EF\u5199\u6027\u201D\uFF0C\u4E00\u5B9A\u8981\u6CE8\u610F\u521B\u5EFA\u53CD\u5C04\u5BF9\u8C61\u65F6\u8981\u4F20\u5165\u53D8\u91CF\u7684\u6307\u9488\uFF0C\u4E8E\u662F\u4E4E\u6211\u4EEC\u4FEE\u6539\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-GO ext-GO"><pre class="language-GO"><code>
package main

import (
    &quot;fmt&quot;
    &quot;reflect&quot;
)

func main() {
    var a float64 = 3.14
    v := reflect.ValueOf(&amp;a)
    fmt.Println(&quot;\u662F\u5426\u53EF\u5199:&quot;, v.CanSet())
}
</code></pre></div><p>\u4F46\u8FD0\u884C\u8BE5\u7A0B\u5E8F\u8FD8\u662F\u4F1A\u8F93\u51FA\u4E0D\u53EF\u5199\uFF0C\u56E0\u4E3A\u4E8B\u5B9E\u4E0A\u6211\u4EEC\u8FD9\u91CC\u8981\u4FEE\u6539\u7684\u662F\u8BE5\u6307\u9488\u6307\u5411\u7684\u6570\u636E\uFF0C\u4F7F\u7528\u8FD8\u8981\u4F7F\u7528 <code>Value</code> \u7C7B\u578B\u7684 <code>Elem()</code> \u65B9\u6CD5\uFF0C\u5BF9\u6307\u9488\u8FDB\u884C\u201C\u89E3\u5F15\u7528\u201D\uFF0C\u8BE5\u65B9\u6CD5\u8FD4\u56DE\u6307\u9488\u6307\u5411\u7684\u6570\u636E\u3002</p><div class="language-GO ext-GO"><pre class="language-GO"><code>
package main

import (
    &quot;fmt&quot;
    &quot;reflect&quot;
)

func main() {
    var a float64 = 3.14
    v := reflect.ValueOf(&amp;a).Elem()
    fmt.Println(&quot;\u662F\u5426\u53EF\u5199:&quot;, v.CanSet())

    v.SetFloat(2)
    fmt.Println(v)
}
</code></pre></div>`,62),r=[o];function l(d,i){return n(),t("div",null,r)}var u=e(c,[["render",l],["__file","1-\u53CD\u5C04.html.vue"]]);export{u as default};
