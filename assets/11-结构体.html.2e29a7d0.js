import{_ as n,o as s,c as a,e as t}from"./app.a047c15b.js";const p={},o=t(`<h1 id="_1-\u7ED3\u6784\u4F53" tabindex="-1"><a class="header-anchor" href="#_1-\u7ED3\u6784\u4F53" aria-hidden="true">#</a> 1. \u7ED3\u6784\u4F53</h1><p>Go\u8BED\u8A00\u4E2D\u6CA1\u6709\u201C\u7C7B\u201D\u7684\u6982\u5FF5\uFF0C\u4E5F\u4E0D\u652F\u6301\u201C\u7C7B\u201D\u7684\u7EE7\u627F\u7B49\u9762\u5411\u5BF9\u8C61\u7684\u6982\u5FF5\u3002Go\u8BED\u8A00\u4E2D\u901A\u8FC7\u7ED3\u6784\u4F53\u7684\u5185\u5D4C\u518D\u914D\u5408\u63A5\u53E3\u6BD4\u9762\u5411\u5BF9\u8C61\u5177\u6709\u66F4\u9AD8\u7684\u6269\u5C55\u6027\u548C\u7075\u6D3B\u6027\u3002</p><h2 id="_1-1-\u7C7B\u578B\u522B\u540D\u548C\u81EA\u5B9A\u4E49\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_1-1-\u7C7B\u578B\u522B\u540D\u548C\u81EA\u5B9A\u4E49\u7C7B\u578B" aria-hidden="true">#</a> 1.1. \u7C7B\u578B\u522B\u540D\u548C\u81EA\u5B9A\u4E49\u7C7B\u578B</h2><h3 id="_1-1-1-\u81EA\u5B9A\u4E49\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_1-1-1-\u81EA\u5B9A\u4E49\u7C7B\u578B" aria-hidden="true">#</a> 1.1.1. \u81EA\u5B9A\u4E49\u7C7B\u578B</h3><p>\u5728Go\u8BED\u8A00\u4E2D\u6709\u4E00\u4E9B\u57FA\u672C\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u5982string\u3001\u6574\u578B\u3001\u6D6E\u70B9\u578B\u3001\u5E03\u5C14\u7B49\u6570\u636E\u7C7B\u578B\uFF0CGo\u8BED\u8A00\u4E2D\u53EF\u4EE5\u4F7F\u7528type\u5173\u952E\u5B57\u6765\u5B9A\u4E49\u81EA\u5B9A\u4E49\u7C7B\u578B\u3002</p><p>\u81EA\u5B9A\u4E49\u7C7B\u578B\u662F\u5B9A\u4E49\u4E86\u4E00\u4E2A\u5168\u65B0\u7684\u7C7B\u578B\u3002\u6211\u4EEC\u53EF\u4EE5\u57FA\u4E8E\u5185\u7F6E\u7684\u57FA\u672C\u7C7B\u578B\u5B9A\u4E49\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7struct\u5B9A\u4E49\u3002\u4F8B\u5982\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    //\u5C06MyInt\u5B9A\u4E49\u4E3Aint\u7C7B\u578B
    type MyInt int
</code></pre></div><p>\u901A\u8FC7Type\u5173\u952E\u5B57\u7684\u5B9A\u4E49\uFF0CMyInt\u5C31\u662F\u4E00\u79CD\u65B0\u7684\u7C7B\u578B\uFF0C\u5B83\u5177\u6709int\u7684\u7279\u6027\u3002</p><h3 id="_1-1-2-\u7C7B\u578B\u522B\u540D" tabindex="-1"><a class="header-anchor" href="#_1-1-2-\u7C7B\u578B\u522B\u540D" aria-hidden="true">#</a> 1.1.2. \u7C7B\u578B\u522B\u540D</h3><p>\u7C7B\u578B\u522B\u540D\u662FGo1.9\u7248\u672C\u6DFB\u52A0\u7684\u65B0\u529F\u80FD\u3002</p><p>\u7C7B\u578B\u522B\u540D\u89C4\u5B9A\uFF1ATypeAlias\u53EA\u662FType\u7684\u522B\u540D\uFF0C\u672C\u8D28\u4E0ATypeAlias\u4E0EType\u662F\u540C\u4E00\u4E2A\u7C7B\u578B\u3002\u5C31\u50CF\u4E00\u4E2A\u5B69\u5B50\u5C0F\u65F6\u5019\u6709\u5C0F\u540D\u3001\u4E73\u540D\uFF0C\u4E0A\u5B66\u540E\u7528\u5B66\u540D\uFF0C\u82F1\u8BED\u8001\u5E08\u53C8\u4F1A\u7ED9\u4ED6\u8D77\u82F1\u6587\u540D\uFF0C\u4F46\u8FD9\u4E9B\u540D\u5B57\u90FD\u6307\u7684\u662F\u4ED6\u672C\u4EBA\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>    type TypeAlias = Type
</code></pre></div><p>\u6211\u4EEC\u4E4B\u524D\u89C1\u8FC7\u7684rune\u548Cbyte\u5C31\u662F\u7C7B\u578B\u522B\u540D\uFF0C\u4ED6\u4EEC\u7684\u5B9A\u4E49\u5982\u4E0B\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    type byte = uint8
    type rune = int32
</code></pre></div><h3 id="_1-1-3-\u7C7B\u578B\u5B9A\u4E49\u548C\u7C7B\u578B\u522B\u540D\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_1-1-3-\u7C7B\u578B\u5B9A\u4E49\u548C\u7C7B\u578B\u522B\u540D\u7684\u533A\u522B" aria-hidden="true">#</a> 1.1.3. \u7C7B\u578B\u5B9A\u4E49\u548C\u7C7B\u578B\u522B\u540D\u7684\u533A\u522B</h3><p>\u7C7B\u578B\u522B\u540D\u4E0E\u7C7B\u578B\u5B9A\u4E49\u8868\u9762\u4E0A\u770B\u53EA\u6709\u4E00\u4E2A\u7B49\u53F7\u7684\u5DEE\u5F02\uFF0C\u6211\u4EEC\u901A\u8FC7\u4E0B\u9762\u7684\u8FD9\u6BB5\u4EE3\u7801\u6765\u7406\u89E3\u5B83\u4EEC\u4E4B\u95F4\u7684\u533A\u522B\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token comment">//\u7C7B\u578B\u5B9A\u4E49</span>
<span class="token keyword">type</span> NewInt <span class="token builtin">int</span>

<span class="token comment">//\u7C7B\u578B\u522B\u540D</span>
<span class="token keyword">type</span> MyInt <span class="token operator">=</span> <span class="token builtin">int</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> a NewInt
    <span class="token keyword">var</span> b MyInt

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;type of a:%T\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span> <span class="token comment">//type of a:main.NewInt</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;type of b:%T\\n&quot;</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token comment">//type of b:int</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u7ED3\u679C\u663E\u793Aa\u7684\u7C7B\u578B\u662Fmain.NewInt\uFF0C\u8868\u793Amain\u5305\u4E0B\u5B9A\u4E49\u7684NewInt\u7C7B\u578B\u3002b\u7684\u7C7B\u578B\u662Fint\u3002MyInt\u7C7B\u578B\u53EA\u4F1A\u5728\u4EE3\u7801\u4E2D\u5B58\u5728\uFF0C\u7F16\u8BD1\u5B8C\u6210\u65F6\u5E76\u4E0D\u4F1A\u6709MyInt\u7C7B\u578B\u3002</p><h2 id="_1-2-\u7ED3\u6784\u4F53" tabindex="-1"><a class="header-anchor" href="#_1-2-\u7ED3\u6784\u4F53" aria-hidden="true">#</a> 1.2. \u7ED3\u6784\u4F53</h2><p>Go\u8BED\u8A00\u4E2D\u7684\u57FA\u7840\u6570\u636E\u7C7B\u578B\u53EF\u4EE5\u8868\u793A\u4E00\u4E9B\u4E8B\u7269\u7684\u57FA\u672C\u5C5E\u6027\uFF0C\u4F46\u662F\u5F53\u6211\u4EEC\u60F3\u8868\u8FBE\u4E00\u4E2A\u4E8B\u7269\u7684\u5168\u90E8\u6216\u90E8\u5206\u5C5E\u6027\u65F6\uFF0C\u8FD9\u65F6\u5019\u518D\u7528\u5355\u4E00\u7684\u57FA\u672C\u6570\u636E\u7C7B\u578B\u660E\u663E\u5C31\u65E0\u6CD5\u6EE1\u8DB3\u9700\u6C42\u4E86\uFF0CGo\u8BED\u8A00\u63D0\u4F9B\u4E86\u4E00\u79CD\u81EA\u5B9A\u4E49\u6570\u636E\u7C7B\u578B\uFF0C\u53EF\u4EE5\u5C01\u88C5\u591A\u4E2A\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF0C\u8FD9\u79CD\u6570\u636E\u7C7B\u578B\u53EB\u7ED3\u6784\u4F53\uFF0C\u82F1\u6587\u540D\u79F0struct\u3002 \u4E5F\u5C31\u662F\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7struct\u6765\u5B9A\u4E49\u81EA\u5DF1\u7684\u7C7B\u578B\u4E86\u3002</p><p>Go\u8BED\u8A00\u4E2D\u901A\u8FC7struct\u6765\u5B9E\u73B0\u9762\u5411\u5BF9\u8C61\u3002</p><h3 id="_1-2-1-\u7ED3\u6784\u4F53\u7684\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#_1-2-1-\u7ED3\u6784\u4F53\u7684\u5B9A\u4E49" aria-hidden="true">#</a> 1.2.1. \u7ED3\u6784\u4F53\u7684\u5B9A\u4E49</h3><p>\u4F7F\u7528type\u548Cstruct\u5173\u952E\u5B57\u6765\u5B9A\u4E49\u7ED3\u6784\u4F53\uFF0C\u5177\u4F53\u4EE3\u7801\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    type \u7C7B\u578B\u540D struct {
        \u5B57\u6BB5\u540D \u5B57\u6BB5\u7C7B\u578B
        \u5B57\u6BB5\u540D \u5B57\u6BB5\u7C7B\u578B
        \u2026
    }
</code></pre></div><p>\u5176\u4E2D\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    1.\u7C7B\u578B\u540D\uFF1A\u6807\u8BC6\u81EA\u5B9A\u4E49\u7ED3\u6784\u4F53\u7684\u540D\u79F0\uFF0C\u5728\u540C\u4E00\u4E2A\u5305\u5185\u4E0D\u80FD\u91CD\u590D\u3002
    2.\u5B57\u6BB5\u540D\uFF1A\u8868\u793A\u7ED3\u6784\u4F53\u5B57\u6BB5\u540D\u3002\u7ED3\u6784\u4F53\u4E2D\u7684\u5B57\u6BB5\u540D\u5FC5\u987B\u552F\u4E00\u3002
    3.\u5B57\u6BB5\u7C7B\u578B\uFF1A\u8868\u793A\u7ED3\u6784\u4F53\u5B57\u6BB5\u7684\u5177\u4F53\u7C7B\u578B\u3002
</code></pre></div><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u6211\u4EEC\u5B9A\u4E49\u4E00\u4E2APerson\uFF08\u4EBA\uFF09\u7ED3\u6784\u4F53\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    type person struct {
        name string
        city string
        age  int8
    }
</code></pre></div><p>\u540C\u6837\u7C7B\u578B\u7684\u5B57\u6BB5\u4E5F\u53EF\u4EE5\u5199\u5728\u4E00\u884C\uFF0C</p><div class="language-text ext-text"><pre class="language-text"><code>    type person1 struct {
        name, city string
        age        int8
    }
</code></pre></div><p>\u8FD9\u6837\u6211\u4EEC\u5C31\u62E5\u6709\u4E86\u4E00\u4E2Aperson\u7684\u81EA\u5B9A\u4E49\u7C7B\u578B\uFF0C\u5B83\u6709name\u3001city\u3001age\u4E09\u4E2A\u5B57\u6BB5\uFF0C\u5206\u522B\u8868\u793A\u59D3\u540D\u3001\u57CE\u5E02\u548C\u5E74\u9F84\u3002\u8FD9\u6837\u6211\u4EEC\u4F7F\u7528\u8FD9\u4E2Aperson\u7ED3\u6784\u4F53\u5C31\u80FD\u591F\u5F88\u65B9\u4FBF\u7684\u5728\u7A0B\u5E8F\u4E2D\u8868\u793A\u548C\u5B58\u50A8\u4EBA\u4FE1\u606F\u4E86\u3002</p><p>\u8BED\u8A00\u5185\u7F6E\u7684\u57FA\u7840\u6570\u636E\u7C7B\u578B\u662F\u7528\u6765\u63CF\u8FF0\u4E00\u4E2A\u503C\u7684\uFF0C\u800C\u7ED3\u6784\u4F53\u662F\u7528\u6765\u63CF\u8FF0\u4E00\u7EC4\u503C\u7684\u3002\u6BD4\u5982\u4E00\u4E2A\u4EBA\u6709\u540D\u5B57\u3001\u5E74\u9F84\u548C\u5C45\u4F4F\u57CE\u5E02\u7B49\uFF0C\u672C\u8D28\u4E0A\u662F\u4E00\u79CD\u805A\u5408\u578B\u7684\u6570\u636E\u7C7B\u578B</p><h3 id="_1-2-2-\u7ED3\u6784\u4F53\u5B9E\u4F8B\u5316" tabindex="-1"><a class="header-anchor" href="#_1-2-2-\u7ED3\u6784\u4F53\u5B9E\u4F8B\u5316" aria-hidden="true">#</a> 1.2.2. \u7ED3\u6784\u4F53\u5B9E\u4F8B\u5316</h3><p>\u53EA\u6709\u5F53\u7ED3\u6784\u4F53\u5B9E\u4F8B\u5316\u65F6\uFF0C\u624D\u4F1A\u771F\u6B63\u5730\u5206\u914D\u5185\u5B58\u3002\u4E5F\u5C31\u662F\u5FC5\u987B\u5B9E\u4F8B\u5316\u540E\u624D\u80FD\u4F7F\u7528\u7ED3\u6784\u4F53\u7684\u5B57\u6BB5\u3002</p><p>\u7ED3\u6784\u4F53\u672C\u8EAB\u4E5F\u662F\u4E00\u79CD\u7C7B\u578B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u50CF\u58F0\u660E\u5185\u7F6E\u7C7B\u578B\u4E00\u6837\u4F7F\u7528var\u5173\u952E\u5B57\u58F0\u660E\u7ED3\u6784\u4F53\u7C7B\u578B\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>    var \u7ED3\u6784\u4F53\u5B9E\u4F8B \u7ED3\u6784\u4F53\u7C7B\u578B
</code></pre></div><h3 id="_1-2-3-\u57FA\u672C\u5B9E\u4F8B\u5316" tabindex="-1"><a class="header-anchor" href="#_1-2-3-\u57FA\u672C\u5B9E\u4F8B\u5316" aria-hidden="true">#</a> 1.2.3. \u57FA\u672C\u5B9E\u4F8B\u5316</h3><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">type</span> person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
    city <span class="token builtin">string</span>
    age  <span class="token builtin">int8</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> p1 person
    p1<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;pprof.cn&quot;</span>
    p1<span class="token punctuation">.</span>city <span class="token operator">=</span> <span class="token string">&quot;\u5317\u4EAC&quot;</span>
    p1<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">18</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;p1=%v\\n&quot;</span><span class="token punctuation">,</span> p1<span class="token punctuation">)</span>  <span class="token comment">//p1={pprof.cn \u5317\u4EAC 18}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;p1=%#v\\n&quot;</span><span class="token punctuation">,</span> p1<span class="token punctuation">)</span> <span class="token comment">//p1=main.person{name:&quot;pprof.cn&quot;, city:&quot;\u5317\u4EAC&quot;, age:18}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6211\u4EEC\u901A\u8FC7.\u6765\u8BBF\u95EE\u7ED3\u6784\u4F53\u7684\u5B57\u6BB5\uFF08\u6210\u5458\u53D8\u91CF\uFF09,\u4F8B\u5982p1.name\u548Cp1.age\u7B49\u3002</p><h2 id="_1-3-\u533F\u540D\u7ED3\u6784\u4F53" tabindex="-1"><a class="header-anchor" href="#_1-3-\u533F\u540D\u7ED3\u6784\u4F53" aria-hidden="true">#</a> 1.3. \u533F\u540D\u7ED3\u6784\u4F53</h2><p>\u5728\u5B9A\u4E49\u4E00\u4E9B\u4E34\u65F6\u6570\u636E\u7ED3\u6784\u7B49\u573A\u666F\u4E0B\u8FD8\u53EF\u4EE5\u4F7F\u7528\u533F\u540D\u7ED3\u6784\u4F53\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> user <span class="token keyword">struct</span><span class="token punctuation">{</span>Name <span class="token builtin">string</span><span class="token punctuation">;</span> Age <span class="token builtin">int</span><span class="token punctuation">}</span>
    user<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">&quot;pprof.cn&quot;</span>
    user<span class="token punctuation">.</span>Age <span class="token operator">=</span> <span class="token number">18</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v\\n&quot;</span><span class="token punctuation">,</span> user<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_1-3-1-\u521B\u5EFA\u6307\u9488\u7C7B\u578B\u7ED3\u6784\u4F53" tabindex="-1"><a class="header-anchor" href="#_1-3-1-\u521B\u5EFA\u6307\u9488\u7C7B\u578B\u7ED3\u6784\u4F53" aria-hidden="true">#</a> 1.3.1. \u521B\u5EFA\u6307\u9488\u7C7B\u578B\u7ED3\u6784\u4F53</h3><p>\u6211\u4EEC\u8FD8\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528new\u5173\u952E\u5B57\u5BF9\u7ED3\u6784\u4F53\u8FDB\u884C\u5B9E\u4F8B\u5316\uFF0C\u5F97\u5230\u7684\u662F\u7ED3\u6784\u4F53\u7684\u5730\u5740\u3002 \u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    var p2 = new(person)
    fmt.Printf(&quot;%T\\n&quot;, p2)     //*main.person
    fmt.Printf(&quot;p2=%#v\\n&quot;, p2) //p2=&amp;main.person{name:&quot;&quot;, city:&quot;&quot;, age:0}
</code></pre></div><p>\u4ECE\u6253\u5370\u7684\u7ED3\u679C\u4E2D\u6211\u4EEC\u53EF\u4EE5\u770B\u51FAp2\u662F\u4E00\u4E2A\u7ED3\u6784\u4F53\u6307\u9488\u3002</p><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\u5728Go\u8BED\u8A00\u4E2D\u652F\u6301\u5BF9\u7ED3\u6784\u4F53\u6307\u9488\u76F4\u63A5\u4F7F\u7528.\u6765\u8BBF\u95EE\u7ED3\u6784\u4F53\u7684\u6210\u5458\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">var</span> p2 <span class="token operator">=</span> <span class="token function">new</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>
p2<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;\u6D4B\u8BD5&quot;</span>
p2<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">18</span>
p2<span class="token punctuation">.</span>city <span class="token operator">=</span> <span class="token string">&quot;\u5317\u4EAC&quot;</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;p2=%#v\\n&quot;</span><span class="token punctuation">,</span> p2<span class="token punctuation">)</span> <span class="token comment">//p2=&amp;main.person{name:&quot;\u6D4B\u8BD5&quot;, city:&quot;\u5317\u4EAC&quot;, age:18}</span>
</code></pre></div><h3 id="_1-3-2-\u53D6\u7ED3\u6784\u4F53\u7684\u5730\u5740\u5B9E\u4F8B\u5316" tabindex="-1"><a class="header-anchor" href="#_1-3-2-\u53D6\u7ED3\u6784\u4F53\u7684\u5730\u5740\u5B9E\u4F8B\u5316" aria-hidden="true">#</a> 1.3.2. \u53D6\u7ED3\u6784\u4F53\u7684\u5730\u5740\u5B9E\u4F8B\u5316</h3><p>\u4F7F\u7528&amp;\u5BF9\u7ED3\u6784\u4F53\u8FDB\u884C\u53D6\u5730\u5740\u64CD\u4F5C\u76F8\u5F53\u4E8E\u5BF9\u8BE5\u7ED3\u6784\u4F53\u7C7B\u578B\u8FDB\u884C\u4E86\u4E00\u6B21new\u5B9E\u4F8B\u5316\u64CD\u4F5C\u3002</p><div class="language-go ext-go"><pre class="language-go"><code>p3 <span class="token operator">:=</span> <span class="token operator">&amp;</span>person<span class="token punctuation">{</span><span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%T\\n&quot;</span><span class="token punctuation">,</span> p3<span class="token punctuation">)</span>     <span class="token comment">//*main.person</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;p3=%#v\\n&quot;</span><span class="token punctuation">,</span> p3<span class="token punctuation">)</span> <span class="token comment">//p3=&amp;main.person{name:&quot;&quot;, city:&quot;&quot;, age:0}</span>
p3<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;\u535A\u5BA2&quot;</span>
p3<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">30</span>
p3<span class="token punctuation">.</span>city <span class="token operator">=</span> <span class="token string">&quot;\u6210\u90FD&quot;</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;p3=%#v\\n&quot;</span><span class="token punctuation">,</span> p3<span class="token punctuation">)</span> <span class="token comment">//p3=&amp;main.person{name:&quot;\u535A\u5BA2&quot;, city:&quot;\u6210\u90FD&quot;, age:30}</span>
</code></pre></div><p>p3.name = &quot;\u535A\u5BA2&quot;\u5176\u5B9E\u5728\u5E95\u5C42\u662F(*p3).name = &quot;\u535A\u5BA2&quot;\uFF0C\u8FD9\u662FGo\u8BED\u8A00\u5E2E\u6211\u4EEC\u5B9E\u73B0\u7684\u8BED\u6CD5\u7CD6\u3002</p><h3 id="_1-3-3-\u7ED3\u6784\u4F53\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#_1-3-3-\u7ED3\u6784\u4F53\u521D\u59CB\u5316" aria-hidden="true">#</a> 1.3.3. \u7ED3\u6784\u4F53\u521D\u59CB\u5316</h3><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">type</span> person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
    city <span class="token builtin">string</span>
    age  <span class="token builtin">int8</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> p4 person
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;p4=%#v\\n&quot;</span><span class="token punctuation">,</span> p4<span class="token punctuation">)</span> <span class="token comment">//p4=main.person{name:&quot;&quot;, city:&quot;&quot;, age:0}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_1-3-4-\u4F7F\u7528\u952E\u503C\u5BF9\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#_1-3-4-\u4F7F\u7528\u952E\u503C\u5BF9\u521D\u59CB\u5316" aria-hidden="true">#</a> 1.3.4. \u4F7F\u7528\u952E\u503C\u5BF9\u521D\u59CB\u5316</h3><p>\u4F7F\u7528\u952E\u503C\u5BF9\u5BF9\u7ED3\u6784\u4F53\u8FDB\u884C\u521D\u59CB\u5316\u65F6\uFF0C\u952E\u5BF9\u5E94\u7ED3\u6784\u4F53\u7684\u5B57\u6BB5\uFF0C\u503C\u5BF9\u5E94\u8BE5\u5B57\u6BB5\u7684\u521D\u59CB\u503C\u3002</p><div class="language-go ext-go"><pre class="language-go"><code>p5 <span class="token operator">:=</span> person<span class="token punctuation">{</span>
    name<span class="token punctuation">:</span> <span class="token string">&quot;pprof.cn&quot;</span><span class="token punctuation">,</span>
    city<span class="token punctuation">:</span> <span class="token string">&quot;\u5317\u4EAC&quot;</span><span class="token punctuation">,</span>
    age<span class="token punctuation">:</span>  <span class="token number">18</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;p5=%#v\\n&quot;</span><span class="token punctuation">,</span> p5<span class="token punctuation">)</span> <span class="token comment">//p5=main.person{name:&quot;pprof.cn&quot;, city:&quot;\u5317\u4EAC&quot;, age:18}</span>
</code></pre></div><p>\u4E5F\u53EF\u4EE5\u5BF9\u7ED3\u6784\u4F53\u6307\u9488\u8FDB\u884C\u952E\u503C\u5BF9\u521D\u59CB\u5316\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code>p6 <span class="token operator">:=</span> <span class="token operator">&amp;</span>person<span class="token punctuation">{</span>
    name<span class="token punctuation">:</span> <span class="token string">&quot;pprof.cn&quot;</span><span class="token punctuation">,</span>
    city<span class="token punctuation">:</span> <span class="token string">&quot;\u5317\u4EAC&quot;</span><span class="token punctuation">,</span>
    age<span class="token punctuation">:</span>  <span class="token number">18</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;p6=%#v\\n&quot;</span><span class="token punctuation">,</span> p6<span class="token punctuation">)</span> <span class="token comment">//p6=&amp;main.person{name:&quot;pprof.cn&quot;, city:&quot;\u5317\u4EAC&quot;, age:18}</span>
</code></pre></div><p>\u5F53\u67D0\u4E9B\u5B57\u6BB5\u6CA1\u6709\u521D\u59CB\u503C\u7684\u65F6\u5019\uFF0C\u8BE5\u5B57\u6BB5\u53EF\u4EE5\u4E0D\u5199\u3002\u6B64\u65F6\uFF0C\u6CA1\u6709\u6307\u5B9A\u521D\u59CB\u503C\u7684\u5B57\u6BB5\u7684\u503C\u5C31\u662F\u8BE5\u5B57\u6BB5\u7C7B\u578B\u7684\u96F6\u503C\u3002</p><div class="language-go ext-go"><pre class="language-go"><code>p7 <span class="token operator">:=</span> <span class="token operator">&amp;</span>person<span class="token punctuation">{</span>
    city<span class="token punctuation">:</span> <span class="token string">&quot;\u5317\u4EAC&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;p7=%#v\\n&quot;</span><span class="token punctuation">,</span> p7<span class="token punctuation">)</span> <span class="token comment">//p7=&amp;main.person{name:&quot;&quot;, city:&quot;\u5317\u4EAC&quot;, age:0}</span>
</code></pre></div><h3 id="_1-3-5-\u4F7F\u7528\u503C\u7684\u5217\u8868\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#_1-3-5-\u4F7F\u7528\u503C\u7684\u5217\u8868\u521D\u59CB\u5316" aria-hidden="true">#</a> 1.3.5. \u4F7F\u7528\u503C\u7684\u5217\u8868\u521D\u59CB\u5316</h3><p>\u521D\u59CB\u5316\u7ED3\u6784\u4F53\u7684\u65F6\u5019\u53EF\u4EE5\u7B80\u5199\uFF0C\u4E5F\u5C31\u662F\u521D\u59CB\u5316\u7684\u65F6\u5019\u4E0D\u5199\u952E\uFF0C\u76F4\u63A5\u5199\u503C\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code>p8 <span class="token operator">:=</span> <span class="token operator">&amp;</span>person<span class="token punctuation">{</span>
    <span class="token string">&quot;pprof.cn&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;\u5317\u4EAC&quot;</span><span class="token punctuation">,</span>
    <span class="token number">18</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;p8=%#v\\n&quot;</span><span class="token punctuation">,</span> p8<span class="token punctuation">)</span> <span class="token comment">//p8=&amp;main.person{name:&quot;pprof.cn&quot;, city:&quot;\u5317\u4EAC&quot;, age:18}</span>
</code></pre></div><p>\u4F7F\u7528\u8FD9\u79CD\u683C\u5F0F\u521D\u59CB\u5316\u65F6\uFF0C\u9700\u8981\u6CE8\u610F\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    1.\u5FC5\u987B\u521D\u59CB\u5316\u7ED3\u6784\u4F53\u7684\u6240\u6709\u5B57\u6BB5\u3002
    2.\u521D\u59CB\u503C\u7684\u586B\u5145\u987A\u5E8F\u5FC5\u987B\u4E0E\u5B57\u6BB5\u5728\u7ED3\u6784\u4F53\u4E2D\u7684\u58F0\u660E\u987A\u5E8F\u4E00\u81F4\u3002
    3.\u8BE5\u65B9\u5F0F\u4E0D\u80FD\u548C\u952E\u503C\u521D\u59CB\u5316\u65B9\u5F0F\u6DF7\u7528\u3002
</code></pre></div><h3 id="_1-3-6-\u7ED3\u6784\u4F53\u5185\u5B58\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#_1-3-6-\u7ED3\u6784\u4F53\u5185\u5B58\u5E03\u5C40" aria-hidden="true">#</a> 1.3.6. \u7ED3\u6784\u4F53\u5185\u5B58\u5E03\u5C40</h3><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">type</span> test <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    a <span class="token builtin">int8</span>
    b <span class="token builtin">int8</span>
    c <span class="token builtin">int8</span>
    d <span class="token builtin">int8</span>
<span class="token punctuation">}</span>
n <span class="token operator">:=</span> test<span class="token punctuation">{</span>
    <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;n.a %p\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>n<span class="token punctuation">.</span>a<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;n.b %p\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>n<span class="token punctuation">.</span>b<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;n.c %p\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>n<span class="token punctuation">.</span>c<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;n.d %p\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>n<span class="token punctuation">.</span>d<span class="token punctuation">)</span>
</code></pre></div><p>\u8F93\u51FA\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    n.a 0xc0000a0060
    n.b 0xc0000a0061
    n.c 0xc0000a0062
    n.d 0xc0000a0063
</code></pre></div><h3 id="_1-3-7-\u9762\u8BD5\u9898" tabindex="-1"><a class="header-anchor" href="#_1-3-7-\u9762\u8BD5\u9898" aria-hidden="true">#</a> 1.3.7. \u9762\u8BD5\u9898</h3><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">type</span> student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
    age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    m <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">*</span>student<span class="token punctuation">)</span>
    stus <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>student<span class="token punctuation">{</span>
        <span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">&quot;pprof.cn&quot;</span><span class="token punctuation">,</span> age<span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">&quot;\u6D4B\u8BD5&quot;</span><span class="token punctuation">,</span> age<span class="token punctuation">:</span> <span class="token number">23</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">&quot;\u535A\u5BA2&quot;</span><span class="token punctuation">,</span> age<span class="token punctuation">:</span> <span class="token number">28</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> stu <span class="token operator">:=</span> <span class="token keyword">range</span> stus <span class="token punctuation">{</span>
        m<span class="token punctuation">[</span>stu<span class="token punctuation">.</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">&amp;</span>stu
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> m <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> <span class="token string">&quot;=&gt;&quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_1-3-8-\u6784\u9020\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_1-3-8-\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a> 1.3.8. \u6784\u9020\u51FD\u6570</h3><p>Go\u8BED\u8A00\u7684\u7ED3\u6784\u4F53\u6CA1\u6709\u6784\u9020\u51FD\u6570\uFF0C\u6211\u4EEC\u53EF\u4EE5\u81EA\u5DF1\u5B9E\u73B0\u3002 \u4F8B\u5982\uFF0C\u4E0B\u65B9\u7684\u4EE3\u7801\u5C31\u5B9E\u73B0\u4E86\u4E00\u4E2Aperson\u7684\u6784\u9020\u51FD\u6570\u3002 \u56E0\u4E3Astruct\u662F\u503C\u7C7B\u578B\uFF0C\u5982\u679C\u7ED3\u6784\u4F53\u6BD4\u8F83\u590D\u6742\u7684\u8BDD\uFF0C\u503C\u62F7\u8D1D\u6027\u80FD\u5F00\u9500\u4F1A\u6BD4\u8F83\u5927\uFF0C\u6240\u4EE5\u8BE5\u6784\u9020\u51FD\u6570\u8FD4\u56DE\u7684\u662F\u7ED3\u6784\u4F53\u6307\u9488\u7C7B\u578B\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">newPerson</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> city <span class="token builtin">string</span><span class="token punctuation">,</span> age <span class="token builtin">int8</span><span class="token punctuation">)</span> <span class="token operator">*</span>person <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>person<span class="token punctuation">{</span>
        name<span class="token punctuation">:</span> name<span class="token punctuation">,</span>
        city<span class="token punctuation">:</span> city<span class="token punctuation">,</span>
        age<span class="token punctuation">:</span>  age<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8C03\u7528\u6784\u9020\u51FD\u6570</p><div class="language-go ext-go"><pre class="language-go"><code>p9 <span class="token operator">:=</span> <span class="token function">newPerson</span><span class="token punctuation">(</span><span class="token string">&quot;pprof.cn&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u6D4B\u8BD5&quot;</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v\\n&quot;</span><span class="token punctuation">,</span> p9<span class="token punctuation">)</span>
</code></pre></div><h3 id="_1-3-9-\u65B9\u6CD5\u548C\u63A5\u6536\u8005" tabindex="-1"><a class="header-anchor" href="#_1-3-9-\u65B9\u6CD5\u548C\u63A5\u6536\u8005" aria-hidden="true">#</a> 1.3.9. \u65B9\u6CD5\u548C\u63A5\u6536\u8005</h3><p>Go\u8BED\u8A00\u4E2D\u7684\u65B9\u6CD5\uFF08Method\uFF09\u662F\u4E00\u79CD\u4F5C\u7528\u4E8E\u7279\u5B9A\u7C7B\u578B\u53D8\u91CF\u7684\u51FD\u6570\u3002\u8FD9\u79CD\u7279\u5B9A\u7C7B\u578B\u53D8\u91CF\u53EB\u505A\u63A5\u6536\u8005\uFF08Receiver\uFF09\u3002\u63A5\u6536\u8005\u7684\u6982\u5FF5\u5C31\u7C7B\u4F3C\u4E8E\u5176\u4ED6\u8BED\u8A00\u4E2D\u7684this\u6216\u8005 self\u3002</p><p>\u65B9\u6CD5\u7684\u5B9A\u4E49\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    func (\u63A5\u6536\u8005\u53D8\u91CF \u63A5\u6536\u8005\u7C7B\u578B) \u65B9\u6CD5\u540D(\u53C2\u6570\u5217\u8868) (\u8FD4\u56DE\u53C2\u6570) {
        \u51FD\u6570\u4F53
    }
</code></pre></div><p>\u5176\u4E2D\uFF0C</p><div class="language-text ext-text"><pre class="language-text"><code>    1.\u63A5\u6536\u8005\u53D8\u91CF\uFF1A\u63A5\u6536\u8005\u4E2D\u7684\u53C2\u6570\u53D8\u91CF\u540D\u5728\u547D\u540D\u65F6\uFF0C\u5B98\u65B9\u5EFA\u8BAE\u4F7F\u7528\u63A5\u6536\u8005\u7C7B\u578B\u540D\u7684\u7B2C\u4E00\u4E2A\u5C0F\u5199\u5B57\u6BCD\uFF0C\u800C\u4E0D\u662Fself\u3001this\u4E4B\u7C7B\u7684\u547D\u540D\u3002\u4F8B\u5982\uFF0CPerson\u7C7B\u578B\u7684\u63A5\u6536\u8005\u53D8\u91CF\u5E94\u8BE5\u547D\u540D\u4E3A p\uFF0CConnector\u7C7B\u578B\u7684\u63A5\u6536\u8005\u53D8\u91CF\u5E94\u8BE5\u547D\u540D\u4E3Ac\u7B49\u3002
    2.\u63A5\u6536\u8005\u7C7B\u578B\uFF1A\u63A5\u6536\u8005\u7C7B\u578B\u548C\u53C2\u6570\u7C7B\u4F3C\uFF0C\u53EF\u4EE5\u662F\u6307\u9488\u7C7B\u578B\u548C\u975E\u6307\u9488\u7C7B\u578B\u3002
    3.\u65B9\u6CD5\u540D\u3001\u53C2\u6570\u5217\u8868\u3001\u8FD4\u56DE\u53C2\u6570\uFF1A\u5177\u4F53\u683C\u5F0F\u4E0E\u51FD\u6570\u5B9A\u4E49\u76F8\u540C\u3002
</code></pre></div><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token comment">//Person \u7ED3\u6784\u4F53</span>
<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
    age  <span class="token builtin">int8</span>
<span class="token punctuation">}</span>

<span class="token comment">//NewPerson \u6784\u9020\u51FD\u6570</span>
<span class="token keyword">func</span> <span class="token function">NewPerson</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> age <span class="token builtin">int8</span><span class="token punctuation">)</span> <span class="token operator">*</span>Person <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>Person<span class="token punctuation">{</span>
        name<span class="token punctuation">:</span> name<span class="token punctuation">,</span>
        age<span class="token punctuation">:</span>  age<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//Dream Person\u505A\u68A6\u7684\u65B9\u6CD5</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p Person<span class="token punctuation">)</span> <span class="token function">Dream</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s\u7684\u68A6\u60F3\u662F\u5B66\u597DGo\u8BED\u8A00\uFF01\\n&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    p1 <span class="token operator">:=</span> <span class="token function">NewPerson</span><span class="token punctuation">(</span><span class="token string">&quot;\u6D4B\u8BD5&quot;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span>
    p1<span class="token punctuation">.</span><span class="token function">Dream</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u65B9\u6CD5\u4E0E\u51FD\u6570\u7684\u533A\u522B\u662F\uFF0C\u51FD\u6570\u4E0D\u5C5E\u4E8E\u4EFB\u4F55\u7C7B\u578B\uFF0C\u65B9\u6CD5\u5C5E\u4E8E\u7279\u5B9A\u7684\u7C7B\u578B\u3002</p><h3 id="_1-3-10-\u6307\u9488\u7C7B\u578B\u7684\u63A5\u6536\u8005" tabindex="-1"><a class="header-anchor" href="#_1-3-10-\u6307\u9488\u7C7B\u578B\u7684\u63A5\u6536\u8005" aria-hidden="true">#</a> 1.3.10. \u6307\u9488\u7C7B\u578B\u7684\u63A5\u6536\u8005</h3><p>\u6307\u9488\u7C7B\u578B\u7684\u63A5\u6536\u8005\u7531\u4E00\u4E2A\u7ED3\u6784\u4F53\u7684\u6307\u9488\u7EC4\u6210\uFF0C\u7531\u4E8E\u6307\u9488\u7684\u7279\u6027\uFF0C\u8C03\u7528\u65B9\u6CD5\u65F6\u4FEE\u6539\u63A5\u6536\u8005\u6307\u9488\u7684\u4EFB\u610F\u6210\u5458\u53D8\u91CF\uFF0C\u5728\u65B9\u6CD5\u7ED3\u675F\u540E\uFF0C\u4FEE\u6539\u90FD\u662F\u6709\u6548\u7684\u3002\u8FD9\u79CD\u65B9\u5F0F\u5C31\u5341\u5206\u63A5\u8FD1\u4E8E\u5176\u4ED6\u8BED\u8A00\u4E2D\u9762\u5411\u5BF9\u8C61\u4E2D\u7684this\u6216\u8005self\u3002 \u4F8B\u5982\u6211\u4EEC\u4E3APerson\u6DFB\u52A0\u4E00\u4E2ASetAge\u65B9\u6CD5\uFF0C\u6765\u4FEE\u6539\u5B9E\u4F8B\u53D8\u91CF\u7684\u5E74\u9F84\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>    // SetAge \u8BBE\u7F6Ep\u7684\u5E74\u9F84
    // \u4F7F\u7528\u6307\u9488\u63A5\u6536\u8005
    func (p *Person) SetAge(newAge int8) {
        p.age = newAge
    }
</code></pre></div><p>\u8C03\u7528\u8BE5\u65B9\u6CD5\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    p1 <span class="token operator">:=</span> <span class="token function">NewPerson</span><span class="token punctuation">(</span><span class="token string">&quot;\u6D4B\u8BD5&quot;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>age<span class="token punctuation">)</span> <span class="token comment">// 25</span>
    p1<span class="token punctuation">.</span><span class="token function">SetAge</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>age<span class="token punctuation">)</span> <span class="token comment">// 30</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_1-3-11-\u503C\u7C7B\u578B\u7684\u63A5\u6536\u8005" tabindex="-1"><a class="header-anchor" href="#_1-3-11-\u503C\u7C7B\u578B\u7684\u63A5\u6536\u8005" aria-hidden="true">#</a> 1.3.11. \u503C\u7C7B\u578B\u7684\u63A5\u6536\u8005</h3><p>\u5F53\u65B9\u6CD5\u4F5C\u7528\u4E8E\u503C\u7C7B\u578B\u63A5\u6536\u8005\u65F6\uFF0CGo\u8BED\u8A00\u4F1A\u5728\u4EE3\u7801\u8FD0\u884C\u65F6\u5C06\u63A5\u6536\u8005\u7684\u503C\u590D\u5236\u4E00\u4EFD\u3002\u5728\u503C\u7C7B\u578B\u63A5\u6536\u8005\u7684\u65B9\u6CD5\u4E2D\u53EF\u4EE5\u83B7\u53D6\u63A5\u6536\u8005\u7684\u6210\u5458\u503C\uFF0C\u4F46\u4FEE\u6539\u64CD\u4F5C\u53EA\u662F\u9488\u5BF9\u526F\u672C\uFF0C\u65E0\u6CD5\u4FEE\u6539\u63A5\u6536\u8005\u53D8\u91CF\u672C\u8EAB\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token comment">// SetAge2 \u8BBE\u7F6Ep\u7684\u5E74\u9F84</span>
<span class="token comment">// \u4F7F\u7528\u503C\u63A5\u6536\u8005</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p Person<span class="token punctuation">)</span> <span class="token function">SetAge2</span><span class="token punctuation">(</span>newAge <span class="token builtin">int8</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    p<span class="token punctuation">.</span>age <span class="token operator">=</span> newAge
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    p1 <span class="token operator">:=</span> <span class="token function">NewPerson</span><span class="token punctuation">(</span><span class="token string">&quot;\u6D4B\u8BD5&quot;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span>
    p1<span class="token punctuation">.</span><span class="token function">Dream</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>age<span class="token punctuation">)</span> <span class="token comment">// 25</span>
    p1<span class="token punctuation">.</span><span class="token function">SetAge2</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span> <span class="token comment">// (*p1).SetAge2(30)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>age<span class="token punctuation">)</span> <span class="token comment">// 25</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_1-3-12-\u4EC0\u4E48\u65F6\u5019\u5E94\u8BE5\u4F7F\u7528\u6307\u9488\u7C7B\u578B\u63A5\u6536\u8005" tabindex="-1"><a class="header-anchor" href="#_1-3-12-\u4EC0\u4E48\u65F6\u5019\u5E94\u8BE5\u4F7F\u7528\u6307\u9488\u7C7B\u578B\u63A5\u6536\u8005" aria-hidden="true">#</a> 1.3.12. \u4EC0\u4E48\u65F6\u5019\u5E94\u8BE5\u4F7F\u7528\u6307\u9488\u7C7B\u578B\u63A5\u6536\u8005</h3><div class="language-text ext-text"><pre class="language-text"><code>    1.\u9700\u8981\u4FEE\u6539\u63A5\u6536\u8005\u4E2D\u7684\u503C
    2.\u63A5\u6536\u8005\u662F\u62F7\u8D1D\u4EE3\u4EF7\u6BD4\u8F83\u5927\u7684\u5927\u5BF9\u8C61
    3.\u4FDD\u8BC1\u4E00\u81F4\u6027\uFF0C\u5982\u679C\u6709\u67D0\u4E2A\u65B9\u6CD5\u4F7F\u7528\u4E86\u6307\u9488\u63A5\u6536\u8005\uFF0C\u90A3\u4E48\u5176\u4ED6\u7684\u65B9\u6CD5\u4E5F\u5E94\u8BE5\u4F7F\u7528\u6307\u9488\u63A5\u6536\u8005\u3002
</code></pre></div><h3 id="_1-3-13-\u4EFB\u610F\u7C7B\u578B\u6DFB\u52A0\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_1-3-13-\u4EFB\u610F\u7C7B\u578B\u6DFB\u52A0\u65B9\u6CD5" aria-hidden="true">#</a> 1.3.13. \u4EFB\u610F\u7C7B\u578B\u6DFB\u52A0\u65B9\u6CD5</h3><p>\u5728Go\u8BED\u8A00\u4E2D\uFF0C\u63A5\u6536\u8005\u7684\u7C7B\u578B\u53EF\u4EE5\u662F\u4EFB\u4F55\u7C7B\u578B\uFF0C\u4E0D\u4EC5\u4EC5\u662F\u7ED3\u6784\u4F53\uFF0C\u4EFB\u4F55\u7C7B\u578B\u90FD\u53EF\u4EE5\u62E5\u6709\u65B9\u6CD5\u3002 \u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u6211\u4EEC\u57FA\u4E8E\u5185\u7F6E\u7684int\u7C7B\u578B\u4F7F\u7528type\u5173\u952E\u5B57\u53EF\u4EE5\u5B9A\u4E49\u65B0\u7684\u81EA\u5B9A\u4E49\u7C7B\u578B\uFF0C\u7136\u540E\u4E3A\u6211\u4EEC\u7684\u81EA\u5B9A\u4E49\u7C7B\u578B\u6DFB\u52A0\u65B9\u6CD5\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token comment">//MyInt \u5C06int\u5B9A\u4E49\u4E3A\u81EA\u5B9A\u4E49MyInt\u7C7B\u578B</span>
<span class="token keyword">type</span> MyInt <span class="token builtin">int</span>

<span class="token comment">//SayHello \u4E3AMyInt\u6DFB\u52A0\u4E00\u4E2ASayHello\u7684\u65B9\u6CD5</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>m MyInt<span class="token punctuation">)</span> <span class="token function">SayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, \u6211\u662F\u4E00\u4E2Aint\u3002&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> m1 MyInt
    m1<span class="token punctuation">.</span><span class="token function">SayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//Hello, \u6211\u662F\u4E00\u4E2Aint\u3002</span>
    m1 <span class="token operator">=</span> <span class="token number">100</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v  %T\\n&quot;</span><span class="token punctuation">,</span> m1<span class="token punctuation">,</span> m1<span class="token punctuation">)</span> <span class="token comment">//100  main.MyInt</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6CE8\u610F\u4E8B\u9879\uFF1A \u975E\u672C\u5730\u7C7B\u578B\u4E0D\u80FD\u5B9A\u4E49\u65B9\u6CD5\uFF0C\u4E5F\u5C31\u662F\u8BF4\u6211\u4EEC\u4E0D\u80FD\u7ED9\u522B\u7684\u5305\u7684\u7C7B\u578B\u5B9A\u4E49\u65B9\u6CD5\u3002</p><h3 id="_1-3-14-\u7ED3\u6784\u4F53\u7684\u533F\u540D\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#_1-3-14-\u7ED3\u6784\u4F53\u7684\u533F\u540D\u5B57\u6BB5" aria-hidden="true">#</a> 1.3.14. \u7ED3\u6784\u4F53\u7684\u533F\u540D\u5B57\u6BB5</h3><p>\u7ED3\u6784\u4F53\u5141\u8BB8\u5176\u6210\u5458\u5B57\u6BB5\u5728\u58F0\u660E\u65F6\u6CA1\u6709\u5B57\u6BB5\u540D\u800C\u53EA\u6709\u7C7B\u578B\uFF0C\u8FD9\u79CD\u6CA1\u6709\u540D\u5B57\u7684\u5B57\u6BB5\u5C31\u79F0\u4E3A\u533F\u540D\u5B57\u6BB5\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token comment">//Person \u7ED3\u6784\u4F53Person\u7C7B\u578B</span>
<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token builtin">string</span>
    <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    p1 <span class="token operator">:=</span> Person<span class="token punctuation">{</span>
        <span class="token string">&quot;pprof.cn&quot;</span><span class="token punctuation">,</span>
        <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v\\n&quot;</span><span class="token punctuation">,</span> p1<span class="token punctuation">)</span>        <span class="token comment">//main.Person{string:&quot;pprof.cn&quot;, int:18}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span><span class="token builtin">string</span><span class="token punctuation">,</span> p1<span class="token punctuation">.</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token comment">//pprof.cn 18</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u533F\u540D\u5B57\u6BB5\u9ED8\u8BA4\u91C7\u7528\u7C7B\u578B\u540D\u4F5C\u4E3A\u5B57\u6BB5\u540D\uFF0C\u7ED3\u6784\u4F53\u8981\u6C42\u5B57\u6BB5\u540D\u79F0\u5FC5\u987B\u552F\u4E00\uFF0C\u56E0\u6B64\u4E00\u4E2A\u7ED3\u6784\u4F53\u4E2D\u540C\u79CD\u7C7B\u578B\u7684\u533F\u540D\u5B57\u6BB5\u53EA\u80FD\u6709\u4E00\u4E2A\u3002</p><h3 id="_1-3-15-\u5D4C\u5957\u7ED3\u6784\u4F53" tabindex="-1"><a class="header-anchor" href="#_1-3-15-\u5D4C\u5957\u7ED3\u6784\u4F53" aria-hidden="true">#</a> 1.3.15. \u5D4C\u5957\u7ED3\u6784\u4F53</h3><p>\u4E00\u4E2A\u7ED3\u6784\u4F53\u4E2D\u53EF\u4EE5\u5D4C\u5957\u5305\u542B\u53E6\u4E00\u4E2A\u7ED3\u6784\u4F53\u6216\u7ED3\u6784\u4F53\u6307\u9488\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token comment">//Address \u5730\u5740\u7ED3\u6784\u4F53</span>
<span class="token keyword">type</span> Address <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Province <span class="token builtin">string</span>
    City     <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">//User \u7528\u6237\u7ED3\u6784\u4F53</span>
<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name    <span class="token builtin">string</span>
    Gender  <span class="token builtin">string</span>
    Address Address
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    user1 <span class="token operator">:=</span> User<span class="token punctuation">{</span>
        Name<span class="token punctuation">:</span>   <span class="token string">&quot;pprof&quot;</span><span class="token punctuation">,</span>
        Gender<span class="token punctuation">:</span> <span class="token string">&quot;\u5973&quot;</span><span class="token punctuation">,</span>
        Address<span class="token punctuation">:</span> Address<span class="token punctuation">{</span>
            Province<span class="token punctuation">:</span> <span class="token string">&quot;\u9ED1\u9F99\u6C5F&quot;</span><span class="token punctuation">,</span>
            City<span class="token punctuation">:</span>     <span class="token string">&quot;\u54C8\u5C14\u6EE8&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;user1=%#v\\n&quot;</span><span class="token punctuation">,</span> user1<span class="token punctuation">)</span><span class="token comment">//user1=main.User{Name:&quot;pprof&quot;, Gender:&quot;\u5973&quot;, Address:main.Address{Province:&quot;\u9ED1\u9F99\u6C5F&quot;, City:&quot;\u54C8\u5C14\u6EE8&quot;}}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_1-3-16-\u5D4C\u5957\u533F\u540D\u7ED3\u6784\u4F53" tabindex="-1"><a class="header-anchor" href="#_1-3-16-\u5D4C\u5957\u533F\u540D\u7ED3\u6784\u4F53" aria-hidden="true">#</a> 1.3.16. \u5D4C\u5957\u533F\u540D\u7ED3\u6784\u4F53</h3><div class="language-go ext-go"><pre class="language-go"><code><span class="token comment">//Address \u5730\u5740\u7ED3\u6784\u4F53</span>
<span class="token keyword">type</span> Address <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Province <span class="token builtin">string</span>
    City     <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">//User \u7528\u6237\u7ED3\u6784\u4F53</span>
<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name    <span class="token builtin">string</span>
    Gender  <span class="token builtin">string</span>
    Address <span class="token comment">//\u533F\u540D\u7ED3\u6784\u4F53</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> user2 User
    user2<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">&quot;pprof&quot;</span>
    user2<span class="token punctuation">.</span>Gender <span class="token operator">=</span> <span class="token string">&quot;\u5973&quot;</span>
    user2<span class="token punctuation">.</span>Address<span class="token punctuation">.</span>Province <span class="token operator">=</span> <span class="token string">&quot;\u9ED1\u9F99\u6C5F&quot;</span>    <span class="token comment">//\u901A\u8FC7\u533F\u540D\u7ED3\u6784\u4F53.\u5B57\u6BB5\u540D\u8BBF\u95EE</span>
    user2<span class="token punctuation">.</span>City <span class="token operator">=</span> <span class="token string">&quot;\u54C8\u5C14\u6EE8&quot;</span>                <span class="token comment">//\u76F4\u63A5\u8BBF\u95EE\u533F\u540D\u7ED3\u6784\u4F53\u7684\u5B57\u6BB5\u540D</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;user2=%#v\\n&quot;</span><span class="token punctuation">,</span> user2<span class="token punctuation">)</span> <span class="token comment">//user2=main.User{Name:&quot;pprof&quot;, Gender:&quot;\u5973&quot;, Address:main.Address{Province:&quot;\u9ED1\u9F99\u6C5F&quot;, City:&quot;\u54C8\u5C14\u6EE8&quot;}}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5F53\u8BBF\u95EE\u7ED3\u6784\u4F53\u6210\u5458\u65F6\u4F1A\u5148\u5728\u7ED3\u6784\u4F53\u4E2D\u67E5\u627E\u8BE5\u5B57\u6BB5\uFF0C\u627E\u4E0D\u5230\u518D\u53BB\u533F\u540D\u7ED3\u6784\u4F53\u4E2D\u67E5\u627E\u3002</p><h3 id="_1-3-17-\u5D4C\u5957\u7ED3\u6784\u4F53\u7684\u5B57\u6BB5\u540D\u51B2\u7A81" tabindex="-1"><a class="header-anchor" href="#_1-3-17-\u5D4C\u5957\u7ED3\u6784\u4F53\u7684\u5B57\u6BB5\u540D\u51B2\u7A81" aria-hidden="true">#</a> 1.3.17. \u5D4C\u5957\u7ED3\u6784\u4F53\u7684\u5B57\u6BB5\u540D\u51B2\u7A81</h3><p>\u5D4C\u5957\u7ED3\u6784\u4F53\u5185\u90E8\u53EF\u80FD\u5B58\u5728\u76F8\u540C\u7684\u5B57\u6BB5\u540D\u3002\u8FD9\u4E2A\u65F6\u5019\u4E3A\u4E86\u907F\u514D\u6B67\u4E49\u9700\u8981\u6307\u5B9A\u5177\u4F53\u7684\u5185\u5D4C\u7ED3\u6784\u4F53\u7684\u5B57\u6BB5\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token comment">//Address \u5730\u5740\u7ED3\u6784\u4F53</span>
<span class="token keyword">type</span> Address <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Province   <span class="token builtin">string</span>
    City       <span class="token builtin">string</span>
    CreateTime <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">//Email \u90AE\u7BB1\u7ED3\u6784\u4F53</span>
<span class="token keyword">type</span> Email <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Account    <span class="token builtin">string</span>
    CreateTime <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">//User \u7528\u6237\u7ED3\u6784\u4F53</span>
<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name   <span class="token builtin">string</span>
    Gender <span class="token builtin">string</span>
    Address
    Email
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> user3 User
    user3<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">&quot;pprof&quot;</span>
    user3<span class="token punctuation">.</span>Gender <span class="token operator">=</span> <span class="token string">&quot;\u5973&quot;</span>
    <span class="token comment">// user3.CreateTime = &quot;2019&quot; //ambiguous selector user3.CreateTime</span>
    user3<span class="token punctuation">.</span>Address<span class="token punctuation">.</span>CreateTime <span class="token operator">=</span> <span class="token string">&quot;2000&quot;</span> <span class="token comment">//\u6307\u5B9AAddress\u7ED3\u6784\u4F53\u4E2D\u7684CreateTime</span>
    user3<span class="token punctuation">.</span>Email<span class="token punctuation">.</span>CreateTime <span class="token operator">=</span> <span class="token string">&quot;2000&quot;</span>   <span class="token comment">//\u6307\u5B9AEmail\u7ED3\u6784\u4F53\u4E2D\u7684CreateTime</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_1-3-18-\u7ED3\u6784\u4F53\u7684-\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#_1-3-18-\u7ED3\u6784\u4F53\u7684-\u7EE7\u627F" aria-hidden="true">#</a> 1.3.18. \u7ED3\u6784\u4F53\u7684\u201C\u7EE7\u627F\u201D</h3><p>Go\u8BED\u8A00\u4E2D\u4F7F\u7528\u7ED3\u6784\u4F53\u4E5F\u53EF\u4EE5\u5B9E\u73B0\u5176\u4ED6\u7F16\u7A0B\u8BED\u8A00\u4E2D\u9762\u5411\u5BF9\u8C61\u7684\u7EE7\u627F\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token comment">//Animal \u52A8\u7269</span>
<span class="token keyword">type</span> Animal <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a <span class="token operator">*</span>Animal<span class="token punctuation">)</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s\u4F1A\u52A8\uFF01\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//Dog \u72D7</span>
<span class="token keyword">type</span> Dog <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Feet    <span class="token builtin">int8</span>
    <span class="token operator">*</span>Animal <span class="token comment">//\u901A\u8FC7\u5D4C\u5957\u533F\u540D\u7ED3\u6784\u4F53\u5B9E\u73B0\u7EE7\u627F</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>d <span class="token operator">*</span>Dog<span class="token punctuation">)</span> <span class="token function">wang</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s\u4F1A\u6C6A\u6C6A\u6C6A~\\n&quot;</span><span class="token punctuation">,</span> d<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    d1 <span class="token operator">:=</span> <span class="token operator">&amp;</span>Dog<span class="token punctuation">{</span>
        Feet<span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
        Animal<span class="token punctuation">:</span> <span class="token operator">&amp;</span>Animal<span class="token punctuation">{</span> <span class="token comment">//\u6CE8\u610F\u5D4C\u5957\u7684\u662F\u7ED3\u6784\u4F53\u6307\u9488</span>
            name<span class="token punctuation">:</span> <span class="token string">&quot;\u4E50\u4E50&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    d1<span class="token punctuation">.</span><span class="token function">wang</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u4E50\u4E50\u4F1A\u6C6A\u6C6A\u6C6A~</span>
    d1<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u4E50\u4E50\u4F1A\u52A8\uFF01</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_1-3-19-\u7ED3\u6784\u4F53\u5B57\u6BB5\u7684\u53EF\u89C1\u6027" tabindex="-1"><a class="header-anchor" href="#_1-3-19-\u7ED3\u6784\u4F53\u5B57\u6BB5\u7684\u53EF\u89C1\u6027" aria-hidden="true">#</a> 1.3.19. \u7ED3\u6784\u4F53\u5B57\u6BB5\u7684\u53EF\u89C1\u6027</h3><p>\u7ED3\u6784\u4F53\u4E2D\u5B57\u6BB5\u5927\u5199\u5F00\u5934\u8868\u793A\u53EF\u516C\u5F00\u8BBF\u95EE\uFF0C\u5C0F\u5199\u8868\u793A\u79C1\u6709\uFF08\u4EC5\u5728\u5B9A\u4E49\u5F53\u524D\u7ED3\u6784\u4F53\u7684\u5305\u4E2D\u53EF\u8BBF\u95EE\uFF09\u3002</p><h3 id="_1-3-20-\u7ED3\u6784\u4F53\u4E0Ejson\u5E8F\u5217\u5316" tabindex="-1"><a class="header-anchor" href="#_1-3-20-\u7ED3\u6784\u4F53\u4E0Ejson\u5E8F\u5217\u5316" aria-hidden="true">#</a> 1.3.20. \u7ED3\u6784\u4F53\u4E0EJSON\u5E8F\u5217\u5316</h3><p>JSON(JavaScript Object Notation) \u662F\u4E00\u79CD\u8F7B\u91CF\u7EA7\u7684\u6570\u636E\u4EA4\u6362\u683C\u5F0F\u3002\u6613\u4E8E\u4EBA\u9605\u8BFB\u548C\u7F16\u5199\u3002\u540C\u65F6\u4E5F\u6613\u4E8E\u673A\u5668\u89E3\u6790\u548C\u751F\u6210\u3002JSON\u952E\u503C\u5BF9\u662F\u7528\u6765\u4FDD\u5B58JS\u5BF9\u8C61\u7684\u4E00\u79CD\u65B9\u5F0F\uFF0C\u952E/\u503C\u5BF9\u7EC4\u5408\u4E2D\u7684\u952E\u540D\u5199\u5728\u524D\u9762\u5E76\u7528\u53CC\u5F15\u53F7&quot;&quot;\u5305\u88F9\uFF0C\u4F7F\u7528\u5192\u53F7:\u5206\u9694\uFF0C\u7136\u540E\u7D27\u63A5\u7740\u503C\uFF1B\u591A\u4E2A\u952E\u503C\u4E4B\u95F4\u4F7F\u7528\u82F1\u6587,\u5206\u9694\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token comment">//Student \u5B66\u751F</span>
<span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    ID     <span class="token builtin">int</span>
    Gender <span class="token builtin">string</span>
    Name   <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">//Class \u73ED\u7EA7</span>
<span class="token keyword">type</span> Class <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Title    <span class="token builtin">string</span>
    Students <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>Student
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    c <span class="token operator">:=</span> <span class="token operator">&amp;</span>Class<span class="token punctuation">{</span>
        Title<span class="token punctuation">:</span>    <span class="token string">&quot;101&quot;</span><span class="token punctuation">,</span>
        Students<span class="token punctuation">:</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>Student<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        stu <span class="token operator">:=</span> <span class="token operator">&amp;</span>Student<span class="token punctuation">{</span>
            Name<span class="token punctuation">:</span>   fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;stu%02d&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">,</span>
            Gender<span class="token punctuation">:</span> <span class="token string">&quot;\u7537&quot;</span><span class="token punctuation">,</span>
            ID<span class="token punctuation">:</span>     i<span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
        c<span class="token punctuation">.</span>Students <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>Students<span class="token punctuation">,</span> stu<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//JSON\u5E8F\u5217\u5316\uFF1A\u7ED3\u6784\u4F53--&gt;JSON\u683C\u5F0F\u7684\u5B57\u7B26\u4E32</span>
    data<span class="token punctuation">,</span> err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;json marshal failed&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;json:%s\\n&quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
    <span class="token comment">//JSON\u53CD\u5E8F\u5217\u5316\uFF1AJSON\u683C\u5F0F\u7684\u5B57\u7B26\u4E32--&gt;\u7ED3\u6784\u4F53</span>
    str <span class="token operator">:=</span> <span class="token string">\`{&quot;Title&quot;:&quot;101&quot;,&quot;Students&quot;:[{&quot;ID&quot;:0,&quot;Gender&quot;:&quot;\u7537&quot;,&quot;Name&quot;:&quot;stu00&quot;},{&quot;ID&quot;:1,&quot;Gender&quot;:&quot;\u7537&quot;,&quot;Name&quot;:&quot;stu01&quot;},{&quot;ID&quot;:2,&quot;Gender&quot;:&quot;\u7537&quot;,&quot;Name&quot;:&quot;stu02&quot;},{&quot;ID&quot;:3,&quot;Gender&quot;:&quot;\u7537&quot;,&quot;Name&quot;:&quot;stu03&quot;},{&quot;ID&quot;:4,&quot;Gender&quot;:&quot;\u7537&quot;,&quot;Name&quot;:&quot;stu04&quot;},{&quot;ID&quot;:5,&quot;Gender&quot;:&quot;\u7537&quot;,&quot;Name&quot;:&quot;stu05&quot;},{&quot;ID&quot;:6,&quot;Gender&quot;:&quot;\u7537&quot;,&quot;Name&quot;:&quot;stu06&quot;},{&quot;ID&quot;:7,&quot;Gender&quot;:&quot;\u7537&quot;,&quot;Name&quot;:&quot;stu07&quot;},{&quot;ID&quot;:8,&quot;Gender&quot;:&quot;\u7537&quot;,&quot;Name&quot;:&quot;stu08&quot;},{&quot;ID&quot;:9,&quot;Gender&quot;:&quot;\u7537&quot;,&quot;Name&quot;:&quot;stu09&quot;}]}\`</span>
    c1 <span class="token operator">:=</span> <span class="token operator">&amp;</span>Class<span class="token punctuation">{</span><span class="token punctuation">}</span>
    err <span class="token operator">=</span> json<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">,</span> c1<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;json unmarshal failed!&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v\\n&quot;</span><span class="token punctuation">,</span> c1<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_1-3-21-\u7ED3\u6784\u4F53\u6807\u7B7E-tag" tabindex="-1"><a class="header-anchor" href="#_1-3-21-\u7ED3\u6784\u4F53\u6807\u7B7E-tag" aria-hidden="true">#</a> 1.3.21. \u7ED3\u6784\u4F53\u6807\u7B7E\uFF08Tag\uFF09</h3><p>Tag\u662F\u7ED3\u6784\u4F53\u7684\u5143\u4FE1\u606F\uFF0C\u53EF\u4EE5\u5728\u8FD0\u884C\u7684\u65F6\u5019\u901A\u8FC7\u53CD\u5C04\u7684\u673A\u5236\u8BFB\u53D6\u51FA\u6765\u3002</p><p>Tag\u5728\u7ED3\u6784\u4F53\u5B57\u6BB5\u7684\u540E\u65B9\u5B9A\u4E49\uFF0C\u7531\u4E00\u5BF9\u53CD\u5F15\u53F7\u5305\u88F9\u8D77\u6765\uFF0C\u5177\u4F53\u7684\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    \`key1:&quot;value1&quot; key2:&quot;value2&quot;\`
</code></pre></div><p>\u7ED3\u6784\u4F53\u6807\u7B7E\u7531\u4E00\u4E2A\u6216\u591A\u4E2A\u952E\u503C\u5BF9\u7EC4\u6210\u3002\u952E\u4E0E\u503C\u4F7F\u7528\u5192\u53F7\u5206\u9694\uFF0C\u503C\u7528\u53CC\u5F15\u53F7\u62EC\u8D77\u6765\u3002\u952E\u503C\u5BF9\u4E4B\u95F4\u4F7F\u7528\u4E00\u4E2A\u7A7A\u683C\u5206\u9694\u3002 \u6CE8\u610F\u4E8B\u9879\uFF1A \u4E3A\u7ED3\u6784\u4F53\u7F16\u5199Tag\u65F6\uFF0C\u5FC5\u987B\u4E25\u683C\u9075\u5B88\u952E\u503C\u5BF9\u7684\u89C4\u5219\u3002\u7ED3\u6784\u4F53\u6807\u7B7E\u7684\u89E3\u6790\u4EE3\u7801\u7684\u5BB9\u9519\u80FD\u529B\u5F88\u5DEE\uFF0C\u4E00\u65E6\u683C\u5F0F\u5199\u9519\uFF0C\u7F16\u8BD1\u548C\u8FD0\u884C\u65F6\u90FD\u4E0D\u4F1A\u63D0\u793A\u4EFB\u4F55\u9519\u8BEF\uFF0C\u901A\u8FC7\u53CD\u5C04\u4E5F\u65E0\u6CD5\u6B63\u786E\u53D6\u503C\u3002\u4F8B\u5982\u4E0D\u8981\u5728key\u548Cvalue\u4E4B\u95F4\u6DFB\u52A0\u7A7A\u683C\u3002</p><p>\u4F8B\u5982\u6211\u4EEC\u4E3AStudent\u7ED3\u6784\u4F53\u7684\u6BCF\u4E2A\u5B57\u6BB5\u5B9A\u4E49json\u5E8F\u5217\u5316\u65F6\u4F7F\u7528\u7684Tag\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token comment">//Student \u5B66\u751F</span>
<span class="token keyword">type</span> Student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    ID     <span class="token builtin">int</span>    <span class="token string">\`json:&quot;id&quot;\`</span> <span class="token comment">//\u901A\u8FC7\u6307\u5B9Atag\u5B9E\u73B0json\u5E8F\u5217\u5316\u8BE5\u5B57\u6BB5\u65F6\u7684key</span>
    Gender <span class="token builtin">string</span> <span class="token comment">//json\u5E8F\u5217\u5316\u662F\u9ED8\u8BA4\u4F7F\u7528\u5B57\u6BB5\u540D\u4F5C\u4E3Akey</span>
    name   <span class="token builtin">string</span> <span class="token comment">//\u79C1\u6709\u4E0D\u80FD\u88ABjson\u5305\u8BBF\u95EE</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    s1 <span class="token operator">:=</span> Student<span class="token punctuation">{</span>
        ID<span class="token punctuation">:</span>     <span class="token number">1</span><span class="token punctuation">,</span>
        Gender<span class="token punctuation">:</span> <span class="token string">&quot;\u5973&quot;</span><span class="token punctuation">,</span>
        name<span class="token punctuation">:</span>   <span class="token string">&quot;pprof&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    data<span class="token punctuation">,</span> err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;json marshal failed!&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;json str:%s\\n&quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span> <span class="token comment">//json str:{&quot;id&quot;:1,&quot;Gender&quot;:&quot;\u5973&quot;}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_1-3-22-\u5C0F\u7EC3\u4E60" tabindex="-1"><a class="header-anchor" href="#_1-3-22-\u5C0F\u7EC3\u4E60" aria-hidden="true">#</a> 1.3.22. \u5C0F\u7EC3\u4E60\uFF1A</h3><p>\u731C\u4E00\u4E0B\u4E0B\u5217\u4EE3\u7801\u8FD0\u884C\u7684\u7ED3\u679C\u662F\u4EC0\u4E48</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    id   <span class="token builtin">int</span>
    name <span class="token builtin">string</span>
    age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">demo</span><span class="token punctuation">(</span>ce <span class="token punctuation">[</span><span class="token punctuation">]</span>student<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u5207\u7247\u662F\u5F15\u7528\u4F20\u9012\uFF0C\u662F\u53EF\u4EE5\u6539\u53D8\u503C\u7684</span>
    ce<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">999</span>
    <span class="token comment">// ce = append(ce, student{3, &quot;xiaowang&quot;, 56})</span>
    <span class="token comment">// return ce</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> ce <span class="token punctuation">[</span><span class="token punctuation">]</span>student  <span class="token comment">//\u5B9A\u4E49\u4E00\u4E2A\u5207\u7247\u7C7B\u578B\u7684\u7ED3\u6784\u4F53</span>
    ce <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>student<span class="token punctuation">{</span>
        student<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;xiaoming&quot;</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        student<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;xiaozhang&quot;</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>ce<span class="token punctuation">)</span>
    <span class="token function">demo</span><span class="token punctuation">(</span>ce<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>ce<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_1-3-23-\u5220\u9664map\u7C7B\u578B\u7684\u7ED3\u6784\u4F53" tabindex="-1"><a class="header-anchor" href="#_1-3-23-\u5220\u9664map\u7C7B\u578B\u7684\u7ED3\u6784\u4F53" aria-hidden="true">#</a> 1.3.23. \u5220\u9664map\u7C7B\u578B\u7684\u7ED3\u6784\u4F53</h3><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> student <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    id   <span class="token builtin">int</span>
    name <span class="token builtin">string</span>
    age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ce <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span>student<span class="token punctuation">)</span>
    ce<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> student<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;xiaolizi&quot;</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">}</span>
    ce<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> student<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;wang&quot;</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>ce<span class="token punctuation">)</span>
    <span class="token function">delete</span><span class="token punctuation">(</span>ce<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>ce<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_1-3-24-\u5B9E\u73B0map\u6709\u5E8F\u8F93\u51FA-\u9762\u8BD5\u7ECF\u5E38\u95EE\u5230" tabindex="-1"><a class="header-anchor" href="#_1-3-24-\u5B9E\u73B0map\u6709\u5E8F\u8F93\u51FA-\u9762\u8BD5\u7ECF\u5E38\u95EE\u5230" aria-hidden="true">#</a> 1.3.24. \u5B9E\u73B0map\u6709\u5E8F\u8F93\u51FA(\u9762\u8BD5\u7ECF\u5E38\u95EE\u5230)</h3><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;sort&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    map1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
    map1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;www.topgoer.com&quot;</span>
    map1<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;rpc.topgoer.com&quot;</span>
    map1<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;ceshi&quot;</span>
    map1<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;xiaohong&quot;</span>
    map1<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;xiaohuang&quot;</span>
    sli <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span> k<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> <span class="token keyword">range</span> map1 <span class="token punctuation">{</span>
        sli <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>sli<span class="token punctuation">,</span> k<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    sort<span class="token punctuation">.</span><span class="token function">Ints</span><span class="token punctuation">(</span>sli<span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>map1<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>map1<span class="token punctuation">[</span>sli<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_1-3-25-\u5C0F\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#_1-3-25-\u5C0F\u6848\u4F8B" aria-hidden="true">#</a> 1.3.25. \u5C0F\u6848\u4F8B</h3><p>\u91C7\u7528\u5207\u7247\u7C7B\u578B\u7684\u7ED3\u6784\u4F53\u63A5\u53D7\u67E5\u8BE2\u6570\u636E\u5E93\u4FE1\u606F\u8FD4\u56DE\u7684\u53C2\u6570</p><p>\u5730\u5740\uFF1Ahttps://github.com/lu569368/struct</p>`,138),e=[o];function c(u,l){return s(),a("div",null,e)}var k=n(p,[["render",c],["__file","11-\u7ED3\u6784\u4F53.html.vue"]]);export{k as default};
