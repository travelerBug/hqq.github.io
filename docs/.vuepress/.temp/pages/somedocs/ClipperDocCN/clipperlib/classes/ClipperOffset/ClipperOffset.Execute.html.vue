<template><div><h3 id="clipperoffset-execute" tabindex="-1"><a class="header-anchor" href="#clipperoffset-execute" aria-hidden="true">#</a> <strong>ClipperOffset.Execute</strong></h3>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>Del.» procedure Execute(out solution: TPaths; Delta: Double); overload;

C++ » void Execute(Paths&amp; solution, double delta);

C#  » public void Execute(ref Paths solution, double delta);


Del.» procedure Execute(out PolyTree: TPolyTree; Delta: Double); overload;

C++ » void Execute(PolyTree&amp; polytree, double delta);

C#  » public void Execute(ref PolyTree polytree, double delta);
</code></pre></div><p>该方法有两个参数，第一个是接受结果的结构（可以是PolyTree或者Paths中的一种）。第二个参数是指偏移量的大小——<strong>负值会缩水，正值会发生膨胀</strong>；
该方法可以被调用多次，来实现对相同路径实现不同程度的偏置；
<img src="https://downloadflies.com/blog-img/offset1.png" alt=""></p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>#include "clipper.hpp"  
...
using namespace ClipperLib;
 
int main()
{
  Path subj;
  Paths solution;
  subj &lt;&lt; 
    IntPoint(348,257) &lt;&lt; IntPoint(364,148) &lt;&lt; IntPoint(362,148) &lt;&lt; 
    IntPoint(326,241) &lt;&lt; IntPoint(295,219) &lt;&lt; IntPoint(258,88) &lt;&lt; 
    IntPoint(440,129) &lt;&lt; IntPoint(370,196) &lt;&lt; IntPoint(372,275);
  ClipperOffset co;
  co.AddPath(subj, jtRound, etClosedPolygon);
  co.Execute(solution, -7.0);
   
  //draw solution ...
  DrawPolygons(solution, 0x4000FF00, 0xFF009900);
}
</code></pre></div><p><img src="https://downloadflies.com/blog-img/offset1.png" alt=""></p>
</div></template>
