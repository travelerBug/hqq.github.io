import{_ as a,o as n,c as s,e as t}from"./app.e743ea34.js";const p={},o=t(`<h1 id="\u6316\u6D1E" tabindex="-1"><a class="header-anchor" href="#\u6316\u6D1E" aria-hidden="true">#</a> \u6316\u6D1E</h1><h3 id="\u6548\u679C\u5982\u4E0B" tabindex="-1"><a class="header-anchor" href="#\u6548\u679C\u5982\u4E0B" aria-hidden="true">#</a> \u6548\u679C\u5982\u4E0B\uFF1A</h3><hr><p><img src="http://downloadflies.com/blog-img/19738633-f804cc8cadfa47c6.gif" alt="img"></p><h3 id="\u6838\u5FC3\u6280\u672F" tabindex="-1"><a class="header-anchor" href="#\u6838\u5FC3\u6280\u672F" aria-hidden="true">#</a> \u6838\u5FC3\u6280\u672F</h3><hr><ol><li><p>\u591A\u8FB9\u5F62\u8BA1\u7B97</p></li><li><p>Graphics\u7ED8\u56FE</p></li><li><p>\u591A\u8FB9\u5F62\u78B0\u649E\u7EC4\u4EF6\uFF08PolygonCollider2D\uFF09</p></li><li><p>\u5411\u91CF\u70B9\u4E58</p></li></ol><h3 id="\u6B63\u591A\u8FB9\u5F62\u9876\u70B9\u4F4D\u7F6E\u7684\u8BA1\u7B97" tabindex="-1"><a class="header-anchor" href="#\u6B63\u591A\u8FB9\u5F62\u9876\u70B9\u4F4D\u7F6E\u7684\u8BA1\u7B97" aria-hidden="true">#</a> \u6B63\u591A\u8FB9\u5F62\u9876\u70B9\u4F4D\u7F6E\u7684\u8BA1\u7B97</h3><ul><li>\u516C\u5F0F\u5982\u4E0B\uFF1A</li></ul><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">const</span> r <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">*</span> i <span class="token operator">/</span> n<span class="token punctuation">;</span>
<span class="token keyword">let</span> vec_x <span class="token operator">=</span> <span class="token constant">DIG_RADIUS</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">cos</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> vec_y <span class="token operator">=</span> <span class="token constant">DIG_RADIUS</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">sin</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>\u7406\u89E3\u65B9\u5F0F\uFF1A \u4E00\u5708360\u5EA6 \u6B63\u591A\u8FB9\u5F62\u76F8\u5F53\u4E8E\u6784\u5EFA\u591A\u4E2A\u4E09\u89D2\u5F62</p><p>\u5DF2\u77E5\u4E2D\u95F4\u70B9\u5750\u6807,\u6C42\u9876\u70B9\u5750\u6807</p><ul><li><strong>2 * Math.PI * i / n; \u6BCF\u4E2A\u9876\u70B9\u7684\u89D2\u5EA6(\u5F27\u5EA6\u5236)</strong></li><li>360\u5F27\u5EA6\u5236 \u8868\u793A\u4E3A2*Math.PI</li></ul></blockquote><p><img src="https://downloadflies.com/blog-img/image-20220831214419036.png" alt="image-20220831214419036"></p>`,12),e=[o];function c(l,i){return n(),s("div",null,e)}var u=a(p,[["render",c],["__file","\u6316\u6D1E.html.vue"]]);export{u as default};
