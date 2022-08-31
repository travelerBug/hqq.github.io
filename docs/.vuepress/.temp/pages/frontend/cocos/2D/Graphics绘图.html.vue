<template><div><h1 id="graphics" tabindex="-1"><a class="header-anchor" href="#graphics" aria-hidden="true">#</a> Graphics</h1>
<hr>
<p><a href="https://docs.cocos.com/creator/3.5/manual/zh/ui-system/components/editor/graphics.html" target="_blank" rel="noopener noreferrer">官方文档</a></p>
<h3 id="快速入门" tabindex="-1"><a class="header-anchor" href="#快速入门" aria-hidden="true">#</a> 快速入门</h3>
<ul>
<li>
<p>绘画简单来说就是绘制线条和绘制填充，对应的就是stroke 方法和fill方法</p>
</li>
<li>
<p>绘制线条：</p>
</li>
<li>
<ol>
<li>设置线条的宽度，系统默认是0</li>
<li>首尾相连需要调用close方法</li>
</ol>
</li>
<li>
<p>常见应用场景：</p>
<ol>
<li>绘制多边形</li>
<li>绘制线条，曲线，点</li>
<li>比如跟随鼠标画线/画圆 做小游戏</li>
</ol>
</li>
</ul>
<h3 id="_1-1-绘制矩形" tabindex="-1"><a class="header-anchor" href="#_1-1-绘制矩形" aria-hidden="true">#</a> 1.1 绘制矩形</h3>
<ul>
<li>注意：矩形的起点是从左下角开始的</li>
</ul>
<div class="language-typescript ext-ts"><pre v-pre class="language-typescript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">rect</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">400</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">480</span><span class="token punctuation">,</span> <span class="token constant">PICE_RADIUS</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token constant">PICE_RADIUS</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">rect</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">320</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">480</span><span class="token punctuation">,</span> <span class="token constant">PICE_RADIUS</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token constant">PICE_RADIUS</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="_1-2-绘制圆-绘制点" tabindex="-1"><a class="header-anchor" href="#_1-2-绘制圆-绘制点" aria-hidden="true">#</a> 1.2.绘制圆/绘制点</h3>
<div class="language-typescript ext-ts"><pre v-pre class="language-typescript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token keyword">this</span><span class="token punctuation">.</span>graphics<span class="token punctuation">.</span>fillColor<span class="token punctuation">.</span><span class="token function">fromHEX</span><span class="token punctuation">(</span><span class="token string">"#ff0000"</span><span class="token punctuation">)</span>
 <span class="token keyword">this</span><span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">circle</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">400</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">480</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
 <span class="token keyword">this</span><span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">circle</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">320</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">480</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
 <span class="token keyword">this</span><span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="_1-3-绘制线" tabindex="-1"><a class="header-anchor" href="#_1-3-绘制线" aria-hidden="true">#</a> 1.3.绘制线</h3>
<div class="language-typescript ext-ts"><pre v-pre class="language-typescript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>       
<span class="token keyword">this</span><span class="token punctuation">.</span>graphics<span class="token punctuation">.</span>lineWidth <span class="token operator">=</span> <span class="token number">3</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>graphics<span class="token punctuation">.</span>strokeColor <span class="token operator">=</span> Color<span class="token punctuation">.</span><span class="token constant">GREEN</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_1-4-绘制多边形边框" tabindex="-1"><a class="header-anchor" href="#_1-4-绘制多边形边框" aria-hidden="true">#</a> 1.4.绘制多边形边框</h3>
<div class="language-typescript ext-ts"><pre v-pre class="language-typescript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>       
<span class="token keyword">this</span><span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="_1-4-绘制多边形填充" tabindex="-1"><a class="header-anchor" href="#_1-4-绘制多边形填充" aria-hidden="true">#</a> 1.4.绘制多边形填充</h3>
<div class="language-typescript ext-ts"><pre v-pre class="language-typescript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>       
<span class="token keyword">this</span><span class="token punctuation">.</span>graphics<span class="token punctuation">.</span>fillColor<span class="token punctuation">.</span><span class="token function">fromHEX</span><span class="token punctuation">(</span><span class="token string">"#02ff39"</span><span class="token punctuation">)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">250</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div></div></template>
