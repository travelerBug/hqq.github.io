import{_ as n,o as a,c as s,e as t}from"./app.ad4da1a1.js";const o={},e=t(`<h1 id="\u7ED3\u6784\u4F53\u91CC\u7684-tag-\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784\u4F53\u91CC\u7684-tag-\u6807\u7B7E" aria-hidden="true">#</a> \u7ED3\u6784\u4F53\u91CC\u7684 Tag \u6807\u7B7E</h1><hr><p>\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u5B9A\u4E49\u7ED3\u6784\u4F53\u6BCF\u4E2A\u5B57\u6BB5\u90FD\u662F\u7531\u5B57\u6BB5\u540D\u5B57\u4EE5\u53CA\u5B57\u6BB5\u7684\u7C7B\u578B\u6784\u6210\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-GO ext-GO"><pre class="language-GO"><code>type Book struct {
    Name   string
    Target string
    Spend  int
}
</code></pre></div><h2 id="tag-\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#tag-\u7684\u4F7F\u7528" aria-hidden="true">#</a> Tag \u7684\u4F7F\u7528</h2><p>\u5728\u5B57\u6BB5\u4E0A\u589E\u52A0\u4E00\u4E2A\u5C5E\u6027\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u662F\u7528\u53CD\u5F15\u53F7\u62EC\u8D77\u6765\u7684\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u6211\u4EEC\u79F0\u4E4B\u4E3A <strong>Tag(\u6807\u7B7E)</strong> \u3002\u4F8B\u5982\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name   <span class="token builtin">string</span> <span class="token string">\`json:&quot;name&quot;\`</span>
    Target <span class="token builtin">string</span> <span class="token string">\`json:&quot;target&quot;\`</span>
    Spend  <span class="token builtin">int</span>    <span class="token string">\`json:&quot;spend,omitempty&quot;\`</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u7ED3\u6784\u4F53\u7684 <code>Tag</code> \u53EF\u4EE5\u662F\u4EFB\u610F\u7684\u5B57\u7B26\u4E32\u9762\u503C\uFF0C\u4F46\u662F\u901A\u5E38\u662F\u4E00\u7CFB\u5217\u7528\u7A7A\u683C\u5206\u9694\u7684 <code>key:&quot;value&quot;</code> \u952E\u503C\u5BF9\u5E8F\u5217\uFF1B\u56E0\u4E3A\u503C\u4E2D\u542B\u6709\u53CC\u5F15\u53F7\u5B57\u7B26\uFF0C\u56E0\u6B64\u6210\u5458 <code>Tag</code> \u4E00\u822C\u7528\u539F\u751F\u5B57\u7B26\u4E32\u9762\u503C\u7684\u5F62\u5F0F\u4E66\u5199\u3002\u4E00\u822C\u6211\u4EEC\u5E38\u7528\u5728 <code>JSON</code> \u7684\u6570\u636E\u5904\u7406\u65B9\u9762\u3002</p><p><code>json</code> \u5F00\u5934\u952E\u540D\u5BF9\u5E94\u7684\u503C\u7528\u4E8E\u63A7\u5236 <strong>encoding/json</strong> \u5305\u7684\u7F16\u7801\u548C\u89E3\u7801\u7684\u884C\u4E3A\uFF0C\u5E76\u4E14 <strong>encoding/\u2026</strong> \u4E0B\u9762\u5176\u5B83\u7684\u5305\u4E5F\u9075\u5FAA\u8FD9\u4E2A\u7EA6\u5B9A\u3002<code>Tag</code> \u4E2D <code>json</code> \u5BF9\u5E94\u503C\u7684\u7B2C\u4E00\u90E8\u5206\u7528\u4E8E\u6307\u5B9A <code>JSON</code> \u5BF9\u8C61\u7684\u540D\u5B57\uFF0C\u6BD4\u5982\u5C06 Go \u8BED\u8A00\u4E2D\u7684 <code>TotalCount</code> \u6210\u5458\u5BF9\u5E94\u5230 <code>JSON</code> \u4E2D\u7684 <code>total_count</code> \u5BF9\u8C61\u3002</p><p>\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D <code>gender</code> \u5B57\u6BB5\u7684 <code>Tag</code> \u8FD8\u5E26\u4E86\u4E00\u4E2A\u989D\u5916\u7684 <code>omitempty</code> \u9009\u9879\uFF0C\u8868\u793A\u5F53 Go \u8BED\u8A00\u7ED3\u6784\u4F53\u6210\u5458\u4E3A\u7A7A\u6216\u96F6\u503C\u65F6\u4E0D\u751F\u6210\u8BE5 <code>JSON</code> \u5BF9\u8C61\uFF08\u8FD9\u91CC <code>false</code> \u4E3A\u96F6\u503C\uFF09\u3002\u4F8B\u5982\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;encoding/json&quot;</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Book <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name   <span class="token builtin">string</span> <span class="token string">\`json:&quot;name&quot;\`</span>
    Target <span class="token builtin">string</span> <span class="token string">\`json:&quot;target&quot;\`</span>
    Spend  <span class="token builtin">int</span>    <span class="token string">\`json:&quot;spend,omitempty&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Book 1 without Spend</span>
    book1 <span class="token operator">:=</span> Book<span class="token punctuation">{</span>
        Name<span class="token punctuation">:</span> <span class="token string">&quot;Go\u8BED\u8A00\u5FAE\u670D\u52A1&quot;</span><span class="token punctuation">,</span>
        Target<span class="token punctuation">:</span>  <span class="token string">&quot;\u5168\u9762\u638C\u63E1Go\u8BED\u8A00&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u7ED3\u6784\u4F53\u8F6C\u4E3A JSON</span>
    data1<span class="token punctuation">,</span> err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>book1<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// book1 won&#39;t print Spend attribute</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s\\n&quot;</span><span class="token punctuation">,</span> data1<span class="token punctuation">)</span>

    <span class="token comment">// Book 2 have Gender attribute</span>
    book2 <span class="token operator">:=</span> Book<span class="token punctuation">{</span>
        Name<span class="token punctuation">:</span>   <span class="token string">&quot;Go\u8BED\u8A00\u5FAE\u670D\u52A1&quot;</span><span class="token punctuation">,</span>
        Target<span class="token punctuation">:</span>  <span class="token string">&quot;\u5168\u9762\u638C\u63E1Go\u8BED\u8A00&quot;</span><span class="token punctuation">,</span>
        Spend<span class="token punctuation">:</span>  <span class="token number">9</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
    <span class="token comment">// \u7ED3\u6784\u4F53\u8F6C\u4E3A JSON</span>
    data2<span class="token punctuation">,</span> err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>book2<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// person2 will print Gender attribute</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s\\n&quot;</span><span class="token punctuation">,</span> data2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u56E0\u4E3A <code>Spend</code> \u5B57\u6BB5\u91CC\u6709 <code>omitempty</code> \u5C5E\u6027\uFF0C\u56E0\u6B64 <strong>encoding/json</strong> \u5728\u5C06\u6B64\u7ED3\u6784\u4F53\u5BF9\u8C61\u8F6C\u5316\u4E3A <code>JSON</code> \u5B57\u7B26\u4E32\u65F6\uFF0C\u53D1\u73B0\u5BF9\u8C61\u91CC\u9762\u7684 <code>Spend</code> \u4E3A false \uFF0C 0 \uFF0C\u7A7A\u6307\u9488\uFF0C\u7A7A\u63A5\u53E3\uFF0C\u7A7A\u6570\u7EC4\uFF0C\u7A7A\u5207\u7247\uFF0C\u7A7A\u6620\u5C04\uFF0C\u7A7A\u5B57\u7B26\u4E32\u4E2D\u7684\u4E00\u79CD\uFF0C\u5C31\u4F1A\u88AB\u5FFD\u7565\u3002</p><h2 id="tag-\u7684\u83B7\u53D6" tabindex="-1"><a class="header-anchor" href="#tag-\u7684\u83B7\u53D6" aria-hidden="true">#</a> Tag \u7684\u83B7\u53D6</h2><p>Tag \u7684\u683C\u5F0F\u4E0A\u9762\u5DF2\u7ECF\u8BF4\u4E86\uFF0C\u5B83\u662F\u7531\u53CD\u5F15\u53F7\u62EC\u8D77\u6765\u7684\u4E00\u7CFB\u5217\u7528\u7A7A\u683C\u5206\u9694\u7684 <code>key:&quot;value&quot;</code> \u952E\u503C\u5BF9\u5E8F\u5217\uFF1A</p><div class="language-GO ext-GO"><pre class="language-GO"><code>\`key1:&quot;value1&quot; key2:&quot;value2&quot; key3:&quot;value3&quot;\`
</code></pre></div><p>\u90A3\u4E48\u6211\u4EEC\u5982\u4F55\u83B7\u53D6\u5230\u7ED3\u6784\u4F53\u4E2D\u7684 Tag \u5462\uFF1F\u8FD9\u91CC\u6211\u4EEC\u7528\u53CD\u5C04\u7684\u65B9\u6CD5\u3002</p><p>\u4F7F\u7528\u53CD\u5C04\u7684\u65B9\u6CD5\u83B7\u53D6 Tag \u6B65\u9AA4\u5982\u4E0B\uFF1A</p><ol><li>\u83B7\u53D6\u5B57\u6BB5</li><li>\u83B7\u53D6 Tag</li><li>\u83B7\u53D6\u952E\u503C\u5BF9</li></ol><p>\u5176\u4E2D\u83B7\u53D6\u5B57\u6BB5\u6709\u4E09\u79CD\u65B9\u5F0F\uFF0C\u800C\u83B7\u53D6\u952E\u503C\u5BF9\u6709\u4E24\u79CD\u65B9\u5F0F\u3002</p><div class="language-GO ext-GO"><pre class="language-GO"><code>// \u4E09\u79CD\u83B7\u53D6 field
field := reflect.TypeOf(obj).FieldByName(&quot;Name&quot;)
field := reflect.ValueOf(obj).Type().Field(i)  // i \u8868\u793A\u7B2C\u51E0\u4E2A\u5B57\u6BB5
field := reflect.ValueOf(&amp;obj).Elem().Type().Field(i)  // i \u8868\u793A\u7B2C\u51E0\u4E2A\u5B57\u6BB5

// \u83B7\u53D6 Tag
tag := field.Tag

// \u83B7\u53D6\u952E\u503C\u5BF9
labelValue := tag.Get(&quot;label&quot;)
labelValue,ok := tag.Lookup(&quot;label&quot;)
// Get \u5F53\u6CA1\u6709\u83B7\u53D6\u5230\u5BF9\u5E94 Tag \u7684\u5185\u5BB9\uFF0C\u4F1A\u8FD4\u56DE\u7A7A\u5B57\u7B26\u4E32
</code></pre></div><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u83B7\u53D6 Tag \u4EE5\u53CA\u952E\u503C\u5BF9\u7684\u4F8B\u5B50\uFF1A</p><div class="language-GO ext-GO"><pre class="language-GO"><code>
package main

import (
    &quot;fmt&quot;
    &quot;reflect&quot;
)

type Book struct {
    Name   string \`json:&quot;name&quot;\`
    Target string \`json:&quot;target&quot;\`
    Spend string \`json:&quot;spend,omitempty&quot;\`
}

func main() {
    p := reflect.TypeOf(Book{})
    name, _ := p.FieldByName(&quot;Name&quot;)
    tag := name.Tag
    fmt.Println(&quot;Name Tag :&quot;, tag)
    keyValue, _ := tag.Lookup(&quot;json&quot;)
    fmt.Println(&quot;key: json, value:&quot;, keyValue)
}
</code></pre></div>`,22),p=[e];function c(u,l){return a(),s("div",null,p)}var r=n(o,[["render",c],["__file","2-\u7ED3\u6784\u4F53\u91CC\u7684Tag\u6807\u7B7E.html.vue"]]);export{r as default};
