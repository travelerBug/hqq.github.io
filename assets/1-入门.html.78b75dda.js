import{_ as n,o as s,c as a,e as t}from"./app.ad4da1a1.js";const p={},o=t(`<h1 id="\u901A\u9053" tabindex="-1"><a class="header-anchor" href="#\u901A\u9053" aria-hidden="true">#</a> \u901A\u9053</h1><hr><p><strong>\u901A\u9053(channel)</strong> \uFF0C\u5C31\u662F\u4E00\u4E2A\u7BA1\u9053\uFF0C\u53EF\u4EE5\u60F3\u50CF\u6210 Go \u534F\u7A0B\u4E4B\u95F4\u901A\u4FE1\u7684\u7BA1\u9053\u3002\u5B83\u662F\u4E00\u79CD\u961F\u5217\u5F0F\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u9075\u5FAA\u5148\u5165\u5148\u51FA\u7684\u89C4\u5219\u3002</p><h2 id="_1-1-\u901A\u9053\u7684\u58F0\u660E" tabindex="-1"><a class="header-anchor" href="#_1-1-\u901A\u9053\u7684\u58F0\u660E" aria-hidden="true">#</a> 1.1 \u901A\u9053\u7684\u58F0\u660E</h2><p>\u6BCF\u4E2A\u901A\u9053\u90FD\u53EA\u80FD\u4F20\u9012\u4E00\u79CD\u6570\u636E\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u5728\u4F60\u58F0\u660E\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u8981\u6307\u5B9A\u901A\u9053\u7684\u7C7B\u578B\u3002<code>chan Type</code> \u8868\u793A <code>Type</code> \u7C7B\u578B\u7684\u901A\u9053\u3002\u901A\u9053\u7684\u96F6\u503C\u4E3A <code>nil</code> \u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">var</span> channel_name <span class="token keyword">chan</span> channel_types
</code></pre></div><p>\u4E0B\u9762\u7684\u8BED\u53E5\u58F0\u660E\u4E86\u4E00\u4E2A\u7C7B\u578B\u4E3A <code>string</code> \u7684\u901A\u9053 <code>nameChan</code> \uFF0C\u8BE5\u901A\u9053 <code>nameChan</code> \u7684\u503C\u4E3A <code>nil</code> \u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">var</span> ch <span class="token keyword">chan</span> <span class="token builtin">string</span>
</code></pre></div><h2 id="_1-2-\u901A\u9053\u7684\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#_1-2-\u901A\u9053\u7684\u521D\u59CB\u5316" aria-hidden="true">#</a> 1.2 \u901A\u9053\u7684\u521D\u59CB\u5316</h2><p>\u58F0\u660E\u5B8C\u901A\u9053\u540E\uFF0C\u901A\u9053\u7684\u503C\u4E3A <code>nil</code> \uFF0C\u6211\u4EEC\u4E0D\u80FD\u76F4\u63A5\u4F7F\u7528\uFF0C\u5FC5\u987B\u5148\u4F7F\u7528 <code>make</code> \u51FD\u6570\u5BF9\u901A\u9053\u8FDB\u884C\u521D\u59CB\u5316\u64CD\u4F5C\u3002</p><div class="language-go ext-go"><pre class="language-go"><code>ch <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> channel_type<span class="token punctuation">)</span>
</code></pre></div><p>\u4F7F\u7528\u4E0B\u9762\u7684\u8BED\u53E5\u6211\u4EEC\u53EF\u4EE5\u5BF9\u4E0A\u9762\u58F0\u660E\u8FC7\u7684\u901A\u9053 <code>ch</code> \u8FDB\u884C\u521D\u59CB\u5316\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code>ch <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span>
</code></pre></div><p>\u8FD9\u6837\uFF0C\u6211\u4EEC\u5C31\u5DF2\u7ECF\u5B9A\u4E49\u597D\u4E86\u4E00\u4E2A <code>string</code> \u7C7B\u578B\u7684\u901A\u9053 <code>nameChan</code> \u3002\u5F53\u7136\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u7B80\u77ED\u58F0\u660E\u8BED\u53E5\u4E00\u6B21\u6027\u5B9A\u4E49\u4E00\u4E2A\u901A\u9053\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code>ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="_1-3-\u4F7F\u7528\u901A\u9053\u53D1\u9001\u548C\u63A5\u6536\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_1-3-\u4F7F\u7528\u901A\u9053\u53D1\u9001\u548C\u63A5\u6536\u6570\u636E" aria-hidden="true">#</a> 1.3 \u4F7F\u7528\u901A\u9053\u53D1\u9001\u548C\u63A5\u6536\u6570\u636E</h2><p>\u5F80\u901A\u9053\u53D1\u9001\u6570\u636E\u4F7F\u7528\u7684\u662F\u4E0B\u9762\u7684\u8BED\u6CD5\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token comment">// \u628A data \u6570\u636E\u53D1\u9001\u5230 channel_name \u901A\u9053\u4E2D</span>
<span class="token comment">// \u5373\u628A data \u6570\u636E\u5199\u5165\u5230 channel_name \u901A\u9053\u4E2D</span>
channel_name <span class="token operator">&lt;-</span> data
</code></pre></div><p>\u4ECE\u901A\u9053\u63A5\u6536\u6570\u636E\u4F7F\u7528\u7684\u662F\u4E0B\u9762\u7684\u8BED\u6CD5\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token comment">// \u4ECE channel_name \u901A\u9053\u4E2D\u63A5\u6536\u6570\u636E\u5230 value</span>
<span class="token comment">// \u5373\u4ECE channel_name \u901A\u9053\u4E2D\u8BFB\u53D6\u6570\u636E\u5230 value</span>
value <span class="token operator">:=</span> <span class="token operator">&lt;-</span> channel_name
</code></pre></div><p>\u901A\u9053\u65C1\u7684\u7BAD\u5934\u65B9\u5411\u6307\u5B9A\u4E86\u662F\u53D1\u9001\u6570\u636E\u8FD8\u662F\u63A5\u6536\u6570\u636E\u3002\u7BAD\u5934\u6307\u5411\u901A\u9053\uFF0C\u4EE3\u8868\u6570\u636E\u5199\u5165\u5230\u901A\u9053\u4E2D\uFF1B\u7BAD\u5934\u5F80\u901A\u9053\u6307\u5411\u5916\uFF0C\u4EE3\u8868\u4ECE\u901A\u9053\u8BFB\u6570\u636E\u51FA\u53BB\u3002</p><p>\u4E0B\u9762\u7684\u4F8B\u5B50\u6F14\u793A\u4E86\u901A\u9053\u7684\u4F7F\u7528\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">PrintChan</span><span class="token punctuation">(</span>c <span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u5F80\u901A\u9053\u4F20\u5165\u6570\u636E &quot;Go\u8BED\u8A00\u57FA\u7840\u7EC3\u4E60--channel&quot;</span>
	c <span class="token operator">&lt;-</span> <span class="token string">&quot;Go\u8BED\u8A00\u57FA\u7840\u7EC3\u4E60--channel&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u901A\u9053</span>
	ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span>
	<span class="token comment">// \u6253\u5370 &quot;\u5B66\u4E60\u8BFE\u7A0B:&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5B66\u4E60\u8BFE\u7A0B:&quot;</span><span class="token punctuation">)</span>
	<span class="token comment">// \u5F00\u542F\u534F\u7A0B</span>
	<span class="token keyword">go</span> <span class="token function">PrintChan</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>
	<span class="token comment">// \u4ECE\u901A\u9053\u63A5\u6536\u6570\u636E</span>
	rec <span class="token operator">:=</span> <span class="token operator">&lt;-</span> ch
	<span class="token comment">// \u6253\u5370\u4ECE\u901A\u9053\u63A5\u6536\u5230\u7684\u6570\u636E</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>rec<span class="token punctuation">)</span>
	<span class="token comment">// \u6253\u5370 &quot;\u5B66\u4E60\u76EE\u6807:\u5168\u9762\u638C\u63E1Go\u8BED\u8A00\u5FAE\u670D\u52A1\u843D\u5730\uFF0C\u4EE3\u7801\u7EA7\u4E00\u6B21\u6027\u89E3\u51B3\u5FAE\u670D\u52A1\u548C\u5206\u5E03\u5F0F\u7CFB\u7EDF\u3002&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5B66\u4E60\u76EE\u6807:\u5168\u9762\u638C\u63E1Go\u8BED\u8A00\u57FA\u7840&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8BE5\u7A0B\u5E8F\u6A21\u62DF\u4E86\u4E24\u4E2A\u534F\u7A0B\u5E76\u53D1\u8C03\u7528\u7684\u573A\u666F\uFF0C\u5728 <code>main</code> \u51FD\u6570\u4E2D\uFF0C\u521B\u5EFA\u4E86\u4E00\u4E2A\u901A\u9053\uFF0C\u5728 <code>main</code> \u51FD\u6570\u4E2D\u5148\u6253\u5370\u4E86 <code>\u5B66\u4E60\u8BFE\u7A0B:</code> \uFF0C\u7136\u540E\u5F00\u542F\u534F\u7A0B\u8FD0\u884C <code>PrintChan</code> \u51FD\u6570\uFF0C\u800C <code>main</code> \u51FD\u6570\u901A\u8FC7\u534F\u7A0B\u63A5\u6536\u6570\u636E\uFF0C\u4E3B\u534F\u7A0B\u53D1\u751F\u4E86\u963B\u585E\uFF0C\u7B49\u5F85\u901A\u9053 <code>ch</code> \u53D1\u9001\u7684\u6570\u636E\uFF0C\u5728\u51FD\u6570\u4E2D\uFF0C\u6570\u636E <code>Go\u8BED\u8A00\u57FA\u7840\u7EC3\u4E60--channel</code> \u4F20\u5165\u901A\u9053\u4E2D\uFF0C\u5F53\u5199\u5165\u5B8C\u6210\u65F6\uFF0C\u4E3B\u534F\u7A0B\u63A5\u6536\u4E86\u6570\u636E\uFF0C\u89E3\u9664\u4E86\u963B\u585E\u72B6\u6001\uFF0C\u6253\u5370\u51FA\u4ECE\u901A\u9053\u63A5\u6536\u5230\u7684\u6570\u636E <code>Go\u8BED\u8A00\u57FA\u7840\u7EC3\u4E60--channel</code> \uFF0C\u6700\u540E\u6253\u5370 \`\u5B66\u4E60\u76EE\u6807:\u5168\u9762\u638C\u63E1 Go \u8BED\u8A00\u5FAE\u670D\u52A1\u843D\u5730\uFF0C\u4EE3\u7801\u7EA7\u4E00\u6B21\u6027\u89E3\u51B3\u5FAE\u670D\u52A1\u548C\u5206\u5E03\u5F0F\u7CFB\u7EDF\u3002 <strong>Tips</strong>: <strong>\u53D1\u9001\u4E0E\u63A5\u6536\u9ED8\u8BA4\u662F\u963B\u585E\u7684</strong></p><ul><li>\u4ECE\u4E0A\u9762\u7684\u4F8B\u5B50\u6211\u4EEC\u77E5\u9053\uFF0C\u5982\u679C\u4ECE\u901A\u9053\u63A5\u6536\u6570\u636E\u6CA1\u63A5\u6536\u5B8C\u4E3B\u534F\u7A0B\u662F\u4E0D\u4F1A\u7EE7\u7EED\u6267\u884C\u4E0B\u53BB\u7684\u3002\u5F53\u628A\u6570\u636E\u53D1\u9001\u5230\u901A\u9053\u65F6\uFF0C\u4F1A\u5728\u53D1\u9001\u6570\u636E\u7684\u8BED\u53E5\u5904\u53D1\u751F\u963B\u585E\uFF0C\u76F4\u5230\u6709\u5176\u5B83\u534F\u7A0B\u4ECE\u901A\u9053\u8BFB\u53D6\u5230\u6570\u636E\uFF0C\u624D\u4F1A\u89E3\u9664\u963B\u585E\u3002\u4E0E\u6B64\u7C7B\u4F3C\uFF0C\u5F53\u8BFB\u53D6\u901A\u9053\u7684\u6570\u636E\u65F6\uFF0C\u5982\u679C\u6CA1\u6709\u5176\u5B83\u7684\u534F\u7A0B\u628A\u6570\u636E\u5199\u5165\u5230\u8FD9\u4E2A\u901A\u9053\uFF0C\u90A3\u4E48\u8BFB\u53D6\u8FC7\u7A0B\u5C31\u4F1A\u4E00\u76F4\u963B\u585E\u7740\u3002</li></ul><h2 id="_1-4-\u901A\u9053\u7684\u5173\u95ED" tabindex="-1"><a class="header-anchor" href="#_1-4-\u901A\u9053\u7684\u5173\u95ED" aria-hidden="true">#</a> 1.4 \u901A\u9053\u7684\u5173\u95ED</h2><p>\u5BF9\u4E8E\u4E00\u4E2A\u5DF2\u7ECF\u4F7F\u7528\u5B8C\u6BD5\u7684\u901A\u9053\uFF0C\u6211\u4EEC\u8981\u5C06\u5176\u8FDB\u884C\u5173\u95ED\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token function">close</span><span class="token punctuation">(</span>channel_name<span class="token punctuation">)</span>
</code></pre></div><p>\u8FD9\u91CC\u8981\u6CE8\u610F\uFF0C\u5BF9\u4E8E\u4E00\u4E2A\u5DF2\u7ECF\u5173\u95ED\u7684\u901A\u9053\u5982\u679C\u518D\u6B21\u5173\u95ED\u4F1A\u5BFC\u81F4\u62A5\u9519\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u63A5\u6536\u6570\u636E\u65F6\uFF0C\u5224\u65AD\u901A\u9053\u662F\u5426\u5DF2\u7ECF\u5173\u95ED\uFF0C\u4ECE\u901A\u9053\u8BFB\u53D6\u6570\u636E\u8FD4\u56DE\u7684\u7B2C\u4E8C\u4E2A\u503C\u8868\u793A\u901A\u9053\u662F\u5426\u6CA1\u88AB\u5173\u95ED\uFF0C\u5982\u679C\u5DF2\u7ECF\u5173\u95ED\uFF0C\u8FD4\u56DE\u503C\u4E3A <code>false</code> \uFF1B\u5982\u679C\u8FD8\u672A\u5173\u95ED\uFF0C\u8FD4\u56DE\u503C\u4E3A <code>true</code> \u3002</p><div class="language-go ext-go"><pre class="language-go"><code>value<span class="token punctuation">,</span> ok <span class="token operator">:=</span> <span class="token operator">&lt;-</span> channel_name
</code></pre></div><h2 id="_1-5-\u901A\u9053\u7684\u5BB9\u91CF\u4E0E\u957F\u5EA6" tabindex="-1"><a class="header-anchor" href="#_1-5-\u901A\u9053\u7684\u5BB9\u91CF\u4E0E\u957F\u5EA6" aria-hidden="true">#</a> 1.5 \u901A\u9053\u7684\u5BB9\u91CF\u4E0E\u957F\u5EA6</h2><p>\u6211\u4EEC\u5728\u524D\u9762\u8BB2\u8FC7 <code>make</code> \u51FD\u6570\u662F\u53EF\u4EE5\u63A5\u6536\u4E24\u4E2A\u53C2\u6570\u7684\uFF0C\u540C\u7406\uFF0C\u521B\u5EFA\u901A\u9053\u53EF\u4EE5\u4F20\u5165\u7B2C\u4E8C\u4E2A\u53C2\u6570\u2014\u2014\u5BB9\u91CF\u3002</p><ul><li>\u5F53\u5BB9\u91CF\u4E3A <code>0</code> \u65F6\uFF0C\u8BF4\u660E\u901A\u9053\u4E2D\u4E0D\u80FD\u5B58\u653E\u6570\u636E\uFF0C\u5728\u53D1\u9001\u6570\u636E\u65F6\uFF0C\u5FC5\u987B\u8981\u6C42\u7ACB\u9A6C\u6709\u4EBA\u63A5\u6536\uFF0C\u5426\u5219\u4F1A\u62A5\u9519\u3002\u6B64\u65F6\u7684\u901A\u9053\u79F0\u4E4B\u4E3A\u65E0\u7F13\u51B2\u901A\u9053\u3002</li><li>\u5F53\u5BB9\u91CF\u4E3A <code>1</code> \u65F6\uFF0C\u8BF4\u660E\u901A\u9053\u53EA\u80FD\u7F13\u5B58\u4E00\u4E2A\u6570\u636E\uFF0C\u82E5\u901A\u9053\u4E2D\u5DF2\u6709\u4E00\u4E2A\u6570\u636E\uFF0C\u6B64\u65F6\u518D\u5F80\u91CC\u53D1\u9001\u6570\u636E\uFF0C\u4F1A\u9020\u6210\u7A0B\u5E8F\u963B\u585E\u3002\u5229\u7528\u8FD9\u70B9\u53EF\u4EE5\u5229\u7528\u901A\u9053\u6765\u505A\u9501\u3002</li><li>\u5F53\u5BB9\u91CF\u5927\u4E8E <code>1</code> \u65F6\uFF0C\u901A\u9053\u4E2D\u53EF\u4EE5\u5B58\u653E\u591A\u4E2A\u6570\u636E\uFF0C\u53EF\u4EE5\u7528\u4E8E\u591A\u4E2A\u534F\u7A0B\u4E4B\u95F4\u7684\u901A\u4FE1\u7BA1\u9053\uFF0C\u5171\u4EAB\u8D44\u6E90\u3002</li></ul><p>\u65E2\u7136\u901A\u9053\u6709\u5BB9\u91CF\u548C\u957F\u5EA6\uFF0C\u90A3\u4E48\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 <code>cap</code> \u51FD\u6570\u548C <code>len</code> \u51FD\u6570\u83B7\u53D6\u901A\u9053\u7684\u5BB9\u91CF\u548C\u957F\u5EA6\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u901A\u9053</span>
	c <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u521D\u59CB\u5316\u540E\uFF1A&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;cap =&quot;</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;len =&quot;</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span>
	c <span class="token operator">&lt;-</span> <span class="token number">1</span>
	c <span class="token operator">&lt;-</span> <span class="token number">2</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F20\u5165\u4E24\u4E2A\u6570\u540E\uFF1A&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;cap =&quot;</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;len =&quot;</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token operator">&lt;-</span> c
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u53D6\u51FA\u4E00\u4E2A\u6570\u540E\uFF1A&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;cap =&quot;</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;len =&quot;</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_1-6-\u7F13\u51B2\u901A\u9053\u4E0E\u65E0\u7F13\u51B2\u901A\u9053" tabindex="-1"><a class="header-anchor" href="#_1-6-\u7F13\u51B2\u901A\u9053\u4E0E\u65E0\u7F13\u51B2\u901A\u9053" aria-hidden="true">#</a> 1.6 \u7F13\u51B2\u901A\u9053\u4E0E\u65E0\u7F13\u51B2\u901A\u9053</h2><p>\u6309\u7167\u662F\u5426\u53EF\u7F13\u51B2\u6570\u636E\u53EF\u5206\u4E3A\uFF1A<strong>\u7F13\u51B2\u901A\u9053</strong> \u4E0E <strong>\u65E0\u7F13\u51B2\u901A\u9053</strong> \u3002</p><p>\u65E0\u7F13\u51B2\u901A\u9053\u5728\u901A\u9053\u91CC\u65E0\u6CD5\u5B58\u50A8\u6570\u636E\uFF0C\u63A5\u6536\u7AEF\u5FC5\u987B\u5148\u4E8E\u53D1\u9001\u7AEF\u51C6\u5907\u597D\uFF0C\u4EE5\u786E\u4FDD\u4F60\u53D1\u9001\u5B8C\u6570\u636E\u540E\uFF0C\u6709\u4EBA\u7ACB\u9A6C\u63A5\u6536\u6570\u636E\uFF0C\u5426\u5219\u53D1\u9001\u7AEF\u5C31\u4F1A\u9020\u6210\u963B\u585E\uFF0C\u539F\u56E0\u5F88\u7B80\u5355\uFF0C\u901A\u9053\u4E2D\u65E0\u6CD5\u5B58\u50A8\u6570\u636E\u3002\u4E5F\u5C31\u662F\u8BF4\u53D1\u9001\u7AEF\u548C\u63A5\u6536\u7AEF\u662F\u540C\u6B65\u8FD0\u884C\u7684\u3002</p><div class="language-go ext-go"><pre class="language-go"><code>c <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
<span class="token comment">// \u6216\u8005</span>
c <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
</code></pre></div><p>\u7F13\u51B2\u901A\u9053\u5141\u8BB8\u901A\u9053\u91CC\u5B58\u50A8\u4E00\u4E2A\u6216\u591A\u4E2A\u6570\u636E\uFF0C\u8BBE\u7F6E\u7F13\u51B2\u533A\u540E\uFF0C\u53D1\u9001\u7AEF\u548C\u63A5\u6536\u7AEF\u53EF\u4EE5\u5904\u4E8E\u5F02\u6B65\u7684\u72B6\u6001\u3002</p><div class="language-go ext-go"><pre class="language-go"><code>c <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="_15-7-\u53CC\u5411\u901A\u9053" tabindex="-1"><a class="header-anchor" href="#_15-7-\u53CC\u5411\u901A\u9053" aria-hidden="true">#</a> 15.7 \u53CC\u5411\u901A\u9053</h2><p>\u5230\u76EE\u524D\u4E3A\u6B62\uFF0C\u4E0A\u9762\u5B9A\u4E49\u7684\u90FD\u662F\u53CC\u5411\u901A\u9053\uFF0C\u65E2\u53EF\u4EE5\u53D1\u9001\u6570\u636E\u4E5F\u53EF\u4EE5\u63A5\u6536\u6570\u636E\u3002\u4F8B\u5982\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u901A\u9053</span>
	c <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>

	<span class="token comment">// \u53D1\u9001\u6570\u636E</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;send: 1&quot;</span><span class="token punctuation">)</span>
		c <span class="token operator">&lt;-</span> <span class="token number">1</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">// \u63A5\u6536\u6570\u636E</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		n <span class="token operator">:=</span> <span class="token operator">&lt;-</span> c
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;receive:&quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">// \u4E3B\u534F\u7A0B\u4F11\u7720</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Millisecond<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_1-8-\u5355\u5411\u901A\u9053" tabindex="-1"><a class="header-anchor" href="#_1-8-\u5355\u5411\u901A\u9053" aria-hidden="true">#</a> 1.8 \u5355\u5411\u901A\u9053</h2><p>\u5355\u5411\u901A\u9053\u53EA\u80FD\u53D1\u9001\u6216\u8005\u63A5\u6536\u6570\u636E\u3002\u6240\u4EE5\u53EF\u4EE5\u5177\u4F53\u7EC6\u5206\u4E3A\u53EA\u8BFB\u901A\u9053\u548C\u53EA\u5199\u901A\u9053\u3002</p><p><code>&lt;-chan</code> \u8868\u793A\u53EA\u8BFB\u901A\u9053\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token comment">// \u5B9A\u4E49\u53EA\u8BFB\u901A\u9053</span>
c <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span>
<span class="token comment">// \u5B9A\u4E49\u7C7B\u578B</span>
<span class="token keyword">type</span> Receiver <span class="token operator">=</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">string</span>
<span class="token keyword">var</span> receiver Receiver <span class="token operator">=</span> c

<span class="token comment">// \u6216\u8005\u7B80\u5355\u5199\u6210\u4E0B\u9762\u7684\u5F62\u5F0F</span>
<span class="token keyword">type</span> Receiver <span class="token operator">=</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span>
receiver <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span>Receiver<span class="token punctuation">)</span>
</code></pre></div><p><code>chan&lt;-</code> \u8868\u793A\u53EA\u5199\u901A\u9053\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token comment">// \u5B9A\u4E49\u53EA\u5199\u901A\u9053</span>
c <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
<span class="token comment">// \u5B9A\u4E49\u7C7B\u578B</span>
<span class="token keyword">type</span> Sender <span class="token operator">=</span> <span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token builtin">int</span>
<span class="token keyword">var</span> sender Sender <span class="token operator">=</span> c

<span class="token comment">// \u6216\u8005\u7B80\u5355\u5199\u6210\u4E0B\u9762\u7684\u5F62\u5F0F</span>
<span class="token keyword">type</span> Sender <span class="token operator">=</span> <span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token builtin">int</span>
sender <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span>Sender<span class="token punctuation">)</span>
</code></pre></div><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// Sender \u53EA\u5199\u901A\u9053\u7C7B\u578B</span>
<span class="token keyword">type</span> Sender <span class="token operator">=</span> <span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token builtin">string</span>

<span class="token comment">// Receiver \u53EA\u8BFB\u901A\u9053\u7C7B\u578B</span>
<span class="token keyword">type</span> Receiver <span class="token operator">=</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">string</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u53CC\u5411\u901A\u9053</span>
	<span class="token keyword">var</span> ch <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span>

	<span class="token comment">// \u5F00\u542F\u4E00\u4E2A\u534F\u7A0B</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// \u53EA\u80FD\u5199\u901A\u9053</span>
		<span class="token keyword">var</span> sender Sender <span class="token operator">=</span> ch
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5373\u5C06\u5B66\u4E60:&quot;</span><span class="token punctuation">)</span>
		sender <span class="token operator">&lt;-</span> <span class="token string">&quot;Go\u8BED\u8A00\u57FA\u7840\u7EC3\u4E60--channel&quot;</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">// \u5F00\u542F\u4E00\u4E2A\u534F\u7A0B</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// \u53EA\u80FD\u8BFB\u901A\u9053</span>
		<span class="token keyword">var</span> receiver Receiver <span class="token operator">=</span> ch
		message <span class="token operator">:=</span> <span class="token operator">&lt;-</span>receiver
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F00\u59CB\u5B66\u4E60: &quot;</span><span class="token punctuation">,</span> message<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Millisecond<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_1-9-\u904D\u5386\u901A\u9053" tabindex="-1"><a class="header-anchor" href="#_1-9-\u904D\u5386\u901A\u9053" aria-hidden="true">#</a> 1.9 \u904D\u5386\u901A\u9053</h2><p>\u4F7F\u7528 <code>for range</code> \u5FAA\u73AF\u53EF\u4EE5\u904D\u5386\u901A\u9053\uFF0C\u4F46\u5728\u904D\u5386\u65F6\u8981\u786E\u4FDD\u901A\u9053\u662F\u5904\u4E8E\u5173\u95ED\u72B6\u6001\uFF0C\u5426\u5219\u5FAA\u73AF\u4F1A\u88AB\u963B\u585E\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
   <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">loopPrint</span><span class="token punctuation">(</span>c <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
      c <span class="token operator">&lt;-</span> i
   <span class="token punctuation">}</span>
   <span class="token comment">// \u8BB0\u5F97\u8981\u5173\u95ED\u901A\u9053</span>
   <span class="token comment">// \u5426\u5219\u4E3B\u534F\u7A0B\u904D\u5386\u5B8C\u4E0D\u4F1A\u7ED3\u675F\uFF0C\u800C\u4F1A\u963B\u585E</span>
   <span class="token function">close</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u901A\u9053</span>
   <span class="token keyword">var</span> ch2 <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
   <span class="token keyword">go</span> <span class="token function">loopPrint</span><span class="token punctuation">(</span>ch2<span class="token punctuation">)</span>
   <span class="token keyword">for</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> ch2 <span class="token punctuation">{</span>
      fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_1-10-\u7528\u901A\u9053\u505A\u9501" tabindex="-1"><a class="header-anchor" href="#_1-10-\u7528\u901A\u9053\u505A\u9501" aria-hidden="true">#</a> 1.10 \u7528\u901A\u9053\u505A\u9501</h2><p>\u4E0A\u9762\u8BB2\u8FC7\uFF0C\u5F53\u901A\u9053\u5BB9\u91CF\u4E3A <code>1</code> \u65F6\uFF0C\u8BF4\u660E\u901A\u9053\u53EA\u80FD\u7F13\u5B58\u4E00\u4E2A\u6570\u636E\uFF0C\u82E5\u901A\u9053\u4E2D\u5DF2\u6709\u4E00\u4E2A\u6570\u636E\uFF0C\u6B64\u65F6\u518D\u5F80\u91CC\u53D1\u9001\u6570\u636E\uFF0C\u4F1A\u9020\u6210\u7A0B\u5E8F\u963B\u585E\u3002\u4F8B\u5982\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// \u7531\u4E8E x = x+1 \u4E0D\u662F\u539F\u5B50\u64CD\u4F5C</span>
<span class="token comment">// \u6240\u4EE5\u5E94\u907F\u514D\u591A\u4E2A\u534F\u7A0B\u5BF9 x \u8FDB\u884C\u64CD\u4F5C</span>
<span class="token comment">// \u4F7F\u7528\u5BB9\u91CF\u4E3A 1 \u7684\u901A\u9053\u53EF\u4EE5\u8FBE\u5230\u9501\u7684\u6548\u679C</span>
<span class="token keyword">func</span> <span class="token function">increment</span><span class="token punctuation">(</span>ch <span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">,</span> x <span class="token operator">*</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ch <span class="token operator">&lt;-</span> <span class="token boolean">true</span>
	<span class="token operator">*</span>x <span class="token operator">=</span> <span class="token operator">*</span>x <span class="token operator">+</span> <span class="token number">1</span>
	<span class="token operator">&lt;-</span> ch
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ch3 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token keyword">var</span> x <span class="token builtin">int</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10000</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">go</span> <span class="token function">increment</span><span class="token punctuation">(</span>ch3<span class="token punctuation">,</span> <span class="token operator">&amp;</span>x<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Millisecond<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;x =&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_1-11-\u6B7B\u9501" tabindex="-1"><a class="header-anchor" href="#_1-11-\u6B7B\u9501" aria-hidden="true">#</a> 1.11 \u6B7B\u9501</h2><p>\u8BB2\u5B8C\u4E86\u9501\uFF0C\u4E0D\u5F97\u4E0D\u63D0\u6B7B\u9501\u3002\u5F53\u534F\u7A0B\u7ED9\u4E00\u4E2A\u901A\u9053\u53D1\u9001\u6570\u636E\u65F6\uFF0C\u7167\u7406\u8BF4\u4F1A\u6709\u5176\u4ED6 Go \u534F\u7A0B\u6765\u63A5\u6536\u6570\u636E\u3002\u5982\u679C\u6CA1\u6709\u7684\u8BDD\uFF0C\u7A0B\u5E8F\u5C31\u4F1A\u5728\u8FD0\u884C\u65F6\u89E6\u53D1 <code>panic</code> \uFF0C\u5F62\u6210\u6B7B\u9501\u3002\u540C\u7406\uFF0C\u5F53\u6709\u534F\u7A0B\u7B49\u7740\u4ECE\u4E00\u4E2A\u901A\u9053\u63A5\u6536\u6570\u636E\u65F6\uFF0C\u6211\u4EEC\u671F\u671B\u5176\u4ED6\u7684 Go \u534F\u7A0B\u4F1A\u5411\u8BE5\u901A\u9053\u5199\u5165\u6570\u636E\uFF0C\u8981\u4E0D\u7136\u7A0B\u5E8F\u4E5F\u4F1A\u89E6\u53D1 <code>panic</code> \u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span>
	ch <span class="token operator">&lt;-</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD0\u884C\u4E0A\u9762\u7684\u7A0B\u5E8F\uFF0C\u4F1A\u89E6\u53D1 panic \uFF0C\u62A5\u4E0B\u9762\u7684\u9519\u8BEF\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code>fatal <span class="token builtin">error</span><span class="token punctuation">:</span> all goroutines are asleep <span class="token operator">-</span> deadlock<span class="token operator">!</span>
</code></pre></div><p>\u4E0B\u9762\u518D\u6765\u770B\u770B\u51E0\u4E2A\u4F8B\u5B50\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span>
	ch <span class="token operator">&lt;-</span> <span class="token boolean">true</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span>ch<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E0A\u9762\u7684\u4EE3\u7801\u4F60\u770B\u8D77\u6765\u53EF\u80FD\u89C9\u5F97\u6CA1\u5565\u95EE\u9898\uFF0C\u521B\u5EFA\u4E00\u4E2A\u901A\u9053\uFF0C\u5F80\u91CC\u9762\u5199\u5165\u6570\u636E\uFF0C\u518D\u4ECE\u91CC\u9762\u8BFB\u51FA\u6570\u636E\uFF0C\u4F46\u8FD0\u884C\u540E\u4F1A\u62A5\u540C\u6837\u7684\u9519\u8BEF\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code>fatal <span class="token builtin">error</span><span class="token punctuation">:</span> all goroutines are asleep <span class="token operator">-</span> deadlock<span class="token operator">!</span>
</code></pre></div><p>\u90A3\u4E48\u4E3A\u4EC0\u4E48\u4F1A\u51FA\u73B0\u6B7B\u9501\u5462\uFF1F\u524D\u9762\u7684\u57FA\u7840\u5B66\u7684\u597D\u7684\u5C31\u4E0D\u96BE\u60F3\u5230\u4F7F\u7528 <code>make</code> \u51FD\u6570\u521B\u5EFA\u901A\u9053\u65F6\u9ED8\u8BA4\u4E0D\u4F20\u9012\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u901A\u9053\u4E2D\u4E0D\u80FD\u5B58\u653E\u6570\u636E\uFF0C\u5728\u53D1\u9001\u6570\u636E\u65F6\uFF0C\u5FC5\u987B\u8981\u6C42\u7ACB\u9A6C\u6709\u4EBA\u63A5\u6536\uFF0C\u5373\u8BE5\u901A\u9053\u4E3A\u65E0\u7F13\u51B2\u901A\u9053\u3002\u6240\u4EE5\u5728\u63A5\u6536\u8005\u6CA1\u6709\u51C6\u5907\u597D\u524D\uFF0C\u53D1\u9001\u64CD\u4F5C\u4F1A\u88AB\u963B\u585E\u3002</p><p>\u5206\u6790\u5B8C\u5F15\u53D1\u5F02\u5E38\u7684\u539F\u56E0\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06\u4EE3\u7801\u4FEE\u6539\u5982\u4E0B\uFF0C\u4F7F\u7528\u534F\u7A0B\uFF0C\u5C06\u63A5\u6536\u8005\u4EE3\u7801\u653E\u5728\u53E6\u4E00\u4E2A\u534F\u7A0B\u91CC\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">funcRecieve</span><span class="token punctuation">(</span>c <span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span>c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ch4 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token function">funcRecieve</span><span class="token punctuation">(</span>ch4<span class="token punctuation">)</span>
	ch4 <span class="token operator">&lt;-</span> <span class="token boolean">true</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Millisecond<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5F53\u7136\uFF0C\u8FD8\u6709\u4E00\u79CD\u66F4\u52A0\u76F4\u63A5\u7684\u65B9\u6CD5\uFF0C\u628A\u65E0\u7F13\u51B2\u901A\u9053\u6539\u4E3A\u7F13\u51B2\u901A\u9053\u5C31\u884C\u4E86\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ch5 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
	ch5 <span class="token operator">&lt;-</span> <span class="token boolean">true</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span>ch5<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6709\u65F6\u5019\u6211\u4EEC\u5B9A\u4E49\u4E86\u901A\u9053\u7684\u5BB9\u91CF\uFF0C\u4F46\u901A\u9053\u91CC\u7684\u5BB9\u91CF\u5DF2\u7ECF\u653E\u4E0D\u4E0B\u65B0\u7684\u6570\u636E\uFF0C\u800C\u6CA1\u6709\u63A5\u6536\u8005\u63A5\u6536\u6570\u636E\uFF0C\u5C31\u4F1A\u9020\u6210\u963B\u585E\uFF0C\u800C\u5BF9\u4E8E\u4E00\u4E2A\u534F\u7A0B\u6765\u8BF4\u5C31\u4F1A\u9020\u6210\u6B7B\u9501\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ch6 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
	ch6 <span class="token operator">&lt;-</span> <span class="token boolean">true</span>
	ch6 <span class="token operator">&lt;-</span> <span class="token boolean">false</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span>ch6<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,74),e=[o];function c(l,u){return s(),a("div",null,e)}var i=n(p,[["render",c],["__file","1-\u5165\u95E8.html.vue"]]);export{i as default};
