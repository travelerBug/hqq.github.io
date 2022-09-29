# unityhub 

---

### 新版本就用破解工具破解

### 老版本2.3.x

unity hub是用来管理unity项目和unity app的，在同事的推荐下安装了一个，试用了一下还不错。但是unity hub打开时需要登录账号，可是网络不太好，总是各种问题。于是，上网搜了一下破解的方法，不要每次启动都检查license。

具体步骤如下：

\1. 安装node, 安装 npm install -g asar

\2. 在控制台开一个Windows PowerShell，命令：

asar extract .\app.asar app

Remove-Item .\app.asar

\3. 修改步骤2中解开的文件：

\1) 找到：app\src\services\licenseService\licenseClient.js

getLicenseInfo(callback) {

   // load license

   // get latest data from licenseCore

   //licenseInfo.activated = licenseCore.getLicenseToken().length > 0;

   licenseInfo.activated = true;

 

\2) 找到：app\src\services\licenseService\licenseCore.js

verifyLicenseData(xml) { return new Promise((resolve, reject) => { resolve(true);

 

\4. 修改完成之后启动即可。

