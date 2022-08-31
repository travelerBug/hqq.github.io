<template><div><h1 id="挖洞" tabindex="-1"><a class="header-anchor" href="#挖洞" aria-hidden="true">#</a> 挖洞</h1>
<h3 id="效果如下" tabindex="-1"><a class="header-anchor" href="#效果如下" aria-hidden="true">#</a> 效果如下：</h3>
<hr>
<p><img src="http://downloadflies.com/blog-img/19738633-f804cc8cadfa47c6.gif" alt="img"></p>
<h3 id="核心技术" tabindex="-1"><a class="header-anchor" href="#核心技术" aria-hidden="true">#</a> 核心技术</h3>
<hr>
<ol>
<li>
<p>多边形计算</p>
</li>
<li>
<p>Graphics绘图</p>
</li>
<li>
<p>多边形碰撞组件（PolygonCollider2D）</p>
</li>
<li>
<p>向量点乘</p>
</li>
</ol>
<h3 id="正多边形顶点位置的计算" tabindex="-1"><a class="header-anchor" href="#正多边形顶点位置的计算" aria-hidden="true">#</a> 正多边形顶点位置的计算</h3>
<ul>
<li>公式如下：</li>
</ul>
<div class="language-typescript ext-ts"><pre v-pre class="language-typescript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">const</span> r <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">*</span> i <span class="token operator">/</span> n<span class="token punctuation">;</span>
<span class="token keyword">let</span> vec_x <span class="token operator">=</span> <span class="token constant">DIG_RADIUS</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">cos</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> vec_y <span class="token operator">=</span> <span class="token constant">DIG_RADIUS</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">sin</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote>
<p>理解方式： 一圈360度 正多边形相当于构建多个三角形</p>
<p>已知中间点坐标,求顶点坐标</p>
<ul>
<li><strong>2 * Math.PI * i / n;  每个顶点的角度(弧度制)</strong></li>
<li>360弧度制 表示为2*Math.PI</li>
</ul>
</blockquote>
<p><img src="https://downloadflies.com/blog-img/image-20220831214419036.png" alt="image-20220831214419036"></p>
</div></template>
