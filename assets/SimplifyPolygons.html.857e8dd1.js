import{_ as l,o,c as i,e as s}from"./app.cef7465c.js";const e={},p=s(`<h3 id="simplifypolygons" tabindex="-1"><a class="header-anchor" href="#simplifypolygons" aria-hidden="true">#</a> <strong>SimplifyPolygons</strong></h3><div class="language-text ext-text"><pre class="language-text"><code>Del.\xBB function SimplifyPolygons(const polys: TPaths; 
        FillType: TPolyFillType = pftEvenOdd): TPaths;

C++ \xBB void SimplifyPolygons(const Paths &amp;in_polys, Paths &amp;out_polys, 
        PolyFillType fillType = pftEvenOdd);

C++ \xBB void SimplifyPolygons(Paths &amp;polys, PolyFillType fillType = pftEvenOdd);

C#  \xBB public static Polygons SimplifyPolygons(Paths polys, 
        PolyFillType fillType = PolyFillType.pftEvenOdd);
</code></pre></div><p>\u5C06\u81EA\u4EA4\u90E8\u5206\u4ECE\u81EA\u8EAB\u7684\u90E8\u5206\u4E2D\u5254\u9664\uFF08\u901A\u8FC7\u6307\u5B9A\u4E00\u4E2AFillType\u6765\u5B9E\u73B0\u4E00\u4E2A\u5E03\u5C14\u7684\u6C42\u548C\u64CD\u4F5C\uFF09\u3002</p><p>\u591A\u4E2A\u6CA1\u6709\u76F8\u90BB\u91CD\u590D\u70B9\uFF08\u6216\u8005\u8BF4\u6CA1\u6709\u201C\u63A5\u89E6\u201D\uFF09\u7684\u591A\u8FB9\u5F62\u5C06\u4F1A\u88AB\u5206\u5272\u4E3A\u4E24\u4E2A\u591A\u8FB9\u5F62\u7EC4\uFF1B</p><p><img src="https://downloadflies.com/blog-img/simplify.png" alt=""><img src="https://downloadflies.com/blog-img/simplify2.png" alt=""><img src="https://downloadflies.com/blog-img/simplify3.png" alt=""></p>`,5),t=[p];function n(a,y){return o(),i("div",null,t)}var d=l(e,[["render",n],["__file","SimplifyPolygons.html.vue"]]);export{d as default};
