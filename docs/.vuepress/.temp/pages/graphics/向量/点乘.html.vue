<template><div><h1 id="向量点乘" tabindex="-1"><a class="header-anchor" href="#向量点乘" aria-hidden="true">#</a> 向量点乘</h1>
<hr>
<h3 id="几何意义" tabindex="-1"><a class="header-anchor" href="#几何意义" aria-hidden="true">#</a> 几何意义</h3>
<p>点乘的结果表示 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.714em;"></span><span class="mord accent"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.714em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal">a</span></span><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.2355em;"><span class="overlay" style="height:0.714em;width:0.471em;"><svg xmlns="http://www.w3.org/2000/svg" width='0.471em' height='0.714em' style='width:0.471em' viewBox='0 0 471 714' preserveAspectRatio='xMinYMin'><path d='M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z'/></svg></span></span></span></span></span></span></span></span></span></span> 在$$\vec{b}$$ 方向上的<strong>投影</strong>与 |$$\vec{b}$$| 的乘积，反映了两个向量在方向上的相似度，结果越大越相似。基于结果可以判断这两个向量是否是同一方向，是否正交垂直，具体对应关系为：</p>
<ol>
<li>
<p class='katex-error' title='ParseError: KaTeX parse error: Can&#39;t use function &#39;$&#39; in math mode at position 8: \vec{a}$̲$⋅$$\vec{b}$$&gt;0…'>\vec{a}$$⋅$$\vec{b}$$&gt;0则方向基本相同，夹角在0°到90°之间
</p>
</li>
<li>
<p class='katex-error' title='ParseError: KaTeX parse error: Can&#39;t use function &#39;$&#39; in math mode at position 8: \vec{a}$̲$⋅$$\vec{b}$$&lt;0…'>\vec{a}$$⋅$$\vec{b}$$&lt;0则方向基本相反，夹角在90°到180°之间

</p>
</li>
</ol>
<p><span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.714em;"></span><span class="mord accent"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.714em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal">a</span></span><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.2355em;"><span class="overlay" style="height:0.714em;width:0.471em;"><svg xmlns="http://www.w3.org/2000/svg" width='0.471em' height='0.714em' style='width:0.471em' viewBox='0 0 471 714' preserveAspectRatio='xMinYMin'><path d='M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z'/></svg></span></span></span></span></span></span></span></span></span></span>  向量
<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.714em;"></span><span class="mord accent"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.714em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal">a</span></span><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.2355em;"><span class="overlay" style="height:0.714em;width:0.471em;"><svg xmlns="http://www.w3.org/2000/svg" width='0.471em' height='0.714em' style='width:0.471em' viewBox='0 0 471 714' preserveAspectRatio='xMinYMin'><path d='M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z'/></svg></span></span></span></span></span></span></span></span></span></span>  向量</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>
</code></pre></div></div></template>
