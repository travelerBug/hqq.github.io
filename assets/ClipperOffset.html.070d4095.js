import{_ as t,o as n,c as e,e as l}from"./app.ad4da1a1.js";const o={},i=l(`<h3 id="clipperoffset" tabindex="-1"><a class="header-anchor" href="#clipperoffset" aria-hidden="true">#</a> <strong>ClipperOffset</strong></h3><p>ClipperOffset\u7C7B\u5C01\u88C5\u4E86\u504F\u7F6E\u7C7B\u7684\u51FD\u6570\uFF08\u81A8\u80C0/\u6536\u7F29\uFF09\uFF0C\u53EF\u5BF9\u5F00\u653E\u5F0F\u8F6E\u5ED3\u548C\u5C01\u95ED\u8F6E\u5ED3\u8FDB\u884C\u5904\u7406\uFF0C\u5E76\u652F\u6301\u4F7F\u7528\u4E0D\u540C\u7684\u8F6C\u63A5\u7C7B\u578B\u548C\u7EC8\u6B62\u7C7B\u578B\uFF1B \uFF08\u8BE5\u7C7B\u66FF\u4EE3\u4E86\u539F\u6765\u7684OffsetPath\u529F\u80FD\uFF0C\u63D0\u4F9B\u4E86\u66F4\u5927\u7684\u7075\u6D3B\u6027\uFF09 \u504F\u7F6E\u7684\u5148\u51B3\u6761\u4EF6\uFF1A</p><ol><li>\u95ED\u5408\u8DEF\u5F84\u7684\u65B9\u5411\u5FC5\u987B\u662F\u4E00\u81F4\u7684\uFF0C\u5373\u6240\u6709\u5916\u8F6E\u5ED3\u7684\u65B9\u5411\u76F8\u540C\uFF0C\u800C\u6240\u6709\u5185\u8F6E\u5ED3\u65B9\u5411\u76F8\u53CD\uFF08\u9664\u4E86None-Zero\u586B\u5145\u65B9\u6CD5\uFF09\u3002\u6240\u6709\u5F00\u8F6E\u5ED3\u5FC5\u987B\u548C\u5C01\u95ED\u5916\u8F6E\u5ED3\u65B9\u5411\u76F8\u540C\uFF1B</li><li>\u591A\u8FB9\u5F62\u4E00\u5B9A\u4E0D\u80FD\u81EA\u4EA4\uFF1B</li></ol><p>\u9650\u5236\uFF1A \u5728\u504F\u7F6E\u65F6\uFF0C\u5C0F\u7684\u4EBA\u4E3A\u7269\u5757\u53EF\u80FD\u4F1A\u5728\u591A\u8FB9\u5F62\u4EA4\u53E0\u7684\u5730\u65B9\u51FA\u73B0\u3002\u4E3A\u4E86\u9632\u6B62\u8FD9\u7C7B\u60C5\u51B5\u7684\u53D1\u751F\uFF0C\u53EF\u4EE5\u5BF9\u591A\u8FB9\u5F62\u7EC4\u5185\u5BB9\u8FDB\u884C\u5355\u72EC\u7684\u504F\u7F6E\u5904\u7406\uFF1B <img src="https://downloadflies.com/blog-img/offset1.png" alt=""></p><div class="language-text ext-text"><pre class="language-text"><code>#include &quot;clipper.hpp&quot;  
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
</code></pre></div>`,5),s=[i];function a(r,c){return n(),e("div",null,s)}var f=t(o,[["render",a],["__file","ClipperOffset.html.vue"]]);export{f as default};
