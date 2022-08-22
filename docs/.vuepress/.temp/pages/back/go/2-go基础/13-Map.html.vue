<template><div><h2 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> Map</h2>
<p>map是一种无序的基于key-value的数据结构，Go语言中的map是引用类型，必须初始化才能使用。</p>
<p>map是一种无序的基于key-value的数据结构，Go语言中的map是引用类型，必须初始化才能使用。</p>
<h3 id="_1-1-1-map定义" tabindex="-1"><a class="header-anchor" href="#_1-1-1-map定义" aria-hidden="true">#</a> 1.1.1. map定义</h3>
<p>Go语言中 map的定义语法如下</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    map[KeyType]ValueType
</code></pre></div><p>其中，</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    KeyType:表示键的类型。

    ValueType:表示键对应的值的类型。
</code></pre></div><p>map类型的变量默认初始值为nil，需要使用make()函数来分配内存。语法为：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    make(map[KeyType]ValueType, [cap])
</code></pre></div><p>其中cap表示map的容量，该参数虽然不是必须的，但是我们应该在初始化map的时候就为其指定一个合适的容量。</p>
<h3 id="_1-1-2-map基本使用" tabindex="-1"><a class="header-anchor" href="#_1-1-2-map基本使用" aria-hidden="true">#</a> 1.1.2. map基本使用</h3>
<p>map中的数据都是成对出现的，map的基本使用示例代码如下：</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    scoreMap <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span>
    scoreMap<span class="token punctuation">[</span><span class="token string">"张三"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">90</span>
    scoreMap<span class="token punctuation">[</span><span class="token string">"小明"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>scoreMap<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>scoreMap<span class="token punctuation">[</span><span class="token string">"小明"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"type of a:%T\n"</span><span class="token punctuation">,</span> scoreMap<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>输出：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    map[小明:100 张三:90]
    100
    type of a:map[string]int
</code></pre></div><p>map也支持在声明的时候填充元素，例如：</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    userInfo <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span>
        <span class="token string">"username"</span><span class="token punctuation">:</span> <span class="token string">"pprof.cn"</span><span class="token punctuation">,</span>
        <span class="token string">"password"</span><span class="token punctuation">:</span> <span class="token string">"123456"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>userInfo<span class="token punctuation">)</span> <span class="token comment">//</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_1-1-3-判断某个键是否存在" tabindex="-1"><a class="header-anchor" href="#_1-1-3-判断某个键是否存在" aria-hidden="true">#</a> 1.1.3. 判断某个键是否存在</h3>
<p>Go语言中有个判断map中键是否存在的特殊写法，格式如下:</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    value, ok := map[key]
</code></pre></div><p>举个例子：</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    scoreMap <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>
    scoreMap<span class="token punctuation">[</span><span class="token string">"张三"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">90</span>
    scoreMap<span class="token punctuation">[</span><span class="token string">"小明"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span>
    <span class="token comment">// 如果key存在ok为true,v为对应的值；不存在ok为false,v为值类型的零值</span>
    v<span class="token punctuation">,</span> ok <span class="token operator">:=</span> scoreMap<span class="token punctuation">[</span><span class="token string">"张三"</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> ok <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"查无此人"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_1-1-4-map的遍历" tabindex="-1"><a class="header-anchor" href="#_1-1-4-map的遍历" aria-hidden="true">#</a> 1.1.4. map的遍历</h3>
<p>Go语言中使用for range遍历map。</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    scoreMap <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>
    scoreMap<span class="token punctuation">[</span><span class="token string">"张三"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">90</span>
    scoreMap<span class="token punctuation">[</span><span class="token string">"小明"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span>
    scoreMap<span class="token punctuation">[</span><span class="token string">"王五"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">60</span>
    <span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> scoreMap <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>但我们只想遍历key的时候，可以按下面的写法：</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    scoreMap <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>
    scoreMap<span class="token punctuation">[</span><span class="token string">"张三"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">90</span>
    scoreMap<span class="token punctuation">[</span><span class="token string">"小明"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span>
    scoreMap<span class="token punctuation">[</span><span class="token string">"王五"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">60</span>
    <span class="token keyword">for</span> k <span class="token operator">:=</span> <span class="token keyword">range</span> scoreMap <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>注意： 遍历map时的元素顺序与添加键值对的顺序无关。</p>
<h3 id="_1-1-5-使用delete-函数删除键值对" tabindex="-1"><a class="header-anchor" href="#_1-1-5-使用delete-函数删除键值对" aria-hidden="true">#</a> 1.1.5. 使用delete()函数删除键值对</h3>
<p>使用delete()内建函数从map中删除一组键值对，delete()函数的格式如下：</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    delete(map, key)
</code></pre></div><p>其中，</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    map:表示要删除键值对的map

    key:表示要删除的键值对的键
</code></pre></div><p>示例代码如下：</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    scoreMap <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>
    scoreMap<span class="token punctuation">[</span><span class="token string">"张三"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">90</span>
    scoreMap<span class="token punctuation">[</span><span class="token string">"小明"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span>
    scoreMap<span class="token punctuation">[</span><span class="token string">"王五"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">60</span>
    <span class="token function">delete</span><span class="token punctuation">(</span>scoreMap<span class="token punctuation">,</span> <span class="token string">"小明"</span><span class="token punctuation">)</span><span class="token comment">//将小明:100从map中删除</span>
    <span class="token keyword">for</span> k<span class="token punctuation">,</span>v <span class="token operator">:=</span> <span class="token keyword">range</span> scoreMap<span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_1-1-6-按照指定顺序遍历map" tabindex="-1"><a class="header-anchor" href="#_1-1-6-按照指定顺序遍历map" aria-hidden="true">#</a> 1.1.6. 按照指定顺序遍历map</h3>
<div class="language-go ext-go"><pre v-pre class="language-go"><code> <span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    rand<span class="token punctuation">.</span><span class="token function">Seed</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">UnixNano</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//初始化随机数种子</span>

    <span class="token keyword">var</span> scoreMap <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        key <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">"stu%02d"</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token comment">//生成stu开头的字符串</span>
        value <span class="token operator">:=</span> rand<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>          <span class="token comment">//生成0~99的随机整数</span>
        scoreMap<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value
    <span class="token punctuation">}</span>
    <span class="token comment">//取出map中的所有key存入切片keys</span>
    <span class="token keyword">var</span> keys <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> key <span class="token operator">:=</span> <span class="token keyword">range</span> scoreMap <span class="token punctuation">{</span>
        keys <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>keys<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//对切片进行排序</span>
    sort<span class="token punctuation">.</span><span class="token function">Strings</span><span class="token punctuation">(</span>keys<span class="token punctuation">)</span>
    <span class="token comment">//按照排序后的key遍历map</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> key <span class="token operator">:=</span> <span class="token keyword">range</span> keys <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> scoreMap<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_1-1-7-元素为map类型的切片" tabindex="-1"><a class="header-anchor" href="#_1-1-7-元素为map类型的切片" aria-hidden="true">#</a> 1.1.7. 元素为map类型的切片</h3>
<p>下面的代码演示了切片中的元素为map类型时的操作：</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> mapSlice <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> index<span class="token punctuation">,</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> mapSlice <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"index:%d value:%v\n"</span><span class="token punctuation">,</span> index<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"after init"</span><span class="token punctuation">)</span>
    <span class="token comment">// 对切片中的map元素进行初始化</span>
    mapSlice<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    mapSlice<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"王五"</span>
    mapSlice<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"password"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"123456"</span>
    mapSlice<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"address"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"红旗大街"</span>
    <span class="token keyword">for</span> index<span class="token punctuation">,</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> mapSlice <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"index:%d value:%v\n"</span><span class="token punctuation">,</span> index<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_1-1-8-值为切片类型的map" tabindex="-1"><a class="header-anchor" href="#_1-1-8-值为切片类型的map" aria-hidden="true">#</a> 1.1.8. 值为切片类型的map</h3>
<p>下面的代码演示了map中值为切片类型的操作：</p>
<div class="language-go ext-go"><pre v-pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> sliceMap <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>sliceMap<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">"after init"</span><span class="token punctuation">)</span>
    key <span class="token operator">:=</span> <span class="token string">"中国"</span>
    value<span class="token punctuation">,</span> ok <span class="token operator">:=</span> sliceMap<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
        value <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    value <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token string">"北京"</span><span class="token punctuation">,</span> <span class="token string">"上海"</span><span class="token punctuation">)</span>
    sliceMap<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>sliceMap<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div></div></template>
