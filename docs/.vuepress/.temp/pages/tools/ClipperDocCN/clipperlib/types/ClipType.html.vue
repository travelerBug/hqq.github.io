<template><div><h3 id="cliptype" tabindex="-1"><a class="header-anchor" href="#cliptype" aria-hidden="true">#</a> <strong>ClipType</strong></h3>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>Del.» type TClipType = (ctIntersection, ctUnion, ctDifference, ctXor);

C++ » enum ClipType { ctIntersection, ctUnion, ctDifference, ctXor };

C#  » public enum ClipType { ctIntersection, ctUnion, ctDifference, ctXor };
</code></pre></div><p>总共有四种裁剪运算类型 AND,OR,NOT和XOR
他们的类型主要取决于他们的点集信息和填充规则，规则如下：</p>
<blockquote>
<ul>
<li>AND(Intersection求交) 获取两者相交的部分；</li>
<li>OR(Union求并) 获取两者并集部分；</li>
<li>NOT(difference求异) 获取Clip区域以外的区域；</li>
<li>XOR(exclusive求异或) 获取两个区域互相不重复的区域；</li>
</ul>
</blockquote>
<p><img src="https://downloadflies.com/blog-img/intersection.png" alt="Intersection">
<img src="https://downloadflies.com/blog-img/union.png" alt="Union">
<img src="https://downloadflies.com/blog-img/difference.png" alt="Difference">
<img src="https://downloadflies.com/blog-img/xor.png" alt="XOR"></p>
<p>所有的多边形裁剪都是通过一个Clipper对象通过传递一个具体的布尔运算类型给它的Execute方法来实现的；
考虑到非封闭线段（多段线），裁剪的原则基本上和封闭图形是相同的；但是，如果一个裁剪案例中出现了以下几种基本情况，会采取以下的裁剪原则：</p>
<ul>
<li>并集：多段线将会被任何重叠的多边形裁剪，导致没有被覆盖的部分会联通重叠多边形一同返回；</li>
<li>交集、非运算和异或运算：多段线只会被Clip的多边形切割，并且在多段线原多边形之间不会有任何交点；</li>
</ul>
<p>下图中是最终的例子：
<img src="https://downloadflies.com/blog-img/line_clipping2.png" alt=""></p>
</div></template>
