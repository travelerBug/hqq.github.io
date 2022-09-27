<template><div><h3 id="intrect" tabindex="-1"><a class="header-anchor" href="#intrect" aria-hidden="true">#</a> <strong>IntRect</strong></h3>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>Del.»
TIntRect = record left, top, right, bottom: cInt; end;

C++ »
struct IntRect { cInt left; cInt top; cInt right; cInt bottom; ... };

C#  »
public class IntRect {
  public cInt left; { get; set; }
  public cInt top; { get; set; }
  public cInt right; { get; set; }
  public cInt bottom; { get; set; } ... };
</code></pre></div><p>用于接受Clipper库的GetBounds()函数的结果（包围盒）；</p>
</div></template>
