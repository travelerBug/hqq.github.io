# 使用PicGo配置七牛云图床

## 准备工作

#### 1. 1 下载PicGo安装

* 链接：https://pan.baidu.com/s/1kP-TTvBamHKBpmDSung4cw 
  提取码：tfvd 

#### 1.2 七牛云配置图床

* 注：需要准备一个自己的域名

![image-20220721212339949](http://downloadflies.com/blog-imgimage-20220721212339949.png)

#### 1.3 注册账号

登录[七牛官网](https://www.qiniu.com/)先注册一个账号

这里注意，用户类型选择个人账号，然后进行实名认证。

#### 1.4 创建云存储空间

![6c4fcf368c805a142c67076eef32a3e1](http://downloadflies.com/blog-img/6c4fcf368c805a142c67076eef32a3e1.png)

#### 1.5 给自己的域名添加二级域名

> 因为我的域名是阿里云的，所以这里用阿里云的举例

进入[阿里云域名列表](https://dc.console.aliyun.com/next/index?#/domain-list/all)

选择解析

![image-20220330003123314](http://downloadflies.com/blog-img/0747689e1cdc2205b238140aa93e8416.png)

然后添加一个二级域名，这个完了先不要关，等下还要改

![image-20220330003356467](http://downloadflies.com/blog-img/8de4e1820d58da359b6b48fada2b63ce.png)

4. 绑定二级域名
进入七牛云域名绑定页面，点击添加域名，然后下图只需要把刚刚配置的域名写上，然后其余默认就行，点击创建

<img src="http://downloadflies.com/blog-img/66cd88be1aa780a8fda147c1faea7b51.png" alt="image-20220330003544871" style="zoom:80%;" />

然后回到上一个页面，跟着下图操作



![image-20220330003733736](http://downloadflies.com/blog-img/61f324a844768635a01bb06b50866447.png)

![image-20220330003847097](http://downloadflies.com/blog-img/4699773498babd6a54a6016f80e908e1.png)

然后回到刚刚添加域名的页面，点击刚刚添加的域名，把www.baidu.com改成刚刚复制的东西

配置完了之后等一会，系统审核完成后会发邮件，等状态变成成功说明配置完成了

![image-20220330003733736](http://downloadflies.com/blog-img/61f324a844768635a01bb06b50866447.png)

![image-20220330003847097](http://downloadflies.com/blog-img/4699773498babd6a54a6016f80e908e1.png)

5. 配置PicGO
进入七牛云页面，右上角头像->密钥管理->复制 AccessKey和SecretKey到PicGo中，

存储空间名是你第二步建立的空间的名字
网址是刚刚绑定的那个二级域名
存储区域：七牛云的存储区域（华东 z0，华北 z1，华南 z2，北美 na0，东南亚 as0 ），根据你空间所在的区域，填对应的代码

![image-20220902162801655](https://downloadflies.com/blog-img/image-20220902162801655.png)



然后打开Typora粘贴一张照片测试一下，就可以发现能成功上传了，速度也很快（这里要等第四步成功了才可以上传成功）