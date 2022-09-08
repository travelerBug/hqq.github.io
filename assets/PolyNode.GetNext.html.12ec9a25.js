import{_ as e,o as t,c as o,e as n}from"./app.924ef5e2.js";const l={},d=n(`<h3 id="polynode-getnext" tabindex="-1"><a class="header-anchor" href="#polynode-getnext" aria-hidden="true">#</a> <strong>PolyNode.GetNext</strong></h3><div class="language-text ext-text"><pre class="language-text"><code>Del.\xBB function GetNext: TPolyNode;

C++ \xBB PolyNode* GetNext();

C#  \xBB public PolyNode GetNext();
</code></pre></div><p>\u8BE5\u65B9\u6CD5\u8FD4\u56DE\u7684PolyNode\u5C06\u4F1A\u662F\u7B2C\u4E00\u4E2A\u5B50\u5BF9\u8C61\uFF0C\u7136\u540E\u4F9D\u6B21\u662F\u4E0B\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5426\u5219\u662F\u4E0B\u4E00\u4E2A\u5BF9\u8C61\u3002 \u4E00\u4E2APolyTree\u53EF\u4EE5\u5F88\u65B9\u4FBF\u7684\u88AB\u904D\u5386\uFF0C\u901A\u8FC7\u4F7F\u7528GetFirst()\uFF0C\u7136\u540E\u63A5\u4E0B\u6765\u4F7F\u7528GetNext()\u76F4\u5230\u6700\u7EC8\u8FD4\u56DE\u4E00\u4E2A\u7A7A\u6307\u9488\uFF1B</p><div class="language-text ext-text"><pre class="language-text"><code>PolyTree polytree;
//call to Clipper.Execute method here which fills &#39;polytree&#39;
 
PolyNode* polynode = polytree.GetFirst();
while (polynode)
{
  //do stuff with polynode here
   
  polynode = polynode-&gt;GetNext();
}
</code></pre></div>`,4),r=[d];function a(c,s){return t(),o("div",null,r)}var p=e(l,[["render",a],["__file","PolyNode.GetNext.html.vue"]]);export{p as default};
