import{_ as e,o,c as t,e as c}from"./app.cef7465c.js";const a={},d=c(`<p>##1.2. \u5E38\u91CF</p><p>\u76F8\u5BF9\u4E8E\u53D8\u91CF\uFF0C\u5E38\u91CF\u662F\u6052\u5B9A\u4E0D\u53D8\u7684\u503C\uFF0C\u591A\u7528\u4E8E\u5B9A\u4E49\u7A0B\u5E8F\u8FD0\u884C\u671F\u95F4\u4E0D\u4F1A\u6539\u53D8\u7684\u90A3\u4E9B\u503C\u3002 \u5E38\u91CF\u7684\u58F0\u660E\u548C\u53D8\u91CF\u58F0\u660E\u975E\u5E38\u7C7B\u4F3C\uFF0C\u53EA\u662F\u628A<code>var</code>\u6362\u6210\u4E86<code>const</code>\uFF0C\u5E38\u91CF\u5728\u5B9A\u4E49\u7684\u65F6\u5019\u5FC5\u987B\u8D4B\u503C\u3002</p><p>\u5B9A\u4E49\u5E38\u91CF\u7684\u8BED\u6CD5\u683C\u5F0F\uFF1A</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">const</span> constantName <span class="token punctuation">[</span><span class="token keyword">type</span><span class="token punctuation">]</span> <span class="token operator">=</span> value
</code></pre></div><p><code>const</code> \uFF1A\u5173\u952E\u5B57</p><p><code>constantName</code>\uFF1A\u5E38\u91CF\u540D\u79F0</p><p><code>type</code>\uFF1A\u5E38\u91CF\u7C7B\u578B</p><p><code>value</code>: \u5E38\u91CF\u7684\u503C</p><p>\u793A\u4F8B\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    const PI = 3.1415
    const E = 2.7182
</code></pre></div><p>\u58F0\u660E\u4E86<code>pi</code>\u548C<code>e</code>\u8FD9\u4E24\u4E2A\u5E38\u91CF\u4E4B\u540E\uFF0C\u5728\u6574\u4E2A\u7A0B\u5E8F\u8FD0\u884C\u671F\u95F4\u5B83\u4EEC\u7684\u503C\u90FD\u4E0D\u80FD\u518D\u53D1\u751F\u53D8\u5316\u4E86\u3002</p><p>\u591A\u4E2A\u5E38\u91CF\u4E5F\u53EF\u4EE5\u4E00\u8D77\u58F0\u660E\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    const (
        PI = 3.1415
        E = 2.7182
    )
</code></pre></div><p><code>const</code>\u540C\u65F6\u58F0\u660E\u591A\u4E2A\u5E38\u91CF\u65F6\uFF0C\u5982\u679C\u7701\u7565\u4E86\u503C\u5219\u8868\u793A\u548C\u4E0A\u9762\u4E00\u884C\u7684\u503C\u76F8\u540C\u3002 \u4F8B\u5982\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    const (
        N1 = 100
        N2
        N3
    )
</code></pre></div><p>\u4E0A\u9762\u793A\u4F8B\u4E2D\uFF0C\u5E38\u91CF<code>N1\u3001N2\u3001N3</code>\u7684\u503C\u90FD\u662F<code>100</code>\u3002</p><h3 id="_1-2-1-iota" tabindex="-1"><a class="header-anchor" href="#_1-2-1-iota" aria-hidden="true">#</a> 1.2.1. iota</h3><p><code>iota</code>\u662F<code>go</code>\u8BED\u8A00\u7684\u5E38\u91CF\u8BA1\u6570\u5668\uFF0C\u53EA\u80FD\u5728\u5E38\u91CF\u7684\u8868\u8FBE\u5F0F\u4E2D\u4F7F\u7528\u3002 <code>iota</code>\u5728<code>const</code>\u5173\u952E\u5B57\u51FA\u73B0\u65F6\u5C06\u88AB\u91CD\u7F6E\u4E3A<code>0</code>\u3002<code>const</code>\u4E2D\u6BCF\u65B0\u589E\u4E00\u884C\u5E38\u91CF\u58F0\u660E\u5C06\u4F7F<code>iota</code>\u8BA1\u6570\u4E00\u6B21(<code>iota</code>\u53EF\u7406\u89E3\u4E3A<code>const</code>\u8BED\u53E5\u5757\u4E2D\u7684\u884C\u7D22\u5F15)\u3002 \u4F7F\u7528<code>iota</code>\u80FD\u7B80\u5316\u5B9A\u4E49\uFF0C\u5728\u5B9A\u4E49\u679A\u4E3E\u65F6\u5F88\u6709\u7528\u3002</p><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>    const (
            N1 = iota //0
            N2        //1
            N3        //2
            N4        //3
        )
</code></pre></div><h3 id="_1-2-2-\u51E0\u4E2A\u5E38\u89C1\u7684iota\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_1-2-2-\u51E0\u4E2A\u5E38\u89C1\u7684iota\u793A\u4F8B" aria-hidden="true">#</a> 1.2.2. \u51E0\u4E2A\u5E38\u89C1\u7684iota\u793A\u4F8B:</h3><p>\u4F7F\u7528_\u8DF3\u8FC7\u67D0\u4E9B\u503C</p><div class="language-text ext-text"><pre class="language-text"><code>    const (
            N1 = iota //0
            N2        //1
            _
            N4        //3
        )
</code></pre></div><p><code>iota</code>\u58F0\u660E\u4E2D\u95F4\u63D2\u961F</p><div class="language-text ext-text"><pre class="language-text"><code>    const (
            N1 = iota //0
            N2 = 100  //100
            N3 = iota //2
            N4        //3
        )
    const n5 = iota //0
</code></pre></div><p>\u5B9A\u4E49\u6570\u91CF\u7EA7 \uFF08\u8FD9\u91CC\u7684<code>&lt;&lt;</code>\u8868\u793A\u5DE6\u79FB\u64CD\u4F5C\uFF0C<code>1&lt;&lt;10</code>\u8868\u793A\u5C06<code>1</code>\u7684\u4E8C\u8FDB\u5236\u8868\u793A\u5411\u5DE6\u79FB<code>10</code>\u4F4D\uFF0C\u4E5F\u5C31\u662F\u7531<code>1</code>\u53D8\u6210\u4E86<code>10000000000</code>\uFF0C\u4E5F\u5C31\u662F\u5341\u8FDB\u5236\u7684<code>1024</code>\u3002\u540C\u7406<code>2&lt;&lt;2</code>\u8868\u793A\u5C06<code>2</code>\u7684\u4E8C\u8FDB\u5236\u8868\u793A\u5411\u5DE6\u79FB<code>2</code>\u4F4D\uFF0C\u4E5F\u5C31\u662F\u7531<code>10</code>\u53D8\u6210\u4E86<code>1000</code>\uFF0C\u4E5F\u5C31\u662F\u5341\u8FDB\u5236\u7684<code>8</code>\u3002\uFF09</p><div class="language-text ext-text"><pre class="language-text"><code>    const (
            _  = iota
            KB = 1 &lt;&lt; (10 * iota)
            MB = 1 &lt;&lt; (10 * iota)
            GB = 1 &lt;&lt; (10 * iota)
            TB = 1 &lt;&lt; (10 * iota)
            PB = 1 &lt;&lt; (10 * iota)
        )
</code></pre></div><p>\u591A\u4E2A<code>iota</code>\u5B9A\u4E49\u5728\u4E00\u884C</p><div class="language-text ext-text"><pre class="language-text"><code>    const (
            A, B = iota + 1, iota + 2 //1,2
            C, D                      //2,3
            E, F                      //3,4
        )
</code></pre></div>`,29),n=[d];function s(p,l){return o(),t("div",null,n)}var r=e(a,[["render",s],["__file","1-2\u5E38\u91CF.html.vue"]]);export{r as default};
