<template><div><h3 id="pointinpolygon" tabindex="-1"><a class="header-anchor" href="#pointinpolygon" aria-hidden="true">#</a> <strong>PointInPolygon</strong></h3>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>Del.» function PointInPolygon(const Pt: TIntPoint; const poly: TPath): Integer;

C++ » int PointInPolygon(const IntPoint pt, const Path &amp;poly); // Function in the ClipperLib namespace.

C#  » public static int PointInPolygon(IntPoint pt, Path poly); // Static method of the Clipper class.
</code></pre></div><p>判断点是否在多边形内，如果返回0则是不在，-1则为在多边形边缘上，1为在多边形内；</p>
</div></template>
