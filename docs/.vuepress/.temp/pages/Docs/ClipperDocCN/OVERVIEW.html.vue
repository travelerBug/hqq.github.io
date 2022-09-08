<template><div><h1 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h1>
<p>Clipper Library（以下简称为Clipper库或者ClipperLib或Clipper）提供了对线段和多边形的裁剪(clipping)以及偏置(offseting)功能。
和其他裁剪库相比，Clipper具有以下特征：</p>
<blockquote>
<ul>
<li>它能够接受各类多边形输入，包含自交的多边形；</li>
<li>它支持多种填充原则(奇偶填充、非零填充、正填充、负填充)；</li>
<li>它相较于其他库来说效率极高；</li>
<li>它数值稳定（鲁棒性强）；</li>
<li>它支持多边形和线段的偏置；</li>
<li>它对于商用以及免费软件来说都是免费使用的。</li>
</ul>
</blockquote>
<p>**当前版本:**6.2.0</p>
<p><img src="https://downloadflies.com/blog-img/int.png" alt="sss"></p>
<hr>
<p><strong>术语：</strong></p>
<ul>
<li>裁剪(Clipping):通常是指在二维平面上把一个图形在指定的矩形框以外的部分去除掉。在更广义的角度，指定的裁剪范围不一定要是一个矩形，可以是各种各样的多边形，甚至是多个多边形；同样的，我们一般裁剪指的是形态学上的“求交”，但是在Clipper库中裁剪可以实现4种布尔运算（求交、求和、求异、求异或）；</li>
<li>路径(Path):是指一系列有序的点的集合，用来定义一个轮廓(contour)，这个轮廓既可以是代指一条线/开放路径(line/open path)，也可以代指一个多边形/闭合轮廓(polygon/closed path)。</li>
<li>线(Line):与Polyline同义，代指一个具有两个以上点的开放路径。</li>
<li>轮廓(Contour):与路径同义；</li>
<li>孔洞/内轮廓(Hole):代指一个多边形内部表示该部分不属于该多边形的闭合区域；一个“内轮廓(Hole Polygon)”就是一个代指孔的外围点集的封闭路径；</li>
<li>多边形填充规则(Polygon Filling Rule):即在一系列的闭合路径中，来定义哪些属于“内部”，哪些属于“外部”</li>
</ul>
<p><strong>下载链接：</strong>
<a href="https://sourceforge.net/projects/polyclipping/" target="_blank" rel="noopener noreferrer">SourceForge</a></p>
<p><strong>参考内容：</strong></p>
<ol>
<li>
<p>The Library is based on but significantly extends Bala Vatti's polygon clipping algorithm as described in &quot;A generic solution to polygon clipping&quot;, Communications of the ACM, Vol 35, Issue 7 (July 1992) pp 56-63.</p>
</li>
<li>
<p>A section in &quot;Computer graphics and geometric modeling: implementation and algorithms&quot; by By Max K. Agoston (Springer, 2005) discussing Vatti Polygon Clipping was also helpful in creating the initial Clipper implementation.</p>
</li>
<li>
<p>The paper titled &quot;Polygon Offsetting by Computing Winding Numbers&quot; by Chen &amp; McMains (Paper no. DETC2005-85513, ASME 2005. Pages 565-575) contains helpful discussion on the complexities of polygon offsetting together with some solutions.</p>
</li>
</ol>
</div></template>
