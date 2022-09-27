import{_ as e,o as t,c as o,e as n}from"./app.cef7465c.js";const l={},s=n(`<h3 id="clipperoffset-execute" tabindex="-1"><a class="header-anchor" href="#clipperoffset-execute" aria-hidden="true">#</a> <strong>ClipperOffset.Execute</strong></h3><div class="language-text ext-text"><pre class="language-text"><code>Del.\xBB procedure Execute(out solution: TPaths; Delta: Double); overload;

C++ \xBB void Execute(Paths&amp; solution, double delta);

C#  \xBB public void Execute(ref Paths solution, double delta);


Del.\xBB procedure Execute(out PolyTree: TPolyTree; Delta: Double); overload;

C++ \xBB void Execute(PolyTree&amp; polytree, double delta);

C#  \xBB public void Execute(ref PolyTree polytree, double delta);
</code></pre></div><p>\u8BE5\u65B9\u6CD5\u6709\u4E24\u4E2A\u53C2\u6570\uFF0C\u7B2C\u4E00\u4E2A\u662F\u63A5\u53D7\u7ED3\u679C\u7684\u7ED3\u6784\uFF08\u53EF\u4EE5\u662FPolyTree\u6216\u8005Paths\u4E2D\u7684\u4E00\u79CD\uFF09\u3002\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u6307\u504F\u79FB\u91CF\u7684\u5927\u5C0F\u2014\u2014<strong>\u8D1F\u503C\u4F1A\u7F29\u6C34\uFF0C\u6B63\u503C\u4F1A\u53D1\u751F\u81A8\u80C0</strong>\uFF1B \u8BE5\u65B9\u6CD5\u53EF\u4EE5\u88AB\u8C03\u7528\u591A\u6B21\uFF0C\u6765\u5B9E\u73B0\u5BF9\u76F8\u540C\u8DEF\u5F84\u5B9E\u73B0\u4E0D\u540C\u7A0B\u5EA6\u7684\u504F\u7F6E\uFF1B <img src="https://downloadflies.com/blog-img/offset1.png" alt=""></p><div class="language-text ext-text"><pre class="language-text"><code>#include &quot;clipper.hpp&quot;  
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
</code></pre></div><p><img src="https://downloadflies.com/blog-img/offset1.png" alt=""></p>`,5),a=[s];function i(c,r){return t(),o("div",null,a)}var d=e(l,[["render",i],["__file","ClipperOffset.Execute.html.vue"]]);export{d as default};
