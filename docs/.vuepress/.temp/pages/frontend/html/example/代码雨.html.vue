<template><div><h1 id="代码雨" tabindex="-1"><a class="header-anchor" href="#代码雨" aria-hidden="true">#</a> 代码雨</h1>
<hr>
<div class="language-html ext-html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>NumberRain<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">canvas</span> <span class="token punctuation">{</span>
      <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>canvas<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">function</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function">getRandomChar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">"0123456789abcdefghijklmnopqrstuvwxyz~!@#$%^&amp;*()-+{}|:&lt;>?,."</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> str<span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>str<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">getRandomColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> fontColors <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token string">"#33B5E5"</span><span class="token punctuation">,</span>
        <span class="token string">"#0099CC"</span><span class="token punctuation">,</span>
        <span class="token string">"#AA66CC"</span><span class="token punctuation">,</span>
        <span class="token string">"#9933CC"</span><span class="token punctuation">,</span>
        <span class="token string">"#99CC00"</span><span class="token punctuation">,</span>
        <span class="token string">"#669900"</span><span class="token punctuation">,</span>
        <span class="token string">"#FFBB33"</span><span class="token punctuation">,</span>
        <span class="token string">"#FF8800"</span><span class="token punctuation">,</span>
        <span class="token string">"#FF4444"</span><span class="token punctuation">,</span>
        <span class="token string">"#CC0000"</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span>
      <span class="token keyword">return</span> fontColors<span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>fontColors<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> mywindow <span class="token operator">=</span> window<span class="token punctuation">.</span>screen<span class="token punctuation">;</span>
    <span class="token keyword">const</span> canvas <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"canvas"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> mywindow<span class="token punctuation">.</span>width<span class="token punctuation">;</span>
    canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> mywindow<span class="token punctuation">.</span>height<span class="token punctuation">;</span>

    <span class="token keyword">const</span> fontSize <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> columnCount <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>innerWidth <span class="token operator">/</span> fontSize<span class="token punctuation">)</span><span class="token comment">// canvas.width / fontSize;</span>
    <span class="token keyword">let</span> drops <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>columnCount<span class="token punctuation">)</span> <span class="token comment">//[];</span>
    <span class="token comment">// for (var i = 0; i &lt; columnCount; i++) {</span>
    <span class="token comment">//   drops[i] = 1;</span>
    <span class="token comment">// }</span>
    <span class="token keyword">const</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">"2d"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// ctx.fillStyle = "rgba(240,240,240,0.05)";</span>
      ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">"rgba(0,0,0,0.05)"</span><span class="token punctuation">;</span>
      ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>width<span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
      ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">"green"</span><span class="token punctuation">;</span>
      <span class="token comment">// ctx.font = fontSize + "px arial";</span>
      <span class="token comment">// ctx.fillStyle = getRandomColor()//"green";</span>
      ctx<span class="token punctuation">.</span>font <span class="token operator">=</span> fontSize <span class="token operator">+</span> <span class="token string">"px Roboto Mono"</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> columnCount<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> text <span class="token operator">=</span> <span class="token function">getRandomChar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> x <span class="token operator">=</span> i <span class="token operator">*</span> fontSize<span class="token punctuation">;</span>
        <span class="token keyword">const</span> y <span class="token operator">=</span> drops<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*</span> fontSize<span class="token punctuation">;</span>
        ctx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>y <span class="token operator">></span> canvas<span class="token punctuation">.</span>height <span class="token operator">||</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0.95</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          drops<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">else</span>
          drops<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">setInterval</span><span class="token punctuation">(</span>draw<span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre></div></div></template>
