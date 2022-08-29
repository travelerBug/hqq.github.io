import{_ as e,o as a,c as n,e as t}from"./app.a047c15b.js";const r={},c=t(`<h1 id="_1-golang\u5185\u7F6E\u7C7B\u578B\u548C\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_1-golang\u5185\u7F6E\u7C7B\u578B\u548C\u51FD\u6570" aria-hidden="true">#</a> 1. Golang\u5185\u7F6E\u7C7B\u578B\u548C\u51FD\u6570</h1><h2 id="_1-1-\u5185\u7F6E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_1-1-\u5185\u7F6E\u7C7B\u578B" aria-hidden="true">#</a> 1.1. \u5185\u7F6E\u7C7B\u578B</h2><h3 id="_1-1-1-\u503C\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_1-1-1-\u503C\u7C7B\u578B" aria-hidden="true">#</a> 1.1.1. \u503C\u7C7B\u578B\uFF1A</h3><p><code>int</code>, <code>uint</code> \u548C <code>uintptr</code> \u5728 32 \u4F4D\u7CFB\u7EDF\u4E0A\u901A\u5E38\u4E3A 32 \u4F4D\u5BBD\uFF0C\u5728 64 \u4F4D\u7CFB\u7EDF\u4E0A\u5219\u4E3A 64 \u4F4D\u5BBD\u3002 \u5F53\u4F60\u9700\u8981\u4E00\u4E2A\u6574\u6570\u503C\u65F6\u5E94\u4F7F\u7528 <code>int</code> \u7C7B\u578B\uFF0C\u9664\u975E\u4F60\u6709\u7279\u6B8A\u7684\u7406\u7531\u4F7F\u7528\u56FA\u5B9A\u5927\u5C0F\u6216\u65E0\u7B26\u53F7\u7684\u6574\u6570\u7C7B\u578B\u3002</p><p>\u53D8\u91CF\u521D\u59CB\u503C:</p><ul><li>\u6570\u503C\u7C7B\u578B\u4E3A <code>0</code>\uFF0C</li><li>\u5E03\u5C14\u7C7B\u578B\u4E3A <code>false</code>\uFF0C</li><li>\u5B57\u7B26\u4E32\u4E3A <code>&quot;&quot;</code>\uFF08\u7A7A\u5B57\u7B26\u4E32\uFF09\u3002</li></ul><div class="language-text ext-text"><pre class="language-text"><code>    bool
    int(32 or 64), int8, int16, int32, int64
    uint(32 or 64), uint8(byte), uint16, uint32, uint64,uintptr
    float32, float64
    string
    complex64, complex128
    array    -- \u56FA\u5B9A\u957F\u5EA6\u7684\u6570\u7EC4
</code></pre></div><h3 id="_1-1-2-\u5F15\u7528\u7C7B\u578B-\u6307\u9488\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_1-1-2-\u5F15\u7528\u7C7B\u578B-\u6307\u9488\u7C7B\u578B" aria-hidden="true">#</a> 1.1.2. \u5F15\u7528\u7C7B\u578B\uFF1A(\u6307\u9488\u7C7B\u578B)</h3><div class="language-text ext-text"><pre class="language-text"><code>    slice   -- \u5E8F\u5217\u6570\u7EC4(\u6700\u5E38\u7528)
    map     -- \u6620\u5C04
    chan    -- \u7BA1\u9053
</code></pre></div><h2 id="_1-2-\u5185\u7F6E\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_1-2-\u5185\u7F6E\u51FD\u6570" aria-hidden="true">#</a> 1.2. \u5185\u7F6E\u51FD\u6570</h2><p>Go \u8BED\u8A00\u62E5\u6709\u4E00\u4E9B\u4E0D\u9700\u8981\u8FDB\u884C\u5BFC\u5165\u64CD\u4F5C\u5C31\u53EF\u4EE5\u4F7F\u7528\u7684\u5185\u7F6E\u51FD\u6570\u3002\u5B83\u4EEC\u6709\u65F6\u53EF\u4EE5\u9488\u5BF9\u4E0D\u540C\u7684\u7C7B\u578B\u8FDB\u884C\u64CD\u4F5C\uFF0C\u4F8B\u5982\uFF1Alen\u3001cap \u548C append\uFF0C\u6216\u5FC5\u987B\u7528\u4E8E\u7CFB\u7EDF\u7EA7\u7684\u64CD\u4F5C\uFF0C\u4F8B\u5982\uFF1Apanic\u3002\u56E0\u6B64\uFF0C\u5B83\u4EEC\u9700\u8981\u76F4\u63A5\u83B7\u5F97\u7F16\u8BD1\u5668\u7684\u652F\u6301\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>    append          -- \u7528\u6765\u8FFD\u52A0\u5143\u7D20\u5230\u6570\u7EC4\u3001slice\u4E2D,\u8FD4\u56DE\u4FEE\u6539\u540E\u7684\u6570\u7EC4\u3001slice
    close           -- \u4E3B\u8981\u7528\u6765\u5173\u95EDchannel
    delete            -- \u4ECEmap\u4E2D\u5220\u9664key\u5BF9\u5E94\u7684value
    panic            -- \u505C\u6B62\u5E38\u89C4\u7684goroutine  \uFF08panic\u548Crecover\uFF1A\u7528\u6765\u505A\u9519\u8BEF\u5904\u7406\uFF09
    recover         -- \u5141\u8BB8\u7A0B\u5E8F\u5B9A\u4E49goroutine\u7684panic\u52A8\u4F5C
    real            -- \u8FD4\u56DEcomplex\u7684\u5B9E\u90E8   \uFF08complex\u3001real imag\uFF1A\u7528\u4E8E\u521B\u5EFA\u548C\u64CD\u4F5C\u590D\u6570\uFF09
    imag            -- \u8FD4\u56DEcomplex\u7684\u865A\u90E8
    make            -- \u7528\u6765\u5206\u914D\u5185\u5B58\uFF0C\u8FD4\u56DEType\u672C\u8EAB(\u53EA\u80FD\u5E94\u7528\u4E8Eslice, map, channel)
    new                -- \u7528\u6765\u5206\u914D\u5185\u5B58\uFF0C\u4E3B\u8981\u7528\u6765\u5206\u914D\u503C\u7C7B\u578B\uFF0C\u6BD4\u5982int\u3001struct\u3002\u8FD4\u56DE\u6307\u5411Type\u7684\u6307\u9488
    cap                -- capacity\u662F\u5BB9\u91CF\u7684\u610F\u601D\uFF0C\u7528\u4E8E\u8FD4\u56DE\u67D0\u4E2A\u7C7B\u578B\u7684\u6700\u5927\u5BB9\u91CF\uFF08\u53EA\u80FD\u7528\u4E8E\u5207\u7247\u548C map\uFF09
    copy            -- \u7528\u4E8E\u590D\u5236\u548C\u8FDE\u63A5slice\uFF0C\u8FD4\u56DE\u590D\u5236\u7684\u6570\u76EE
    len                -- \u6765\u6C42\u957F\u5EA6\uFF0C\u6BD4\u5982string\u3001array\u3001slice\u3001map\u3001channel \uFF0C\u8FD4\u56DE\u957F\u5EA6
    print\u3001println     -- \u5E95\u5C42\u6253\u5370\u51FD\u6570\uFF0C\u5728\u90E8\u7F72\u73AF\u5883\u4E2D\u5EFA\u8BAE\u4F7F\u7528 fmt \u5305
</code></pre></div><h2 id="_1-3-\u5185\u7F6E\u63A5\u53E3error" tabindex="-1"><a class="header-anchor" href="#_1-3-\u5185\u7F6E\u63A5\u53E3error" aria-hidden="true">#</a> 1.3. \u5185\u7F6E\u63A5\u53E3error</h2><div class="language-text ext-text"><pre class="language-text"><code>    type error interface { //\u53EA\u8981\u5B9E\u73B0\u4E86Error()\u51FD\u6570\uFF0C\u8FD4\u56DE\u503C\u4E3AString\u7684\u90FD\u5B9E\u73B0\u4E86err\u63A5\u53E3

            Error()    String

    }
</code></pre></div>`,14),i=[c];function o(d,l){return a(),n("div",null,i)}var p=e(r,[["render",o],["__file","2-\u5185\u7F6E\u7C7B\u578B\u548C\u5185\u7F6E\u51FD\u6570.html.vue"]]);export{p as default};
