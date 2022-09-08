<template><div><h3 id="polytree-clear" tabindex="-1"><a class="header-anchor" href="#polytree-clear" aria-hidden="true">#</a> <strong>PolyTree.Clear</strong></h3>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>Del.» procedure Clear;

C++ » void Clear();

C#  » public void Clear();
</code></pre></div><p>该方法将删除PolyTree对象中的所有子对象。</p>
<p>Clear方法一般不需要显式的调用。每次执行Clipper.Execute方法每次接受一个PolyTree参数，并在生成新的结果之前会自动清除其中的内容。同样的，PolyTree的析构函数会自动清理其内部的包含的PolyNode。</p>
</div></template>
