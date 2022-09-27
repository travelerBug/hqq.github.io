import{_ as n,o as s,c as a,e as t}from"./app.cef7465c.js";const p={},o=t(`<h1 id="\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5" aria-hidden="true">#</a> \u65B9\u6CD5</h1><hr><p><strong>\u65B9\u6CD5</strong> \u5176\u5B9E\u5C31\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u5728 <code>func</code> \u8FD9\u4E2A\u5173\u952E\u5B57\u548C\u65B9\u6CD5\u540D\u4E2D\u95F4\u52A0\u5165\u4E86\u4E00\u4E2A\u7279\u6B8A\u7684\u63A5\u6536\u5668\u7C7B\u578B\u3002\u63A5\u6536\u5668\u53EF\u4EE5\u662F\u7ED3\u6784\u4F53\u7C7B\u578B\u6216\u8005\u662F\u975E\u7ED3\u6784\u4F53\u7C7B\u578B\u3002\u63A5\u6536\u5668\u662F\u53EF\u4EE5\u5728\u65B9\u6CD5\u7684\u5185\u90E8\u8BBF\u95EE\u7684\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>t Type<span class="token punctuation">)</span> <span class="token function">methodName</span><span class="token punctuation">(</span>parameterList<span class="token punctuation">)</span> returnList<span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E0A\u9762\u7684\u4EE3\u7801\u7247\u6BB5\u521B\u5EFA\u4E86\u4E00\u4E2A\u63A5\u6536\u5668\u7C7B\u578B\u4E3A <code>Type</code> \u7684\u65B9\u6CD5 <code>methodName</code> \u3002</p><h2 id="_1-1-\u5B9E\u4F8B\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#_1-1-\u5B9E\u4F8B\u7ED1\u5B9A" aria-hidden="true">#</a> 1.1 \u5B9E\u4F8B\u7ED1\u5B9A</h2><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token comment">// struct \u5B9A\u4E49\u4E00\u4E2A\u540D\u4E3A Travel \u7684\u7ED3\u6784\u4F53</span>
<span class="token keyword">type</span> Travel <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name   <span class="token builtin">string</span>
    Target <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">// PrintInfo \u5B9A\u4E49\u4E00\u4E2A\u4E0E Lesson \u7684\u7ED1\u5B9A\u7684\u65B9\u6CD5</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>travel Travel<span class="token punctuation">)</span> <span class="token function">PrintInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;name:&quot;</span><span class="token punctuation">,</span> travel<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;target:&quot;</span><span class="token punctuation">,</span> travel<span class="token punctuation">.</span>Target<span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	travel <span class="token operator">:=</span> Travel<span class="token punctuation">{</span>
		Name<span class="token punctuation">:</span>   <span class="token string">&quot;hqq&quot;</span><span class="token punctuation">,</span>
		Target<span class="token punctuation">:</span> <span class="token string">&quot;\u676D\u5DDE&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
    travel<span class="token punctuation">.</span><span class="token function">PrintInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E0A\u9762\u7684\u7A0B\u5E8F\u4E2D\u5B9A\u4E49\u4E86\u4E00\u4E2A\u4E0E\u7ED3\u6784\u4F53 <code>Travel</code> \u7ED1\u5B9A\u7684\u65B9\u6CD5 <code>PrintInfo()</code> \uFF0C\u5176\u4E2D <code>PrintInfo</code> \u662F\u65B9\u6CD5\u540D\uFF0C <code>(travel Travel)</code> \u8868\u793A\u5C06\u6B64\u65B9\u6CD5\u4E0E <code>Travel</code> \u7684\u5B9E\u4F8B\u7ED1\u5B9A\uFF0C\u8FD9\u91CC\u6211\u4EEC\u628A <code>Travel</code> \u79F0\u4E3A\u65B9\u6CD5\u7684\u63A5\u6536\u8005\uFF0C\u800C <code>travel</code> \u8868\u793A\u5B9E\u4F8B\u672C\u8EAB\uFF0C\u76F8\u5F53\u4E8E Python \u4E2D\u7684 <code>self</code> \uFF0CJava \u4E2D\u7684 <code>this</code>\u3002</p><p>\u5F53\u7136\uFF0C\u4F60\u53EF\u4EE5\u628A\u4E0A\u9762\u7A0B\u5E8F\u7684\u65B9\u6CD5\u6539\u6210\u4E00\u4E2A\u51FD\u6570\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Travel <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name   <span class="token builtin">string</span>
    Target <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">PrintInfo</span><span class="token punctuation">(</span>travel Travel<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;name:&quot;</span><span class="token punctuation">,</span> travel<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;target:&quot;</span><span class="token punctuation">,</span> travel<span class="token punctuation">.</span>Target<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     travel <span class="token operator">:=</span> Travel<span class="token punctuation">{</span>
     	Name<span class="token punctuation">:</span>   <span class="token string">&quot;hqq&quot;</span><span class="token punctuation">,</span>
     	Target<span class="token punctuation">:</span> <span class="token string">&quot;\u676D\u5DDE&quot;</span><span class="token punctuation">,</span>
     <span class="token punctuation">}</span>
    <span class="token function">PrintInfo</span><span class="token punctuation">(</span>travel<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD0\u884C\u8FD9\u4E2A\u7A0B\u5E8F\uFF0C\u4E5F\u540C\u6837\u4F1A\u8F93\u51FA\u4E0A\u9762\u4E00\u6837\u7684\u7B54\u6848\uFF0C\u90A3\u4E48\u6211\u4EEC\u4E3A\u4EC0\u4E48\u8FD8\u8981\u7528\u65B9\u6CD5\u5462\uFF1F\u56E0\u4E3A\u5728 Go \u4E2D\uFF0C\u76F8\u540C\u7684\u540D\u5B57\u7684\u65B9\u6CD5\u53EF\u4EE5\u5B9A\u4E49\u5728\u4E0D\u540C\u7684\u7C7B\u578B\u4E0A\uFF0C\u800C\u76F8\u540C\u540D\u5B57\u7684\u51FD\u6570\u662F\u4E0D\u88AB\u5141\u8BB8\u7684\u3002\u5982\u679C\u4F60\u5728\u4E0A\u9762\u8FD9\u4E2A\u7A0B\u5E8F\u6DFB\u52A0\u4E00\u4E2A\u540C\u540D\u51FD\u6570\uFF0C\u5C31\u4F1A\u62A5\u9519\u3002\u4F46\u662F\u5728\u4E0D\u540C\u7684\u7ED3\u6784\u4F53\u4E0A\u9762\u5B9A\u4E49\u540C\u540D\u7684\u65B9\u6CD5\u5C31\u662F\u53EF\u884C\u7684\u3002</p><div class="language-go ext-go"><pre class="language-go"><code>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Travel <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name   <span class="token builtin">string</span>
    Target <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>travel Travel<span class="token punctuation">)</span> <span class="token function">PrintInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;name:&quot;</span><span class="token punctuation">,</span> travel<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;target:&quot;</span><span class="token punctuation">,</span> travel<span class="token punctuation">.</span>Target<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Author <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>author Author<span class="token punctuation">)</span> <span class="token function">PrintInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;author name:&quot;</span><span class="token punctuation">,</span> author<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     travel <span class="token operator">:=</span> Travel<span class="token punctuation">{</span>
     	Name<span class="token punctuation">:</span>   <span class="token string">&quot;hqq&quot;</span><span class="token punctuation">,</span>
     	Target<span class="token punctuation">:</span> <span class="token string">&quot;\u676D\u5DDE&quot;</span><span class="token punctuation">,</span>
     <span class="token punctuation">}</span>
    travel<span class="token punctuation">.</span><span class="token function">PrintInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    author <span class="token operator">:=</span> Author<span class="token punctuation">{</span><span class="token string">&quot;\u6D4B\u8BD5&quot;</span><span class="token punctuation">}</span>
    author<span class="token punctuation">.</span><span class="token function">PrintInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_1-2-\u6307\u9488\u63A5\u6536\u5668\u4E0E\u503C\u63A5\u6536\u5668" tabindex="-1"><a class="header-anchor" href="#_1-2-\u6307\u9488\u63A5\u6536\u5668\u4E0E\u503C\u63A5\u6536\u5668" aria-hidden="true">#</a> 1.2 \u6307\u9488\u63A5\u6536\u5668\u4E0E\u503C\u63A5\u6536\u5668</h2><p>\u503C\u63A5\u6536\u5668\u548C\u6307\u9488\u63A5\u6536\u5668\u4E4B\u95F4\u7684\u533A\u522B\u5728\u4E8E\uFF0C\u5728\u6307\u9488\u63A5\u6536\u5668\u7684\u65B9\u6CD5\u5185\u90E8\u7684\u6539\u53D8\u5BF9\u4E8E\u8C03\u7528\u8005\u662F\u53EF\u89C1\u7684\uFF0C\u7136\u800C\u503C\u63A5\u6536\u5668\u7684\u65B9\u6CD5\u5185\u90E8\u7684\u6539\u53D8\u5BF9\u4E8E\u8C03\u7528\u8005\u662F\u4E0D\u53EF\u89C1\u7684\uFF0C\u6240\u4EE5\u82E5\u8981\u6539\u53D8\u5B9E\u4F8B\u7684\u5C5E\u6027\u65F6\uFF0C\u5FC5\u987B\u4F7F\u7528\u6307\u9488\u4F5C\u4E3A\u65B9\u6CD5\u7684\u63A5\u6536\u8005\u3002\u770B\u770B\u4E0B\u9762\u7684\u4F8B\u5B50\u5C31\u77E5\u9053\u4E86\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Travel <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name   <span class="token builtin">string</span>
    Target <span class="token builtin">string</span>
    SpendTime <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>travel Travel<span class="token punctuation">)</span> <span class="token function">PrintInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;name:&quot;</span><span class="token punctuation">,</span> travel<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;target:&quot;</span><span class="token punctuation">,</span> travel<span class="token punctuation">.</span>Target<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;SpendTime:&quot;</span><span class="token punctuation">,</span> travel<span class="token punctuation">.</span>SpendTime<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>travel Travel<span class="token punctuation">)</span> <span class="token function">ChangeLessonName</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    travel<span class="token punctuation">.</span>name <span class="token operator">=</span> name
<span class="token punctuation">}</span>

<span class="token comment">// AddSpendTime \u5B9A\u4E49\u4E00\u4E2A\u4E0E Person \u7684\u7ED1\u5B9A\u7684\u65B9\u6CD5\uFF0C\u4F7F age \u503C\u52A0 n</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>travel <span class="token operator">*</span>Travel<span class="token punctuation">)</span> <span class="token function">AddSpendTime</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    travel<span class="token punctuation">.</span>SpendTime <span class="token operator">=</span> travel<span class="token punctuation">.</span>SpendTime <span class="token operator">+</span> n
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    travel <span class="token operator">:=</span> Travel<span class="token punctuation">{</span>
        Name<span class="token punctuation">:</span>   <span class="token string">&quot;hqq&quot;</span><span class="token punctuation">,</span>
        Target<span class="token punctuation">:</span> <span class="token string">&quot;\u676D\u5DDE&quot;</span><span class="token punctuation">,</span>
        SpendTime<span class="token punctuation">:</span>  <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;before change&quot;</span><span class="token punctuation">)</span>
    travel<span class="token punctuation">.</span><span class="token function">PrintInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;after change&quot;</span><span class="token punctuation">)</span>
    travel<span class="token punctuation">.</span><span class="token function">AddSpendTime</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    travel<span class="token punctuation">.</span><span class="token function">ChangeLessonName</span><span class="token punctuation">(</span><span class="token string">&quot;Go\u8BED\u8A00\u5FAE\u670D\u52A1\u67B6\u6784\u6838\u5FC322\u8BB2&quot;</span><span class="token punctuation">)</span>
    travel<span class="token punctuation">.</span><span class="token function">PrintInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5728\u4E0A\u9762\u7684\u7A0B\u5E8F\u4E2D\uFF0C <code>AddSpendTime</code> \u4F7F\u7528\u6307\u9488\u63A5\u6536\u5668\u6700\u7EC8\u80FD\u6539\u53D8\u5B9E\u4F8B\u7684 <code>SpendTime</code> \u503C\uFF0C\u7136\u800C\u4F7F\u7528\u503C\u63A5\u6536\u5668\u7684 <code>ChangeLessonName</code> \u6700\u7EC8\u6CA1\u6709\u6539\u53D8\u5B9E\u4F8B <code>Name</code> \u7684\u503C\u3002</p><h2 id="_1-3-\u5728\u65B9\u6CD5\u4E2D\u4F7F\u7528\u503C\u63A5\u6536\u5668-\u4E0E-\u5728\u51FD\u6570\u4E2D\u4F7F\u7528\u503C\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_1-3-\u5728\u65B9\u6CD5\u4E2D\u4F7F\u7528\u503C\u63A5\u6536\u5668-\u4E0E-\u5728\u51FD\u6570\u4E2D\u4F7F\u7528\u503C\u53C2\u6570" aria-hidden="true">#</a> 1.3 \u5728\u65B9\u6CD5\u4E2D\u4F7F\u7528\u503C\u63A5\u6536\u5668 \u4E0E \u5728\u51FD\u6570\u4E2D\u4F7F\u7528\u503C\u53C2\u6570</h2><p>\u5F53\u4E00\u4E2A\u51FD\u6570\u6709\u4E00\u4E2A\u503C\u53C2\u6570\uFF0C\u5B83\u53EA\u80FD\u63A5\u53D7\u4E00\u4E2A\u503C\u53C2\u6570\u3002\u5F53\u4E00\u4E2A\u65B9\u6CD5\u6709\u4E00\u4E2A\u503C\u63A5\u6536\u5668\uFF0C\u5B83\u53EF\u4EE5\u63A5\u53D7\u503C\u63A5\u6536\u5668\u548C\u6307\u9488\u63A5\u6536\u5668\u3002</p><div class="language-go ext-go"><pre class="language-go"><code>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Travel <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name   <span class="token builtin">string</span>
    Target <span class="token builtin">string</span>
    SpendTime <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>travel Travel<span class="token punctuation">)</span> <span class="token function">PrintInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>travel<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">PrintInfo</span><span class="token punctuation">(</span>travel Travel<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>travel<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    travel <span class="token operator">:=</span> Travel<span class="token punctuation">{</span><span class="token string">&quot;Go\u8BED\u8A00\u5FAE\u670D\u52A1\u6838\u5FC3\u67B6\u678422\u8BB2&quot;</span><span class="token punctuation">}</span>
    <span class="token function">PrintInfo</span><span class="token punctuation">(</span>travel<span class="token punctuation">)</span>
    travel<span class="token punctuation">.</span><span class="token function">PrintInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    bPtr <span class="token operator">:=</span> <span class="token operator">&amp;</span>travel
    <span class="token comment">//PrintInfo(bPtr) // error</span>
    bPtr<span class="token punctuation">.</span><span class="token function">PrintInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5728\u4E0A\u9762\u7684\u7A0B\u5E8F\u4E2D\uFF0C\u4F7F\u7528\u503C\u53C2\u6570 <code>PrintInfo(lesson)</code> \u6765\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570\u662F\u5408\u6CD5\u7684\uFF0C\u4F7F\u7528\u503C\u63A5\u6536\u5668\u6765\u8C03\u7528 <code>travel.PrintInfo()</code> \u4E5F\u662F\u5408\u6CD5\u7684\u3002</p><p>\u7136\u540E\u5728\u7A0B\u5E8F\u4E2D\u6211\u4EEC\u521B\u5EFA\u4E86\u4E00\u4E2A\u6307\u5411 <code>Travel</code> \u7684\u6307\u9488 <code>bPtr</code> \uFF0C\u901A\u8FC7\u4F7F\u7528\u6307\u9488\u63A5\u6536\u5668\u6765\u8C03\u7528 <code>bPtr.PrintInfo()</code> \u662F\u5408\u6CD5\u7684\uFF0C\u4F46\u4F7F\u7528\u503C\u53C2\u6570\u8C03\u7528 <code>PrintInfo(bPtr)</code> \u662F\u975E\u6CD5\u7684\u3002</p><h2 id="_1-4-\u5728\u975E\u7ED3\u6784\u4F53\u4E0A\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_1-4-\u5728\u975E\u7ED3\u6784\u4F53\u4E0A\u7684\u65B9\u6CD5" aria-hidden="true">#</a> 1.4 \u5728\u975E\u7ED3\u6784\u4F53\u4E0A\u7684\u65B9\u6CD5</h2><p>\u4E0D\u4EC5\u53EF\u4EE5\u5728\u7ED3\u6784\u4F53\u7C7B\u578B\u4E0A\u5B9A\u4E49\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u5728\u975E\u7ED3\u6784\u4F53\u7C7B\u578B\u4E0A\u5B9A\u4E49\u65B9\u6CD5\uFF0C\u4F46\u662F\u6709\u4E00\u4E2A\u95EE\u9898\u3002\u4E3A\u4E86\u5728\u4E00\u4E2A\u7C7B\u578B\u4E0A\u5B9A\u4E49\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u65B9\u6CD5\u7684\u63A5\u6536\u5668\u7C7B\u578B\u5B9A\u4E49\u548C\u65B9\u6CD5\u7684\u5B9A\u4E49\u5E94\u8BE5\u5728\u540C\u4E00\u4E2A\u5305\u4E2D\u3002\u4F8B\u5982\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> myInt <span class="token builtin">int</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>a myInt<span class="token punctuation">)</span> <span class="token function">add</span><span class="token punctuation">(</span>b myInt<span class="token punctuation">)</span> myInt <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> x myInt <span class="token operator">=</span> <span class="token number">50</span>
    <span class="token keyword">var</span> y myInt <span class="token operator">=</span> <span class="token number">7</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment">// 57</span>
<span class="token punctuation">}</span>
</code></pre></div>`,24),c=[o];function e(u,l){return s(),a("div",null,c)}var k=n(p,[["render",e],["__file","6-\u5F52\u7EB3\u603B\u7ED3\u5E38\u7528.html.vue"]]);export{k as default};
