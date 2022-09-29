import{_ as n,o as s,c as a,e as t}from"./app.ad4da1a1.js";const p={},o=t(`<h1 id="select-\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#select-\u5E94\u7528" aria-hidden="true">#</a> select \u5E94\u7528</h1><hr><h3 id="_1-1-\u591A\u4E2A-task-\u5E76\u7ED9\u7528\u6237\u8FD4\u56DE\u6700\u5FEB\u7684-task-\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#_1-1-\u591A\u4E2A-task-\u5E76\u7ED9\u7528\u6237\u8FD4\u56DE\u6700\u5FEB\u7684-task-\u7ED3\u679C" aria-hidden="true">#</a> 1.1 \u591A\u4E2A task\uFF0C\u5E76\u7ED9\u7528\u6237\u8FD4\u56DE\u6700\u5FEB\u7684 task \u7ED3\u679C</h3><p>\u6BCF\u4E2A\u4EFB\u52A1\u6267\u884C\u7684\u65F6\u95F4\u4E0D\u540C\uFF0C\u4F7F\u7528 <code>select</code> \u8BED\u53E5\u7B49\u5F85\u76F8\u5E94\u7684\u901A\u9053\u53D1\u51FA\u54CD\u5E94\u3002<code>select</code> \u4F1A\u9009\u62E9\u9996\u5148\u54CD\u5E94\u5148\u5B8C\u6210\u7684 task\uFF0C\u800C\u5FFD\u7565\u5176\u5B83\u7684\u54CD\u5E94\u3002\u4F7F\u7528\u8FD9\u79CD\u65B9\u6CD5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u505A\u591A\u4E2A task\uFF0C\u5E76\u7ED9\u7528\u6237\u8FD4\u56DE\u6700\u5FEB\u7684 task \u7ED3\u679C\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">task1</span><span class="token punctuation">(</span>ch <span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
    ch <span class="token operator">&lt;-</span> <span class="token string">&quot;select \u5E94\u75281&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">task2</span><span class="token punctuation">(</span>ch <span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">7</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
    ch <span class="token operator">&lt;-</span> <span class="token string">&quot;select \u5E94\u75282&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">task3</span><span class="token punctuation">(</span>ch <span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
    ch <span class="token operator">&lt;-</span> <span class="token string">&quot;select \u5E94\u75283&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u521B\u5EFA\u4E24\u4E2A\u901A\u9053</span>
    ch1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span>
    ch2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span>
    ch3 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">task1</span><span class="token punctuation">(</span>ch1<span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">task2</span><span class="token punctuation">(</span>ch2<span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">task3</span><span class="token punctuation">(</span>ch3<span class="token punctuation">)</span>

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
</code></pre></div><p>\u5F53\u7136\uFF0C\u4E0A\u9762\u7684\u7A0B\u5E8F\u4F1A\u53D1\u73B0\uFF0C\u6CA1\u6709 <code>default</code> \u5206\u652F\uFF0C\u56E0\u4E3A\u5982\u679C\u52A0\u4E86\u8BE5\u9ED8\u8BA4\u5206\u652F\uFF0C\u5982\u679C\u8FD8\u6CA1\u4ECE\u901A\u9053\u63A5\u6536\u5230\u6570\u636E\uFF0C <code>select</code> \u8BED\u53E5\u5C31\u4F1A\u76F4\u63A5\u6267\u884C <code>default</code> \u5206\u652F\u7136\u540E\u9000\u51FA\uFF0C\u800C\u4E0D\u662F\u88AB\u963B\u585E\u3002</p>`,6),c=[o];function e(l,u){return s(),a("div",null,c)}var i=n(p,[["render",e],["__file","2-\u5E94\u7528.html.vue"]]);export{i as default};
