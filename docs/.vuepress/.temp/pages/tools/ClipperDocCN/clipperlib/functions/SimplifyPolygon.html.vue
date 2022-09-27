<template><div><h3 id="simplifypolygon" tabindex="-1"><a class="header-anchor" href="#simplifypolygon" aria-hidden="true">#</a> <strong>SimplifyPolygon</strong></h3>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>Del.» function SimplifyPolygon(const Poly: TPath; FillType: TPolyFillType = pftEvenOdd): TPaths;

C++ » void SimplifyPolygon(const Path &amp;in_poly, Paths &amp;out_polys, 
        PolyFillType fillType = pftEvenOdd);

C#  » public static Paths SimplifyPolygon(Path poly, 
        PolyFillType fillType = PolyFillType.pftEvenOdd);
</code></pre></div><p>将自交部分从自身的部分中剔除（通过指定一个FillType来实现一个布尔的求和操作）。</p>
<p>多个没有相邻重复点（或者说没有“接触”）的多边形将会被分割为两个多边形组；</p>
<p><img src="https://downloadflies.com/blog-img/simplify.png" alt="">
<img src="https://downloadflies.com/blog-img/simplify2.png" alt="">
<img src="https://downloadflies.com/blog-img/simplify3.png" alt=""></p>
</div></template>
