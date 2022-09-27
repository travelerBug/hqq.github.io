import{_ as n,o as s,c as a,e as t}from"./app.cef7465c.js";const p={},o=t(`<h1 id="\u4EE3\u7801\u96E8" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u96E8" aria-hidden="true">#</a> \u4EE3\u7801\u96E8</h1><hr><div class="language-html ext-html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>NumberRain<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">canvas</span> <span class="token punctuation">{</span>
      <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>canvas<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">function</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">function</span> <span class="token function">getRandomChar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;0123456789abcdefghijklmnopqrstuvwxyz~!@#$%^&amp;*()-+{}|:&lt;&gt;?,.&quot;</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> str<span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>str<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">getRandomColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> fontColors <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;#33B5E5&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;#0099CC&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;#AA66CC&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;#9933CC&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;#99CC00&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;#669900&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;#FFBB33&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;#FF8800&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;#FF4444&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;#CC0000&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span>
      <span class="token keyword">return</span> fontColors<span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>fontColors<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> mywindow <span class="token operator">=</span> window<span class="token punctuation">.</span>screen<span class="token punctuation">;</span>
    <span class="token keyword">const</span> canvas <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;canvas&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> mywindow<span class="token punctuation">.</span>width<span class="token punctuation">;</span>
    canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> mywindow<span class="token punctuation">.</span>height<span class="token punctuation">;</span>

    <span class="token keyword">const</span> fontSize <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> columnCount <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>innerWidth <span class="token operator">/</span> fontSize<span class="token punctuation">)</span><span class="token comment">// canvas.width / fontSize;</span>
    <span class="token keyword">let</span> drops <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>columnCount<span class="token punctuation">)</span> <span class="token comment">//[];</span>
    <span class="token comment">// for (var i = 0; i &lt; columnCount; i++) {</span>
    <span class="token comment">//   drops[i] = 1;</span>
    <span class="token comment">// }</span>
    <span class="token keyword">const</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&quot;2d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// ctx.fillStyle = &quot;rgba(240,240,240,0.05)&quot;;</span>
      ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&quot;rgba(0,0,0,0.05)&quot;</span><span class="token punctuation">;</span>
      ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>width<span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
      ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&quot;green&quot;</span><span class="token punctuation">;</span>
      <span class="token comment">// ctx.font = fontSize + &quot;px arial&quot;;</span>
      <span class="token comment">// ctx.fillStyle = getRandomColor()//&quot;green&quot;;</span>
      ctx<span class="token punctuation">.</span>font <span class="token operator">=</span> fontSize <span class="token operator">+</span> <span class="token string">&quot;px Roboto Mono&quot;</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> columnCount<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> text <span class="token operator">=</span> <span class="token function">getRandomChar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> x <span class="token operator">=</span> i <span class="token operator">*</span> fontSize<span class="token punctuation">;</span>
        <span class="token keyword">const</span> y <span class="token operator">=</span> drops<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*</span> fontSize<span class="token punctuation">;</span>
        ctx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>y <span class="token operator">&gt;</span> canvas<span class="token punctuation">.</span>height <span class="token operator">||</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0.95</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          drops<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">else</span>
          drops<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">setInterval</span><span class="token punctuation">(</span>draw<span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,3),c=[o];function e(u,l){return s(),a("div",null,c)}var i=n(p,[["render",e],["__file","\u4EE3\u7801\u96E8.html.vue"]]);export{i as default};
