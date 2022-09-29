import{_ as n,o as s,c as a,e as t}from"./app.ad4da1a1.js";const p={},o=t(`<h1 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> select</h1><hr><p><strong>select</strong> \u8BED\u53E5\u7528\u5728\u591A\u4E2A\u53D1\u9001/\u63A5\u6536\u901A\u9053\u64CD\u4F5C\u4E2D\u8FDB\u884C\u9009\u62E9\u3002</p><ul><li><code>select</code> \u8BED\u53E5\u4F1A\u4E00\u76F4\u963B\u585E\uFF0C\u76F4\u5230\u53D1\u9001/\u63A5\u6536\u64CD\u4F5C\u51C6\u5907\u5C31\u7EEA\u3002</li><li>\u5982\u679C\u6709\u591A\u4E2A\u901A\u9053\u64CD\u4F5C\u51C6\u5907\u5B8C\u6BD5\uFF0C <code>select</code> \u4F1A\u968F\u673A\u5730\u9009\u53D6\u5176\u4E2D\u4E4B\u4E00\u6267\u884C\u3002</li></ul><p><code>select</code> \u8BED\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-GO ext-GO"><pre class="language-GO"><code>
select {
    case expression1:
        code
    case expression2:
        code
    default:
        code
}
</code></pre></div><h3 id="_1-1-\u591A\u4E2Acase\u6761\u4EF6\u540C\u65F6\u6EE1\u8DB3" tabindex="-1"><a class="header-anchor" href="#_1-1-\u591A\u4E2Acase\u6761\u4EF6\u540C\u65F6\u6EE1\u8DB3" aria-hidden="true">#</a> 1.1 \u591A\u4E2Acase\u6761\u4EF6\u540C\u65F6\u6EE1\u8DB3</h3><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ch1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
	ch2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
	ch3 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>

	ch1 <span class="token operator">&lt;-</span> <span class="token string">&quot;Go\u8BED\u8A00\u57FA\u7840\u7EC3\u4E601&quot;</span>
	ch2 <span class="token operator">&lt;-</span> <span class="token string">&quot;Go\u8BED\u8A00\u57FA\u7840\u7EC3\u4E602&quot;</span>
	ch3 <span class="token operator">&lt;-</span> <span class="token string">&quot;Go\u8BED\u8A00\u57FA\u7840\u7EC3\u4E603&quot;</span>

	<span class="token keyword">select</span> <span class="token punctuation">{</span>
	<span class="token keyword">case</span> message1 <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch1<span class="token punctuation">:</span>
        	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;message1:&quot;</span><span class="token punctuation">,</span> message1<span class="token punctuation">)</span>
	<span class="token keyword">case</span> message2 <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch2<span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;message2:&quot;</span><span class="token punctuation">,</span> message2<span class="token punctuation">)</span>
	<span class="token keyword">case</span> message3 <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch3<span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;message3:&quot;</span><span class="token punctuation">,</span> message3<span class="token punctuation">)</span>
        <span class="token comment">// \u9ED8\u8BA4\u8F93\u51FA</span>
       <span class="token keyword">default</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;No data received.&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E0A\u9762\u7A0B\u5E8F\u7684\u4E09\u4E2A\u901A\u9053\uFF0C\u5728\u6267\u884C <code>select</code> \u8BED\u53E5\u65F6\uFF0C\u5982\u679C\u6709\u673A\u4F1A\u7684\u8BDD\u4F1A\u8FD0\u884C\u6240\u6709\u8868\u8FBE\u5F0F\uFF0C\u53EA\u8981\u5176\u4E2D\u4E00\u4E2A\u901A\u9053\u63A5\u6536\u5230\u6570\u636E\uFF0C\u90A3\u4E48\u5C31\u4F1A\u6267\u884C\u5BF9\u5E94\u7684 <code>case</code> \u4EE3\u7801\uFF0C\u7136\u540E\u9000\u51FA\u3002\u7A0B\u5E8F\u53EF\u80FD\u8F93\u51FA\u4E0B\u9762\u8BED\u53E5\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>message1:Go\u8BED\u8A00\u57FA\u7840\u7EC3\u4E601
\u6216\u8005
message2:Go\u8BED\u8A00\u57FA\u7840\u7EC3\u4E602
\u6216\u8005
message3:Go\u8BED\u8A00\u57FA\u7840\u7EC3\u4E603
</code></pre></div><h3 id="_1-2-\u6B7B\u9501" tabindex="-1"><a class="header-anchor" href="#_1-2-\u6B7B\u9501" aria-hidden="true">#</a> 1.2 \u6B7B\u9501</h3><p>\u5982\u679C\u6CA1\u6709 <code>default</code> \u5206\u652F\uFF0C <code>select</code> \u5C31\u4F1A\u963B\u585E\uFF0C\u5982\u679C\u4E00\u76F4\u6CA1\u6709\u547D\u4E2D\u5176\u4E2D\u7684\u67D0\u4E2A <code>case</code> \u6700\u540E\u4F1A\u9020\u6210\u6B7B\u9501\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u521B\u5EFA\u4E24\u4E2A\u901A\u9053</span>
    ch1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    ch2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    ch3 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>

    <span class="token keyword">select</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5982\u679C\u4ECE\u901A\u9053 1 \u6536\u5230\u6570\u636E</span>
    <span class="token keyword">case</span> message1 <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch1<span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;ch1 received:&quot;</span><span class="token punctuation">,</span> message1<span class="token punctuation">)</span>
    <span class="token comment">// \u5982\u679C\u4ECE\u901A\u9053 2 \u6536\u5230\u6570\u636E</span>
    <span class="token keyword">case</span> message2 <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch2<span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;ch2 received:&quot;</span><span class="token punctuation">,</span> message2<span class="token punctuation">)</span>
	<span class="token comment">// \u5982\u679C\u4ECE\u901A\u9053 3 \u6536\u5230\u6570\u636E</span>
    <span class="token keyword">case</span> message3 <span class="token operator">:=</span> <span class="token operator">&lt;-</span>ch3<span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;ch3 received:&quot;</span><span class="token punctuation">,</span> message3<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD0\u884C\u4E0A\u9762\u7684\u7A0B\u5E8F\u4F1A\u9020\u6210\u6B7B\u9501\u3002\u89E3\u51B3\u8BE5\u95EE\u9898\u7684\u65B9\u6CD5\u662F\u5199\u597D <code>default</code> \u5206\u652F\u3002</p><p>\u5F53\u7136\u8FD8\u6709\u53E6\u4E00\u79CD\u60C5\u51B5\u4F1A\u5BFC\u81F4\u6B7B\u9501\u7684\u53D1\u751F\uFF0C\u90A3\u5C31\u662F\u4F7F\u7528\u7A7A <code>select</code> \uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">select</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD0\u884C\u4E0A\u9762\u7684\u7A0B\u5E8F\u4F1A\u629B\u51FA <code>panic</code> \u3002</p><h3 id="_1-3-select-\u8D85\u65F6\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#_1-3-select-\u8D85\u65F6\u5904\u7406" aria-hidden="true">#</a> 1.3 select \u8D85\u65F6\u5904\u7406</h3><p>\u5F53 <code>case</code> \u91CC\u7684\u901A\u9053\u59CB\u7EC8\u6CA1\u6709\u63A5\u6536\u5230\u6570\u636E\u65F6\uFF0C\u800C\u4E14\u4E5F\u6CA1\u6709 <code>default</code> \u8BED\u53E5\u65F6\uFF0C <code>select</code> \u6574\u4F53\u5C31\u4F1A\u963B\u585E\uFF0C\u4F46\u662F\u6709\u65F6\u6211\u4EEC\u5E76\u4E0D\u5E0C\u671B <code>select</code> \u4E00\u76F4\u963B\u585E\u4E0B\u53BB\uFF0C\u8FD9\u65F6\u5019\u5C31\u53EF\u4EE5\u624B\u52A8\u8BBE\u7F6E\u4E00\u4E2A\u8D85\u65F6\u65F6\u95F4\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">makeTimeout</span><span class="token punctuation">(</span>ch <span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">,</span> t <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> time<span class="token punctuation">.</span><span class="token function">Duration</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">)</span>
    ch <span class="token operator">&lt;-</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    c1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    c2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    c3 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    timeout <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>

    <span class="token keyword">go</span> <span class="token function">makeTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

    <span class="token keyword">select</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> msg1 <span class="token operator">:=</span> <span class="token operator">&lt;-</span>c1<span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;c1 received: &quot;</span><span class="token punctuation">,</span> msg1<span class="token punctuation">)</span>
    <span class="token keyword">case</span> msg2 <span class="token operator">:=</span> <span class="token operator">&lt;-</span>c2<span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;c2 received: &quot;</span><span class="token punctuation">,</span> msg2<span class="token punctuation">)</span>
    <span class="token keyword">case</span> msg3 <span class="token operator">:=</span> <span class="token operator">&lt;-</span>c3<span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;c3 received: &quot;</span><span class="token punctuation">,</span> msg3<span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token operator">&lt;-</span>timeout<span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Timeout, exit.&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_1-4-\u8BFB\u53D6-\u5199\u5165\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_1-4-\u8BFB\u53D6-\u5199\u5165\u6570\u636E" aria-hidden="true">#</a> 1.4 \u8BFB\u53D6/\u5199\u5165\u6570\u636E</h3><p><code>select</code> \u91CC\u7684 <code>case</code> \u8868\u8FBE\u5F0F\u53EA\u80FD\u5BF9\u901A\u9053\u8FDB\u884C\u64CD\u4F5C\uFF0C\u4E0D\u7BA1\u4F60\u662F\u5F80\u901A\u9053\u5199\u5165\u6570\u636E\uFF0C\u8FD8\u662F\u4ECE\u901A\u9053\u8BFB\u51FA\u6570\u636E\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    c1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

    c1 <span class="token operator">&lt;-</span> <span class="token string">&quot;Go\u8BED\u8A00\u57FA\u7840--select1&quot;</span>
    <span class="token keyword">select</span> <span class="token punctuation">{</span>
       <span class="token keyword">case</span> c1 <span class="token operator">&lt;-</span> <span class="token string">&quot;Go\u8BED\u8A00\u57FA\u7840--select2&quot;</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;c1 received: &quot;</span><span class="token punctuation">,</span> <span class="token operator">&lt;-</span>c1<span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;c1 received: &quot;</span><span class="token punctuation">,</span> <span class="token operator">&lt;-</span>c1<span class="token punctuation">)</span>
      <span class="token keyword">default</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;channel blocking&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,23),e=[o];function c(l,u){return s(),a("div",null,e)}var i=n(p,[["render",c],["__file","1-\u5165\u95E8.html.vue"]]);export{i as default};
