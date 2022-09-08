<template><div><h3 id="polynode" tabindex="-1"><a class="header-anchor" href="#polynode" aria-hidden="true">#</a> <strong>PolyNode</strong></h3>
<p>PolyNodes是被封装在PolyTree的容器中，同时提供了一个数据结构来代表由Excute()方法返回的多边形轮廓中的父子关系；</p>
<p>一个PolyNode对象代表一个多边形；它的“IsHole”属性表明它是一个<strong>外轮廓</strong>还是一个<strong>内孔</strong>。PolyNodes可能包含任意数量的PolyNode子对象，一般为外轮廓的子对象是内轮廓，而内轮廓的子对象是（嵌套的）外轮廓；</p>
</div></template>
