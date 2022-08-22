### 引入第三方包

1.打开gomod方式，和设置下载点，在终端输入go env，查看是否更改成功。

```
go env -w GO111MODULE=on
go env -w GOPROXY=https://goproxy.io,direct
```

2.goget第三方包

```
go get github.com/rs/zerolog/log
```



可以看到在GoPath/pkg/mod/目录下会自动下载了文件

![Gopath：](https://downloadflies.com//blog-img/7bc403bdf75e4e32900d4e8e5c693196.png)