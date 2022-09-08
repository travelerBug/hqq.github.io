<template><div><h3 id="polynode-childs" tabindex="-1"><a class="header-anchor" href="#polynode-childs" aria-hidden="true">#</a> <strong>PolyNode.Childs</strong></h3>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>Del.» property Childs[index: Integer]: TPolyNode; //read only

C++ » std::vector &lt; PolyNode* > Childs;//public field

C#  » public List &lt; PolyNode > Childs; //read only property
</code></pre></div><p>会返回只读的PolyNode子对象内容。
外轮廓会包含内轮廓，而孔洞轮廓会包含被嵌套的外轮廓。</p>
</div></template>
