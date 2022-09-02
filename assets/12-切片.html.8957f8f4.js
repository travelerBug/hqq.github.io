import{_ as n,o as s,c as a,e as p}from"./app.660fcbcc.js";const t={},o=p(`<h2 id="\u5207\u7247slice" tabindex="-1"><a class="header-anchor" href="#\u5207\u7247slice" aria-hidden="true">#</a> \u5207\u7247Slice</h2><p>\u9700\u8981\u8BF4\u660E\uFF0Cslice \u5E76\u4E0D\u662F\u6570\u7EC4\u6216\u6570\u7EC4\u6307\u9488\u3002\u5B83\u901A\u8FC7\u5185\u90E8\u6307\u9488\u548C\u76F8\u5173\u5C5E\u6027\u5F15\u7528\u6570\u7EC4\u7247\u6BB5\uFF0C\u4EE5\u5B9E\u73B0\u53D8\u957F\u65B9\u6848\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>    1. \u5207\u7247\uFF1A\u5207\u7247\u662F\u6570\u7EC4\u7684\u4E00\u4E2A\u5F15\u7528\uFF0C\u56E0\u6B64\u5207\u7247\u662F\u5F15\u7528\u7C7B\u578B\u3002\u4F46\u81EA\u8EAB\u662F\u7ED3\u6784\u4F53\uFF0C\u503C\u62F7\u8D1D\u4F20\u9012\u3002
    2. \u5207\u7247\u7684\u957F\u5EA6\u53EF\u4EE5\u6539\u53D8\uFF0C\u56E0\u6B64\uFF0C\u5207\u7247\u662F\u4E00\u4E2A\u53EF\u53D8\u7684\u6570\u7EC4\u3002
    3. \u5207\u7247\u904D\u5386\u65B9\u5F0F\u548C\u6570\u7EC4\u4E00\u6837\uFF0C\u53EF\u4EE5\u7528len()\u6C42\u957F\u5EA6\u3002\u8868\u793A\u53EF\u7528\u5143\u7D20\u6570\u91CF\uFF0C\u8BFB\u5199\u64CD\u4F5C\u4E0D\u80FD\u8D85\u8FC7\u8BE5\u9650\u5236\u3002 
    4. cap\u53EF\u4EE5\u6C42\u51FAslice\u6700\u5927\u6269\u5F20\u5BB9\u91CF\uFF0C\u4E0D\u80FD\u8D85\u51FA\u6570\u7EC4\u9650\u5236\u30020 &lt;= len(slice) &lt;= len(array)\uFF0C\u5176\u4E2Darray\u662Fslice\u5F15\u7528\u7684\u6570\u7EC4\u3002
    5. \u5207\u7247\u7684\u5B9A\u4E49\uFF1Avar \u53D8\u91CF\u540D []\u7C7B\u578B\uFF0C\u6BD4\u5982 var str []string  var arr []int\u3002
    6. \u5982\u679C slice == nil\uFF0C\u90A3\u4E48 len\u3001cap \u7ED3\u679C\u90FD\u7B49\u4E8E 0\u3002
</code></pre></div><h3 id="_1-1-1-\u521B\u5EFA\u5207\u7247\u7684\u5404\u79CD\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1-1-1-\u521B\u5EFA\u5207\u7247\u7684\u5404\u79CD\u65B9\u5F0F" aria-hidden="true">#</a> 1.1.1. \u521B\u5EFA\u5207\u7247\u7684\u5404\u79CD\u65B9\u5F0F</h3><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">//1.\u58F0\u660E\u5207\u7247</span>
   <span class="token keyword">var</span> s1 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
   <span class="token keyword">if</span> s1 <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
      fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u662F\u7A7A&quot;</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u4E0D\u662F\u7A7A&quot;</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
   <span class="token comment">// 2.:=</span>
   s2 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
   <span class="token comment">// 3.make()</span>
   <span class="token keyword">var</span> s3 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">,</span> s3<span class="token punctuation">)</span>
   <span class="token comment">// 4.\u521D\u59CB\u5316\u8D4B\u503C</span>
   <span class="token keyword">var</span> s4 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s4<span class="token punctuation">)</span>
   s5 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s5<span class="token punctuation">)</span>
   <span class="token comment">// 5.\u4ECE\u6570\u7EC4\u5207\u7247</span>
   arr <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
   <span class="token keyword">var</span> s6 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
   <span class="token comment">// \u524D\u5305\u540E\u4E0D\u5305</span>
   s6 <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">]</span>
   fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s6<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_1-1-2-\u5207\u7247\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#_1-1-2-\u5207\u7247\u521D\u59CB\u5316" aria-hidden="true">#</a> 1.1.2. \u5207\u7247\u521D\u59CB\u5316</h3><div class="language-text ext-text"><pre class="language-text"><code>\u5168\u5C40\uFF1A
var arr = [...]int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
var slice0 []int = arr[start:end] 
var slice1 []int = arr[:end]        
var slice2 []int = arr[start:]        
var slice3 []int = arr[:] 
var slice4 = arr[:len(arr)-1]      //\u53BB\u6389\u5207\u7247\u7684\u6700\u540E\u4E00\u4E2A\u5143\u7D20
\u5C40\u90E8\uFF1A
arr2 := [...]int{9, 8, 7, 6, 5, 4, 3, 2, 1, 0}
slice5 := arr[start:end]
slice6 := arr[:end]        
slice7 := arr[start:]     
slice8 := arr[:]  
slice9 := arr[:len(arr)-1] //\u53BB\u6389\u5207\u7247\u7684\u6700\u540E\u4E00\u4E2A\u5143\u7D20
</code></pre></div><p><img src="https://downloadflies.com//blog-img/fileName/image-20220718135810976.png" alt="\u5207\u7247">\u4EE3\u7801\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> slice0 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">8</span><span class="token punctuation">]</span>
<span class="token keyword">var</span> slice1 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">6</span><span class="token punctuation">]</span>        <span class="token comment">//\u53EF\u4EE5\u7B80\u5199\u4E3A var slice []int = arr[:end]</span>
<span class="token keyword">var</span> slice2 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">:</span><span class="token number">10</span><span class="token punctuation">]</span>       <span class="token comment">//\u53EF\u4EE5\u7B80\u5199\u4E3A var slice[]int = arr[start:]</span>
<span class="token keyword">var</span> slice3 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token comment">//var slice []int = arr[:]</span>
<span class="token keyword">var</span> slice4 <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>      <span class="token comment">//\u53BB\u6389\u5207\u7247\u7684\u6700\u540E\u4E00\u4E2A\u5143\u7D20</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u5168\u5C40\u53D8\u91CF\uFF1Aarr %v\\n&quot;</span><span class="token punctuation">,</span> arr<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u5168\u5C40\u53D8\u91CF\uFF1Aslice0 %v\\n&quot;</span><span class="token punctuation">,</span> slice0<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u5168\u5C40\u53D8\u91CF\uFF1Aslice1 %v\\n&quot;</span><span class="token punctuation">,</span> slice1<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u5168\u5C40\u53D8\u91CF\uFF1Aslice2 %v\\n&quot;</span><span class="token punctuation">,</span> slice2<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u5168\u5C40\u53D8\u91CF\uFF1Aslice3 %v\\n&quot;</span><span class="token punctuation">,</span> slice3<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u5168\u5C40\u53D8\u91CF\uFF1Aslice4 %v\\n&quot;</span><span class="token punctuation">,</span> slice4<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;-----------------------------------\\n&quot;</span><span class="token punctuation">)</span>
    arr2 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">}</span>
    slice5 <span class="token operator">:=</span> arr<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">8</span><span class="token punctuation">]</span>
    slice6 <span class="token operator">:=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">6</span><span class="token punctuation">]</span>         <span class="token comment">//\u53EF\u4EE5\u7B80\u5199\u4E3A slice := arr[:end]</span>
    slice7 <span class="token operator">:=</span> arr<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">:</span><span class="token number">10</span><span class="token punctuation">]</span>        <span class="token comment">//\u53EF\u4EE5\u7B80\u5199\u4E3A slice := arr[start:]</span>
    slice8 <span class="token operator">:=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">]</span>  <span class="token comment">//slice := arr[:]</span>
    slice9 <span class="token operator">:=</span> arr<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment">//\u53BB\u6389\u5207\u7247\u7684\u6700\u540E\u4E00\u4E2A\u5143\u7D20</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u5C40\u90E8\u53D8\u91CF\uFF1A arr2 %v\\n&quot;</span><span class="token punctuation">,</span> arr2<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u5C40\u90E8\u53D8\u91CF\uFF1A slice5 %v\\n&quot;</span><span class="token punctuation">,</span> slice5<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u5C40\u90E8\u53D8\u91CF\uFF1A slice6 %v\\n&quot;</span><span class="token punctuation">,</span> slice6<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u5C40\u90E8\u53D8\u91CF\uFF1A slice7 %v\\n&quot;</span><span class="token punctuation">,</span> slice7<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u5C40\u90E8\u53D8\u91CF\uFF1A slice8 %v\\n&quot;</span><span class="token punctuation">,</span> slice8<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u5C40\u90E8\u53D8\u91CF\uFF1A slice9 %v\\n&quot;</span><span class="token punctuation">,</span> slice9<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    \u5168\u5C40\u53D8\u91CF\uFF1Aarr [0 1 2 3 4 5 6 7 8 9]
    \u5168\u5C40\u53D8\u91CF\uFF1Aslice0 [2 3 4 5 6 7]
    \u5168\u5C40\u53D8\u91CF\uFF1Aslice1 [0 1 2 3 4 5]
    \u5168\u5C40\u53D8\u91CF\uFF1Aslice2 [5 6 7 8 9]
    \u5168\u5C40\u53D8\u91CF\uFF1Aslice3 [0 1 2 3 4 5 6 7 8 9]
    \u5168\u5C40\u53D8\u91CF\uFF1Aslice4 [0 1 2 3 4 5 6 7 8]
    -----------------------------------
    \u5C40\u90E8\u53D8\u91CF\uFF1A arr2 [9 8 7 6 5 4 3 2 1 0]
    \u5C40\u90E8\u53D8\u91CF\uFF1A slice5 [2 3 4 5 6 7]
    \u5C40\u90E8\u53D8\u91CF\uFF1A slice6 [0 1 2 3 4 5]
    \u5C40\u90E8\u53D8\u91CF\uFF1A slice7 [5 6 7 8 9]
    \u5C40\u90E8\u53D8\u91CF\uFF1A slice8 [0 1 2 3 4 5 6 7 8 9]
    \u5C40\u90E8\u53D8\u91CF\uFF1A slice9 [0 1 2 3 4 5 6 7 8]
</code></pre></div><h3 id="_1-1-3-\u901A\u8FC7make\u6765\u521B\u5EFA\u5207\u7247" tabindex="-1"><a class="header-anchor" href="#_1-1-3-\u901A\u8FC7make\u6765\u521B\u5EFA\u5207\u7247" aria-hidden="true">#</a> 1.1.3. \u901A\u8FC7make\u6765\u521B\u5EFA\u5207\u7247</h3><div class="language-text ext-text"><pre class="language-text"><code>    var slice []type = make([]type, len)
    slice  := make([]type, len)
    slice  := make([]type, len, cap)
</code></pre></div><p><img src="https://downloadflies.com//blog-img/1.jpg" alt="\u5207\u7247"></p><p>\u4EE3\u7801\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> slice0 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> slice1 <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> slice2 <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;make\u5168\u5C40slice0 \uFF1A%v\\n&quot;</span><span class="token punctuation">,</span> slice0<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;make\u5168\u5C40slice1 \uFF1A%v\\n&quot;</span><span class="token punctuation">,</span> slice1<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;make\u5168\u5C40slice2 \uFF1A%v\\n&quot;</span><span class="token punctuation">,</span> slice2<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------------------------&quot;</span><span class="token punctuation">)</span>
    slice3 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    slice4 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    slice5 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;make\u5C40\u90E8slice3 \uFF1A%v\\n&quot;</span><span class="token punctuation">,</span> slice3<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;make\u5C40\u90E8slice4 \uFF1A%v\\n&quot;</span><span class="token punctuation">,</span> slice4<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;make\u5C40\u90E8slice5 \uFF1A%v\\n&quot;</span><span class="token punctuation">,</span> slice5<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    make\u5168\u5C40slice0 \uFF1A[0 0 0 0 0 0 0 0 0 0]
    make\u5168\u5C40slice1 \uFF1A[0 0 0 0 0 0 0 0 0 0]
    make\u5168\u5C40slice2 \uFF1A[0 0 0 0 0 0 0 0 0 0]
    --------------------------------------
    make\u5C40\u90E8slice3 \uFF1A[0 0 0 0 0 0 0 0 0 0]
    make\u5C40\u90E8slice4 \uFF1A[0 0 0 0 0 0 0 0 0 0]
    make\u5C40\u90E8slice5 \uFF1A[0 0 0 0 0 0 0 0 0 0]
</code></pre></div><p>\u5207\u7247\u7684\u5185\u5B58\u5E03\u5C40</p><p><img src="https://downloadflies.com//blog-img/image-20220718134249596-16594327870471.png" alt="\u5207\u7247"></p><p>\u8BFB\u5199\u64CD\u4F5C\u5B9E\u9645\u76EE\u6807\u662F\u5E95\u5C42\u6570\u7EC4\uFF0C\u53EA\u9700\u6CE8\u610F\u7D22\u5F15\u53F7\u7684\u5DEE\u522B\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>

    s <span class="token operator">:=</span> data<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">]</span>
    s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">100</span>
    s<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">200</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA:</p><div class="language-text ext-text"><pre class="language-text"><code>    [102 203]
    [0 1 102 203 4 5]
</code></pre></div><p>\u53EF\u76F4\u63A5\u521B\u5EFA slice \u5BF9\u8C61\uFF0C\u81EA\u52A8\u5206\u914D\u5E95\u5C42\u6570\u7EC4\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    s1 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">}</span> <span class="token comment">// \u901A\u8FC7\u521D\u59CB\u5316\u8868\u8FBE\u5F0F\u6784\u9020\uFF0C\u53EF\u4F7F\u7528\u7D22\u5F15\u53F7\u3002</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">)</span>

    s2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token comment">// \u4F7F\u7528 make \u521B\u5EFA\uFF0C\u6307\u5B9A len \u548C cap \u503C\u3002</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s2<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">)</span>

    s3 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token comment">// \u7701\u7565 cap\uFF0C\u76F8\u5F53\u4E8E cap = len\u3002</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s3<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>s3<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>s3<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C:</p><div class="language-text ext-text"><pre class="language-text"><code>    [0 1 2 3 0 0 0 0 100] 9 9
    [0 0 0 0 0 0] 6 8
    [0 0 0 0 0 0] 6 6
</code></pre></div><p>\u4F7F\u7528 make \u52A8\u6001\u521B\u5EFAslice\uFF0C\u907F\u514D\u4E86\u6570\u7EC4\u5FC5\u987B\u7528\u5E38\u91CF\u505A\u957F\u5EA6\u7684\u9EBB\u70E6\u3002\u8FD8\u53EF\u7528\u6307\u9488\u76F4\u63A5\u8BBF\u95EE\u5E95\u5C42\u6570\u7EC4\uFF0C\u9000\u5316\u6210\u666E\u901A\u6570\u7EC4\u64CD\u4F5C\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    s <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
    p <span class="token operator">:=</span> <span class="token operator">&amp;</span>s<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token comment">// *int, \u83B7\u53D6\u5E95\u5C42\u6570\u7EC4\u5143\u7D20\u6307\u9488\u3002</span>
    <span class="token operator">*</span>p <span class="token operator">+=</span> <span class="token number">100</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C:</p><div class="language-text ext-text"><pre class="language-text"><code>    [0 1 102 3]
</code></pre></div><p>\u81F3\u4E8E [][]T\uFF0C\u662F\u6307\u5143\u7D20\u7C7B\u578B\u4E3A []T \u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    data <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span>
        <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    [[1 2 3] [100 200] [11 22 33 44]]
</code></pre></div><p>\u53EF\u76F4\u63A5\u4FEE\u6539 struct array/slice \u6210\u5458\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    d <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token keyword">struct</span> <span class="token punctuation">{</span>
        x <span class="token builtin">int</span>
    <span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

    s <span class="token operator">:=</span> d<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span>

    d<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">10</span>
    s<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">20</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%p, %p\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>d<span class="token punctuation">,</span> <span class="token operator">&amp;</span>d<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C:</p><div class="language-text ext-text"><pre class="language-text"><code>    [{0} {10} {20} {0} {0}]
    0xc4200160f0, 0xc4200160f0
</code></pre></div><h3 id="_1-1-4-\u7528append\u5185\u7F6E\u51FD\u6570\u64CD\u4F5C\u5207\u7247-\u5207\u7247\u8FFD\u52A0" tabindex="-1"><a class="header-anchor" href="#_1-1-4-\u7528append\u5185\u7F6E\u51FD\u6570\u64CD\u4F5C\u5207\u7247-\u5207\u7247\u8FFD\u52A0" aria-hidden="true">#</a> 1.1.4. \u7528append\u5185\u7F6E\u51FD\u6570\u64CD\u4F5C\u5207\u7247\uFF08\u5207\u7247\u8FFD\u52A0\uFF09</h3><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;slice a : %v\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
    <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;slice b : %v\\n&quot;</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span>
    c <span class="token operator">:=</span> <span class="token function">append</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token operator">...</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;slice c : %v\\n&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span>
    d <span class="token operator">:=</span> <span class="token function">append</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;slice d : %v\\n&quot;</span><span class="token punctuation">,</span> d<span class="token punctuation">)</span>
    e <span class="token operator">:=</span> <span class="token function">append</span><span class="token punctuation">(</span>d<span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;slice e : %v\\n&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    slice a : [1 2 3]
    slice b : [4 5 6]
    slice c : [1 2 3 4 5 6]
    slice d : [1 2 3 4 5 6 7]
    slice e : [1 2 3 4 5 6 7 8 9 10]
</code></pre></div><p>append \uFF1A\u5411 slice \u5C3E\u90E8\u6DFB\u52A0\u6570\u636E\uFF0C\u8FD4\u56DE\u65B0\u7684 slice \u5BF9\u8C61\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    s1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%p\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>s1<span class="token punctuation">)</span>

    s2 <span class="token operator">:=</span> <span class="token function">append</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%p\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>s2<span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    0xc42000a060
    0xc42000a080
    [] [1]
</code></pre></div><h3 id="_1-1-5-\u8D85\u51FA\u539F-slice-cap-\u9650\u5C31\u4F1A\u91CD\u65B0\u5206\u914D\u5E95\u5C42\u6570\u7EC4-\u5373\u4FBF\u539F\u6570\u7EC4\u5E76\u672A\u586B\u6EE1\u3002" tabindex="-1"><a class="header-anchor" href="#_1-1-5-\u8D85\u51FA\u539F-slice-cap-\u9650\u5C31\u4F1A\u91CD\u65B0\u5206\u914D\u5E95\u5C42\u6570\u7EC4-\u5373\u4FBF\u539F\u6570\u7EC4\u5E76\u672A\u586B\u6EE1\u3002" aria-hidden="true">#</a> 1.1.5. \u8D85\u51FA\u539F slice.cap \u9650\u5C31\u4F1A\u91CD\u65B0\u5206\u914D\u5E95\u5C42\u6570\u7EC4\uFF0C\u5373\u4FBF\u539F\u6570\u7EC4\u5E76\u672A\u586B\u6EE1\u3002</h3><div class="language-text ext-text"><pre class="language-text"><code>\u6CE8\u610F\uFF1A\u8FD9\u91CC\u9700\u8981\u601D\u8003append \u540E\u7684\u65B0slice.cap\u662F\u5426\u8D85\u51FA\u539F slice.cap \u9650\u5236\uFF1F
1.\u5982\u679C\u6269\u5BB9\u7684\u957F\u5EA6\u5927\u4E8E\u5207\u7247\u5BB9\u91CF\uFF0C\u5C31\u4F1A\u91CD\u65B0\u5206\u914D\u5E95\u5C42\u6570\u7EC4\uFF0C\u5373\u4FBF\u539F\u6570\u7EC4\u5E76\u672A\u586B\u6EE1\u3002 
2.\u5982\u679C\u6269\u5BB9\u7684\u957F\u5EA6\u5C0F\u4E8E\u7B49\u4E8E\u5207\u7247\u5BB9\u91CF\uFF0C\u90A3\u4E48\u6570\u7EC4\u4E0D\u4F1A\u91CD\u65B0\u5206\u914D\u5E95\u5C42\u6570\u7EC4
\u4F8B\u5982\uFF1A
   \u5207\u7247s\u6DFB\u52A0\u4E00\u4E2A\u5143\u7D20\u548Cs2\u6DFB\u52A0\u4E24\u4E2A\u5143\u7D20 \u6BD4\u5BF9\u5E95\u5C42\u6570\u7EC4\u8D77\u59CB\u6307\u9488\u3002
</code></pre></div><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	
    
    data <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">}</span>
    s <span class="token operator">:=</span> data<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token comment">//s \u5207\u7247[0,1] \u5BB9\u91CF3</span>
    s <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token comment">// \u4E00\u6B21 append \u4E00\u4E2A\u503C\uFF0C\u672A\u8D85\u51FA s.cap \u9650\u5236\u3002</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> data<span class="token punctuation">)</span>         <span class="token comment">// \u91CD\u65B0\u5206\u914D\u5E95\u5C42\u6570\u7EC4\uFF0C\u4E0E\u539F\u6570\u7EC4\u65E0\u5173\u3002</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// \u6BD4\u5BF9\u5E95\u5C42\u6570\u7EC4\u8D77\u59CB\u6307\u9488\u3002</span>
    
    s2 <span class="token operator">:=</span> data<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token comment">//s2 \u5207\u7247[0,1] \u5BB9\u91CF3</span>
    s2 <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s2<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token comment">// \u4E00\u6B21 append \u4E24\u4E2A\u503C\uFF0C\u8D85\u51FA s.cap \u9650\u5236\u3002</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s2<span class="token punctuation">,</span> data<span class="token punctuation">)</span>         <span class="token comment">// \u91CD\u65B0\u5206\u914D\u5E95\u5C42\u6570\u7EC4\uFF0C\u4E0E\u539F\u6570\u7EC4\u65E0\u5173\u3002</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>s2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// \u6BD4\u5BF9\u5E95\u5C42\u6570\u7EC4\u8D77\u59CB\u6307\u9488\u3002</span>

<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C:</p><div class="language-text ext-text"><pre class="language-text"><code>    [0 1 100 200] [0 1 2 3 4 0 0 0 0 0 0]
    0xc4200160f0 0xc420070060
</code></pre></div><p><strong>\u4ECE\u8F93\u51FA\u7ED3\u679C\u53EF\u4EE5\u770B\u51FA\uFF0Cappend \u540E\u7684 s \u91CD\u65B0\u5206\u914D\u4E86\u5E95\u5C42\u6570\u7EC4\uFF0C\u5E76\u590D\u5236\u6570\u636E\u3002\u5982\u679C\u53EA\u8FFD\u52A0\u4E00\u4E2A\u503C\uFF0C\u5219\u4E0D\u4F1A\u8D85\u8FC7 s.cap \u9650\u5236\uFF0C\u4E5F\u5C31\u4E0D\u4F1A\u91CD\u65B0\u5206\u914D</strong>\u3002 \u901A\u5E38\u4EE5 2 \u500D\u5BB9\u91CF\u91CD\u65B0\u5206\u914D\u5E95\u5C42\u6570\u7EC4\u3002\u5728\u5927\u6279\u91CF\u6DFB\u52A0\u6570\u636E\u65F6\uFF0C\u5EFA\u8BAE\u4E00\u6B21\u6027\u5206\u914D\u8DB3\u591F\u5927\u7684\u7A7A\u95F4\uFF0C\u4EE5\u51CF\u5C11\u5185\u5B58\u5206\u914D\u548C\u6570\u636E\u590D\u5236\u5F00\u9500\u3002\u6216\u521D\u59CB\u5316\u8DB3\u591F\u957F\u7684 len \u5C5E\u6027\uFF0C\u6539\u7528\u7D22\u5F15\u53F7\u8FDB\u884C\u64CD\u4F5C\u3002\u53CA\u65F6\u91CA\u653E\u4E0D\u518D\u4F7F\u7528\u7684 slice \u5BF9\u8C61\uFF0C\u907F\u514D\u6301\u6709\u8FC7\u671F\u6570\u7EC4\uFF0C\u9020\u6210 GC \u65E0\u6CD5\u56DE\u6536\u3002</p><h3 id="_1-1-6-slice\u4E2Dcap\u91CD\u65B0\u5206\u914D\u89C4\u5F8B" tabindex="-1"><a class="header-anchor" href="#_1-1-6-slice\u4E2Dcap\u91CD\u65B0\u5206\u914D\u89C4\u5F8B" aria-hidden="true">#</a> 1.1.6. slice\u4E2Dcap\u91CD\u65B0\u5206\u914D\u89C4\u5F8B\uFF1A</h3><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    s <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    c <span class="token operator">:=</span> <span class="token function">cap</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>

    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">50</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        s <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> i<span class="token punctuation">)</span>
        <span class="token keyword">if</span> n <span class="token operator">:=</span> <span class="token function">cap</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span> n <span class="token operator">&gt;</span> c <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;cap: %d -&gt; %d\\n&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">,</span> n<span class="token punctuation">)</span>
            c <span class="token operator">=</span> n
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C:</p><div class="language-text ext-text"><pre class="language-text"><code>    cap: 1 -&gt; 2
    cap: 2 -&gt; 4
    cap: 4 -&gt; 8
    cap: 8 -&gt; 16
    cap: 16 -&gt; 32
    cap: 32 -&gt; 64
</code></pre></div><h3 id="_1-1-7-\u5207\u7247\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#_1-1-7-\u5207\u7247\u62F7\u8D1D" aria-hidden="true">#</a> 1.1.7. \u5207\u7247\u62F7\u8D1D</h3><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    s1 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;slice s1 : %v\\n&quot;</span><span class="token punctuation">,</span> s1<span class="token punctuation">)</span>
    s2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;slice s2 : %v\\n&quot;</span><span class="token punctuation">,</span> s2<span class="token punctuation">)</span>
    <span class="token function">copy</span><span class="token punctuation">(</span>s2<span class="token punctuation">,</span> s1<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;copied slice s1 : %v\\n&quot;</span><span class="token punctuation">,</span> s1<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;copied slice s2 : %v\\n&quot;</span><span class="token punctuation">,</span> s2<span class="token punctuation">)</span>
    s3 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;slice s3 : %v\\n&quot;</span><span class="token punctuation">,</span> s3<span class="token punctuation">)</span>
    s3 <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s3<span class="token punctuation">,</span> s2<span class="token operator">...</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;appended slice s3 : %v\\n&quot;</span><span class="token punctuation">,</span> s3<span class="token punctuation">)</span>
    s3 <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s3<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;last slice s3 : %v\\n&quot;</span><span class="token punctuation">,</span> s3<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    slice s1 : [1 2 3 4 5]
    slice s2 : [0 0 0 0 0 0 0 0 0 0]
    copied slice s1 : [1 2 3 4 5]
    copied slice s2 : [1 2 3 4 5 0 0 0 0 0]
    slice s3 : [1 2 3]
    appended slice s3 : [1 2 3 1 2 3 4 5 0 0 0 0 0]
    last slice s3 : [1 2 3 1 2 3 4 5 0 0 0 0 0 4 5 6]
</code></pre></div><p>copy \uFF1A\u51FD\u6570 copy \u5728\u4E24\u4E2A slice \u95F4\u590D\u5236\u6570\u636E\uFF0C\u590D\u5236\u957F\u5EA6\u4EE5 len \u5C0F\u7684\u4E3A\u51C6\u3002\u4E24\u4E2A slice \u53EF\u6307\u5411\u540C\u4E00\u5E95\u5C42\u6570\u7EC4\uFF0C\u5141\u8BB8\u5143\u7D20\u533A\u95F4\u91CD\u53E0\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    data <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;array data : &quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
    s1 <span class="token operator">:=</span> data<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
    s2 <span class="token operator">:=</span> data<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">]</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;slice s1 : %v\\n&quot;</span><span class="token punctuation">,</span> s1<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;slice s2 : %v\\n&quot;</span><span class="token punctuation">,</span> s2<span class="token punctuation">)</span>
    <span class="token function">copy</span><span class="token punctuation">(</span>s2<span class="token punctuation">,</span> s1<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;copied slice s1 : %v\\n&quot;</span><span class="token punctuation">,</span> s1<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;copied slice s2 : %v\\n&quot;</span><span class="token punctuation">,</span> s2<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;last array data : &quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C:</p><div class="language-text ext-text"><pre class="language-text"><code>    array data :  [0 1 2 3 4 5 6 7 8 9]
    slice s1 : [8 9]
    slice s2 : [0 1 2 3 4]
    copied slice s1 : [8 9]
    copied slice s2 : [8 9 2 3 4]
    last array data :  [8 9 2 3 4 5 6 7 8 9]
</code></pre></div><p>\u5E94\u53CA\u65F6\u5C06\u6240\u9700\u6570\u636E copy \u5230\u8F83\u5C0F\u7684 slice\uFF0C\u4EE5\u4FBF\u91CA\u653E\u8D85\u5927\u53F7\u5E95\u5C42\u6570\u7EC4\u5185\u5B58\u3002</p><h3 id="_1-1-8-slice\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#_1-1-8-slice\u904D\u5386" aria-hidden="true">#</a> 1.1.8. slice\u904D\u5386\uFF1A</h3><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    data <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">}</span>
    slice <span class="token operator">:=</span> data<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> index<span class="token punctuation">,</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> slice <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;inde : %v , value : %v\\n&quot;</span><span class="token punctuation">,</span> index<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    inde : 0 , value : 0
    inde : 1 , value : 1
    inde : 2 , value : 2
    inde : 3 , value : 3
    inde : 4 , value : 4
    inde : 5 , value : 5
    inde : 6 , value : 6
    inde : 7 , value : 7
    inde : 8 , value : 8
    inde : 9 , value : 9
</code></pre></div><h3 id="_1-1-9-\u5207\u7247resize-\u8C03\u6574\u5927\u5C0F" tabindex="-1"><a class="header-anchor" href="#_1-1-9-\u5207\u7247resize-\u8C03\u6574\u5927\u5C0F" aria-hidden="true">#</a> 1.1.9. \u5207\u7247resize\uFF08\u8C03\u6574\u5927\u5C0F\uFF09</h3><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;slice a : %v , len(a) : %v\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>
    b <span class="token operator">:=</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;slice b : %v , len(b) : %v\\n&quot;</span><span class="token punctuation">,</span> b<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span>
    c <span class="token operator">:=</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;slice c : %v , len(c) : %v\\n&quot;</span><span class="token punctuation">,</span> c<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    slice a : [1 3 4 5] , len(a) : 4
    slice b : [3] , len(b) : 1
    slice c : [3 4 5] , len(c) : 3
</code></pre></div><h3 id="_1-1-10-\u6570\u7EC4\u548C\u5207\u7247\u7684\u5185\u5B58\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#_1-1-10-\u6570\u7EC4\u548C\u5207\u7247\u7684\u5185\u5B58\u5E03\u5C40" aria-hidden="true">#</a> 1.1.10. \u6570\u7EC4\u548C\u5207\u7247\u7684\u5185\u5B58\u5E03\u5C40</h3><p><img src="https://downloadflies.com//blog-img/image-20220718134249596.png" alt="image-20220718134249596"></p><h3 id="_1-1-11-\u5B57\u7B26\u4E32\u548C\u5207\u7247-string-and-slice" tabindex="-1"><a class="header-anchor" href="#_1-1-11-\u5B57\u7B26\u4E32\u548C\u5207\u7247-string-and-slice" aria-hidden="true">#</a> 1.1.11. \u5B57\u7B26\u4E32\u548C\u5207\u7247\uFF08string and slice\uFF09</h3><p>string\u5E95\u5C42\u5C31\u662F\u4E00\u4E2Abyte\u7684\u6570\u7EC4\uFF0C\u56E0\u6B64\uFF0C\u4E5F\u53EF\u4EE5\u8FDB\u884C\u5207\u7247\u64CD\u4F5C\u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    str <span class="token operator">:=</span> <span class="token string">&quot;hello world&quot;</span>
    s1 <span class="token operator">:=</span> str<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">]</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span>

    s2 <span class="token operator">:=</span> str<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    hello
    world
</code></pre></div><p>string\u672C\u8EAB\u662F\u4E0D\u53EF\u53D8\u7684\uFF0C\u56E0\u6B64\u8981\u6539\u53D8string\u4E2D\u5B57\u7B26\u3002\u9700\u8981\u5982\u4E0B\u64CD\u4F5C\uFF1A \u82F1\u6587\u5B57\u7B26\u4E32\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    str <span class="token operator">:=</span> <span class="token string">&quot;Hello world&quot;</span>
    s <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token comment">//\u4E2D\u6587\u5B57\u7B26\u9700\u8981\u7528[]rune(str)</span>
    s<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;G&#39;</span>
    s <span class="token operator">=</span> s<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">8</span><span class="token punctuation">]</span>
    s <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token char">&#39;!&#39;</span><span class="token punctuation">)</span>
    str <span class="token operator">=</span> <span class="token function">string</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    Hello Go!
</code></pre></div><h3 id="_1-1-12-\u542B\u6709\u4E2D\u6587\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#_1-1-12-\u542B\u6709\u4E2D\u6587\u5B57\u7B26\u4E32" aria-hidden="true">#</a> 1.1.12. \u542B\u6709\u4E2D\u6587\u5B57\u7B26\u4E32\uFF1A</h3><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    str <span class="token operator">:=</span> <span class="token string">&quot;\u4F60\u597D\uFF0C\u4E16\u754C\uFF01hello world\uFF01&quot;</span>
    s <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">rune</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> 
    s<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;\u591F&#39;</span>
    s<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;\u6D6A&#39;</span>
    s<span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;g&#39;</span>
    s <span class="token operator">=</span> s<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">14</span><span class="token punctuation">]</span>
    str <span class="token operator">=</span> <span class="token function">string</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>\u4F60\u597D\uFF0C\u591F\u6D6A\uFF01hello go
</code></pre></div><p>golang slice data[:6:8] \u4E24\u4E2A\u5192\u53F7\u7684\u7406\u89E3</p><p>\u5E38\u89C4slice , data[6:8]\uFF0C\u4ECE\u7B2C6\u4F4D\u5230\u7B2C8\u4F4D\uFF08\u8FD4\u56DE6\uFF0C 7\uFF09\uFF0C\u957F\u5EA6len\u4E3A2\uFF0C \u6700\u5927\u53EF\u6269\u5145\u957F\u5EA6cap\u4E3A4\uFF086-9\uFF09</p><p>\u53E6\u4E00\u79CD\u5199\u6CD5\uFF1A data[:6:8] \u6BCF\u4E2A\u6570\u5B57\u524D\u90FD\u6709\u4E2A\u5192\u53F7\uFF0C slice\u5185\u5BB9\u4E3Adata\u4ECE0\u5230\u7B2C6\u4F4D\uFF0C\u957F\u5EA6len\u4E3A6\uFF0C\u6700\u5927\u6269\u5145\u9879cap\u8BBE\u7F6E\u4E3A8</p><p>a[x:y:z] \u5207\u7247\u5185\u5BB9 [x:y] \u5207\u7247\u957F\u5EA6: y-x \u5207\u7247\u5BB9\u91CF:z-x</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    slice <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">}</span>
    d1 <span class="token operator">:=</span> slice<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">:</span><span class="token number">8</span><span class="token punctuation">]</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>d1<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>d1<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>d1<span class="token punctuation">)</span><span class="token punctuation">)</span>
    d2 <span class="token operator">:=</span> slice<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">6</span><span class="token punctuation">:</span><span class="token number">8</span><span class="token punctuation">]</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>d2<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>d2<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>d2<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6570\u7EC4or\u5207\u7247\u8F6C\u5B57\u7B26\u4E32\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    strings.Replace(strings.Trim(fmt.Sprint(array_or_slice), &quot;[]&quot;), &quot; &quot;, &quot;,&quot;, -1)
</code></pre></div>`,97),c=[o];function e(u,l){return s(),a("div",null,c)}var k=n(t,[["render",e],["__file","12-\u5207\u7247.html.vue"]]);export{k as default};
