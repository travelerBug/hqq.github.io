<template><div><h3 id="endtype" tabindex="-1"><a class="header-anchor" href="#endtype" aria-hidden="true">#</a> <strong>EndType</strong></h3>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>Del.» type TClipType = (ctIntersection, ctUnion, ctDifference, ctXor);

C++ » enum ClipType { ctIntersection, ctUnion, ctDifference, ctXor };

C#  » public enum ClipType { ctIntersection, ctUnion, ctDifference, ctXor };
</code></pre></div><p>关于EndType(结束类型)总共有五种值：</p>
<blockquote>
<ul>
<li>etClosedPolygon:末点是相交的，并且使用了JoinType来使路径视作一个多边形进行填充；</li>
<li>etClosedLine:末点是相交的，并且使用了JoinType来使路径视作一条线进行填充；</li>
<li>etOpenSqure:末点使用方形尾和扩展的delta角度；</li>
<li>etOpenRound:末点使用圆形尾和扩展的delta角度；</li>
<li>etOpenButt:末点使用了方向尾，并没有任何扩展；</li>
<li><s>etOpenSingle</s>:对一个开放式的多段线进行了偏置，等待未来更新；</li>
</ul>
</blockquote>
<p>注意：在etClosedPolygon和etClosedLine类型中，无论首末点是否重合，路径结束的情况将会相同。（主要针对部分图形格式，规定首末点相同，这里Clipper统一采用了非首末点相同的情况）；
<img src="https://downloadflies.com/blog-img/endtypes1.png" alt="">
<img src="https://downloadflies.com/blog-img/endtypes2.png" alt=""></p>
</div></template>
