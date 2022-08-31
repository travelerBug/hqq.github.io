<template><div><h2 id="一、标题" tabindex="-1"><a class="header-anchor" href="#一、标题" aria-hidden="true">#</a> <strong>一、标题</strong></h2>
<p>在想要设置为标题的文字前面加#来表示 一个#是一级标题，二个#是二级标题，以此类推。支持六级标题。</p>
<p>注：标准语法一般在#后跟个空格再写文字，貌似简书不加空格也行。</p>
<p>示例：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code> # 这是一级标题 
 ## 这是二级标题 
 ### 这是三级标题 
 #### 这是四级标题
 ##### 这是五级标题 
 ###### 这是六级标题                     
</code></pre></div><p>效果如下：</p>
<h1 id="这是一级标题" tabindex="-1"><a class="header-anchor" href="#这是一级标题" aria-hidden="true">#</a> <strong>这是一级标题</strong></h1>
<h2 id="这是二级标题" tabindex="-1"><a class="header-anchor" href="#这是二级标题" aria-hidden="true">#</a> <strong>这是二级标题</strong></h2>
<h3 id="这是三级标题" tabindex="-1"><a class="header-anchor" href="#这是三级标题" aria-hidden="true">#</a> <strong>这是三级标题</strong></h3>
<h4 id="这是四级标题" tabindex="-1"><a class="header-anchor" href="#这是四级标题" aria-hidden="true">#</a> <strong>这是四级标题</strong></h4>
<h5 id="这是五级标题" tabindex="-1"><a class="header-anchor" href="#这是五级标题" aria-hidden="true">#</a> 这是五级标题</h5>
<h6 id="这是六级标题" tabindex="-1"><a class="header-anchor" href="#这是六级标题" aria-hidden="true">#</a> 这是六级标题</h6>
<hr>
<h2 id="二、字体" tabindex="-1"><a class="header-anchor" href="#二、字体" aria-hidden="true">#</a> <strong>二、字体</strong></h2>
<ul>
<li></li>
<li><strong>加粗</strong></li>
<li></li>
</ul>
<p>要加粗的文字左右分别用两个*号包起来</p>
<ul>
<li></li>
<li><em>斜体</em></li>
<li></li>
</ul>
<p>要倾斜的文字左右分别用一个*号包起来</p>
<ul>
<li></li>
<li><em><strong>斜体加粗</strong></em></li>
<li></li>
</ul>
<p>要倾斜和加粗的文字左右分别用三个*号包起来</p>
<ul>
<li></li>
<li><s>删除线</s></li>
<li></li>
</ul>
<p>要加删除线的文字左右分别用两个~~号包起来</p>
<p>示例：</p>
<p>​                <strong>这是加粗的文字</strong> <em>这是倾斜的文字</em>` <em><strong>这是斜体加粗的文字</strong></em> <s>这是加删除线的文字</s></p>
<p>效果如下：</p>
<p><strong>这是加粗的文字</strong></p>
<p><em>这是倾斜的文字</em></p>
<p><em><strong>这是斜体加粗的文字</strong></em></p>
<p><s>这是加删除线的文字</s></p>
<hr>
<h2 id="三、引用" tabindex="-1"><a class="header-anchor" href="#三、引用" aria-hidden="true">#</a> <strong>三、引用</strong></h2>
<p>在引用的文字前加&gt;即可。引用也可以嵌套，如加两个&gt;&gt;三个&gt;&gt;&gt; n个... 貌似可以一直加下去，但没神马卵用</p>
<p>示例：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>>这是引用的内容 
>>这是引用的内容 
>>>>>>>>>>这是引用的内容  
</code></pre></div><p>​</p>
<p>效果如下：</p>
<blockquote>
<p>这是引用的内容</p>
<blockquote>
<blockquote>
<p>这是引用的内容</p>
<blockquote>
<blockquote>
<blockquote>
<p>这是引用的内容</p>
</blockquote>
</blockquote>
</blockquote>
</blockquote>
</blockquote>
</blockquote>
<h2 id="四、分割线" tabindex="-1"><a class="header-anchor" href="#四、分割线" aria-hidden="true">#</a> <strong>四、分割线</strong></h2>
<p>三个或者三个以上的 - 或者 * 都可以。</p>
<p>示例：</p>
<p>​                --- ---- *** *****</p>
<p>效果如下： 可以看到，显示效果是一样的。</p>
<hr>
<hr>
<hr>
<hr>
<h2 id="五、图片" tabindex="-1"><a class="header-anchor" href="#五、图片" aria-hidden="true">#</a> <strong>五、图片</strong></h2>
<p>语法：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code> ![图片alt](图片地址 ''图片title'')
 图片alt就是显示在图片下面的文字，相当于对图片内容的解释。 
 图片title是图片的标题，当鼠标移到图片上时显示的内容。title可加可不加   
</code></pre></div><p>​</p>
<p>示例：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>![blockchain](https://downloadflies.com/blog-img/image-20220831230609612.png"区块链")  
</code></pre></div><p>​</p>
<p>效果如下：</p>
<p><img src="https://downloadflies.com/blog-img/image-20220831230609612.png" alt="image-20220831230609612"></p>
<h2 id="六、超链接" tabindex="-1"><a class="header-anchor" href="#六、超链接" aria-hidden="true">#</a> <strong>六、超链接</strong></h2>
<p>语法：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>[超链接名](超链接地址 "超链接title")
title可加可不加
</code></pre></div><p>示例：</p>
<pre><code>         [简书](http://jianshu.com)
         [百度](http://baidu.com)
</code></pre>
<p>效果如下：</p>
<p><a href="https://www.jianshu.com/u/1f5ac0cf6a8b" target="_blank" rel="noopener noreferrer">简书</a> <a href="https://links.jianshu.com/go?to=http%3A%2F%2Fbaidu.com" target="_blank" rel="noopener noreferrer">百度</a></p>
<p>注：Markdown本身语法不支持链接在新页面中打开，貌似简书做了处理，是可以的。别的平台可能就不行了，如果想要在新页面中打开的话可以用html语言的a标签代替。</p>
<pre><code>    &lt;a href=&quot;超链接地址&quot; target=&quot;_blank&quot;&gt;超链接名&lt;/a&gt;
    
    示例
    &lt;a href=&quot;https://www.jianshu.com/u/1f5ac0cf6a8b&quot; target=&quot;_blank&quot;&gt;简书&lt;/a&gt;
</code></pre>
<p>​</p>
<hr>
<h2 id="七、列表" tabindex="-1"><a class="header-anchor" href="#七、列表" aria-hidden="true">#</a> <strong>七、列表</strong></h2>
<p>无序列表</p>
<p>语法： 无序列表用 - + * 任何一种都可以</p>
<pre><code>     - 列表内容
     + 列表内容
     * 列表内容
     
     注意：- + * 跟内容之间都要有一个空格
</code></pre>
<p>​</p>
<p>效果如下：</p>
<ul>
<li>列表内容</li>
<li>列表内容</li>
<li>列表内容</li>
</ul>
<p>有序列表</p>
<p>语法： 数字加点</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>1. 列表内容
2. 列表内容
3. 列表内容

注意：序号跟内容之间要有空格
</code></pre></div><p>​</p>
<p>效果如下：</p>
<ol>
<li>列表内容</li>
<li>列表内容</li>
<li>列表内容</li>
</ol>
<p>列表嵌套</p>
<p><strong>上一级和下一级之间敲三个空格即可</strong></p>
<ul>
<li></li>
<li>
<p>一级无序列表内容</p>
</li>
<li></li>
<li>
<ul>
<li>二级无序列表内容</li>
<li>二级无序列表内容</li>
<li>二级无序列表内容</li>
</ul>
</li>
<li></li>
<li></li>
<li>
<p>一级无序列表内容</p>
</li>
<li></li>
<li>
<ol>
<li>二级有序列表内容</li>
<li>二级有序列表内容</li>
<li>二级有序列表内容</li>
</ol>
</li>
<li>
<p>​</p>
</li>
</ul>
<ol>
<li></li>
<li>一级有序列表内容</li>
<li></li>
</ol>
<ul>
<li>
<ul>
<li>二级无序列表内容</li>
<li>二级无序列表内容</li>
<li>二级无序列表内容</li>
</ul>
</li>
</ul>
<ol>
<li></li>
<li></li>
<li>
<p>一级有序列表内容</p>
</li>
<li></li>
<li>
<ol>
<li>二级有序列表内容</li>
<li>二级有序列表内容</li>
<li>二级有序列表内容</li>
</ol>
</li>
<li></li>
</ol>
<hr>
<h2 id="八、表格" tabindex="-1"><a class="header-anchor" href="#八、表格" aria-hidden="true">#</a> <strong>八、表格</strong></h2>
<p>语法：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>表头|表头|表头
---|:--:|---:
内容|内容|内容
内容|内容|内容

第二行分割表头和内容。
- 有一个就行，为了对齐，多加了几个
文字默认居左
-两边加：表示文字居中
-右边加：表示文字居右
注：原生的语法两边都要用 | 包起来。此处省略
</code></pre></div><p>示例：</p>
<pre><code>      姓名|技能|排行
      --|:--:|--:
      刘备|哭|大哥
      关羽|打|二哥
      张飞|骂|三弟
</code></pre>
<p>效果如下：</p>
<table>
<thead>
<tr>
<th>姓名</th>
<th>技能</th>
<th>排行</th>
</tr>
</thead>
<tbody>
<tr>
<td>刘备</td>
<td>哭</td>
<td>大哥</td>
</tr>
<tr>
<td>关羽</td>
<td>打</td>
<td>二哥</td>
</tr>
<tr>
<td>张飞</td>
<td>骂</td>
<td>三弟</td>
</tr>
</tbody>
</table>
<h2 id="九、代码" tabindex="-1"><a class="header-anchor" href="#九、代码" aria-hidden="true">#</a> <strong>九、代码</strong></h2>
<p>语法： 单行代码：代码之间分别用一个反引号包起来</p>
<pre><code>        `代码内容`     
</code></pre>
<p>代码块：代码之间分别用三个反引号包起来，且两边的反引号单独占一行</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>(```)
  代码...
  代码...
  代码...
(```)

</code></pre></div><blockquote>
<p>注：为了防止转译，前后三个反引号处加了小括号，实际是没有的。这里只是用来演示，实际中去掉两边小括号即可。</p>
</blockquote>
<p>示例：</p>
<p>单行代码</p>
<pre><code>     `create database hero;`
</code></pre>
<p>代码块</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>
      function fun(){
           echo "这是一句非常牛逼的代码";
      }
      fun();

</code></pre></div><p>效果如下：</p>
<p>单行代码</p>
<p><code v-pre>create database hero;</code></p>
<p>代码块</p>
<pre><code>          function fun(){
            echo &quot;这是一句非常牛逼的代码&quot;;
          }
          fun();
</code></pre>
<p>​</p>
<h2 id="十、流程图" tabindex="-1"><a class="header-anchor" href="#十、流程图" aria-hidden="true">#</a> <strong>十、流程图</strong></h2>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>```flow
st=>start: 开始
op=>operation: My Operation
cond=>condition: Yes or No?
e=>end
st->op->cond
cond(yes)->e
cond(no)->op
&amp;```
</code></pre></div><p>​</p>
<div class="language-flow ext-flow"><pre v-pre class="language-flow"><code>st<span class="token operator">=></span>start<span class="token operator">:</span> 开始
op<span class="token operator">=></span>operation<span class="token operator">:</span> My Operation
cond<span class="token operator">=></span>condition<span class="token operator">:</span> Yes or No<span class="token operator">?</span>
e<span class="token operator">=></span>end
st<span class="token operator">-</span><span class="token operator">></span>op<span class="token operator">-</span><span class="token operator">></span>cond
<span class="token function">cond</span><span class="token punctuation">(</span>yes<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span>e
<span class="token function">cond</span><span class="token punctuation">(</span>no<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span>op
</code></pre></div><p>​       <img src="https://downloadflies.com/blog-img/image-20220901000602382.png" alt="image-20220901000602382"></p>
</div></template>
