<template><div><h1 id="_1-插入行间公式" tabindex="-1"><a class="header-anchor" href="#_1-插入行间公式" aria-hidden="true">#</a> 1.插入行间公式</h1>
<p>插入行间公式有三种方法：</p>
<ol>
<li>
<p>打开Typora，点击“段落”—&gt;“公式块”</p>
</li>
<li>
<p>快捷键 Ctrl+Shift+m</p>
</li>
<li>
<p>“$$”+回车</p>
<p>这三种方式都可以打开数学公式的编辑栏然后开始编辑，如下：</p>
<p><img src="https://downloadflies.com/blog-img/20200803203306126.png" alt="在这里插入图片描述"></p>
</li>
</ol>
<p>二、插入行内公式
直接在相应位置输入 两个 $ ，然后中间就是自己想输入的公式：
<img src="https://downloadflies.com/blog-img/image-20220831224744833.png" alt="image-20220831224744833"></p>
<p>实际效果就是：</p>
<p>如果不成功的话，那就确认下下面这个问题：
想要插入行间公式，首先需要确认以下，Typora已经勾选 “插入内联公式” 选项。
具体方法：
点击“文件” --&gt; “偏好设置” --&gt; “Markdown” --&gt; “Markdown扩展语法” —&gt; 勾选 “内联公式（例：$ \LaTeX $）”</p>
<p><img src="https://downloadflies.com/blog-img/image-20220831225208887.png" alt="image-20220831225208887"></p>
<p>然后重启Typora,再次打开就可以继续使用了。</p>
<h1 id="_2-添加数学公式" tabindex="-1"><a class="header-anchor" href="#_2-添加数学公式" aria-hidden="true">#</a> 2. 添加数学公式</h1>
<p>输出美观规范的数学公式，要清楚它们的格式和代码，在编辑栏中输入代码，对应的公式会在下面实时显示，如：</p>
<p><img src="https://downloadflies.com/blog-img/20180916125133886" alt="这里写图片描述"></p>
<h1 id="_3-常用公式的代码" tabindex="-1"><a class="header-anchor" href="#_3-常用公式的代码" aria-hidden="true">#</a> 3. 常用公式的代码</h1>
<p><strong>上/下标</strong></p>
<table>
<thead>
<tr>
<th>算式</th>
<th>Markdown</th>
</tr>
</thead>
<tbody>
<tr>
<td>$x^2 $</td>
<td>x^2</td>
</tr>
<tr>
<td>$y_1 $</td>
<td>y_1</td>
</tr>
</tbody>
</table>
<p><strong>分式</strong></p>
<table>
<thead>
<tr>
<th>算式</th>
<th>Markdown</th>
</tr>
</thead>
<tbody>
<tr>
<td>$1/2 $</td>
<td>1/2</td>
</tr>
<tr>
<td><span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></td>
<td>\frac{1}{2}</td>
</tr>
</tbody>
</table>
<p><strong>省略号</strong></p>
<table>
<thead>
<tr>
<th style="text-align:center"><strong>省略号</strong></th>
<th style="text-align:center">Markdown</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">$$\cdots$$</td>
<td style="text-align:center">\cdots</td>
</tr>
</tbody>
</table>
<p><strong>根号</strong></p>
<table>
<thead>
<tr>
<th>算式</th>
<th>Markdown</th>
</tr>
</thead>
<tbody>
<tr>
<td><span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1328em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9072em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord">2</span></span></span><span style="top:-2.8672em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width='400em' height='1.08em' viewBox='0 0 400000 1080' preserveAspectRatio='xMinYMin slice'><path d='M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z'/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1328em;"><span></span></span></span></span></span></span></span></span></td>
<td>\sqrt{2}</td>
</tr>
</tbody>
</table>
<p><strong>矢量</strong></p>
<table>
<thead>
<tr>
<th>算式</th>
<th>Markdown</th>
</tr>
</thead>
<tbody>
<tr>
<td>$\vec{a} $</td>
<td>\vec{a}</td>
</tr>
</tbody>
</table>
<p><strong>积分</strong></p>
<table>
<thead>
<tr>
<th>算式</th>
<th>Markdown</th>
</tr>
</thead>
<tbody>
<tr>
<td><span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1111em;vertical-align:-0.3061em;"></span><span class="mop op-symbol small-op" style="margin-right:0.19445em;position:relative;top:-0.0006em;">∫</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">x</span></span><span class="mord mathnormal">d</span><span class="mord mathnormal">x</span></span></span></span></td>
<td>\int{x}dx</td>
</tr>
<tr>
<td><span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.3648em;vertical-align:-0.3558em;"></span><span class="mop"><span class="mop op-symbol small-op" style="margin-right:0.19445em;position:relative;top:-0.0006em;">∫</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.009em;"><span style="top:-2.3442em;margin-left:-0.1945em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span><span style="top:-3.2579em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3558em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">x</span></span><span class="mord mathnormal">d</span><span class="mord mathnormal">x</span></span></span></span></td>
<td>\int_{1}^{2}{x}dx</td>
</tr>
</tbody>
</table>
<p><strong>极限</strong></p>
<table>
<thead>
<tr>
<th>算式</th>
<th>Markdown</th>
</tr>
</thead>
<tbody>
<tr>
<td><span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7778em;vertical-align:-0.0833em;"></span><span class="mop">lim</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal">b</span></span></span></span></span></td>
<td>\lim{a+b}</td>
</tr>
<tr>
<td>$ \lim_{n\rightarrow+\infty}$</td>
<td>\lim_{n\rightarrow+\infty}</td>
</tr>
</tbody>
</table>
<p><strong>累加</strong></p>
<table>
<thead>
<tr>
<th>算式</th>
<th>Markdown</th>
</tr>
</thead>
<tbody>
<tr>
<td>$\sum{a} $</td>
<td>\sum{a}</td>
</tr>
<tr>
<td><span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.2537em;vertical-align:-0.2997em;"></span><span class="mop"><span class="mop op-symbol small-op" style="position:relative;top:0em;">∑</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.954em;"><span style="top:-2.4003em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mrel mtight">=</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.2029em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">100</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2997em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td>\sum_{n=1}^{100}{a_n}</td>
</tr>
</tbody>
</table>
<p><strong>累乘</strong></p>
<table>
<thead>
<tr>
<th>算式</th>
<th>Markdown</th>
</tr>
</thead>
<tbody>
<tr>
<td>$\prod{x} $</td>
<td>\prod{x}</td>
</tr>
<tr>
<td><span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.2537em;vertical-align:-0.2997em;"></span><span class="mop"><span class="mop op-symbol small-op" style="position:relative;top:0em;">∏</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.954em;"><span style="top:-2.4003em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mrel mtight">=</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.2029em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">99</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2997em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span></td>
<td>\prod_{n=1}^{99}{x_n}</td>
</tr>
</tbody>
</table>
<p><strong>希腊字母</strong></p>
<p><img src="https://downloadflies.com/blog-img/2068113-20200816212452725-1705310605.jpg" alt="希腊字母"></p>
<p><strong>三角函数</strong></p>
<table>
<thead>
<tr>
<th>三角函数</th>
<th>Markdown</th>
</tr>
</thead>
<tbody>
<tr>
<td>$$\sin$$</td>
<td>\sin</td>
</tr>
</tbody>
</table>
<p><strong>对数函数</strong></p>
<table>
<thead>
<tr>
<th>算式</th>
<th>Markdown</th>
</tr>
</thead>
<tbody>
<tr>
<td>$$\ln2$$</td>
<td>\ln2</td>
</tr>
<tr>
<td>$$\log_28$$</td>
<td>\log_28</td>
</tr>
<tr>
<td>$$\lg10$$</td>
<td>\lg10</td>
</tr>
</tbody>
</table>
<p><strong>关系运算符</strong></p>
<table>
<thead>
<tr>
<th>运算符</th>
<th>Markdown</th>
</tr>
</thead>
<tbody>
<tr>
<td>$$\pm$$</td>
<td>\pm</td>
</tr>
<tr>
<td>$$\times$$</td>
<td>\times</td>
</tr>
<tr>
<td>$$\cdot$$</td>
<td>\cdot</td>
</tr>
<tr>
<td>$$\div$$</td>
<td>\div</td>
</tr>
<tr>
<td>$$\neq$$</td>
<td>\neq</td>
</tr>
<tr>
<td>$$\equiv$$</td>
<td>\equiv</td>
</tr>
<tr>
<td>$$\leq$$</td>
<td>\leq</td>
</tr>
<tr>
<td>$$\geq$$</td>
<td>\geq</td>
</tr>
</tbody>
</table>
<p><strong>其他特殊字符</strong></p>
<table>
<thead>
<tr>
<th>符号</th>
<th>Markdown</th>
</tr>
</thead>
<tbody>
<tr>
<td>$ \forall$</td>
<td>\forall</td>
</tr>
<tr>
<td>$ \infty$</td>
<td>\infty</td>
</tr>
<tr>
<td>$ \emptyset$</td>
<td>\emptyset</td>
</tr>
<tr>
<td>$ \exists$</td>
<td>\exists</td>
</tr>
<tr>
<td>$ \nabla$</td>
<td>\nabla</td>
</tr>
<tr>
<td>$ \bot$</td>
<td>\bot</td>
</tr>
<tr>
<td>$ \angle$</td>
<td>\angle</td>
</tr>
<tr>
<td>$ \because$</td>
<td>\because</td>
</tr>
<tr>
<td>$ \therefore$</td>
<td>\therefore</td>
</tr>
</tbody>
</table>
<ul>
<li>
<p>行间公式：&quot;</p>
<p>​																$$公式$$</p>
<p>&quot;</p>
</li>
<li>
<p>行内公式：<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord cjk_fallback">公式</span></span></span></span></p>
</li>
</ul>
</div></template>
