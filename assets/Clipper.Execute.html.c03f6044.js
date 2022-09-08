import{_ as e,o as l,c as p,e as o}from"./app.924ef5e2.js";const i={},n=o(`<h3 id="clipper-execute" tabindex="-1"><a class="header-anchor" href="#clipper-execute" aria-hidden="true">#</a> <strong>Clipper.Execute</strong></h3><div class="language-text ext-text"><pre class="language-text"><code>Del.\xBB
function Execute(clipType: TClipType;
  out solution: TPaths;
  subjFillType: TPolyFillType = pftEvenOdd;
  clipFillType: TPolyFillType = pftEvenOdd): boolean; overload;

function Execute(clipType: TClipType;
  out solution: TPolyTree;
  subjFillType: TPolyFillType = pftEvenOdd;
  clipFillType: TPolyFillType = pftEvenOdd): boolean; overload;

C++ \xBB
bool Execute(ClipType clipType,
  Paths &amp;solution,
  PolyFillType subjFillType = pftEvenOdd,
  PolyFillType clipFillType = pftEvenOdd);

bool Execute(ClipType clipType,
  PolyTree &amp;solution,
  PolyFillType subjFillType = pftEvenOdd,
  PolyFillType clipFillType = pftEvenOdd);

C#  \xBB
public bool Execute(ClipType clipType,
  Paths solution,
  PolyFillType subjFillType,
  PolyFillType clipFillType);

public bool Execute(ClipType clipType,
  PolyTree solution,
  PolyFillType subjFillType,
  PolyFillType clipFillType);
</code></pre></div><p>\u4E00\u65E6\u88C1\u526A\u8DEF\u5F84\u7EC4\u548C\u88AB\u88C1\u526A\u8DEF\u5F84\u7EC4\u5DF2\u7ECF\u88AB\u8BBE\u5B9A\uFF08\u901A\u8FC7AddPath\u6216\u8005AddPaths\u65B9\u6CD5\uFF09,<strong>Execute</strong>\u65B9\u6CD5\u53EF\u4EE5\u6267\u884C\u5E03\u5C14\u8FD0\u7B97\uFF0C\u5177\u4F53\u8FD0\u7B97\u7C7B\u578B\u7531clipType\u6765\u6307\u5B9A\uFF1B \u6700\u7EC8\u7684solution\u53C2\u6570\u53EF\u4EE5\u662F\u4E00\u4E2A\u8DEF\u5F84\u7EC4\uFF08Path\uFF09\u6216\u8005\u4E00\u4E2A\u591A\u8FB9\u5F62\u6811\uFF08PolyTree\uFF09\u7C7B\u578B\u3002\u56E0\u4E3A\u8DEF\u5F84\u7EC4\u7ED3\u6784\u6BD4\u591A\u8FB9\u5F62\u6811\u7ED3\u6784\u7B80\u5355\uFF0C\u6240\u4EE5\u6548\u7387\u76F8\u5BF9\u8F83\u9AD8\uFF08\u5927\u7EA610%\uFF09\uFF1B\u4F46\u662F\uFF0CPolyTree\u7684\u4FE1\u606F\u7ED3\u6784\u53EF\u80FD\u63D0\u4F9B\u7ED9\u4E86\u7528\u6237\u66F4\u591A\u7684\u6709\u7528\u4FE1\u606F\u3002\u9996\u5148\uFF0CPolyTree\u7ED3\u6784\u4FDD\u7559\u4E86\u7F51\u72B6\u7684\u591A\u8FB9\u5F62\u7236\u5B50\u5173\u7CFB\uFF08\u4F8B\u5982\u5916\u8F6E\u5ED3\u5305\u542B\u5B54\u6D1E\u3001\u5B54\u6D1E\u5305\u542B\u5185\u8F6E\u5ED3\u7B49\uFF09\u3002\u76F8\u540C\u7684\uFF0C\u53EA\u6709PolyTree\u7C7B\u578B\u53EF\u4EE5\u533A\u522B\u5F00\u8F6E\u5ED3\u548C\u95ED\u5408\u8F6E\u5ED3\uFF0C\u56E0\u4E3A\u6BCF\u4E00\u4E2APolyNode\u7ED3\u6784\u6709IsOpen\u7684\u5C5E\u6027\uFF08Path\u7C7B\u578B\u6CA1\u6709\u4EFB\u4F55\u6210\u5458\u6765\u544A\u77E5\u5B83\u662F\u5426\u4E3A\u5F00\u653E\u7684\u6216\u8005\u662F\u95ED\u5408\u7684\uFF09\u3002\u6B63\u56E0\u4E3A\u5982\u6B64\uFF0C\u5F53\u4E00\u4E2A\u5F00\u653E\u8F6E\u5ED3\u7EC4\u88AB\u4F20\u9012\u7ED9\u4E00\u4E2AClipper\u5BF9\u8C61\uFF0C\u4F7F\u7528\u8005\u5FC5\u987B\u4F7F\u7528\u4E00\u4E2APolyTree\u7C7B\u578B\u6765\u63A5\u6536solution\u7684\u7ED3\u679C\uFF0C\u5426\u5219\u4F1A\u5F15\u8D77\u9519\u8BEF\uFF1B \u5F53\u5728\u4F7F\u7528\u5F00\u653E\u5F0F\u8DEF\u5F84\u8FDB\u884C\u88C1\u526A\u65F6\uFF0CClipper\u5E93\u63D0\u4F9B\u4E86\u4E24\u4E2A\u6709\u6548\u7684\u51FD\u6570\u6765\u5FEB\u901F\u7684\u5206\u79BB\u7ED3\u679C\u5F53\u4E2D\u7684\u5F00\u653E\u8DEF\u5F84\u90E8\u5206\u548C\u95ED\u5408\u8F6E\u5ED3\u7EC4\u90E8\u5206OpenPathsFromPolyTree\u548CCLosedPathsFromPolyTree\u3002\u540C\u65F6Clipper\u4E5F\u63D0\u4F9B\u4E86PolyTreeToPaths\u6765\u5FEB\u901F\u5C06PolyTree\u7C7B\u578B\u8F6C\u6362\u4E3APaths\u3002</p><p><img src="https://downloadflies.com/blog-img/common_edges.png" alt=""></p><p>\u5173\u4E8Esolution\u8FD4\u56DE\u7684\u8DEF\u5F84\u7EC4\uFF0C\u6709\u4EE5\u4E0B\u51E0\u70B9\u9700\u8981\u6CE8\u610F\uFF1A</p><blockquote><ul><li>\u5E76\u6CA1\u6709\u56FA\u5B9A\u7684\u987A\u5E8F\uFF1B</li><li>\u4E0D\u4F1A\u51FA\u73B0\u53E0\u52A0\u548C\u81EA\u4EA4\u7684\u60C5\u51B5\uFF1B</li><li>\u5185\u5B54\u7684\u65B9\u5411\u6C38\u8FDC\u4F1A\u548C\u5916\u5B54\u76F8\u53CD\uFF1B</li><li>solution\u7684\u586B\u5145\u7C7B\u578B\u53EF\u4EE5\u8BA4\u4E3A\u662FOdd-Even\u6216\u8005Non-Zero\u4E2D\u7684\u4EFB\u610F\u4E00\u79CD\uFF0C\u5373\u517C\u5BB9\u8FD9\u4E24\u79CD\u586B\u5145\u65B9\u5F0F\uFF1B</li><li>\u591A\u8FB9\u5F62\u8BE5\u5F88\u4F4E\u6982\u7387\u7684\u60C5\u51B5\u4E0B\u4F1A\u5206\u4EAB\u4E00\u4E2A\u5171\u540C\u7684\u53D8\uFF08\u5728\u7248\u672C6.0\u4E4B\u540E\u8BE5\u60C5\u51B5\u53D8\u5F97\u975E\u5E38\u5C11\u6709\uFF09\uFF1B</li></ul></blockquote><p>\u88AB\u586B\u5145\u56FE\u5F62\u586B\u5145\u7C7B\u578B(subjFillType)\u548C\u88C1\u526A\u56FE\u5F62\u586B\u5145\u7C7B\u578B(clipFillType)\u51B3\u5B9A\u4E86\u591A\u8FB9\u5F62\u7684\u586B\u5145\u89C4\u5219\u548C\u76F8\u5BF9\u89C4\u5219\uFF1B Execute\u53EF\u4EE5\u6267\u884C\u591A\u6B21\uFF0C\u4E0D\u9700\u8981\u91CD\u7F6E\uFF0C\u5373\u53EF\u4EE5\u5BF9\u4E00\u4E2A\u591A\u8FB9\u5F62\u8FDB\u884C\u591A\u6B21Execute\u7684\u5904\u7406\uFF1B</p>`,7),t=[n];function y(c,T){return l(),p("div",null,t)}var r=e(i,[["render",y],["__file","Clipper.Execute.html.vue"]]);export{r as default};
