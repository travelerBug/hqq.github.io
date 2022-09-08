<template><div><h3 id="clipperoffset-addpath" tabindex="-1"><a class="header-anchor" href="#clipperoffset-addpath" aria-hidden="true">#</a> <strong>ClipperOffset.AddPath</strong></h3>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>Del.» procedure AddPath(const Path: TPath; JoinType: TJoinType; EndType: TEndType);

C++ » void AddPath(const Path&amp; path, JoinType jointype, EndType endtype);

C#  » public void AddPath(Path path, JoinType jointype, EndType endtype);
</code></pre></div><p>向ClipperOffset对象添加一个路径用来准备偏置；
其中开放式路径只能被偏移一个正值；</p>
</div></template>
