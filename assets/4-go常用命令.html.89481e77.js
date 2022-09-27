import{_ as n,o,c as e,e as t}from"./app.cef7465c.js";const a={},i=t(`<h1 id="_1-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_1-\u547D\u4EE4" aria-hidden="true">#</a> 1. \u547D\u4EE4</h1><p>\u5047\u5982\u4F60\u5DF2\u5B89\u88C5\u4E86golang\u73AF\u5883\uFF0C\u4F60\u53EF\u4EE5\u5728\u547D\u4EE4\u884C\u6267\u884Cgo\u547D\u4EE4\u67E5\u770B\u76F8\u5173\u7684Go\u8BED\u8A00\u547D\u4EE4\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>$ go
Go is a tool for managing Go source code.

Usage:

    go command [arguments]

The commands are:

    build       compile packages and dependencies
    clean       remove object files
    doc         show documentation for package or symbol
    env         print Go environment information
    bug         start a bug report
    fix         run go tool fix on packages
    fmt         run gofmt on package sources
    generate    generate Go files by processing source
    get         download and install packages and dependencies
    install     compile and install packages and dependencies
    list        list packages
    run         compile and run Go program
    test        test packages
    tool        run specified go tool
    version     print Go version
    vet         run go tool vet on packages

Use &quot;go help [command]&quot; for more information about a command.

Additional help topics:

    c           calling between Go and C
    buildmode   description of build modes
    filetype    file types
    gopath      GOPATH environment variable
    environment environment variables
    importpath  import path syntax
    packages    description of package lists
    testflag    description of testing flags
    testfunc    description of testing functions

Use &quot;go help [topic]&quot; for more information about that topic.
</code></pre></div><p>go env\u7528\u4E8E\u6253\u5370Go\u8BED\u8A00\u7684\u73AF\u5883\u4FE1\u606F\u3002</p><p>go run\u547D\u4EE4\u53EF\u4EE5\u7F16\u8BD1\u5E76\u8FD0\u884C\u547D\u4EE4\u6E90\u7801\u6587\u4EF6\u3002</p><p>go get\u53EF\u4EE5\u6839\u636E\u8981\u6C42\u548C\u5B9E\u9645\u60C5\u51B5\u4ECE\u4E92\u8054\u7F51\u4E0A\u4E0B\u8F7D\u6216\u66F4\u65B0\u6307\u5B9A\u7684\u4EE3\u7801\u5305\u53CA\u5176\u4F9D\u8D56\u5305\uFF0C\u5E76\u5BF9\u5B83\u4EEC\u8FDB\u884C\u7F16\u8BD1\u548C\u5B89\u88C5\u3002</p><p>go build\u547D\u4EE4\u7528\u4E8E\u7F16\u8BD1\u6211\u4EEC\u6307\u5B9A\u7684\u6E90\u7801\u6587\u4EF6\u6216\u4EE3\u7801\u5305\u4EE5\u53CA\u5B83\u4EEC\u7684\u4F9D\u8D56\u5305\u3002</p><p>go install\u7528\u4E8E\u7F16\u8BD1\u5E76\u5B89\u88C5\u6307\u5B9A\u7684\u4EE3\u7801\u5305\u53CA\u5B83\u4EEC\u7684\u4F9D\u8D56\u5305\u3002</p><p>go clean\u547D\u4EE4\u4F1A\u5220\u9664\u6389\u6267\u884C\u5176\u5B83\u547D\u4EE4\u65F6\u4EA7\u751F\u7684\u4E00\u4E9B\u6587\u4EF6\u548C\u76EE\u5F55\u3002</p><p>go doc\u547D\u4EE4\u53EF\u4EE5\u6253\u5370\u9644\u4E8EGo\u8BED\u8A00\u7A0B\u5E8F\u5B9E\u4F53\u4E0A\u7684\u6587\u6863\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u628A\u7A0B\u5E8F\u5B9E\u4F53\u7684\u6807\u8BC6\u7B26\u4F5C\u4E3A\u8BE5\u547D\u4EE4\u7684\u53C2\u6570\u6765\u8FBE\u5230\u67E5\u770B\u5176\u6587\u6863\u7684\u76EE\u7684\u3002</p><p>go test\u547D\u4EE4\u7528\u4E8E\u5BF9Go\u8BED\u8A00\u7F16\u5199\u7684\u7A0B\u5E8F\u8FDB\u884C\u6D4B\u8BD5\u3002</p><p>go list\u547D\u4EE4\u7684\u4F5C\u7528\u662F\u5217\u51FA\u6307\u5B9A\u7684\u4EE3\u7801\u5305\u7684\u4FE1\u606F\u3002</p><p>go fix\u4F1A\u628A\u6307\u5B9A\u4EE3\u7801\u5305\u7684\u6240\u6709Go\u8BED\u8A00\u6E90\u7801\u6587\u4EF6\u4E2D\u7684\u65E7\u7248\u672C\u4EE3\u7801\u4FEE\u6B63\u4E3A\u65B0\u7248\u672C\u7684\u4EE3\u7801\u3002</p><p>go vet\u662F\u4E00\u4E2A\u7528\u4E8E\u68C0\u67E5Go\u8BED\u8A00\u6E90\u7801\u4E2D\u9759\u6001\u9519\u8BEF\u7684\u7B80\u5355\u5DE5\u5177\u3002</p><p>go tool pprof\u547D\u4EE4\u6765\u4EA4\u4E92\u5F0F\u7684\u8BBF\u95EE\u6982\u8981\u6587\u4EF6\u7684\u5185\u5BB9\u3002</p>`,15),s=[i];function p(r,c){return o(),e("div",null,s)}var g=n(a,[["render",p],["__file","4-go\u5E38\u7528\u547D\u4EE4.html.vue"]]);export{g as default};
