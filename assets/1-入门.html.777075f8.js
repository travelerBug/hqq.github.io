import{_ as n,o as a,c as s,e as t}from"./app.ad4da1a1.js";const o={},e=t(`<h1 id="\u5E76\u53D1\u5B89\u5168\u548C\u9501" tabindex="-1"><a class="header-anchor" href="#\u5E76\u53D1\u5B89\u5168\u548C\u9501" aria-hidden="true">#</a> \u5E76\u53D1\u5B89\u5168\u548C\u9501</h1><hr><p>\u5728 Go \u8BED\u8A00\u4E2D\uFF0C\u7ECF\u5E38\u4F1A\u9047\u5230\u5E76\u53D1\u7684\u95EE\u9898\uFF0C\u5F53\u7136\u6211\u4EEC\u4F1A\u4F18\u5148\u8003\u8651\u4F7F\u7528\u901A\u9053\uFF0C\u540C\u65F6 Go \u8BED\u8A00\u4E5F\u7ED9\u51FA\u4E86\u4F20\u7EDF\u7684\u89E3\u51B3\u65B9\u5F0F <strong>Mutex(\u4E92\u65A5\u9501)</strong> \u548C <strong>RWMutex(\u8BFB\u5199\u9501)</strong> \u6765\u5904\u7406\u7ADE\u4E89\u6761\u4EF6\u3002</p><h3 id="_1-1-\u4E34\u754C\u533A" tabindex="-1"><a class="header-anchor" href="#_1-1-\u4E34\u754C\u533A" aria-hidden="true">#</a> 1.1 \u4E34\u754C\u533A</h3><p>\u9996\u5148\u6211\u4EEC\u8981\u7406\u89E3\u5E76\u53D1\u7F16\u7A0B\u4E2D\u4E34\u754C\u533A\u7684\u6982\u5FF5\u3002\u5F53\u7A0B\u5E8F\u5E76\u53D1\u5730\u8FD0\u884C\u65F6\uFF0C\u591A\u4E2A Go \u534F\u7A0B\u4E0D\u5E94\u8BE5\u540C\u65F6\u8BBF\u95EE\u90A3\u4E9B\u4FEE\u6539\u5171\u4EAB\u8D44\u6E90\u7684\u4EE3\u7801\u3002\u8FD9\u4E9B\u4FEE\u6539\u5171\u4EAB\u8D44\u6E90\u7684\u4EE3\u7801\u79F0\u4E3A<strong>\u4E34\u754C\u533A</strong> \u3002</p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup
    b <span class="token operator">:=</span> <span class="token operator">&amp;</span>Bank<span class="token punctuation">{</span><span class="token punctuation">}</span>

    n <span class="token operator">:=</span> <span class="token number">1000</span>
    wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            b<span class="token punctuation">.</span><span class="token function">Deposit</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
            wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span><span class="token function">Balance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">//972000,962000,941000</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6211\u4EEC\u8FD9\u91CC\u4E3E\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\uFF0C\u5F53\u524D\u53D8\u91CF\u7684\u503C\u589E\u52A0 <code>b.balance += amount</code></p><p>\u5F53\u7136\uFF0C\u5BF9\u4E8E\u53EA\u6709\u4E00\u4E2A\u534F\u7A0B\u7684\u7A0B\u5E8F\u6765\u8BF4\uFF0C\u4E0A\u9762\u7684\u4EE3\u7801\u6CA1\u6709\u4EFB\u4F55\u95EE\u9898\u3002\u4F46\u662F\uFF0C\u5982\u679C\u6709\u591A\u4E2A\u534F\u7A0B\u5E76\u53D1\u8FD0\u884C\u65F6\uFF0C\u5C31\u4F1A\u53D1\u751F\u9519\u8BEF\uFF0C\u8FD9\u79CD\u60C5\u51B5\u5C31\u79F0\u4E4B\u4E3A\u6570\u636E\u7ADE\u4E89(data race)\u3002\u4F7F\u7528\u4E0B\u9762\u7684\u4E92\u65A5\u9501 <code>Mutex</code> \u5C31\u80FD\u907F\u514D\u8FD9\u79CD\u60C5\u51B5\u7684\u53D1\u751F\u3002</p><h2 id="_1-2-\u4E92\u65A5\u9501-mutex" tabindex="-1"><a class="header-anchor" href="#_1-2-\u4E92\u65A5\u9501-mutex" aria-hidden="true">#</a> 1.2 \u4E92\u65A5\u9501 Mutex</h2><p><strong>\u4E92\u65A5\u9501(Mutex\uFF0Cmutual exclusion)</strong> \u7528\u4E8E\u63D0\u4F9B\u4E00\u79CD <strong>\u52A0\u9501\u673A\u5236(Locking Mechanism)</strong> \uFF0C\u53EF\u786E\u4FDD\u5728\u67D0\u65F6\u523B\u53EA\u6709\u4E00\u4E2A\u534F\u7A0B\u5728\u4E34\u754C\u533A\u8FD0\u884C\uFF0C\u4EE5\u9632\u6B62\u51FA\u73B0\u7ADE\u4E89\u3002\u4E5F\u662F\u4E3A\u4E86\u6765\u4FDD\u62A4\u4E00\u4E2A\u8D44\u6E90\u4E0D\u4F1A\u56E0\u4E3A\u5E76\u53D1\u64CD\u4F5C\u800C\u5F15\u8D77\u51B2\u7A81\u5BFC\u81F4\u6570\u636E\u4E0D\u51C6\u786E\u3002</p><p><code>Mutex</code> \u6709\u4E24\u4E2A\u65B9\u6CD5\uFF0C\u5206\u522B\u662F <code>Lock()</code> \u548C <code>Unlock()</code> \uFF0C\u5373\u5BF9\u5E94\u7684\u52A0\u9501\u548C\u89E3\u9501\u3002\u5728 <code>Lock()</code> \u548C <code>Unlock()</code> \u4E4B\u95F4\u7684\u4EE3\u7801\uFF0C\u90FD\u53EA\u80FD\u7531\u4E00\u4E2A\u534F\u7A0B\u6267\u884C\uFF0C\u5C31\u80FD\u907F\u514D\u7ADE\u4E89\u6761\u4EF6\u3002</p><p>\u5982\u679C\u6709\u4E00\u4E2A\u534F\u7A0B\u5DF2\u7ECF\u6301\u6709\u4E86<strong>\u9501(Lock)</strong>\uFF0C\u5F53\u5176\u4ED6\u534F\u7A0B\u8BD5\u56FE\u83B7\u5F97\u8BE5\u9501\u65F6\uFF0C\u8FD9\u4E9B\u534F\u7A0B\u4F1A\u88AB\u963B\u585E\uFF0C\u76F4\u5230<code>Mutex</code>\u89E3\u9664\u9501\u5B9A\u3002</p><p>\u4E0B\u9762\u4F7F\u7528\u4E00\u4E2A\u4F8B\u5B50\u6765\u8BB2\u4E00\u8BB2\u4E92\u65A5\u9501\u7684\u4F7F\u7528 \uFF1A</p><div class="language-GO ext-GO"><pre class="language-GO"><code>
package main

import (
    &quot;fmt&quot;
    &quot;sync&quot;
)

type BankV2 struct {
    balance int
    m       sync.Mutex
}

func (b *BankV2) Deposit(amount int) {
    b.m.Lock()
    b.balance += amount
    b.m.Unlock()
}

func (b *BankV2) Balance() int {
    return b.balance
}

func main() {
    var wg sync.WaitGroup
    b := &amp;BankV2{}

    n := 1000
    wg.Add(n)
    for i := 1; i &lt;= n; i++ {
        go func() {
            b.Deposit(1000)
            wg.Done()
        }()
    }
    wg.Wait()
    fmt.Println(b.Balance()) //1000000
}
</code></pre></div><p>\u4E3A\u4E86\u89E3\u51B3\u7ADE\u4E89\u95EE\u9898\uFF0C\u6211\u4EEC\u5C31\u8981\u5BF9 <code>Deposit</code> \u8FD9\u4E2A\u65B9\u6CD5\u4E2D\u52A0\u4E0A\u4E92\u65A5\u9501\uFF0C\u4F7F\u540C\u4E00\u65F6\u523B\uFF0C\u53EA\u80FD\u6709\u4E00\u4E2A\u534F\u7A0B\u5BF9 <code>balance</code> \u8FDB\u884C\u64CD\u4F5C\uFF1A</p><p>\u66F4\u6539\u540E\u7684\u4EE3\u7801\u4E0D\u7BA1\u8FD0\u884C\u591A\u5C11\u6B21\uFF0C\u90FD\u53EA\u4F1A\u8F93\u51FA\u4E00\u4E2A\u7ED3\u679C\uFF0C\u90A3\u5C31\u662F <code>1000000</code> \u3002</p><p>\u4F7F\u7528\u4E92\u65A5\u9501\u5F88\u7B80\u5355\uFF0C\u4F46\u8981\u6CE8\u610F\u540C\u4E00\u534F\u7A0B\u91CC\u4E0D\u8981\u5728\u5C1A\u672A\u89E3\u9501\u65F6\u518D\u6B21\u52A0\u9501\uFF0C\u4E5F\u4E0D\u8981\u5BF9\u5DF2\u7ECF\u89E3\u9501\u7684\u9501\u518D\u6B21\u89E3\u9501\u3002</p><p>\u5F53\u7136\uFF0C\u4F7F\u7528\u901A\u9053\u4E5F\u53EF\u4EE5\u5904\u7406\u7ADE\u4E89\u6761\u4EF6\uFF0C\u628A\u901A\u9053\u4F5C\u4E3A\u9501\u5728\u524D\u9762\u8BB2\u901A\u9053\u7684\u65F6\u5019\u5DF2\u7ECF\u8BB2\u8FC7\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u518D\u8D58\u8FF0\u3002</p><h2 id="_1-3-\u8BFB\u5199\u9501-rwmutex" tabindex="-1"><a class="header-anchor" href="#_1-3-\u8BFB\u5199\u9501-rwmutex" aria-hidden="true">#</a> 1.3 \u8BFB\u5199\u9501 RWMutex</h2><p><code>sync.RWMutex</code> \u7C7B\u578B\u5B9E\u73B0\u8BFB\u5199\u4E92\u65A5\u9501\uFF0C\u9002\u7528\u4E8E\u8BFB\u591A\u5199\u5C11\u7684\u573A\u666F\uFF0C\u5B83\u89C4\u5B9A\u4E86\u5F53\u6709\u4EBA\u8FD8\u5728\u8BFB\u53D6\u6570\u636E\uFF08\u5373\u8BFB\u9501\u5360\u7528\uFF09\u65F6\uFF0C\u4E0D\u5141\u8BB8\u6709\u4EBA\u66F4\u65B0\u8FD9\u4E2A\u6570\u636E\uFF08\u5373\u5199\u9501\u4F1A\u963B\u585E\uFF09\uFF1B\u4E3A\u4E86\u4FDD\u8BC1\u7A0B\u5E8F\u7684\u6548\u7387\uFF0C\u591A\u4E2A\u4EBA\uFF08\u534F\u7A0B\uFF09\u8BFB\u53D6\u6570\u636E\uFF08\u62E5\u6709\u8BFB\u9501\uFF09\u65F6\uFF0C\u4E92\u4E0D\u5F71\u54CD\u4E0D\u4F1A\u9020\u6210\u963B\u585E\uFF0C\u5B83\u4E0D\u4F1A\u50CF <code>Mutex</code> \u90A3\u6837\u53EA\u5141\u8BB8\u6709\u4E00\u4E2A\u4EBA\uFF08\u534F\u7A0B\uFF09\u8BFB\u53D6\u540C\u4E00\u4E2A\u6570\u636E\u3002\u8BFB\u9501\u4E0E\u8BFB\u9501\u517C\u5BB9\uFF0C\u8BFB\u9501\u4E0E\u5199\u9501\u4E92\u65A5\uFF0C\u5199\u9501\u4E0E\u5199\u9501\u4E92\u65A5\u3002</p><ul><li>\u53EF\u4EE5\u540C\u65F6\u7533\u8BF7\u591A\u4E2A\u8BFB\u9501\uFF1B</li><li>\u6709\u8BFB\u9501\u65F6\u7533\u8BF7\u5199\u9501\u5C06\u963B\u585E\uFF0C\u6709\u5199\u9501\u65F6\u7533\u8BF7\u8BFB\u9501\u5C06\u963B\u585E\uFF1B</li><li>\u53EA\u8981\u6709\u5199\u9501\uFF0C\u540E\u7EED\u7533\u8BF7\u8BFB\u9501\u548C\u5199\u9501\u90FD\u5C06\u963B\u585E\u3002</li></ul><p>\u5B9A\u4E49\u4E00\u4E2A <code>RWMuteux</code> \u8BFB\u5199\u9501\uFF1A</p><div class="language-GO ext-GO"><pre class="language-GO"><code>
var rwMutex sync.RWMutex
</code></pre></div><p><code>RWMutex</code> \u91CC\u63D0\u4F9B\u4E86\u4E24\u79CD\u9501\uFF0C\u6BCF\u79CD\u9501\u5206\u522B\u5BF9\u5E94\u4E24\u4E2A\u65B9\u6CD5\uFF0C\u4E3A\u4E86\u907F\u514D\u6B7B\u9501\uFF0C\u4E24\u4E2A\u65B9\u6CD5\u5E94\u6210\u5BF9\u51FA\u73B0\uFF0C\u5FC5\u8981\u65F6\u8BF7\u4F7F\u7528 <code>defer</code> \u3002</p><ul><li>\u8BFB\u9501\uFF1A\u8C03\u7528 <code>RLock</code> \u65B9\u6CD5\u5F00\u542F\u9501\uFF0C\u8C03\u7528 <code>RUnlock</code> \u91CA\u653E\u9501\uFF1B</li><li>\u5199\u9501\uFF1A\u8C03\u7528 <code>Lock</code> \u65B9\u6CD5\u5F00\u542F\u9501\uFF0C\u8C03\u7528 <code>Unlock</code> \u91CA\u653E\u9501\u3002</li></ul><div class="language-GO ext-GO"><pre class="language-GO"><code>
package main

import (
    &quot;fmt&quot;
    &quot;sync&quot;
    &quot;time&quot;
)

type BankV3 struct {
    balance int
    rwMutex sync.RWMutex // read write lock
}

func (b *BankV3) Deposit(amount int) {
    b.rwMutex.Lock() // write lock
    b.balance += amount
    b.rwMutex.Unlock() // wirte unlock
}

func (b *BankV3) Balance() (balance int) {
    b.rwMutex.RLock() // read lock
    balance = b.balance
    b.rwMutex.RUnlock() // read unlock
    return
}

func main() {
    var wg sync.WaitGroup
    b := &amp;BankV3{}

    n := 1000
    wg.Add(n)
    for i := 1; i &lt;= n; i++ {
        go func() {
            b.Deposit(1000)
            wg.Done()
        }()
    }
    wg.Wait()
    fmt.Println(b.Balance())
}
</code></pre></div><h2 id="_1-4-\u6761\u4EF6\u53D8\u91CF-sync-cond" tabindex="-1"><a class="header-anchor" href="#_1-4-\u6761\u4EF6\u53D8\u91CF-sync-cond" aria-hidden="true">#</a> 1.4 \u6761\u4EF6\u53D8\u91CF sync.Cond</h2><p>Cond \u5B9E\u73B0\u4E86\u4E00\u4E2A\u6761\u4EF6\u53D8\u91CF\uFF0C\u5728 Locker \u7684\u57FA\u7840\u4E0A\u589E\u52A0\u7684\u4E00\u4E2A\u6D88\u606F\u901A\u77E5\u7684\u529F\u80FD\uFF0C\u4FDD\u5B58\u4E86\u4E00\u4E2A\u901A\u77E5\u5217\u8868\uFF0C\u7528\u6765\u5524\u9192\u4E00\u4E2A\u6216\u6240\u6709\u56E0\u7B49\u5F85\u6761\u4EF6\u53D8\u91CF\u800C\u963B\u585E\u7684 Go \u7A0B\uFF0C\u4EE5\u6B64\u6765\u5B9E\u73B0\u591A\u4E2A Go \u7A0B\u95F4\u7684\u540C\u6B65\u3002</p><div class="language-GO ext-GO"><pre class="language-GO"><code>
type Cond struct {
    ...
    L Locker
    ...
}

// \u521B\u5EFA\u4E00\u4E2A\u5E26\u9501\u7684\u6761\u4EF6\u53D8\u91CF\uFF0CLocker \u901A\u5E38\u662F\u4E00\u4E2A *Mutex \u6216 *RWMutex
func NewCond(l Locker) *Cond

// \u5524\u9192\u6240\u6709\u56E0\u7B49\u5F85\u6761\u4EF6\u53D8\u91CF c \u963B\u585E\u7684 goroutine
func (c *Cond) Broadcast()

// \u5524\u9192\u4E00\u4E2A\u56E0\u7B49\u5F85\u6761\u4EF6\u53D8\u91CF c \u963B\u585E\u7684 goroutine
func (c *Cond) Signal()

// \u7B49\u5F85 c.L \u89E3\u9501\u5E76\u6302\u8D77 goroutine\uFF0C\u5728\u7A0D\u540E\u6062\u590D\u6267\u884C\u540E\uFF0CWait \u8FD4\u56DE\u524D\u9501\u5B9A c.L\uFF0C
// \u53EA\u6709\u5F53\u88AB Broadcast \u548C Signal \u5524\u9192\uFF0CWait \u624D\u80FD\u8FD4\u56DE\u3002
func (c *Cond) Wait()
</code></pre></div><p>\u6CE8\u610F\uFF1A\u5728\u8C03\u7528 Signal\uFF0CBroadcast \u4E4B\u524D\uFF0C\u5E94\u786E\u4FDD\u76EE\u6807 Go \u7A0B\u8FDB\u5165 Wait \u963B\u585E\u72B6\u6001\u3002</p><div class="language-GO ext-GO"><pre class="language-GO"><code>
func listen(name string, s []string, c *sync.Cond) {
    c.L.Lock()
    c.Wait()
    fmt.Println(name, &quot; \u62A5\u540D:&quot;, s)
    c.L.Unlock()
}

func broadcast(event string, c *sync.Cond) {
    time.Sleep(time.Second)
    c.L.Lock()
    fmt.Println(event)
    c.Broadcast()
    c.L.Unlock()
}

func main() {
    s1 := []string{&quot;\u5F20\u4E09&quot;}
    s2 := []string{&quot;\u8D75\u56DB&quot;}
    s3 := []string{&quot;\u5218\u80FD&quot;}
    var m sync.Mutex
    cond := sync.NewCond(&amp;m)

    // listener 1
    go listen(&quot;listener 1 &quot;, s1, cond)

    // listener 2
    go listen(&quot;listener 2&quot;, s2, cond)

    // listener 3
    go listen(&quot;listener 3&quot;, s3, cond)

    // broadcast
    go broadcast(&quot;\u79D2\u6740\u5F00\u59CB:&quot;, cond)

    ch := make(chan os.Signal, 1)
    signal.Notify(ch, os.Interrupt)
    &lt;-ch
}
</code></pre></div>`,31),c=[e];function p(u,i){return a(),s("div",null,c)}var r=n(o,[["render",p],["__file","1-\u5165\u95E8.html.vue"]]);export{r as default};
