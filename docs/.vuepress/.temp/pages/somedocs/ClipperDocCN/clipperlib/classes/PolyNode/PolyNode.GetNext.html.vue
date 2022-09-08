<template><div><h3 id="polynode-getnext" tabindex="-1"><a class="header-anchor" href="#polynode-getnext" aria-hidden="true">#</a> <strong>PolyNode.GetNext</strong></h3>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>Del.» function GetNext: TPolyNode;

C++ » PolyNode* GetNext();

C#  » public PolyNode GetNext();
</code></pre></div><p>该方法返回的PolyNode将会是第一个子对象，然后依次是下一个对象，否则是下一个对象。
一个PolyTree可以很方便的被遍历，通过使用GetFirst()，然后接下来使用GetNext()直到最终返回一个空指针；</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>PolyTree polytree;
//call to Clipper.Execute method here which fills 'polytree'
 
PolyNode* polynode = polytree.GetFirst();
while (polynode)
{
  //do stuff with polynode here
   
  polynode = polynode->GetNext();
}
</code></pre></div></div></template>
